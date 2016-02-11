
//play game conformation
//Y > C = continue N = cancels script
var startgame = prompt('Would you like to play a quick game of memory.  Y/N');
console.log('ST = Y')
if (startgame.toUpperCase() == 'Y') {
  var startgame = ('C');
  console.log('ST = C');
}else if (startgame.toUpperCase() == 'N'){
  console.log("good bye for now");
  System.exit(0);
}else {
  alert('that was not a viable input, please follow instructions.')
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

//questions start here @ Q1
var q1 = prompt('let us start off easy. What is my middle name? (Mouse over my name.)');
if (q1.toUpperCase() == 'MICHEAL') {
  alert('Good. That was easy, right.');
  var cScore = ++cScore;
}else {
  alert('Nope. Try harder next time.');
  var iScore = ++iScore;
}
console.log('S=' + cScore + ', ' + iScore);
// Q2 --------------------------------------------
var q2 = prompt('How old am I?');
if (q2 == 22) {
  alert('Good. That was easy, right.');
  var cScore = ++cScore;
}else {
  alert('Nope. Try harder next time.');
  var iScore = ++iScore;
}
console.log('S=' + cScore + ', ' + iScore);

// Q3 ---------------------------------------------
var q3 = prompt('how long did I do Ballet');
if (q3 == 7) {
  alert('Good.');
  var cScore = ++cScore;
}else {
  alert('Nope. Try harder next time.');
  var iScore = ++iScore;
}
console.log('S=' + cScore + ', ' + iScore);

// Q4 --------------------------------------------
var q4 = prompt('Did I ever Learn Karate?  Y/N');
if (q4.toUpperCase() == 'N') {
  alert('Good.');
 var cScore = ++cScore;
}else {
  alert('Nope. Try harder next time.');
 var iScore = ++iScore;
}
console.log('S=' + cScore + ', ' + iScore);

//Q5----------------------------------------------
var q4 = prompt('Do I have 5 siblings?  Y/N');
if (q4.toUpperCase() == 'N') {
  alert('Good. They are all half siblings.');
  var cScore = ++cScore;
}else {
  alert('Nope. They are all half siblings, but because this was a trick question, I\'ll give you the point.');
 var iScore = ++cScore;
}
console.log('S=' + cScore + ', ' + iScore);

//  The  End -----------------------------------------------
alert('Your score was')
alert(cScore + 'correct & ' + iScore + 'incorrect')
alert('your total is ' + (cScore - iScore) )
