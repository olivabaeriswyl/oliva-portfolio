function filterItems(category) {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (category === "all") {
      item.classList.remove("hidden");
    } else if (item.classList.contains(category)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

var buttonFilters = document.querySelectorAll(".button-filter");

buttonFilters.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(button);
    var category = button.getAttribute("data-value");
    filterItems(category);
  });
});

// Curseur personnalisé
var cursor = document.querySelector(".cursor");
var links = document.querySelectorAll("a");
var buttons = document.querySelectorAll("button");

var onMouseMove = function (event) {
  cursor.style.top = event.y + "px";
  cursor.style.left = event.x + "px";
};

var onMouseEnter = function () {
  cursor.style.transform = "scale(1.5)";
};

var onMouseLeave = function () {
  cursor.style.transform = "scale(1)";
};

document.addEventListener("mousemove", onMouseMove);

links.forEach((link) => {
  link.addEventListener("mouseenter", onMouseEnter);
  link.addEventListener("mouseleave", onMouseLeave);
});

buttons.forEach((button) => {
  button.addEventListener("mouseenter", onMouseEnter);
  button.addEventListener("mouseleave", onMouseLeave);
});
