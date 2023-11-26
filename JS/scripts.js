/* Code made by ◢ ZλURiX ◣ */

/* Transparent effect to NavBar brackground. */

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY >= 0.10 * window.innerHeight) {
    nav.style.backgroundColor = 'transparent';
    nav.style.borderColor = 'transparent';
    nav.classList.add('fixed');
  } else {
    nav.style.backgroundColor = 'var(--black-background)';
    nav.style.borderColor = 'var(--red-detail)';
    nav.classList.remove('fixed');
  }
});

/* Text Movement & ( fade-IN ) Effect */
const titleRightAnim = document.querySelectorAll('.anim-mov-right-in');
const titleLeftAnim = document.querySelectorAll('.anim-mov-left-in');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  titleRightAnim.forEach(element => {
    if (scrollY >= 0.6 * window.innerHeight) {
      element.style.transform = 'translateX(100%)';
      element.style.opacity = '0';
    } else {
      element.style.transform = 'translateX(0%)';
      element.style.opacity = '1';
    }
  });

  titleLeftAnim.forEach(element => {
    if (scrollY >= 0.6 * window.innerHeight) {
      element.style.transform = 'translateX(-100%)';
      element.style.opacity = '0';
    } else {
      element.style.transform = 'translateX(0%)';
      element.style.opacity = '1';
    }
  });
});