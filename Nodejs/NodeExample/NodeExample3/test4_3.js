scala = function(count) {
    console.log('tick 이벤트 발생함 : ' + count);
};

process.on('tick', scala);

setTimeout(function() {
    console.log('2초 후에 시행되었음.');
    
    process.emit('tick', '3');
}, 2000) 