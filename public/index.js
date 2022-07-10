const menuOpen = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu-close");
const menuWrapper = document.querySelector(".menu-wrapper");
const rightArrow = document.querySelector(".right-arrow");
const sideDropdown = document.querySelector(".side-menu-dropdown");
const search = document.querySelector(".search");
const searchOpen = document.querySelector(".search-open");
const cross = document.querySelector(".cross");
let sideClick = 0;

menuOpen.onclick = () => {
  menuWrapper.style.animation = "slidein 0.1s forwards";
};

menuClose.onclick = () => {
  menuWrapper.style.animation = "slideout 0.1s forwards";
};

rightArrow.onclick = () => {
  sideClick++;
  if (sideClick % 2 !== 0) {
    sideDropdown.style.display = "block";
    rightArrow.style.transform = "rotate(90deg)";
  } else {
    sideDropdown.style.display = "none";
    rightArrow.style.transform = "rotate(0deg)";
  }
};

search.onclick = () => {
  searchOpen.style.display = "block";
};

cross.onclick = () => {
  searchOpen.style.display = "none";
};
