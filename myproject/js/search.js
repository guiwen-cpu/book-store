var oinput = document.querySelector(".search");
var oul = document.querySelector(".search-list");

oinput.oninput = function() {
  var val = this.value;
  //     if (val) {
  //         let os = document.createElement("script");

  //         // os.src = `https://www.baidu.com/sugrec?&prod=pc&wd=${val}&cb=cb`;
  //         os.src = `https://www.xhsd.com/api/item/mall/suggest?keyword=${val}&cb=cb&_=1566999884303`;
  //         os.type = "text/javascript"
  //         document.head.appendChild(os);
  //         os.onload = function() {
  //             document.head.removeChild(os);
  //         }
  //     }
  // }

  // function cb(data) {

  //     console.log(data)
  //     var arr = data.g;

  //     var str = '';
  //     var len = arr.length;
  //     if (arr) {
  //         for (var i = 0; i < len; i++) {
  //             str += `<li><a href="#">${arr[i].q}</a></li>`
  //         }
  //         oul.innerHTML = str;
  //         oul.style.display = "block";

  //     }

  /*  
    //简写形式，效果相同  
    $.getJSON("http://app.example.com/base/json.do?sid=1494&busiId=101&jsonpCallback=?",  
            function(data){  
                $("#showcontent").text("Result:"+data.result)  
    });  
    */

  $.ajax({
    type: "get",
    async: false,
    url: `https://www.baidu.com/sugrec?&prod=pc&wd=${val}`,
    dataType: "jsonp", //数据类型为jsonp
    jsonp: "cb", //服务端用于接收callback调用的function名的参数
    success: function(data) {
      // $("#showcontent").text("Result:"+data.result)
      var arr = data.g;

      console.log(data);

      var str = "";
      // var len = arr.length;
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          str += `<li><a href="#">${arr[i].q}</a></li>`;
        }
        oul.innerHTML = str;
        oul.style.display = "block";
      }
    },
    error: function() {
      alert("fail");
    }
  });
};

oinput.onblur = function() {
  oul.style.display = "none";
  console.log(123);
};
