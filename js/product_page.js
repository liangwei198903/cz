$("#productslist").on("click",".plus,.minus",function(){
	if($(this).html()=="+"){
		var n=$(this).prev().val();
		n++;
		$(this).prev().val(n);
	}else{
		var n=$(this).next().val();
		if(n>1){
			n--;
		}
		$(this).next().val(n);
	}
})

/**全部商品分页*/
function products(pno=1){
	$.ajax({
		type:"get",
		url:"data/fenye.php",
		dataType:"json",
		data:{pno},
		success:function(data){
			//console.log(data)
			var {products,pageCount,pageNo}=data;
			var html="";
				for(var p of products){
					var {title,subtitle,price,pic,href,pid}=p;
					html+=`<li>
							<a href="${href}"><img src="${pic}" alt=""></a>
							<p class="tit"><a href="${href}">${title}</a></p>
							<p class="subtit">${subtitle}</p>
							<p class="price">¥:${parseFloat(price).toFixed(2)}</p>
							<p class="input">
								<span class="plus">-</span>
								<input type="text" class="num" value="1">
								<span class="minus">+</span>
								<a href="#" data-pid="${pid}" class="addCart">加入购物车</a>
							</p>
						</li>`;
				};
				$("#productslist").html(html);
				var html=
						`<a href="javascript:;" class="previous">上一页</a>`;
						for(var i=1;i<=pageCount;i++){
							if(i==pageNo)
								html+=`<a href="javascript:;" class="active">${i}</a>`
							else
								html+=`<a href="javascript:;">${i}</a>`
						}
						html+=`<a href="javascript:;" class="next">下一页</a>`
					$("div.pages").html(html); 
						var aPrev=document.querySelector(".previous")
							var aNext=document.querySelector(".next")
					if(pageNo==1) aPrev.className+=" disabled";
					if(pageNo==pageCount){
						aNext.className+=" disabled";
					}
		}
	})
}

//搜索分页
function loadPage(pno=1){
	var kw=decodeURI(location.search.split("=")[1]);
	$.ajax({//关键字搜索商品分页
		type:"get",
		url:"data/getProductBykw.php",
		dataType:"json",
		data:"pno="+pno+"&kw="+kw,
		success:function(data){
			var {products,pageCount,pageNo}=data;
		//	console.log(data)
			var html="";
			for(var p of products){
				var {title,subtitle,price,pic,href,pid}=p;
				html+=`<li>
						<a href="${href}"><img src="${pic}" alt=""></a>
						<p class="tit"><a href="${href}">${title}</a></p>
						<p class="subtit">${subtitle}</p>
						<p class="price">¥:${parseFloat(price).toFixed(2)}</p>
						<p class="input">
							<span class="plus">-</span>
							<input type="text" class="num" value="1">
							<span class="minus">+</span>
							<a href="#" data-pid="${pid}" class="addCart">加入购物车</a>
						</p>
					</li>`;
			};
			$("#productslist").html(html);
			var html=
					`<a href="javascript:;" class="previous">上一页</a>`;
					for(var i=1;i<=pageCount;i++){
						if(i==pageNo)
							html+=`<a href="javascript:;" class="active">${i}</a>`
						else
							html+=`<a href="javascript:;">${i}</a>`
					}
					html+=`<a href="javascript:;" class="next">下一页</a>`
				$("div.pages").html(html); 
					var aPrev=document.querySelector(".previous")
						var aNext=document.querySelector(".next")
				if(pageNo==1) aPrev.className+=" disabled";
				if(pageNo==pageCount){
					aNext.className+=" disabled";
				}
		}
	})
}

/**分页搜索**/
function searchByKw(pno=1){
	if(location.search==""){
		products();//加载全部商品分页
		var $div=$("div.pages");
		$div.on("click","a",function(){
			var $this=$(this);
			var nexta=parseInt($this.siblings(".active").html());
			var pno=0;
			if($this.is(".next")&&(!$this.is(".disabled"))){//点在下一页 并没有禁用
				pno=nexta+1	
			}else if($this.is(".previous")&&(!$this.is(".disabled"))){//点在上一页 并没有禁用
					pno=nexta-1	
				}else{//点在1234上和被禁用的上一页 下一页上
						if(!$this.is(".disabled")){//点在1234上
							nexta=parseInt($this.html());
							pno=nexta
						}else{//点在被禁用的上一页 下一页上
							return;
						}
				}
			products(pno);
		})
	}else{
		loadPage()
		var $div=$("div.pages");
		$div.on("click","a",function(){
			var $this=$(this);
			var nexta=parseInt($this.siblings(".active").html());
			var pno=0;
			if($this.is(".next")&&(!$this.is(".disabled"))){//点在下一页 并没有禁用
				pno=nexta+1	
			}else if($this.is(".previous")&&(!$this.is(".disabled"))){//点在上一页 并没有禁用
					pno=nexta-1	
				}else{//点在1234上和被禁用的上一页 下一页上
						if(!$this.is(".disabled")){//点在1234上
							nexta=parseInt($this.html());
							pno=nexta
						}else{//点在被禁用的上一页 下一页上
							return;
						}
				}
			loadPage(pno);
		})
	}
}
searchByKw()


