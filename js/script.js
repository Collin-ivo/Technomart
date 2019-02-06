var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}
if (!isStorageSupport) {
  isStorageSupport = true;
  try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }
}


var mapLink = document.querySelector(".contact-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

var writeUsLink = document.querySelector(".contacts-button");

var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsClose = writeUsPopup.querySelector(".modal-close");

var form = writeUsPopup.querySelector("form");
var username = writeUsPopup.querySelector("[name=username]");
var email = writeUsPopup.querySelector("[name=email]");
var usertext = writeUsPopup.querySelector("[name=text]");

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storageName) {
    username.value = storageName;
    email.focus();
  } else if (storageEmail) {
    email.value = storageEmail;
    usertext.focus();
  } else {
    username.focus();
  }
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !usertext.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});