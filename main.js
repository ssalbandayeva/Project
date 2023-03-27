// header//

const responsive_menu = document.querySelector(".responsive_menu");
const toggle_menu = document.querySelector(".toggle_menu");
toggle_menu.addEventListener("click", () => {
  responsive_menu.classList.toggle("open");
});

// main//

//slider area//

let arr = [];
let first_slider_area = document.querySelector(".first_slider_area");
let second_slider_area = document.querySelector(".second_slider_area");
let sliderButtons = document.querySelectorAll(".slider_btn");
first_slider_area.style.display = "flex";
second_slider_area.style.display = "none";
sliderButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (first_slider_area.style.display == "flex") {
      console.log("if");
      first_slider_area.style.display = "none";
      second_slider_area.style.display = "flex";
    } else {
      second_slider_area.style.display = "none";
      first_slider_area.style.display = "flex";
    }
  });
});
//testimonial_area//

let arr1 = [];
let first_testimonial_area = document.querySelector(".first_testimonial_area");
let test_prev = document.querySelector(".test_prev");
let test_next = document.querySelector(".test_next");
