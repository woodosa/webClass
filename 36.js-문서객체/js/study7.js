onload=function(){

    
    let dtlist=document.querySelectorAll(".tabMenu>dt")
    for(let i=0;i<dtlist.length;i++){
        dtlist[i].addEventListener("click", function(){
            for(let j=0;j<dtlist.length;j++){
                dtlist[j].classList.remove("on")
                // dtlist[j].nextElementSibling.classList.remove("on")
            }
            this.classList.add("on")
            // this.nextElementSibling.classList.add("on")
        })
    }
    
}