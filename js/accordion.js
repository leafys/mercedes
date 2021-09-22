const featureLink = document.querySelectorAll(".feature__link");
const featureSubTitle = document.querySelectorAll(".feature-sub");

featureLink.forEach((featureItem, index) => {
  featureItem.addEventListener("click", () => {
    // featureLink.forEach((item) =>
    //   item.classList.remove("feature__link_active")
    // );
    // featureItem.classList.add("feature__link_active");

    // featureSubTitle.forEach((item) => {
    //   item.classList.add("hidden");
    // });
    // featureSubTitle[index].classList.remove("hidden");

    //toggle
    featureItem.classList.toggle("feature__link_active");
    featureSubTitle[index].classList.toggle("hidden");
  });
});
