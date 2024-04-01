const container1 = document.querySelector(".container1");
document.querySelector(".slider").addEventListener("input", (e) => {
  container1.style.setProperty("--position", `${e.target.value}%`);
});
