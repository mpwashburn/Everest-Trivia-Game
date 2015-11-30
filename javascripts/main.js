console.log("main js loaded.");
$(document).ready(function(){


//below is the first draft function for returning a random
//attainable elevation for a player. Max elevation is 1500.
//Min elevation is 500. After testing, the random number
//output exceeds 1500. May need to add an equality operator to
//correct.

$("#elevdisplay").click(function elevRoll(min, max){
  var playerElev = Math.round((Math.random() * (1500-500)) + 500);
    document.getElementById("elevdisplay").innerHTML = playerElev;
});







});
