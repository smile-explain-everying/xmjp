//全选/不选  
function Select() {
	$('.checkItems').each(function(i) {
		$('.checkItems').eq(i).click(function() {
			if(this.checked) {
				$('.content_right').eq(i).find('input[name="items"]').prop("checked", true);
			} else {
				$('.content_right').eq(i).find('input[name="items"]').prop("checked", false);
			}
		})
	})
}
Select();

//删除消息
$('.del').each(function(i) {
	$('.del').eq(i).click(function() {
		$items = $(this).parent().find('input[name="items"]');
		$items.each(function(n) {
			if($items.eq(n).is(':checked')) {
				$items.eq(n).parent().remove();
			}
		})
		news_num();
		news_nums();
	})
})

//控制全选与单个消息的关系
function Select_num() {
	$('.checkItems').each(function(i) {
		$items = $('.checkItems').eq(i).parents('.content_right').find('input[name="items"]');
		$items.each(function(n) {
			$(this).click(function() {
				if($(this).is(':checked')) {
					$it = $(this).parents('.content_right').find('input[name="items"]');
					var len = ($(this).parents('.content_right').find('input[name="items"]').length);
					var num = 0;
					$it.each(function() {
						if($(this).is(':checked')) {
							num++;
						}
					});
					if(num == len) {
						$('.checkItems').eq(i).prop("checked", true);
					}
				} else {
					$('.checkItems').eq(i).prop("checked", false);
				}
			})
		})

	})
}
Select_num();

//消息展开
function messageOpen() {
	var message_open = document.getElementsByClassName('message_open');
	for(var i = 0; i < message_open.length; i++) {
		message_open[i].onclick = function() {
			if(this.style.whiteSpace == 'normal') {
				this.style.whiteSpace = 'nowrap';
				this.href = "https://www.baidu.com"
			} else {
				this.style.whiteSpace = 'normal';
				this.href = "javascript:void(0);"
				//消息展开后的数目 判断条件
				$(this).parents('.message_list').addClass('message_list_s');
				news_nums();
			}
		}
	}
}
messageOpen();

//tab切换
function tab() {
	$('.content_right').eq(0).show(200)
	$('.content_right_box_tab li').eq(0).css('color', '#000');
	$('.content_right_box_tab li').click(function() {
		var index = $(this).index();
		$(this).css('color', '#000').siblings('li').css('color', '#9c9c9c')
		$('.content_right').eq(index).show(200).siblings('.content_right').hide();
	})
}
tab();
//消息数量
function news_num() {
	content_right = $('.content_right');
	content_right.each(function(i) {
		$message_num = content_right.eq(i).find('.message_list').length
		$message_num_s = content_right.eq(i).find('.message_list_s')
		$('.content_right_box_tab ul li span').eq(i).text($message_num);
	})
}
news_num();

//消息展开后的数目
function news_nums() {
	content_right = $('.content_right')
	content_right.each(function(i) {
		$message_num = content_right.eq(i).find('.message_list').length;
		$message_num_s = content_right.eq(i).find('.message_list_s').length;
		$message_nums = $message_num - $message_num_s
		$('.content_right_box_tab ul li span').eq(i).text($message_nums);
	})
}