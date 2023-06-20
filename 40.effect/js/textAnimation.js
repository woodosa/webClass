

    function txtAni(Tag,option){
        
        // let lettersLength = $(Tag).get(0).innerText.length//태그안의 문자 개수를 리턴.
        // let result=""
        // for(let i=0; i<lettersLength;i++){
        //     result+="<b>"+$(Tag).get(0).innerText[i]+"</b>"
        // }
        // $(Top).html(result)
        //제이쿼리문서객체.get(0) 실행하게되면 제이쿼리문서객체를 자바스크립트문서객체로 변환하여 리턴한다.
        //문자데이터들은 배열처럼 구성이 되어있다.


        let lettersLength = $(Tag).get(0).innerText.length
        let result =""
        for(let i=0 ; i<lettersLength ; i++){
            result+="<b>"+$(Tag).get(0).innerText[i]+"</b>"
        }
        $(Tag).html(result)

        let floatingTxtLength = $(Tag+" b").length
        let aniDuration=option.aniSpeed?option.aniSpeed:0.5
        let aniTerm=option.aniDelay?option.aniDelay:1
        let aniTxtSize=option.aniTxtSize?option.aniTxtSize:50
        let aniName = option.effect?option.effect:"introAni"
        // aniDelay 글자간 애니메이션 간격
        // aniSpeed 애니메이션 속도
        // fontSize 글자크기
        
        

        // $(Tag).css("position","absolute").css("left","50%").css("top","50%").css("transform","translate(-50%,-50%)").css("z-index","2").css("white-space","nowrap").css("font-size",0)
        
        // 중앙배치 css


        $(Tag+" b").css("opacity",0).css("display","inline-block").css("font-size",aniTxtSize+"px")

        //함수 전제 양식
        console.log(floatingTxtLength)
        for(let i=0;i<=floatingTxtLength;i++){
            // console.log("introAni "+aniDuration+"s linear "+(aniTerm*i)+"s forwards")
            // $(Tag+" b").eq(i-1).css("animation", "introAni "+aniDuration+"s linear forwards "+(aniTerm*i)+"s")}
            $(Tag+" b:nth-of-type("+(i+1)+")").css("animation",aniName+" "+aniDuration+"s linear "+(aniTerm*i)+"s forwards")
        }
    }
