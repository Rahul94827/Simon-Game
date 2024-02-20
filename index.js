var colors=["red","green","yellow","blue"];
var guesscolor=[];
var userclickedcolor=[];
level=0;
var started=false;
$(document).keypress(function(){
    if(!started)
    {
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
    }
});
$(".btn").click(function(){
    var knowbutton=$(this).attr('id');
    userclickedcolor.push(knowbutton);
    playSound(knowbutton);
    annimate(knowbutton);
    checkAnswer(userclickedcolor.length-1);
});

function checkAnswer(currentLevel){
    if (guesscolor[currentLevel]===userclickedcolor[currentLevel]){
        if(userclickedcolor.length===guesscolor.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else
    {
        playSound('wrong');
        $("#level-title").text("Game Over, Press any Key to Start");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}

function annimate(button){
    $('#'+button).addClass("pressed");
    setTimeout(function(){
        $('#'+button).removeClass("pressed");
    },100);
}


function nextSequence(){
    userclickedcolor=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomnum=Math.floor(Math.random()*colors.length);
    var chosencolor=colors[randomnum];
    guesscolor.push(chosencolor);

    $('#'+chosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chosencolor);

}
function playSound(sound)
{
    var sound=new Audio("sounds/"+sound+".mp3");
    sound.play();
}

function startOver() {
    level = 0;
    guesscolor = [];
    started = false;
  }