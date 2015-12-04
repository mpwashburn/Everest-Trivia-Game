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
	if (p1Score === "29029") {
		alert ("Player 1 Wins!");
		game = new Game();
	} 
	else if (p2Score === "29029") {
		alert ("Player 2 Wins");
		game = new Game();
	}
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
			game.draw();
		}
			else { if (self.correctAnswer === chosenAnswer) {
				player2Score += 4147;
				p2Score.value = player2Score;
			} else alert ("wrong");
			playerCounter++;
			game.draw();
		
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
		new Card("What is the ideal time to climb Mt. Everest?", "April - May", "June - September", "October - December"),
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
		new Card("Age-wise, what type of mountains are the Himalayas?", "young mountain chain", "old mountain chain", "ancient mountain chain"),
		new Card("The Himalayas are still growing. How much are they growing each year", "8 - 12 centimeters", "2 - 6 centimeters", "15 - 18 centimeters"),
		new Card("Who was the first American to reach the top of Mt. Everest", "James Whittaker", "Forest Whittaker", "Edwin Whittaker"),
		new Card("Who was the first blind person to reach the top of Mt. Everest?", "Erik Weihenmayer", "James Thurber", "Jorge Luis Borges"),
		new Card("What is teh average cost of a fully guided journey up Mt. Everest from the south face?", "$65,000", "85,000", "$105,000"),
		new Card("What are teh Nepalese hired as guides and porters popularly known as?", "Sherpa", "Naga", "Mizo"),
		new Card("How much time does an attempt to climb Mt. Everest usually take?", "2.5 months", "1.5 months", "0.5 month"),
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

$('#resetBtn').click(function(){
	game = new Game();
})


});
