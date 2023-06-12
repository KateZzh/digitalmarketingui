const dropdownListEl = document.querySelectorAll(".dropdown-list-el");
const dropdownListText = document.querySelectorAll(".dropdown-list-text");
const dropdownListImg = document.querySelectorAll(".dropdown-list-img");

dropdownListEl[0].addEventListener("click", function () {
  if (dropdownListText[0].hidden == true) {
    dropdownListText[0].hidden = false;
    dropdownListImg[0].style = `background-image: url(./assets/minus.svg);`;
  } else {
    dropdownListText[0].hidden = true;
    dropdownListImg[0].style = `background-image: url(./assets/plus.svg)`;
  }
});

dropdownListEl[1].addEventListener("click", function () {
  if (dropdownListText[1].hidden == true) {
    dropdownListText[1].hidden = false;
    dropdownListImg[1].style = `background-image: url(./assets/minus.svg);`;
  } else {
    dropdownListText[1].hidden = true;
    dropdownListImg[1].style = `background-image: url(./assets/plus.svg)`;
  }
});

dropdownListEl[2].addEventListener("click", function () {
  if (dropdownListText[2].hidden == true) {
    dropdownListText[2].hidden = false;
    dropdownListImg[2].style = `background-image: url(./assets/minus.svg);`;
  } else {
    dropdownListText[2].hidden = true;
    dropdownListImg[2].style = `background-image: url(./assets/plus.svg)`;
  }
});

dropdownListEl[3].addEventListener("click", function () {
  if (dropdownListText[3].hidden == true) {
    dropdownListText[3].hidden = false;
    dropdownListImg[3].style = `background-image: url(./assets/minus.svg);`;
  } else {
    dropdownListText[3].hidden = true;
    dropdownListImg[3].style = `background-image: url(./assets/plus.svg)`;
  }
});
