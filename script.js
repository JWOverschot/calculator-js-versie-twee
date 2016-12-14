var calNumbs = [];
var result = document.getElementById("result");
var sum = document.getElementById("sum");
var numbers = document.getElementsByClassName("numbers")[0];

function insert(n) {
	sum.innerHTML += n;
	if (n == "c") {
		sum.innerHTML = "";
		result.innerHTML = "";
		calNumbs = [];
	}
}

function operator(s) {
	sum.innerHTML += s;
}

function answer() {
	calNumbs.push(sum.innerHTML);
	console.log(calNumbs);
	result.innerHTML = eval(calNumbs[0]);
}