let colorBox = document.querySelector(".day-38 #box");
let change = document.querySelector(".day-38 button");

change.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  colorBox.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});

/**IPL winner guess day 38 */
let guessBtn = document.querySelector(".day-38-ipl .contain button");
let guessDisplay = document.querySelector(".team p");

let arr = ["CSK", "RCB", "KKR", "MI", "LSG", "PBKS", "GT", "DC", "RR", "SRH"];

guessBtn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * arr.length);
  let winner = arr[num];
  guessDisplay.innerHTML = `${winner}`;
});
