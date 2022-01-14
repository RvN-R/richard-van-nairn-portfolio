$(document).ready(function () {

  $("#bottom-milestone-1").hide();
  $("#bottom-milestone-2").hide();
  $("#bottom-milestone-3").hide();
  $("#bottom-milestone-4").hide();
  $("#bottom-my-story").hide();

  //Following JS is using fadeIn and fadeOut to create roll over effect or top-row and bottom-row
  $("#top-row").mouseenter(function(){
    $("#top-row").fadeOut(1500);
  });
  
  $("#bottom-row").mouseout(function(){
    $("#top-row").fadeIn(1500);
  });

  $("#top-my-story").click(function(){
    $("#bottom-my-story").slideToggle();
    $("#bottom-milestone-2").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
  });


  // Follow JS uses click and slide toggle to show off milestone information
  $("#top-milestone-1").click(function(){
    $("#bottom-milestone-1").slideToggle();
    $("#bottom-milestone-2").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
  });
  
  $("#top-milestone-2").click(function(){
    $("#bottom-milestone-2").slideToggle();
    $("#bottom-milestone-1").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
  });

  $("#top-milestone-3").click(function(){
    $("#bottom-milestone-3").slideToggle();
    $("#bottom-milestone-2").slideUp();
    $("#bottom-milestone-1").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
  });

  $("#top-milestone-4").click(function(){
    $("#bottom-milestone-4").slideToggle();
    $("#bottom-milestone-1").slideUp();
    $("#bottom-milestone-2").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-my-story").slideUp();
  });

  
  //Following JS is using fadeIn and fadeOut to create roll over effect for top-milestone-4 and bottom-milestone-4
  // $("#top-milestone-4").mouseenter(function(){
  //   $("#top-milestone-4").fadeOut(1500);
  // });
  
  // $("#bottom-milestone-4").mouseout(function(){
  //   $("#top-milestone-4").fadeIn(1500);
  // });

});