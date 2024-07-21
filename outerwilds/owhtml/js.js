const weekoffset=46905
const autoopengeneraldata=false

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
    console.log("defaultinput: "+defaultinput)
    curtinput=defaultinput.slice()
    activetags.innerHTML=""
    for(t=0;t<tagselect.length;t++){tagselect[t].classList.remove("include");tagselect[t].classList.remove("exclude")}
    for(i=0;i<allit.length;i++){allit[i].style.display="none";allit[i].getElementsByTagName("details")[0].open=false}
    console.log("curtinput: "+curtinput)
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
    console.log(curtinput)
}
function FilterItems(){
    var findli=allit.length;
    for(i=0;i<itags.length;i++){
        allit[i].style.display='none';
        var checks=true;
        for(tag=0;tag<curtinput.length;tag++){
            if(curtinput[tag].slice(-1)=='0'&& Object.values(itags[i])[0].indexOf(curtinput[tag].slice(0,-1))!=-1){checks=false}
            if(curtinput[tag].slice(-1)=='1'&& Object.values(itags[i])[0].indexOf(curtinput[tag].slice(0,-1))==-1){checks=false}
        }
        if(checks){
            allit[i].style.display=""
            if(allit[i].getElementsByTagName("t")[0].innerHTML.includes("#general data")&&autoopengeneraldata){allit[i].getElementsByTagName("details")[0].open=true}
        }
        else{findli-=1}
    }
    if(findli==0){nofind.style.display="block"}
    else{nofind.style.display="none"}
}
const GMtime=t=>{const time={m:('00'+Math.trunc(t/60)).slice(-2),s:('00'+Math.round(t)%60).slice(-2)};return Object.entries(time).map(([key,val])=>`${val}:`).join('').slice(0,-1)}
function THtime2GMtime(time){
    day=time[0]+time[1]
    sunrise=time[3]+time[4]
    minutes=time[7]+time[8]
    seconds=time[10]+time[11]
    HMseconds=(day-1)*22*416+(sunrise-1)*416+minutes*416/60+seconds*416/3600-weekoffset
    // return(GMtime(HMseconds))
    return(GMtime(HMseconds)+'\n'+HMseconds.toString())
}
function GMtime2THtime(time){
    minutes=time[0]+time[1]
    seconds=time[3]+time[4]
    HMseconds=Number(minutes)*60+Number(seconds)+weekoffset
    nbdays=Math.trunc(1+HMseconds/(22*416))
    nbsuns=Math.trunc(1+(HMseconds-22*nbdays)/416)%22
    nbmins=Math.trunc((HMseconds-416*22*Math.trunc(HMseconds/(22*416))-416*(Math.trunc((HMseconds-22*nbdays)/416)%22))/416*60)
    if(nbmins>59){nbmins-=60;nbsuns+=1}
    nbsecs=Math.round((HMseconds-(nbdays-1)*22*416-(nbsuns-1)*416-nbmins*416/60)/(416/3600))
    return(('00'+nbdays).slice(-2)+'d'+('00'+nbsuns).slice(-2)+'s '+('00'+nbmins).slice(-2)+':'+('00'+nbsecs).slice(-2))
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