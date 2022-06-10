(function (){
    const header = document.querySelector("#header");
    // main svg
    function sceneHandler() {
        let x = null;
        let y = null;

        document.addEventListener("mousemove",function onMouseUpdate(e){
            x = e.pageX / 30;
            y = e.pageY / 30;

            const svg = document.querySelectorAll(".obj_wrap");
            svg.forEach(function(item){
                item.style.left = x +"px";
                item.style.top =  y +"px";
            })
        }); 
    }
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
    
    sceneHandler() 
    function sec3Handler() {
        const sec3 = document.querySelector("#main3");
        
        const m_fix = document.querySelector(".m_fix");
        const top = document.querySelector(".top")
        let sec3tt = sec3.offsetTop;
        let ct 
        
        window.addEventListener("scroll",function() {
            ct = this.scrollY;
            if(document.documentElement.clientWidth > 640){
                if(ct >= sec3tt){
                    header.classList.add("on");
                    m_fix.classList.add("on");
                    
                }else {
                    header.classList.remove("on");
                    m_fix.classList.remove("on");
                }
            }else if(document.documentElement.clientWidth < 640){
                if(ct >= sec3tt - 100){
                    header.classList.add("on");
                    m_fix.classList.add("on");
                    
                }else {
                    header.classList.remove("on");
                    m_fix.classList.remove("on");
                }
            }
        });
        
        top.addEventListener("click",function(e) {
            e.preventDefault();
        });

    }
    sec3Handler();

    function secHandler() {
        const arrow = document.querySelector(".arrowBox");
        const section = document.querySelectorAll("section");
        let num = 0;
        let height = document.documentElement.clientHeight;
        console.log(section);

        arrow.addEventListener("click", function(){
            num++;
            let tt = num * height;
            window.scrollTo({top:tt, behavior: 'smooth'});
            if(num == 3){
                num = 0;
            }
        })
    }
    secHandler ();

    function scrollHandler(){
        const $target = document.querySelectorAll("section");
        const span = document.querySelector(".num");
        let sct = this.scrollY;
        let num;
        // console.log(sct);
        //active 활성화
        $target.forEach(function(item){
            let tt = item.offsetTop;
            num = item.dataset.num;
            if(sct >= tt - 300){
                item.classList.add("on");
                span.innerHTML = num;
            }
            
        })
    }

    window.addEventListener("scroll",scrollHandler);
    scrollHandler();
    function topBtn() {
        const top = document.querySelector(".topBox");

        top.addEventListener("click",function(e){
            e.preventDefault();
            window.scrollTo({top:0, behavior: 'smooth'})
        })
    }

    navgandler();
    topBtn();
})()