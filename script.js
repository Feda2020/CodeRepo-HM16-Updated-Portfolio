//scroll to top button
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
//Calling the side navbar for mobile responsive 
$(document).ready(function(){
    $(".sidenav").sidenav();
  });
  $('.sidenav li').click(function (){
    $('.sidenav').sidenav('close');
  })
  //Parallax Initialization
    $(document).ready(function(){
    $(".parallax").parallax();
  });