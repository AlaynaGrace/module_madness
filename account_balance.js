var rand = require('./random_number');
var usd = require('./usd_converter');

function takeRand(random){
  return usd(random);
}

function accountBal(){
  return 'Account Balance: \n';
}

module.exports = {
  takeRandom: takeRand,
  accountBalance: accountBal
};
// module.exports = accountBal;
