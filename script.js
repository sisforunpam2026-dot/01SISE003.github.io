// icon menu start//
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
//icon menu END//

// Mode Theme Start//
function toggleMode() {
    let body = document.body;

    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
}

//Mode Theme END//

// Slider Start //
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) {
    index = 0;
  }
}
setInterval(showSlide, 3000); // ganti setiap 3 detik
// Slider END //

// Contact start//
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});

// Contact END//
