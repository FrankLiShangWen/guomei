$(function(){
			$("#header").load("data/header_cart.php",function(){
				if(!sessionStorage["gmName"]){
					$("#header #user").html("请登录");
				}else{
					$("#user").html("欢迎回来:"+sessionStorage["gmName"]);
					$("#denglu").html(sessionStorage["gmName"]);
					$(".denglu>span>a").html(sessionStorage["gmName"]);
				}
			});
			$("#footer").load("data/footer.php");
	//var gmUid=null;
	//var gmUname=null;
	
})
$(function(){
	$.ajax({
		type:"GET",
		url:'data/4_car_select.php',
		data:{uid:sessionStorage["gmUid"]},
		success:function(data){
			var html = "";
			var price = 0;
			$.each(data,function(i,p){
				price+=p.count*p.price;
				html+=`
					 <div class="shopping_car_product">
						 <div class="shopping_car_body">
							 <div><input type="checkbox" checked/></div>
							 <div><img src="${p.pic}" width="80" height="80px"></div>
							 <div>
								 <a href="#" class="lf">${p.pname}</a>
								 <a href="#">选购增值服务</a>
							 </div>
							 <div>
								 <span>${p.price}</span><br>
								 <a href="#">促销优惠</a>
							 </div>
							 <div class='countBtn'>
								
								<button class="${p.productId}">-</button>
								 <input class="inputcount" value="${p.count}">
								<button class="${p.productId}">+</button>
							 </div>
							 <div>
								 <span class="price">${p.count*p.price}</span>
							 </div>
							 <div >
								 <a class="deleteBtn" href="${p.did}">删除</a>
								 <a href="#">移入收藏夹</a>
							 </div>
						 </div>
					 </div>
				`;
				$(".product").html(html);
				$(".settle u").html(price);
				//点击按钮实现修改产品数量
				$('.countBtn').on('click','button',function(){
					var m = this.className ;
					console.log(m);
					if( $(this).html()=='+' ){
						$(this).prev().val( parseInt($(this).prev().val())+1 ) ;
						update(m,'add');//点击按钮,增加商品						

						 $(this).parent().next().children().html(
							 parseInt($(this).prev().val())*$(this).parent().prev().children("span").html()
						) ;

						 //修改总价格
						payPrice();

					}else if( $(this).html()=='-' ){
						update(m,'delete');//点击按钮,减少商品

						$(this).next().val( parseInt($(this).next().val())-1 ) ;
						if( $(this).next().val()==0 ){
							$(this).parent().parent().remove();//页面删除节点树

						}
						$(this).parent().next().children().html(
							 parseInt($(this).next().val())*$(this).parent().prev().children("span").html()
						) ;
						 //修改总价格
						payPrice();
					}
				});
			});
			//点击删除按钮删除购物车中的商品
			$('.deleteBtn').click(function(e){
				e.preventDefault();
				var num = $(this).attr("href");
				deleteProduct(num);//从数据库删除数据
				$(this).parent().parent().parent().remove();//页面删除节点树
			});
		},
		error:function(){
			console.log("响应消息失败");
		}
	});
});

//点击按钮实现修改产品数量
function update(m,add_delete){
	$.ajax({
		type:'GET',
		url:'data/7_updata.php',
		data:{uid:sessionStorage["gmUid"],productId:m,add_delete:add_delete},
		success:function(){
		}
	});
}
//删除购物车中的商品
function deleteProduct(did){
	$.ajax({
		type:"GET",
		url:'data/8_delete_car.php',
		data:{did:did},
		success:function(){
			var html = $(".product_count").html()-1;
			$(".product_count").html(html);

		}		
	});
}

//点击结算去个人中心
$(".pay_btn").click(function(){
	location.href="myOrder.html?price="+$(".settle u").html();
});

//修改总价格
function payPrice(){
	var price = 0;
	for(var i=0;i<$(".price").length;i++){						
		price+=parseInt($(".price")[i].innerHTML);
	}
	$(".settle u").html( price );
};
//购物车显示显示商品的数量
cart_product_count();
function cart_product_count(){
	$.ajax({
		type:"GET",
		url:"data/13_cart_product_conut.php",
		data:{"uid":sessionStorage["gmUid"]},
		success:function(data){
			$(".product_count").html(data);

		}
	});
};




