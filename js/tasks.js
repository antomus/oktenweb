// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 3275  —>  "3000 + 200 + 70 +5"

function numberToChunks(number) {
    if(!Number.isInteger(number)) {
      throw Error('please pass a number argument');
    }
  
    let numberChars = number.toString();
    let numberLength = numberChars.length;
    let index =  numberLength - 1;
    let resultStr = '';
  
    if(numberLength === 1) {
      return numberChars;
    }
  
    for(let digit of numberChars) {
      for(let i = 0; i < index; i++) {
        digit += '0';
      }
      if(resultStr.length > 0) {
        resultStr += "+" + digit;
      } else {
        resultStr += digit;
      }
      index -= 1;
    }
  
    return resultStr;
  }


  function isPowerOf2(num) {
    let result = 'NO';
    if(num === 2) {
      result = 'YES';
    }
    while(true) {
      num /= 2;
      console.log(num)
      if(num < 2) {
        result = 'NO';
        break;
      } else if (num === 2) {
        result = 'YES';
        break;
      }
    }
    return result;
  }

  //[1,2,3,4,5,2,4,1,3] -> 5
function numberFrequency(array) {
  let map = new Map();
  for(let el of array) {
    if(map.get(el)) {
      map.set(el, (map.get(el)+1));
    } else {
      map.set(el, 1);
    }
  }
  for (var [key, value] of map) {
    if(value % 2 !== 0) {
      return key;
    }
  } 
}

function isAnagram(str1,str2) {
  let str1Chars = str1.split('');
  let str2Chars = str2.split('');
  return str1Chars.sort().join() === str2Chars.sort().join();
}
