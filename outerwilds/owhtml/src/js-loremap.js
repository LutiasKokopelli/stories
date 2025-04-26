//@SFOLD Variables
curtid=window.location.href.split('#')[1]
if(curtid&&!curtid.startsWith("loremap")&&!specialids.includes(curtid)){getcard(curtid)}
const nofind=document.getElementById("nofind"),
filterlist=document.getElementById("filterlist"),
lgcbtn=document.getElementById('srch_start'),
modbtn=document.getElementById('srch_mode'),
allit=filterlist.getElementsByTagName("it"),
activetags=document.getElementById("activetags"),
tagselect=document.querySelectorAll('#tagselect input'),
allntags=document.querySelectorAll('input[n]')
var curtinput=[],itags=[]
lgcbtn.value="ANY";logic=1
modbtn.value="BROAD";useorng=1
//@EFOLD
// <IT> Make Tag Buttons + URL Button + Keep indicators
for(i=0;i<allit.length;i++){
    itags.push([]);o="";t=allit[i].getElementsByTagName("t")[0].innerHTML.split('#').filter((n)=>n)
    for(j=0;j<t.length;j++){
        itags[itags.length-1].push(t[j].trim())
        o+="<input type=button onclick=AddTagSelector(this.value) value='#"+t[j].trim()+"'> "
    }allit[i].getElementsByTagName("t")[0].innerHTML=o
    if(allit[i].id){
        clpn=document.createElement('clp')
        clpn.innerHTML='<btn onclick=PinCard(this)><msg>Pin/Unpin Card</msg></btn><btn onclick=CopyLinkToClipboard(this) onmouseleave=ResetCopyLink(this)><msg>Copy Card URL</msg></btn>'
        allit[i].appendChild(clpn)
    }
    n2=document.createElement("n")
    n2.innerHTML="<img src=../ast/svg/keyword-search.svg keep=keepkey><img src=../ast/svg/hashtag.svg keep=keeptag><img src=../ast/svg/pinned.svg keep=keeppin onclick=PinCard(this)><img src=../ast/svg/hud_pin.svg keep=keepget>"
    allit[i].appendChild(n2)
}
// List Tags + Button IDs
altgs=[];for(i=0;i<tagselect.length;i++){
    tagselect[i].id="btn_"+tagselect[i].value.replace(/^[^a-z]+|[^\w:.-]+/gi,"")
    altgs.push(tagselect[i].value.split("#")[1])
}
// Create Master Tags
const allmtags=document.querySelectorAll('#tagselect button>m')
for(t=0;t<allmtags.length;t++){
    allmtags[t].setAttribute('onclick','AddTagGroup(this.nextSibling.value)')
    n=allmtags[t].nextSibling.value.split('#')[1];chiltags="This will also toggle the following tags:"
    inputs=Array.from(document.querySelectorAll('input[n*="'+n+'"]')).sort(SortByValue)
    for(i=0;i<inputs.length;i++){if(
        (inputs[i].getAttribute('n').replace('@','').split('#').filter((m)=>m)).includes(n)
    ){chiltags+="\n  • "+inputs[i].value}}
    allmtags[t].setAttribute('title',chiltags)
}
// Show Master Tags + Alert Unlisted Tags
mtg='';for(t=0;t<allntags.length;t++){
    ns=allntags[t].getAttribute('n').replace('!','').split('#').filter((m)=>m).filter(s=>/^[^@]/i.test(s))
    if(ns.length){
        for(n=0;n<ns.length;n++){if(!altgs.includes(ns[n])){mtg+="\n\u30FB"+ns[n]}}
        allntags[t].setAttribute('title','Related tags (will appear in orange):\n  • #'+ns.sort().join("\n  • #"))
    }
}
// Mark Unused Tags
utags=filterlist.querySelectorAll('t>*');uniq=[]
for(i=0;i<utags.length;i++){if(!uniq.includes(utags[i].value)){uniq.push(utags[i].value)}}
for(tag=0;tag<altgs.length;tag++){if(uniq.indexOf('#'+altgs[tag])==-1){tagselect[tag].classList.add('maclude')}}

// Alert Unlisted Tags
for(tag=0;tag<uniq.length;tag++){if(!altgs.includes(uniq[tag].split("#")[1])){mtg+="\n\u30FB"+uniq[tag]}}
if(mtg!=""){window.alert("The following tags are used by some lore cards, but are absent from the list of selectable tags!\n\n"+mtg)}

// Make text box Enter key friendly
document.getElementById("pastebin").addEventListener('keydown',function(e){if(e.key=='Enter'){LoadSearchState(this.value)}})

// Create substitutes to input:after if you are on touchscreen devices
if("ontouchstart"in document.documentElement){
    for(i=0;i<tagselect.length;i++){
        m=tagselect[i].previousSibling
        if(m){if(m.tagName=='M'){
            m.classList.add('infoa')
            infom=document.createElement('span')
            infom.classList.add('infob')
            infom.innerHTML=m.title.replace(/\n/g,'<br>')
            m.appendChild(infom)
        }}
        if(tagselect[i].title){
            if(m){if(m.tagName!='M'){
                var p=tagselect[i].parentNode
                w=document.createElement('span')
                w.classList.add('x')
                w.style.position='relative'
                p.replaceChild(w,tagselect[i]);
                w.appendChild(tagselect[i])
            }}
            infob=document.createElement('span')
            infob.classList.add('infob')
            infob.innerHTML=tagselect[i].title.replace(/\n/g,'<br>')
            tagselect[i].parentNode.insertBefore(infob,tagselect[i].nextSibling)
        }
    }
}