// IF YOU WANT TO HAVE PRINTS FOR DEBUGGING: USE THE FUNCTION alert()
function SwapDiv(div1,div2){
    d1=document.getElementById(div1);d2=document.getElementById(div2)
    if(d2.style.display=="none"){d1.style.display="none";d2.style.display=""}
    else{d1.style.display="";d2.style.display="none"}
}
function TimeMch(t){
    if(t==0){document.getElementById('olne').style.backgroundImage="url(../../ast/hksk/bg/lever-old.png)";
    document.getElementById('lnkold').style.backgroundImage="url(../../ast/hksk/bg/tuner-on.png)";
    document.getElementById('lnknew').style.backgroundImage="url(../../ast/hksk/bg/tuner-off.png)";
    document.getElementById('old').style.display='block';document.getElementById('new').style.display='none'}
    if(t==1){document.getElementById('olne').style.backgroundImage="url(../../ast/hksk/bg/lever-new.png)";
    document.getElementById('lnkold').style.backgroundImage="url(../../ast/hksk/bg/tuner-off.png)";
    document.getElementById('lnknew').style.backgroundImage="url(../../ast/hksk/bg/tuner-on.png)";
    document.getElementById('old').style.display='none';document.getElementById('new').style.display='block'}
}
function ShoHiC(id,cls,cola='rgb(var(--midd))',coli='rgb(var(--fore))',type='block'){
    d=document.getElementById(id);b=document.getElementById(id+'_b')
    var d_ele=document.getElementsByClassName(cls);for(var i=0;i<d_ele.length;++i){d_ele[i].style.display='none'}
    var b_ele=document.getElementsByClassName(cls+'_b')
    for(var i=0;i<b_ele.length;++i){b_ele[i].style.background=coli}
    d.style.display=type
    b.style.background=cola
}
function ShoHid(id,cls,type='block'){
    d=document.getElementById(id);b=document.getElementById(id+'_b');c=document.getElementById(cls+'_c')
    var d_ele=document.getElementsByClassName(cls);
    for(var i=0;i<d_ele.length;++i){d_ele[i].style.display='none'}
    d.style.display=type
    var style;if(window.getComputedStyle){style=window.getComputedStyle(b).backgroundColor}else{style=b.currentStyle.backgroundColor}
    document.getElementById(cls+'_c').style.background=style
    document.getElementById(cls+'_c').style.borderColor=style
}
function ToggleDiv(cl){
    var els=document.getElementsByClassName(cl);
    for(var i=0;i<els.length;i++){var s=els[i].style;s.display=s.display==='none'?'':'none'}
}
function SpoilDiv(id){
    dc=document.getElementById(id)
    if(dc.style.display=="none"){dc.style.display=''}else{dc.style.display="none"}
}
function openNav(){
  document.getElementById("sidenav").style.left = "0";
  document.getElementById("openbtn").style.left = "-200px";
}
function closeNav(){
  document.getElementById("sidenav").style.left = "-300px";
  document.getElementById("openbtn").style.left = "5px";
}
