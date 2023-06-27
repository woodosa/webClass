window.onload=function(){
    let path_a= document.querySelector(".c1")
    let pathLength= path_a.getTotalLength()
    

    $(".c1").css("stroke-dasharray",pathLength)
    $(".c1").css("stroke-dashoffset",pathLength)
}
