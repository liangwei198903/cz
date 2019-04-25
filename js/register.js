	function makeId(){
	var text="";
	var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i=0;i<6;i++){
		text+=possible.charAt(Math.floor(Math.random()*possible.length));
	}
	yz.innerHTML=text;
}
go.onclick=function(){
		makeId();
}
	var telInput=document.querySelector("div.tel>input");
	var yzmInput=document.querySelector("div.yzm>input");
	var pwdInput=document.querySelector("div.pwd>input");
	var npwdInput=document.querySelector("div.npwd>input");
	var yz=document.getElementById("yz")
	pwdInput.onfocus=npwdInput.onfocus=yzmInput.onfocus=telInput.onfocus=function(){
		this.parentNode.nextElementSibling.style.opacity=1;
	}

	function vali(txt,reg){
  var s=txt.nextElementSibling;
  if(reg.test(txt.value)){
    s.style.backgroundImage="url(../project_chuizi+js/imgs/ok.png)";
		s.parentNode.nextElementSibling.style.opacity=0;
		return true;
  }else{
     s.style.backgroundImage="url(../project_chuizi+js/imgs/err.png)";
		 s.parentNode.nextElementSibling.innerHTML="输入有误,请检查后重新输入!";
		 s.parentNode.nextElementSibling.style.color="#F50B0B";
		return false;
	}
}
telInput.onblur=function(){
	vali(this,/^1[3-8]\d{9}$/);
}
yzmInput.onblur=function(){
	var s=this.nextElementSibling;
	if(this.value.toUpperCase()==yz.innerHTML.toUpperCase()){
		s.style.backgroundImage="url(../project_chuizi+js/imgs/ok.png)";
		s.parentNode.nextElementSibling.style.opacity=0;
	}else{
			s.style.backgroundImage="url(../project_chuizi+js/imgs/err.png)";
		 s.parentNode.nextElementSibling.innerHTML="输入有误,请检查后重新输入!";
		 s.parentNode.nextElementSibling.style.color="#F50B0B";
	}
}
pwdInput.onblur=function(){
	vali(this,/^\d{6}$/);
}
npwdInput.onblur=function(){
	var s=this.nextElementSibling;
	if(this.value==pwdInput.value){
		s.style.backgroundImage="url(../project_chuizi+js/imgs/ok.png)";
		s.parentNode.nextElementSibling.style.opacity=0;
	}else{
			s.style.backgroundImage="url(../project_chuizi+js/imgs/err.png)";
		 s.parentNode.nextElementSibling.innerHTML="输入有误,请检查后重新输入!";
		 s.parentNode.nextElementSibling.style.color="#F50B0B";
	}
}