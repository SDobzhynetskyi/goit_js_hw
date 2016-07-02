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
};
 //test object

localStorage.setItem("testObject", JSON.stringify(test));
var testFromStorage = localStorage.getItem("testObject");
var testReady = JSON.parse(testFromStorage);  // stored the object to localStorage

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
  }); // answers


  var answersTrue = 0;
  var questionEmount = 0;

  function testResult(testReady) {
      for ( var j in testReady ) {
          if ( testReady[j].correct == undefined) {
              continue;
          };
          if ( testReady[j].correct == testReady[j].givenAnswer ) {
              answersTrue += 1;
          };
          questionEmount += 1;
      };
      return answersTrue, questionEmount;
  };


  function  showsTestResult() {
      var resultInPersents = Math.floor((answersTrue/questionEmount) * 100);

      if ( resultInPersents < 50 ) {
          $("input[type=checkbox]").prop("disabled", true);
          $(".modal__result").html("Not good! : " + answersTrue + " of " + questionEmount + " (" + resultInPersents + "%)")
                             .css("backgroundColor", "red");
          $(".modal__button").val("Try again!")
          $(".modal").css("display", "block");
      } else {
          $("input[type=checkbox]").prop("disabled", true);
          $(".modal__result").html("Your result: " + answersTrue + " of " + questionEmount + " (" + resultInPersents + "%)")
                             .css("backgroundColor", "green");
          $(".modal__button").val("OK!");
          $(".modal").css("display", "block");
      };
  }; // creating modal content, by test result

  function modalBut() {
      $(".modal").css("display", "none");
      $("input[type=checkbox]").prop("disabled", false);
      $("input[type=checkbox]").attr("checked", false);
  };

  function defaultVal(testReady) {
      answersTrue = 0;
      questionEmount = 0;

      for ( i in testReady ) {
          testReady[i].givenAnswer = "";
      };
  }; // default values for passing test again

  $(".submit").on("click", function () {
      testResult(testReady);
      showsTestResult();
  });

  $(".modal__button").on("click", function () {
      modalBut();
      defaultVal(testReady);
  });

  $(document).on('keyup',function(evt) {
      if (evt.keyCode == 27) {
          modalBut();
          defaultVal(testReady);
      };
  }); // event on esc button

});
