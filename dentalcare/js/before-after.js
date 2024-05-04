function initComparisons() {
  var x = document.getElementsByClassName("img-comp-overlay");
  for (let i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }
}

function compareImages(img) {
  var slider,
    clicked = 0,
    w = img.offsetWidth;
  img.style.width = w / 2 + "px";

  // Create slider
  slider = document.createElement("DIV");
  slider.setAttribute("class", "img-comp-slider");
  img.parentElement.insertBefore(slider, img);

  // Position slider in the middle
  slider.style.top = img.offsetHeight / 2 - slider.offsetHeight / 2 + "px";
  slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";

  slider.addEventListener("mousedown", function (e) {
    clicked = 1;
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("mouseup", function () {
      clicked = 0;
    });
  });

  slider.addEventListener("touchstart", function (e) {
    clicked = 1;
    window.addEventListener("touchmove", slideMove);
    window.addEventListener("touchend", function () {
      clicked = 0;
    });
  });

  function slideMove(e) {
    var pos;
    if (clicked === 0) return false;
    pos = getCursorPos(e, img);
    if (pos < 0) pos = 0;
    if (pos > w) pos = w;
    img.style.width = pos + "px";
    slider.style.left = pos - slider.offsetWidth / 2 + "px";
  }

  function getCursorPos(e, img) {
    var a = img.getBoundingClientRect(),
      x = e.pageX - a.left - window.pageXOffset;
    return x;
  }
}

// Initialize the function
window.onload = initComparisons;
