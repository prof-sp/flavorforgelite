// 🌿 FlavorForge Lite Image Slider
const images = [
  'images/image1.png',
  'images/image2.png',
  'images/image3.png',
  'images/image4.png',
  'images/image5.png'
];

let currentIndex = 0;
const slider = document.getElementById('slider-img');

function rotateImages() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.src = images[currentIndex];
}

setInterval(rotateImages, 4000); // Change image every 4 seconds


// Form validation
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  }
});
