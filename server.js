//require http so I can create a server
var http = require('http');
//require my account and random files so I can use their functions
var account = require('./account_balance');
var rand = require('./random_number');

//create the server
http.createServer(function(req,res){
  res.writeHead(200); //200 is a safe code
  //write 'account balance: ' and put up a random balance using functions
  res.write(account.accountBalance() + account.takeRandom(rand(100,1000000)));
  //end it so it can send the response
  res.end();

}).listen(3000); //listen to port 3000
