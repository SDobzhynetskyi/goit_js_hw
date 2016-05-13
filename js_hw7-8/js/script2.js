$(document).ready(function () {
  $(".help").hide();

  $(".dataInput input").mouseover(function () {
    var activeInput = $(this).attr("class");
      $("." +activeInput).animate({opacity: "show" }, "slow");
    }, function () {
      $("." +activeInput).animate({opacity: "hide"}, "slow");
    });
});



  $("#helpButton").click(function () {
    $(".help").animate({opacity: "show"}, "slow");
  });
