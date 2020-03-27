window.onload = function() {
    var aul = document.querySelector(".tap-nav ul");

    var alis = aul.getElementsByTagName('li');
    var tapcon = document.querySelectorAll('.tap-content');
    var amore = document.querySelector('.more');
    var aless = document.querySelector('.less');
    var afloor = document.getElementsByClassName("floor-value");
    var moredetail = document.querySelector('.more-detail a');
    var amount = document.querySelectorAll('.input-amount a');
    var oinput = document.querySelector('.count-number');





    console.log(tapcon, moredetail);
    console.log(amore)
    console.log(aless)

    console.log(alis);
    // for (var i = 0; i < alis.length; i++) {

    //     alis[i].onclick = function(ev) {

    //         for (var i = 0; i < alis.length; i++) { alis[i].classList.remove("active") };
    //         this.classList.add("active");
    //     }

    // }
    Array.from(alis).forEach((el, index) => {

        el.onclick = function() {
            console.log(index)
            for (var i = 0; i < alis.length; i++) {
                alis[i].classList.remove("active");
                tapcon[i].classList.remove('active3');
            }
            el.classList.add("active");
            tapcon[index].classList.add('active3');

        }
    })
    amore.onclick = function() {
        afloor[1].style.height = 'auto';

        amore.style.display = 'none';
        aless.style.display = 'block';


    }
    aless.onclick = function() {
        afloor[1].style.height = '720px';
        amore.style.display = 'block';
        aless.style.display = 'none';
    }
    moredetail.onclick = function() {
        for (var i = 0; i < alis.length; i++) {
            alis[i].classList.remove("active");
            tapcon[i].classList.remove('active3');
        }
        alis[1].classList.add('active');
        tapcon[1].classList.add('active3');
    }
    var shu = oinput.value;

    amount[0].onclick = function() {

        if (shu > 1) {
            shu--;
            oinput.value = shu;


        }




    }
    amount[1].onclick = function() {

        shu++
        oinput.value = shu;



    }
    var ainput = document.querySelector('.count-number');



    for (var i = 0; i < amount.length; i++) {
        amount[i].onmousemove = function() {
            var newshu = shu;
            if (newshu > 1) {
                amount[0].style.cursor = "pointer";
                console.log(newshu)
            } else {
                amount[0].style.cursor = "not-allowed";
            }
        }
    }
    var d = Date.UTC(2019, 7, 31, 00, 00);
    var obj = {
        sec: document.querySelector(".p-c-s"),
        mini: document.querySelector(".p-c-m"),
        hour: document.querySelector(".p-c-h"),
        day: document.querySelector(".count-day")
    }
    fnTimeCountDown(d, obj);


    // var objDemo=document.getElementById("demo");
    var objSmallBox = document.querySelector(".detail-left-top");
    var objMarkBox = document.getElementById("mark");
    var objFloatBox = document.getElementById("float-box");
    var objBigBox = document.getElementById("big-box");
    var objBigBoxImg = objBigBox.getElementsByTagName("img")[0];

    //给小盒子添加事件，移入和移出
    //移入：浮动的box和和bigBox显示
    objMarkBox.onmouseover = function() {
            objFloatBox.style.display = "block";
            objBigBox.style.display = "block";
        }
        //移除：浮动的box和bigBox隐藏
    objMarkBox.onmouseout = function() {
        objFloatBox.style.display = "none";
        objBigBox.style.display = "none";
    }

    //给小盒子添加鼠标移动事件
    objMarkBox.onmousemove = function(ev) {
        var _event = ev || window.event; //做兼容性，兼容IE
        //1计算值：
        var left = _event.offsetX - objFloatBox.offsetWidth / 2;
        var top = _event.offsetY - objFloatBox.offsetHeight / 2;


        //5.优化，在前面加判断,不让其溢出，加判断
        if (left < 0) left = 0;
        if (top < 0) top = 0;
        if (left > objSmallBox.offsetWidth - objFloatBox.offsetWidth)
            left = objSmallBox.offsetWidth - objFloatBox.offsetWidth;
        if (top > objSmallBox.offsetHeight - objFloatBox.offsetHeight)
            top = objSmallBox.offsetHeight - objFloatBox.offsetHeight;

        //2把值赋值给放大镜
        objFloatBox.style.left = left + "px";
        objFloatBox.style.top = top + "px";

        //3计算比例
        var percentX = left / (objMarkBox.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMarkBox.offsetHeight - objFloatBox.offsetHeight);

        //4利用这个比例计算距离后赋值给右侧的图片
        objBigBoxImg.style.left = -percentX * (objBigBoxImg.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImg.style.top = -percentY * (objBigBoxImg.offsetHeight - objBigBox.offsetHeight) + "px";
    }



}