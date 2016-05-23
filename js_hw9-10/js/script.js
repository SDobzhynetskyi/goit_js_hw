$(document).ready(function() {
    //method for carousel
    $("#carousel").waterwheelCarousel({
      // include options like this:
      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
    });

    //script for menu
    $(".show_level_2").hover(function () {
      $(".level_2").animate({opacity: "show"}, 500);
    }, function () {
      $(".level_2").animate({opacity: "hide"}, 500);
    });
    $(".show_level_3").hover(function () {
      $(".level_2 .level_3").animate({opacity: "show"}, 500);
    }, function () {
      $(".level_3").animate({opacity: "hide"}, 500);
    });

    $(".level_2").hover(function () {
      $(".level_2 a").animate({backgroundColor: "gold"}, 500)
    }, function () {
      $(".level_2 a").animate({backgroundColor: "silver"}, 500)
    });
    $(".level_3").hover(function () {
      $(".level_3 a").animate({backgroundColor: "olive"}, 500)
    }, function () {
      $(".level_3 a").animate({backgroundColor: "gold"}, 500)
    });


});
