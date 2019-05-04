const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
// const listItems = document.getElementsByClassName("listItems");
const listItems = document.querySelectorAll(".listItems");
console.log(listItems);
// Set Menu State
let state = false;
//When click Menu Button
menuBtn.addEventListener("click", show);

// function to change menu Button
function show() {
  if (!state) {
    menuBtn.classList.add("show");
    menu.classList.add("show");
    listItems.forEach(item => item.classList.add("show")); //require NodeList (querySelectorAll)/ If us getElementByClassName, need use for loop
    state = true;
  } else {
    menuBtn.classList.remove("show");
    menu.classList.remove("show");
    listItems.forEach(item => item.classList.remove("show"));
    state = false;
  }
}

window.onload = function() {
  const name = document.getElementsByClassName("name");
  const role = document.getElementsByClassName("role");
  const icons = document.getElementsByClassName("icons");
  const text = "<Hello World./>";
  let markup = document.getElementsByClassName("title");

  for (let i = 0; i < text.length; i++) {
    setTimeout(() => (markup[0].innerHTML += text[i]), i * 90);
  }

  setTimeout(() => name[0].classList.add("load"), 90);
  setTimeout(() => role[0].classList.add("load"), 180);
  setTimeout(() => icons[0].classList.add("load"), 270);
};
