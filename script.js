const input = document.getElementById('new-elem-input');
const listContainer = document.querySelector('.list-container');
const list = document.querySelector('.list');

let count = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 13 && input.value) {
        let todoEl = input.value;
        // todoEl.textContent = '';
        localStorage.setItem(count,todoEl)
        count++;
        input.value = '';
        displayList();
}}
)

displayList();

function displayList() {
    list.textContent = '';
    for (const [key, value] in Object.entries(localStorage)) {
        const elemToDo = localStorage.getItem(key)

        const label = document.createElement('label');
        list.appendChild(label);
        
        const div = document.createElement('div');
        div.classList.add('to-do-elem');
        label.appendChild(div);

        const radiobox = document.createElement('input');
        radiobox.type = 'radio';
        label.appendChild(radiobox);
        
        const p = document.createElement('p');
        p.innerHTML = elemToDo;
        label.appendChild(p)
    }
}


const allToDoElements = document.querySelectorAll('.to-do-elem');
console.log(allToDoElements);

allToDoElements.forEach(elem => elem.addEventListener('click', function(e) {
    console.log(e.target)
}))