$(document).ready(function() {
  $(".page").removeClass("animate_content");
  $(".btn").on("click", function(e) {
    e.preventDefault();
    $(".page").addClass("animate_content");
    // console.log("clicked");
    var href = $(this).attr("href");
    setTimeout(function() {
      window.location = href;
    }, 1500);
    window.sessionStorage.setItem('splashVisited', 1);
  });
});
