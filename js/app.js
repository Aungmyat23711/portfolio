$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });
  var typed = new Typed(".element", {
    strings: ["AMG", "A Developer", "A Designer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });
  //progress bars
  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:95%;transition:1s all");
      p[1].setAttribute("style", "width:80%;transition:1.5s all");
      p[2].setAttribute("style", "width:90%;transition:1.5s all");
      p[3].setAttribute("style", "width:75%;transition:1.5s all");
      p[4].setAttribute("style", "width:90%;transition:1.5s all");
      p[5].setAttribute("style", "width:80%;transition:1.5s all");
      p[6].setAttribute("style", "width:85%;transition:1.5s all");
    },
    offset: "90%",
  });
  var filterizd = $(".filter-container").filterizr({
    animationDuration: 0.5,
  });
  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
  });
});
