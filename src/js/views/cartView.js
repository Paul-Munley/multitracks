const saveForLaterElements = document.querySelectorAll(".cart__save-item");

// Markup for mobile cart
const markup = `

`;

// Check for screen with of 700px or less
const maxWidth700 = window.matchMedia("(max-width: 700px)");

// Original classList
let originalClassList = document.querySelector(".cart__save-item").classList[0];
// console.log(cartSaveClassList);

const cartMQHandler = () => {
  if (maxWidth700.matches) {
    saveForLaterElements.forEach(el => el.classList.add("btn", "btn--bg"));
  } else {
    saveForLaterElements.forEach(el => (el.classList = originalClassList));
  }
};

cartMQHandler();

maxWidth700.addEventListener("change", cartMQHandler);
