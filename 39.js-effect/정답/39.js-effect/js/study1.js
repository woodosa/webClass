$(document).ready(function(){

    // btnMenu클래스 버튼을 클릭했을 때 nav태그가 보이게 되도록 기능

    $(".btnMenu").click(function(){
        if($("nav").hasClass("on")==false){
            //메뉴가 닫혀있는 상태->메뉴를 여는 기능
            $("nav").addClass("on")
        }else{
            //메뉴가 열려있는 상태->메뉴를 닫는 기능
            $("nav").removeClass("on")
        }
    })

    $(".gnb>li").click(function(){

        // 리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다 / 없다
        if($(this).hasClass("on")==true){
            $(this).css("height","50px")
            $(this).removeClass("on")
        }else{
            $(".gnb>li").css("height","50px")
            $(".gnb>li").removeClass("on")
            let li2dep = $(this).children("ul").children().length
            $(this).css("height",(li2dep+1)*50+"px")
            $(this).addClass("on")
        }
    });

    $(".gnb ul").click(function(){
        return false
    })
    

    



})