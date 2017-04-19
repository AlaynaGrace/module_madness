function converter(number){
  // number = parseFloat(number).toFixed(2);
  var total = '$';
  var beforeDeci = parseInt(number).toString();
  var afterDeci = (number - beforeDeci).toFixed(2).toString();
  for(var i=0;i<beforeDeci.length;i++){

    if((beforeDeci.length - i) % 3 === 0 && i !== 0){
      total += ',';
    }
    total += beforeDeci.charAt(i);

  }


  return total;


}


module.exports = converter;
