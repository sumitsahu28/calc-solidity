var address = require('../address.js');
var contract = require('truffle-contract');
var calc_artifacts = require('../build/contracts/Calc.json');

var Calc = contract(calc_artifacts);
Calc.setProvider(web3.currentProvider);

var accounts;
var account;

var errorMessage = "";
function start() {
	var self = this;
	Calc.setProvider(web3.currentProvider);
	return new Promise(function(resolve, reject) {

	
	web3.eth.getAccounts(function(err, accs) {
		if (err != null) {
			errorMessage = "There was an error fetching your accounts.";
			return;
		}
		if (accs.length == 0) {
			errorMessage = "Couldn't get any accounts! Make sure your Ethereum client is configured correctly.";
			return;
		}
		accounts = accs;
		account = accounts[0];
		console.log('account1',account);
		resolve(account);
		reject(err);
	});
});
}

module.exports = {
	multipn: function(req, res, next) {
		console.log("testing ok");
		start()
		.then(function(response) {
			console.log("response",response);
			console.log('account',account);
			var self = this;
			var num1 = parseInt(req.body.num1);
			var num2 = parseInt(req.body.num2);
			console.log(num1, num2);
			var calc;
			Calc.deployed().then(function(instance) {
				console.log('hello');
				console.log('instance',instance);
				calc = instance;
				return calc.mulNumbers.call(num1, num2, {from: account});
			}).then(function(response) {
				console.log(response);
				res.json({message: "Success", result: response});
			}).catch(function(e) {
				console.log(e);
				res.json({message: "Failure", Error: e, errorMessage: errorMessage})
			});
		})
		.catch(function(e) {
			console.log("error:",e);
		});
		
	}
}

