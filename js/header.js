/****引入头部****/
$("#header").load("header.html",function(){
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/header.css";
		document.head.appendChild(link);

		/*******登录session*****/
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok==0){//登录失败
					$("#login").show().prev().hide();
				}else{//登录成功
					var {uname}=data;
					$("#login").hide().next().show();
								$("#uname").html(uname);
				}
			}
		})
		$("#dlu").click(function(e){
			e.preventDefault();
			location.href="login.html?back="+location.href;
		})
		/**注销功能**/
		$("#siginout").click(function(e){
			e.preventDefault();
			$.ajax({
				type:"get",
				url:"data/signout.php",
				success:function(){
					location.reload(true);
				}
			})
		})


})




