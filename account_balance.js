//need both my random number function and my usd converter
//var rand = require('./random_number');
var usd = require('./usd_converter');

//first function requires a random number (but can take any number)
function takeRand(random){
  return usd(random); //returns the number after being converted to usd form
}

//second function used purely to give the string 'Account Balance: \n'
function accountBal(){
  return 'Account Balance: \n';
}

//need to export multiple functions
//export multiple modules by using an object
module.exports = {
  takeRandom: takeRand,
  accountBalance: accountBal
};
// module.exports = accountBal;
