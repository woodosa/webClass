$(document).ready(function(){
    count=0;
    $(".next").click(function(){
        count++
        if(count>3)(count=0)
        $(".train").css("transform","translateX(-"+(25*count)+"%)")
    })
    $(".prev").click(function(){
        count--
        if(count<0)(count=3)
        $(".train").css("transform","translateX(-"+(25*count)+"%)")
    })
})