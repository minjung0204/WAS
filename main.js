var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
        url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url)); // 사용자에게 전송하는 데이터가 바뀌는게 해주는 문

});
console.log("서버 가동");
app.listen(3000);