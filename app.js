let lista = prompt('Podaj uczestników losowania, oddzielając ich znakiem ;').split(';');
function losowanie() {
	const lista_index = Math.floor(Math.random() * lista.length);
	console.log(lista[lista_index]);
	document.querySelector('#status').innerHTML = (lista[lista_index] === undefined ? "Wszyscy uczestnicy zostali już wylosowani" : "Wylosowana osoba: " + lista[lista_index]);
	lista.splice(lista_index, 1)
}