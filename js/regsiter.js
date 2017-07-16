//判断用户名
$("#name").blur(function(){
    var n =$("#name").val();
   $.ajax({
       type:"GET",
       url:"data/9_register.php",
       data:{uname:n},
       success:function(data){
           if(n===""){
               $("#name").next().html("用户名不能为空哦！").addClass("error");
           }else{
              $("#name").next().removeClass();
               if(data.isReister=='succ'){
                   $("#name").next().html("此用户名可以使用").addClass("succ");
               }else{
                   $("#name").next().html("该用户名已经被注册！").addClass("error");
               }
           }
       },
       error:function(){
           console.log("响应失败");
       }
   });
});

//判断初次密码
$("#pwdd").blur(function(){
    var p1 =$("#pwdd").val();
    var p2 =$("#pwd").val();
    var reg = /[A-Za-z0-9]{6,12}/;// 这里是 正则表达式
    $("#pwdd").next().removeClass();

    if(p1===""){
        $("#pwdd").next().html("密码不能为空！").addClass("error");
    }else{
        if (reg.test(p1) != true) {
            $("#pwdd").next().html("密码必须6-12位字母或者数字组成！").addClass("error");
        }else{
            $("#pwdd").next().html("该密码可以使用").addClass("succ");
            $("#pwd").attr("disabled",false);
        }
    }
});
//二次密码验证
$("#pwd").blur(function(){
    var p1 =$("#pwdd").val();
    var p2 =$("#pwd").val();
    $("#pwd").next().removeClass();
    if(p1===p2){
        if(p1)
        $("#pwd").next().html("该密码可以使用").addClass("succ");
    }else{
        $("#pwd").next().html("两次密码不一致！").addClass("error");
    }
});
//提交注册

    $(".btn").click(function(){
        var n =$("#name").val();
        var p1 =$("#pwdd").val();
        var p2 =$("#pwd").val();
        n===""&& $("#name").next().html("用户名不能为空！").addClass("error");
        p1===""&& $("#pwdd").next().html("密码不能为空！").addClass("error");
        p2===""&& $("#pwd").next().html("密码不能为空！").addClass("error");
        if( $("#name").next().html()=="此用户名可以使用"&&
            $("#pwdd").next().html()=="该密码可以使用"&&
            $("#pwd").next().html()=="该密码可以使用"){
            $.ajax({
                type:"GET",
                url:"data/9_1_register.php",
                data:{uname:n,upwd:p1},
                success:function(){
					var num = 6;
					var timer = setInterval(function(){
						num--;
						if(num<1){
							location.href="guomei.html";
							clearInterval(timer);
						}
						$("#form_reg").html(`<p>恭喜你，注册成功！</p> <h2>${num}秒钟跳转首页...</h2>`);
						$("#form_reg>p").addClass("register_succ");
					},1000);
                }
            });
        }

    });
	

