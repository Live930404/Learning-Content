/**
 * Created by Administrator on 2017/6/5.
 */
//ͷ���ֲ�ͼ��ʼ
window.onload=function(){
    //��̬���㵱ǰ�ͻ����������Ļ���Ȼ���Զ����ɶ�Ӧ�Ŀ�ȿ�ʼ
    var myImgWidth;
    var large_ul = document.getElementById("imgList"); //������ͼ��ul��ǩ;
    var large_ul_lis = large_ul.children;

    //ҳ���һ�μ��ص�ʱ����ҳ��Ŀ��
    myImgWidth = document.body.clientWidth;

    //��ÿһ���ֲ�ͼ����Ӧ���ÿ��
    for(var i = 0; i < large_ul_lis.length; i++) {
        var large_img = large_ul_lis[i].children[0];
        large_img.style.width = myImgWidth + "px";
    }

    var box = document.getElementById("box");
    var adv01 = box.children[0];
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
    setInterval(right.onclick,3000);
}

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
    },15)
}
//ͷ���ֲ�ͼ����

