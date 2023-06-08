$(document).ready(function(){

    $(".headL").click(function(){
        if($(this).hasClass("on")==false){
            $(this).addClass("on")
            $(".blackcover").addClass("on")
            $(".menubutton").addClass("on")
            $(".headL>i").html("닫기")
            $(".menubutton").children().removeClass("on")
            
        }else{
            $(".menubutton").children().removeClass("on")
            $(this).removeClass("on")
            $(".blackcover").removeClass("on")
            $(".menubutton").removeClass("on")
            $(".headL>i").html("메뉴")
        }
    })
    $(".menubottom>ul>li").click(function(){
        // let menuDepth1 = $(this).children("ul").children().length
        // let menuDepth2 = $(this).children("div").children("ul").children().length
        // if(menuDepth1!==0){
        //     if($(this.hasClass("on")==true)){
        //         $(this).css("height","80px")
        //         $(this).removeClass("on")
        //     }else{
        //         $(".menubottom>ul>li").css("height","8  0px")
        //         $(".menubottom>ul>li").removeClass("on")
        //         $(this).css("height",(menuDepth1+1)*80+"px")
        //         $(this).addClass("on")
        //     }
        // }
        // if(menuDepth2!==0){if($(this.hasClass("on")==true)){
        //     $(this).css("height","80px")
        //     $(this).removeClass("on")
        // }else{
        //     $(".menubottom>ul>li").css("height","80px")
        //     $(".menubottom>ul>li").removeClass("on")
        //     $(this).css("height",(menuDepth2+1)*80+"px")
        //     $(this).addClass("on")
        // }}
        // $(".menubottom>ul>li").children().removeClass("on")
        
        if($(this).hasClass("on")==true){
            $(this).removeClass("on")
        }else{
            $(".menubottom>ul>li").removeClass("on")
            $(this).addClass("on")
            
        }
        
        // !$(this).removeClass("on")
        
        
    })
    $(".menubottom>ul>li>ul>li").click(function(){
        return false

    })
    $(".menubottom>ul>li>ul>li").click(function(){
        if($(this).hasClass("on")==true){
        $(this).removeClass("on")
    }else{
        $(".menubottom>ul>li>ul>li").removeClass("on")
        $(this).addClass("on")
        $(this).css("color","#ddd")
    }
    })  
    $(".menubottom>ul>li>ul>li>div>ul>li").click(function(){
        return false

    })


    // $(".blackcover").click(function(){
    //     return false;
    // })

})