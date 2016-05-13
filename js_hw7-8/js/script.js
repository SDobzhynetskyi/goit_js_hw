$(document).ready(function () {
  $("li:first").addClass("active");
  $("article:not(:first)").hide();

  $("li").click(function () {
    var activeIcon = $(this).attr("class");
    $("li").removeClass("active");
    $(this).addClass("active");
    $("article").hide();
    $("div ." + activeIcon).show();
  });
});
