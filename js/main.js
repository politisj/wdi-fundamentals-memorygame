/**
 *
 * Author: John Politis
 * Date  : 15/05/2017
 * Description: Setup the deck of cards
 *
 */
var cards = [ 
				{ 
					rank: "queen",
					suit: "hearts",
					cardImage: "images/queen-of-hearts.png"
				}, 
				{ 
					rank: "queen",
					suit: "diamonds",
					cardImage: "images/queen-of-diamonds.png"
				}, 
				{ 
					rank: "king",
					suit: "hearts",
					cardImage: "images/king-of-hearts.png"
				}, 
				{ 
					rank: "king",
					suit: "diamonds",
					cardImage: "images/king-of-diamonds.png"
				}, 				
			];

var cardsInPlay = [];


/**
 * Author: John Politis
 * Date  : 15/05/2017
 * Description:
 */
var checkForMatch = function() {
	var msg;
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		msg = "You found a match!";
		alert(msg);		
	}
	else {
		msg = "Sorry, try again.";
		alert(msg);
	}

};

/**
 * Author: John Politis
 * Date  : 15/05/2017
 * Description: Turns over the selected card, then tries to match
 *               
 */
var flipCard = function(obj) {

	cardsInPlay.push(cards[obj.getAttribute('data-id')].rank);
	obj.setAttribute('src', cards[obj.getAttribute('data-id')].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch(obj);
	}

};

/**
 * Author: John Politis
 * Date  : 15/05/2017
 * Description:
 */
var createBoard = function() {
	
	for ( var i = 0 ; i < cards.length; i++ ) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		document.getElementById('game-board').appendChild(cardElement);
		/*
		 * setup the event listener to flip the selected card
		 */
		cardElement.addEventListener('click', function(){				
				flipCard(this);
		});
	}
};

/**
 * Entry point to the program
 */
createBoard();


