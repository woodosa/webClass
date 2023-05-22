


window.onload=function(){
    let btn1= document.querySelector(".btnClick")
    btn1.addEventListener("click",function(){
        //클릭했을 때 실행되는 소스코드
        document.querySelector(".txtbox").style.color="red"
    })





    let btnOpen=document.querySelector(".btnPopup")
    btnOpen.addEventListener("click", function(){
        // document.querySelector(".hiddenPopup").style.display="flex"
         document.querySelector(".hiddenPopup").classList.add("show")
    })
    // let btnClose=document.querySelector(".btnClose")
    // btnClose.addEventListener("click", function(){
    //     // document.querySelector(".hiddenPopup").style.display="flex"
    //      document.querySelector(".hiddenPopup").classList.remove("show")
    // })
}
