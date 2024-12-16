const weekoffset=46905
const opengendata=false
function openNav(){
    if(document.getElementById('sidenav')){document.getElementById("sidenav").style.left="0"}
    else{document.getElementById("bottnav").style.bottom="0"}
    document.getElementById("openbtn").style.left="-100%"
}
function closeNav(){
    if(document.getElementById('sidenav')){document.getElementById("sidenav").style.left="-100%"}
    else{document.getElementById("bottnav").style.bottom="-100%"}
    document.getElementById("openbtn").style.left="1vh"
}
function getcard(id){const cd=document.getElementById(id);cd.style.display="";cd.getElementsByTagName("details")[0].open=true;cd.scrollIntoView()}
function addChildToParent(parent,el,msg,state){
    const node=document.createElement(el)
    node.id="tag_"+msg.replace(/\s/g,'')
    node.value="#"+msg
    node.type='button'
    node.setAttribute('onclick','AddTagSelector(this.value)')
    node.classList.add(state)
    parent.appendChild(node)
}
function ResetTagSelector(){
    curtinput=defaultinput.slice()
    activetags.innerHTML=""
    for(t=0;t<tagselect.length;t++){tagselect[t].classList.remove("include");tagselect[t].classList.remove("exclude")}
    for(i=0;i<allit.length;i++){allit[i].style.display="none";allit[i].getElementsByTagName("details")[0].open=false}
}
function AddTagSelector(tag){
    tag=tag.split('#')[1]
    if(curtinput.includes(tag+"0")){            // RETURN TO NEUTRAL
        let index=curtinput.indexOf(tag+"0");
        curtinput.splice(index,1);
        document.getElementById("btn_"+tag.replace(/\s/g,'')).classList.remove("exclude");
        activetags.removeChild(Array.from(activetags.childNodes).find((v)=>v.value=='#'+tag));
    }
    else if(curtinput.includes(tag+"1")){       // TURN GREEN TAG INTO RED TAG
        let index=curtinput.indexOf(tag+"1");
        curtinput.splice(index,1);
        curtinput.push(tag+"0");
        document.getElementById("btn_"+tag.replace(/\s/g,'')).classList.remove("include");
        document.getElementById("tag_"+tag.replace(/\s/g,'')).classList.remove("include");
        document.getElementById("btn_"+tag.replace(/\s/g,'')).classList.add("exclude");
        document.getElementById("tag_"+tag.replace(/\s/g,'')).classList.add("exclude");
    }
    else{                                       // ACTIVATE GREEN TAG
        curtinput.push(tag+"1");
        addChildToParent(activetags,"input",tag,"include");
        document.getElementById("btn_"+tag.replace(/\s/g,'')).classList.add("include");
        document.getElementById("tag_"+tag.replace(/\s/g,'')).classList.add("include");
    }
}
function FindTag(){
    var taginput=document.getElementById('findtaginput').value.toLowerCase().replaceAll("'",'’').split(' ');
    for(i=0;i<tagselect.length;i++){
        check=true
        for(t=0;t<taginput.length;t++){if(tagselect[i].value.includes(taginput[t])&&check){check=true}else{check=false}}
        if(check || tagselect[i].classList.contains("include") || tagselect[i].classList.contains("exclude")){tagselect[i].style.display=""}
        else{tagselect[i].style.display="none"}
    }
}
function ToggleDLC(){
    document.activeElement.classList.toggle('no')
    if(document.activeElement.classList.contains('no')){curtinput.push("dlc0");for(d=0;d<alldlc.length;d++){alldlc[d].style.display='none'}}
    else{if(curtinput.includes("dlc0")){curtinput.splice(curtinput.indexOf('dlc0'),1)}for(d=0;d<alldlc.length;d++){alldlc[d].style.display=''}}
}
function FilterItems(){
    var findli=allit.length;
    for(i=0;i<itags.length;i++){
        if(!allit[i].getElementsByTagName("t")[0].innerHTML.includes("#keep")){allit[i].style.display='none'}
        var checks=true;
        for(tag=0;tag<curtinput.length;tag++){
            if(curtinput[tag].slice(-1)=='0'&& Object.values(itags[i])[0].indexOf(curtinput[tag].slice(0,-1))!=-1){checks=false}
            if(curtinput[tag].slice(-1)=='1'&& Object.values(itags[i])[0].indexOf(curtinput[tag].slice(0,-1))==-1){checks=false}
        }
        if(checks){
            allit[i].style.display=""
            if(allit[i].getElementsByTagName("t")[0].innerHTML.includes("#general data")&&opengendata){allit[i].getElementsByTagName("details")[0].open=true}
        }
        else{findli-=1}
    }
    if(findli==0){nofind.style.display="block"}
    else{nofind.style.display="none"}
}
function HMsecs2THtime(t){
    HMseconds=t+weekoffset
    nbdays=Math.trunc(1+HMseconds/(22*416))
    nbsuns=Math.trunc(1+(HMseconds-22*nbdays)/416)%22
    nbmins=Math.trunc((HMseconds-416*22*Math.trunc(HMseconds/(22*416))-416*(Math.trunc((HMseconds-22*nbdays)/416)%22))/416*60)
    if(nbmins>59){nbmins-=60;nbsuns+=1}
    nbsecs=Math.round((HMseconds-(nbdays-1)*22*416-(nbsuns-1)*416-nbmins*416/60)/(416/3600))
    return(('00'+nbdays).slice(-2)+'d'+('00'+nbsuns).slice(-2)+'s '+('00'+nbmins).slice(-2)+':'+('00'+nbsecs).slice(-2))
}
const GMtime=t=>{const time={m:('00'+Math.trunc(t/60)).slice(-2),s:('00'+Math.round(t)%60).slice(-2)};return Object.entries(time).map(([key,val])=>`${val}:`).join('').slice(0,-1)}
function THtime2GMtime(time){
    v=time.match(/(\d[\d\.]*)/g)
    if(v.length!=4){window.alert("The input format is incorrect!\n・You wrote:\t\t\t"+time+"\n・Required format:\t--d--s --:--\n\nd, s, space and colon can be swapped or removed, but it is necessary for the input to contain four values (day number, sunrise number, minutes and seconds) separated by at least one non-digit character (Note: the period counts as a digit character).\nNon-integer values are allowed only for the number of seconds.");return('<p style=margin-top:1em;margin-bottom:0>Hearthian time to in-game time conversion: Invalid input!</p>')}
    dcmsp=v[3].toString().length-3
    HMseconds=(v[0]-1)*22*416+(v[1]-1)*416+v[2]*416/60+v[3]*416/3600-weekoffset
    return("<tr><th colspan=2 style=border:none;background:none><h2 style=color:white;margin:.5em;font-size:1.5em>Conversion: Hearthian time to in-game time</h2></th></tr><tr><th>Input Hearthian Time</th><td style=opacity:.7>"+v[0]+'d'+v[1]+'s '+v[2]+':'+v[3]+"</td></tr><tr><th>Timestamp</th><td style=background:rgba(var(--midd),.5)>"+GMtime(HMseconds)+"</td></tr><tr><th>Seconds since start of loop</th><td style=background:rgba(var(--midd),.5)>"+(Math.round(HMseconds*(10**dcmsp))/(10**dcmsp)).toString()+"</td></tr>")
}
function GMtime2THtime(time){
    v=time.match(/(\d[\d\.]*)/g)
    HMseconds=Number(v[0])*60+Number(v[1])+weekoffset
    dcmsp=v[1].toString().length-3
    nbdays=Math.trunc(1+HMseconds/(22*416))
    nbsuns=Math.trunc(1+(HMseconds-22*nbdays)/416)%22
    nbmins=Math.trunc((HMseconds-416*22*Math.trunc(HMseconds/(22*416))-416*(Math.trunc((HMseconds-22*nbdays)/416)%22))/416*60);if(nbmins>59){nbmins-=60;nbsuns+=1}
    nbsecs=Math.round((HMseconds-(nbdays-1)*22*416-(nbsuns-1)*416-nbmins*416/60)/(416/3600));if(nbsecs>59){nbsecs-=60;nbmins+=1}
    return("<tr><th colspan=2 style=border:none;background:none><h2 style=color:white;margin:.5em;font-size:1.5em>Conversion: In-game time to Hearthian time</h2></th></tr><tr><th>Input In-game Time</th><td style=opacity:.7>"+v[0]+":"+v[1]+"</td></tr><tr><th>Seconds since start of loop</th><td style=background:rgba(var(--midd),.5)>"+(Math.round((HMseconds-weekoffset)*Math.pow(10,dcmsp))/Math.pow(10,dcmsp)).toString()+"</td></tr><tr><th>Hearthian Time</th><td style=background:rgba(var(--midd),.5)>"+('00'+nbdays).slice(-2)+'d'+('00'+nbsuns).slice(-2)+'s '+('00'+nbmins).slice(-2)+':'+('00'+nbsecs).slice(-2)+"</td></tr>")
}
function HMS2HM(t,os=6){
    h=Math.floor(t%(3600*24)/3600)+os
    if(h>23){h-=24}if(h<0){h+=24}
    return('00'+h).slice(-2)+":"+('00'+Math.floor(t%3600/60)).slice(-2)+":"+('00'+Math.floor(t%60)).slice(-2)
}
function THtime2HMcircadianrhythm(time){
    v=time.match(/(\d[\d\.]*)/g)
    if(v.length>3){hearthianseconds=(v[1]-1)*3600+v[2]*60+v[3]*1;tout=v[0]+'d'+v[1]+'s '+v[2]+':'+v[3]}
    else{hearthianseconds=(v[0]-1)*3600+v[1]*60+v[2]*1;tout=v[0]+'s '+v[1]+':'+v[2]}
    return("<tr><th colspan=2 style=border:none;background:none><h2 style=color:white;margin:.5em;font-size:1.5em>Circadian Rhythm Equivalence:<br>Hearthian &rarr; Human</h2></th></tr><tr><th>Input Hearthian Time</th><td style=opacity:.7>"+tout+"</td></tr><tr><th>Human Time (24h clock)</th><td style=background:rgba(var(--midd),.5)>"+HMS2HM(hearthianseconds*12/11)+"</td></tr><tr>")
}
function THS2TH(t,os=6,os2=30){
    d=Math.floor(t%(3600*22)/3600)+1-os
    h=Math.floor(t%3600/60)+os2
    s=Math.round(t%60)
    if(s>59){s-=60;h+=1}else if(s<0){s+=60;h-=1}
    if(h>59){h-=60;d+=1}else if(h<0){h+=60;d-=1}
    if(d>21){d-=22}if(d<1){d+=22}
    return('00'+d).slice(-2)+"s "+('00'+h).slice(-2)+":"+('00'+s).slice(-2)
}
function HMtime2THcircadianrhythm(time){
    v=time.match(/(\d[\d\.]*)/g)
    if(v.length>2){humanseconds=v[0]*3600+v[1]*60+v[2]*1;tout=v[0]+':'+v[1]+':'+v[2]}
    else{humanseconds=v[0]*3600+v[1]*60;tout=v[0]+':'+v[1]}
    hearthianseconds=humanseconds*11/12
    return("<tr><th colspan=2 style=border:none;background:none><h2 style=color:white;margin:.5em;font-size:1.5em>Circadian Rhythm Equivalence:<br>Human &rarr; Hearthian</h2></th></tr><tr><th>Input Human Time</th><td style=opacity:.7>"+tout+"</td></tr><tr><th>Hearthian Time Equivalent</th><td style=background:rgba(var(--midd),.5)>"+THS2TH(hearthianseconds)+"</td></tr><tr>")
}
function timestamp2num(t){
    v=t.match(/(\d[\d\.]*)/g)
    if(v.length>2){return v[0]*3600+v[1]*60+v[2]*1}
    else{return(v[0]*60+v[1]*1)}
}
function fillcalcoutput(id,out){
    document.getElementById('calcout_'+id).innerHTML=out.toString()
}
function conditionaloutput(cond,condT,condF){
    return cond?condT:condF
}
function opencloseall(){
    if(!allit[0].getElementsByTagName("details")[0].open==true){for(i=0;i<allit.length;i++){allit[i].getElementsByTagName("details")[0].open=true}}
    else{for(i=0;i<allit.length;i++){allit[i].getElementsByTagName("details")[0].open=false}}
}
function changechp(ch){
    for(i=0;i<chlist.length;i++){
        if(chlist[i]===ch){
            $('#'+chlist[i]).show()
            if(i<2){$('#prevnext').html('<a href=#'+chlist[i+1]+' onclick="javascript:changechp(\''+chlist[i+1]+'\')">Next &rarr;</a>')}
            else if(i===chlist.length-1){$('#prevnext').html('<a href=#'+chlist[i-1]+' onclick="javascript:changechp(\''+chlist[i-1]+'\')">&larr; Previous</a>')}
            else{$('#prevnext').html('<a href=#'+chlist[i-1]+' onclick="javascript:changechp(\''+chlist[i-1]+'\')">&larr; Previous</a> &emsp; <a href=#'+chlist[i+1]+' onclick="javascript:changechp(\''+chlist[i+1]+'\')">Next &rarr;</a>')}
        }else{$('#'+chlist[i]).hide()}
    }
}