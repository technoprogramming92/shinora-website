document.addEventListener("DOMContentLoaded", function () {
  let containers = document.querySelectorAll(".images-container");
  containers.forEach(function (container) {
    let slider = container.querySelector(".slider-line");
    let afterImage = container.querySelector(".after-image");
    let isSliding = false;

    function updateSlider(e) {
      e.preventDefault(); // Prevent default action to avoid scrolling and carousel swipe
      let rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left;
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
      }

      let width = container.offsetWidth;
      x = Math.max(0, Math.min(x, width));
      slider.style.left = x + "px";
      afterImage.style.clip = "rect(0, " + x + "px, auto, auto)";
    }

    container.addEventListener("mousedown", function () {
      isSliding = true;
    });
    container.addEventListener("touchstart", function () {
      isSliding = true;
    });
    container.addEventListener("mouseup", function () {
      isSliding = false;
    });
    container.addEventListener("touchend", function () {
      isSliding = false;
    });

    container.addEventListener("mousemove", function (e) {
      if (isSliding) {
        updateSlider(e);
      }
    });
    container.addEventListener(
      "touchmove",
      function (e) {
        if (isSliding) {
          updateSlider(e);
        }
      },
      { passive: false }
    );
  });
});
