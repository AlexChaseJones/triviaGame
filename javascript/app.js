var pageBuilder = {
	$wrapper : $('#wrapper'),
	$userPoints : $('#userPoints'),
	prepareView : function() {
		var $prepare = $('<div id="prepareContainer">');
		$($prepare).html('<h1>Prepare for Question ' + userStats.questionNumber +'!</h1>');
		(this.$wrapper).empty();
		(this.$wrapper).append($prepare);
		timer.prepareTimer.start();
		allQuestions[0].newQuestion();
	},
	questionView : function(){
		var $question = $('<div id="questionContainer">');
		($question).html('<h1>' + allQuestions[userStats.questionIndex].question + '</h1>');
		$hints = $('<div id="hintsContainer">');
		var $choices = $('<div id="choicesContainer"><form><ul id="choiceList"></ul></form></div>');

		(this.$wrapper).empty();
		(this.$wrapper).append($question);
		(this.$wrapper).append($hints);
		(this.$wrapper).append($choices);

		var $choiceList = $('#choiceList');
		for (var i = 0; i < 4; i++) {

			var $possibleAnswer = $('<li><label class="choice"><input type="radio" name="answer"><h2>' + allQuestions[userStats.questionIndex].answers[i] + '</h2></label></li>');

			($choiceList).append($possibleAnswer);
		};
		
		

		userStats.choiceListener();
		timer.questionTimer.hold();
	},
	afterQuestionView : function() {
		var $answer = $('<div class="answerContainer">');
		if (userStats.choice == allQuestions[userStats.questionIndex].correct()) {
			($answer).html('<h1>Correct! The answer was ' + allQuestions[userStats.questionIndex].correct() + '!</h1><h2>You earned ' + userStats.roundPoints + ' points!</h2>');
		} else{
			($answer).html('<h1>Wrong! The answer was ' + allQuestions[userStats.questionIndex].correct() + '</h1>');
		};	
		var $funFact = $('<div class="factContainer">');
		($funFact).html('<h2>' + allQuestions[userStats.questionIndex].fact + '</h2>');
		(pageBuilder.$userPoints).html(userStats.totalPoints);
		(this.$wrapper).empty();
		(this.$wrapper).append($answer);
		(this.$wrapper).append($funFact);
		timer.afterQuestionTimer.start();
	},
};

