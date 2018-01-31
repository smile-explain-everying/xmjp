$(function () {
    ////////////////////////////////////新增地址操作///////////////////////////////////////
    // 新增地址
    $('.choice_address').on('click', '.have_address .add', function () {
        $('.add_address').css('display', 'block');
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
        var html = "<div class='picker clearfix have_address'>"
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
        $('#address01').css('display', 'none');
    })

    // 取消清空表单
    $('#address01').find('.cancle').on('click', function () {
        $('#distpicker select').each(function () {
            $(this).find('option').removeAttr('selected');
        })
        $('.picker .address_info').find('textarea').val('');
        $('.picker .fn_name').find('.name').val('');
        $('.picker .fn_name').find('.phone').val('');
    });


    // 保存地址变成新地址
    $('.add_address').find('.prese').on('click', function () {
        $('.add_address').css('display', 'none');
    });
    // 取消
    $('.add_address').find('.cancle').on('click', function () {
        $('.add_address').css('display', 'none');
    });
    ////////////////////////////////////切换地址操作///////////////////////////////////////
    // 切换地址
    $('.choice_address').on('click', '.have_address .switch', function () {
        $('.switch_address').css('display', 'block');
    });
    // 添加选中样式
    $('.switch_address ul').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var switch_name = $(this).find('.name').find('.contain').text();
        var switch_phone = $(this).find('.phone').find('.contain').text();
        var switch_address = $(this).find('.address').find('.contain').text();

        console.log(switch_name, switch_phone, switch_address)
    });
    // 关闭切换地址弹窗
    $('.switch_address').find('.draw').on('click', function () {
        $('.switch_address').css('display', 'none');
    });
    //////////////////////////////////////选择优惠券////////////////////////////////////////
    $('.coupons').find('.choice_coupons').on('click', function () {
        $('.choice_coupon').css('display', 'block');
    });
    // 取消优惠券使用
    $('.coupons').find('.cancel_coupons').on('click', function () {
        $('.settlement').find('.style_coupons').empty();
        $('.settlement').find('.count_coupon').text(0);

        //商品总价
        var count_price = parseInt($('.settlement').find('.count_price').text());
        //运费
        var count_send = parseInt($('.settlement').find('.count_send').text());

        var count_money = count_price + count_send - 0;
        $('.settlement').find('.paid').find('.count_money').text(count_money);
    });
    //添加选中样式
    $('.choice_coupon .coupon_list').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //保存操作
    $('.choice_coupon').find('.preservation').on('click', function () {
        $('.settlement').find('.style_coupons').empty();
        // 获取选中优惠券信息
        $('.coupon_list li').each(function () {
            if ($(this).hasClass('active')) {
                //获取价格
                var price = $(this).find('.price').text();
                //获取规格
                var spe = $(this).find('.spe').text();
                //获取时间
                var data = $(this).find('.data').text();
                //获取专区
                var limit = $(this).find('.limit').text();
                // 创建元素
                var html = '<li class="coupon_item">'
                    + '<div class="item_left">'
                    + '<span class="tips">￥</span>'
                    + '<span class="price">' + price + '</span>'
                    + '</div>'
                    + '<div class="item_right">'
                    + '<p class="spe">' + spe + '</p>'
                    + '<p class="data">' + data + '</p>'
                    + '<p class="limit">' + limit + '</p>'
                    + '</div>'
                    + '</li>';
                $(html);
                $('.settlement .style_coupons').append(html);
                $('.settlement').find('.count_coupon').text(price);
                //商品总价
                var count_price = parseInt($('.settlement').find('.count_price').text());
                //运费
                var count_send = parseInt($('.settlement').find('.count_send').text());

                var count_money = count_price + count_send - price;
                $('.settlement').find('.paid').find('.count_money').text(count_money);
            }

        });

        $('.choice_coupon').css('display', 'none');
    });
    //取消操作
    $('.choice_coupon').find('.cancle').on('click', function () {
        $('.choice_coupon .coupon_list').find('li').removeClass('active');
        $('.choice_coupon').css('display', 'none');
    });
    //关闭操作
    $('.choice_coupon').find('.draw').on('click', function () {
        $('.choice_coupon').css('display', 'none');
    });


    ////////////////////////////////////////结算/////////////////////////////////////////////

    function count() {
        // 商品总价
        var p_num = 0;
        var box_list = $('.product_box').find('.cn_price');
        for (var j = 0; j < box_list.length; j++) {
            p_num += parseFloat(box_list.get(j).innerHTML);
        }
        $('.settlement').find('.count_price').text(p_num);
        // 商品运费
        var send_num = 0;
        var send_list = $('.product_box').find('.se_price');
        for (var a = 0; a < send_list.length; a++) {
            send_num += parseFloat(send_list.get(a).innerHTML);
        }
        $('.settlement').find('.count_send').text(send_num);
        //优惠券
        if ($('.style_coupon').find('li').length === 0) {
            $('.settlement').find('.count_coupon').text(0);
        }
        // 计算总价
        var coupon_price = $('.settlement').find('.count_coupon').text();
        var count_money = p_num + send_num - coupon_price;
        $('.settlement').find('.paid').find('.count_money').text(count_money);
    }
    $('.product .product_box').each(function () {
        $(this).find('.product_list').each(function () {
            //    单价
            var on_price = parseInt($(this).find('.list_price').find('span').text());
            // 数量
            var value = parseInt($(this).find('.list_num').find('.calculation_input').val());
            var price = on_price * value;
            $(this).find('.list_count').find('span').text(price);
        });
        var sum = 0;
        var list = $(this).find('.list_count').find('span');
        for (var i = 0; i < list.length; i++) {
            sum += parseFloat(list.get(i).innerHTML);
        }
        //    运费
        var send = parseInt($(this).find('.send_price').find('.se_price').text());
        var cn_price = send + sum;
        $(this).find('.freight').find('.cn_price').text(cn_price);

        count()
    })

    // +操作
    $('.product').on('click', '.product_box .product_list .add', function () {
        var stock = $(this).prev().data('stock');
        var num = parseInt($(this).prev().val());
        if (num < stock) {
            var value = num + 1;
            $(this).prev().val(value);
            // 单价
            var on_price = parseInt($(this).parents('.list_num').prev('.list_price').find('span').text());
            // 商品价格
            var price = on_price * value;
            $(this).parents('.list_num').next('.list_count').find('span').text(price);
            //获取运费
            var send = parseInt($(this).parents('.product_box').find('.remarks').find('.send_price').find('.se_price').text());
            var sum = 0;
            var xx = $(this).parents('.product_box').find('.product_list').find('.list_count').find('span');

            for (var i = 0; i < xx.length; i++) {
                sum += parseFloat(xx.get(i).innerHTML);
            }
            var cn_price = send + sum;
            $(this).parents('.zx_product').find('.freight').find('.cn_price').text(cn_price);
            count()
        }
    });
    //-操作
    $('.product').on('click', '.product_box .product_list .reduce', function () {
        var num = parseInt($(this).next().val());
        if (num > 1) {
            var value = num - 1;
            $(this).next().val(value);
            // 单价
            var on_price = parseInt($(this).parents('.list_num').prev('.list_price').find('span').text());
            // 商品价格
            var price = on_price * value;
            $(this).parents('.list_num').next('.list_count').find('span').text(price);
            //获取运费
            var send = parseInt($(this).parents('.product_box').find('.remarks').find('.send_price').find('.se_price').text());
            var sum = 0;
            var xx = $(this).parents('.product_box').find('.product_list').find('.list_count').find('span');

            for (var i = 0; i < xx.length; i++) {
                sum += parseFloat(xx.get(i).innerHTML);
            }
            var cn_price = send + sum;
            $(this).parents('.zx_product').find('.freight').find('.cn_price').text(cn_price);
            count()
        }
    })

})
