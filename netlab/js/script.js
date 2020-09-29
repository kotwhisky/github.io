
$(function() {
    $("#navbarNav ul li a").click(function() {
        $("#navbarNav ul li a").removeClass("active");         
        $(this).toggleClass("active");
    })
});