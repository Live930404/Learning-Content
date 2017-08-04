/**
 * Created by Administrator on 2017/6/5.
 */
//上tab栏切换
$(function(){
    $(".market-in .square").find("li").mouseover(function(){
        //$(this).css({"border":"1px,solid,#fff"});
        //alert("1");
        var index = $(this).index();
        $(this).siblings("li").css("backgroundColor","#23CDA9");
        $(this).css("backgroundColor","#fff");
        $(".market-in>.img:eq("+index+")").siblings(".img").removeClass("block").addClass("hide");
        $(".market-in>.img:eq("+index+")").removeClass("hide");
    })
})

//下tab切换�
$(function(){
    $(".free .free-in .special .qs-top>em").mouseover(function(){
        $(this).siblings("em").removeClass("current");
        $(this).addClass("current");
        var index = $(this).index();
        $(".special>.qs").find("img:eq("+index+")").siblings("img").removeClass("block").addClass("hide");
        $(".special>.qs").find("img:eq("+index+")").removeClass("hide");
    });
})



function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var leader = obj.offsetLeft;
        var step = 20;
        step = leader < target ? step : -step;
        if( Math.abs(target - leader) >= Math.abs(step)){
            leader += step;
            obj.style.left = leader + "px";
        }else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    },10)
}
//轮播图
window.onload=function(){
    //动态计算当前客户端浏览器屏幕宽度然后自动生成对应的宽度开始
    var myImgWidth;
    var large_ul = document.getElementById("imgList"); //背景大图的ul标签;
    var large_ul_lis = large_ul.children;

    //页面第一次加载的时候获得页面的宽度
    myImgWidth = document.body.clientWidth;

    //给每一个轮播图自适应设置宽度
    for(var i = 0; i < large_ul_lis.length; i++) {
        var large_img = large_ul_lis[i].children[0];
        large_img.style.width = myImgWidth + "px";
    }


    var box = document.getElementById("box");
    //var adv = box.children[0];
    var ul = document.getElementById("imgList");
    var lis = ul.children;
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var imgwidth = myImgWidth;
    box.onmouseover = function(){
        arr.style.display="block";
    }
    box.onmouseout = function(){
        arr.style.display ="none";
    }
    var pic = 0;
    right.onclick = function(){
        if(pic === lis.length - 1){
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = - pic * imgwidth;
        animate(ul,target);

    }

    left.onclick = function(){
        if(pic === 0){
            ul.style.left = - (lis.length - 1)*imgwidth + "px";
            pic = lis.length-1;
        }
        pic--;
        var target = -imgwidth*pic;
        animate(ul,target);
    }
    setInterval(right.onclick, 3000);
}
