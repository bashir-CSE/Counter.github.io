const result = document.querySelector(".result");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const btns = document.querySelectorAll(".btn");
var value = 0;

increase.addEventListener("click", () => {
	value += 1;
	result.innerText = value;
});
decrease.addEventListener("click", () => {
	value -= 1;
	result.innerText = value;
});
reset.addEventListener("click", () => {
	value = 0;
	result.innerText = value;
});
