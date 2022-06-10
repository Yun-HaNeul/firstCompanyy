// form animation
$(document).ready(function () {
    // form animation
    $('.form_content').click(function () {
        $(this).parent().addClass('on');
    })
    $('.form_input,.form_textArea').focus(function () {
        $(this).parents().addClass('on');
    })
    $('.check_pop').click(function () {
        $('.popup').addClass('on');
    })
    // p agree
    $('.pcon_close').click(function () {
        $('.popup').removeClass('on');
    })
    $('.p_agree').click(function () {
        $('.popup').removeClass('on');
        $("#checkBox").prop("checked", true);
    })
})

// nav
function navgandler() {
    const nav = document.querySelector(".nav");
    const burger = document.querySelector(".burger");
    const header = document.querySelector("#header");
    const body = document.querySelector("html");

    burger.addEventListener("click",function(){
        if(!header.classList.contains("navOn")){
            header.classList.add("navOn");
            body.style.overflowY = "hidden";
        }else {
            header.classList.remove("navOn");
            burger.classList.add("close");
            body.style.overflowY = "scroll";
            setTimeout(function(){
                burger.classList.remove("close");
            },1000);
        }
    })
};

navgandler();

// validation chk
function formHandler() {
    const input = document.querySelectorAll('.form_input');
    const checkbox = document.querySelectorAll('.prj input[type="checkbox"]');
    const p_checkbox = document.querySelector('#checkBox');
    // const is_checked = checkbox.checked;
    const p_checked = p_checkbox.checked;
    let $value
    input.forEach(function (item) {
        $value = item.value;

        if (!$value) {
            item.parentNode.classList.add('error');
            document.querySelector('#submits').value = "항목을 입력해주세요.";
        } else {
            item.parentNode.classList.remove('error');
        }
    })

    let is_chk = false;
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            is_chk = true;
            break;
        }
    }

    if (!is_chk) {
        document.querySelector("#submits").disabled = true;
        alert('프로젝트 종류를 선택해주세요.')
    }

    let $errorCount = document.querySelectorAll('.error').length;

    console.log($errorCount);

    if ($errorCount == 0) {
        if (!p_checked == 1) {
            document.querySelector('#submits').disabled = true;
            alert('개인정보수집동의에 체크해주세요.')
        }
    } else {
        document.querySelector('#submits').disabled = true;
    }
}

// 값 입력시 에러 제거
document.querySelector('#submits').addEventListener('click', formHandler);
const inputBox = document.querySelectorAll('.form_input');
inputBox.forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('#submits').disabled = false;
        document.querySelector('#submits').value = "문의사항 전송하기";
    });
})

// email js

emailjs.init('e9PwK_x1c7-Ip6znY');

document.getElementById('contact-Form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    // this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('firstcompany', 'template_08lxlw7', this)
        .then(function () {
            alert('빠른시일내에 답장 드리겠습니다. 감사합니다.');
        }, function (error) {
            console.log('FAILED...', error);
        });
});

// top btn
function topBtn() {
    const top = document.querySelector(".topBox");

    top.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}
topBtn();