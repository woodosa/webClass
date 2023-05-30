$(document).ready(function(){

    $("p").css("color","green"),
    $("p").css("font-weight","bold")
    $("p").css("color","blue").css("font-weight","normal")
    //체이닝기법으로도 메서드를 활용할 수 있다.

    $(".naverLink").attr("href","http://www.naver.com")
    $(".textframe").html("<i>text()함수는 선택한 태그의 안에 들어가는 내용을 새로운 내용으로 교체할 수 있다.</i>")
    
    $("#a").addClass("on")
    $("#a").removeClass("on")
    
    $(".list>li").css("border-bottom","1px solid black")
    $(".list").children().css("color","blue")

    // let a=document.querySelector(".list").children    
    // for(let i=0;i<a.length;i++){
    //     a[i].style.color="red"

    // }
    $(".list>li").parent().css("background","red")
    $(".list>li:nth-of-type(2)").next().css("text-align","center")
    $(".list>li:nth-of-type(2)").prev().css("text-align","right")



    $(".listNum>li").eq(0).css("color","red")
})

    