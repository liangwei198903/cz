////全选和取消全选
//$itemChbs=$("div.item-chb>input");
//$("div.chb>input").click(function(){
//	$itemChbs.prop("checked",this.checked);
//	totalPrice();
//})
//$itemChbs.click(function(){
//	var ck=true;
//	$itemChbs.each(function(i,elem){
//		if(!elem.checked){
//			ck=false;
//		}
//		$("div.chb>input").prop("checked",ck);
//	})
//	totalPrice();
//})
////加减
//$("div.cart-content-body").on("click","span.add,span.reduce",function(){
//	var $sum=$("div.item-sum").html();
//	if($(this).html()=="+"){
//		var n=$(this).prev().children().val();
//		var $sum=$(this).parent().next().html();
////		console.log($sum)
//		n++;
//		$(this).prev().children().val(n);
//		$sum=parseFloat(n*$(this).parent().prev().html()).toFixed(2);
//		$(this).parent().next().html($sum)
//	}else{
//		var n=$(this).next().children().val();
//		var $sum=$(this).parent().next().html();
//		if(n>1)
//		n--;
//		$(this).next().children().val(n);
//		$sum=parseFloat(n*$(this).parent().prev().html()).toFixed(2);
//		$(this).parent().next().html($sum)
//	}
//	totalPrice();
//})
////删除
//$("div.cart-content-body").on("click","div.item-ctrl>a",function(e){
//	e.preventDefault();
//	if(confirm("确定要删除吗？")){
//		$(this).parent().parent().remove();
//	}
//	totalPrice();
//})
//已勾选的商品影响最后一行的总价和总件数
//function totalPrice(){
//	$itemChecked=$(".item-chb>input:checked");//被选中的chb
////	console.log($itemChecked)
//	var total=0;
//	var counts=0;
//	for(var i=0;i<$itemChecked.length;i++){
//		total+=parseFloat($($("div.item-sum")[i]).html());	
//		counts+=parseInt($($itemChecked[i]).parent().parent()
//										.children("div.item-num").children(".n").children().val());
//	}
//	$("div.total>span").html(total.toFixed(2));
//	$("div.select>span").html(counts)
//}
	
/*	function loadPage(){
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok==0){
					location.href="login.html?back="+location.href;
				}else{
					$.ajax({
						type:"get",
						url:"data/getCart.php",
						dataType:"json",
						success:function(items){
							//console.log(items)
							var html="";
							//console.log(items)
							for(var item of items){
								var {pic,price,count,href,title,is_checked}=item;
								//console.log(is_checked)
								var total=parseFloat(price*count).toFixed(2)
								html+=`<div class="cart-item">
												<div class="item-chb"><input type="checkbox">选择</div>
												<div class="item-product">
													<i><img src="${pic}" alt=""></i>
													<span><a href="${href}">${title}</a></span>
												</div>
												<div class="item-price">${price}</div>
												<div class="item-num">
													<span class="reduce">-</span>
													<span class="n">
														<input type="text" value="${count}">
													</span>
													<span class="add">+</span>
												</div>
												<div class="item-sum">${total}</div>
												<div class="item-ctrl"><a href="">删除</a></div>
											</div>`;
							}
							$(".cart-content-body").html(html);
							//全选和取消全选
							$itemChbs=$("div.item-chb>input");
							$("div.chb>input").click(function(){
								$itemChbs.prop("checked",this.checked);
								totalPrice();
							})
							$itemChbs.click(function(){
								var ck=true;
								$itemChbs.each(function(i,elem){
									if(!elem.checked){
										ck=false;
									}
									$("div.chb>input").prop("checked",ck);
								})
								totalPrice();
							})
							//加减
							$("div.cart-content-body").on("click","span.add,span.reduce",function(){
								var $sum=$("div.item-sum").html();
								if($(this).html()=="+"){
									var n=$(this).prev().children().val();
									var $sum=$(this).parent().next().html();
							//		console.log($sum)
									n++;
									$(this).prev().children().val(n);
									$sum=parseFloat(n*$(this).parent().prev().html()).toFixed(2);
									$(this).parent().next().html($sum)
								}else{
									var n=$(this).next().children().val();
									var $sum=$(this).parent().next().html();
									if(n>1)
									n--;
									$(this).next().children().val(n);
									$sum=parseFloat(n*$(this).parent().prev().html()).toFixed(2);
									$(this).parent().next().html($sum)
								}
								totalPrice();
							})
							//删除
							$("div.cart-content-body").on("click","div.item-ctrl>a",function(e){
								e.preventDefault();
								if(confirm("确定要删除吗？")){
									$(this).parent().parent().remove();
								}
								totalPrice();
							})
				//已勾选的商品影响最后一行的总价和总件数
								function totalPrice(){
									$itemChecked=$(".item-chb>input:checked");//被选中的chb
											console.log($itemChecked)//输出一个input
									var totalAll=0;
									var counts=0;
									for(var i=0;i<$itemChecked.length;i++){
									//	console.log(1)
										totalAll+=parseFloat($($("div.item-sum")[i]).html());	
										console.log($($("div.item-sum")[i]).html())
										counts+=parseInt($($itemChecked[i]).parent().parent()
																	.children("div.item-num").children(".n").children().val());
								}
								$("div.total>span").html(totalAll.toFixed(2));
								$("div.select>span").html(counts)
							}
	
						}
					})
				}
			}
		})
	}
loadPage()*/


