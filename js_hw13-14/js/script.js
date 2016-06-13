
var test = {
  testName : "Football knowlege",
  testCase_1: {
    question: "Who won the England Premier Ligue in season 2015/2016",
    answers: ["Chelsey", "Arsenal", "Leicester", "Manchester United"],
    correct: "Leicester",
  },
  testCase_2: {
    question: "How named the time, after regular time",
    answers: ["overtime", "addinional time", "after game", "no answer here"],
    correct: "overtime",
  },
  testCase_3: {
    question: "How many substitutoins has each team in official games",
    answers: ["one", "whatever", "five", "three"],
    correct: "three",
  }
};

var testJSON = JSON.stringify(test);
var testReady = JSON.parse(testJSON);

var tmpl = _.template(document.getElementById("testCreating").innerHTML);
var result = tmpl(testReady);
  document.write( result );

var correctAnsvers = (function (test) {
  var correctAnswersArrey = [];
  for ( var i in test ) {
    if( test[i].correct == undefined ) {
      continue;
    };
    correctAnswersArrey.push(test[i].correct);
  };
  return correctAnswersArrey;
})(test);

console.log(correctAnsvers);


(function () {
});
