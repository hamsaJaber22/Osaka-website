// // change nav color on scrool
// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 100) {
//           $(".navbar").css("background" , `#000`);
//         }
  
//         else{
//             $(".navbar").css("background" , `transparent`);  	
//         }
//     })
//   })

// change nav color on scrool
  let homeHeight=$("#home").outerHeight();
  let services=$("#services").outerHeight();
$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= homeHeight) {
        $(".navbar").addClass('bg-black');
        $(".navbar").removeClass('bg-transparent');
        $(".btn-up").fadeIn(2000);
      }

      else{
          $(".navbar").addClass('bg-transparent');  
          $(".navbar").removeClass('bg-black');	
          $(".btn-up").fadeOut(2000);
      }
  })
})

$("header").ready(function(){
  $("").hide();
});
$("header").ready(function(){
  $("header").show();
});



// about dot in home 
 $('.dot').ready(function(){
   for(let i=0;i<10;i++){
   $("a span").animate({top: "25px"}, 500);
   } 
  //  $("a span").toggle("fast");
});

$('.home h1').ready(function(){
  $(".home h1 span").animate({
    width: "0px"
},1000);
});

$('.home h4').ready(function(){
  $(".home h4 span").animate({
    width: "0px"
},1000);
});


$('.dot').hover(function(){
    $(".dot").css('border',`1px solid #fff`);
   }, function(){
     $(".dot").css('border',`1px solid #333`);
  });

// button up(arraw)
$(".btn-up").click(function(){
  $(window).scrollTop(0);
})

// portfolio
 $(".portfolio-item").hover(function() {
   $(".img-thumbnail",this).css("opacity" , `0.5`);
   $(".portfolio-overlay",this).css("opacity" , `0.9`);
   $(".portfolio-overlay",this).animate({top: "0px"}, 500);
  },
   function(){
   $(".img-thumbnail",this).css("opacity" , `1`);
   $(".portfolio-overlay",this).css("opacity" , `0`);
   $(".portfolio-overlay",this).animate({top: "0px"}, 500);
  
   
 });

// active nav link item
  $('.navbar .nav-link').click(function() {
      $('.navbar-dark .navbar-nav .nav-link') .css('color',`white`); 
      $(this).css('color',`var(--mainColor)`);
  });

  // owlCarousel
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:5,
      loop:true,
      autoplay:true,
      autoplayTimeout:1000,
      center:true,
      margin:150,
    });
  });
