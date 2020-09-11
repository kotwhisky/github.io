$(function() {
    $("#navbar1 ul li a").click(function() {
        $("#navbar1 ul li a").removeClass("activated");         
        $(this).toggleClass("activated");
    })
});

$(document).ready(function(){
 $('#burger').click(function () {
 $("#bg-top").toggleClass('bg-red');
  var src = ($("#logotype").attr("src")==="img/logo2.png")?"img/logo.png":"img/logo2.png";
    $("#logotype").attr("src", src);
 });
});