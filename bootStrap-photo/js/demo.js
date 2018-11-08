
$(".navigation a").click(function (e) {
    $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top - 20 + "px" 
                        }, 500);
    return false;

});
