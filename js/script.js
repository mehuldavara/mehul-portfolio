$(document).ready(function(){

    $(".slick-carousel").slick({
        arrows: false,
        centerPadding: "0px",
        dots: false,
        slidesToShow: 1,
        infinite: true
      });
      $(".leftHeader nav a").click(function() {
        var temp = $(this).attr("data-tab");
    
        $(".comeClass").removeClass("active");
        $(".leftHeader nav a").removeClass("active");
    
        $(this).addClass("active");
        $("." + temp).addClass("active");
      });

});