$(document).ready(function() {
  $(".btn").on("click", function(e) {
    e.preventDefault();
    $(".page").addClass("animate_content");
    var href = $(this).attr("href");
    setTimeout(function() {
      window.location = href;
    }, 1500);
    window.sessionStorage.setItem("splashVisited", 1);
  });

  (function() {
    window.onpageshow = function(event) {
      $(".page").removeClass("animate_content");
    };
  })();
});
