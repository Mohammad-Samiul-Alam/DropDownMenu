$(document).ready(function(){
    // toggle sub menus
    $(".sub-btn").click(function(){
         $(this).next(".sub-menu").slideToggle();
    })
    // toggle more menus
    $(".more-btn").click(function(){
        $(this).next(".more-menu").slideToggle();
    })
    // toggler btn (open and close)
    $(".toggler-btn").click(function(){
        $(this).toggleClass("active");
    })
    // toggler btn menu(hide and show)
    $(".toggler-btn").click(function(){
        $(".menu").toggleClass("active");
    })
    $(".more-btn").click(function(){
        $(this).toggleClass("active")
    })
})
