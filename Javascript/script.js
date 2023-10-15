document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});
