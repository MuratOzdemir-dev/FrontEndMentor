const titles = document.querySelectorAll(".faq__card__title");
const cards = document.querySelectorAll(".faq__card");

for (let index = 0; index < titles.length; index++) {
  titles[index].addEventListener("click", (e) => {
    cards[index].classList.toggle("open");
  });
}
