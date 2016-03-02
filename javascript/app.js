var pageBuilder = {
	$wrapper : $('#wrapper'),
	prepareView : function() {
		var $newDiv = $('<div id="prepareContainer"><h1>Prepare for the Next Question!</h1></div>');
		(this.$wrapper).empty();
		(this.$wrapper).append($newDiv);
	},
	questionView : function(){
		var $newDiv = $('<div id="questionContainer">');


		for (var i = 0; i < 4; i++) {
			var $possibleAnswer = $('<div class="choice">');
			($possibleAnswer).html('<h2>' + allQuestions[userStats.questionNumber].answers[i] + '</h2>');
			($newDiv).append($possibleAnswer);
		}

		(this.$wrapper).empty();
		(this.$wrapper).append($newDiv);
	},
};

var allQuestions = [
	one = {
		question: "Where was Bill Clinton Born?",
		answers : ['arkansas', 'mississsippi', 'alabama', 'lousianna'],
		correct : function() {
			return this.answers[1];
		}
	},
	two = {

	},
	three = {

	},
];

var userStats = {
	questionNumber : 0,
};







