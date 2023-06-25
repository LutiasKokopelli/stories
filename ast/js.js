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
    // document.getElementById("closbtn").style.left = "0";
    // document.getElementById("midxbtn").style.left = "0";
    document.getElementById("sidenav").style.left = "0";
    document.getElementById("openbtn").style.left = "-100%";
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("wrap").style.left = "16%";
        document.getElementById("wrap").style.width = "84%";
    }
}
function closeNav(){
    // document.getElementById("closbtn").style.left = "-100%";
    // document.getElementById("midxbtn").style.left = "-100%";
    document.getElementById("sidenav").style.left = "-100%";
    document.getElementById("openbtn").style.left = "5px";
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("wrap").style.left = "0";
        document.getElementById("wrap").style.width = "100%";
    }
    else {
        document.getElementById("sidenav").style.width = "50%";
        // document.getElementById("closbtn").style.width = "50%";
    }
}
function ScrollToPage() {
  var input, p;
  input = document.getElementById('selpage');
  if (event.key === "Enter") {
    document.getElementById('page' + input.value).scrollIntoView();
  }
}
function Toggle(cl){
  var button=document.getElementById(cl);
  var els=document.getElementsByClassName(cl);
  if(button.style.opacity=='1'){
    button.style.opacity='.17';
    for(var i=0;i<els.length;i++){
      var s=els[i].style;
      s.opacity='.17'
    }
  }else{
    button.style.opacity='1';
    for(var i=0;i<els.length;i++){
      var s=els[i].style;
      s.opacity='1'
    }
  }
}
function FilterItems() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('filterinput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("filterlist");
  li = ul.getElementsByTagName('a');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function ToggleCode(){
    var els=document.getElementsByTagName('code');
    for(var i=0;i<els.length;i++){
        var s=els[i].style;s.display=s.display==='unset'?'none':'unset'
    }
}
var rowDivs = document.getElementsByClassName('row');
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function ScrollAll(referenceRow) {
    var scrollLeft = referenceRow.scrollLeft;
    for (var i = 1; i < globalThis.rowDivs.length -1; i++) {
        if (isInViewport(globalThis.rowDivs[i])) {
            globalThis.rowDivs[i-1].scrollLeft = scrollLeft;
            if (globalThis.rowDivs[i] != referenceRow) {
                globalThis.rowDivs[i].scrollLeft = scrollLeft;
            }
            globalThis.rowDivs[i+1].scrollLeft = scrollLeft;
        }
    }
}
