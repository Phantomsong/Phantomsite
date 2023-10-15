// JavaScript to toggle between desktop and mobile navigation bars
function toggleNavbar() {
  const desktopNavbar = document.getElementById("desktopNavbar");
  const mobileTopnav = document.getElementById("mobileTopnav");
  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    // Display the mobile navigation
    desktopNavbar.style.display = "none";
    mobileTopnav.style.display = "block";
  } else {
    // Display the desktop navigation
    desktopNavbar.style.display = "block";
    mobileTopnav.style.display = "none";
  }
}

// Call the toggleNavbar function when the page loads and when the window is resized
toggleNavbar();
window.addEventListener("resize", toggleNavbar);
