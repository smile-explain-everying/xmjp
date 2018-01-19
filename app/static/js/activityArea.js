
function countdown (t){  
    var element= t;
    if(element){   
        var endTime = new Date(element.data('timer'));
        var ts = endTime- new Date();  
        if(ts>0){   
            var hh = parseInt(ts / 1000 / 60 / 60, 10);  
            var mm = parseInt(ts / 1000 / 60 % 60, 10);  
            var ss = parseInt(ts / 1000 % 60, 10);  
            hh = hh<10?("0" + hh):hh;   
            mm = mm<10?("0" + mm):mm;   
            ss = ss<10?("0" + ss):ss;   
            element.find('.shop-coupon_col-r .rtime').html(hh + ':'+ mm+':' + ss);
            setTimeout(function(){countdown(t);},1000);  
        }else{ 
            element.addClass('received');
            element.find('.shop-coupon_col-r').html('<strong class="rtime">已结束</strong>');
        }  
    }  
} 

;(function($,oli){
	var oli = $(oli);
		omask = '';
	oli.hover(function(){
		//判断有没有.received class 如果有 什么也不做
		// 如果没有就说明是可以领取状态
		if ($(this).hasClass('received')) {
		} else{
			omask = '<a class="omask" href="javascript:;">点击领取</a>';
		$(this).append(omask);
		}
		//因为可以领取状态 才有.omask a标签 这时点击 判断领取
		$('.omask').click(function(){
		$(this).parent().addClass('received').find('.shop-coupon_col-r').html('<strong class="already">已领取</strong>')
		})
	},function(){
		$('.omask').remove();
	});
	
})(jQuery,'.shop-coupon li');

;(function($,box){
	var box = $(box);
	box.find('.available_one').each(function(i){
		countdown($(this));
	});
})(jQuery,'.shop-coupon');


	
