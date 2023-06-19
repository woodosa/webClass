$(document).ready(function(){
    // $(".tabMenu>li").click(function(){
    //     if($(".tabMenu>li").hasClass("on")){
    //         $(".tabMenu>li").removeClass("on")
    //     }else{
    //         $(".tabMenu>li").removeClass("on")
    //     }
    //     $(this).addClass("on")
    // })
    // $(".tabMenu>li").mouseout(function(){
    //     if($(".tabMenu>li").hasClass("on")){
    //         $(".tabMenu>li").removeClass("on")
    //     }else{
    //         $(".tabMenu>li").removeClass("on")
    //     }
    //     $(this).addClass("on")
    // })
    $(".contentTab>li").click(function(){
        if($(".contentTab>li").hasClass("on")){
            $(".contentTab>li").removeClass("on")
        }else{
            $(".contentTab>li").removeClass("on")
        }
        $(this).addClass("on")
    })
    $(".popup_link>span").click(function(){
        if($(".popup").hasClass("on")){
            $(".popup").removeClass("on")
        }else{
            $(".popup").addClass("on")
        }
    })
    $(".popup>span").click(function(){
        $(".popup").removeClass("on")
    })
    let count=0;
    // function Slide(count){
    //     count++
    //     if(count>=3){count=0}
    //     $(".imgSlide>ul").css("transform","translateX(-1200px*"+count+")")
    // }

    let autoSlide=setInterval(function(){
        count++
        if(count>=3){count=0}
        $(".imgSlide>ul").css("transform","translateX(-"+(1200*count)+"px)")
    },2500)

})