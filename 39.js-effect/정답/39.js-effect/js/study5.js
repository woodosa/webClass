$(document).ready(function(){

    let count = 0;
    
    let perView = 1;
    //train클래스의 너비를 변경->train클래스의 너비를 불러와서 perview로 나눈후 결과를 다시 적용
    let trainLenght;
    let stationWidth;
    let trainWidth;
    if($(window).width()>=1024){
        slideA(2.5)   
    }else if($(window).width()>=768){
        slideA(2)
    }else{
        slideA(1)
    }
    function slideA(perView){
        trainLenght=$(".train").children().length
        stationWidth=$(".station").width()
        trainWidth=stationWidth * trainLenght / perView
        $(".train").width(trainWidth)
    }
    
    $(".btnNext").click(function(e){
        count++
        e.preventDefault()
        if(count>4){count=0}
        moveSlider(count)
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=4}
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
    // moveSlider(2)



})