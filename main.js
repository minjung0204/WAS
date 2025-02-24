var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    // console.log(_url);
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id); // 사용자에게 전송하는 데이터가 바뀌는게 해주는 문

});
console.log("서버 가동");
app.listen(3000);