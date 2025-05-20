const specialids=["nodlc","fkno"],
genopen=false

const allrates=document.querySelectorAll('div[class="rating"] input');for(i=0;i<allrates.length;i++){allrates[i].style.width=allrates[i].value}

function decodeHtml(html){
    var txt=document.createElement("textarea")
    txt.innerHTML=html
    return txt.value
}
function styledConsoleLog(){
    var argArray=[]
    if (arguments.length) {
        var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
        var endTagRe = /<\/span>/gi;
        var reResultArray;
        argArray.push(arguments[0].replace(startTagRe, '%c').replace(endTagRe, '%c'));
        while (reResultArray = startTagRe.exec(arguments[0])) {
            argArray.push(reResultArray[2]);
            argArray.push('');
        }
        for (var j = 1; j < arguments.length; j++) { argArray.push(arguments[j]) }
    }console.log.apply(console,argArray);
}
let timeout=null
function toggleTag(e,id){
    d=e.parentElement.parentElement
    d.querySelector('p').style.borderBottom="none"
    for(div of d.querySelectorAll("[id^=tab_]")){
        if(div.id==id&&div.style.display=="none"){
            div.style.display=""
            d.querySelector('p').style.borderBottom="3px solid "+e.style.background
            d.querySelector('p button[onclick="toggleTag(this,'+"'"+div.id+"'"+')"]').classList.add('active')
        }
        else{
            div.style.display="none"
            d.querySelector('p button[onclick="toggleTag(this,'+"'"+div.id+"'"+')"]').classList.remove('active')
        }
    }
}
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
    it=b.parentNode.parentNode;bookmark=it.id
    if(b.tagName=='BTN'){b.getElementsByTagName('msg')[0].innerHTML='URL Copied!'}
    if(it.hasAttribute("keep")){if(it.getAttribute("keep").includes(" keepget")){haskeepget=true}else{haskeepget=false}}else{haskeepget=false}
    for(i of allit){i.setAttribute("keep",(i.getAttribute("keep")||"").replaceAll(" keepget",""))}
    nc=window.location.href.split('#')[0]+"#"+it.id
    if(haskeepget){purl=window.location.href.split('#')[0]}
    else{it.setAttribute("keep",(it.getAttribute("keep")||"")+" keepget");purl=nc}
    if(document.getElementById('show_dlc').classList.contains('no')){nc+='#nodlc';purl=nc}
    navigator.clipboard.writeText(nc)
    window.history.replaceState(null,"",purl)
}
function ResetCopyLink(b){setTimeout(function(){b.getElementsByTagName('msg')[0].innerHTML='Copy Card URL'},300)}
//@EFOLD
// Pin Lore Card
function PinCard(b){
    it=b.parentNode.parentNode
    if(it.hasAttribute("keep")){
        if(it.getAttribute("keep").includes(" keeppin")){it.setAttribute("keep",it.getAttribute("keep").replaceAll(" keeppin",""))}
        else{it.setAttribute("keep",it.getAttribute("keep")+" keeppin")}
    }else{it.setAttribute("keep",it.getAttribute("keep")+" keeppin")}
}
// Find Lore Card By ID
function getcard(id){
    for(it of document.querySelectorAll('#filterlist it')){it.setAttribute("keep",(it.getAttribute("keep")||"").replaceAll(" keepget",""))}
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
// Make Save Point
function CopySearchState(){
    savepoint={}
    if(curtinput.length>0){
        savepoint["Tags"]=curtinput
        if(useorng){savepoint["Mode"]='BROAD'}else{savepoint["Mode"]='FOCUS'}
        if(logic){savepoint["Logic"]='ANY'}else{savepoint["Logic"]='ALL'}
    }
    if(findcardinput.value){savepoint["Search"]=[document.getElementById("keymode").value,findcardinput.value,document.getElementById("chkey_highlight").checked,document.getElementById("chkey_matchcase").checked,document.getElementById("chkey_wholeword").checked]}
    pinl=[];pins=document.querySelectorAll("it[keep~=keeppin]");for(p=0;p<pins.length;p++){pinl.push(pins[p].id)};if(pinl.length){savepoint["Pins"]=pinl}
    if(typeof bookmark!=='undefined'){savepoint["Bookmark"]=bookmark}
    if(window.location.href.includes("/owdoc/")){if(document.getElementById('show_dlc').classList.contains('no')){savepoint["DLC"]="Hide"}else{savepoint["DLC"]="Show"}}
    document.getElementById('copybin').innerHTML="<pre>"+decodeHtml(JSON.stringify(savepoint))+"</pre><clp><btn onclick=CopyCodeToClipboard(this) onmouseleave=ResetCopyCode(this)><msg>Copy</msg></btn></clp>"
    navigator.clipboard.writeText(decodeHtml(JSON.stringify(savepoint)))
}
// Load Save Point
function LoadSearchState(ss){
    ResetState();l=JSON.parse(ss)
    if(l["Pins"]){for(c=0;c<l["Pins"].length;c++){document.getElementById(l["Pins"][c]).setAttribute("keep",document.getElementById(l["Pins"][c]).getAttribute("keep")+" keeppin")}}
    if(l["Mode"]&&l["Mode"]!=modbtn.value){FocusMode()}
    if(l["Logic"]&&l["Logic"]!=lgcbtn.value){SwapLogic()}
    if(l["Search"]){
        document.getElementById('keymode').value=l["Search"][0].replace("&amp;","&")
        findcardinput.value=l["Search"][1].replace("&amp;","&")
        document.getElementById("chkey_highlight").checked=l["Search"][2]
        document.getElementById("chkey_matchcase").checked=l["Search"][3]
        document.getElementById("chkey_wholeword").checked=l["Search"][4]
        GetKeyMode();findcardinput.dispatchEvent(new KeyboardEvent('keyup',{'key':'Enter'}))
    }
    if(l["Tags"]){for(t=0;t<l["Tags"].length;t++){
        tagid=l["Tags"][t].slice(0,-1).replace(/^[^a-z]+|[^\w:.-]+/gi,"")
        curtinput.push(l["Tags"][t])
        node=document.getElementById("btn_"+tagid).cloneNode(true);node.id="tag_"+tagid;activetags.appendChild(node)
        s=parseInt(l["Tags"][t].slice(-1))
        if(s==1){document.getElementById("btn_"+tagid).classList.add("include");document.getElementById("tag_"+tagid).classList.add("include")}
        else{document.getElementById("btn_"+tagid).classList.add("exclude");document.getElementById("tag_"+tagid).classList.add("exclude")}
    }FilterItems()}
    if(l["DLC"]){if((l["DLC"]=="Show"&&document.getElementById('show_dlc').classList.contains('no'))||(l["DLC"]=="Hide"&&!document.getElementById('show_dlc').classList.contains('no'))){SearchDLC()}}
    if(Object.keys(l).toString()=="Bookmark"){SwapLogic();SwapLogic()}
    if(l["Bookmark"]){
        getcard(l["Bookmark"]);bookmark=l["Bookmark"]
        document.getElementById(l["Bookmark"]).scrollIntoView();window.scrollBy(0,-270)
        document.getElementById(l["Bookmark"]).getElementsByTagName('details')[0].open=true
    }
    document.getElementById('pastebin').value=''
}
// Reset Tag Selection
function ResetState(){
    curtinput=[];activetags.innerHTML="";document.getElementById('copybin').innerHTML="";document.getElementById('findtaglist').innerHTML=""
    document.getElementById('findtaginput').value="";document.getElementById('findcardinput').value=""
    if(window.location.href.split('#')[2]){purl=window.location.href.split('#')[0]+'#'+window.location.href.split('#')[2]}
    else if(window.location.href.split('#')[1]&&!specialids.includes(window.location.href.split('#')[1])){purl=window.location.href.split('#')[0]}
    else{purl=window.location.href.split('#')[0]}
    window.history.replaceState(null,"",purl)
    for(t=0;t<tagselect.length;t++){tagselect[t].classList.remove("include");tagselect[t].classList.remove("exclude")}
    for(i=0;i<allit.length;i++){
        allit[i].setAttribute("hide","")
        if(allit[i].hasAttribute("keep")){
            if(allit[i].getAttribute("keep")!="keep"){
                if(allit[i].getAttribute("keep").includes("keeppin")){allit[i].setAttribute("keep"," keeppin")}
                else{allit[i].setAttribute("keep","");allit[i].getElementsByTagName("details")[0].open=false}
            }
        }
    }
}
function AddTagSelector(tag){
    tag=tag.split('#')[1];tagid=tag.replace(/^[^a-z]+|[^\w:.-]+/gi,"")
    if(!document.getElementById('show_dlc').classList.contains('no')||document.getElementById('show_dlc').classList.contains('no')&&!document.getElementById("btn_"+tagid).closest('.dlc')){
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
        }FilterItems()
    }
}
function AddTagGroup(n){
    AddTagSelector(n);inputs=document.querySelectorAll('#tagselect input[id^="btn"][n*="'+n.split('#')[1]+'"]');stags=[]
    for(i=0;i<inputs.length;i++){if((inputs[i].getAttribute('n').replace('@','').split('#').filter((m)=>m)).includes(n.split('#')[1])){stags.push(inputs[i].value)}}
    for(s=0;s<stags.length;s++){AddTagSelector(stags[s])}
    if(curtinput.length!=0){FilterItems()}
}
function FindTag(){
    var taginput=document.getElementById('findtaginput').value.toLowerCase().replaceAll("'",'’').split(' ').filter(n=>n),tlst=document.getElementById('findtaglist')
    tlst.innerHTML=""
    if(taginput.length!=0){for(i=0;i<tagselect.length;i++){check=true
        for(t=0;t<taginput.length;t++){if(tagselect[i].value.includes(taginput[t])&&check){check=true}else{check=false}}
        if(check){
            if(tagselect[i].parentNode.tagName=='BUTTON'){tlst.appendChild(tagselect[i].parentNode.cloneNode(true))}
            else{tlst.appendChild(tagselect[i].cloneNode(true))}
            tlst.querySelector("#"+tagselect[i].id).id=tagselect[i].id+"2"
        }
    }}
}
function FindEle(id,query,specs=false,includeinput=true){
    // INPUT EXAMPLE:       xxx & yyy ; aaa & !bbb & ccc ; 111 & 222 & 333
    // INPUT EXAMPLE:       (xx + yy) | (aa & !bbb & cc) | (11 & 222 & 33)
    highlight=document.getElementById("chkey_highlight").checked
    matchcase=document.getElementById("chkey_matchcase").checked
    wholeword=document.getElementById("chkey_wholeword").checked
    styledConsoleLog("<span style='font-size:3em'>Launched function FindEle: Search by User-input keywords</span>\nSearch Mode: "+document.getElementById('keymode').value)
    var taginput=document.getElementById(id).value.replaceAll("'",'’').split(/[;,|]+/).filter(n=>n),sel=document.querySelectorAll(query)
    for(tagi=0;tagi<taginput.length;tagi++){
        if(!matchcase){taginput[tagi]=taginput[tagi].toLowerCase()}
        taginput[tagi]=taginput[tagi].replaceAll('(','').replaceAll(')','').split(/[&+]+/).filter(n=>n.trim().length>2)
        for(t=0;t<taginput[tagi].length;t++){taginput[tagi][t]=taginput[tagi][t].trim()}
    }for(s of sel){
        logger="--------------------------------------------\nLORE CARD: #"+s.id+"\n--------------------------------------------"
        s.innerHTML=s.innerHTML.replaceAll("<highlt>","").replaceAll("</highlt>","")
        kst=s.getAttribute("keep")||""
        if(curtinput.filter(d=>d.slice(-1)=='1').length==0){s.setAttribute("keep",kst.replaceAll(' keeptag',""))}
        s.setAttribute("keep",kst.replaceAll(' keepkey',""))
        if(specs){
            inhtml="";tmp=s.querySelectorAll(specs)
            for(j of tmp){inhtml+=decodeHtml(j.innerHTML.replace(/<clp>.*?<\/clp>/,'').replace(/<.*?>/g,"\n"))}
        }else{inhtml=decodeHtml(s.innerHTML.replace(/<clp>.*?<\/clp>/,'').replace(/<.*?>/g,"\n"))}
        if(!matchcase){inhtml=inhtml.toLowerCase()}
        matrix=[]
        for(tagi of taginput){
            matrix.push([])
            for(t of tagi){
                isok=[] // isok = [ t_is_allowed, t_is_present ]
                if(t.startsWith("!")){isok.push(false);t=t.slice(1).trim()}else{isok.push(true)}
                found=false
                if(includeinput){
                    inps=s.querySelectorAll('t input')
                    for(ip of inps){
                        if(wholeword){test=new RegExp("\\b"+t+"\\b").test(ip.value)}else{test=ip.value.includes(t)}
                        if(test){found=true;if(isok[0]&&highlight){wrap=document.createElement('highlt');ip.parentNode.replaceChild(wrap,ip);wrap.appendChild(ip)}}
                    }
                }
                if(wholeword){test=new RegExp("\\b"+t+"\\b").test(inhtml)}else{test=inhtml.includes(t)}
                if(test){
                    found=true
                    if(isok[0]){
                        if(wholeword){t="\\b"+t+"\\b"}
                        if(matchcase){regEx=new RegExp("("+t+")(?!([^<]+)?>)","g")}
                        else{regEx=new RegExp("("+t+")(?!([^<]+)?>)","gi")}
                        if(specs){for(j of tmp){
                            if(highlight){j.innerHTML=decodeHtml(j.innerHTML).replaceAll(regEx,`<highlt>$&</highlt>`,j.innerHTML)}
                            fix=j.querySelectorAll(".calc")
                            if(fix){for(f=0;f<fix.length;f++){fix[f].innerHTML=fix[f].innerHTML.replaceAll("<highlt>","").replaceAll("</highlt>","")}}
                        }}else{
                            if(highlight){s.innerHTML=decodeHtml(s.innerHTML).replaceAll(regEx,`<highlt>$&</highlt>`,s.innerHTML)}
                            fix=s.querySelectorAll(".calc")
                            if(fix){for(f=0;f<fix.length;f++){fix[f].innerHTML=fix[f].innerHTML.replaceAll("<highlt>","").replaceAll("</highlt>","")}}
                        }
                    }
                }isok.push(found);isok.push(t);matrix[matrix.length-1].push(isok)
            }
        }
        checks=[]
        for(mat of matrix){
            logger+='\n* Option "'+taginput[matrix.indexOf(mat)].join('" & "')+'"';verdict=0
            for(m of mat){ // m = [ is_allowed, is_present ]
                logger+="\n"
                if(m[0]&&m[1]){verdict+=1;logger+="✔️"}
                else if((m[0]&&!m[1])||(!m[0]&&m[1])){verdict=-1;logger+="❌  "+m[2]+"\t — Search aborted.";break}
                else{logger+="➖"}logger+="  "+m[2]
            }
            logger+="\n* Final verdict: "
            if(verdict>0){logger+='<span style="background:darkgreen;padding:3px;border-radius:.5em"> Must Show! </span>'}
            else{logger+='<span style="background:darkred;padding:3px;border-radius:.5em"> Must Hide! </span>'}
            logger+='\n--------------------------------------------'
            checks.push(verdict>0)
        }
        if(checks.includes(true)){if(s.getAttribute("keep")!="keep"){s.setAttribute("keep",kst+' keepkey');logger+='\n<span style="background:mediumseagreen;color:black;font-size:1.5em;padding:3px;border-radius:.5em"> Lore card #'+s.id+' will be shown. </span>'}}
        else{s.setAttribute("keep",kst.replaceAll(' keepkey',""));logger+='\n<span style="background:crimson;color:black;font-size:1.5em;padding:3px;border-radius:.5em"> Lore card #'+s.id+' will be hidden. </span>'}
        styledConsoleLog(logger)
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
    }
}
function SwapLogic(){if(logic){lgcbtn.value="ALL";logic=0}else{lgcbtn.value="ANY";logic=1}FilterItems()}
function FocusMode(){if(useorng){useorng=0;modbtn.value="FOCUS"}else{useorng=1;modbtn.value="BROAD"}FilterItems()}
function SearchDLC(){
    document.getElementById('show_dlc').classList.toggle('no');spoilers=document.querySelectorAll(".dlc")
    if(document.getElementById('show_dlc').classList.contains('no')){for(d=0;d<spoilers.length;d++){
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
function timestamp2num(t){
    v=t.match(/(\d[\d\.]*)/g)
    if(v.length>2){return v[0]*3600+v[1]*60+v[2]*1}else{return(v[0]*60+v[1]*1)}
}
function fillcalcoutput(id,out){document.getElementById('calcout_'+id).innerHTML=out.toString()}
function conditionaloutput(cond,condT,condF){return cond?condT:condF}
function OpenClose(){
    if(!allit[0].getElementsByTagName("details")[0].open==true){for(i=0;i<allit.length;i++){allit[i].getElementsByTagName("details")[0].open=true}}
    else{for(i=0;i<allit.length;i++){allit[i].getElementsByTagName("details")[0].open=false}}
    if(typeof bookmark!=='undefined'){document.getElementById(bookmark).scrollIntoView()}
}
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