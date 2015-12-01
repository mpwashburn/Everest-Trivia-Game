console.log("main js loaded.");
$(document).ready(function(){

var score = 

$("#elevRollBtn").click(function(){
	$("ul").append("<li>(a) Spring</li>", "<li>(b) Summer</li>", "<li>(c) Autumn</li>");
	$("#text_display").append("<b>When is the best time to climb Mt. Everest?</b>");
	$(function elevRoll(){

	});
});


var Player = function Player(){
	this.score = 0;
	this.icon = "default icon name";
}

var Deck = function Deck(){
	this.badCards = function(){
		// takes a random 5 cards from all the bad card collection and return an array
	}
	this.questionCards = function(){
		// takes a random 55 cards from all the question card collection and return an array
	}
	this.fullDeck = function(){
		// takes the return value of the two functions above and shuffles them together into one nice 60 card deck returned as an array
	}
}

var Game = function Game(){
	this.player1 = new Player();
	this.player2 = new Player();

	this.scoreBoard = function(){
        return "Player 1 is at " + this.player1.score + " elevation. And Player 2 is at " + this.player2.score + " elevation."
    }

	this.deck = new Deck();

	this.draw = function(){
		// write code that pulls the top card from the deck and shows the question on it
		return this.deck.pop()
	}

	this.elevRoll = function(){
		var playerElev = Math.round((Math.random() * (1500-500)) + 500);
		document.getElementById("elevdisplay").innerHTML = playerElev; //create new <div> for display with new id
		document.getElementById("elevRollBtn").disabled = true;
	}
}




});
