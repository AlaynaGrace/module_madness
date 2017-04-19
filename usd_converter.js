function converter(number){ //will take in a random number but for now takes any number
  var total = '$'; //total will have the entire balance at the end in string form
  var beforeDeci = parseInt(number).toString();
  //was originally named because I assumed we would use floats
  //beforeDeci makes sure the number is an int and then turns it into a string

  // var afterDeci = (number - beforeDeci).toFixed(2).toString();

  //for loop that will go through each character in the string
  for(var i=0;i<beforeDeci.length;i++){

    if((beforeDeci.length - i) % 3 === 0 && i !== 0){
      total += ',';
      //Wanted to check starting from the end of the string and not the front
      // used beforeDeci.length - i to keep track of the end of the line
      // if (beforeDeci.length - i) was divisible by 3, it put a comma in the code and then the number
      // it would not put a comma in first if i === 0
    }
    total += beforeDeci.charAt(i); //adds the number to the string

  }


  return total; //return the finished string


}


module.exports = converter; //export the function so it can be used in other modules
