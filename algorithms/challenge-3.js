function noOfElements3(x, y) {
  let many = [];
  for (i = 0; i < x.length; i++) {
    if (x[i] % y === 0) {
      many.push(x[i]);
    }
  }
  return console.log(many);
}

var x = [1, 3, 5, 6, 3, 6, 7, 4];
var y = 2;
noOfElements3(x, y);
