var calNumbs = [];
var result = document.getElementById("result");
var display = document.getElementById("sum");	
var num = "";
var sum
function insert(n) {
	display.value += n;
	
	if (n == "c") {
		display.value = "";
		result.value = "";
		calNumbs = [];
	}
	else {
		num += n;
	}
}

function operator(s) {
	display.value += s;
	calNumbs.push(num);
	calNumbs.push(s);
	num = "";
}

function answer() {
	calNumbs.push(num);
	num = "";
	console.log(calNumbs);
	var num1 = parseInt(calNumbs[0]);
	var num2 = parseInt(calNumbs[2]);
	if (calNumbs[1] == "+") {
		result.value = num1+num2;
	}
	else if (calNumbs[1] == "-") {
		result.value = num1-num2;
	}
	else if (calNumbs[1] == "*") {
		result.value = num1*num2;
	}
	else if (calNumbs[1] == "/") {
		result.value = num1/num2;
	}
}