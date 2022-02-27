function noOfElements4(x, y) {
  let arr1 = 0;
  let arr2 = 0;
  for (i = 0; i < x.length; i++) {
    arr1 = arr1 + x[i];
  }
  for (i = 0; i < y.length; i++) {
    arr2 = arr2 + y[i];
  }
  if (arr1 > arr2) {
    return console.log(arr1);
  }
  return console.log(arr2);
}

var x = [1, 3, 5, 6, 3, 6, 7, 4];
var y = [1, 3, 5, 6, 3, 6, 7, 46];
noOfElements4(x, y);
