function noOfElements(x,y,z){
  let many=0;
  for (i=0; i<x.length; i++){
      
      if(x[i]>= y ){
          if(x[i]<= z){
         many= many +1;
      }}
  } return console.log (many);
}

var x= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,12];
var y=4;
var z= 10;
noOfElements(x,y,z);