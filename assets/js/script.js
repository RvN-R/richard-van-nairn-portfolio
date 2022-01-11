$(document).ready(function () {
  //Following JS is using fadeIn and fadeOut to create roll over effect or top-row and bottom-row
  $("#top-row").mouseenter(function(){
    $("#top-row").fadeOut(2000);
  });
  
  $("#bottom-row").mouseleave(function(){
    $("#top-row").fadeIn(2000);
  });

});