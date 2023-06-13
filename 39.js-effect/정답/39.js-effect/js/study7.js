$(document).ready(function(){
    let count=0
    let listLength=$(".train>li").length



    $(".btnNext").click(function(e){
        count++
        if(count>=listLength){count=0}
        e.preventDefault()
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        
    })
    $(".btnPrev").click(function(e){
        count--
        if(count<0){count=listLength-1}
        e.preventDefault()
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        
    })

    let timer=setInterval(function(){
        count++
        if(count>=listLength){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)

    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    $(".station").mouseout(function(){
        timer=setInterval(function(){
            count++
            if(count>=listLength){count=0}
            $(".train>li").removeClass("on")
            $(".train>li").eq(count).addClass("on")
    },2500)
    })

})