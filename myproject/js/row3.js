var dangzhengarr = [{
        src: "./img/党政精选/2.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/党政精选/5.png",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/党政精选/3.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/党政精选/6.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/党政精选/1.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/党政精选/4.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    }
]
var specialprice = [{
        src: "./img/限时特价/1.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/限时特价/2.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/限时特价/3.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/限时特价/4.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/限时特价/5.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    },
    {
        src: "./img/限时特价/6.jpg",
        name: "  第五批全国干部学习培训教材（套装共14册）",
        price: "490.60"
    }
]
var obj1 = {
    dangzhengarr: dangzhengarr
}
var html1 = template("row3", obj1)
console.log(html1)
var aul1 = $(".dangzheng-ul1")[0]
console.log(aul1)
aul1.innerHTML = html1;
var obj2 = {
    specialprice: specialprice
}
var html2 = template("row3", obj2)
var aul2 = $(".special-price-ul1")[0]
aul2.innerHTML = html2;