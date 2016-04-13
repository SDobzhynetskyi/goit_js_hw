

var listUsernames = [];

for (var i = 0; i < 5; i++) {
  listUsernames.push( prompt('Enter your nane:'));
}
console.log(listUsernames);

var username = prompt('Username:');
var check = false;
for (var i = 0 in listUsernames) {
  if (username !== listUsernames[i]) {
    continue;
  } else {
    check = username;
    }
}
if (check !== false) {
  alert (check + " you are successfully logged in");
} else {
  alert ('ERROR');
}
