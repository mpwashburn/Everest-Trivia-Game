console.log("main js loaded.");
$(document).ready(function(){ 

var player1Score = 0;
var player2Score = 0;

var score1 = document.getElementById("p1Score");
score1.value = player1Score;

var score2 = document.getElementById("p2Score");
score2.value = player2Score;



// this code was taken from the internet
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var Card = function Card(question, correct, wrong1, wrong2){

	var self = this; // you can create a new variable of 'this' when calling on 'this' may be conflicting with another 'this' in a line of code.

	self.question = question;
	self.correctAnswer = correct;
	self.possibleAnswers = [correct, wrong1, wrong2];

	shuffle(self.possibleAnswers);
	//set new shuffled order to positions
	self.a = self.possibleAnswers[0];
	self.b = self.possibleAnswers[1];
	self.c = self.possibleAnswers[2];

	self.checkIfRight = function(chosenAnswer){
		// write code here that compares self.correctAnswer with the answer a person chooses to see if the strings match
		// return true if they match
		console.log(chosenAnswer);
		if (self.correctAnswer === chosenAnswer) {
			player1Score += 500;
			p1Score.value = player1Score;
		} else alert ("wrong");
			counter++;
		
	}

	self.printOut = function(){
		$('#display_box').html('<div id="text_display1">' + self.question + '</div><div><ul id="choices_display"><li id="answerA" class="answer">' + self.a + '</li><li id="answerB" class="answer">' + self.b + '</li><li id="answerC" class="answer">' + self.c + '</li></ul></div>');
	}
}



var Player = function Player(){
	this.score = 0;
	this.icon = "default icon name";
}

var Game = function Game(){
	$('#display_box').html('<div id="text_display1">Are you Ready?</div>');

	this.player1 = new Player();
	this.player2 = new Player();

	this.scoreBoard = function(){
        return "Player 1 is at " + this.player1.score + " elevation. And Player 2 is at " + this.player2.score + " elevation."
    }

	this.deck = [
		new Card("Question1", "correct", "wrong1", "Wrong answer 2"),
		new Card("What is the best season to climb Mt. Everest?", "Spring", "Summer", "Autumn"),
		new Card("At least how many deaths to date has Everest claimed?", "250", "400", "323")
	]

	this.draw = function(){
		var card = this.deck.pop()
		card.printOut();

		$('.answer').click(function(){
			if (card.checkIfRight($(this)[0].innerHTML)){
				//chosenAnswer === true




				// move the character up in elevetation and start next turn
				// add to player score
			} else {
				// don't move character, and start next turn
			}
		})		
	}

}
// count = 0
game = new Game();

$('#questionBtn').click(function(){
	// count
	game.draw();
})


});
