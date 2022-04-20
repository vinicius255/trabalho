var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('Boa Tarde');

  app.get('/login', function(req, res) {
    res.send('Fazer Login');
  });
});
app.get('/agendamento', function(req, res) {
  res.send('Fazer Agendamento');
});
app.get('/cadastro', function(req, res) {
  res.send('Fazer Cadastro');
});
app.listen(3000,()=>{
        console.log("lervidor ligado")
    })
