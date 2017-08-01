var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/time', function(request, response) {
  response.render('pages/time');
});

app.get('/quem_somos', function(request, response) {
  response.render('pages/quem_somos');
});

app.listen(app.get('port'), function() {
  console.log('Aplicação Node rodando na porta', app.get('port'));
});
