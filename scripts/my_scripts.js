$(document).ready(function(){
    window.onblur=stopLight;
    window.onfocus=goLight;
    goLight();
    var init1,init2,init3
    function stopLight()
    {
        window.clearInterval(init1);
        window.clearInterval(init2);
        window.clearInterval(init3);
    }
    function goLight()
    {
       init1=setInterval(light_one,3000);
         init2=setInterval(light_two,4000);
        init3=setInterval(light_tree,5000);
    }
function light_one() {
     $("#lightning1").fadeIn(250).fadeOut(250);
 }

 function light_two() {
     $("#lightning2").fadeIn("fast").fadeOut("fast");
 }

 function light_tree() {
     $("#lightning3").fadeIn("fast").fadeOut("fast");
 }
    var clix=[0,0,0,0];
    $("#head").click(function(){
        moveMe(0,this);
    });
    $("#eyes").click(function(){
        moveMe(1,this);
    });
    $("#nose").click(function(){
        moveMe(2,this);
    });
    $("#mouth").click(function(){
        moveMe(3,this);
    });
function moveMe(i,obj)
    {
        if(clix[i]<9)
            {
                $(obj).animate({left:"-=367px"},500);
                clix[i]++;
            }
        else
            {
                clix[i]=0;
                $(obj).animate({left:"0px"},"fast");
            }
    }
    var w=367;
    var m=10;
    $("#btnRandom").click(randomize);
    $("#btnReset").click(reset);
    function getRandom(num)
    {
        var my_random_num=Math.floor(Math.random()*num);
        return my_random_num;
    }
    function randomize()
    {
        $(".face").each(function(index){
           var target_position=getRandom(m);//得到0-10随机数
            clix[index]=target_position;//讲得到的随机数放到数组(相当于点了几次)
            var move_to=target_position*w;
            $(this).animate({left:-move_to},500);
        });
    }
    function reset()
    {
        $(".face").each(function(index){
            clix[index]=0;
            $(this).animate({left:0},500);
        });
    }
});//end doc.onready function
