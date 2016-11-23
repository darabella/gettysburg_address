$(document).ready(function() {

// Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
 $("body").fadeIn(5000)
  // alert("animation done!");
});

// Give each paragraph a yellow background only when the mouse is over it.

$("p").on("mouseenter", function() {
  $(this).css("background-color", "yellow");
});
$("p").on("mouseleave", function() {
  $(this).css("background-color", "");
});

// Set up a click event on every <h2> element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.

$("h2").on("click", function() {
  $(this).animate({
    "opacity": "0.25",
    "margin-left": "+=20px"
  }, 1000, function() {
    $("p").animate({
      "opacity": "0.50"
    });
  });


// Bonus: Make the style switcher work.

// $("#switcher-large").on("click", function() {
//     $("body").css("font-size", "80%");
// });


  // $("#switcher-large").on("click", function() {
  //   $("body").animate({
  //     "font-size": "2em"
  //   });
  // });
});
