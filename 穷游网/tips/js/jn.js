/**
 * Created by LY on 2017/6/5.
 */
var uu = document.getElementById("uu");
var lis1 = uu.children;
var img = document.getElementById("img");
var banner = document.getElementById("banner");
var imgs = img.children;
var imgWidth = banner.offsetWidth;
//console.log(imgWidth);

//2.鼠标经过按钮
//鼠标经过按钮 按钮排他 以动画的形式把ul移动到指定的位置
//1.2克隆第一张广告 放到最后
var img1 = imgs[0].cloneNode(true);
img.appendChild(img1);
//2.鼠标经过按钮
//鼠标经过按钮 按钮排他 以动画的形式把ul移动到指定的位置
//排他
//干掉所有人
//以动画的形式把ul移动到指定的位置
//目标 和 按钮索引有关 和 图片宽度有关 而且是负数
//function play(){
//    for(var i = 0;i<lis1.length;i++){
//        lis1[i].index = i;
//        lis1[i].onclick = function(){
//            var target = -this.index*imgWidth;
//            animate(img,target);
//        }
//    }
//}
//3.2点击右箭头 以动画的形式把ul移动到指定的位置
//var pic = 0;//记录当前正在显示的图片的索引
//right.onclick = function () {
//    //先判断 如果是最后一个图片 先让ul瞬间跳会开始位置 然后索引也要归零
//    if (pic === ulLis.length - 1) {
//        ul.style.left = 0 + "px";
//        pic = 0;//索引也要归零
//    }
//    pic++;//计算出将要显示的图片的索引
//    //目标 和pic有关 和 图片宽度有关 而且是负数
//    var target = -pic * imgWidth;
//    animate(ul, target);
//};
//left.onclick = function () {
//    //先判断 如果是第一个图片 先让ul瞬间跳到最后的位置 然后索引也要到最后
//    if (pic === 0) {
//        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
//        pic = ulLis.length - 1;//索引也要归零
//    }
//    pic--;//计算出将要显示的图片的索引
//    //目标 和pic有关 和 图片宽度有关 而且是负数
//    var target = -pic * imgWidth;
//    animate(ul, target);
//};

var j=0;
setInterval(function(){
    if(j<lis1.length){
        var target = -j*imgWidth;
        animate(img,target);
        j++;
    }else if(j==lis1.length){
        img.style.left=0
        j=0;
    }
},1000);

$(function(){
    $("#dl>dd").mouseover(function(){
        $(this).find("img").stop().show(1000);
    })
    $("#dl>dd").mouseout(function(){
        $(this).find("img").stop().hide(1000);
    })
})

//$(function(){
//    $("#main").find("img").mouseover(function(){
//        $("#main").find("span").show(slow);
//    })
//})




function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 30;
        step = leader < target ? step : -step;//step有了正负
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//手动放到终点
            clearInterval(obj.timer);
        }
    }, 15);
}