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
function ShoHid(id,cls,cola='var(--midd)',coli='var(--fore)',colh='var(--back)'){
d=document.getElementById(id);b=document.getElementById(id+'_b')
var d_ele=document.getElementsByClassName(cls);
var b_ele=document.getElementsByClassName(cls+'_b');
for (var i=0;i<d_ele.length;++i){d_ele[i].style.display='none'}
for (var i=0;i<b_ele.length;++i){b_ele[i].style.background=coli}
d.style.display='';b.style.background=cola
document.querySelector(':root').style.setProperty('--hintcolor',colh)
}
