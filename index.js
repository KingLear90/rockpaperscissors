let manos = ["¡PIEDRA!", "¡PAPEL!", "¡TIJERA!"]
let machinePoints = 0
let humanPoints = 0

window.piedra = function (){
	
	let boton = document.getElementById("machine")
	let result = document.getElementById("result-El")
	let points = document.getElementById("puntos")
	let pointsHumano = document.getElementById("puntosHumano")
	
	let randomIndex = Math.floor ( Math.random() *3)
	
	boton.textContent = "La computadora eligió...... " + manos[randomIndex]
	
	if (manos[randomIndex] === "¡PIEDRA!") {
		result.textContent = "Es un empate!"
		machinePoints += 0
		humanPoints += 0
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	else if (manos[randomIndex] === "¡PAPEL!" ) {
		result.textContent = "Ufff... ¡Perdón, punto para mí! 😈"
		machinePoints += 1
		humanPoints += 0
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	else {
		result.textContent = "Ohhhh! ¡Punto para vos! 😰"
		machinePoints += 0
		humanPoints += 1
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	
	let finalEl = document.getElementById("final-El")
	let restartEl = document.getElementById("restart-El")
	let piedra = document.getElementById("piedra-El")
	let papel = document.getElementById("papel-El")
	let tijera = document.getElementById("tijera-El")
	
	if (machinePoints === 5) {
		finalEl.textContent = "LA COMPUTADORA GANÓ."
		piedra.onclick=" "
		papel.onclick=" "
		tijera.onclick=" "
		restartEl.style.display = 'inline-block'
		
	}
	if (humanPoints === 5) {
		finalEl.textContent = "¡FELICITACIONES, GANASTE!"
		piedra.onclick=" "
		papel.onclick=" "
		tijera.onclick=" "
		restartEl.style.display = 'inline-block'
	}
}

window.papel = function(){

	let boton = document.getElementById("machine")
	let result = document.getElementById("result-El")
	let points = document.getElementById("puntos")
	let pointsHumano = document.getElementById("puntosHumano")
	
	let randomIndex = Math.floor ( Math.random() *3)
	
	boton.textContent = "La computadora eligió...... " + manos[randomIndex]
	
	if (manos[randomIndex] === "¡PIEDRA!" ) {
		result.textContent = "Ok... Punto para vos! 😕"
		machinePoints += 0
		humanPoints += 1
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	else if (manos[randomIndex] === "¡PAPEL!" ) {
		result.textContent = "Papel con papel es más papel... es un empate!"
		machinePoints += 0
		humanPoints += 0
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	else {
		result.textContent = "Ups! Qué pena! Esta mano fue mía... 😈"
		machinePoints += 1
		humanPoints += 0
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	
	let finalEl = document.getElementById("final-El")
	let restartEl = document.getElementById("restart-El")
	let piedra = document.getElementById("piedra-El")
	let papel = document.getElementById("papel-El")
	let tijera = document.getElementById("tijera-El")
	
	if (machinePoints === 5) {
		finalEl.textContent = "LA COMPUTADORA GANÓ."
		piedra.onclick=" "
		papel.onclick=" "
		tijera.onclick=" "
		restartEl.style.display = 'inline-block'
	}
	if (humanPoints === 5) {
		finalEl.textContent = "¡FELICITACIONES, GANASTE!"
		piedra.onclick=" "
		papel.onclick=" "
		tijera.onclick=" "
		restartEl.style.display = 'inline-block'
	}
}

window.tijera = function() {
	
	let boton = document.getElementById("machine")
	let result = document.getElementById("result-El")
	let points = document.getElementById("puntos")
	let pointsHumano = document.getElementById("puntosHumano")
	
	let randomIndex = Math.floor ( Math.random() *3)
	
	boton.textContent = "La computadora eligió...... " + manos[randomIndex]
	
	if (manos[randomIndex] === "¡PIEDRA!" ) {
		result.textContent = "¡En otra será! Acá gané yo 😈"
		machinePoints += 1
		humanPoints += 0
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	else if (manos[randomIndex] === "¡PAPEL!" ) {
		result.textContent = "Ufffff, punto tuyo 😰"
		machinePoints += 0
		humanPoints += 1
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	}
	else {
		result.textContent = "No está mal... ¡Es un empate!"
		machinePoints += 0
		humanPoints += 0
		points.textContent = "COMP = " + machinePoints 
		pointsHumano.textContent = "VOS = " + humanPoints
	} 
	
	let finalEl = document.getElementById("final-El")
	let restartEl = document.getElementById("restart-El")
	let piedra = document.getElementById("piedra-El")
	let papel = document.getElementById("papel-El")
	let tijera = document.getElementById("tijera-El")
	
	if (machinePoints === 5) {
		finalEl.textContent = "LA COMPUTADORA GANÓ."
		piedra.onclick=" "
		papel.onclick=" "
		tijera.onclick=" "
		restartEl.style.display = 'inline-block'
	}
	if (humanPoints === 5) {
		finalEl.textContent = "¡FELICITACIONES, GANASTE!."
		piedra.onclick=" "
		papel.onclick=" "
		tijera.onclick=" "
		restartEl.style.display = 'inline-block'
	}

}


function restart() {
	location.reload();
}