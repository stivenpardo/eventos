var express = require('express');
var bodyParser = require('body-parser')
const eventos = require("./datos.js")
var  connect = require("./connect/connect.js")
var app = express();
var MyConnect = new connect("eventos")
let ev = new eventos(MyConnect.getConnect())
// create application/json parser 
var jsonParser = bodyParser.json()
app.use('/',express.static(__dirname + '/public')) //el __dirname es una varible del sistema

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/eventos',(req,res)=>{
	let gEvento = ev.getEvento()
	gEvento.then(resp=>{
		res.send(resp)
	})
});

app.get('/eventos/:id',(req,res)=>{
	let ge = ev.getEventoById(req.params.id)
	ge.then(resp=>{
		res.send(resp)
	})
});

app.post('/eventos', jsonParser,(req, res) => {
  const resp = ev.setEvento(req.body) 
  res.send(resp)
});

app.put('/eventos/:id', jsonParser,(req, res) => {
  const resp = ev.updateEvento(req.body,req.params.id) 
  res.send(resp)
});

app.delete('/eventos/:id',(req,res)=>{
	const resp = ev.deleteEvento(req.params.id)
	res.send(resp)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/eventos/inscripcion/:name',(req,res)=>{
	let gInscription = ev.getInscripcionByName(req.params.name)
	gInscription.then(resp=>{
		res.send(resp)
	})
});

app.get('/eventos/inscripcion',(req,res)=>{
	let getInscripcion = ev.getInscripcion()
	getInscripcion.then(resp=>{
		res.send(resp)
	})
});