const tabsBtn = document.querySelectorAll("[data-tabs-handler]");
const tabsContent = document.querySelectorAll("[data-tabs-field]");
const tabsTitles = document.querySelectorAll(".design__title");

tabsBtn.forEach((tabsItem, index) => {
  tabsItem.addEventListener("click", () => {
    tabsBtn.forEach((item) => {
      item.classList.remove("design-list__item_active");
    });
    tabsItem.classList.add("design-list__item_active");

    tabsTitles.forEach((item) => {
      item.classList.add("hidden");
    });
    tabsTitles[index].classList.remove("hidden");

    tabsContent.forEach((item) => {
      if (item.dataset.tabsField === tabsItem.dataset.tabsHandler) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
