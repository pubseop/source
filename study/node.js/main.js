var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring')
var template = require('./lib/template.js')
var path = require('path');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;
  if (pathname === '/') {
    if (title === undefined){
      fs.readdir('./data', function(error, fileList){ // 경로에있는 파일가져오기
        var title = 'Welcome'
        var description = 'Hello, Node.js'
        var list = template.list(fileList)
        var html = template.html(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`)
        response.writeHead(200);
        response.end(html);
      })
    } else {
      fs.readdir('./data', function(error, fileList){ // 경로에있는 파일가져오기
        var filteredId = path.parse(queryData.id).base
        var list = template.list(fileList)
        fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) { // 파일 읽기
          var html = template.html(title, list, `<h2>${title}</h2>${description}`, 
          `<a href="/update?id=${title}">update</a> 
          <form action="http://localhost:3000/delete_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <input type="submit" value="delete">
          </from>`)
          response.writeHead(200);
          response.end(html);
        })
      })
    }
  } else if(pathname === '/create'){
    fs.readdir('./data', function(error, fileList){ // 경로에있는 파일가져오기
      var title = 'WEB - ceate'
      var list = template.list(fileList)
      var html = template.html(title, list, `
        <form action="http://localhost:3000/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p><textarea name="description" placeholder="description"></textarea></p>
          <p><input type="submit"></p>
        </form>
      `, '')
      response.writeHead(200);
      response.end(html);
    })
  } else if(pathname === '/create_process'){
    var body = '';
    request.on('data', function(data){
      body = body + data;
    })
    request.on('end', function(){
      var post = qs.parse(body)
      var title = post.title
      var description = post.description
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){ // 파일생성
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      })
    })
  } else if(pathname === '/update'){
    fs.readdir('./data', function(error, fileList){ // 경로에있는 파일가져오기
      var filteredId = path.parse(queryData.id).base
      var list = template.list(fileList)
      fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) { // 파일 읽기
        var html = template.html(title, list, `
        <form action="http://localhost:3000/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" placeholder="title" value="${title}"></p>
          <p><textarea name="description" placeholder="description">${description}</textarea></p>
          <p><input type="submit"></p>
        </form>
        <h2>${title}</h2>${description}`, 
        `<a href="/update?id=${title}">update</a>`)
        response.writeHead(200);
        response.end(html);
      })
    })
  } else if(pathname === '/update_process'){
    var body = '';
    request.on('data', function(data){
      body = body + data;
    })
    request.on('end', function(){
      var post = qs.parse(body)
      var id = post.id
      var title = post.title
      var description = post.description
      fs.rename(`data/${id}`, `data/${title}`, function(err){ // 파일수정
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      })
    })
  } else if(pathname === '/delete_process'){
    var body = '';
    request.on('data', function(data){
      body = body + data;
    })
    request.on('end', function(){
      var post = qs.parse(body)
      var id = post.id
      fs.unlink(`data/${id}`, function(err){
        response.writeHead(302, {Location: '/'});
        response.end();
      })
    })
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);