var allQuestions = [
	questionDecide = {
		usedQuestions : [],
		newQuestion : function() {
			do {
				randomIndex = Math.ceil(Math.random() * (allQuestions.length - 1));
				if (this.usedQuestions.indexOf(randomIndex) == -1) {
					userStats.questionIndex = randomIndex;
				}
			} while (this.usedQuestions.indexOf(randomIndex) != -1);
			this.usedQuestions.push(randomIndex);
		},
	},
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
		question: "How Tall is the One World Trade Center?",
		hints : ['Not hole 18', 'No 20/20 vision', '2000 - 224 Feet'],
		answers : ['1,801 Feet', '1,506 Feet', '1,776 Feet', '2,001 Feet'],
		correct : function() {
			return this.answers[2];
		},
		fact : 'The One World Trade Center is the tallest building in the Western Hemisphere, as well as the third tallest in the world.'
	},
	three = {
		question: "Who was the Vice President in 2002?",
		hints : ['Not your average Joe', 'It won\'t all be Gory', 'Dick van Dyke'],
		answers : ['Joe Biden', 'Dick Cheney', 'John McCain', 'Al Gore'],
		correct : function() {
			return this.answers[1];
		},
		fact : 'Dick Cheney is infamous for accidently shooting, Harry Whittington, a 78-year-old Texas attorney, while participating in a quail hunt on a ranch in Riviera, Texas.'
		
	},
	four = {
		question: "Where is Mount Rushmore located?",
		hints : ['tah-tah to this one', 'Doesn\'t need a wash', 'Southwest Airlines'],
		answers : ['Nevada', 'Washington', 'Utah', 'South Dakota'],
		correct : function() {
			return this.answers[3];
		},
		fact : 'The faces of Mount Rushmore are 60 feet high. That\'s the same size as a six-story building.'
	},
	five = {
		question: "What is the longest river in the United States?",
		hints : ['Not that Grand', 'Yu Kon\'t decide', 'Missoury on Broadway'],
		answers : ['Mississsippi River', 'Rio Grande River', 'Missouri River', 'Yukon River'],
		correct : function() {
			return this.answers[2];
		},
		fact : 'People have depended on the Missouri River and its tributaries as a source of sustenance and transportation for over 12,000 years.'
	},
	six = {
		question: "What is the United States' most valuable company?",
		hints : ['Immobile', 'Don\'t search for it', 'The sacred fruit'],
		answers : ['Apple Inc.', 'Exxon Mobile', 'Google Inc.', 'JP Morgan Chase'],
		correct : function() {
			return this.answers[0];
		},
		fact : 'Apple has twice as much operating cash as the US Treasury.'
	},
	seven = {
		question: "What is the most common U.S. city name?",
		hints : ['un-ville-ified', 'Not Clint Eastwood', 'A field of flowers'],
		answers : ['Greenville', 'Washington', 'Clinton', 'Springfield'],
		correct : function() {
			return this.answers[3];
		},
		fact : 'The first American place named Springfield was Springfield, Massachusetts. Wisconson itself has five Springfields.'
	},
	eight = {
		question: "Which city is sometimes referred to as 'Sin City'?",
		hints : ['Take a seat', 'Need a different Angel', 'Las Vegetables'],
		answers : ['Los Angeles', 'Seattle', 'Miami', 'Las Vegas'],
		correct : function() {
			return this.answers[3];
		},
		fact : 'The "Sin City" moniker refers to the plethora of \'adult\' entertainment available there.'
	},
	nine = {
		question: "Which city in New York State was named after an ancient city in Tunisia?",
		hints : ['without a ton of ham', 'Nobany', 'U tic a tok'],
		answers : ['Albany', 'Utica', 'Syracuse', 'Binghamton'],
		correct : function() {
			return this.answers[1];
		},
		fact : 'There are also Uticas located in Mississippi, Pennsylvania, Ohio, Indiana, Illinois, Michigan, Minnesota, Montana, South Dakota, Nebraska, Iowa, Kansas, Missouri, Oklahoma, Kentucky, Maryland and Alaska. All are named after Utica, NY'
	},
	ten = {
		question: "Which U.S. state produces the most apples?",
		hints : ['Nothing new', 'Pen nor pencil', 'Wash it off'],
		answers : ['New York', 'Washington', 'Michigan', 'Pennsylvania'],
		correct : function() {
			return this.answers[1];
		},
		fact : 'Washington produces around 5.4 billion pounds of apples per year. The central part of the state has an ideal environment for apple growing.'
	},
];

var userStats = {
	correct : 0,
	wrong : 0,
	questionIndex : 0,
	questionNumber : 1,
	choice : '',
	roundPoints : 0,
	totalPoints : 0,
	choiceListener : function() {
		$('.choice').on('click', function(){
			var userChoice = $(this);
			userStats.choice = userChoice.text();
			userStats.roundPoints = $('#pointsTimer').text();
		})
	},
	answerCheck : function() {
		if (userStats.choice == allQuestions[userStats.questionIndex].correct()) {
			userStats.totalPoints += +userStats.roundPoints;
			userStats.correct++;
		}
		userStats.questionNumber++;
		userStats.wrong++;
	}
};

var timer = {
	$pointsTimer : $('#pointsTimer'),
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
			setTimeout(timer.questionTimer.start, 4500);
			(timer.$pointsTimer).html('<h2>' + timer.time + '</h2>');
		},
		start : function() {
			timeLeft = setInterval(timer.questionTimer.count, 12);
		},
		count : function() {
			timer.time--;
			(timer.$pointsTimer).html('<h2>' + timer.time + '</h2>');
			if (timer.time == 750) {
				var $hintDiv = $('<div class="hint">');
				($hintDiv).html(allQuestions[userStats.questionIndex].hints[0]);
				($hints).append($hintDiv);
			} else if (timer.time == 500) {
				var $hintDiv = $('<div class="hint">');
				($hintDiv).html(allQuestions[userStats.questionIndex].hints[1]);
				($hints).append($hintDiv);
			} else if (timer.time == 250) {
				var $hintDiv = $('<div class="hint">');
				($hintDiv).html(allQuestions[userStats.questionIndex].hints[2]);
				($hints).append($hintDiv);
			} else if (timer.time == 0) {
				clearInterval(timeLeft);
				userStats.answerCheck();
				pageBuilder.afterQuestionView();
			}
		}
	},
	afterQuestionTimer : {
		start : function() {
			timer.time = 5;
			timeLeft = setInterval(timer.afterQuestionTimer.count, 1000);
		},
		count : function() {
			timer.time--;
			if (timer.time == 0) {
				clearInterval(timeLeft);
				pageBuilder.prepareView();
			}
		}
	}
}






