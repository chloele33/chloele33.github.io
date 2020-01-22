$(document).ready(function() {
  $(".btn").on("click", function(e) {
    e.preventDefault();
    $(".page").addClass("animate_content");
    // console.log("clicked");
    var href = $(this).attr("href");
    setTimeout(function() {
      window.location = href;
    }, 1500);
    // setTimeout(function() {
    //   $(".page").removeClass("animate_content");
    // }, 1500);
    window.sessionStorage.setItem('splashVisited', 1);
  });
  
  (function () {
    window.onpageshow = function(event) {
      if (event.persisted) {
        $(".page").removeClass("animate_content");
      }
    };
  })();
});
