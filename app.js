var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


var mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, "/tpl"));

//app.set('view engine', 'pug');
//app.set("views", path.join(__dirname, "/tpl"));
app.use(express.static('public'));



app.get(['/', '/index'], function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render('index.html');
});

app.get('/portfolio', function(req, res){          
    res.render('portfolio.html');
});

app.get('/translator', function(req, res){          
    res.render('translator.html');
});

 app.get('/en/index', function(req, res){          
 res.render('en/index.html');
 });

 app.get('/en/portfolio', function(req, res){   
    res.render('en/portfolio.html');      
 });




var port = process.env.PORT || 5000;       
app.listen(port)                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
console.log("Listening at " + port)        // Пишем в консоль, что запустились