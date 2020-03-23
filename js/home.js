$(document).ready(function() {
  var clickedFromSplash = window.sessionStorage.getItem("splashVisited");

  if (clickedFromSplash === "1") {
    window.sessionStorage.setItem("splashVisited", 0);

    setTimeout(function() {
      $(".flex-container").removeClass("fade");
      $("body").css("background-color", "white");
    }, 3000);
  } else {
    $(".page").removeClass("animate_content");
    $(".flex-container").removeClass("fade");
    $("body").css("background-color", "white");
  }
});
