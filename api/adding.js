var address = require('../address.js');
var contract = require('truffle-contract');
var calc_artifacts = require('../build/contracts/Calc.json');

var Calc = contract(calc_artifacts);
Calc.setProvider(web3.currentProvider);

var accounts;
var account;

var errorMessage = "";
function start() {
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
		resolve(account);
		reject(err);
	});
});
}

module.exports = {
	addn: function(req, res, next) {
		start()
		.then(function(response) {
			var num1 = parseInt(req.body.num1);
			var num2 = parseInt(req.body.num2);
			var calc;
			Calc.deployed().then(function(instance) {
				calc = instance;
				return calc.addNumbers.call(num1, num2);
			}).then(function(response) {
				console.log("response:", response);
				res.json({message: "Success", results: response});
			}).catch(function(e) {
				console.log('e:',e);
				res.json({message: "Failure", Error: e, errorMessage: errorMessage})
			});
		})
		.catch(function(e) {
			console.log("error:",e);
		});
		
	}
}

