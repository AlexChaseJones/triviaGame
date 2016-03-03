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
		$hints = $('<div id="hintsContainer">');
		var $choices = $('<div id="choicesContainer">');
		for (var i = 0; i < 4; i++) {
			var $possibleAnswer = $('<div class="choice">');
			($possibleAnswer).html('<h2>' + allQuestions[userStats.questionNumber].answers[i] + '</h2>');
			($choices).append($possibleAnswer);
		};
		(this.$wrapper).empty();
		(this.$wrapper).append($question);
		(this.$wrapper).append($hints);
		(this.$wrapper).append($choices);
		userStats.choiceListener();
		timer.questionTimer.hold();
	},
	afterQuestionView : function() {
		var $answer = $('<div class="answerContainer">');
		if (userStats.choice == allQuestions[userStats.questionNumber].correct()) {
			($answer).html('<h1>Correct! The answer was ' + allQuestions[userStats.questionNumber].correct() + '</h1>');
		} else{
			($answer).html('<h1>Wrong! The answer was ' + allQuestions[userStats.questionNumber].correct() + '</h1>');
		};	
		var $funFact = $('<div class="factContainer">');
		($funFact).html('<h2>' + allQuestions[userStats.questionNumber].fact + '</h2>');
		(this.$wrapper).empty();
		(this.$wrapper).append($answer);
		(this.$wrapper).append($funFact);
	},
};

var allQuestions = [
	one = {
		question: "Where was former POTUS Bill Clinton Born?",
		hints : ['Not president Obama', 'can\'t be Miss Clinton', 'Kinda like Kansas'],
		answers : ['Arkansas', 'Mississsippi', 'Alabama', 'Lousianna'],
		correct : function() {
			return this.answers[0];
		},
		fact : 'Being President is like being the groundskeeper in a cemetery: there are a lot of people under you, but none of them are listening. -Bill Clinton',
	},
	two = {
		question: "How Tall is the World Trade Center",
		hints : ['Not hole 18', 'No 20/20 vision', '2000 - 224 Feet'],
		answers : ['1,801 Feet', '1,506 Feet', '1,776 Feet', '2,001 Feet'],
		correct : function() {
			return this.answers[2];
		}
	},
	three = {
		question: "Who was the Vice President in 2002?",
		hints : ['Not your average Joe', 'It won\'t all be Gory', 'Dick van Dyke'],
		answers : ['Joe Biden', 'Dick Cheney', 'John McCain', 'Al Gore'],
		correct : function() {
			return this.answers[1];
		}
	},
	four = {
		question: "Where is Mount Rushmore located?",
		hints : ['tah-tah to this one', 'Doesn\'t need a wash', 'Southwest Airlines'],
		answers : ['Nevada', 'Washington', 'Utah', 'South Dakota'],
		correct : function() {
			return this.answers[3];
		}
	},
];

var userStats = {
	questionNumber : 0,
	choice : 'Arkansas',
	choiceListener : function() {
		$('.choice').on('click', function(){
			var userChoice = $(this);
			userStats.choice = userChoice.text();
		})
	}

};


var timer = {
	time : 0,
	prepareTimer : {
		start : function() {
			timer.time = 5;
			timeLeft = setInterval(timer.prepareTimer.count, 1000);
		},
		count : function() {
			timer.time--;
			if (timer.time == 0) {
				clearInterval(timeLeft);
				pageBuilder.questionView();
			}
		}
	},
	questionTimer : {

		hold : function() {
			timer.time = 1000;
			setTimeout(timer.questionTimer.start, 3000);
		},
		start : function() {
			timeLeft = setInterval(timer.questionTimer.count, 10);
		},
		count : function() {
			timer.time--;
			console.log(timer.time);
			if (timer.time == 750) {
				var $hintDiv = $('<div class="hint">');
				($hintDiv).html(allQuestions[userStats.questionNumber].hints[0]);
				($hints).append($hintDiv);
			} else if (timer.time == 500) {
				var $hintDiv = $('<div class="hint">');
				($hintDiv).html(allQuestions[userStats.questionNumber].hints[1]);
				($hints).append($hintDiv);
			} else if (timer.time == 250) {
				var $hintDiv = $('<div class="hint">');
				($hintDiv).html(allQuestions[userStats.questionNumber].hints[2]);
				($hints).append($hintDiv);
			} else if (timer.time == 0) {
				clearInterval(timeLeft);
			}
		}
	}
}




