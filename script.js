const form = document.getElementById('form')
const input = document.getElementById('new-elem-input');
const listContainer = document.querySelector('.list-container');
const list = document.querySelector('.list');

let count = 0;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let todoEl = input.value;
        let obj = {
            "element": todoEl,
            "checked": false
        }

        localStorage.setItem(count, JSON.stringify(obj))
        count++;
        input.value = '';
        displayList();

})


displayList();

function displayList() {
    list.textContent = '';

    for (const [key, value] in Object.entries(localStorage)) {
        const keyofElem = localStorage.getItem(key);
        const elemToDo = JSON.parse(keyofElem);
        // const {element, checked} = elemToDo;
        // console.log()

        const label = document.createElement('label');
        label.id = count;
        list.appendChild(label);
        
        const div = document.createElement('div');
        div.classList.add('to-do-elem');
        label.appendChild(div);

        const radiobox = document.createElement('i');
        radiobox.classList.add('fa');
        radiobox.classList.add('fa-circle-o');
        radiobox.id = count;
        label.appendChild(radiobox);
        
        const p = document.createElement('p');
        // p.innerHTML = elemToDo;
        // p.innerHTML = (`key`, JSON.parse(value));
        label.appendChild(p);

        count++
    }
}


const allToDoElements = document.querySelectorAll('label');
console.log(allToDoElements);

allToDoElements.forEach(elem => elem.addEventListener('click', function(e) {
    const idElem = elem.id;
    const icons = document.querySelectorAll('i');
    const arr = Array.from(icons)
    let i = arr.filter(icon => icon.id == idElem);
    i[0].classList.toggle("fa-circle-o");
    i[0].classList.toggle('fa-check-circle-o');
}))