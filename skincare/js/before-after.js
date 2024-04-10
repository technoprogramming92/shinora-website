document.addEventListener("DOMContentLoaded", function () {
  // Select all the containers
  let containers = document.querySelectorAll(".images-container");

  containers.forEach(function (container) {
    let slider = container.querySelector(".slider-line");
    let afterImage = container.querySelector(".after-image");

    container.addEventListener("mousemove", function (e) {
      let rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left; // Get the horizontal coordinate within the container
      let width = container.offsetWidth;
      if (x < 0) x = 0;
      if (x > width) x = width;
      slider.style.left = x + "px";
      afterImage.style.clip = "rect(0, " + x + "px, auto, auto)";
    });
  });
});
