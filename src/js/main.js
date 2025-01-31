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
