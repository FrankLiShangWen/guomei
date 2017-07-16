//进入购物车结算
$(".shopping_car>span").click(function(){
    if(sessionStorage['gmUid']!=undefined){
        location.href = "shopping_car.html";
    }else{
        location.href = "login.html";
    }
});


$(".shouji li").mouseenter(function(){
    $(this).css("opacity",.5);
});
$(".shouji li").mouseleave(function(){
    $(this).css("opacity",1);
});
$("#tangchuang_left div:first-child a").mouseenter(function(){
    $(this).css('background','#E3101E');
    $(this).css('text-decoration','none');
});
$("#tangchuang_left div:first-child a").mouseleave(function(){
    $(this).css('background','#F67070');
})

$(".ad_left ul li").mouseenter(function(){
	var html=`
            <div id="tangchuang_left">
                <div>
                    <a href="#">潮3C&gt</a>
                    <a href="#">手机&gt</a>
                    <a href="#">手机配件&gt</a>
                    <a href="#">数码&gt</a>
                    <a href="#">以旧换新&gt</a>
                    <a href="#">手机充值&gt</a>
                    <a href="#">美团卡&gt</a>
                    <a href="#">增值服务&gt</a>
                </div>

                <div>
                    <b><a href="#">手机通讯</a></b>
                    <a href="#">手机</a>
                    <a href="#">对讲机</a>
                </div>
                <div>
                    <b><a href="#">运营商</a></b>
                    <a href="#">中国移动</a>
                    <a href="#">中国电信</a>
                    <a href="#">3G上网卡</a>
                </div>
                <div>
                    <b><a href="#">手机配件</a></b>
                    <a href="#">移动电源</a>
                    <a href="#">存储卡/读卡器</a>
                    <a href="#">蓝牙耳机</a>
                    <a href="#">有线耳机</a>
                    <a href="#">iphone配件</a>
                    <a href="#">保护套</a>
                    <a href="#">贴膜</a>
                    <a href="#">手机电池</a>
                    <a href="#">智能手环/手表</a>
                    <a href="#">车载配件</a>
                    <a href="#">其他配件</a>
                </div>
                <div>
                    <b><a href="#">摄影影像</a></b>
                    <a href="#">数码相机</a>
                    <a href="#">单反相机</a>
                    <a href="#">单电/微单相机</a>
                    <a href="#">摄像机</a>
                    <a href="#">拍立得</a>
                </div>
                <div>
                    <b><a href="#">时尚数码</a></b>
                    <a href="#"> MID(移动互联网设备)</a>
                    <a href="#">MP3/MP4/配件</a>
                    <a href="#">音箱/扩音器</a>
                    <a href="#">电子教育</a>
                    <a href="#">电子书/电子乐器</a>
                    <a href="#">耳机/耳麦</a>
                    <a href="#">高清播放器</a>
                    <a href="#">录音笔收/录音机</a>
                    <a href="#">数码相框</a>
                    <a href="#">智能穿戴设备</a>
                </div>
                <div>
                    <b><a href="#">摄照配件</a></b>
                    <a href="#">存储卡</a>
                    <a href="#">单反镜头</a>
                    <a href="#">单反配件</a>
                    <a href="#">电池/充电器</a>
                    <a href="#">摄照</a>
                    <a href="#">包贴膜/清洁用品</a>
                    <a href="#">三脚架/云台</a>
                    <a href="#">滤镜</a>
                </div>
                <br/>
                <div>
                    <b><a href="#">充话费</a></b>
                    <a href="#">移动/联通/电信/极信</a>
                </div>
                <br/>
                <div>
                    <b><a href="#">充流量 </a></b>
                    <a href="#">移动/联通/电信</a>
                </div>
        </div> `;
    $("#tangchuang").html(html);
});

$(".ad_left ul li").mouseleave(function(){
	 $("#tangchuang").html("");
});

