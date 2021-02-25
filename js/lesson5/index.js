// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
function TagBuilder(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}

let a = new TagBuilder(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
        {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
        {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
        {titleOfAttr: 'hreflang', actionOfAttr: 'Идентифицирует язык текста по ссылке.'},
        {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
        {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами.'},
        {titleOfAttr: 'rev', actionOfAttr: 'Отношения между текущим и ссылаемым документами.'},
        {titleOfAttr: 'shape', actionOfAttr: 'Задает форму активной области ссылки для изображений.'},
        {titleOfAttr: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между ссылками при нажатии на кнопку Tab.'},
        {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'},
        {titleOfAttr: 'type', actionOfAttr: 'Указывает MIME-тип документа, на который ведёт ссылка.'}
    ]
);
let div = new TagBuilder(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
    ]
);
let h1 = new TagBuilder(
    'h1',
    'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <h1>.'}
    ]
);
let span = new TagBuilder(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа.',
    []
);
let input = new TagBuilder(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [
        {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
    ]
);
let form = new TagBuilder(
    'form',
    'Тег <form> устанавливает форму на веб-странице. ',
    [
        {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
        {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}
    ]
);
let option = new TagBuilder(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [
        {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
        {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
        {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},

    ]
);
let select = new TagBuilder(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
        {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}
    ]
);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

let a_2 = new Tag(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
        {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
        {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
        {titleOfAttr: 'hreflang', actionOfAttr: 'Идентифицирует язык текста по ссылке.'},
        {titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.'},
        {titleOfAttr: 'rel', actionOfAttr: 'Отношения между ссылаемым и текущим документами.'},
        {titleOfAttr: 'rev', actionOfAttr: 'Отношения между текущим и ссылаемым документами.'},
        {titleOfAttr: 'shape', actionOfAttr: 'Задает форму активной области ссылки для изображений.'},
        {titleOfAttr: 'tabindex', actionOfAttr: 'Определяет последовательность перехода между ссылками при нажатии на кнопку Tab.'},
        {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'},
        {titleOfAttr: 'type', actionOfAttr: 'Указывает MIME-тип документа, на который ведёт ссылка.'}
    ]
);
let div_2 = new Tag(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
    ]
);
let h1_2 = new Tag(
    'h1',
    'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    [
        {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <h1>.'}
    ]
);
let span_2 = new Tag(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа.',
    []
);
let input_2 = new Tag(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    [
        {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
    ]
);
let form_2 = new Tag(
    'form',
    'Тег <form> устанавливает форму на веб-странице. ',
    [
        {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
        {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'}
    ]
);
let option_2 = new Tag(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
    [
        {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
        {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
        {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},

    ]
);
let select_2 = new Tag(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
    [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
        {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'}
    ]
);


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let car = {
    producer: 'BMW',
    yearBuild: 2016,
    maxSpeed: 220,
    engineVolume: 3,
    driver: null,
    drive: function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    },
    info: function() {
        console.log(`producer: ${this.producer} yearBuild: ${this.yearBuild} engineVolume ${this.engineVolume}`) 
    },
    increaseMaxSpeed: function(newSpeed) {
        if(Number.isInteger(newSpeed)) {
            this.maxSpeed = newSpeed;
        } else {
            console.log('please pass an integer value');
        }
    },
    changeYear: function(newYear) {
        if(Number.isInteger(newYear)) {
            this.yearBuild = newYear;
        } else {
            console.log('please pass an integer value');
        }
    },
    addDriver: function(driver) {
        if(typeof drive === 'object') {
            this.driver = driver;
        } else {
            console.log('please pass driver object'); 
        }
    }
}

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function CarBuilder(producer, yearBuild, maxSpeed, engineVolume, driver) {
    this.producer = producer;
    this.yearBuild = yearBuild;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = driver;

    // ====================== METHODS ======================

    this.drive = function() { console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`) };
    this.info = function() {
        console.log(`producer: ${this.producer} yearBuild: ${this.yearBuild} engineVolume ${this.engineVolume}`) 
    };
    this.increaseMaxSpeed = function(newSpeed) {
        if(Number.isInteger(newSpeed)) {
            this.maxSpeed += newSpeed;
        } else {
            console.log('please pass an integer value');
        }
    };
    this.changeYear = function(newYear) {
        if(Number.isInteger(newYear)) {
            this.yearBuild = newYear;
        } else {
            console.log('please pass an integer value');
        }
    }
    this.addDriver = function(driver) {
        if(typeof drive === 'object') {
            this.driver = driver;
        } else {
            console.log('please pass driver object'); 
        }
    }
}
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class Car {
    constructor(producer, yearBuild, maxSpeed, engineVolume, driver) {
        this.producer = producer;
        this.yearBuild = yearBuild;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = driver;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info() {
        console.log(`producer: ${this.producer} yearBuild: ${this.yearBuild} engineVolume ${this.engineVolume}`) 
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newYear) {
        this.yearBuild = newYear;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let myCar = new Car('BMW', 2016, 220, 3, {});

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Cinderella {
    constructor(name, age, feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas1 = [
    new Cinderella('Linda',20, 38),
    new Cinderella('Julia',21, 36),
    new Cinderella('Joanna',20, 37),
    new Cinderella('Anna',20, 35),
    new Cinderella('Marry',21, 39),
    new Cinderella('Jane',20, 38),
    new Cinderella('Victoria',19, 36),
    new Cinderella('Olivia',18, 37),
    new Cinderella('Emma',20, 40),
    new Cinderella('Sophia',21, 44)
];

let prince1 = new Prince('Joe', 21, 44);

for (let index = 0; index < cinderellas1.length; index++) {
    const cinderella = cinderellas1[index];
    if(prince1.shoeSize === cinderella.feetSize) {
        console.log(cinderella);
    }
}

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function CinderellaBuilder(name, age, feetSize) {
    this.name = name;
    this.age = age;
    this.feetSize = feetSize;
}

function princeBuilder(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

let cinderellas2 = [
    new CinderellaBuilder('Linda',20, 38),
    new CinderellaBuilder('Julia',21, 36),
    new CinderellaBuilder('Joanna',20, 37),
    new CinderellaBuilder('Anna',20, 35),
    new CinderellaBuilder('Marry',21, 39),
    new CinderellaBuilder('Jane',20, 38),
    new CinderellaBuilder('Victoria',19, 36),
    new CinderellaBuilder('Olivia',18, 37),
    new CinderellaBuilder('Emma',20, 40),
    new CinderellaBuilder('Sophia',21, 44)
];

let prince1 = new princeBuilder('Joe', 21, 44);

for (let index = 0; index < cinderellas1.length; index++) {
    const cinderella = cinderellas1[index];
    if(prince1.shoeSize === cinderella.feetSize) {
        console.log(cinderella);
    }
}