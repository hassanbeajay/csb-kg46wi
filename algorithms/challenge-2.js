function noOfElements2(x, y, z) {
  let many = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] % y === 0) {
      if (x[i] >= z) {
        many = many + 1;
      }
    }
  }
  return console.log(many);
}

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 22];
var y = 2;
var z = 15;
noOfElements2(x, y, z);
