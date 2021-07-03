
function changeColorNumber(number) {
    let num = number;                       
    if (num < 6 ) {  // related to colorChange.scss list length
    num++;
    } else {
      num = 0;  
    };
    return num;
  };
  
  export default changeColorNumber;