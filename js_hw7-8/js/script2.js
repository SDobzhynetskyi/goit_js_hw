$(document).ready(function () {
  $(".help").hide();

  $(".dataInput input").hover(function () {
    var activeHide = $(this).attr("class");
    $(this).next("span").animate({opacity: "show"}, "slow");
  }, function () {
    $(this).next("span").animate({opacity: "hide"}, "slow");
  })
});

  $("#helpButton").click(function () {
    $(".help").animate({opacity: "show"}, "slow");
  });
