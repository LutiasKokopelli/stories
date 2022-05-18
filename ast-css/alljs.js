function SwapDiv(div1,div2){
    d1=document.getElementById(div1);
    d2=document.getElementById(div2);
    if(d2.style.display=="none"){
        d1.style.display="none";
        d2.style.display="block"
    }else{
        d1.style.display="block";
        d2.style.display="none"
    }
}
function ToOld(b2past,b2futu,divpas,divfut){
    bp=document.getElementById(b2past);
    bf=document.getElementById(b2futu);
    dp=document.getElementById(divpas);
    df=document.getElementById(divfut);
    df.style.display="none";dp.style.display="block";bf.style.display="none";bp.style.display="block"
}
function ToNew(b2past,b2futu,divpas,divfut){
    bp=document.getElementById(b2past);
    bf=document.getElementById(b2futu);
    dp=document.getElementById(divpas);
    df=document.getElementById(divfut);
    dp.style.display="none";df.style.display="block";bp.style.display="none";bf.style.display="block"
}
