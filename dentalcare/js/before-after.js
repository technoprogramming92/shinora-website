document.addEventListener("DOMContentLoaded", function () {
  // Select all the containers
  let containers = document.querySelectorAll(".images-container");

  containers.forEach(function (container) {
    let slider = container.querySelector(".slider-line");
    let afterImage = container.querySelector(".after-image");

    // Function to update the slider and image clipping
    function updateSlider(e) {
      let rect = container.getBoundingClientRect();
      let x; // X position within the container
      // Check if the event is a touch event
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
      } else {
        x = e.clientX - rect.left;
      }

      let width = container.offsetWidth;
      if (x < 0) x = 0;
      if (x > width) x = width;
      slider.style.left = x + "px";
      afterImage.style.clip = "rect(0, " + x + "px, auto, auto)";
    }

    // Handle mouse move events
    container.addEventListener("mousemove", updateSlider);

    // Handle touch move events
    container.addEventListener("touchmove", updateSlider, { passive: false });
  });
});
