$(function () {

    $('.content_right #distpicker').distpicker('reset', true);
    // 设置默认样式(选中样式)
    $('.address_list .address_item').each(function(){
        if($(this).is('.active')){
            $(this).find('label').addClass('select')
        }
    })
    // 获取填写的内容
    var address_dir = [];
    // ["0省", "1市", "2县", "3详细地址", "4姓名", "5电话"]
    $('.content_right').find('.picker').find('.prese').on('click', function () {
        $('.content_right #distpicker').find('select').each(function () {
            //获取联动地址
            var address01 = $(this).find('option:selected').val();
            address_dir.push(address01)
        })
        // 获取详细地址
        var address02 = $('.content_right .picker').find('.address_info').find('textarea').val();
        //获取姓名  手机号
        var name = $('.content_right .picker').find('.fn_name').find('.name').val();
        var phone = $('.content_right .picker ').find('.fn_name').find('.phone').val();
        address_dir.push(address02, name, phone);


        //  保存创建对象
        var html = "<li class='address_item clearfix'>"
            + "<ul class='info'>"
            + "<li class='clearfix'>"
            + "<span class='title'>姓名：</span>"
            + "<span class='list_name'>" + address_dir[4] + "</span>"
            + "</li>"
            + "<li class='clearfix'>"
            + "<span class='title'>联系方式：</span>"
            + "<span class='list_phone'>" + address_dir[5] + "</span>"
            + "</li>"
            + "<li class='clearfix'>"
            + "<span class='title'>收货地址：</span>"
            + "<span class='list_address'>" + address_dir[0] + address_dir[1] + address_dir[2] + address_dir[3] + "</span>"
            + "</li>"
            + "</ul>"
            + "<div class='operation'><p class='default'><span class='choice'><label><input type='radio' name='silent'></label></span><span>设为默认</span></p><p class='btn'><a href='javascript:;' class='edit'>修改信息</a><a href='javascript:;' class='delete'>删除</a></p></div>"
            + "<i></i>"
            + "</li>";
        $(html); // 创建了一个jquery对象
        if($('.content_right .picker').find('input').is(':checked')){
            $('.address_list').append(html);
            $('.address_list').find('.address_item:last-child').addClass('active').siblings('li').removeClass('active');
            $('.address_list').find('.address_item:last-child').find('label').addClass('select').parents('li').siblings('li').find('label').removeClass('select');
        }else{
            $('.address_list').append(html);
        }
    })

    // 取消清空表单
    $('.content_right').find('.picker').find('.cancle').on('click', function () {
        $('#distpicker select').each(function () {
            $(this).find('option').removeAttr('selected');
        })
        $('.picker .address_info').find('textarea').val('');
        $('.picker .fn_name').find('.name').val('');
        $('.picker .fn_name').find('.phone').val('');
    })

    // 删除地址

    $('.address_list').on('click', '.address_item .delete', function () {
        $(this).parents('.address_item').remove();
    })

    // 修改地址

    $('.address_list').on('click', '.address_item .edit', function () {
        $('.edit_address').css('display', 'block');
        var name = $(this).parents('.address_item').find('.list_name').text();
        var phone = $(this).parents('.address_item').find('.list_phone').text();
        var address = $(this).parents('.address_item').find('.list_address').text();
        $('.edit_address').find('.name').val(name);
        $('.edit_address').find('.phone').val(phone);
        // var address01 = address.match(/^(\S*)[省市]/)[0];
        // var address02 = address.match(/省(\S*)市|区/)[0];
        // var address03 = address.match(/^[市区](\S*)/);
        var num = address.indexOf('市/省') + 1; 
        var address01 = address.substring(0,num);
        console.log(address01)

    })
    
    // 设置默认样式
    $('.address_list').on('click', '.address_item input', function () {
       $(this).parents('.address_item').addClass('active').siblings().removeClass('active').find('label').removeClass('select');
       $(this).parent('label').addClass('select');
    })

    // 修改地址取消

    $('.edit_address').find('.cancle').on('click', function () {
        $('.edit_address').css('display', 'none');
    })

    


})