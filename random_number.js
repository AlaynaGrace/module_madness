//random number generator taken from class
//credit: Prime Digital Academy
function randomNumber(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber; //export the function so it can be used in other modules
