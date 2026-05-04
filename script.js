let scoreA = 0
let scoreB = 0
let setA = 0
let setB = 0

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
    // alert("Set para team A!");/*2.muestra un mensage del ganador*/
    resetScore();/*3.resetea los puntos*/
    
    /*si llega a 3 set gana el partido*/
    if (setA === 3){
      // alert("¡Team A gana el partido!");
      // resetSet();
    }
    actualizarMarcador();/**/
    return;/*si el team A gana el set deja de ejecutarse para que no siga evaluando el codigo de abajo*/
  }
  
  if (scoreB >=puntosMax && scoreB - scoreA >=2){
    setB++;
    alert("Set para team B!");
    resetScore();
    if (setB === 3){
      // alert("¡Team B gana el partido!");
      // resetSet();
    }
    actualizarMarcador();
    return;
  }
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
  actualizarMarcador();
}

document.getElementById("resetMatch").addEventListener("click", resetMatch);
