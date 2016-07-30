$(function () {

function dataShow(data) {
  for (var i in data.hits) {
    $(".searchResult").append("<a class="+i+" href="+data.hits[i].pageURL+" target="+"_blank"+"></a");
    $("."+i).append("<img src="+data.hits[i].previewURL+">");
  };
};

function runSearch() {
  var searchQuery = $("input[type=text]").val();
  $.ajax({
    url: "https://pixabay.com/api/?key=2895411-8c41fdba81c706daeb9d2ffc3&q="+searchQuery+"&image_type=photo&orientation=horizontal",
    dataType : "jsonp",
    success: function (data) {
      if (data.hits.length == 0) {
        alert("No images according your request!\nCheck your input data!")
      }  else {
      dataShow(data);
      };
    },
  });
};

function resultShow() {
  $(".logo").addClass("logoSmall");
  $("figcaption").remove();
  $("figure img").attr("src", "img/logoGoogleSmall.png");
  $(".searchForm").addClass("searchFormSmall");
  $("input").addClass("inputForm");
  $("input[type=button]").css({"display": "inline-block", "margin": "0"});
  $(".searchResult").addClass("searchResultShow");
};

function resultFunction(e) {
  if (e.keyCode == 13) {
    cleanPage();
    runSearch();
    resultShow();
  };
};

function cleanPage() {
  $(".searchResult").empty();
};

$(document).on("keypress", resultFunction);
$("input[type=button]").on("click", function () {
  cleanPage();
  runSearch();
  resultShow();
})

});
