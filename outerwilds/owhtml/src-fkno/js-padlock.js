$(document).ready(function(){
    firnshiplockedentries=$(".passwordlocked");for(i=0;i<$("input.type[type=text]").length;i++){$("input.type[type=text]")[i].value=""}
    $("input.type[type=text]").on('keydown',function(e){
        if(e.key=="Enter"||e.keyCode==37||e.keyCode==38||e.keyCode==39||e.keyCode==40){$("svg.padlock").click();return false}
        else if(e.key=="Escape"){$('input').blur();return false}
        else{
            for(p=0;p<firnshiplockedentries.length;p++){$(firnshiplockedentries[p]).addClass("passwordlocked");$(firnshiplockedentries[p]).removeClass("passwordunlocked")}
            $("svg.padlock").removeClass("loading");$(".lock-keyhole").removeClass("loading");$(".lock-checkmark").removeClass("loading")
            $("svg.padlock").removeClass("open");$(".lock-keyhole").addClass("loading");$("svg.padlock").addClass("loading")
        }
    })
    $("svg.padlock").click(function(){
        if($("#"+$(this).closest("[id^=int_]").attr('id')+" input").val()==='sap wine sucks'){
            setTimeout(function(){
                $(".lock-checkmark").addClass("loading");$("svg.padlock").removeClass("loading");$("svg.padlock").addClass("open")
                for(i=0;i<$(".lock-top animateMotion").length;i++){$(".lock-top animateMotion")[i].beginElement()}
                for(p=0;p<firnshiplockedentries.length;p++){$(firnshiplockedentries[p]).removeClass("passwordlocked");$(firnshiplockedentries[p]).addClass("passwordunlocked")}
                $('input').blur()
            },2200)
        }else{
            setTimeout(function(){$("svg.padlock").removeClass("loading");$("svg.padlock").addClass("wrong")},1200)
            setTimeout(function(){$("svg.padlock").removeClass("wrong");$(".lock-keyhole").removeClass("loading")},1700)
        }
    })
    $('.cmd').click(function(){
        $('input').focus();$('.cursor').css({visibility:'hidden'})
        cursorblink=setInterval(function(){
            if($('.cursor').css('visibility')==='visible'){$('.cursor').css({visibility:'hidden'})}
            else{setTimeout(function(){$('.cursor').css({visibility:'visible'})},200)}
        },800)
    })
    $('input').blur(function(){$('.cursor').css({visibility:'visible'});clearInterval(cursorblink)})
    $('input').keyup(function(){
        if($(this).val().length<21){$('.cmd span:first-child').text($(this).val())}
        else{$('.cmd span:first-child').text("…"+$(this).val().slice(-20))}
        if($('.cmd span:first-child').text().length===0){$(this).val()=""}
    })
})