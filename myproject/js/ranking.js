var bookarr1 = [{
        cn: "back1",
        index: "1",
        name: "活着/余华作品",
        src: "./img/row2/文学小说/1.jpg",
        author: "余华",
        price: "26.60",
        active: "active"


    },
    {
        cn: "back1",
        index: "2",
        name: "月亮与六便士",
        src: "./img/row2/文学小说/2.jpg",
        author: "（英）毛姆",
        price: "37.81",
        active: ""
    },
    {
        cn: "back1",
        index: "3",
        name: "人间失格/世界文学名著",
        src: "./img/row2/文学小说/3.jpg",
        author: "（日）太宰治",
        price: "23.75",
        active: ""
    },
    {
        cn: "back2",
        index: "4",
        name: "中国科幻基石丛书：三体（套装1-3）",
        src: "./img/row2/文学小说/4.jpg",
        author: "刘慈欣",
        price: "88.35",
        active: ""
    },
    {
        cn: "back2",
        index: "5",
        name: "浮生六记",
        src: "./img/row2/文学小说/5.jpg",
        author: "沈复",
        price: "30.40",
        active: ""
    }
]
var bookarr2 = [{
        cn: "back1",
        index: "1",
        name: "万历十五年",
        src: "./img/row2/人文社科/1.jpg",
        author: "余华",
        price: "26.60",
        active: "active"


    },
    {
        cn: "back1",
        index: "2",
        name: "人类简史",
        src: "./img/row2/人文社科/2.jpg",
        author: "（英）毛姆",
        price: "64.60",
        active: ""
    },
    {
        cn: "back1",
        index: "3",
        name: "乌合之众",
        src: "./img/row2/人文社科/3.jpg",
        author: "（日）太宰治",
        price: "34.20",
        active: ""
    },
    {
        cn: "back2",
        index: "4",
        name: "明朝那些事儿",
        src: "./img/row2/人文社科/4.jpg",
        author: "当年明月",
        price: "282.15",
        active: ""
    },
    {
        cn: "back2",
        index: "5",
        name: "今日简史",
        src: "./img/row2/经管励志/5.jpg",
        author: "沈复",
        price: "33.25",
        active: ""
    }
]
var bookarr3 = [{
        cn: "back1",
        index: "1",
        name: "稻盛和夫阿米巴经营",
        src: "./img/row2/经管励志/1.jpg",
        author: "稻盛和夫",
        price: "33.60",
        active: "active"


    },
    {
        cn: "back1",
        index: "2",
        name: "金字塔原理",
        src: "./img/row2/经管励志/2.jpg",
        author: "芭芭拉",
        price: "64.46",
        active: ""
    },
    {
        cn: "back1",
        index: "3",
        name: "原则",
        src: "./img/row2/经管励志/3.jpg",
        author: "达黎欧",
        price: "34.20",
        active: ""
    },
    {
        cn: "back2",
        index: "4",
        name: "薛兆丰经济学讲义",
        src: "./img/row2/经管励志/4.jpg",
        author: "薛兆丰",
        price: "64.15",
        active: ""
    },
    {
        cn: "back2",
        index: "5",
        name: "影响力",
        src: "./img/row2/经管励志/5.jpg",
        author: "沈复",
        price: "52.60",
        active: ""
    }
]
var bookarr4 = [{
        cn: "back1",
        index: "1",
        name: "我们的节日",
        src: "./img/row2/少儿童书/1.jpg",
        author: "洋洋兔",
        price: "33.60",
        active: "active"


    },
    {
        cn: "back1",
        index: "2",
        name: "我的第一本地理启蒙书",
        src: "./img/row2/少儿童书/2.jpg",
        author: "郑立强",
        price: "47.31.46",
        active: ""
    },
    {
        cn: "back1",
        index: "3",
        name: "这就是二十四节气",
        src: "./img/row2/少儿童书/3.jpg",
        author: "高春香",
        price: "95.20",
        active: ""
    },
    {
        cn: "back2",
        index: "4",
        name: "魔法拼音国",
        src: "./img/row2/少儿童书/4.jpg",
        author: "薛兆丰",
        price: "64.15",
        active: ""
    },
    {
        cn: "back2",
        index: "5",
        name: "环球国家地理百科全书",
        src: "./img/row2/少儿童书/5.jpg",
        author: "王越",
        price: "189.60",
        active: ""
    }
]
window.onload = function() {
    var obj1 = {
        bookarr1: bookarr1




    }
    var obj2 = {
        bookarr2: bookarr2
    }
    var obj3 = {
        bookarr3: bookarr3
    }
    var obj4 = {
        bookarr4: bookarr4
    }
    var html1 = template("ranking-list", obj1)
    var html2 = template("ranking-list", obj2)
    var html3 = template("ranking-list", obj3)
    var html4 = template("ranking-list", obj4)



    var bul1 = $(".rankingul1")[0];
    var bul2 = $(".rankingul2")[0];
    var bul3 = $(".rankingul3")[0];
    var bul4 = $(".rankingul4")[0];
    console.log(bul4)



    bul1.innerHTML = html1;
    bul2.innerHTML = html2;
    bul3.innerHTML = html3;
    bul4.innerHTML = html4;






    // var huoqu = function(id) { return typeof id === "string" ? document.getElementsByClassName(id) : id };

    // //获取tagName
    // var huoqu1 = function(tagName, oParent) { return (oParent || document).getElementsByTagName(tagName) };


    // var AutoPlay = function(id) { this.initialize(id) };


    // AutoPlay.prototype = {
    //     initialize: function(id) {

    //         _this = this;
    //         this.Oul = huoqu(rankingul1);
    //         this.alis = huoqu1(li, this.Oul);

    //         console.log(this.alis)
    //             // for (var i = 0; i < this.alis.length; i++) {
    //             //     this.alis[i].index = i
    //             //     this.alis[i].classname = "";
    //             //     this.alis[i].onmouseover = function() {
    //             //         _this[index].classname = "active";


    //         //     }

    //         // }


    //     }
    // }
    // var cbb = new AutoPlay("rankingul1")
    var aul1 = document.querySelector(".rankingul1");

    var alis1 = aul1.getElementsByTagName("li");

    var aul2 = document.querySelector(".rankingul2");
    var alis2 = aul2.getElementsByTagName("li");
    var aul3 = document.querySelector(".rankingul3");
    var alis3 = aul3.getElementsByTagName("li");
    var aul4 = document.querySelector(".rankingul4");
    var alis4 = aul4.getElementsByTagName("li");
    // var AutoPlay = function(className) {
    //     this.init(className)
    // }
    // AutoPlay.prototype = {
    //     init: function(className) {
    //         othis = this;
    //         this.aul = document.getElementsByClassName(className)[0];
    //         console.log(this.aul)

    //         this.alis = this.aul.getElementsByTagName("li");
    //         console.log(this.alis)

    //         for (var i = 0; i < this.alis.length; i++) {


    //             this.alis[i].index = i

    //             this.alis[i].onmouseover = function() {
    //                 for (var i = 0; i < othis.alis.length; i++) {
    //                     othis.alis[i].className = "";
    //                 }
    //                 this.className = "active";






    //             }







    //         }

    //     }
    // }
    // var ran1 = new AutoPlay("rankingul1")
    // var ran2 = new AutoPlay("rankingul2")
    //     new AutoPlay("rankingul3")
    // new AutoPlay("rankingul4")





    for (var i = 0; i < alis1.length; i++) {


        alis1[i].index = i

        alis1[i].onmouseenter = function() {
            for (var i = 0; i < alis1.length; i++) {
                alis1[i].className = "";
            }
            this.className = "active";






        }







    }
    for (var i = 0; i < alis2.length; i++) {


        alis2[i].index = i

        alis2[i].onmouseenter = function() {
            for (var i = 0; i < alis2.length; i++) {
                alis2[i].className = "";
            }
            this.className = "active";






        }







    }
    for (var i = 0; i < alis3.length; i++) {


        alis3[i].index = i

        alis3[i].onmouseenter = function() {
            for (var i = 0; i < alis3.length; i++) {
                alis3[i].className = "";
            }
            this.className = "active";






        }







    }
    for (var i = 0; i < alis4.length; i++) {


        alis4[i].index = i

        alis4[i].onmouseenter = function() {
            for (var i = 0; i < alis4.length; i++) {
                alis4[i].className = "";
            }
            this.className = "active";






        }







    }








    var blis = $(".Bestsell-list li");

    console.log(blis)
    var buls = $(".Bestsell-ranking ul");
    console.log(buls)
    for (i = 0; i < blis.length; i++) {



        blis[i].onmouseover = function() {
            for (i = 0; i < blis.length; i++) {
                blis[i].className = "";
                buls[i].className = "";
                blis[i].index = i;

            }
            this.className = "Bestsell-active"
            buls[this.index].className = "active"
        }
    }
}