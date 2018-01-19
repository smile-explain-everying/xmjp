;(function($,WeChat,weibo){
	var WeChat = $(WeChat),
		weibo = $(weibo);
		$(WeChat).hover(function(){
			if(!$(weibo).is(":animated")){
				$(weibo).find('div').hide();
			}
			$(this).find('div').stop().slideDown(400);
			},function(){
				$(this).find('div').stop().slideUp(400);
		});
		$(weibo).hover(function(){
			if(!$(WeChat).is(":animated")){
				$(WeChat).find('div').hide();
			}
			$(this).find('div').stop().slideDown(400);
			},function(){
				$(this).find('div').stop().slideUp(400);
		});
})(jQuery,'.WeChat','.weibo');
;(function($,btop){
	var btop = $(btop);
	btop.on('click',function(e){ 
		e.preventDefault(e);
		$('html,body').animate({ scrollTop:0},800);
	});
})(jQuery,'.backtop'); 

// 计算数量部分js

;(function($,add,input_value,reduce,stock,choice_num,btn_status){
    var add = $(add),
        input_value = $(input_value),
        reduce = $(reduce),
        choice_num = $(choice_num),
        btn_status = $(btn_status);
        //stock = $(stock),
       var stock_num = input_value.data('stock');
    reduce.on('click',function(e){
   	    var num = $(input_value).val();
    	if(num>1){
			input_value.val(num-1);
		}
        choice_num.text(input_value.val())
    })

    add.on('click',function(e){
    	 var num = $(input_value).val();
         console.log(num)
    	if(num<stock_num){
    		var value= parseInt(num)+1;
    		input_value.val(value);
    	}
    	choice_num.text(input_value.val())
    });
})(jQuery,'.add','.calculation_input','.reduce','.stock','.choice_num','.btn_status');

/*弹出层*/
/*
    参数解释：
    title   标题
    url     请求的url
    id      需要操作的数据id
    w       弹出层宽度（缺省调默认值）
    h       弹出层高度（缺省调默认值）
*/
function layer_show(w,h,title,url){
    if (title == null || title == '') {
        title=false;
    };
    if (url == null || url == '') {
        url="404.html";
    };
    if (w == null || w == '') {
        w=800;
    };
    if (h == null || h == '') {
        h=($(window).height() - 50);
    };
    layer.open({
        type: 2,
        area: [w+'px', h +'px'],
        fix: false, //不固定
        maxmin: true,
        shade:0.4,
        title: title,
        content: url
    });
}

;(function($,ospanTop,ospanBottom){
    var ospanT = $(ospanTop),
        ospanB = $(ospanBottom);
    $(ospanT).on('click',function(event){
        event.preventDefault();
        alert('升序');
    });
    $(ospanB).on('click',function(event){
        event.preventDefault();
        alert('降序');
    });
})(jQuery,'.arrow-top','.arrow-bottom');

/*快速登录*/
;(function($,loginPop,mask){
    var pop = $(loginPop),
        mask = $(mask);
    $(document).click(function(){
       pop.hide();
       mask.remove();
    });
    pop.click(function(e){
        e.stopPropagation();
    });
})(jQuery,'.login-pop','.mask');

