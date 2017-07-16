$(".order_detail_look").click(function(){
    $(".user_order_detail").toggleClass("active");
    $(".order_detail_look>i").toggleClass("bg_active");
});
$(".bank_choise li").mouseenter(function(){
    $(this).append(`
         <div class="choise_car">
            <span>储存卡<input type="radio"/></span>
            <span>信用卡<input type="radio"/></span>
         </div>
    `);
    $(this).children().addClass("border_active");
});
$(".bank_choise li").mouseleave(function(){
    $(this).children()[1].remove();
    $(this).children().removeClass("border_active");
});

//$(".choise_car>span").mouseenter(function(){
//    console.log( $(this).children() );
//    $(this).children().prop({'checked':true});
//})
//$(".choise_car>span").mouseleave(function(){
//    console.log( $(this).children() );
//    $(this).children().prop({'checked':false});
//})

$(".choise_car").on("mouseenter","span",function(){
    console.log( $(this).children() );
    $(this).children().prop({'checked':true});
})
$(".choise_car").on("mouseleave","span",function(){
    console.log( $(this).children() );
    $(this).children().prop({'checked':false});
});
//点击切换影藏和现实银行支付选择
$(".bank_toggle").click(function () {
    $("div.bank_choise").toggleClass("active");

});


//接收页面传递的价格参数
var price=window.location .href; 
var aa=price.indexOf('='); 
price=price.substring(aa+1); 
$(".pay_price").html(price);


