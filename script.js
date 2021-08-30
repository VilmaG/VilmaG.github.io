$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 5){
            $('.navbar ').addClass("sticky");
        }else{
            $('.navbar ').removeClass("sticky");
        }
    })
});