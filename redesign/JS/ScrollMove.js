function ScrollMovTxt(MoveTag,MoveDirectionOption){
    let mvTop = $(MoveTag).offset().top
    let winst = $(window).scrollTop()
    let winHeight = $(window).height()
    let animationDirection = MoveDirectionOption.direction;
    let transformStyle = "";
    // let targetWidth = $(MoveTag).width();
    // let moveStrength = MoveDirectionOption.strength;
    // let moveLenght = MoveDirectionOption.length;
    let moveOriginPoint = MoveDirectionOption.OriginPoint?MoveDirectionOption.OriginPoint:0
    let movePercent=(winst+winHeight-mvTop-moveOriginPoint)
    let moveDirection= MoveDirectionOption.Direction?MoveDirectionOption.Direction:"translateX("
    let stopPoint= MoveDirectionOption.stop?MoveDirectionOption.stop:99999999
    // if(animationDirection=="left"){
    //     transformStyle="translateX("
    // }else if(animationDirection=="right"){
    //     transformStyle="translateX(-"
    // }else if(animationDirection=="top"){
    //     transformStyle=""
    // }
    // let Direction ={ left:"translateX(",right:"translateX(-",top:"translateY(",bottom:"translateY(-" }



    // let moveOrigin = MoveDirectionOption.origin?MoveDirectionOption.origin:0
    // let stopPoint = MoveDirectionOption.stop?MoveDirectionOption.stop

    // if(winst+winHeight>=mvTop){
    //     if(winst+winHeight-mvTop<=100){
    //         let movePercent=(winst+winHeight-mvTop)*moveLenght-100
    //         let movePixel = targetWidth*movePercent/100/moveStrength
    //         console.log(movePixel)
    //         $(MoveTag).css("transform","translateX("+movePixel+"px)")     
    //     }
    // }
    // ver.1  
    console.log("스크롤길이",winst)
    console.log("화면높이",winHeight)
    console.log("걸리는지점",winst+winHeight)
    console.log("태그높이",mvTop)
    console.log("-------------------------")
    $(MoveTag).css("transform",moveDirection+(-moveOriginPoint)+"px)")
    if(winst+winHeight>=mvTop){
        console.log(movePercent)
        if(movePercent > stopPoint){movePercent= stopPoint}
        $(MoveTag).css("transform",moveDirection+movePercent+"px)")
    } 

    // 방향양식
    //왼쪽-오른쪽 "translateX(" ,오른쪽-왼쪽 "translateX-*( ,위-아래 "translateY(", 아래-위 "translateY(-"

}
function MinusScrollMovTxt(MoveTag,MoveDirectionOption){
    let mvTop = $(MoveTag).offset().top
    let winst = $(window).scrollTop()
    let winHeight = $(window).height()
    let animationDirection = MoveDirectionOption.direction;
    let transformStyle = "";
    let moveOriginPoint = MoveDirectionOption.OriginPoint?MoveDirectionOption.OriginPoint:0
    let movePercent=(mvTop-(winst+winHeight+moveOriginPoint))
    let minusMovePercent=(winst+winHeight-mvTop)
    let moveDirection= MoveDirectionOption.Direction?MoveDirectionOption.Direction:"translateX("
    let stopPoint= MoveDirectionOption.stop?MoveDirectionOption.stop:1

    $(MoveTag).css("transform",moveDirection+(-moveOriginPoint)+"px)")
    // $(MoveTag).css("transition","all 0.1s ease 0s")
    console.log("스크롤길이",winst)
    console.log("화면높이",winHeight)
    console.log("걸리는지점",winst+winHeight)
    console.log("태그높이",mvTop)
    console.log("-------------------------")
    if(winst+winHeight>=mvTop){
        // console.log("transform",moveDirection+movePercent+"px)")
        // $(MoveTag).css("transform",moveDirection+(movePercent)+"px)")

        if(movePercent < stopPoint){movePercent= stopPoint}
        $(MoveTag).css("transform",moveDirection+(movePercent)+"px)")
        console.log("스크롤길이",winst)
        console.log("화면높이",winHeight)
        console.log("걸리는지점",winst+winHeight)
        console.log("태그높이",mvTop)
        // console.log("오리진포인트",moveOriginPoint)
        console.log("-------------------------")
    } 

    // 방향양식
    //왼쪽-오른쪽 "translateX(" ,오른쪽-왼쪽 "translateX-*( ,위-아래 "translateY(", 아래-위 "translateY(-"

}