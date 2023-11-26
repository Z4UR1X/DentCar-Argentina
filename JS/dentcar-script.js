/* Fade effect on images in home section. */
const images = [
    'Resources/Images/DentCar-Gallery/bolloDemo1.jpg',
    'Resources/Images/DentCar-Gallery/bolloDemo2.jpg',
    'Resources/Images/DentCar-Gallery/bolloDemo3.jpg'
  ];
  
  const displayImage = document.getElementById('display-image');
  const imageContainer = document.getElementById('image-container');
  
  let currentIndex = 0;
  
  function showNextImage() {
    displayImage.style.opacity = 0;
    setTimeout(() => {
      displayImage.src = images[currentIndex];
      displayImage.style.opacity = 1;
      currentIndex = (currentIndex + 1) % images.length;
    }, 500);
  }
  
  showNextImage();
  setInterval(showNextImage, 5000);
/* -x- */

/* Transparent effect to NavBar brackground and his buttons. */
const nav = document.querySelector('nav');
const buttonNav = document.querySelectorAll('.nav-button');
const navP = document.querySelectorAll('.nav-p');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY >= 0.18 * window.innerHeight) {
    nav.style.backgroundColor = 'transparent';
    nav.style.borderColor = 'transparent';
    buttonNav.forEach(button => {
      button.style.width = '150px';
    });
    navP.forEach(navParagraph => {
      navParagraph.style.borderBottom = 'solid 2px var(--red-detail)';
    });
  } else {
    nav.style.backgroundColor = 'var(--panel-color)';
    nav.style.borderColor = 'red';
    buttonNav.forEach(button => {
      button.style.width = '';
    });
    navP.forEach(navParagraph => {
      navParagraph.style.borderBottom = 'transparent';
    });
  }
});
/* -x- */

/* Main title movement and fadeout effect */
const titleRightAnim = document.querySelectorAll('.anim-mov-right');
const titleLeftAnim = document.querySelectorAll('.anim-mov-left');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  titleRightAnim.forEach(element => {
    if (scrollY >= 0.10 * window.innerHeight) {
      element.style.transform = 'translateX(100%)';
      element.style.opacity = '0';
    } else {
      element.style.transform = 'translateX(0%)';
      element.style.opacity = '1';
    }
  });

  titleLeftAnim.forEach(element => {
    if (scrollY >= 0.10 * window.innerHeight) {
      element.style.transform = 'translateX(-100%)';
      element.style.opacity = '0';
    } else {
      element.style.transform = 'translateX(0%)';
      element.style.opacity = '1';
    }
  });
});
/* -x- */

/* */
function toggleDropdown() {
  let dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}