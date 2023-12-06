let homeScore = 0;
let guestScore = 0;

function increment(team, number) {
    const element = document.getElementById(team + "-score-el");
    if (team === "home") {
        homeScore += number;
        element.textContent = homeScore;
    } else {
        guestScore += number;
        element.textContent = guestScore;
    }
    if (homeScore == guestScore) {
        document.getElementById("home-score-el").style.color = "#4f6df9";
        document.getElementById("guest-score-el").style.color = "#4f6df9";
    } else if (homeScore > guestScore) {
        document.getElementById("home-score-el").style.color = "#6DF94F";
        document.getElementById("guest-score-el").style.color = "#F94F6D";
    } else {
        document.getElementById("guest-score-el").style.color = "#6DF94F";
        document.getElementById("home-score-el").style.color = "#F94F6D";
    }
}

function resetGame() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score-el").textContent = 0;
    document.getElementById("guest-score-el").textContent = 0;
    document.getElementById("home-score-el").style.color = "#F94F6D";
    document.getElementById("guest-score-el").style.color = "#F94F6D"; 
}
