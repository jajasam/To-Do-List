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
        p.innerHTML = elemToDo;
        label.appendChild(p)

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
    i[0].classList.toggle("fa-circle-o")
    i[0].classList.toggle('fa-check-circle-o')
    
    
    // (i.classList.contains('fa-circle-o') ? console.log('si papi') : console.log('nahh'));



    // i.classList.add('fa-check-circle-o') && i.classList.remove('fa-circle-o') : 
    // i.classList.add('fa-circle-o') && i.classList.remove('fa-check-circle-o'));



    // console.log(icons.idElem)

    // iconToChange.classList.contains('fa-circle-o') ? 
    // iconToChange.classList.add('fa-check-circle-o') && iconToChange.classList.remove('fa-circle-o') : 
    // iconToChange.classList.add('fa-circle-o') && iconToChange.classList.remove('fa-check-circle-o')

}))