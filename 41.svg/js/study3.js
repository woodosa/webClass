$(document).ready(function(){

    $(".btn").click(function(){
        // if($(this).parent().hasClass("on")==false){
        //     $(this).parent().addClass("on")
        //     let per = Number($(this).parent().find(".per").text())
        //     let circle=$(this).parent().find("circle")
            
        //     $(this).parent().find(".per").css("opacity",1)



        //     let percentTag=$(this).parent().find(".per")
        //     let count = 0;
        //     let timer = setInterval(function(){
        //         count++
        //         circle.css("stroke-dashoffset",314-(314*(count/ 100)))
        //         if(count>=per){
        //             clearInterval(timer)
        //         }
        //         percentTag.text(count+"%")
        //     },20)
        // }
        $(".skill>li").each(function(){
            let percent=$(this).find(".per").text()
            let list=$(this)
            // console.log(percent)
            let count = 0
            $(list).find(".per").css("opacity",1)
            let circle = $(this).find("circle")
            // circle.css("stroke-dashoffset",314-(314*(percent/100)))
            let timer=setInterval(function(){
                count++
                
                if(count>=percent){
                    clearInterval(timer)
                }
                list.find(".per").text(count)
                circle.css("stroke-dashoffset",314-(314*(count/100)))

            },10)

        })
    })

})