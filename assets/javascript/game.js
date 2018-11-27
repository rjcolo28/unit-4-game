// var timer?
// variables:
    // targetScore
    // wins
    // losses
    // crystals
        //blueCrystal
        //purpleCrystal
        //goldDiamond
        //redRuby
    // playerScore
var targetScore = Math.floor(Math.random() * 120) + 19;
console.log(targetScore)
var playerScore = 0;

$(".crystal").on("click", function() {
    Math.floor(Math.random() * 12) + 1
})

//get element by id 
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var targetScoreText = document.getElementById("target-score-text");
var playerScoreText = document.getElementById("player-score-text");

// var targetScore

    // generate new number afer every round
// var wins
    // +1 with every player win
// var losses
    // +1 with every player loss
// var blueCrystal/purpleCrystal/goldDiamond/redRuby
    // generate new value after every round

// var playerScore
    // increase value with every click on gems
    // reset to zero with win (=== "target") OR loss (> "target")
// var timer
    // counts down to zero
    // resets after each round starts again
// documentText