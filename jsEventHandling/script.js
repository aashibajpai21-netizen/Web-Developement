function BulbON() {
  document.getElementById("bulb1").style.backgroundColor = "Yellow";
}
function BulbOFF() {
  document.getElementById("bulb1").style.backgroundColor = "White";
}
function BulbON1() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function BulbON2() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}
document
  .getElementById("bulbcolor")
  .addEventListener("change", ChangeBulbColor);

function ChangeBulbColor() {
  const color = document.getElementById("bulbcolor").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}

document.getElementById("result").addEventListener("change", bg);
function bg() {
  const color1 = document.getElementById("result").value;
  document.getElementById("para").style.backgroundColor = color1;
}
document.getElementById("result1").addEventListener("change", bg1);

function bg1() {
  const color2 = document.getElementById("result1").value;
  document.getElementById("para1").style.color = color2;
}

document.getElementById("result2").addEventListener("change", bg3);

function bg3() {
  const color3 = document.getElementById("result2").value;
  document.getElementById("para2").style.color = color3;
}
function reset() {
window.location.reload();
}
