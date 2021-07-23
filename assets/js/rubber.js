// $(document).ready(function() {
//   $(".rubberBand").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
//       $(this).removeClass("animated")
//     })

//   $(".rubberBand").hover(function () {
//     $(this).addClass("animated");
//   })

// })

(function () {
  $(".rubberBand").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
      $(this).removeClass("animated")
    })

  $(".rubberBand").hover(function () {
    $(this).addClass("animated");
  })

})();