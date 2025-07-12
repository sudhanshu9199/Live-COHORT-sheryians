let h = document.querySelector('h1');
// h.innerHTML = 'Ram Ram Sita.';  // changing the innerHTML text

h.style.color = 'purple'; // change the CSS
h.addEventListener('click', () => { // eventlistner
    console.log('Hey guyes');
    h.innerHTML = 'Ram Ram bhaiO'
})

let box = document.getElementById('box');
box.style.backgroundColor = 'darkblue';
box.innerHTML = 'Ram Ram'
box.addEventListener('dblclick', () => { 
    box.style.backgroundColor = 'darkgreen';
box.innerHTML = 'Sita Ram'
})

let heads = document.querySelectorAll('h2');
heads[1].style.backgroundColor = 'red'

// let heads = document.querySelectorAll('h2');
// console.log(heads);  // NodeList
// heads.forEach((elem) => {
//     elem.style.backgroundColor = 'green'
// })

// box.textContent = '<h1>Hello Wolrd</h1>'; // it is read as a text
box.innerHTML = '<h1>Hello Wolrd</h1>'; // it is read as an Whole html.

/* ---------------- */
let box2 = document.querySelector('.box2');
function changeBox() {
    console.log('Function run...');
    box2.innerHTML = 'changed';
    box2.style.backgroundColor = 'pink';
    
}
let button = document.querySelector('button');
button.addEventListener('click', changeBox )
/* ---------------- */

let para = document.querySelector('.day-37-last p');
let addBtn = document.querySelector('.day-37-last button');

let check = 0;
addBtn.addEventListener('click', () => {
    if (check === 0) {
        addBtn.textContent = 'Remove';
    addBtn.style.color = 'red';
    addBtn.style.backgroundColor = '#b6e36c';
    para.textContent = 'Friend';
    para.style.color = 'lightgreen';
    check = 1;
    }
    else {
        addBtn.textContent = 'Add Friend';
    addBtn.style.color = 'white';
    addBtn.style.backgroundColor = '#5a7920';
    para.textContent = 'Stranger';
    para.style.color = 'orange';
    check = 0;
    }
})
