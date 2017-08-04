/**
 * Created by zzy on 2017-06-05.
 */
/*midPic start*/
var count = 0;
$(function(){
    $(".midPic").on("mouseover",function(){
        $("#midPic>.left").stop().fadeIn(300);
        $("#midPic>.right").stop().fadeIn(300);
    });
    $(".midPic").on("mouseout",function(){
        $("#midPic>.left").stop().fadeOut(300);
        $("#midPic>.right").stop().fadeOut(300);
    });
    $("#midPic>.left").click(function () {
        $("#midPic>ul>li").hide();
        $("#midPic>ul>li:eq(1)").fadeIn(400);
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    });
    $("#midPic>.right").click(function () {
        $("#midPic>ul>li").hide();
        $("#midPic>ul>li:eq(2)").fadeIn(400);
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    });
});

window.onload = function(){
    /*midPic start*/
    var midPic = document.getElementById("midPic");
    /*flashSale start*/
    var change = document.getElementById("change");
    var upDown = document.getElementById("upDown");
    var count = 0;
    change.onclick = function() {
        count++;
        if (count < 5) {
            animate(upDown, -125 * count);
        } else {
            count = 1;
            upDown.style.top = 0;
            animate(upDown, -125);
        }
    };
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetTop;
            var step = 5;
            step = leader < target ? step : -step;//step有了正负
            if (Math.abs(leader - target) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.top = leader + "px";
            } else {
                obj.style.top = target + "px";//手动放到终点
                clearInterval(obj.timer);
            }
        }, 15);
    }
}
/*freeGo start*/
$(function(){
    $(".freeGo .ulT li").mouseover(function(){
         var index = $(this).index();
        $(".freeGo .ulB").stop().fadeOut(200);
        $(".freeGo .ulB:eq("+index+")").stop().fadeIn(900);
        $(this).find("a").css("backgroundColor", "#ff7467");
    }).mouseout(function(){
        $(".freeGo .ulT li").find("a").css("backgroundColor", "");
        $(this).find("a").css("backgroundColor", "#ff7467");
    });


    $(".freeGo .ulB li").mouseover(function(){
        $(this).css("opacity","0.7");

    });
    $(".freeGo .ulB li").mouseout(function(){
        $(".freeGo .ulB li").css("opacity","1");
    });
});
/*localPloy start*/
$(function(){
    $(".localPloy_in .place li").mouseover(function(){
        var index = $(this).index();
        $(".localPloy_in .whatCanDo").stop().fadeOut(200);
        $(".localPloy_in .whatCanDo:eq("+index+")").stop().fadeIn(900);
    });
    $(".localPloy_in .whatCanDo li").mouseover(function(){
        $(this).css("opacity","0.7");

    });
    $(".localPloy_in .whatCanDo li").mouseout(function(){
        $(".localPloy_in .whatCanDo li").css("opacity","1");
    });
});
/*recommend start*/
$(function(){
    $(".recommend .ulT2 li").mouseover(function(){
        var index = $(this).index();
        $(".recommend .ulB2").stop().fadeOut(200);
        $(".recommend .ulB2:eq("+index+")").stop().fadeIn(900);
    });
    $(".recommend .ulB2 li").mouseover(function(){
        $(this).css("opacity","0.7");

    });
    $(".recommend .ulB2 li").mouseout(function(){
        $(".recommend .ulB2 li").css("opacity","1");
    });
});
<!--quickKey start-->
var flag = true;
$(function(){
    window.onscroll = function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop > 700) {
            $(".quickKey").stop().fadeIn(500);
        } else {
            $(".quickKey").stop().fadeOut(500);
        }
    };
});
$(function() {
    $(document).dblclick(function () {

        if (flag == true) {
            $(".nav ul li a").css("color", "#eee");

            $(".freeGo ,.freeGo a").css("color", "#eee");

            $(".recommend .ulT2 li a").css("color", "#eee");
            $(".recommend ,.ulB2 a").css("color", "#eee");
            $(".recommend h2").css("color", "#f5f5f5");

            $(".flashSale,.flashSale_in").css("background-color", "#666");
            $(".flashSale_in ul li a").css("color", "#eee");
            $(".flashSale_in ,.upDownGo a").css("color", "#eee");
            $(".flashSale_in h2").css("color", "#f5f5f5");

            $(".localPloy,.localPloy_in").css("background-color", "#666");
            $(".localPloy_in ul li a").css("color", "#eee");
            $(".localPloy_in .place a").css("color", "#f5f5f5");
            $(".localPloy_in h2").css("color", "#f5f5f5");
            $(".localPloy_in>p").css("color", "#f5f5f5");

            $(".bottomBar,.bottomBar_in").css("background-color", "#666");
            $(".bottomBar_in ul li a").css("color", "#eee");
            $(".bottomBar_in ,.bar a").css("color", "#eee");
            $(".bottomBar_in p").css("color", "#eee");
            $(".bottomBar_in h3").css("color", "#eee");

            $("body").css("background-color", "#555");

            flag = false;
        } else {
            $(".nav ul li a").css("color", "#323232");

            $(".freeGo ,.freeGo a").css("color", "#000");
            $(".freeGo .ulT a").css("color", "#323232");
            $(".freeGo .ulB li a").css("color", "#000");
            $(".freeGo h2").css("color", "#323232");

            $(".recommend ul li a").css("color", "#000");
            $(".recommend ,.ulT2 a").css("color", "#323232");
            $(".recommend h2").css("color", "#323232");

            $(".flashSale,.flashSale_in").css("background-color", "#f5f5f5");
            $(".flashSale_in ul li a").css("color", "#f5f5f5");
            $(".flashSale_in ,.upDownGo a").css("color", "#fff");
            $(".flashSale_in p,.flashSale_in span").css("color", "#323232");
            $(".flashSale_in h2").css("color", "#323232");
            $(".flashSale_in li span").css("color", "#FF7467");

            $(".localPloy,.localPloy_in").css("background-color", "#f5f5f5");
            $(".localPloy_in ul li a").css("color", "#000");
            $(".localPloy_in .place a").css("color", "#323232");
            $(".localPloy_in p").css("color", "#323232");
            $(".localPloy_in h2").css("color", "#323232");

            $(".bottomBar,.bottomBar_in").css("background-color", "#f5f5f5");
            $(".bottomBar_in ul li a").css("color", "#575757");
            $(".bottomBar_in ,.bar a").css("color", "#575757");
            $(".bottomBar_in h3").css("color", "#323232");
            $(".bottomBar_in p").css("color", "#9b9b9b");

            $("body").css("background-color", "#fff");

            flag = true;
        }

    });
    $(".quickKey").find("li").on("mouseover", function(){
        $(this).css("border","3px solid yellow").siblings().css("border","3px solid transparent");
    }).on("mouseout",function(){
        $(this).css("border","3px solid transparent");
    });
});