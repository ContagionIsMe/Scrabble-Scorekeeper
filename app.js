const p1 = {
	score: 0,
	button: document.querySelector("#p1Button"),
	display: document.querySelector("#p1Display"),
};
const p2 = {
	score: 0,
	button: document.querySelector("#p2Button"),
	display: document.querySelector("#p2Display"),
};

const pScore = document.getElementById("pScore");
const victoryLap = document.getElementById("victoryLap");

const wordPlayed = document.getElementById("wordPlayed");
const p1Words = document.getElementById("p1Words");

function updateScores(player, opponents) {
	player.score += parseInt(pScore.value, 10);
	player.display.textContent = player.score;
}

p1.button.addEventListener("click", function () {
	const inputValue = pScore.value;
	if (inputValue.trim() !== "") {
		updateScores(p1, p2);
		clearInput();
	}
});

p2.button.addEventListener("click", function () {
	const inputValue = pScore.value;
	if (inputValue.trim() !== "") {
		updateScores(p2, p1);
		clearInput();
	}
});

function clearInput() {
	pScore.value = "";
	setTimeout(() => {
		pScore.value = "";
	}, 1000);
}

p1.button.addEventListener("click", function (event) {
	const inputValue = wordPlayed.value.trim();
	if (inputValue !== "") {
		const newItem = document.createElement("li");
		newItem.textContent = inputValue.toUpperCase();
		p1Words.appendChild(newItem);
		wordPlayed.value = "";
	}
});

p2.button.addEventListener("click", function (event) {
	const inputValue = wordPlayed.value.trim();
	if (inputValue !== "") {
		const newItem = document.createElement("li");
		newItem.textContent = inputValue.toUpperCase();
		p2Words.appendChild(newItem);
		wordPlayed.value = "";
	}
});

victoryLap.addEventListener("click", () => {
	if (confirm("End Game?")) {
		victory();
	}
});

function victory() {
	if (p1.score > p2.score) {
		window.location.href = "./winners/madison.html";
	} else {
		window.location.href = "./winners/jacob.html";
	}
}
