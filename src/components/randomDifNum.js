
function randomDifNum(number) {
  let num = number;                       
  while (num == number) {
    num = Math.floor(Math.random() * (9 + 1)); // related to RandomColor.scss list length
  }
  return num;
}

export default randomDifNum;