$(document).ready(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"]').on("click", function() {
        $('.modal').slideDown(3000);
        $('.overlay').fadeIn(3000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(2000);
        $('.overlay').fadeOut(3000);
        
    });
});