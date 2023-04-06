document.addEventListener("DOMContentLoaded", function () {
 
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("open")
  })
});


document.getElementById("burger").addEventListener("click", function () {
  document.body.classList.toggle("lock")
 })

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
       document.querySelector(".header").classList.remove("open")
  }
});

document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open")
});



  console.log('По макету совпадает в соответствии/n с требованиями. Валидацию проходит./n Изза мелких неточностей оцениваю свою работу на 97%') 
