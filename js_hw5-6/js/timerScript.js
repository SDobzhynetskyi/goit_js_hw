var milliSeconds = document.getElementById('mlseconds');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minute');
var houers = document.getElementById('houers');

var i = 0;
function milliSec() {
  if (i < 10) {
    milliSeconds.innerHTML = '00' + i;
  } else if (i < 100) {
    milliSeconds.innerHTML = '0' + i;
  } else if (i < 1000){
    milliSeconds.innerHTML =  i;
  } else {
    i = 0;
  }
  i++;
};

var s = 0;
function sec() {
  if (s < 10) {
    seconds.innerHTML = '0' + s;
  }
  s++;
};



setInterval(milliSec, 10);
setInterval(sec, 1000);
