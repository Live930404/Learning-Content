//�ϲ�����������ɫ��ʼ
$(function(){
    $(".nav>ul>li").children("a").mouseover(function(){
        $(this).siblings("a").css("color","silver")
        $(this).css("color","#10b041")
    })
    $(".nav>ul>li").children("a").mouseout(function(){
        $(this).css("color","silver")
    })
})
$(function(){
//�ϲ�����������ɫ����
//banner�������Ч��ʼ


//banner�������Ч����
    //�л�����ʼ
   $(".tabb>li").mouseover(function(){
       $(this).siblings("li").removeClass("on");
       $(this).addClass("on");
       var index=$(this).index();
       //������Ҫ�Ƴ���ǰ����ʾ״̬����Ҫ������������
       $("#add>div:eq("+index+")").siblings("div").removeClass("block").addClass('hide');
        //������Ҫ�õ�ǰ����ʾ����Ҫ�Ƴ�֮ǰ���ص�����
       $("#add>div:eq("+index+")").addClass("block").removeClass('hide');
   })
    //�л�������
//��껬��������ʾ��ʼ
   /* $("#add>div>ul>li").mouseover(function(){
        $(this).siblings("li").css("opacity",0.5);
        $(this).css("opacity",1);
    })
    $("#add>div").find("li").mouseout(function(){
        $(this).css("opacity",0.5);
    })*/
//��껬��������ʾ����
//�ַ��ٿ�ʼ

  /*  $("#dv").animate({"width":"300px","height":"300px","left":"300px"},1000,function () {
        $("#dv").animate({"width":"50px","height":"30px","left":"800px","top":"300px","opacity":0.2},2000);
    });*/


    $("#piano>ul>li").mouseenter(function(){
        $(this).siblings("li").stop().animate({"width":"160px"},1000);
        $(this).stop().animate({"width":"390px"},1000)
        $(this).find(".intro").css({"display":"block"});

       /* $(this).siblings("li").css("width","160px");
        $(this).css("width","390px");
        $(this).find(".intro").css({"display":"block"});
        $(this).find(".mask").css("background","rgba(0,0,0,0)");*/
    })
    $("#piano>ul>li").mouseleave(function(){
       /* $(this).find(".mask").css("background","rgba(0,0,0,.3)");
        $("#piano>ul").children("li").css("width","200px");
        $(this).find(".intro").css({"display":"none"});*/
        $(this).siblings().stop().animate({"width":"200px"},1000);
        $(this).stop().animate({"width":"200px","opacity":1},1000);
        $(this).find(".intro").css({"display":"none"});
    })
})


/*$(function () {

    $(".showimg-in").mouseenter(function () {
        $(this).siblings().stop().animate({"width":"70px","opacity":0.4},1505);
        $(this).stop().animate({"width":"930px","opacity":1},1500,  function () {
            $(this).find(".des").slideDown(500);
        });
    });
    $(".showimg-in").mouseleave(function () {
        $(this).find(".des").stop().slideUp(500);
        $(this).siblings().stop().animate({"width":"240px","opacity":1},1505);
        $(this).stop().animate({"width":"240px","opacity":1},1500);
    });

})*/








//�ַ��ٽ���
//�Ƶ��л�����ʼ
$(function(){
    $(".h-tab>ul>li").mouseover(function(){
        $(this).siblings("li").removeClass("on");
        $(this).addClass("on");
        var index=$(this).index();
        //������Ҫ�Ƴ���ǰ����ʾ״̬����Ҫ������������
        $("#hh>div:eq("+index+")").siblings("div").removeClass("block").addClass('hide');
        //������Ҫ�õ�ǰ����ʾ����Ҫ�Ƴ�֮ǰ���ص�����
        $("#hh>div:eq("+index+")").addClass("block").removeClass('hide');

    })
})

//�Ƶ��л�������
//���ݿ�ʼ
var kouhao = document.getElementById("kouhao");
var spans = kouhao.getElementsByTagName("span");
var btn = document.getElementById("btn");
var duiwu = document.getElementById("duiwu");
function fei(){
    if(duiwu.offsetLeft<700){
        animate2( duiwu,{"left":1750,"opacity":1})
    }else{
        duiwu.style.left = -1000+"px";
    }
}
fei()
var kouhao = document.getElementById("kouhao");
var spans = kouhao.getElementsByTagName("li");
function luo(){
    for(var i=0;i<spans.length;i++){
        animate(spans[0],{"opacity":1,"fontSize":40,"left":"100"},function(){
            animate(spans[1],{"opacity":1,"fontSize":40,"left":"200"},function(){
                animate(spans[2],{"opacity":1,"fontSize":40,"left":"300"},function(){
                    animate(spans[3],{"opacity":1,"fontSize":40,"left":"400"},function(){
                        animate(spans[4],{"opacity":1,"fontSize":40,"left":"500"},function(){
                            animate(spans[5],{"opacity":1,"fontSize":40,"left":"600"},function(){
                                animate(spans[6],{"opacity":1,"fontSize":40,"left":"700"},function(){
                                    animate(spans[7],{"opacity":1,"fontSize":40,"left":"800"})
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
luo()
var duiming = document.getElementById("duiming")
function ming (){
    animate(duiming,{"fontSize":50,"opacity":1})
}
ming()

var oDiv = document.getElementById("chengyuan");
var aA = oDiv.getElementsByTagName("li");
for(var i=0;i<aA.length;i++)
{
    aA[i].time=null;
    initialize(aA[i]);
}
setInterval(starmove,24);
function starmove()
{
    for(var i=0;i<aA.length;i++)
    {
        if(aA[i].pause)
        {
            domove(aA[i]);
        }
    }
}
function domove(obj)
{
    if(obj.offsetTop<=-obj.offsetHeight)
    {
        obj.style.top=1632+"px";
        initialize(obj);
    }
    else
    {
        obj.style.top=obj.offsetTop-obj.ispeed+"px";
    }
}
function initialize(obj)
{
    var iLeft=parseInt(Math.random()*oDiv.offsetWidth);
    var scale=Math.random()*1+1;
    var iTimer=parseInt(Math.random()*1500);
    obj.pause=0;

    obj.style.fontSize=12*scale+'px';

    if((iLeft-obj.offsetWidth)>0)
    {
        obj.style.left=iLeft-obj.offsetWidth+"px";
    }
    else
    {
        obj.style.left=iLeft+"px";
    }
    clearTimeout(obj.time);
    obj.time=setTimeout(function(){
        obj.pause=1;
    },iTimer);
    obj.ispeed=Math.ceil(Math.random()*4)+1;

};
