$(function () {
    /*初始化工具提示*/
    $('[data-toggle="tooltip"]').tooltip();

    //获取所有当前item
    var items = $(".carousel-inner .item");
    //监听屏幕的大小
    $(window).on("resize", function () {

        var width = $(window).width();
        //判断屏幕的宽度
        if (width >= 768) {
            //给每个item添加元素
            items.each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("largeImage");
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage", "url('" + imgSrc + "')"));
            })
        } else {
            items.each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("smallImage");
                item.html($('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt="..."> </a>'));
            })
        }
    }).trigger("resize");
    //移动端添加滑动事件
    var startX, endX;
    var carousel_inner = $(".carousel-inner")[0];
    //获取轮播图
    var carousel = $(".carousel");
    //添加监听事件
    carousel_inner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;
        console.log(startX);
    });
    carousel_inner.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        //做出判断
        if (endX - startX > 0) {
            carousel.carousel('prev');
        } else if (endX - startX < 0) {
            carousel.carousel('next');
        }
    });

    //产品导航条的滑动
    var ul = $(".wjs_product .nav-tabs");
    // console.log(ul);
    var lis = ul.find("li");
    var totalWdh = 0;
    lis.each(function (index, value) {
        totalWdh = totalWdh + $(value).innerWidth();
        console.log(totalWdh);
    });
    ul.width(totalWdh);
    //滑动插件函数
    var myScroll = new IScroll('.tabs_parent', {
        scrollX: true, scrollY: false
    });

})

