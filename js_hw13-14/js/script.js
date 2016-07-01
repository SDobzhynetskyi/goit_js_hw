;"use strict";

var test = {
  testName : "Football knowlege",
  testCase_1: {
    question: "Who won the England Premier Ligue in season 2015/2016",
    answers: ["Chelsey", "Arsenal", "Leicester", "Manchester United"],
    correct: "Leicester",
    givenAnswer: "",
  },
  testCase_2: {
    question: "How named the time, after regular time",
    answers: ["overtime", "addinional time", "after game", "no answer here"],
    correct: "overtime",
    givenAnswer: "",
  },
  testCase_3: {
    question: "How many substitutoins has each team in official games",
    answers: ["one", "whatever", "five", "three"],
    correct: "three",
    givenAnswer: "",
  },
}; //test object


    var storedTest = localStorage.setItem("testObject", JSON.stringify(test));
    var testFromStorage = localStorage.getItem("testObject");
    var testReady = JSON.parse(testFromStorage);  // store the object to localStorage


    var tmpl = _.template(document.getElementById("testCreating").innerHTML);
    var result = tmpl(testReady);
      document.write( result );  //rendering the test whith LoDash tamplate

// script body, using jQuery
$(function () {

  $("input[type=checkbox]").on("click", function () {
      var chosenCase = $(this).attr("class");
      var answerId = $(this).attr("id");
      testReady[chosenCase].givenAnswer = answerId;

      $(this).attr("checked", "checked");
      $("."+chosenCase).not(this).attr("checked", false);
  }); // giving answers


  var answersTrue = 0;
  var ansversAmount = 0;


  function testResult() {
    for ( var j in testReady ) {
      if ( testReady[j].correct == undefined) {
        continue;
      };
      ansversAmount += 1;
      if ( testReady[j].correct == testReady[j].givenAnswer ) {
        answersTrue += 1;
      };
    };

    var resultInPersents = Math.floor((answersTrue/ansversAmount) * 100);

    if ( resultInPersents < 50 ) {
        $(".modal__result").html("Not good! : " + answersTrue + " of " + ansversAmount + " (" + resultInPersents + "%)");
        $(".modal__result").css("backgroundColor", "red");
        $("input[type=checkbox]").prop("disabled", true);
        $(".modal__button").val("Try again!")
        $(".modal").css("display", "block");
    } else {
        $(".modal__result").html("Your result: " + answersTrue + " of " + ansversAmount + " (" + resultInPersents + "%)");
        $("input[type=checkbox]").prop("disabled", true);
        $(".modal").css("display", "block");
    };
  };

  function modalBut() {
    $(".modal").css("display", "none");
    $("input[type=checkbox]").prop("disabled", false);
    $("input[type=checkbox]").attr("checked", false);
    $(".modal__result").css("backgroundColor", "");
  };


  $(".submit").on("click", function () {
      testResult();
  });

  $(".modal__button").on("click", function () {
    modalBut();
    $(".modal__result").html("");
    ansversAmount = 0;
    answersTrue = 0;
  });

});
