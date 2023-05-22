onload=function(){


    let menuState = false
    let navShow = this.document.querySelector("nav")
    let close = document.querySelector(".btnMenu")


    close.addEventListener("click",function(){
  

        if(menuState== false ){
        close.classList.add("close")
        navShow.classList.add("show")
        menuState = true
        }
        else{
            close.classList.remove("close")
            navShow.classList.remove("show")
            menuState = false
        }
    })


}   