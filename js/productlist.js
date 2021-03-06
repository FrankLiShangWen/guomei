//进入购物车结算
$("#header").on("click",".shopping_car>span",function(){
	if(sessionStorage['gmUid']!=undefined){
		location.href = "shopping_car.html";
	}else{
		location.href = "login.html";
	}
});
//$(".shopping_car>span").click(function(){
//	if(sessionStorage['gmUid']!=undefined){
//		location.href = "shopping_car.html";
//	}else{
//		location.href = "login.html";
//	}
//});


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
	
	//进入购物车结算

	$('.shopping_car span').click(function(){
		if(sessionStorage["gmUid"]){
			location.href = "shopping_car.html";
		}else{
			$(".mm").css("display","block");
			$(".model>button").click(function(){
				if(this.innerHTML==="是"){
					location.href = "login.html";
				}else if(this.innerHTML==="否"){
					$(".mm").css("display","none");
				}
			});
		}
	});
});

//动态加载商品,分页显示
function page(pageNum){
	$.ajax({
		type:"GET",
		url:"data/2_page_select.php",
		data:{'pageNum':pageNum},
		success:function(list){
			var html = "";
			$.each(list.data,function(i,p){
				html +=`
					<li>
						<a href="#"><img src="${p.pic}" alt="" /></a>
						<h3>&yen;${p.price} <span></span></h3>
						<p>${p.pname}</p>
						<p><a href="#">${p.conduct}</a></p>
						<div class="dizhi">
							<a href="#">${p.num}</a>
							<span>${p.place}</span>
						</div>
						<div class="add_car">
							<a href="${p.pid}" class="car">加入购物车</a>
							<a href="#">收藏</a>
						</div>
						<div class="ziying">国美自营</div>
					</li>
				`;
				$("#product ul").html(html);

				var dd = "";
				if(list.pageNum==1){
					dd+= ` <a href="#">${list.pageNum+2}</a>`;
					dd+= ` <a href="#">${list.pageNum+1}</a>`;
					dd+= ` <a href="#" class="active">${list.pageNum}</a>`;
				}else if(list.pageNum==2){
					dd+= ` <a href="#">${list.pageNum+2}</a>`;
					dd+= ` <a href="#">${list.pageNum+1}</a>`;
					dd+= ` <a href="#" class="active">${list.pageNum}</a>`;
					dd+= ` <a href="#">${list.pageNum-1}</a>`;
				}else if(list.pageNum==3){
					dd+= ` <a href="#">${list.pageNum+2}</a>`;
					dd+= ` <a href="#">${list.pageNum+1}</a>`;
					dd+= ` <a href="#" class="active">${list.pageNum}</a>`;
					dd+= ` <a href="#">${list.pageNum-1}</a>`;
					dd+= ` <a href="#">${list.pageNum-2}</a>`;
				}else if(list.pageNum==4){
					dd+= ` <a href="#">${list.pageNum+1}</a>`;
					dd+= ` <a href="#" class="active">${list.pageNum}</a>`;
					dd+= ` <a href="#">${list.pageNum-1}</a>`;
					dd+= ` <a href="#">${list.pageNum-2}</a>`;
				}else if(list.pageNum==5){
					dd+= ` <a href="#" class="active">${list.pageNum}</a>`;
					dd+= ` <a href="#">${list.pageNum-1}</a>`;
					dd+= ` <a href="#">${list.pageNum-2}</a>`;
				}else {
					dd="";
				}
				$("#page").html(dd);
			});
		},
		error:function(){
			console.log("err");
		}
	});
}
page(1);
$("#page").on('click','a',function(e){
	e.preventDefault();
	var pageNum=$(this).html();
	page(pageNum);
});

//商品加入购物车以及动画效果
$(function() { 
		var offset = $("#end").offset();
		//console.log(offset);


	$("#product").on("click","a.car",function(event){
		event.preventDefault();
		if(sessionStorage["gmUid"]){
			var pid =$(this).attr("href");
			$.ajax({   //点击“加入购物车”，实现商品添加
				type:"GET",
				url:"data/5_add_product.php",
				data:{uid:sessionStorage["gmUid"],pid:pid},
				success: function (list) {
					cart_product_count();
				},
				error:function(){
					alert("添加购物车失败");
				}
			});

			//加入购物车动画效果
			var addcar = $(this);
			var img = addcar.parent().parent().find('img').attr('src');
			var flyer = $('<img class="u-flyer" src="'+img+'">');
			flyer.fly({
				start: {
					left: event.pageX,
					top: event.pageY
				},
				end: {
					left: offset.left+10,
					top: offset.top+10,
					width: 0,
					height: 0
				},
				onEnd: function(){
					$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
					addcar.css("cursor","default").removeClass('orange').unbind('click');
					this.destory();
				}
			});


		}else{
			$(".mm").css("display","block");
			$(".model>button").click(function(){
				if(this.innerHTML==="是"){
					location.href = "login.html";
				}else if(this.innerHTML==="否"){
					$(".mm").css("display","none");
				}
			});
		}


	}) 

});

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
}
