function getRatingJugador(){
	return fetch("https://api.chess.com/pub/player/VicenteMartn/stats")
	.then (response=>response.json())
	.then (data=>data.chess_rapid.best.rating); 	
}
const p = document.getElementById('rating jugador');

// Asignar el valor de la promesa al contenido del elemento P
getRatingJugador().then(data => {
  p.textContent = data;
});