const weekoffset=46905,
specialids=["nodlc","fkno"],
genopen=false // Open details of #general data by default

const allrates=document.querySelectorAll('div[class="rating"] input');for(i=0;i<allrates.length;i++){allrates[i].style.width=allrates[i].value}

//@SFOLD Open/Close Sidebar Pane
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
//@EFOLD
//@SFOLD Clipboard
// Copy to Clipboard (general)
function CopyCodeToClipboard(b){
    navigator.clipboard.writeText(b.parentNode.parentNode.getElementsByTagName('pre')[0].innerHTML)
    b.getElementsByTagName('msg')[0].innerHTML='Copied!'
}
function ResetCopyCode(b){setTimeout(function(){b.getElementsByTagName('msg')[0].innerHTML='Copy'},300)}
// Copy Lore Card URL to Clipboard
function CopyLinkToClipboard(b){
    it=b.parentNode.parentNode
    b.getElementsByTagName('msg')[0].innerHTML='URL Copied!'
    bookmark=it.id
    for(i=0;i<allit.length;i++){allit[i].setAttribute("keep",(allit[i].getAttribute("keep")||"").replaceAll(" keepget",""))}
    it.setAttribute("keep",(it.getAttribute("keep")||"")+" keepget")
    nc=window.location.href.split('#')[0]+it.id
    if(document.getElementById('srch_dlc').classList.contains('no')){nc+='#nodlc'}
    navigator.clipboard.writeText(nc)
}
function ResetCopyLink(b){setTimeout(function(){b.getElementsByTagName('msg')[0].innerHTML='Copy Card URL'},300)}
//@EFOLD
// Pin Lore Card
function PinCard(b){
    it=b.parentNode.parentNode
    if(it.getAttribute("keep").includes(" keeppin")){it.setAttribute("keep",it.getAttribute("keep").replaceAll(" keeppin",""))}
    else{it.setAttribute("keep",it.getAttribute("keep")+" keeppin")}
}
// Find Lore Card By ID
function getcard(id){
    cd=document.getElementById(id);cd.style.opacity=1
    kst=cd.getAttribute("keep")||""
    cd.setAttribute('keep',kst+' keepget')
    url=window.location.href.split('#')
    if(url.length>2){window.location.href=url[0]+'#'+id+'#'+url[2]}
    else if(specialids.includes(url[1])){window.location.href=url[0]+'#'+id+'#'+url[1]}
    else{window.location.href=url[0]+'#'+id}
    cd.getElementsByTagName("details")[0].open=true
    cd.classList.add('targetblink');setTimeout(function(){cd.classList.remove('targetblink')},5000)
}
// Save List of Active Tags
function CopySearchState(){
    savepoint={}
    if(curtinput.length>0){
        savepoint["Tags"]=curtinput
        if(useorng){savepoint["Mode"]='BROAD'}else{savepoint["Mode"]='FOCUS'}
        if(logic){savepoint["Logic"]='ANY'}else{savepoint["Logic"]='ALL'}
    }
    if(typeof bookmark!=='undefined'){savepoint["Bookmark"]=bookmark}
    if(document.getElementById("findsumrinput").value||document.getElementById("findcardinput").value){savepoint["Search"]=[document.getElementById("findsumrinput").value,document.getElementById("findcardinput").value]}
    pinl=[];pins=document.querySelectorAll("it[keep~=keeppin]");for(p=0;p<pins.length;p++){pinl.push(pins[p].id)};if(pinl.length){savepoint["Pins"]=pinl}
    if(window.location.href.includes("/owdoc/")){if(document.getElementById('srch_dlc').classList.contains('no')){savepoint["DLC"]="Hide"}else{savepoint["DLC"]="Show"}}
    document.getElementById('copybin').innerHTML="<pre>"+JSON.stringify(savepoint)+"</pre><clp><btn onclick=CopyCodeToClipboard(this) onmouseleave=ResetCopyCode(this)><msg>Copy</msg></btn></clp>"
    // document.getElementById('copybin').innerHTML="<pre>"+JSON.stringify(savepoint)+"</pre><clp><btn style=background-image:url(../ast/svg/hud_pin.svg) onclick=\"javascript:console.log()\"><msg>Save JSON</msg></btn><btn style=background-image:url(../ast/svg/ico_HEA.svg) onclick=\"javascript:this.addEventListener('submit',function(){let reader=new FileReader();reader.readAsText(file.files[0]);reader.onload=function(){LoadSearchState(JSON.parse(event.target.result))}});\"><msg>Import JSON</msg></btn><btn onclick=CopyCodeToClipboard(this) onmouseleave=ResetCopyCode(this)><msg>Copy</msg></btn></clp>"
    navigator.clipboard.writeText(JSON.stringify(savepoint))
}
// Load List of Active Tags
function LoadSearchState(ss){
    ResetTagSelector();l=JSON.parse(ss)
    if(l["Pins"]){for(c=0;c<l["Pins"].length;c++){document.getElementById(l["Pins"][c]).setAttribute("keep",document.getElementById(l["Pins"][c]).getAttribute("keep")+" keeppin")}}
    if(l["Mode"]&&l["Mode"]!=modbtn.value){FocusMode()}
    if(l["Logic"]&&l["Logic"]!=lgcbtn.value){SwapLogic()}
    if(l["Search"]){document.getElementById("findsumrinput").value=l["Search"][0];FindEle("findsumrinput",'it','summary');document.getElementById("findcardinput").value=l["Search"][1];FindEle("findcardinput",'it')}
    if(l["Tags"]){for(t=0;t<l["Tags"].length;t++){
        tagid=l["Tags"][t].slice(0,-1).replace(/^[^a-z]+|[^\w:.-]+/gi,"")
        curtinput.push(l["Tags"][t])
        node=document.getElementById("btn_"+tagid).cloneNode(true);node.id="tag_"+tagid;activetags.appendChild(node)
        s=parseInt(l["Tags"][t].slice(-1))
        if(s==1){document.getElementById("btn_"+tagid).classList.add("include");document.getElementById("tag_"+tagid).classList.add("include")}
        else{document.getElementById("btn_"+tagid).classList.add("exclude");document.getElementById("tag_"+tagid).classList.add("exclude")}
    }FilterItems()}
    if(l["DLC"]){if((l["DLC"]=="Show"&&document.getElementById('srch_dlc').classList.contains('no'))||(l["DLC"]=="Hide"&&!document.getElementById('srch_dlc').classList.contains('no'))){srch_dlc()}}
    if(Object.keys(l).toString()=="Bookmark"){SwapLogic();SwapLogic()}
    if(l["Bookmark"]){
        getcard(l["Bookmark"]);bookmark=l["Bookmark"]
        document.getElementById(l["Bookmark"]).scrollIntoView();window.scrollBy(0,-270)
        document.getElementById(l["Bookmark"]).getElementsByTagName('details')[0].open=true
    }
    document.getElementById('pastebin').value=''
}
// Reset Tag Selection
function ResetTagSelector(){
    curtinput=[];activetags.innerHTML="";document.getElementById('copybin').innerHTML="";nofind.style.display="none"
    if(window.location.href.split('#')[2]){window.location.href=window.location.href.split('#')[0]+'#'+window.location.href.split('#')[2]}
    else if(window.location.href.split('#')[1]&&!specialids.includes(window.location.href.split('#')[1])){window.location.href=window.location.href.split('#')[0]}
    for(t=0;t<tagselect.length;t++){tagselect[t].classList.remove("include");tagselect[t].classList.remove("exclude")}
    for(i=0;i<allit.length;i++){
        allit[i].setAttribute("hide","")
        if(allit[i].hasAttribute("keep")){
            if(allit[i].getAttribute("keep")!="keep"){
                if(allit[i].getAttribute("keep").includes("keeppin")){
                    allit[i].setAttribute("keep"," keeppin")
                }else{
                    allit[i].setAttribute("keep","")
                    allit[i].getElementsByTagName("details")[0].open=false
                }
            }
        }
    }
}
function AddTagSelector(tag){
    tag=tag.split('#')[1];tagid=tag.replace(/^[^a-z]+|[^\w:.-]+/gi,"")
    if(!document.getElementById('srch_dlc').classList.contains('no')||document.getElementById('srch_dlc').classList.contains('no')&&!document.getElementById("btn_"+tagid).closest('.dlc')){
        // STANDARD: RED --> NONE
        if(curtinput.includes(tag+'0')){
            curtinput.splice(curtinput.indexOf(tag+'0'),1)
            document.getElementById("btn_"+tagid).classList.remove("exclude")
            if(document.getElementById("btn_"+tagid+"2")){document.getElementById("btn_"+tagid+"2").classList.remove("exclude")}
            activetags.removeChild(Array.from(activetags.childNodes).find((v)=>v.value=='#'+tag))
        }// STANDARD: GREEN --> RED
        else if(curtinput.includes(tag+'1')){
            curtinput.splice(curtinput.indexOf(tag+'1'),1)
            curtinput.push(tag+'0')
            document.getElementById("btn_"+tagid).classList.remove("include")
            document.getElementById("tag_"+tagid).classList.remove("include")
            document.getElementById("btn_"+tagid).classList.add("exclude")
            document.getElementById("tag_"+tagid).classList.add("exclude")
            if(document.getElementById("btn_"+tagid+"2")){
                document.getElementById("btn_"+tagid+"2").classList.remove("include")
                document.getElementById("btn_"+tagid+"2").classList.add("exclude")
            }
        }// ACTIVATE NEW TAG:
        else{
            document.getElementById("btn_"+tagid).classList.add("include")
            if(document.getElementById("btn_"+tagid+"2")){document.getElementById("btn_"+tagid+"2").classList.add("include")}
            node=document.getElementById("btn_"+tagid).cloneNode(true);node.id="tag_"+tagid;activetags.appendChild(node)
            curtinput.push(tag+'1')
        }FilterItems();if(curtinput.length==0&&document.querySelectorAll('[keep~=keepkey]').length==0){ResetTagSelector()}
    }
}
function AddTagGroup(n){
    AddTagSelector(n);inputs=document.querySelectorAll('#tagselect input[id^="btn"][n*="'+n.split('#')[1]+'"]');stags=[]
    for(i=0;i<inputs.length;i++){if((inputs[i].getAttribute('n').replace('@','').split('#').filter((m)=>m)).includes(n.split('#')[1])){stags.push(inputs[i].value)}}
    for(s=0;s<stags.length;s++){AddTagSelector(stags[s])}
    if(curtinput.length!=0){FilterItems()}
}
function FindTag(){
    var taginput=document.getElementById('findtaginput').value.toLowerCase().replaceAll("'",'’').split(' ').filter(n=>n)
    document.getElementById('findtaglist').innerHTML=""
    if(taginput.length!=0){
        for(t=0;t<taginput.length;t++){taginput[t]=taginput[t].replaceAll("_"," ")}
        for(i=0;i<tagselect.length;i++){check=true
            for(t=0;t<taginput.length;t++){if(tagselect[i].value.includes(taginput[t])&&check){check=true}else{check=false}}
            if(check){
                if(tagselect[i].parentNode.tagName=='BUTTON'){document.getElementById('findtaglist').appendChild(tagselect[i].parentNode.cloneNode(true))}
                else{document.getElementById('findtaglist').appendChild(tagselect[i].cloneNode(true))}
                document.getElementById(tagselect[i].id).id=tagselect[i].id+"2"
            }
        }
    }
}
function FindEle(id,query,specs=false,includeinput=true){
    var taginput=document.getElementById(id).value.toLowerCase().replaceAll("'",'’').split(',').filter(n=>n),sel=document.querySelectorAll(query)
    for(tagi=0;tagi<taginput.length;tagi++){
        taginput[tagi]=taginput[tagi].split(' ').filter(n=>n)
        for(t=0;t<taginput[tagi].length;t++){taginput[tagi][t]=taginput[tagi][t].replaceAll("_"," ").replaceAll("."," ")}
    }
    for(i=0;i<sel.length;i++){

        sel[i].innerHTML=sel[i].innerHTML.replaceAll("<highlt>","").replaceAll("</highlt>","")

        checks=[];kst=sel[i].getAttribute("keep")||""
        if(curtinput.filter(d=>d.slice(-1)=='1').length==0){sel[i].setAttribute("keep",kst.replaceAll(' keeptag',""))}
        sel[i].setAttribute("keep",kst.replaceAll(' keepkey',""))
        if(specs){
            inhtml="";tmp=sel[i].querySelectorAll(specs)
            for(j=0;j<tmp.length;j++){
                inhtml+=tmp[j].innerHTML.replace(/<clp>.*?<\/clp>/,'').replace(/<.*?>/g,"\n").toLowerCase()
            }
        }else{inhtml=sel[i].innerHTML.replace(/<clp>.*?<\/clp>/,'').replace(/<.*?>/g,"\n").toLowerCase()}
        for(tagi=0;tagi<taginput.length;tagi++){
            check=true
            for(t=0;t<taginput[tagi].length;t++){
                if(inhtml.includes(taginput[tagi][t])&&check){
                    check=true;regEx=new RegExp("("+taginput[tagi][t]+")(?!([^<]+)?>)","gi")
                    if(specs){for(j=0;j<tmp.length;j++){tmp[j].innerHTML=tmp[j].innerHTML.replaceAll(regEx,`<highlt>$&</highlt>`,tmp[j].innerHTML)}}
                    else{sel[i].innerHTML=sel[i].innerHTML.replaceAll(regEx,`<highlt>$&</highlt>`,sel[i].innerHTML)}
                }else{check=false}
                if(includeinput){
                    inps=sel[i].querySelectorAll('t input')
                    for(ip=0;ip<inps.length;ip++){if(inps[ip].value.includes(taginput[tagi][t])){
                        check=true
                        wrap=document.createElement('highlt')
                        inps[ip].parentNode.replaceChild(wrap,inps[ip])
                        wrap.appendChild(inps[ip])
                    }}
                }
            }
            checks.push(check)
        }
        if(checks.includes(true)){sel[i].setAttribute("keep",kst+' keepkey')}else{sel[i].setAttribute("keep",kst.replaceAll(' keepkey',""))}
    }
}
function FilterItems(){
    findli=allit.length;red=curtinput.filter(d=>d.slice(-1)=='0');grn=curtinput.filter(d=>d.slice(-1)=='1')
    for(i=0;i<itags.length;i++){
        if(allit[i].getAttribute("keep")=="keep"){continue}
        hst=allit[i].getAttribute("hide")||""
        kst=allit[i].getAttribute("keep")||""
        allit[i].setAttribute("keep",kst.replaceAll(" keepget",""))
        allit[i].getElementsByTagName("details")[0].open=false
        var checks=true,gentag=[]
        for(tag=0;tag<grn.length;tag++){
            listn=document.querySelectorAll('#btn_'+grn[tag].replace(/^[^a-z]+|[^\w:.-]+/gi,"").slice(0,-1))
            if(useorng&&listn[0].hasAttribute('n')){syn=listn[0].getAttribute('n').replace('!','').split('#').filter((m)=>m)}else{syn=[]}
            hasn=[];gentag.push([])
            for(m=0;m<syn.length;m++){
                if(grn.includes(syn[m]+'1')){hasn.push(false)}
                if(listn.length>0){hasn.push(listn[0].hasAttribute('n'))}
                else{hasn.push(false)}
                gentag[tag].push([hasn[m],syn[m]])
            }
        }
        if(logic){any=grn.length;for(tag=0;tag<grn.length;tag++){if(itags[i].indexOf(grn[tag].slice(0,-1))==-1){
            any-=1;hasyn=false
            for(m=0;m<gentag[tag].length;m++){if(gentag[tag][m][0]&&itags[i].indexOf(gentag[tag][m][1])!=-1){hasyn=true}}if(hasyn){any+=1}
        }}if(any<1&&grn.length!=0){checks=false}}
        else{for(tag=0;tag<grn.length;tag++){if(itags[i].indexOf(grn[tag].slice(0,-1))==-1){
            checks=false
            for(m=0;m<gentag[tag].length;m++){if(gentag[tag][m][0]&&itags[i].indexOf(gentag[tag][m][1])!=-1){checks=true}}
        }}}
        for(tag=0;tag<red.length;tag++){if(itags[i].indexOf(red[tag].slice(0,-1))!=-1){checks=false;allit[i].setAttribute('hide',hst+'FilterItems ')}}
        if(checks){
            allit[i].setAttribute('hide',hst.replaceAll("FilterItems ",""))
            allit[i].setAttribute("keep",kst+' keeptag')
            if(genopen&&allit[i].getElementsByTagName("t")[0].innerHTML.includes("#general data")){allit[i].getElementsByTagName("details")[0].open=true}
            alinp=allit[i].querySelectorAll("t input")
            for(inp=0;inp<alinp.length;inp++){
                alinp[inp].style.color=''
                for(tag=0;tag<grn.length;tag++){
                    if(alinp[inp].value=='#'+grn[tag].slice(0,-1)){alinp[inp].style.color="rgb(var(--greenl))"}
                    for(m=0;m<gentag[tag].length;m++){if(alinp[inp].value=='#'+gentag[tag][m][1]&&alinp[inp].style.color!="rgb(var(--greenl))"){alinp[inp].style.color="rgb(var(--orng))"}}
                }
            }
        }
        else{findli-=1;allit[i].setAttribute("keep",kst.replaceAll(" keeptag",""))}
    }if(findli==0){nofind.style.display="block"}else{nofind.style.display="none"}
}
function SwapLogic(){if(logic){lgcbtn.value="ALL";logic=0}else{lgcbtn.value="ANY";logic=1}FilterItems()}
function FocusMode(){if(useorng){useorng=0;modbtn.value="FOCUS"}else{useorng=1;modbtn.value="BROAD"}FilterItems()}
function srch_dlc(){
    document.getElementById('srch_dlc').classList.toggle('no');spoilers=document.querySelectorAll(".dlc")
    if(document.getElementById('srch_dlc').classList.contains('no')){for(d=0;d<spoilers.length;d++){
        spoilers[d].style.opacity=.3;spoilers[d].style.filter="blur(.3em)"
        images=spoilers[d].getElementsByTagName("img");for(i=0;i<images.length;i++){images[i].style.filter="brightness(0)"}
    }}else{for(d=0;d<spoilers.length;d++){
        spoilers[d].style.opacity=1;spoilers[d].style.filter=""
        images=spoilers[d].getElementsByTagName("img");for(i=0;i<images.length;i++){images[i].style.filter=""}
    }}
}
function SelectAll(e){
    allcheck=e.closest("[id]").querySelectorAll("input[type=checkbox]")
    for(u=0;u<allcheck.length;u++){if(e.innerHTML=="Select All"){allcheck[u].checked=false;allcheck[u].click()}else{allcheck[u].checked=true;allcheck[u].click()}}
}
function AddSelector(e){
    ac=[...e.parentElement.closest("[id]").querySelectorAll("input[type=checkbox]")].filter(n=>n.checked)
    for(i=0;i<allit.length;i++){
        hst=allit[i].getAttribute("hide")||""
        var cls=Array.from(allit[i].classList),any=ac.length
        if(allit[i].getAttribute("keep")!="keep"){allit[i].setAttribute("hide",hst+e.parentElement.closest("[id]").id+" ")}
        for(c=0;c<ac.length;c++){if(cls.indexOf(ac[c].id)==-1){any-=1}}
        if(any>0){allit[i].setAttribute("hide",hst.replaceAll(e.parentElement.closest("[id]").id+" ",""))}
    }
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
function fillcalcoutput(id,out){document.getElementById('calcout_'+id).innerHTML=out.toString()}
function conditionaloutput(cond,condT,condF){return cond?condT:condF}
function opencloseall(){if(!allit[0].getElementsByTagName("details")[0].open==true){for(i=0;i<allit.length;i++){allit[i].getElementsByTagName("details")[0].open=true}}else{for(i=0;i<allit.length;i++){allit[i].getElementsByTagName("details")[0].open=false}}}
function changechp(ch){
    [...document.querySelectorAll('*[id^=prevnext]')].map(n=>n&&n.remove())
    for(i=0;i<chlist.length;i++){
        if(chlist[i]==ch){
            document.getElementById(chlist[i].split('#')[1]).style.display='';
            if(i<1){lnks=['',chlist[i+1]]}
            else if(i===chlist.length-1){lnks=[chlist[i-1],'']}
            else{lnks=[chlist[i-1],chlist[i+1]]}
        }
        else{document.getElementById(chlist[i].split('#')[1]).style.display='none'}
    }prevnextnode=document.createElement('div');prevnextnode.id='prevnext';inh='<a href=#'
    if(lnks[0]){inh+=lnks[0].split('#')[1]+' onclick="javascript:changechp(this.href)">&larr;&nbsp;Previous</a>'}
    if(lnks[0]&&lnks[1]){inh+=' &emsp; <a href=#'}
    if(lnks[1]){inh+=lnks[1].split('#')[1]+' onclick="javascript:changechp(this.href)">Next&nbsp;&rarr;</a>'}
    prevnextnode.innerHTML=inh;document.body.insertBefore(prevnextnode,document.body.firstChild)
    node=document.getElementById('prevnext').cloneNode(true);node.id='prevnext2';document.body.appendChild(node)
}
function SortByValue(a,b){return a.value.replace(/^[^a-z]+|[^\w:.-]+/gi,"").localeCompare(b.value.replace(/^[^a-z]+|[^\w:.-]+/gi,""))}