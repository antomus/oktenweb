
// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

let hello = 'hello';
let owu = 'owu'; 
let com = 'com'; 
let ua = 'ua';
let number1 = 1;
let number10 = 10
let number999 = -999;
let number123 = 123;
let numberPi = 3.14;
let number2_7 = 2.7;
let number16 = 16;
let boolTrue = true;
let boolFalse = false;

console.log(`hello: ${hello}`);
console.log(`owu: ${owu}`);
console.log(`com: ${com}`);
console.log(`ua: ${ua}`);
console.log(`number1: ${number1}`);
console.log(`number10: ${number10}`);
console.log(`number999: ${number999}`);
console.log(`number123: ${number123}`);
console.log(`numberPi: ${numberPi}`);
console.log(`number2_7: ${number2_7}`);
console.log(`number16: ${number16}`);
console.log(`boolTrue: ${boolTrue}`);
console.log(`boolFalse: ${boolFalse}`);

alert(`hello: ${hello}`);
alert(`owu: ${owu}`);
alert(`com: ${com}`);
alert(`ua: ${ua}`);
alert(`number1: ${number1}`);
alert(`number10: ${number10}`);
alert(`number999: ${number999}`);
alert(`number123: ${number123}`);
alert(`numberPi: ${numberPi}`);
alert(`number2_7: ${number2_7}`);
alert(`number16: ${number16}`);
alert(`boolTrue: ${boolTrue}`);
alert(`boolFalse: ${boolFalse}`);

// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

document.write(`hello: ${hello}`);
document.write(`owu: ${owu}`);
document.write(`com: ${com}`);
document.write(`ua: ${ua}`);
document.write(`number1: ${number1}`);
document.write(`number10: ${number10}`);
document.write(`number999: ${number999}`);
document.write(`number123: ${number123}`);
document.write(`numberPi: ${numberPi}`);
document.write(`number2_7: ${number2_7}`);
document.write(`number16: ${number16}`);
document.write(`boolTrue: ${boolTrue}`);
document.write(`boolFalse: ${boolFalse}`);

let hello = 'hello' + Math.random();
let owu = 'owu' + Math.random() ; 
let com = 'com' + Math.random(); 
let ua = 'ua' + Math.random();
let number1 = 1 + Math.random();
let number10 = 10 + Math.random();
let number999 = -999 + Math.random();
let number123 = 123 + Math.random();
let numberPi = 3.14 + Math.random();
let number2_7 = 2.7 + Math.random();
let number16 = 16 + Math.random();
let boolTrue = true + Math.random();
let boolFalse = false + Math.random();

console.log(`hello: ${hello}`);
console.log(`owu: ${owu}`);
console.log(`com: ${com}`);
console.log(`ua: ${ua}`);
console.log(`number1: ${number1}`);
console.log(`number10: ${number10}`);
console.log(`number999: ${number999}`);
console.log(`number123: ${number123}`);
console.log(`numberPi: ${numberPi}`);
console.log(`number2_7: ${number2_7}`);
console.log(`number16: ${number16}`);
console.log(`boolTrue: ${boolTrue}`);
console.log(`boolFalse: ${boolFalse}`);

alert(`hello: ${hello}`);
alert(`owu: ${owu}`);
alert(`com: ${com}`);
alert(`ua: ${ua}`);
alert(`number1: ${number1}`);
alert(`number10: ${number10}`);
alert(`number999: ${number999}`);
alert(`number123: ${number123}`);
alert(`numberPi: ${numberPi}`);
alert(`number2_7: ${number2_7}`);
alert(`number16: ${number16}`);
alert(`boolTrue: ${boolTrue}`);
alert(`boolFalse: ${boolFalse}`);

document.write(`hello: ${hello}`);
document.write(`owu: ${owu}`);
document.write(`com: ${com}`);
document.write(`ua: ${ua}`);
document.write(`number1: ${number1}`);
document.write(`number10: ${number10}`);
document.write(`number999: ${number999}`);
document.write(`number123: ${number123}`);
document.write(`numberPi: ${numberPi}`);
document.write(`number2_7: ${number2_7}`);
document.write(`number16: ${number16}`);
document.write(`boolTrue: ${boolTrue}`);
document.write(`boolFalse: ${boolFalse}`);

// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const NUM1 = 1;
const NUM2 = 2;
const NUM3 = 3;

const STR1 = 'ONE';
const STR2 = 'TWO';
const STR3 = 'THREE';

console.log(`NUM1: ${NUM1}`);
console.log(`NUM2: ${NUM2}`);
console.log(`NUM3: ${NUM3}`);
console.log(`STR1: ${STR1}`);
console.log(`STR2: ${STR2}`);
console.log(`STR3: ${STR3}`);

alert(`NUM1: ${NUM1}`);
alert(`NUM2: ${NUM2}`);
alert(`NUM3: ${NUM3}`);
alert(`STR1: ${STR1}`);
alert(`STR2: ${STR2}`);
alert(`STR3: ${STR3}`);

document.write(`NUM1: ${NUM1}`);
document.write(`NUM2: ${NUM2}`);
document.write(`NUM3: ${NUM3}`);
document.write(`STR1: ${STR1}`);
document.write(`STR2: ${STR2}`);
document.write(`STR3: ${STR3}`);

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
function fio() {
    let firstName = prompt("Ім'я:");
    let paternity = prompt("По батькові:");
    let lastName = prompt("Прізвище:");

    console.log(`firstName: ${firstName}`);
    console.log(`paternity: ${paternity}`);
    console.log(`lastName: ${lastName}`);

    alert(`firstName: ${firstName}`);
    alert(`paternity: ${paternity}`);
    alert(`lastName: ${lastName}`);

    document.write(`firstName: ${firstName}`);
    document.write(`paternity: ${paternity}`);
    document.write(`lastName: ${lastName}`);

    let person = firstName + " " + paternity + " " + lastName;

    console.log(`person: ${person}`);
}

// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
let num1 = + prompt("num1:");
let num2 = + prompt("num2:");
let num3 =  + prompt("num3:");

console.log(`num1 ${num1} num2 ${num2} num3 ${num3}`); 

// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let num1 = parseInt(prompt("num1:"), 10);
let num2 = parseInt(prompt("num2:"), 10);
let num3 =  parseInt(prompt("num3:"), 10);
let num4 =  parseInt(prompt("num4:"), 10);
let result = num1 + num2 + num3 + num4;

console.log(`result ${result}`); 


// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let num1 = parseFloat(prompt("num1:"), 10);
let num2 = parseFloat(prompt("num2:"), 10);
let num3 =  parseFloat(prompt("num3:"), 10);
let num4 =  parseFloat(prompt("num4:"), 10);
let result = num1 + num2 + num3 + num4;

console.log(`result ${result}`); 


// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let num1 = Math.round(prompt("num1:"));
let num2 = Math.round(prompt("num2:"));
let num3 =  Math.round(prompt("num3:"));

let result = num1 + num2 + num3;

console.log(`result ${result}`); 

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let num = parseInt(prompt("num:"), 10);
let power = parseInt(prompt("power:"), 10);
let result = Math.pow(num, power);

console.log(`result ${result}`); 


// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
let a = 100; let b = '100'; let c = true; let d = undefined;
console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную

//     5 ? 6 -> true
let num56gt = (5 < 6);
//     5 ? 6 -> false
let num56lt = (5 > 6);
//     5 ? 6 -> false
let num56eq = (5 === 6);
//     5 ? 6 -> false
let num56eq2 = (5 == 6);
let num1010eq = (10 === 10);
//     10 ? 10 -> true
let num1010eq2= (10 == 10);
//     10 ? 10 -> true
let num10101 = (10 > 10);
//     10 ? 10 -> false
let num10102 = (10 < 10 );
//     10 ? 10 -> false
let num10103 = (10 != 10);
//     10 ? 10 -> false
let num10103 = (10 !== 10);
//     123 ? '123' -> false
let num123lt = (123 > 123);
//     123 ? '123' -> true
let num123eq = (123 === 123);

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );
false
// console.log(34 > 33 && 23 < 90 );
true
// console.log(99 > 100 && 45 > 12 );
false
// console.log(132 > 100 || 45 < 12 );
true
// console.log(111 > 11 || 45 < 111 );
true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
true
// console.log(!!'-1');
true
// console.log(!!-1);
true
// console.log(!!'0');
true
// console.log(!!'null');
true
// console.log(!!'undefined');
true
// console.log(!!(3/'owu'));
NaN
// console.log((111 > 11 || 45 < 111) ||  !!'0');
true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
false

// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str = "Привет";
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str === 'string')
console.log(typeof num === 'number')
console.log(typeof flag === 'boolean')
console.log(typeof txt === 'string')

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
//     поместив результат каждого выражения в соответствующую переменную. Например let a1 = 5 + 3.

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';

// 4. Напишите код; который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
let width = 10;
let height = 23;
let s = width * height;

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

function calculateCylinderVolume(h, d) {
    return h * Math.PI * Math.pow(d/2, 2);
}

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);

// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let hello = "Hello world";
console.log(hello);
alert(hello);
document.write(hello);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

    let firstName = prompt("Ім'я:");
    let paternity = prompt("По батькові:");
    let lastName = prompt("Прізвище:");
    let age = prompt("Вік:");
    let hobby = prompt("Хобі:");



    alert(`${firstName} ${paternity} ${lastName}\n ${age}\n ${hobby}`);
 
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = "Кто";
let str2 = 'ты';
let str3 = 'такой?';
let concatenation = `${str1} ${str2} ${str3}`;
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>"); 205
//      document.write(str - a + "<br/>"); 15
//      document.write(str * "2" + "<br/>"); 40
//      document.write(str / 2 + "<br/>"); 10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") 3
//     parseInt("-7.875") -7 
//     parseInt("435") 435
//     parseInt("Вася") NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let num1 = prompt("Перше число");
let num2 = prompt("Друге число");
alert(num1 + num2);
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
function fioGreeting() {
    let firstName = prompt("Імя");
    let lastName = prompt("Прізвище");
    let age = prompt("вік");
    alert(`Доброго вечера ${firstName} ${lastName}, мои поздравления что вам ${age}`);
}


// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
function grow() {
    let num1 = prompt("Перше число");
    let num2 = prompt("Друге число");
    let num3 = prompt("Третє число");
    let tmp = null;
    if(num1 > num2) {
        tmp = num2;
        num2 = num1;
        num1 = tmp;
    }
    if(num2 > num3) {
        tmp = num3;
        num3 = num2;
        num2 = tmp;
    }
    if(num1 > num2) {
        tmp = num2;
        num2 = num1;
        num1 = tmp;
    }
}

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

function trafficLight() {
    let light = pompt("Введите цвет светофора!");
    let isRoadClear = confirm("Дорога свободна?");

    switch (light) {
        case 'зеленый':
            if(isRoadClear) {
                result = 'иди';
            } else {
                result = "подожди пока нарушители проедут";
            }
            break;
        case 'желтый':
            if(isRoadClear) {
                result = "жди";
            } else {
                result = "все равно жди";
            }
            break;
        case 'красный':
            if(isRoadClear) {
                result = "стой все рано";
            } else {
                result = "стой и жди";
            }
            break;
    
        default:
            result = 'делай что хочешь';
            break;
    }
}