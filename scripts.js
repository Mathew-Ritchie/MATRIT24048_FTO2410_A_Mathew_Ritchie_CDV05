const headerNavBtn = document.getElementById("header-nav-btn");
const navBar = document.querySelector(".nav-bar");
const navBtns = document.querySelectorAll(".nav-btn");

const modalToggle = () => {
  headerNavBtn.addEventListener("click", () => {
    const currentDisplay = window.getComputedStyle(navBar).display;
    if (currentDisplay === "none") {
      navBar.style.display = "block";
    } else {
      navBar.style.display = "none";
    }
  });

  navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navBar.style.display = "none";
    });
  });
};

modalToggle();
