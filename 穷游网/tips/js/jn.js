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

//2.��꾭����ť
//��꾭����ť ��ť���� �Զ�������ʽ��ul�ƶ���ָ����λ��
//1.2��¡��һ�Ź�� �ŵ����
var img1 = imgs[0].cloneNode(true);
img.appendChild(img1);
//2.��꾭����ť
//��꾭����ť ��ť���� �Զ�������ʽ��ul�ƶ���ָ����λ��
//����
//�ɵ�������
//�Զ�������ʽ��ul�ƶ���ָ����λ��
//Ŀ�� �� ��ť�����й� �� ͼƬ����й� �����Ǹ���
//function play(){
//    for(var i = 0;i<lis1.length;i++){
//        lis1[i].index = i;
//        lis1[i].onclick = function(){
//            var target = -this.index*imgWidth;
//            animate(img,target);
//        }
//    }
//}
//3.2����Ҽ�ͷ �Զ�������ʽ��ul�ƶ���ָ����λ��
//var pic = 0;//��¼��ǰ������ʾ��ͼƬ������
//right.onclick = function () {
//    //���ж� ��������һ��ͼƬ ����ul˲�����Ὺʼλ�� Ȼ������ҲҪ����
//    if (pic === ulLis.length - 1) {
//        ul.style.left = 0 + "px";
//        pic = 0;//����ҲҪ����
//    }
//    pic++;//�������Ҫ��ʾ��ͼƬ������
//    //Ŀ�� ��pic�й� �� ͼƬ����й� �����Ǹ���
//    var target = -pic * imgWidth;
//    animate(ul, target);
//};
//left.onclick = function () {
//    //���ж� ����ǵ�һ��ͼƬ ����ul˲����������λ�� Ȼ������ҲҪ�����
//    if (pic === 0) {
//        ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
//        pic = ulLis.length - 1;//����ҲҪ����
//    }
//    pic--;//�������Ҫ��ʾ��ͼƬ������
//    //Ŀ�� ��pic�й� �� ͼƬ����й� �����Ǹ���
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
        step = leader < target ? step : -step;//step��������
        if (Math.abs(leader - target) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";//�ֶ��ŵ��յ�
            clearInterval(obj.timer);
        }
    }, 15);
}