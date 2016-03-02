var pageBuilder = {
	$wrapper : $('#wrapper'),
	prepareView : function() {
		var $prepare = $('<div id="prepareContainer"><h1>Prepare for the Next Question!</h1></div>');
		(this.$wrapper).empty();
		(this.$wrapper).append($prepare);
	},
	questionView : function(){
		var $question = $('<div id="questionContainer">');
		($question).html('<h1>' + allQuestions[userStats.questionNumber].question + '</h1>');

		var $choices = $('<div id="choicesContainer">')
		for (var i = 0; i < 4; i++) {
			var $possibleAnswer = $('<div class="choice">');
			($possibleAnswer).html('<h2>' + allQuestions[userStats.questionNumber].answers[i] + '</h2>');
			($choices).append($possibleAnswer);
		};

		(this.$wrapper).empty();
		(this.$wrapper).append($question);
		(this.$wrapper).append($choices);
	},
	afterQuestionView : function() {
		var $answer = $('<div class="answerContainer">');
		($answer).html('<h1>The answer was ' + allQuestions[userStats.questionNumber].correct() + '</h1>');
		(this.$wrapper).empty();
		(this.$wrapper).append($answer);

	},
};

var allQuestions = [
	one = {
		question: "Where was Bill Clinton Born?",
		answers : ['Arkansas', 'Mississsippi', 'Alabama', 'Lousianna'],
		correct : function() {
			return this.answers[0];
		}
	},
	two = {

	},
	three = {

	},
];

var userStats = {
	questionNumber : 0,
	choice : 'Arkansas',

};







