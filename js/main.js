var cards = ["queen", "queen", "king", "king"];
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
		console.log(msg);
		alert(msg);
	}
	else {
		msg = "Sorry, try again.";
		console.log(msg);
		alert(msg);
	}

};

/**
 * Author: John Politis
 * Date  : 15/05/2017
 * Description:
 */
var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};


flipCard(0);flipCard(2);

