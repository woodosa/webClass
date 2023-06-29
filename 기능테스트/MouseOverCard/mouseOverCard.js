function rotate(tag,){
    if(tag.hasClass("on")){
        tag.css("transform","rotateY(0deg)")
        tag.removeClass("on")
    }else{
        tag.css("transform","rotateY(180deg)")
        tag.addClass("on")
    }
    
}
$(document).ready(function(){
    $(".wrap>li").mouseover(function(){
        $(this).each(function(){
            rotate($(this))
        })
    })
})
