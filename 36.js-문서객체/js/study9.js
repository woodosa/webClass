window.onload=function(){

    let train= document.querySelector(".train")
    let nextBtn = document.querySelector(".btnNext")
    let prevBtn =document.querySelector(".btnPrev")
    let pagenation =document.querySelectorAll(".pagenation>li")
    let count=0
    let trainList=train.children
    
    
    
    
    nextBtn.addEventListener("click", function(){
            count++ 
            if(count>3){
                count=0
            }
            train.style.transform="translateX(-"+25*count+"%)"
                for(let i=0;i<trainList.length;i++){
                    trainList[i].classList.remove("on")
                    pagenation[i].classList.remove("on")
                }
            trainList[count].classList.add("on")
            pagenation[count].classList.add("on")
    })


    prevBtn.addEventListener("click", function(){
        count-- 
        if(count<0){
            count=3
        }
        train.style.transform="translateX(-"+25*count+"%)" 
            for(let i=0;i<trainList.length;i++){
                trainList[i].classList.remove("on")
                pagenation[i].classList.remove("on")
             }
        trainList[count].classList.add("on")
        pagenation[count].classList.add("on")
        // trainList[count].classList.add("on")
    })

    for(let k=0;k<pagenation.length;k++){
        
        pagenation[k].addEventListener("click", function(){
                count = k
                for(let i=0;i<trainList.length;i++){
                    trainList[i].classList.remove("on")
                    pagenation[i].classList.remove("on")
                }
            trainList[k].classList.add("on")
            pagenation[k].classList.add("on")
            
            train.style.transform="translateX(-"+25*k+"%)"
        })
    }

}