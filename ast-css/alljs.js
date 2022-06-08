function SwapDiv(div1,div2){
d1=document.getElementById(div1);d2=document.getElementById(div2)
if(d2.style.display=="none"){d1.style.display="none";d2.style.display="block"}
else{d1.style.display="block";d2.style.display="none"}
}
function TimeMch(t){
if(t==0){document.getElementById('olne').style.backgroundImage="url(../hktfs/ast/lever-old.png)";
document.getElementById('lnkold').style.backgroundImage="url(../hktfs/ast/tuner-on.png)";
document.getElementById('lnknew').style.backgroundImage="url(../hktfs/ast/tuner-off.png)";
document.getElementById('old').style.display='block';document.getElementById('new').style.display='none'}
if(t==1){document.getElementById('olne').style.backgroundImage="url(../hktfs/ast/lever-new.png)";
document.getElementById('lnkold').style.backgroundImage="url(../hktfs/ast/tuner-off.png)";
document.getElementById('lnknew').style.backgroundImage="url(../hktfs/ast/tuner-on.png)";
document.getElementById('old').style.display='none';document.getElementById('new').style.display='block'}
}
