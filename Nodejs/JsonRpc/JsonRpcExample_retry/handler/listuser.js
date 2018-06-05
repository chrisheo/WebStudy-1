
var listuser = function(params, callback) {
    console.log('RPC - listuser 호출됨.');    
    console.log('PARAMS -> ' + JSON.stringify(params));
    
    var database = global.database;
    if (database) {
        console.log('database 객체 참조에 성공함.');
    } else {
        console.log('database 객체 참조에 실패함.');
        
        var error = {
            code: 410,
            message: 'database 객체 없음.'
        };
        callback(error, null);
        
        return;
    }
    
    if (database.db) {
        database.UserModel.findAll(function(err, results) {
            if(err) {
                var error = {
                    code: 410,
                    message: err.message
                };
                callback(error, null);
                
                return;
            }
            
            if(results) {
                var output = [];
                for (var i = 0; i < results.length; i++) {
                    var curId = results[i]._doc.id;
                    var curName = results[i]._doc.name;
                    output.push({id:curId, name:curName});
                }
                
                callback(null, output);
            } else {
                var error = {
                    code: 410,
                    message: 'database 조회 결과가 없습니다.'
                };
                callback(error, null);
                
                return;  
            }
        });
    }
        
};

module.exports = listuser;