$.ajax({
	type:'GET',
	url:'data/6_index_img.php',
	success:function(data){
		var sj = "";
		var shihui_sub1 = "";
		var shihui_sub2 = "";
		var shihui_sub3_1 = "";
		var shihui_sub3_2 = "";
		var finance = "";
		var jiadian = "";
		var phone_right = "";
		var hot_product = "";
		var shaidan1 = "";
		var shaidan2 = "";
		var binner = "";

		$.each(data.sj,function(i,p){
			sj+=`<li><a href="product_list.html"><img src="${p.pic}" alt=""/></a></li>`;
		});
		$('.shouji ul').html(sj);

		$.each(data.shihui_sub1,function(i,p){
			shihui_sub1+=`<a href="product_list.html"><img src="${p.pic}" alt=""/></a>`;
		});
		$('.sub_1>div:last-child').html(shihui_sub1);

		$.each(data.shihui_sub2,function(i,p){
			shihui_sub2+=`<a href="product_list.html"><img src="${p.pic}" alt=""/></a>`;
		});
		$('.sub_2>div:last-child').html(shihui_sub2);

		$.each(data.shihui_sub3_1,function(i,p){
			shihui_sub3_1+=`<a href="product_list.html"><img src="${p.pic}" alt=""/></a>`;
		});
		$('.sub_3>div:nth-child(2)').html(shihui_sub3_1);

		$.each(data.shihui_sub3_2,function(i,p){
			shihui_sub3_2+=`<a href="product_list.html"><img src="${p.pic}" alt=""/></a>`;
		});
		$('.sub_3>div:last-child').html(shihui_sub3_2);

		$.each(data.finance,function(i,p){
			finance+=`<a href="product_list.html"><img src="${p.pic}" width="194px"></a>`;
		});
		$('.licai').html(finance);

		$.each(data.jiadian,function(i,p){
			jiadian+=`
				<a href="product_list.html">
					<dl>
						<dd><img src="${p.pic}"></dd>
						<dt><b>${p.name}</b>
							 <p>¥${p.price}</p></dt>
					</dl>
				</a>
			`;
		});
		$('.jiadian').html(jiadian);

		$.each(data.phone_right,function(i,p){
			phone_right+=`<a href="product_list.html"><img src="${p.pic}"></a>`;
		});
		$('.phone_right_img').html(phone_right);

		$.each(data.hot_product,function(i,p){
			hot_product+=`
				<li><a href="product_list.html">
                        <img src="${p.pic}" alt=""/>
                        <p>&yen${p.price}</p>
                        <p>${p.pname}</p>
                    </a></li>
			`;
		});
		$('.hot ul').html(hot_product);

		
		shaidan1=`
				<a href="product_list.html"><img src="${data.shaidan[0].pic}"></a>
                    <p>${data.shaidan[0].tel}</p>
                    <a href="#">"${data.shaidan[0].content}</a>
		`;
		
		$('.shaidan_buttom>div:first-child').html(shaidan1);
		
		shaidan2=`
				<a href="product_list.html"><img src="${data.shaidan[1].pic}"></a>
                    <p>${data.shaidan[1].tel}</p>
                    <a href="#">"${data.shaidan[1].content}</a>
		`;
		
		$('.shaidan_buttom>div:last-child').html(shaidan2);
	}
});

$(".carousel-inner>div:first-child").addClass("active");

//点击按钮,跳转登录页面
$('#header').on("click",'.submit',function(e){
	e.preventDefault();
	location.href="login.html";
});

//点击进入注册页面
$("#header").on("click",".registerQuit",function(e){
	e.preventDefault();
	if(sessionStorage["gmName"]){
        $(".mm").css("display","block");
        $(".model>button").click(function(){
            if(this.innerHTML==="是"){
                sessionStorage.removeItem("gmName");
                sessionStorage.removeItem("gmUid");
                location.href = "guomei.html";
            }else if(this.innerHTML==="否"){
                $(".mm").css("display","none");
            }
        });
	}else{
		location.href="register.html";
	}
});
if(sessionStorage["gmName"]!="undefined"&&sessionStorage["gmName"]){
    $(".smt_happle").text("欢迎回来:"+sessionStorage["gmName"]);
    $(".smt").text(sessionStorage["gmName"]);
    $(".registerQuit").text("退出");
}else{
    $(".smt_happle").text("请登录");
    $(".smt").text("请登录");
    $(".registerQuit").text("注册");
}
$("#btnRegister").click(function(){
	location.href = "register.html";
});

