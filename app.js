const dropdownListEl = document.querySelectorAll(".dropdown-list-el");
const dropdownListText = document.querySelectorAll(".dropdown-list-text");
const dropdownListImg = document.querySelectorAll(".dropdown-list-img");

for (let i = 0; i < dropdownListEl.length; i++) {
  dropdownListEl[i].addEventListener("click", function () {
    if (dropdownListText[i].hidden == true) {
      dropdownListText[i].hidden = false;
      dropdownListImg[i].style = `background-image: url(./assets/minus.svg);`;
    } else {
      dropdownListText[i].hidden = true;
      dropdownListImg[i].style = `background-image: url(./assets/plus.svg)`;
    }
  });
}
