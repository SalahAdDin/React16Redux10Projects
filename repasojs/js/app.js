const name = 'José Luis';
const job = 'Web developer';

console.log(`Name: ${name}, Job: ${job}`);

// const contentApp = document.querySelector('#app');

// let html = `<ul>
// <li>Name: ${name}</li>
// <li>Job: ${job}</li>
// </ul>
// `;

// contentApp.innerHTML = html;

function saludar (name){
    console.log('====================================');
    console.log(`Welcome ${name}!`);
    console.log('====================================');
}

saludar('Huseyin');
saludar('Musur');
saludar('Muhammet');


const client = function (name) {
    console.log('====================================');
    console.log(`Client: ${name}`);
    console.log('====================================');
}

client('José'); 

const persona = {
    name: 'José',
    profession: 'Web developer',
    age: 26
}
console.log('====================================');
console.log(`Persona: ${persona} \n Name: ${persona.name} \n Profession: ${persona['profession']}.`);
console.log('====================================');

function Tarea(name, subject){
    this.name = name;
    this.subject = subject;
}

Tarea.prototype.showWorkTaskInfo = function(){
    return `Tarea: ${this.name}, Priority: ${this.subject}`;
}

const tarea1 = new Tarea('Learn JS', 'Urgent');
console.log(tarea1);
console.log(tarea1.showWorkTaskInfo());


const learningJS = {
    version: {
        newer: 'ES6',
        older: 'ES5'
    },
    frameworks: ['VueJS', 'AngularJS']
}

// let version = learningJS.version.newer;
// let frameworks = learningJS.frameworks[1];

let {version, frameworks} = learningJS;
let {newer} = learningJS.version;

console.log('====================================');
console.log(learningJS);
console.log(version);
console.log(frameworks);
console.log(newer);
console.log('====================================');

const band = 'Gripin';
const gender = 'Pop';
const songs = ['Bes', 'Durma'];

// const gripin = {
//     band: band,
//     gender: gender,
//     songs: songs
// }

const gripin = {band, gender, songs};

console.log('====================================');
console.log(gripin);
console.log('====================================');

const person = {
    name: 'José',
    profession: 'Web developer',
    age: 26,
    showInfo: function(){
        console.log(`${this.name} is ${this.profession}.`);  
    }
}

person.showInfo();


const basket = ['Product 1', 'Product 2', 'Product 3'];

const contentApp = document.querySelector('#app');

let html = '';
basket.forEach(product => {
    html += `<li>${product}</li>`;
})
contentApp.innerHTML = html;

basket.map(product => {
    return `The product is ${product}`;
});

console.log('====================================');
console.log(Object.keys(person));
console.log('====================================');


// Spread operator...

let languages = ['JavaScript', 'PHP', 'Python'];
// let frameworks = ['ReactJS', 'Laravel', 'Django'];

let comb1 = languages.concat(frameworks);
let comb2 = [...languages, ...frameworks];
let newFramworks = [...frameworks];

let [last] = [...languages].reverse();
// reverse() reverse the array, that's why we create a new copy over we will reverse

function suma(a, b, c){
    console.log(a+b+c);
}

const numbers = [1,2,3];

console.log('====================================');
console.log(comb1);
console.log(comb2);
console.log(newFramworks);
suma(...numbers);
console.log('====================================');

// Methods: filter, find, reduce

const students = [
    {name:'Juan', age: 23, studying:'JavaScript'},
    {name:'Pablo', age: 18, studying:'PHP'},
    {name:'Alejandra', age: 21, studying:'Adobe XD'},
    {name:'Karen', age: 30, studying:'Python'},
    {name:'Miguel', age: 35, studying:'ReactJS'}
]

const mayores = students.filter(student => { 
    return student.age > 28;
});

const alejandra = students.find(student => {
    return student.name === 'Alejandra';
});

let total_age = students.reduce((totalAge, student) => {
    return totalAge + student.age;
}, 0);

console.log('====================================');
console.log(students);
console.log(mayores);
console.log(alejandra);
console.log(`${alejandra.name} is learning ${alejandra.studying}`);
console.log(`Age's Average: ${total_age / students.length}`);
console.log('====================================');

// Promises

const applyDiscount = new Promise((resolve, reject) => {
    setTimeout(() => {
        let discount = true;

        if(discount){
            resolve('Discount applied!');
        } else {
            reject('The discount could not be applied');
        }
    }, 3000);
});

applyDiscount.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})