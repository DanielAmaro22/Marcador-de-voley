let scoreA = 0;
let scoreB = 0;
let setA = 0;
let setB = 0;

function addPoint(team){
  
  if (team === 'A'){
    scoreA ++;
  }
  else if (team === 'B'){
    scoreB ++;
  }
  actualizarMarcador();
  comprobarGanador();
}
  
function comprobarGanador(){
  /*let puntosMax = si van 2-2 en set el ultimo sera de 15 si no se juega a 25*/
  let puntosMax = (setA === 2 && setB === 2) ? 15 : 25;

  /*para ganar el set debe tener por lo menos los puntosMax y una diferencia de 2*/
  if (scoreA >=puntosMax && scoreA - scoreB >=2){
    setA++;/*1.suma el set al ganador*/
    
    resetScore();/*3.resetea los puntos*/
    
    /*si llega a 3 set gana el partido*/
    if (setA === 3){
      showWinner("teamA");
    }
    actualizarMarcador();/**/
    return;/*si el team A gana el set deja de ejecutarse para que no siga evaluando el codigo de abajo*/
  }
  
  if (scoreB >=puntosMax && scoreB - scoreA >=2){
    setB++;
    
    resetScore();
    if (setB === 3){
      showWinner("teamB");
    }
    actualizarMarcador();
    return;
  }
}

function showWinner(equipo) {
    const msg = document.getElementById("ganador");
    const nombre = equipo === "teamA"? "A" : "B";
    msg.textContent = ` Felicitaciones equipo ${nombre}! ⭐`;
    // condicion en una linea: si el parametro pasado(equipo) es igual al valor comparado 
    // ejecuta el primer valor(letra color rojo) sino ejecuta lo segundo(letra color azul)
    msg.style.color = equipo === 'teamA' ? '#e05c5c' : '#5c8ee0';
    const botones = document.querySelectorAll(".buttonsPoint");
    botones.forEach(btn => { btn.disabled = true });
  }

function subtractPoint(team){
  
  if (team === "A" && scoreA > 0){
    scoreA --;
  }
  else if (team === "B" && scoreB > 0){
    scoreB --;
  } 
  actualizarMarcador();
}

function actualizarMarcador(){
  /*actualiza los puntos actuales de los sets y puntajes*/
  document.getElementById("scoreA").textContent = scoreA;
  document.getElementById("scoreB").textContent = scoreB;
  document.getElementById("setA").textContent = setA;
  document.getElementById("setB").textContent = setB;
}

function resetScore(){
  scoreA = 0;
  scoreB = 0;
  actualizarMarcador();
}

function resetMatch(){
  setA = 0;
  setB = 0;
  scoreA = 0;
  scoreB = 0;
  const msg = document.getElementById("ganador");
  msg.textContent = ""
  const botones = document.querySelectorAll(".buttonsPoint");
  botones.forEach(btn => { btn.disabled = false })

  actualizarMarcador();
}

document.getElementById("resetMatch").addEventListener("click", resetMatch);
