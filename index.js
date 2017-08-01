var express = require('express');
var app = express();
var seo = require('express-seo')(app);

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

//seo configuration
// For internatanalization, set the supported languages
seo.setConfig({
    langs: ["pt-br", "en", "fr"]
});

// Set the default tags
seo.setDefaults({
    html: "<a href='https://twitter.com/servicerio'>Siga-nos no Twitter</a>", // Special property to insert html in the body (interesting to insert links)
    title: "Todos os serviços do Rio em um só lugar", // Page title
    // All the other properties will be inserted as a meta property
    description: {
        en: "Check out Rio de Janeiro services website",
        fr: "Decouvez Rio services site"
    },
    image: "https://assets-cdn.github.com/images/modules/dashboard/bootcamp/octocat_setup.png"
});

// Create an seo route
seo.add("/quem_somos", function(req, opts, next) {

    req: Express request
    opts: Object {
        service: String ("servico" || "rio de janeiro" || "profissionais"),
        lang: String (Detected language)
    }

    next({
        description: "A melhor página de serviços do Rio"
    });
});
