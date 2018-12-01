// GLOBAL VARIABLES
var targetScore = Math.floor(Math.random() * 150) + 75;
var playerScore = 0;
var crystals = [];
var wins = 0;
var losses = 0;
 

// FUNCITONS
$(document).ready(function() {
    while (crystals.length < 4) {
        x = Math.floor(Math.random() * 50) + 1
            if (crystals.indexOf(x) === -1) {
                crystals.push(x);
            }
        }
    $("#target-score-text").html(`<h2>Target: ` + targetScore);

    $("#blue").attr("value", crystals[0]);
    $("#purple").attr("value", crystals[1]);
    $("#gold").attr("value", crystals[2]);
    $("#ruby").attr("value", crystals[3]);

    $("#blue").on("click", function() {
        playerScore += parseInt(this.value);
        $("#player-score-text").html(`<h2>Player Score: ` + playerScore)
        console.log(playerScore)
    });
    $("#purple").on("click", function() {
        playerScore += parseInt(this.value);
        $("#player-score-text").html(`<h2>Player Score: ` + playerScore)
        console.log(playerScore)
    });
    $("#gold").on("click", function() {
        playerScore += parseInt(this.value);
        $("#player-score-text").html(`<h2>Player Score: ` + playerScore)
        console.log(playerScore)
    });
    $("#ruby").on("click", function() {
        playerScore += parseInt(this.value);
        $("#player-score-text").html(`<h2>Player Score: ` + playerScore)
        console.log(playerScore)
    })
    console.log(crystals, playerScore);

    if (playerScore === targetScore) {
        wins++;

    }
    else if (playerScore > targetScore) {
        losses++;
        
    }

    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);

})







// get element by id 
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var targetScoreText = document.getElementById("target-score-text");
// var playerScoreText = document.getElementById("player-score-text");

// var targetScore
    // generate new number afer every round
// var wins = +1 with every player win, var losses = +1 with every player loss
    // if statement playerScore === targetScore,
        //add one to wins
    // else playerScore > targetScore,
        //add one to losses
// crystals
    // add value to player score on click
    // set to new value after game reset
// var playerScore
    // increase value with every click on crystal
// reset button
// $("#reset").on("click", function() {
//     playerScore.val(0)
//     $("#blue") = Math.floor(Math.random() * 50) + 1;
//     $("#purple") = Math.floor(Math.random() * 50) + 1;
//     $("diamond") = Math.floor(Math.random() * 50) + 1;
//     $("ruby") = Math.floor(Math.random() * 50) + 1;
// })
    //reset player score to zero
    //randomize target score
    //randomize crystal values
    // documentText