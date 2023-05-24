

// Navbar On Scrol

let width = window.innerWidth;
console.log(width)
$(window).resize(function(){
    let width = window.innerWidth;
    console.log(width)
    
})

$(window).on('scroll', function(){
    console.log($(window).scrollTop())
    if(width > 786){
        if($(window).scrollTop() > 50){
            $("#navbar").css("background", "rgba(0,0,0,0.9)")
            $(".web_logo").css("width", "7em")
        }else{
            $("#navbar").css("background", "none")
            $(".web_logo").css("width", "10em")
        }
    }
})

// Flip Cards

$('.flip').hover(function(){
    $(this).find('.card').toggleClass('flipped');

});