var buyLink = document.querySelectorAll(".product-button-price");
var buyPopup = document.querySelector(".modal-cart-add");
var buyClose = buyPopup.querySelector(".modal-close");
var buyModalButton = buyPopup.querySelectorAll(".modal-cart-button");

for (var i = 0; i < buyLink.length; i++) {
  buyLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
}

for (var i = 0; i < buyModalButton.length; i++) {
  buyModalButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
  });
}


buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-show")) {
      buyPopup.classList.remove("modal-show");
    }
  }
});