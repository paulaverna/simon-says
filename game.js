var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4); // select random number between 0-3

    var randomChosenColor = buttonColors[randomNumber]; // select array using randon number

    gamePattern.push(randomChosenColor); // push string to empty array

    $("#" + randomChosenColor).fadeOut(50).fadeIn(50); // jQuery to show the sequence with animation

    playSound(randomChosenColor); // play sound using refactored function

    // var audio = new Audio("sounds/" + randomChosenColor + ".mp3"); //js to find the audio file
    // audio.play(); // js to play sound
    console.log(randomChosenColor); // check your work lol

    level++;

    $("#level-title").text("Level " + level);
}

//check which button is pressed
$(".btn").click(function(){
    var userChosenColor = this.id; // get button click id
    
    userClickedPattern.push(userChosenColor); // add button clicked to the user clicked array

    console.log(userClickedPattern); // check your work lol
   

    playSound(userChosenColor); // play sound using refactored function

    animatePress(userChosenColor);

    // if (userClickedPattern !== gamePattern){
    //     $("#level-title").text("Game Over");
    // } else {
    //     nextSequence()
    // };
    

});

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

// $("body").keypress(function(){
//     nextSequence();
//     console.log("You pressed a key!");
// });

$("body").one("keypress", function(){
    nextSequence();
    console.log("You pressed a key!");
    $("#level-title").text("Level 0");
});











