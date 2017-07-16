//登录
$("#btnLogin").click(function () {
	var v = $("#form").serialize();//表单序列化
	var uname = $("#uname").val();
	var upwd = $("#upwd").val();
	$("#uname").css("border-color","#ddd");
	$("#upwd").css("border-color","#ddd");
	if(uname===""){
		$(".prompt").html("请输入您的用户名");
		$("#uname").css("border-color","#f00");
	}else if(upwd===""){
		$(".prompt").html("请输入您的密码")
		$("#upwd").css("border-color","#f00");

	}
	$.ajax({
		type:"GET",
		url:"data/3_product_select.php",
		data:v,
		success:function(list){
			console.log("开始处理响应数据");
			sessionStorage["gmUid"]=list.uid;
			sessionStorage["gmName"]=list.uname;

			if(list.code==1){
				location.href="guomei.html";
				
			}else if(list.code==2){
				$(".prompt").text(list.msg).addClass("prompt_activ");
			}
		}

	});

});
//注册
$("#btnRegister").click(function(){
	location.href="register.html";
});