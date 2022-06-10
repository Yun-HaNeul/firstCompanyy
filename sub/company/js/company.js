(function(){
    const header = document.querySelector("#header");
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
        const $target = document.querySelector(".info");
        const m_fix = document.querySelector(".m_fix");
        const sec2 = document.querySelector(".ideol");
        let sct2 = sec2.offsetTop;
        let sct = this.scrollY;
        // console.log(sct);
        //active 활성화
        let tt = $target.offsetTop;
        if(document.documentElement.clientWidth > 640){
            if(sct >= tt + 100){
                $target.classList.add("on");
                
            }
        }else if(document.documentElement.clientWidth < 640){
            if(sct >= tt - 300){
                $target.classList.add("on");
                if(sct >= sct2 - 100){
                    header.classList.add("on");
                    m_fix.classList.add("on");
                }else {
                    header.classList.remove("on");
                    m_fix.classList.remove("on");
                }
            }
        }
    }
    
    function topBtn() {
        const top = document.querySelector(".topBox");

        top.addEventListener("click",function(e){
            e.preventDefault();
            window.scrollTo({top:0, behavior: 'smooth'})
        })
    }
    
    navgandler();
    window.addEventListener("scroll",scrollHandler);
    topBtn();
})();