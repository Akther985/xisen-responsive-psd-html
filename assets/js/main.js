$(document).ready(function(){

$(".video-play-btn").magnificpopup({
  type:'video',
})
  
  });

  $('.testimonial-active').owlCarousel({
    loop:true,    
    dotsEach:true,     
   responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
 })
 $('.brand-active').owlCarousel({
  loop:true,
  dots:false, 
  autoplay:3000,  
 responsive:{
     0:{
         items:1
     },
     600:{
         items:1
     },
     1000:{
         items:5
     }
 }
})

























      