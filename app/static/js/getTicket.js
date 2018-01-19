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


// 定时器调用	
   	;(function($,box){
	var box = $(box);
	box.find('.available_one').each(function(i){
		countdown($(this));
	});
})(jQuery,'.getticketList');
//定时器调用结束

//加载更多
		$(function () {  
     		$(".lodemore").click(function () {
     		var jsondata={	
     				"data":[
     				//ie时间格式  2018/1/15 09:20:53  个位小时前面加0 年月日加斜杠
     					{"scr": "../static/tempimages/ticketimg01.jpg","manjian":"满500减499券", "dateTo":"2018-01-02至2018-01-03", "where": "员工专区",  "time": "2018/1/15 09:20:53"},
     					{"scr": "../static/tempimages/area6.jpg","manjian":"满500减4919券", "dateTo":"2018-011-02至2018-01-03", "where": "员工专区1",  "time": "2018/1/17 11:02:00"}
     				]
				}
     		insertDiv(jsondata.data)
       });  
   }); 
       function insertDiv(data){   
           var information = $(".getticketList");  
           for (var i = 0; i < data.length; i++) {  
              var html ="<li class='available_one' data-timer='"+data[i].time+"'>"+
						"<p class='left'><img src='"+data[i].scr+"'/></p>"+
						"<p class='middle'>"+
							"<span class='manjian'>"+data[i].manjian+"</span><br />"+
							"<span class='dataTo'>"+data[i].dateTo+"</span><br />"+
							"<span class='where'>"+data[i].where+"</span>"+
						"</p>"+
						"<p class='right shop-coupon_col-r'>"+
							"<span>离结束还有</span>"+
							"<span class='time rtime'>"+
								'05:41:28'
							+"</span><br />"+
							"<span class='getnow'>立即领取</span>"+
						"</p>"+
					"</li>"
               information.append(html); 
         //     再次调用这个方法
    (function($,box){
		var box = $(box);
		box.find('.available_one').each(function(i){
			countdown($(this));
		});
	})(jQuery,'.getticketList');
	           }  
	  $('.getnow').click(function(){
		$(this).text('已领取').css('background-color','#cccccc').parent().parent().addClass('received')
		})         
       }  
       
       
       
 //加载更多
 
  $('.getnow').click(function(){
		$(this).text('已领取').css('background-color','#cccccc').parent().parent().addClass('received')
		})  
 
// 		ajax 加载更多代码 
//		$(function () {  
//   		$(".lodemore").click(function () {
//   			insertDiv()   //正式获取到后 删除这行代码
//         var page = parseInt($("#page").val());  
//         $(this).html("加载中...");  
//         status=$(this).attr("data-status");  
//         if(status==1) {  
//             status = $(this).attr("data-status", "0");  
//             $.ajax({  
//                 type: "post",  
//                 url: "xxx",  
//                 data: "page=" + page,  
//                 dataType: "json",  
//                 success: function (data) {  
//                     data = data.data;  
//                     /*数据不够10条隐藏按钮*/  
//                     if (data.length < 10) {  
//                         $(this).hide()  
//                     } else {  
//                         $("#page").val(page + 1);//记录页码  
//                     }  
//                     insertDiv(data);  
//                 }  
//             });  
//         }  
//
//     });  
// });  
//获取参数个数  给i赋值
//     function insertDiv(){   
//         var information = $(".getticketList");  
//         var html = '';  
//         for (var i = 0; i < 4; i++) {  
//            html=$("#first").clone()
//             information.append(html); 
//             // html +="<li>"+data[i].title+"</li>"  
//         }  
//         $(".lodemore").attr("data-status","1");  
//     }  
//     