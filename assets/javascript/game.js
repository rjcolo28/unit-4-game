// GLOBAL VARIABLES
var targetScore = Math.floor(Math.random() * 150) + 75;
var playerScore = 0;
var crystals = [];
var wins = 0;
var losses = 0;
var targetScoreText = $("#target-score-text");
var playerScoreText = $("#player-score-text");
var winsText = $("#wins-text");
var lossesText = $("#losses-text");

// FUNCITONS
$(document).ready(function() {
    $(targetScoreText).text(targetScore);
    //Creates values for crystal array
    while (crystals.length < 4) {
        x = Math.floor(Math.random() * 20) + 1
            if (crystals.indexOf(x) === -1) {
                crystals.push(x);
            }
        }

    //Adds crystal array values to crystal buttons
    $("#blue").attr("value", crystals[0]);
    $("#purple").attr("value", crystals[1]);
    $("#gold").attr("value", crystals[2]);
    $("#ruby").attr("value", crystals[3]);

    //Click functions of each crystal connected to player score
    $("#blue").on("click", function() {
        playerScore += parseInt(this.value);
        $(playerScoreText).text(playerScore);
        check();
    });
    $("#purple").on("click", function() {
        playerScore += parseInt(this.value);
        $(playerScoreText).text(playerScore);
        check();
    });
    $("#gold").on("click", function() {
        playerScore += parseInt(this.value);
        $(playerScoreText).text(playerScore);
        check();
    });
    $("#ruby").on("click", function() {
        playerScore += parseInt(this.value);
        $(playerScoreText).text(playerScore);
        check();
    })

    //Checks player score against target score
    function check () {
        if (playerScore === targetScore) {
            wins++;
            $(winsText).text(wins);
            reset();
            }
        else if (playerScore > targetScore) {
            losses++;
            $(lossesText).text(losses);
            reset();
        }
    }

    // Resets scores and values
    function reset () {
        //Empty crstyals array
        crystals = [];
        //Resets target score
        var targetScore = Math.floor(Math.random() * 150) + 75;
        $(targetScoreText).text(targetScore);

        // //Resets crystal values
        while (crystals.length < 4) {
            x = Math.floor(Math.random() * 50) + 1
                if (crystals.indexOf(x) === -1) {
                    crystals.push(x);
                }
            }
        $("#blue").attr("value", crystals[0]);
        $("#purple").attr("value", crystals[1]);
        $("#gold").attr("value", crystals[2]);
        $("#ruby").attr("value", crystals[3]);

        //Reset player's score
        playerScore = 0;
        $(playerScoreText).text(playerScore);
    }
})