let scoreA = 0
let scoreB = 0
let setA = 0
let setB = 0

function addPoint(team){
  
  if (team === 'A'){
    scoreA ++;
    document.getElementById("scoreA").textContent = scoreA;
  }
  else if (team === 'B'){
    scoreB ++;
    document.getElementById("scoreB").textContent = scoreB;
  }
  if (scoreA >=25 && scoreA - scoreB >=2){
    setA++;
    alert("Set para team A!");
    document.getElementById("setA").textContent= setA;
    resetScore();
    return;
  }
    if (scoreB >=25 && scoreB - scoreA >=2){
    setB++;
    alert("Set para team B!");
    document.getElementById("setB").textContent= setB;
    resetScore();
    return;
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
