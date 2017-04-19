var http = require('http');
var account = require('./account_balance');
var rand = require('./random_number');

http.createServer(function(req,res){
  res.writeHead(200);
  res.write(account.accountBalance() + account.takeRandom(rand(0,1000000)));
  res.end();

}).listen(3000);
