const smoothScrollHeader = document.querySelectorAll(".menu-list__link");
const smoothScrollBtn = document.querySelector(".main__scroll");
const newArrayScroll = [...smoothScrollHeader, smoothScrollBtn];

for (let item of newArrayScroll) {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").substr(1);

    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
