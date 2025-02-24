var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/?id=home'){
        title = "Welcome";
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/?id=home">WEB</a></h1>
        <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${description}</p>
        </body>
        </html>
        `;
        response.end(template); // 사용자에게 전송하는 데이터가 바뀌는게 해주는 문
    })
});
console.log("서버 가동");
app.listen(3000);