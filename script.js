let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');

  index++;
  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(showSlide, 3000); // ganti setiap 3 detik
// Contact
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () =>{
  menuList.classList.toggle("hidden");

})

