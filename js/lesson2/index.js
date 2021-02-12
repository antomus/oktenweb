
// --створити масив та вивести його в консоль:
let foo = [1,2,3];
console.log(foo);
// - з 5 числових значень
let boo = [1,2,3,4,5];
// - з 5 стічкових значень
let strArray = ['a','b','c','d','e'];
// - з 5 значень стрічкового, числового та булевого типу
let mixedArray = ['a','b',1,2,true];
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let myArray = [];
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let index = 0; index < 10; index++) {
    document.write("<div>foo</div>");
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let index = 0; index < 10; index++) {
    document.write(`<div>foo${index}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
for (let index = 0; index < 10; index++) {
    document.write(`<h1>foo</h1>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let index = 0; index < 10; index++) {
    document.write(`<h1>foo${index}</h1>`);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let num10 = [1,2,3,4,5,6,7,8,9,10];
num10.forEach((el) => { console.log(el) });
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str10 = ['1','2','3','4','5','6','7','8','9','10'];
str10.forEach((el) => { console.log(el) });
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixed10 = ['1','2','3','4','5','6','7','8','9',10];
mixed10.forEach((el) => { console.log(el) });
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixed10 = ['1','2','3','4','5','6','7','8',false,10];
mixed10.forEach((el) => { if(typeof el === 'boolean') { console.log(el) } });
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
mixed10.forEach((el) => { if(typeof el === 'number') { console.log(el) } });
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
mixed10.forEach((el) => { if(typeof el === 'string') { console.log(el) } });
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let myArrayNew = [];
myArrayNew[0] = 1;
myArrayNew[1] = 2;
myArrayNew[2] = '3';
myArrayNew[3] = 1;
myArrayNew[4] = 2;
myArrayNew[5] = 3;
myArrayNew[6] = 1;
myArrayNew[7] = 2;
myArrayNew[8] = 3;
myArrayNew[9] = true;

myArrayNew.forEach((el) => { console.log(el) });

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let index = 0; index < 10; index++) {
    console.log(index);
    document.write(index);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let index = 0; index < 100; index++) {
    console.log(index);
    document.write(index);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let index = 0; index < 100; index += 2) {
    console.log(index);
    document.write(index);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let index = 0; index < 100; index++) {
    if(index % 2 === 0) {
        console.log(index);
        document.write(index);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let index = 0; index < 100; index++) {
    if(index % 2 !== 0) {
        console.log(index);
        document.write(index);
    }
}
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
(function(){
    let minutes = 0;
    let secondsStr = '';
    for (let second = 1; second <= 120; second++) {
        if(second < 10) {
            secondsStr = `0${second}`;
        }
        else if(second >= 10 && second < 60) {
            secondsStr = second;
        }
        else if(second > 60) {
            minutes = 1;
            if(second < 70) {
                secondsStr = `0${second - 60}`;
            } else {
                secondsStr = second - 60;
            }
        } else if(second === 120) {
            minutes = 2;
            secondsStr = '00';
        }
        console.log(`0${minutes}: ${secondsStr}`)
        
    }
})();
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
