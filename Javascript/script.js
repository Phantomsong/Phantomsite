document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const mobileDropdown = document.getElementById('mobile-dropdown');

  console.log("DOM is ready!");

  hamburger.addEventListener('click', () => {
      console.log("Hamburger clicked!");
      if (mobileDropdown.style.display === 'block') {
          mobileDropdown.style.display = 'none';
      } else {
          mobileDropdown.style.display = 'block';
      }
  });

  const mobileDropdownItems = document.querySelectorAll('.mobile-dropdown > li');
  mobileDropdownItems.forEach(item => {
      item.addEventListener('click', () => {
          console.log("Mobile dropdown item clicked!");
          item.classList.toggle('open');
      });
  });
});