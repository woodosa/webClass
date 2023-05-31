$(document).ready(function(){

$(".btn1").click(function(){
    $(".textFrame").css("color","blue")
})
$(".textFrame").mouseover(function(){
    $(".textFrame").css("text-decoration","underline")
})
$(".textFrame").mouseout(function(){
    $(".textFrame").css("text-decoration","none")
})
})