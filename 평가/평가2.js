$(document).ready(function(){
    $(".tabTitle").click(function(){
        if($(".tabtitle").hasClass("on")){
            $(".tabTitle").removeClass("on")
        }else{
            $(".tabTitle").removeClass("on")
        }
        $(this).addClass("on")
    })

})