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

// 1) Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.
function rgb(r,g,b) {
  r = r === undefined ? 0 : r;
  g = g === undefined ? 0 : g;
  b = b === undefined ? 0 : b;
  return `rgb(${r},${g},${b})`;
}

// 2) создать функцию которая будет принимать два массива:
// - с ключами
// - с значениями
// и будет возвращать объект полученный в результате склеивания этих двух массивов
// пример:
// zip(['name', 'age', 'status'], ['Kira', 12, false])  —>  { name: 'Kira', age: 12, status: false }
function zip(keys, values) {
  let result = {};
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    result[key] = values[index];
  }
  return result;
}

// 3) создать функцию которая будет принимать любое количество чисел,
// и будет возвращать массив без дубликатов uniq(1, 2, 2, 3, 4, 2, 4, 5) —> [1,2,3,4,5]
function uniq(...numbers) {
  let result = [];
  for(let number of numbers) {
    if(!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
} 


// 4) создать функцию которая принимает число (высоту) и делает половину пирамидки (как в игре марио)

function drawPyramid(height) {
  if(!Number.isInteger(height)){
    throw Error('heigh should be an integer');
  }
  for(let i = 1; i <= height; i++) {
    let array = new Array(height);
    for(j = 0; j < i; j++) {
      array.push('*');
    }
    for(k = 0; k < (height - i); k++) {
      array[k] = ' ';
    }
    console.log(array.join(''));
  }
}