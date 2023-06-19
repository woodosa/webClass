$(document).ready(function(){
    // let floatingTxtLength = $(".floatingTxt h1 b").length
    // console.log(floatingTxtLength)
    // for(let i=0;i<=floatingTxtLength;i++){
    // $(".floatingTxt h1 b").eq(i-1).css("animation", "introAni 1s linear forwards "+(0.25*i)+"s")}


    function txtAni(Tag,option){
        let floatingTxtLength = $(Tag+" b").length
        let aniDuration=option.aniSpeed
        let aniTerm=option.aniDelay

        $(Tag).css("position","absolute").css("left","50%").css("top","50%").css("transform","translate(-50%,-50%)").css("z-index","2").css("white-space","nowrap").css("font-size",0)
        $(Tag+" b").css("opacity",0).css("display","inline-block").css("font-size",option.textSize+"px")

        //함수 전제 양식
        console.log(floatingTxtLength)
        for(let i=0;i<=floatingTxtLength+1;i++){
            $(Tag+" b").eq(i-1).css("animation", "introAni "+aniDuration+"s linear forwards "+(aniTerm*i)+"s")}
    }
    txtAni(".floatingTxt",{
        aniDelay:0.2,
        aniSpeed:1,
        textSize:45
    })

    txtAni(".con",{
        aniDelay:0.2,
        aniSpeed:1,
        textSize:80
    })

})