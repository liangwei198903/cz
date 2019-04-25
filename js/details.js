//加载页面 发送ajax  获取到 大中小图SELECT * FROM `cz_pics`  
//                          商品pid 商品的title subtitle price  SELECT * FROM `cz_products`
//从地址栏获取pid  http://127.0.0.1/chuizi/project_chuizi_jq/detail.html?pid=9
if(location.search.indexOf("pid")!=-1){
		var pid=location.search.split("=")[1];
}
$.ajax({
	type:"get",
	data:{pid},
	url:"data/getDetails.php",
	dataType:"json",
	success:function(output){
	//	console.log(output.product);
		var {title,subtitle,price}=output.product;
		//console.log(title)
		var html=`<h1>${title}</h1> 
		<h3>${subtitle}<i>¥:${price}</i></h3>`;
			$("div.title").html(html);//加载右边的文字部分

		var html2="";
		var pic=output.pics;
		//console.log(pic)//输出一个数组
		//$("div.detail-img").html(`<a href="#"><img src="${md}" alt=""></a> `)
		for(var i=0;i<pic.length;i++){
			var {sm,md,lg}=pic[i];
			html2+=`<a href="#"><img src="${sm}" class="mimg" 
				data-md="${md}" data-lg="${lg}"></a>`;
		}
		var mdImg=document.getElementById("mdImg");
		var lgImg=document.getElementById("lg");
		//console.log(mdImg)
		//console.log(pic[0].lg)  //imgs/pj_05_lg_1.png
		mdImg.src=pic[0].md;
		lgImg.style.backgroundImage="url("+pic[0].lg+")";  //  "url(../"+pic[0].lg+")";
		$("div.left-img h1").html(html2);

		/**************小图的轮播******/
			var spanLeft=document.querySelector("span.toLeft");
			var spanRight=document.querySelector("span.toRight");
			var h1=document.querySelector("div.left-img>h1");
			var imgs=document.querySelectorAll("h1.hh img");
			console.log(imgs.length);
			if(imgs.length<=3){
				console.log(1)
				spanRight.className+=" disabled";
				spanLeft.className+=" disabled";
			}else{
				console.log(2)
				var moved=0;
				spanRight.onclick=function(){
					if(this.className.indexOf("disabled")==-1){
						moved++;
						h1.style.left=-moved*100+"px";
						spanLeft.className="toLeft";
						if(imgs.length-moved===3){//当图片的个数-点击次数=显示3个
							spanRight.className+=" disabled";
						}
					}	
				}
				spanLeft.onclick=function(){
			
					if(this.className.indexOf("disabled")==-1){
						moved--;
						h1.style.left=-moved*100+"px";
							spanRight.className="toRight";
						if(moved==0){
							spanLeft.className+=" disabled";
						}
					}
				}
		}
	}
})


var mmask=document.getElementById("mmask");
var lgimg=document.getElementById("lg");
var mask=document.getElementById("mask");
mmask.onmouseover=function(){
	lgimg.style.display="block";
	mask.style.display="block";
}
mmask.onmouseout=function(){
	lgimg.style.display="none";
	mask.style.display="none";
}
var maskWidth=100;
var mmaskWidth=300;
var mmaskHeight=400;
mmask.onmousemove=function(e){
	var left=e.offsetX-maskWidth/2;
	var top=e.offsetY-maskWidth/2;
	if(left<0){
				left=0;
			}else if(left>mmaskWidth-maskWidth){
				left=mmaskWidth-maskWidth;
			}else{
				left=left;
			}
			if(top<0){
				top=0;
			}else if(top>mmaskHeight-maskWidth){
				top=mmaskHeight-maskWidth;
			}else{
				top=top;
			}
	mask.style.top=top+"px";
	mask.style.left=left+"px";
	lgimg.style.backgroundPosition=-2*left+"px " + -2*top+"px";
}
/*********小中大图的连接效果*********/
var div=document.querySelector(".left-img");
var mImg=document.querySelector(".detail-img img");
div.onmouseover=function(e){
	e.preventDefault();
	var tar=e.target;
	if(tar.nodeName=="IMG"){
		var {md,lg}=tar.dataset;
		//console.log({md,lg});
		mImg.src=md;
		lgimg.style.backgroundImage="url("+lg+")";
	}
}
/**************input加减****************/
var Plist=document.querySelector("div.detail-intr>div.count>p");
	Plist.onclick=function(e){
		var tar=e.target;
		if(/minus|add/i.test(tar.className)){
				var txt=tar.parentNode.children[1];
				var n=txt.value;
				if(tar.className=="add"){
					n++;
				}else if(n>1){
					n--;
				}
				txt.value=n;
			}
	}
	
//	var spanLeft=document.querySelector("span.toLeft");
//	var spanRight=document.querySelector("span.toRight");
//	var h1=document.querySelector("div.left-img>h1");
//	var imgs=document.querySelectorAll("h1.hh imgs");
//	console.log(imgs);
//	if(imgs.length<3){
//		console.log(1)
//		spanRight.className+=" disabled";
//		spanLeft.className+=" disabled";
//	}else{
//		console.log(2)
//		var moved=0;
//		spanRight.onclick=function(){
//			if(this.className.indexOf("disabled")==-1){
//				moved++;
//				h1.style.left=-moved*100+"px";
//				spanLeft.className="toLeft";
//				if(imgs.length-moved===3){//当图片的个数-点击次数=显示3个
//					spanRight.className+=" disabled";
//				}
//			}	
//		}
//		spanLeft.onclick=function(){
//	
//			if(this.className.indexOf("disabled")==-1){
//				moved--;
//				h1.style.left=-moved*100+"px";
//					spanRight.className="toRight";
//				if(moved==0){
//					spanLeft.className+=" disabled";
//				}
//			}
//		}
//}