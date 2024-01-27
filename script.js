// Navigation toggle
function toggleNav(x) {
  x.classList.toggle("change");

  var nav = document.querySelector("ul");
  nav.classList.toggle("menu");
}

// Slider
var copy = document.querySelector(".slides").cloneNode(true);
document.querySelector(".partners__section-slider").appendChild(copy);

// Accordion
document.querySelectorAll(".accordion-item h3").forEach((accordionToggle) => {
  accordionToggle.addEventListener("click", () => {
    const accordionItem = accordionToggle.parentNode;
    const accordionContent = accordionToggle.nextElementSibling;

    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionItem.classList.remove("active");
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionItem.classList.add("active");
    }
  });
});

// Header opacity on scroll
window.addEventListener("scroll", function (e) {
  var scrollPosition = this.scrollY / 1000;
  var header = document.getElementById("header__background");

  if (scrollPosition === 0) {
    header.style.opacity = 1;
  } else {
    header.style.opacity = 0.9;
  }
});
