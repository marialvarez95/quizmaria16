var express = require('express');
var router = express.Router();

var quizController= require ('../controllers/quiz_controller');

/* GET home page. */
// crea la pagina index, con una sintaxis html que se define con express
//las vistas EJS se general en el objeto de respuesta res
// y se envian al cliente con res.render(vista,params) vista:nombres.ejs
//params: objeto con parametros a sustituir en vista
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
  //render se aplica a la respuesta ( renderiza )
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',quizController.answer);
// exportamos lo que hemos instalado
module.exports = router;
