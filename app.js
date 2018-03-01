var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "/tpl"));
app.use(express.static('public'));


app.get(['/', '/index'], function(req, res){          // Обрабатываем запрос корневой страницы "/"
    res.render('index.pug');
});

app.get('/portfolio', function(req, res){          
    res.render('portfolio.pug');
});

 app.get('/en/index', function(req, res){          
 res.render('en/index.pug');
 });

 app.get('/en/portfolio', function(req, res){   
    res.render('en/portfolio.pug');      
 });




var port = process.env.PORT || 5000;       
app.listen(port)                           // Запускаем сервер на 5000 порту, если не указана переменная окружения "port" 
console.log("Listening at " + port)        // Пишем в консоль, что запустились