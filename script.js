//Calling the side navbar for mobile responsive 
$(document).ready(function(){
    $(".sidenav").sidenav();
  });
  $('.sidenav li').click(() => {
    $('.sidenav').sidenav('close');
  })
  //Parallax Initialization
    $(document).ready(function(){
    $(".parallax").parallax();
  });




