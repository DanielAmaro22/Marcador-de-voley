let scoreA = 0
let scoreB = 0

function addPoint(team){
  if (scoreA != 25 && scoreB !=25) {
    if (team === 'A'){
      scoreA ++;
      document.getElementById("scoreA").textContent = scoreA;
    }
     else if (team === 'B'){
      scoreB ++;
      document.getElementById("scoreB").textContent = scoreB;
    }
  }
  else if (scoreA === 25 && (scoreA - scoreB)>1){
    alert ("Ganador team A")
  }
  else if (scoreB === 25 && (scoreB - scoreA)>1){
    alert ("Ganador team B")
  }
}

function subtractPoint(team){
  if (team === "A" && scoreA > 0){
    scoreA --;
    document.getElementById("scoreA").textContent= scoreA
  }
  else if (team === "B" && scoreB > 0){
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
