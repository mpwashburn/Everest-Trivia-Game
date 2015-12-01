console.log("main js loaded.");
$(document).ready(function(){


//below is the first draft function for returning a random
//attainable elevation for a player. Max elevation is 1500.
//Min elevation is 500.

// $("#elevdisplay").click(function elevRoll(min, max){

$("#elevRollBtn").click(function(){
	$("ul").append("<li>(a) Spring</li>", "<li>(b) Summer</li>", "<li>(c) Autumn</li>");
	$("#text_display").append("<b>When is the best time to climb Mt. Everest?</b>");
	$(function elevRoll(min,max){
		var playerElev = Math.round((Math.random() * (1500-500)) + 500);
		document.getElementById("elevdisplay").innerHTML = playerElev; //create new <div> for display with new id
	});
});

// $("#elevdisplay").click(function elevRoll(min, max){
// var playerElev = Math.round((Math.random() * (1500-500)) + 500);
// $("elevdisplay").html(playerElev);
// });





});
