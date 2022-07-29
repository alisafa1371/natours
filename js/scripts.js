//////////////////////////////////////////////////////////
//Smooth Scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other section
    if (href !== "#" && href.startsWith("#")) {
      // its going to give the section that has the Id of this href
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
