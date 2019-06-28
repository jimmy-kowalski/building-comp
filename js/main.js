// Header Scrolling Effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('header').addClass('dark');
        $('.dropdown').addClass('dark');
    }
    else {
        $('header').removeClass('dark');
        $('.dropdown').removeClass('dark');
    }
});

// mobile menu function
$('.menu-toggle').click(function() {

    $('.main-nav').toggleClass('open'); 
    $(this).toggleClass('open'); 

});

// animate on scroll
    AOS.init({
    easing: 'ease',
    duration: 1500,
    once: true 
});

// Form validation
$(function() {
    $('#contact-form').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10,
                maxlength: 200
            }
        },
        messages: {
            name: "Please enter your name.",
            email: {
                required: "Please enter a email address",
                email: "Please enter a valid email address (e.g. john@gmail.com)."
            },
            message: {
                required: "Please write your comment or ask a question.",
                minlegth: "Please enter at least 10 characters.",   
                maxlength: "Please enter no more than 200 characters."        
            }
        },
        submitHandler: function(form) {
            form.submit();
        }    
    });

    // $('#contact-form').submit(function(e) {
    //     e.preventDefault();
    //     $(this).addClass("hide");
    //     console.log("submitted");
    // });

});

// paralax effect
// $(window).scroll(function() {
//     parallax();
//   });
  
//   function parallax() {
  
//     var wScroll = $(window).scrollTop();
    //  console.log(wScroll);  

    // $('.parallax').css('background-position', 'center '+ (wScroll*0.75)+'px'); 

//   }

// fade out on hover
$('.about-card').hover(function() {
    $('.about-card').not(this).fadeTo('slow', 0.5);
},
function () {
    $('.about-card').fadeTo('slow', 1);
});

// Splitting 
console.clear();

Splitting({
    target: '.tiler',
    by: 'cells',
    rows: 3,
    columns: 3,
    image: true
}); 

