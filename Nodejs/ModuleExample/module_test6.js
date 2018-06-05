var require = function(path) { 
    var exports = {};
    
    exports.getUser = function() {
            return {id:'test01', name:'김인직'};
    };
    
    exports.group = {id:'group01', name:'찍'};
    
    return exports;
}

var user = require('...');

function showUser() {
    return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보 : ' + showUser());