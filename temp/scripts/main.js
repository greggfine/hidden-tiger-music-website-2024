function smoothScroll(target, duration) {
  const navOffset = 250;
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top - navOffset;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var scrollBackToTop = document.querySelector("#scrollBackToTop");
scrollBackToTop.addEventListener("click", function () {
  smoothScroll("#header-section", 1000);
});
