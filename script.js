var calNumbs = [];
var result = document.getElementById("result");
var sum = document.getElementById("sum");
var numbers = document.getElementsByClassName("numbers")[0];

function insert(n) {
	sum.innerHTML += n;
}

function operator(s) {
	sum.innerHTML += s;
}