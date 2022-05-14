let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slider", {
  grabcursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  grabcursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  //   ??
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
// ??
let previewContainer = document.querySelector(".food-preview-container");
let previewBox = previewContainer.querySelectorAll(".food-preview");

document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    previewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewContainer.querySelector("#close-preview").onclick = () => {
  previewContainer.style.display = "none";
  previewBox.forEach((close) => {
    close.classList.remove("active");
  });
};

var swiper = new Swiper(".menu-slider", {
  grabcursor: true,
  loop: true,
  //   wuts autoheight?
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// alone lets do dis
// const name = document.getElementById("name");
// const desiredFood = document.getElementById("desiredFood");
// const details = document.getElementById("details");
// const number = document.getElementById("number");
// const howMany = document.getElementById("howMany");
// const errorElement = document.getElementById('error')

// form.addEventListener("submit", (e) => {
//   let messages = [];
//   if (name.value === "" || name.value == null) {
//     messages.push("name if required");
//   }
//   if (messages.length > 0){
//     e.preventDefault();
//     errorElement.innerText = messages.join(?)
//   }
// });
