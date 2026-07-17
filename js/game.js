function addPoint(side, point) {

    GameState[side].score += point;

    animateScore(
        document.getElementById(
            side === "left"
                ? "leftScore"
                : "rightScore"
        ),
        GameState[side].score
    );

    if (GameState[side].score >= 7) {

        winner(side);

    }

}
function winner(side) {

    const screen = document.getElementById("winnerScreen");

    screen.classList.remove("hidden");

    screen.innerHTML = `

<div class="winnerText">

${GameState[side].name}

</div>

`;

    confetti();

}