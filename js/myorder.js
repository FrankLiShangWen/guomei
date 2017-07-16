$("#header").load("data/header_myorder.php")
$(".pay_choice>div").mouseenter(function(){
    $(this).children(":first").css("display","block");
});
$(".pay_choice>div").mouseleave(function(){
    setTimeout(function(){
        $(this).children(":first").css("display","none");

    }.bind(this),500)
});
$(".pay_choice>div").click(function(){
    $(this).children(":last").css("display","block");
    $(this).siblings().children(":last").css("display","none");

    var arr = $(this).siblings();
    $.each(arr,function(i,p){
        $(p).children(":last").css("display","none");
    });
    //付款方式
    console.log( $(this).attr("pay") );
    $.ajax({
        type:"GET",
        url:"data/12_pay_style.php",
        data:{uid:sessionStorage["gmUid"],pay:$(this).attr("pay")},
        success:function(data){
            console.log(data);
        }
    });


});
$(".btn_choise").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parent().siblings().children().removeClass("active");
});

$(".btn_register").click(function(e){
    e.preventDefault();
    var name = $("#name").val();
    var addr = $("#addr").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    $.ajax({
        type:"GET",
        url:"data/10_consignee_message.php",
        data:{
            consigneeId:sessionStorage["gmUid"],
            cname:name,
            addr:addr,
            phone:phone,
            email:email
        },
        success:function(data){
           if(data==='succ'){
              $(".model").css({"display":"none"});
               loadConsignee();

           }else{
              $(".err_message").html("请填写完整信息（带‘*’的地方是必填）");
           }
        },
        error:function(){
            console.log("err");
        }
    });
});
$(".cha").click(function(){
    $(".model").css({"display":"none"});
});
//收货信息
loadConsignee();
function loadConsignee(){
    $.ajax({
        type:"GET",
        url:"data/11_select_consignee.php",
        data:{uid:sessionStorage['gmUid']},
        success:function(data){
            //console.log(data);
            if(data.msg!=="err"){
                $(".order_name>span").html(data[0].cname);
                $(".consignee_addr").html(data[0].addr);
                $(".order_phone").html(data[0].phone);
                $(".receipt_name").html(data[0].cname);
                $(".model").css({"display":"none"});
            }

        },
        error:function (){
            console.log("err");
        }
    });
};
//加载购买的商品
$(function(){
    $.ajax({
        type:"GET",
        url:"data/4_car_select.php",
        data:{uid:sessionStorage["gmUid"]},
        success:function(data){
            var html = "";
            $.each(data,function(i,p){
                //console.log(p);
                html+=`
                    <div class="order_list">
                            <a href="#" class="order_list_img"><img width="80px" height="80px" src="${p.pic}" alt=""/></a>
                            <div class="pay_product">
                                <p class="order_list_name">${p.pname}</p>
                                <p class="order_list_price">
                                    <span>¥${p.price} </span>
                                    <span>x${p.count} </span>
                                    <span>有货 </span>
                                </p>
                                <p class="after_sale">
                                    <i></i>
                                    <span class="after_sale_seven">支持7天无理由退货</span>
                                </p>
                            </div>
                        </div>
                `
            })
            $(".dispatching_body_right").html(html);


        }

    });
});

//接收购物车页面传递的价格参数
var price=window.location .href; 
var aa=price.indexOf('='); 
price=price.substring(aa+1); 
$(".pay_money_price").html(price);

//跳转付款页面
$(".pay_btn").click(function(){
    location.href="pay.html?price="+price;
});

      