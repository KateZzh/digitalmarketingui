document.querySelector(".dropdown-list-el").addEventListener("click", () => {
  const dropdownListText = document.querySelector(".dropdown-list-text");

  if (dropdownListText.hidden == true) {
    dropdownListText.hidden = false;
    document.querySelector(
      ".dropdown-list-img"
    ).style = `background-image: url(./assets/minus.svg);`;
  } else {
    dropdownListText.hidden = true;
    document.querySelector(
      ".dropdown-list-img"
    ).style = `background-image: url(./assets/plus.svg)`;
  }
});
