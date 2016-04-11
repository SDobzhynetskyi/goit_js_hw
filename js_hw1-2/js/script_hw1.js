
function pow() {
    var number = prompt ('Enter the number:');
    var powNumber = prompt ('Enter the pow nomber:');
    var result = 1;
    var i = 0;

    while (i < powNumber) {
      result = result * number;
      i++;
    }
    console.log (result);
}
pow();
