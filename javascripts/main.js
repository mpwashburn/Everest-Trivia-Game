console.log("main js loaded.");
$(document).ready(function(){ 

// this playerCounter is used to switch between player turns after each draw & then chosen answer.
var playerCounter = 0;

// These varialbe set up the players scores to start at zero
var player1Score = 0;
var player2Score = 0;

// We assign score1 & score2 to the input tag in the html document where the player's score tally is kept
var score1 = document.getElementById("p1Score");
score1.value = player1Score;

var score2 = document.getElementById("p2Score");
score2.value = player2Score;

// The playerTurn function creates an object to determine which player it is. I use an "if" statement with a modulus to do so. We pull form the playerCounter about and divid it by two. if there is no remainder it's true and it's player1's turn. Otherwise, it's false and it's player2's turn.

function playerTurn(){
	if (playerCounter%2 === 0) {
		return "player1";
	} else return "player2";
}

function winner() {
	if (p1Score === "29029");
	alert ("Player 1 Wins!");
	this.game;
}	else {(if p2Score === "29029");
	alert ("Player 2 Wins");
	this.game;
}

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
		if (playerTurn() == 'player1') {
			if (self.correctAnswer === chosenAnswer) {
				player1Score += 4147;
				p1Score.value = player1Score;
			} else alert ("wrong");
			playerCounter++;
		}
			else { if (self.correctAnswer === chosenAnswer) {
				player2Score += 4147;
				p2Score.value = player2Score;
			} else alert ("wrong");
			playerCounter++;
		
		}
		
		
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
		new Card("What is the best season to climb Mt. Everest?", "Spring", "Summer", "Autumn"),
		new Card("At least how many deaths to date has Everest claimed?", "250", "400", "323"),
		new Card("In what year was Mt. Everest first summitted?", "1953", "1933", "1924"),
		new Card("What man famously said he wanted to climb Everest 'because it's there'?", "George Mallory", "Andrew Irvine", "George Everest"),
		new Card("At sea level, atmospheric pressure is 100 percent. What is it at the summit of Mt. Everest?", "30", "20", "5"),
		new Card("The first woman to reach Everest's summit was?", "Japanese", "British", "Korean"),
		new Card("Most climbers approach Everest from what direction?", "South", "North", "East"),
		new Card("Who was the first person to make a solo ascent of Everest without supplemental oxygen?", "Reinhold Messner", "Conrad Anker", "Jim Whittaker"),
		new Card("Everest, and the rest of the Himalaya, were formed when which two tectonic plates collided?", "Asian and Indian", "Asian and Indian", "African and Antartica"),
		new Card("How many people have succeeded in climbing Mt. Everest so far?", "More than 2000", "1,000 - 2000", "Fewer than 1000"),
		new Card("What is the estimated number of dead bodies still on Everest?", "200", "100", "50"),
		new Card("What do the people of Nepal call Mount Everest?", "Sagarmarth", "Hiawatha", "Zarathustra"),
		new Card("What name did the British surveyors have for Mt. Everest in the mid-19th century", "Peak XV", "Peak X", "Peak V"),
		new Card("Which amoung these is a form of altitude sickness?", "HACE", "HARE", "HIPA"),
		new Card("In which year was the body of famous climber George Mallory, who died in 1924, found?", "1999", "1989", "2009"),
		new Card("What type of mountains are the Himalayas?", "fold mountain", "table mountain", "snake mountain"),
	]

	this.draw = function(){
		var card = this.deck.pop()
		card.printOut();

		$('.answer').click(function(){
			if (card.checkIfRight($(this)[0].innerHTML)){
				// chosenAnswer === true




				// move the character up in elevetation and start next turn
				// add to player score
			} else {
				// don't move character, and start next turn
			}
		})		
	}

}
game = new Game();

$('#questionBtn').click(function(){
	game.draw();
})


});
