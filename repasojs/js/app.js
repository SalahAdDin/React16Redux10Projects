const name = 'José Luis';
const job = 'Web developer';

console.log(`Name: ${name}, Job: ${job}`);

const contentApp = document.querySelector('#app');
let html = `<ul>
<li>Name: ${name}</li>
<li>Job: ${job}</li>
</ul>
`;
contentApp.innerHTML = html;

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