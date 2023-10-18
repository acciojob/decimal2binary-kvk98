function decimalToBinary(num) {
  //Write you code here
	let binaryNum = "";
  while (num >=2) {
  	binaryNum = binaryNum + (num%2);
	  num = Math.floor(num/2);
  }
	if (num === 1) {
		binaryNum = 1 + binaryNum;
	}
	console.log(binaryNum);
}

window.decimalToBinary = decimalToBinary;
