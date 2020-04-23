function randomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}
const letters = document.querySelectorAll('.letter');

const intervalID = setInterval(function() {
	for (let letter of letters) {
		letter.style.color = randomRGB();
	}
}, 1000);

// can stop the colors changing by calling clearInterval(intervalID)
