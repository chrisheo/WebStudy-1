/**
 * ejs 뷰 템플릿 적용하기
 * 
 * 뷰 템플릿을 만들고 응답 웹문서를 템플릿으로부터 생성
 *
 * @date 2016-11-10
 * @author Mike
 */
 

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , static = require('serve-static')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');
  

// 모듈로 분리한 설정 파일 불러오기
var config = require('./config/config');

// 모듈로 분리한 데이터베이스 파일 불러오기
var database = require('./database/database');

// 모듈로 분리한 라우팅 파일 불러오기
var route_loader = require('./routes/route_loader');

var crypto = require('crypto');

var passport = require('passport');
var flash = require('connect-flash');

var socketio = require('socket.io');
var cors = require('cors');

// 익스프레스 객체 생성
var app = express();


//===== 뷰 엔진 설정 =====//
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
console.log('뷰 엔진이 ejs로 설정되었습니다.');


//===== 서버 변수 설정 및 static으로 public 폴더 설정  =====//
console.log('config.server_port : %d', config.server_port);
app.set('port', process.env.PORT || 3000);
 

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));
 
// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


var configPassport = require('./config/passport')
configPassport(app, passport);

//라우팅 정보를 읽어들여 라우팅 설정
var router = express.Router()
route_loader.init(app, router);


var userPassport = require('./routes/user_passport');
userPassport(router, passport);


//===== 404 에러 페이지 처리 =====//
var errorHandler = expressErrorHandler({
 static: {
   '404': './public/404.html'
 }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


//===== 서버 시작 =====//

//확인되지 않은 예외 처리 - 서버 프로세스 종료하지 않고 유지함
process.on('uncaughtException', function (err) {
	console.log('uncaughtException 발생함 : ' + err);
	console.log('서버 프로세스 종료하지 않고 유지함.');
	
	console.log(err.stack);
});

// 프로세스 종료 시에 데이터베이스 연결 해제
process.on('SIGTERM', function () {
    console.log("프로세스가 종료됩니다.");
    app.close();
});

app.on('close', function () {
	console.log("Express 서버 객체가 종료됩니다.");
	if (database.db) {
		database.db.close();
	}
});

// 시작된 서버 객체를 리턴받도록 합니다. 
var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));

	// 데이터베이스 초기화
	database.init(app, config);
   
});



var io = socketio.listen(server);
console.log('socket.io 요청을 받아들일 준비가 되었습니다.0');


var login_ids = {};

io.sockets.on('connection', function(socket) { 
    console.log('connection info -> ' +
    JSON.stringify(socket.request.connection._peername));

    socket.remoteAddress = socket.request.connection._peername.address;
    socket.remotePort = socket.request.connection._peername.port;
    
    socket.on('login', function(input) {
        console.log('login 받음 -> ' + JSON.stringify(input));
        
        login_ids[input.id] = socket.id;
        socket.login_id = input.id
        
        sendResponse(socket, 'login', 200, 'OK');
    });
    
    socket.on('message', function(message) {
        console.log('message 받음 -> ' + JSON.stringify(message));

        if(message.recepient == 'ALL') {
            console.log('모든 클라이언트에게 메시지 전송함.');
            
            io.sockets.emit('message', message);
        } else {
            if(login_ids[message.recepient]) {
                io.sockets.connected[login_ids[message.recepient]].emit('message', message);
                
                sendResponse(socket, 'message', 200, 'OK');
            } else {
                sendResponse(socket, 'message', 400, '상대방 ID를 찾을 수 없습니다.');
            }   
        }
    });
    
    socket.on('room', function(input) {
        console.log('room 받음 -> ' + JSON.stringify(input));
        
        if (input.command == 'create') {
            if (io.sockets.adapter.rooms[input.roomId]) {
                console.log('이미 방이 만들어져 있습니다.');
            } else {
                console.log('새로 방을 만듭니다.');
                
                socket.join(input.roomId);
                
                var curRoom = io.sockets.adapter.rooms[input.roomId];
                curRoom.id = input.roomId;
                curRoom.name = input.roomName;
                curRoom.owner = input.roomOwner;
                
            }
            
        } else if (input.command == 'update') {
            var curRoom = io.sockets.adapter.rooms[input.roomId];
            curRoom.name = input.roomName;
            curRoom.owner = input.roomOwner;
            
        } else if (input.command == 'delete') {
            socket.leave(input.roomId);
            
            if (io.sockets.adapter.rooms[input.roomId]) {
                delete io.sockets.adapter.rooms[input.roomId];
            } else {
                console.log('방이 만들어져 있지 않습니다.');
            }
            
        }
        
        var rooms = getRoomList();
        var output = {
            command: 'list',
            rooms: rooms
        };
        
        io.sockets.emit('room', output);
    });
    
});

function getRoomList() {
    console.log('getRoomList 호출됨.');
    console.log('ROOMS -> ' + JSON.stringify(io.sockets.adapter.rooms));
    
    var rooms = [];
    
    Object.keys(io.sockets.adapter.rooms).forEach(function(roomId) {
        console.log('현재 방 ID : ' + roomId);
        var curRoom = io.sockets.adapter.rooms[roomId];
        
        var found = false
        Object.keys(curRoom.sockets).forEach(function(key) {
            if (roomId == key) {
                found = true;
            }
        });
        
        if (!found) {
            rooms.push(curRoom);
        }
    });
    
    return rooms;
}



function sendResponse(socket, command, code, message) {
    var output = {
        command: command,
        code: code,
        message: message
    };
    
    socket.emit('response', output);
    
}