var choosenLink = document.getElementsByTagName("a");

for ( var i = 0; i < choosenLink.length; i++ ) {
  choosenLink[i].addEventListener("click", function(e) {
    e.preventDefault();
    var link = this.getAttribute("href");
    var openLink = document.querySelector("iframe");
    openLink.src = link;
  });
};
