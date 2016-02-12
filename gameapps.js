var startgame = prompt('Would you like to play a quick game of memory.  Y/N');
console.log('ST = Y');
if (startgame.toUpperCase() == 'Y') {
  var startgame = ('C');
  console.log('ST = C');
}else if (startgame.toUpperCase() == 'N'){
  console.log("good bye for now");
  System.exit(0);
}else {
  alert('that was not a viable input, please follow instructions.');
}

if (startgame == 'C') {
  var userName = prompt('what is your name?');
  console.log('User\'s name = ' + userName);
  alert('Welcome ' + userName);
}else {
  location.reload();
}

//presets
var cScore = 0;
var iScore = 0;
console.log('score:');
var ca = 'start';
var aout = document.getElementById('Question1');
console.log('text said = ' + aout);

var q1 = prompt('What is the music of life');
if (q1.toUpperCase() === 'silence my brother') {
  ca = "T";

}else {
  ca = "F";
  
}
console.log('ca ' + ca);


function QA() {
  if (ca = "T") {
  aout.textContent = ('Welcome brother, ' + userName);

}else if (ca = 'F') {
   aout.textContent = 'You are not one of us, leave.'
  }
}
console.log("aout " + aout);

QA()