/*********购物车*******/
	//刷新购物车函数
	function loadPage(){
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok==0){
					location.href="login.html?back="+location.href;
				}else{
					$.ajax({
						type:"get",
						url:"data/getCart.php",
						dataType:"json",
						success:function(items){
								var html="";
								var sum=0;
								var total=0;
								var $inputs=$(".check");//单选框
								var $chbAll=$(".chb>input");//全选框
							for(var item of items){
								var {pic,price,count,href,title,is_checked,iid}=item;
									if(is_checked==1){
										 sum+=parseInt(count);
											total+=price*count;
									}

//									if($("input[class='check']:checked").length!==$inputs.length){
//										$(".chb").html(`<input type="checkbox">全选`)
//									}else{
//										$(".chb").html(`<input type="checkbox" checked >全选`)
//									}

								html+=`<div class="cart-item" data-iid="${iid}">`;
									if(is_checked==1){
										html+=`<div class="item-chb"><input type="checkbox" checked class="check">选择</div>`
									}else{
										html+=`<div class="item-chb"><input type="checkbox" class="check">选择</div>`
									}
								html+=`<div class="item-product">
													<i><img src="${pic}" alt=""></i>
													<span><a href="${href}">${title}</a></span>
												</div>
												<div class="item-price">${price}</div>
												<div class="item-num">
													<span class="reduce">-</span>
													<span class="n">
														<input type="text" value="${count}">
													</span>
													<span class="add">+</span>
												</div>
												<div class="item-sum">${(price*count).toFixed(2)}</div>
												<div class="item-ctrl"><a href="#">删除</a></div>
											</div>`;
							}
							$(".cart-content-body").html(html);
							$(".select>span").html(sum);
							$(".total>span").html(total.toFixed(2));
							

							var $inputs=$(".check");//单选框
						  var $chbAll=$(".chb>input");//全选框
							var isAllChecked=true;
							$inputs.each(function(i,input){
								if(!input.checked){
									isAllChecked=false;
								}
							})
								$chbAll.prop('checked',isAllChecked)
						}
					})
				}
			}
		})
	}
	loadPage()
	//加减操作数据库的count 
	$("div.cart-content-body").on("click","span.add,span.reduce",function(){
		var $span=$(this);
		var iid=$span.parent().parent().attr("data-iid"),
			  count=parseInt($span.siblings(".n").children().val());
		//console.log(iid+"*"+count)
		if($span.html()=="+")
			count++;
		else
			count--;
		$.ajax({
			type:"get",
			url:"data/updateCart.php",
			data:{iid, count},
			success:function(){
				loadPage();
			}
		})
	})
	//删除
	$("div.cart-content-body").on("click","div.item-ctrl>a",function(e){
		e.preventDefault();
		$a=$(this);
		if(confirm("是否删除?")){
			var iid=$a.parent().parent().attr("data-iid");
			$.ajax({
				type:"get",
				url:"data/deleteCart.php",
				data:{iid},
				success:function(){
					loadPage();
				}
			})
		}
	})
	//单选功能
	$("div.cart-content-body").on("click",".item-chb>input",function(){//单选
		var $input=$(this);
		var iid=$input.parent().parent().attr("data-iid");
		if($input.is(':checked')){
			var is_checked=1;
		}else{
			var	is_checked=0;
		 }


		 //console.log(is_checked) 选中输出1 取消选中输出2
		$.ajax({
			type:"get",
			url:"data/checkOne.php",
			data:{iid, is_checked},
			success:function(){
				loadPage();
			}
		})
	});
		//全选功能
	$(".chb input").click(function(){
	var is_checked=($(this).prop("checked"))?1:0;
		$.ajax({
			type:"get",
			data:{is_checked},
			url:"data/checkAll.php",
			success:function(){
				loadPage();
			}
		})
	})