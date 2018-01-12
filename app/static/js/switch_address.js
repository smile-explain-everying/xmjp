$(function () {
    // 新增地址
    $('#address02').find('.add').on('click', function () {
        $('.add_address').css('display', 'block');
    })
    // 新建地址操作
    // 保存地址变成新地址
    $('.add_address').find('.prese').on('click', function () {
        $('.add_address').css('display', 'none');
    })
    // 取消
    $('.add_address').find('.cancle').on('click', function () {
        $('.add_address').css('display', 'none');
    })
    // 切换地址
    $('#address02').find('.switch').on('click', function () {
        $('.switch_address').css('display', 'block');
    })
    // 添加选中样式
    $('.switch_address ul').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    // 关闭切换地址弹窗
    $('.switch_address').find('.draw').on('click', function () {
        $('.switch_address').css('display', 'none')
    });


    // 没有地址保存新地址
    $('#distpicker').distpicker('reset', true);
    // 获取填写的内容
    var address_dir = [];
    // ["0省", "1市", "2县", "3详细地址", "4姓名", "5电话"]
    $('#address01').find('.prese').on('click', function () {
        $('#address01 #distpicker').find('select').each(function () {
            //获取联动地址
            var address01 = $(this).find('option:selected').val();
            address_dir.push(address01)
        })
        // 获取详细地址
        var address02 = $('#address01').find('.address_info').find('textarea').val();
        //获取姓名  手机号
        var name = $('#address01').find('.fn_name').find('.name').val();
        var phone = $('#address01').find('.fn_name').find('.phone').val();
        address_dir.push(address02, name, phone);
        
        console.log(address_dir)

        //  保存创建对象
        var html = "<div class='picker clearfix' id='address02'>"
            + "<ul class='address'>"
            + "<li class='clearfix'>"
            + "<span>姓名：</span>"
            + "<p>" + address_dir[4] + "</p>"
            + "</li>"
            + "<li class='clearfix'>"
            + "<span>联系方式：</span>"
            + "<p>" + address_dir[5] + "</p>"
            + "</li>"
            + "<li class='clearfix'>"
            + "<span>收货地址：</span>"
            + "<p>" + address_dir[0] + address_dir[1] + address_dir[2] + address_dir[3] + "</p>"
            + "</li>"
            + "</ul>"
            + "<div class='operation'><a href='javascript:;' class='add'>新建地址</a><a href='javascript:;' class='switch'>切换地址</a></div>"
            + "</div>";
        $(html); // 创建了一个jquery对象
        $('.choice_address').append(html);
        $('#address01').css('display','none');
    })

    // 取消清空表单
    $('#address01').find('.cancle').on('click', function () {
        $('#distpicker select').each(function () {
            $(this).find('option').removeAttr('selected');
        })
        $('.picker .address_info').find('textarea').val('');
        $('.picker .fn_name').find('.name').val('');
        $('.picker .fn_name').find('.phone').val('');
    })
})
