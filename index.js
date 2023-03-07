const button = document.querySelector(".button")
const text = document.querySelector(".text")

button.addEventListener("click", e => {
	text.style.color == "green"
		? (text.style.color = "#4385ff")
		: (text.style.color = "green")
	text.style.transform == "rotate(180deg)"
		? (text.style.transform = "rotate(0deg)")
		: (text.style.transform = "rotate(180deg)")
})
