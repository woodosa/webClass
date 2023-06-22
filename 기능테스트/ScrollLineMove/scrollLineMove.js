$(document).ready(function(){
    let winst=$(window).scrollTop()
    let mvTop=$(".testBase").offset().top
    let winHeight=$(window).height()*0.8

    $(window).scroll(function(){
        let winst=$(window).scrollTop()
        let mvTop=$(".testBase").offset().top
        let winHeight=$(window).height()*0.8
        let winScrollSet=winst+winHeight
        if(winScrollSet>=mvTop && winScrollSet-mvTop<450){
            // 450 은 실행길이
            $(".testBase").css("height",(winScrollSet-mvTop)+"px")
            // console.log("라인 길이",winScrollSet-mvTop)
        }
    })

})