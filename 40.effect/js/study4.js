$(document).ready(function(){

        for(let i=0;i<21;i++){
            $(".train").html(`<li>
            <img class="small" src="./img/img (2)/s${i}.jpg" alt=".">
            <img class="big" src="./img/img (2)/pic${i}.jpg" alt=".">
            <h2 class="title">Art Work ${i}</h2>
            <p>Artwork description comes here. <br> 2023.06.20</p>
            <span class="btnClose">close</span>
            </li>`)        
        }

})