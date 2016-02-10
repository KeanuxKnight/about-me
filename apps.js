
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

//questions start here
