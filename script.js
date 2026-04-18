let scoreA = 0
let scoreB = 0

function addPoint(team){
  
  if (team === 'A'){
    scoreA ++;
    document.getElementById("scoreA").textContent = scoreA;
  }
   else if (team === 'B'){
    scoreB ++;
    document.getElementById("scoreB").textContent = scoreB;
  }
  if (scoreA >=25 && scoreA - scoreB >0){
    alert("Ganador team A!")
  }
    if (scoreB >=25 && scoreB - scoreA >0)
    alert("Ganador team B!")
}

function subtractPoint(team){
  if (team === "A" && scoreA > 1){
    scoreA --;
    document.getElementById("scoreA").textContent= scoreA
  }
  else if (team === "B" && scoreB > 1){
    scoreB --;
    document.getElementById("scoreB").textContent= scoreB
  }  
}

function resetScore(){
  scoreA = 0;
  scoreB = 0;
  document.getElementById("scoreA").textContent= scoreA;
  document.getElementById("scoreB").textContent= scoreB;
}
