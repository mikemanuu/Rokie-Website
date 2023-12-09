//Scroll smoothly to sections when clicking on nav links.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
       e.preventDefault();

       const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
});

//Hambuger icon.
document.getElementById('menu-toggle').addEventListener('click', function () {
    var nav = document.getElementById('nav');
    var menuToggle = document.getElementById('menu-toggle');
    
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        menuToggle.classList.remove('active');
    } else {
        nav.style.display = 'block';
        menuToggle.classList.add('active');
    }
});
    
//Create gallery section and add images dynamically.

const galleryContainer = document.getElementById('galleryContainer');
const dotContainer = document.getElementById('dotContainer');
const images = [
    'images/cousins.jpg',
    'images/centric.jpg',
    'images/ILY.png',
    'images/BELLE.png',
    'images/rika.jpg',
    'images/phenix.jpg',
    'images/t-shirt.png',
    'images/Marketing.png',
    'images/SKINCARE.jpg',
    'images/ROKIE.png',
    'images/R.png',
    'images/SOCIAL.png',
    'images/cover.jpg'
];

let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function updateGallery() {
    galleryContainer.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        const imageIndex = (currentIndex + i) % images.length;
        const imageElement = document.createElement('div');
        imageElement.classList.add('image');
        imageElement.style.backgroundImage = `url(${images[imageIndex]})`;
        galleryContainer.appendChild(imageElement);
    }

    galleryContainer.style.transform = `translateX(0)`;

    //updateDots();

}

/*function updateDots() {
    const dots = dotContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}*/

// Set interval for automatic image change, 5 seconds

setInterval(showNextImage, 5000);

// Swipe functionality 

let touchStartX = 0;
let touchEndX = 0;


galleryContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

galleryContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
        //Swipe left
        showNextImage();
    } else if (touchEndX - touchStartX > 50) {
        //Swipe right if needed

    }
});

//Inital gallery setup

document.addEventListener('DOMContentLoaded', updateGallery);


//Set back-to-top arrow to show when the user has scrolled upto 2050 pixels.
window.addEventListener('scroll', function () {
    const arrow = document.querySelector('.back-to-top');
    if (window.scrollY > 2500) {
        arrow.style.display = 'block';
    } else {
        arrow.style.display = 'none';
    }
});


//Smooth scrolling when back to top arrow is clicked.
document.querySelector('.back-to-top a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
});
