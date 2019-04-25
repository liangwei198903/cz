//(function(){
//	/*****轮播广告***/
//	function task(){
//		var show=document.getElementsByClassName("show")[0];
//		console.log(show)
//		show.className="";
//		if(show.nextElementSibling!=null)
//			var next=show.nextElementSibling;
//		else
//			var next=show.parentNode.firstElementChild;
//		next.className="show";
//	}
//	var timer=setInterval(task,3000);
//	var div=document.getElementsByClassName("banner")[0];
//	div.onmouseover=function(){
//		clearTimeout(timer);
//		timer=null;
//	}
//	div.onmouseout=function(){
//		timer=setInterval(task,3000);
//	}
//})()
/***大轮播图********/
	var $divImg=$("div.img");
	var imgWIDTH=1000;
	var moved=0;
	function move(){
		moved++;
		$divImg.animate({
			left:-moved*imgWIDTH
		},500,function(){
			if(moved==$divImg.children().length-1){	
				$divImg.css("left",0);
				moved=0;
			}
			$("ul.circle").children(":eq("+moved+")").addClass("show").siblings().removeClass("show");
		})
	}
	var timer;
	function autoMove(){
		timer=setInterval(function(){
			move();
		},2000);
	};
	autoMove();
	/*****轮播图的左右按钮***/
	var $aR=$("a.right");
	var $aL=$("a.left")
	$aR.click(function(){
		if(!$divImg.is(":animated")){
			move();
		}
	});
	$aL.click(function(){
		if(!$divImg.is(":animated")){
			if(moved==0){
				moved=$divImg.children().length-1;
				$divImg.css("left",-moved*imgWIDTH);
			}
			moved--;
			$divImg.animate({
				left:-moved*imgWIDTH
			},500,function(){
			$("ul.circle").children(":eq("+moved+")").addClass("show").siblings().removeClass("show");
		})
		}
	})
	
	/**小圆点的点击效果**/
	var $ul=$("ul.circle");
	$ul.on("click","li",function(){
		var i=$(this).index();
		moved=i;
		$divImg.stop(true).animate({
			left:-moved*imgWIDTH
		},100,function(){
			if(moved==$divImg.children().length-1){	
				$divImg.css("left",0);
				moved=0;
			}
			$ul.children(":eq("+moved+")").addClass("show").siblings().removeClass("show");
		})
	})
	/*********鼠标移入移出效果****/
	var $divBan=$("div.banner");
	$divBan.mouseenter(function(){
		clearInterval(timer);
		timer=null;
	});
	$divBan.mouseleave(function(){
		autoMove();
	})
	/*****滚动时搜所栏固定*******/
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>150){
			$("div.search").addClass(" fixed");
		}else{
			$("div.search").removeClass(" fixed");
		}
	})
		/******楼层滚动*****/
		/*滚哪里哪里亮**/
		var $ulLift=$("div.nav>ul"),
			 $floors=$(".floor");
			 
		$(window).scroll(function(){
			var scrollTop=$(window).scrollTop();
			if(scrollTop>=100){
				$ulLift.show();
				$floors.each(function(i,f){
					var $f=$(f);
					var offsetTop=$f.offset().top;
					if(offsetTop<=scrollTop+innerHeight+200){
						//console.log(innerHeight)
						$ulLift.find(".item:eq("+i+")").addClass("hover").siblings().removeClass("hover");
					}
				})
			}else
				$ulLift.hide();
		});
		$ulLift.on("click","li",function(){
			var i=$(this).index();
			var offsetTop=$($floors[i]).offset().top;
			//console.log(offsettop);
			$("html,body").stop(true).animate({
				scrollTop: offsetTop-innerHeight-100
			},100)
		})
		//动态加载热门商品 div.ban
		$.ajax({
			type:"get",
			url:"data/index_product.php",
			dataType:"json",
			success:function(data){
				var html="";
				data.forEach(function(p,i){
					var {title,details,src,subtitle}=p;
						html+=`<div>
						<img src="${src}" alt="">
						<div class="desc">
							<span>${title}<i>${subtitle}</i></span>
							<p><a href="">${details}</a></p>
						</div>
					</div>`;
				})
			$("div.ban").html(html);
		}
	})
	//动态加载热门商品 div.hot//遮罩层
	$.ajax({
		type:"get",
		url:"data/index_product_hot.php",
		dataType:"json",
		success:function(product){
			var html="";
			product.forEach(function(p,i){
				var {src,title,details,price}=p;
				html+=`<div>
					<img src="${src}" alt="">
					<div class="half-mask">
						<h3>了解更多</h3>
						<p class="tit">${title}</p>
						<p class="detail">${details}</p>
						<p class="price">${price} <a href="#">加入购物车</a></p>
					</div>
				</div>`;
			})
				$("div.hot").html(html);
		}
	})
	/*动态加载主页轮播图**/
	$.ajax({
		type:"get",
		url:"data/index_lunbo.php",
		dataType:"json",
		success:function(data){
			var html="";
			for(var p of data){
				var {img}=p
				html+=`<img src="${img}" alt="">`;
			}
			var {img}=data[0];
			html+=`<img src="${img}" alt="">`;
			$("div.img").html(html);
			$("ul.circle").html("<li></li>".repeat(data.length)).
				children(":first").addClass("show");
		}
	})
	//楼层加载
	$.ajax({
			type:"get",
			dataType:"json",
			url:"data/getIndexproducts.php",
			success:function(data){
				var html="";
				data.forEach(function(elem,i){
					var {pid,title,price,pic,href,subtitle}=elem;
					if(i<1){
						html+=`<div style="width: 490px;">  
											<a href="${href}"><img src="${pic}" alt="" style="width:490px"></a> 
  								 </div>`;
					}else{
						html+=`<div> 
										<a href="${href}"><img src="${pic}" alt="" class="scale"></a>
										<div class="buy">
											<h3><i></i><i></i></h3>
											<p class="tit"><a href="${href}">${title}</a></p>
											<p class="detail">${subtitle}</p>
											<p class="price">${price} <a href="#">加入购物车</a></p>
										</div>	
								  </div>`;
					}
				})
				$("#gov1").html(html)
				$("#gov2").html(html)
				$("#gov3").html(html)
			}
	})