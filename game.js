var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;

//start the game
$("body").one("keypress", function(){
    nextSequence();
    console.log("You pressed a key!");
    $("#level-title").text("Level 0");
});


function nextSequence(){
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4); // select random number between 0-3

    var randomChosenColor = buttonColors[randomNumber]; // select array using randon number

    gamePattern.push(randomChosenColor); // push string to empty array

    $("#" + randomChosenColor).fadeOut(50).fadeIn(50); // jQuery to show the sequence with animation

    playSound(randomChosenColor); // play sound using refactored function


}

//check which button is pressed
$(".btn").click(function(){
    var userChosenColor = this.id; // get button click id
    
    userClickedPattern.push(userChosenColor); // add button clicked to the user clicked array
 
    playSound(userChosenColor); // play sound using refactored function

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

});

//checking answer
function checkAnswer(currentLevel){

    console.log(userClickedPattern); // check your work
    console.log(gamePattern); // check your work

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        console.log("Success!");

        // level++;

        // $("#level-title").text("Level " + level);

        if (userClickedPattern.length === gamePattern.length){
            setTimeout (function() {
                nextSequence();
            }, 1000);
        }

    } else {

        console.log("Wrong!");

        $("#level-title").text("Game Over, Press Any Key to Restart.");

        var loseAudio = new Audio("sounds/wrong.mp3")
        loseAudio.play();

        $("body").addClass("game-over");

        setTimeout (function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
        
    };
  
};

//function to consolidate sounds
function playSound(name){ 
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

 //add styling to clicked button
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout (function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};

//restart the game
function startOver(){
    level = 0;
    gamePattern = [];
    
    $("body").one("keypress", function(){
        nextSequence();
        console.log("You pressed a key!");
        $("#level-title").text("Level 0");
    });
};

