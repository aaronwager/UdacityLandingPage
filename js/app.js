// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const bookNowBtn = document.querySelector(".book-now");

const bookNowBtnAvailable = document.querySelector(".book-now-available");

bookNowBtn.addEventListener("click", () => {
  let styleBtn = bookNowBtn;
  styleBtn.style.backgroundColor = "#333";
  styleBtn.textContent = `No Events Available`;
});

bookNowBtnAvailable.addEventListener("click", () => {
  let styleBtn = bookNowBtnAvailable;
  styleBtn.textContent = `Events Available 09/12/21`;
  styleBtn.style.color = "#fff";
  styleBtn.style.padding = "0.75 3rem";
});
