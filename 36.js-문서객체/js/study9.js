window.onload=function(){

    let train= document.querySelector(".train")
    let nextBtn = document.querySelector(".btnNext")
    let prevBtn =document.querySelector(".btnPrev")
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
                }
            trainList[count].classList.add("on")
    })


    prevBtn.addEventListener("click", function(){
        count-- 
        if(count<0){
            count=3
        }
        train.style.transform="translateX(-"+25*count+"%)" 
        // trainList[count].classList.add("on")
    })
}