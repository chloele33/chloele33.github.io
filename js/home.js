$(document).ready(function() {
  var clickedFromSplash = window.sessionStorage.getItem("splashVisited");

  if (clickedFromSplash === "1") {
    setTimeout(function() {
      $(".page").removeClass("animate_content");
    }, 1500);
    window.sessionStorage.setItem('splashVisited', 0);
  } else {
    $(".page").removeClass("animate_content");
  }
});
