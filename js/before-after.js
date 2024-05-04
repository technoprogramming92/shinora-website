document.addEventListener("DOMContentLoaded", function () {
  // Select all slider containers
  const containers = document.querySelectorAll(".container1");

  containers.forEach((container) => {
    let slider = container.querySelector(".slider");
    let afterImage = container.querySelector(".after-image");

    // Update to handle mouse and touch events for each container
    function updateView(x) {
      let rect = container.getBoundingClientRect();
      let width = rect.width;
      if (x < 0) x = 0;
      if (x > width) x = width;
      slider.style.left = x + "px";
      afterImage.style.clipPath = `inset(0 ${width - x}px 0 0)`;
    }

    container.addEventListener("mousemove", (e) => {
      updateView(e.clientX - container.getBoundingClientRect().left);
    });

    container.addEventListener("touchmove", (e) => {
      e.preventDefault();
      let touch = e.touches[0];
      updateView(touch.clientX - container.getBoundingClientRect().left);
    });
  });
});
