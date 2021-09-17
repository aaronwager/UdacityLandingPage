// Global selectors
const homeSection = document.querySelector("#home");
const aboutSection = document.querySelector("#about");
const eventSection = document.querySelector("#events");
const tourSection = document.querySelector("#tours");
const allSections = Array.from(document.querySelectorAll("section"));

// Other Selectors

const unorderedList = document.querySelector("#nav-list");
const allLinks = document.querySelectorAll(".nav-links");
const activeLink = document.querySelector(".active");

// Dynamic Menu

const dynamicMenu = () => {
  for (const section of allSections) {
    const navLinks = document.createElement("a");
    const list = document.createElement("li");
    navLinks.className = "nav-links";
    list.className = "nav-item";
    navLinks.textContent = section.getAttribute("data-nav");
    navLinks.setAttribute("href", `#${section.getAttribute("id")}`);
    list.appendChild(navLinks);
    unorderedList.appendChild(list);
  }
  return;
};

// Remove active classes from all links

const removeActiveClasses = (links) => {
  links.forEach((navLink) => {
    navLink.classList.remove("active");
  });
};

// Invoking dynamicMenu function
dynamicMenu();

// Scroll effect

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    navLinks.classList.add("active");
  });
});
