// Below function controls which divs appear on devices depending on there screen sizes
$(document).ready(function() {
  // This will fire when document is ready:
  $(window).resize(function() {
      // This will fire each time the window is resized:
      if($(window).width() <= 768) {
          // if smaller or equal
          $('#top-row').hide();
          $('#bottom-row').hide();
          $('#top-milestone-1').hide();
          $('#top-milestone-1-md').show();
          $('#top-milestone-2').hide();
          $('#top-milestone-2-md').show();
          
      } else {
          // if larger
          $('#top-row').show();
          $('#bottom-row').show();
          $('#top-milestone-1').show();
          $('#top-milestone-1-md').hide();
          $('#top-milestone-2').show();
          $('#top-milestone-2-md').hide();
      }
  }).resize(); // This will simulate a resize to trigger the initial run.
});

$(document).ready(function () {
  // Inital start hide bottom layers of all milestones and storys
  $("#bottom-milestone-1-lg").hide();
  $("#bottom-milestone-1-md").hide();
  $("#bottom-milestone-2-md").hide();
  $("#bottom-milestone-2-lg").hide();
  $("#bottom-milestone-3").hide();
  $("#bottom-milestone-4").hide();
  $("#bottom-my-story").hide();
  $("#bottom-hackathon").hide();

  //Following JS is using fadeIn and fadeOut to create roll over effect or top-row and bottom-row
  $("#top-row").click(function(){
    $("#top-row").fadeOut(1000);
  });
  
  $("#bottom-row").mouseout(function(){
    $("#top-row").fadeIn(1000);
  });

  $("#top-my-story").click(function(){
    $("#bottom-my-story").slideToggle();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-2-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-hackathon").slideUp();
  });


  // Follow JS uses click and slide toggle to show off milestone information
  $("#top-milestone-1").click(function(){
    $("#bottom-milestone-1-lg").slideToggle();
    $("#bottom-milestone-2-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-hackathon").slideUp();
  });

  $("#top-milestone-1-md").click(function(){
    $("#bottom-milestone-1-md").slideToggle();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-2-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-hackathon").slideUp();
  });

  $("#top-milestone-2").click(function(){
    $("#bottom-milestone-2-lg").slideToggle();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-hackathon").slideUp();
  });

  $("#top-milestone-2-md").click(function(){
    $("#bottom-milestone-2-md").slideToggle();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-hackathon").slideUp();
  });

  $("#top-milestone-3").click(function(){
    $("#bottom-milestone-3").slideToggle();
    $("#bottom-milestone-2-lg").slideUp();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-4").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-hackathon").slideUp();
  });

  $("#top-milestone-4").click(function(){
    $("#bottom-milestone-4").slideToggle();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-2-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-hackathon").slideUp();
  });

  $("#top-hackathon").click(function(){
    $("#bottom-hackathon").slideToggle();
    $("#bottom-milestone-1-lg").slideUp();
    $("#bottom-milestone-2-lg").slideUp();
    $("#bottom-milestone-2-md").slideUp();
    $("#bottom-milestone-1-md").slideUp();
    $("#bottom-milestone-3").slideUp();
    $("#bottom-my-story").slideUp();
    $("#bottom-milestone-4").slideUp();
  });

});