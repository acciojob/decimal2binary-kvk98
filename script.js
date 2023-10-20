// function decimalToBinary(num) {
//   //Write you code here
// 	let binaryNum = "";
//   while (num >=2) {
// 	  let remainder = num % 2;
//   	binaryNum = binaryNum + remainder;
// 	  num = Math.floor(num/2);
//   }
// 	if (num === 1) {
// 		binaryNum = 1 + binaryNum;
// 	}
// 	else if(num === 0) {
// 		binaryNum = 0 + binaryNum;
// 	}
// 	console.log(binaryNum);
// }

// window.decimalToBinary = decimalToBinary;


function decimalToBinary(num) {
  if (num === 0) {
    return "0";
  }

  let binaryNum = "";
  while (num > 0) {
    let remainder = num % 2;
    binaryNum = remainder + binaryNum;
    num = Math.floor(num / 2);
  }

  return binaryNum;
}

// You don't need to export it to the window object unless you specifically need to do so.
