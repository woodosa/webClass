
onload=function(){
    
    let tabTitles = document.querySelectorAll(".tabMenu>ul>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription=[
        `<h3>title1<h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptatem vel, quos, velit alias iure iusto deleniti numquam at aut ipsa. Non similique necessitatibus quis labore esse, maxime temporibus facere.</p>`,
         `<h3>title2<h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptatem vel, quos, velit alias iure iusto deleniti numquam at aut ipsa. Non similique necessitatibus quis labore esse, maxime temporibus facere.</p>`,
         `<h3>title3<h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis voluptatem vel, quos, velit alias iure iusto deleniti numquam at aut ipsa. Non similique necessitatibus quis labore esse, maxime temporibus facere.</p>`

    ]

    for(let i=0; i<tabTitles.length; i++)
        tabTitles[i].addEventListener("click",function(){
            
           for(let j=0; j<tabTitles.length; j++){
           tabTitles[j].classList.remove("on")
           }
         tabTitles[i].classList.add("on")
         tabDes.innerHTML = tabDescription[i]
        })

}