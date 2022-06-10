(function(){
    
    // nav
    function navgandler() {
        const nav = document.querySelector(".nav");
        const burger = document.querySelector(".burger");

        burger.addEventListener("click",function(){
            if(!header.classList.contains("navOn")){
                header.classList.add("navOn");
            }else {
                header.classList.remove("navOn");
                burger.classList.add("close");
                setTimeout(function(){
                    burger.classList.remove("close");
                },1000);
            }
        })
    };
    function scrollHandler(){
        const $target = document.querySelectorAll("section");
        let sct = this.scrollY;
        // console.log(sct);
        //active 활성화
        $target.forEach(function(item){
            let tt = item.offsetTop;
            if(sct >= tt - 800){
                item.classList.add("on");
            }
            
        })
    }
    window.addEventListener("scroll",scrollHandler);

    function topBtn() {
        const top = document.querySelector(".topBox");

        top.addEventListener("click",function(e){
            e.preventDefault();
            window.scrollTo({top:0, behavior: 'smooth'})
        })
    }
    navgandler();
    topBtn();
})();