let button = $("#more-button").find(".btn");

$(function() {
    button.on('click',function(){
      gsap.to(button, 0.2, {scale: 1.2, ease: Power3.easeIn});
      gsap.to(button, 0.2, {scale: 1, delay: 0.2, ease: Power3.easeOut});
    });
    
});