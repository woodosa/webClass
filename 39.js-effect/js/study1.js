// onload=function(){

//     let btn=document.querySelector(".btnMenu")
//     let nav=document.querySelector("nav")
//     btn.addEventListener("click",function(){
//         nav.classList.add("on")
//     })
        
    
// }


$(document).ready(function(){
    let gnbState =false
    $(".btnMenu").click(function(){
        // if(gnbState==false){
        //     $("nav").addClass("on")
        //     $(".btnMenu").html("CLOSE")
        //     gnbState=true
        // }else{
        //     $("nav").removeClass("on")
        //     $(".btnMenu").html("MENU")
        //     gnbState =false
        // }
        $(".gnb>li").css("height","50px")
        $(".gnb>li").removeClass("on")
        if($("nav").hasClass("on")==false){
            $("nav").addClass("on")
            $(".btnMenu").html("CLOSE")
        }else{
            $("nav").removeClass("on")
            $(".btnMenu").html("MENU")
        }

    })
    $(".gnb>li").click(function(){
        
        if($(this).hasClass("on")==true){
            $(this).css("height","50px")
            $(this).removeClass("on")
        }else{
            $(".gnb>li").css("height","50px")
            $(".gnb>li").removeClass("on")
            let liDepthLen=$(this).children("ul").children().length
            $(this).css("height",(liDepthLen+1)*50+"px")
            $(this).addClass("on")
            
        }
    })
    $(".gnb>li.on a>span").click(function(){
        alert("t")
        // $(".gnb>li").css("height","50px")
    })

    // $(".gnb>li").click(function(){
    //     let liDepthLen=$(this).children("ul").children().length
    //     $(".gnb>li").css("height","50px")
    //     $(this).css("height",(liDepthLen+1)*50+"px")
    // })

})