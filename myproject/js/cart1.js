window.onload = function() {
    // 1）实现商品的全选功能及数量和价格的计算
    var cartTable = document.getElementsByTagName('table')[0];
    var tr = cartTable.children[1].rows; //获取table下的tbody下的每一行
    var checkInputs = document.getElementsByClassName('input-checkbox');
    var checkAllInputs = document.getElementsByClassName('check-all');
    var checkOneInputs = document.getElementsByClassName('js-select-item');
    var selectedTotal = document.getElementById('selectedTotal');
    var priceTotal = document.getElementById('priceTotal');
    var singledelete = document.querySelectorAll(".js-delete-item");
    console.log(tr, checkInputs, checkAllInputs, selectedTotal, priceTotal, singledelete, selectedTotal, priceTotal)
    var abcd = tr[1].getElementsByTagName('input')[0];
    console.log(abcd)
    var ddd = tr[1].querySelector(".totalprice").innerHTML;
    console.log(ddd)
    var buttons=document.querySelector('.foot-container button');
    console.log(buttons)

    // for (var k = 0; k < tr.length; k++) {
    //     console.log(k)
    //         selected += parseInt(tr[i].getElementsByTagName('input')[1].value);
    //         price += parseFloat(tr[i].querySelector(".item-subtotal-price").innerHTML);


    // }

    // 2)点击已选商品实现商品预览浮层的功能

    // 点击已选商品时会显示出已选择商品的列表

    // 同时在getTotal()函数中增加新创建的div

    function getTotal() {
        var selected = 0;
        var price = 0;
        // var HTMLstr = '';
        for (var i = 1; i < tr.length; i++) {
            // console.log(i)
            // var hah = tr[i].getElementsByTagName('input')[0].checked;
            // console.log(hah)

            if (tr[i].getElementsByTagName('input')[0].checked) {
                console.log(123)
                selected += parseInt(tr[i].getElementsByTagName('input')[1].value);
                price += parseFloat(tr[i].querySelector(".totalprice").innerHTML); //cells属性为获得tr下面的td
            }

        }

        selectedTotal.innerHTML = selected;
        priceTotal.innerHTML = price.toFixed(2); //保留两位小数
        // selectedViewList.innerHTML = HTMLstr;
        // if (selected == 0) {
        //     foot.className = 'foot';
        // }
    }

    for (var i = 0; i < checkInputs.length; i++) {

        checkInputs[i].onclick = function() {
            // for (var k = 0, n = 0; k < checkOneInputs.length; k++) {
            //     checkOneInputs[k].checked && n++;
            //     if (n == checkOneInputs.length) {
            //         for (var c = 0; c < checkAllInputs.length; c++) {
            //             checkAllInputs[c].checked = true;
            //         }
            //     }
            // }
            if (this.className === 'input-checkbox js-batch-select check-all') { //如果点击的是全选按钮，则使所有按钮的状态和它相同
                for (var j = 0; j < checkInputs.length; j++) {
                    checkInputs[j].checked = this.checked;
                }
            } else {
                for (var k = 0, n = 0; k < checkOneInputs.length; k++) {
                    checkOneInputs[k].checked && n++;
                    if (n == checkOneInputs.length) {
                        for (var c = 0; c < checkAllInputs.length; c++) {
                            checkAllInputs[c].checked = true;
                        }
                    }
                }
            }
            if (this.checked == false) { //如果其中一个变为未选中状态，则使全选按钮取消选中
                for (var i = 0; i < checkAllInputs.length; i++) {
                    checkAllInputs[i].checked = false;
                }
            }
            for (var i = 0; i < checkInputs.length; i++) {
                if (checkInputs[i].checked==false) {
                    buttons.className="";

                }else{
                
                    buttons.className="buttons";
                }
            }
            getTotal();
        }
    }

    // selected.onclick = function() {
    //         if (foot.className == 'foot') {
    //             if (selectedTotal.innerHTML != 0) {
    //                 foot.className = 'foot show';
    //             }
    //         } else {
    //             foot.className = 'foot';
    //         }
    //     }
    // 3)商品列表中的取消选择与事件代理

    // 已选商品列表中没有appendChild的时候div和span都不存在，所以要使用事件代理。
    function getsingleTotal(trs) {


        var single = trs.querySelector(".count-number").value;
        var sinpri = parseFloat(trs.querySelector(".price1").innerHTML);
        console.log(single, sinpri)
        var subtotal = trs.querySelector('.totalprice');
        console.log(subtotal)
        subtotal.innerHTML = (single * sinpri).toFixed(2);

    }
    // selectedViewList.onclick = function(e) {
    //         var el = e.srcElement;
    //         if (el.className == 'del') {
    //             var index = el.getAttribute('index');
    //             var input = tr[index].getElementsByTagName('input')[0];
    //             input.checked = false;
    //             input.onclick();
    //         }
    //     }
    // 4）实现增减商品数量及小计价格的计算
    //增减商品数量事件代理
    for (var i = 0; i < tr.length; i++) {
        console.log(i)
        tr[i].onclick = function(e) {
                e = e || window.event;

                var el = e.target;
                var cls = el.className;
                console.log(cls);
                var input = this.getElementsByTagName('input')[1];
                var val = parseInt(input.value);
                console.log(val)
                var reduce = this.querySelector('.minus');

                switch (cls) {
                    case 'plus':
                        console.log(456)
                        input.value = val + 1;
                        // reduce.innerHTML = '-';
                        getsingleTotal(this);

                        break;
                    case 'minus disabled':
                        if (val > 1) {
                            input.value = val - 1;
                            getsingleTotal(this);
                        }
                }
                getTotal();
            }
            // tr[i].getElementsByTagName('input')[1].onkeyup = function() {
            //     var val = parseInt(this.value);
            //     var tr = this.parentNode.parentNode; //this指的是当前的input，其父节点的父节点就是当前的tr
            //     var reduce = tr.querySelector('.minus');
            //     if (isNaN(val) || val < 1) {
            //         val = 1;
            //     }
            //     this.value = val; //保证输入框中都是大于1的纯数字
            //     if (val <= 1) {
            //         reduce.innerHTML = '';
            //     } else {
            //         reduce.innerHTML = '-';
            //     }
            //     getsingleTotal(tr);
            //     getTotal();
            // }
    }
    // 5）实现删除商品功能

    // 学会用for循环删除数组中的一些数据时要回置下标 i 。

    //删除商品
    var dels = document.querySelector('.delete-batch')
    dels.onclick = function() {
        if (selectedTotal.innerHTML != '0') {
            var conf = confirm("确定要删除所选商品吗");
            if (conf) {
                for (var i = 1; i < tr.length; i++) {
                    var input = tr[i].getElementsByTagName('input')[0];
                    if (input.checked) {
                        tr[i].parentNode.removeChild(tr[i]);
                        i--; //因为删除数组中的一个后，后面的索引就会向前移，此时要让i也向前移一个，回置下标i
                    }
                }
                getTotal();
            }
        }
    }
    for (var i = 0; i < singledelete.length; i++) {

        singledelete[i].onclick = function() {
            var confir = confirm("确定要删除所选商品吗");
            if (confir) {
                this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
                i--;
                getTotal();
            }



        }
    }



}