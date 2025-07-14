// setTimeout(() => {
//     console.log('Hello sheryali');
// }, 3000)

let statuses = document.querySelector(".day-39-task1 .card p");
let btnTag = document.querySelector(".day-39-task1 .card .btn");

let isFriend = false;
btnTag.addEventListener("click", () => {
  statuses.innerHTML = "Request sending...";
  statuses.style.color = "gold";
  btnTag.innerHTML = "await...";
  btnTag.style.backgroundColor = "purple";

  if (!isFriend) {
    setTimeout(() => {
      statuses.innerHTML = "Friend";
      statuses.style.color = "green";
      btnTag.innerHTML = "Remove";
      btnTag.style.backgroundColor = "red";
      isFriend = true;
    }, 3000);
  } else {
    statuses.innerHTML = "Stranger";
    statuses.style.color = "red";
    btnTag.innerHTML = "Add Friend";
    btnTag.style.backgroundColor = "#039808";
    isFriend = false;
  }
});


let growth = document.querySelector('.day-39-task .container .loader .growth');
let percent = document.querySelector('.day-39-task .container .top #percent');
let downBtn = document.querySelector('.day-39-task .container .bottom button');

let grow = 1;
downBtn.addEventListener('click', () => {
    let inter = setInterval(()=> {
        percent.innerHTML = `${grow}%`
        growth.style.width = `${grow}%`
        grow++;
    }, 120);

    setTimeout(() => {
        clearInterval(inter);
        downBtn.innerHTML = 'Downloaded';
        downBtn.style.opacity = '0.5'
        downBtn.style.cursor = 'not-allowed';
    }, 12000);
})