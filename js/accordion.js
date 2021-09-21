const btnsFeature = document.querySelectorAll(".feature__link");
const featureSub = document.querySelectorAll(".feature-sub");

btnsFeature.forEach((btnsFeatureitem, index) => {
  btnsFeatureitem.addEventListener("click", () => {
    // btnsFeature.forEach((btnsFeatureitem) => {
    //   btnsFeatureitem.classList.remove("feature__link_active");
    // });

    // btnsFeatureitem.classList.add("feature__link_active");

    // featureSub.forEach((featureSubitem) => {
    //   featureSubitem.classList.add("hidden");
    // });

    // featureSub[index].classList.remove("hidden");

    btnsFeatureitem.classList.toggle("feature__link_active");
    featureSub[index].classList.toggle("hidden");
  });
});
