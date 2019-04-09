
// onclick function generates a random number, make jewel variables undefined to start

/* random function between  1-12 set to each crystal*/

var jewel1 = Math.floor(Math.random() * 12);
var jewel2 = Math.floor(Math.random() * 12);
var jewel3 = Math.floor(Math.random() * 12);
var jewel4 = Math.floor(Math.random() * 12);
var jewelx;
var jewelxDisplay;
var jewelNumber;

/* random function between 19- 120 set to magic number*/

var magicNumber = Math.floor(Math.random() * 101) + 19;
$("#magicNumber").html(magicNumber);

var score = 0;
var losses = 0;
var wins = 0;

function jewelClick(jewelx, jewelNumber, jewelxDisplay) {
    jewelx.on("click", function () {
        score = score + jewelNumber;
        $("#score").html(score);
        jewelxDisplay.html(jewelNumber);
        console.log(score);

        if (score > magicNumber) {
            console.log("you lose");
            losses = losses + 1;
            $("#losses").html(losses);
            resetGame();

        }
        else if (score === magicNumber) {
            console.log("you win");
            wins = wins + 1;
            $("#wins").html(wins);
            resetGame();
        }

        return score;

    })
};

jewelClick($("#jewel1"), jewel1, $("#jewel1Display"));
jewelClick($("#jewel2"), jewel2, $("#jewel2Display"));
jewelClick($("#jewel3"), jewel3, $("#jewel3Display"));
jewelClick($("#jewel4"), jewel4, $("#jewel4Display"));




function resetGame() {

    jewel1 = Math.floor(Math.random() * 12);
    $("#jewel1Display").html(jewel1);
    jewel2 = Math.floor(Math.random() * 12);
    $("#jewel2Display").html(jewel2);
    jewel3 = Math.floor(Math.random() * 12);
    $("#jewel3Display").html(jewel3);
    jewel4 = Math.floor(Math.random() * 12);
    $("#jewel4Display").html(jewel4);

    magicNumber = Math.floor(Math.random() * 101) + 19;
    $("#magicNumber").html(magicNumber);

    score = 0;
    $("#score").html(score);

};


/*on click events for each crystal that generates a random number and adds it to score variable */

// $("#jewel1").on("click", function () {
//     score = score + jewel1;
//     $("#score").html(score);
//     $("#jewel1Display").html(jewel1);



// if statement to change boolean when the user guesses over - this will later be used to reset the game

//     if (score > magicNumber) {
//         console.log("you lose");
//         losses = losses + 1;
//         $("#losses").html(losses);

//     }
//     else if (score === magicNumber) {
//         console.log("you win");
//         wins = wins + 1;
//         $("#wins").html(wins);
//     }

// });

// $("#jewel2").on("click", function () {
//     score = score + jewel2;
//     $("#score").html(score);
//     $("#jewel2Display").html(jewel2);


//     if (score > magicNumber) {
//         console.log("you lose");
//         losses = losses + 1;
//         $("#losses").html(losses);

//     }
//     else if (score === magicNumber) {
//         console.log("you win");
//         wins = wins + 1;
//         $("#wins").html(wins);
//     }

// });

// $("#jewel3").on("click", function () {
//     score = score + jewel3;
//     $("#score").html(score);
//     $("#jewel3Display").html(jewel3);


//     if (score > magicNumber) {
//         console.log("you lose");
//         losses = losses + 1;
//         $("#losses").html(losses);


//     }
//     else if (score === magicNumber) {
//         console.log("you win");
//         wins = wins + 1;
//         $("#wins").html(wins);
//     }

// });

// $("#jewel4").on("click", function () {
//     score = score + jewel4;
//     $("#score").html(score);
//     $("#jewel4Display").html(jewel4);


//     if (score > magicNumber) {
//         console.log("you lose");
//         losses = losses + 1;
//         $("#losses").html(losses);

//     }
//     else if (score === magicNumber) {
//         console.log("you win");
//         wins = wins + 1;
//         $("#wins").html(wins);
//     }

// });







/* if statement - if the score variable goes over the magic number reset the function */