//购物车栏目中的加减
	$("div.cart-content").on("click",".add,.reduce",function(){
		var iid=$(this).parent().parent().attr("data-iid");
		if($(this).html()=="+"){
			var count=$(this).prev().val();
			count++;
			$(this).prev().val(count)
		}else{
			var count=$(this).next().val();
			if(count>=0){
				count--;
			}
			if(count==0){
				$(this).parent().parent().remove();
			}
			$(this).next().val(count);
		}
			$.ajax({
						type:"get",
						url:"data/updateCart.php",
						data:{iid, count},
						success:function(){
							loadCart();
						}
					})
	})

	//搜索
	$("div.search img").click(function(){
		var kw=decodeURI($("div.search input").val());
		if(kw.trim!=""){
			location.href="product_page.html?kw="+kw
		}
	})
	$("div.search").keyup(function(e){
		if(e.keyCode==13){
			$("div.search img").click();
		}
	})

	////点击分页栏加入购物车***/
	$("#productslist").on("click",".addCart",function(e){
		e.preventDefault();
		var $a=$(this);
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				console.log(data)
				if(data.ok==1){
					var pid=$a.data("pid"),
						count=$a.parent().children(":text").val();
					//console.log(count)
				$.ajax({
					type:"post",
					url:"data/addCart.php",
					data:{pid,count},
					success:function(){
						loadCart();
					},
					error:function(){alert("网络故障，请检查！")}
				})
				}
				else{
					location.href="login.html?back="+location.href;
				}
      }	
		})
  })

	function loadCart(){
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok==1){
					$.ajax({
						type:"get",
						url:"data/getCart.php",
						dataType:"json",
						success:function(data){
							var html="";
							var total=0;
							var sum=0;
							for(var item of data){
								var {title, iid, count, price}=item;
								total=price*count;
								 sum+=total;
								html+=`<div class="cart-item" data-iid="${iid}">
						<span class="cart-title">${title}</span>
						<div>
							<span class="add">-</span>
							<input type="text" value="${count}">
							<span class="reduce">+</span>
							<span class="price">${parseFloat(total).toFixed(2)}</span>
						</div>
					</div>`;
							}
							$(".cart-content").html(html)
							$(".total span").html(parseFloat(sum).toFixed(2))
						}
					})
				}
			}
	 })
  }
	loadCart()


//搜索帮助
var $txtSearch=$("#txtSearch");
var $shelper=$("#shelper");
$txtSearch.keyup(function(e){
			if(e.keyCode!=13){
				if(e.keyCode==40){
					if(!$shelper.is(":has(.focus)")){
						$shelper.children(":first").addClass("focus");
					}else{
						var $next=
							$shelper.children(".focus").removeClass("focus")
								.next();
						if($next.length>0)
							$next.addClass("focus");
						else
							$shelper.children(":first").addClass("focus");
					}
				}else if(e.keyCode==38){
					if(!$shelper.is(":has(.focus)")){
						$shelper.children(":first").addClass("focus");
					}else{
						var $prev=
							$shelper.children(".focus").removeClass("focus")
								.prev();
						if($prev.length>0)
							$prev.addClass("focus");
						else
							$shelper.children(":last").addClass("focus");
					}
				}else{
				if($txtSearch.val().trim()!==""){
					$shelper.show();
					$.ajax({
						type:"get",
						url:"data/shelper.php",
						data:{kw:$txtSearch.val()},
						dataType:"json",
						success:function(data){
							//console.log(data)
							if(data.length>0){
								var html="";
								for(var item of data){
									var {title}=item;
									html+=`<li>${title}</li>`;
								}
								$shelper.html(html)
							}else{
								$shelper.html(`<li>未找到</li>`)	
								}
						}
					})
				}else{
					$shelper.hide();
					}
				}
			}
		}).blur(function(){
			$shelper.hide();
		}).focus(function(){
			$txtSearch.keyup();
		})