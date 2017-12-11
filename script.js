var calNumbs = [];
var result = document.getElementById("result");
var display = document.getElementById("sum");	
var num = "";
var sumRes = "";

window.addEventListener("keydown", function (event) { 
	event = event || window.event;
	var key = event.key || event.which || event.keyCode;
	key = key.toLowerCase();
	console.log(key);
	if((key >= 0 && key <= 9) || key === "." || key === "c") {
		insert(key);
	}
	else if(["/", "*", "-", "+", "=", "enter"].includes(key)) {
		operator(key);
	}
});

function insert(n) {
	display.value += n;
	
	if (n == "c") {
		display.value = "";
		result.value = "";
		calNumbs = [];
		num = "";
		sumRes = "";
		count = 0;
	}
	else {
		num += n;
	}
	console.log(calNumbs);
}
var count = 0;
function operator(s) {
	display.value += s;
	calNumbs.push(num);
	num = "";
	console.log(calNumbs);
	count++;
	console.log(count);
	if (count == 2) {
		answer();
		calNumbs.splice(1, 1, s);
		display.value = result.value;
		display.value += s;
	}
	else {
		calNumbs.push(s);
	}
	if (["=", "enter"].includes(s)) {
		display.value = "";
	}
}

function answer() {
	calNumbs.push(num);
	num = "";
	console.log(calNumbs);
	var num1 = parseFloat(calNumbs[0]);
	var num2 = parseFloat(calNumbs[2]);
	if (calNumbs[1] == "+") {
		sumRes = num1+num2;
	}
	else if (calNumbs[1] == "-") {
		sumRes = num1-num2;
	}
	else if (calNumbs[1] == "*") {
		sumRes = num1*num2;
	}
	else if (calNumbs[1] == "/") {
		sumRes = num1/num2;
	}
	if (sumRes == 0.30000000000000004) {
		sumRes = sumRes.toFixed(1);
	}
	if (isNaN(sumRes)) {
     	sumRes = "Math Error";
   	}
	calNumbs = [];
	calNumbs.push(sumRes);
	result.value = sumRes;
	count = 1;
}