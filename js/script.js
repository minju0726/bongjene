$(document).ready(function () {
  $(".menu").mouseenter(function () {
    $(".menuup").stop().slideDown();
  });
  $(".menu").mouseleave(function () {
    $(".menuup").stop().slideUp();
  });
});
