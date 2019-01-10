// slide effect to contacts

const contactsArrow = document.getElementById("js-contacts-arrow");

contactsArrow.addEventListener("click", function () {
 const contactsInfo = document.getElementsByClassName("contacts__info")[0];
 const icon = document.getElementById('icon');
 let open = false;

  if (contactsInfo.classList.contains("slided") || open) {
    contactsInfo.classList.remove("slided");
    icon.className = 'fas fa-angle-up';
  } else {
    contactsInfo.classList.add("slided");
    icon.className = 'fas fa-angle-down open';
    icon.style.paddingTop = '4px';
  }

  open = !open;
});

// add lines to main page when page loads
window.addEventListener("load", function () {
  // find CV lines
    let cvLines = document.querySelectorAll(".cv__line");
    for (let i = 0; i < cvLines.length; i++) {
      cvLines[i].style.width = "60%";
    }
  // find PORTFOLIO lines
    let portfolioLines = document.querySelectorAll(".portfolio__line");
    for (let i = 0; i < portfolioLines.length; i++) {
      portfolioLines[i].style.width = "20%";
    }
});
