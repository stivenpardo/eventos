function save(){
	var id = document.getElementById('idevento').value;
	fetch('./eventos/'+ id)
	.then(response => {
		return response.json()
		console.log(response.json())
	})
	.then(myjson => {
		//console.log(myjson)
		//document.getElementById('nomevento').value=myjson[0].nombre_evento
	})
}