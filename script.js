function decimalToBinary(num) {
  //Write you code here
	let binaryNum = "";
  while (num >=2) {
  	binaryNum = binaryNum + (num%2);
	  num = Math.floor(num/2);
  }
	console.log(binaryNum);
}

window.decimalToBinary = decimalToBinary;
