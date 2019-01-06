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
