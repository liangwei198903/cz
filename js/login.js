var form=document.forms[0];
var txtInput=form.phone;
var pwdInput=form.upwd;
txtInput.onfocus=pwdInput.onclick=function(){
	this.parentNode
      .nextElementSibling.style.opacity=1;
	span.innerHTML="正在登录中..."
}
function vali(txt,reg){
  var s=txt.nextElementSibling;
  if(reg.test(txt.value)){
    s.style.backgroundImage="url(../JQproject_cz/imgs/ok.png)";
		s.parentNode.nextElementSibling.style.opacity=0;
		return true;
  }else{
     s.style.backgroundImage="url(../JQproject_cz/imgs/err.png)";
//		 s.parentNode.nextElementSibling.innerHTML="输入有误,请检查后重新输入!";
		 s.parentNode.nextElementSibling.style.color="#F50B0B";
		return false;
	}
}
var span=document.getElementById("s1");
txtInput.onblur=function(){
	vali(this,/^1[3-8]\d{9}$/);
}
pwdInput.onblur=function(){
	vali(this,/^\d{6}$/);
}
//验证用户名和密码
	$("#btn1").click(function(e){
		var phone=$("#phone").val();
		var upwd=$("#upwd").val();
//		console.log(phone);
//		console.log(upwd);
			e.preventDefault();
		$.ajax({
			type:"post",
			url:"data/signin.php",
			data:{phone:phone,upwd:upwd},
			
			success:function(msg){
				alert(msg);
				if(msg=="登录成功!"){
					var i=location.search.indexOf("=");
					location.href=location.search.slice(i+1);
				}else{
					location.reload();
				}
			},
			error:function(){alert("网络故障，请检查")}
		})
	})