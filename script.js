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
  let puntosMax = (setA === 2 && setB === 2) ? 15 : 25;

  if (scoreA >=puntosMax && scoreA - scoreB >=2){
    setA++;
    alert("Set para team A!");
    resetScore();
    if (setA === 3){
      alert("¡Team A gana el partido!");
      resetSet();
    }
    actualizarMarcador();
    return;
  }
  
  if (scoreB >=puntosMax && scoreB - scoreA >=2){
    setB++;
    alert("Set para team B!");
    resetScore();
    if (setB === 3){
      alert("¡Team B gana el partido!");
      resetSet();
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
  
  document.getElementById("scoreA").textContent = scoreA;
  document.getElementById("scoreB").textContent = scoreB;
  document.getElementById("setA").textContent = setA;
  document.getElementById("setB").textContent = setB;
}

function resetScore(){
  scoreA = 0;
  scoreB = 0;
  document.getElementById("scoreA").textContent= scoreA;
  document.getElementById("scoreB").textContent= scoreB;
}

function resetSet(){
  setA = 0;
  setB = 0;
  document.getElementById("setA").textContent= setA;
  document.getElementById("setB").textContent= setB;
}
