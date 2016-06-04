$(function () {

  var html = $("#myTmpl").html();

  var data = {
    name: {
      first: "Sergii ",
      last: "Dobzhynetskyi"
    },
    photo: {
      pic: "img/pictureCV.JPG",
      alt_pic: "myPicture",
      width_pic: "150px",
      height_pic: "150px",
    },
    contacts: ["Skype: serhiy.dobzhynetskiy", "e-mail: sergii.dobzhynetskyi@gmail.com", "cell: +380677847452"],
    skills: {
      lenguiges: ["html5", "css3", "JS"],
      librerys: ["jquery", "lodash"],
    },
  };
  var content = tmpl(html, data);

  $(".template_create_box").append(content);

});
