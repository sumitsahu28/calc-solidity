function setStatus(message) {
	var status = document.getElementById("status");
	status.innerHTML = message;
};

function sum(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var self = this;
    axios.post('/api/add', {
		num1: num1,
		num2: num2
	}).then(function(response) {
        console.log('response',response);
        document.getElementById("result").value = response.data.results;
        self.setStatus("Addition successful");
        
	}).catch(function(e) {
        console.log('err',e)
		self.setStatus("Error in addition; see log." + e);
	});
}

function minus(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var self = this;
    axios.post('/api/sub', {
		num1: num1,
		num2: num2
	}).then(function(response) {
        console.log(response);
        document.getElementById("result").value = response.data.result;
        self.setStatus("Subtraction successful");
        
	}).catch(function(e) {
		self.setStatus("Error in Subtraction; see log." + e);
	});
}

function multi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var self = this;
    axios.post('/api/mul', {
		num1: num1,
		num2: num2
	}).then(function(response) {
        console.log(response);
        document.getElementById("result").value = response.data.result;
        self.setStatus("Multiplication successful");
        
	}).catch(function(e) {
		self.setStatus("Error in Multiplication; see log." + e);
	});
}

function div(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var self = this;
    axios.post('/api/div', {
		num1: num1,
		num2: num2
	}).then(function(response) {
        console.log(response);
        document.getElementById("result").value = response.data.result;
        self.setStatus("Division successful");
        
	}).catch(function(e) {
		self.setStatus("Error in Division; see log." + e);
	});
}