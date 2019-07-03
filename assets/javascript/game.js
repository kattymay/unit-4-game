var wins = 0;
var losses = 0;
var randomResult = 0;
var userScore = 0;


function randomNumber(numberOne, numberTwo) {
    var number = Math.floor((Math.random() * (numberTwo - numberOne) + numberOne))
    return number
}

function getNewGem() {
    for (var i = 1; i < 5; i++) {
        var newValue = randomNumber(1, 12)
        $("#gem-" + i).attr("data-value", newValue)

    }
}

function getNewTarget() {
    randomResult = randomNumber(19, 120)
    $("#randomNumber").text(randomResult)
    console.log("The target score is" + randomResult)
}

function reset() {
    randomResult = 0;
    userScore = 0;
    getNewGem()
    getNewTarget()
}

reset()

$(document).ready(function () {
    $("button").on("click", function () {
        var value = parseInt($(this).attr("data-value"))
        console.log(" This gem is " + value + " ! ")
        userScore += value
        $("#userScore").text(userScore)



        if (userScore === randomResult) {
            wins++
            $("#wins").text(wins)
            reset()
        }
        else if (userScore > randomResult) {
            losses++
            $("#losses").text(losses)
            reset()

        }





    })




})


