// Variables
curtid=window.location.href.split('#')[1]
if(curtid&&!curtid.startsWith("loremap")&&!specialids.includes(curtid)){getcard(curtid)}
const nofind=document.getElementById("nofind"),
filterlist=document.getElementById("filterlist"),
lgcbtn=document.getElementById('srch_start'),
modbtn=document.getElementById('srch_mode'),
allit=filterlist.getElementsByTagName("it"),
activetags=document.getElementById("activetags"),
tagselect=document.querySelectorAll('#tagselect input')
var curtinput=[],itags=[]
lgcbtn.value="ANY";logic=1
modbtn.value="BROAD";useorng=1

// <IT> Make Tag Buttons + Hide + URL Button
for(i=0;i<allit.length;i++){
    itags.push([]);o="";t=allit[i].getElementsByTagName("t")[0].innerHTML.split('#').filter((n)=>n)
    for(j=0;j<t.length;j++){
        itags[itags.length-1].push(t[j].trim())
        o+="<input type=button onclick=AddTagSelector(this.value) value='#";if(t[j].trim()=='keep'){o+="keep'style=display:none>"}else{o+=t[j].trim()+"'> "}
    }allit[i].getElementsByTagName("t")[0].innerHTML=o
    if(!allit[i].getElementsByTagName('details')[0].open==true){allit[i].style.display='none'}
    if(allit[i].id){node=document.createElement('clp');node.innerHTML='<btn onclick=CopyLinkToClipboard(this) onmouseleave=ResetCopyLink(this)><msg>Copy Card URL</msg></btn>';allit[i].appendChild(node)}
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
    for(i=0;i<inputs.length;i++){if((inputs[i].getAttribute('n').split('#').filter((m)=>m)).includes(n)){chiltags+="\n  • "+inputs[i].value}}
    allmtags[t].setAttribute('title',chiltags)
}
// Show Master Tags
const allntags=document.querySelectorAll('input[n]')
for(t=0;t<allntags.length;t++){ns=allntags[t].getAttribute('n').replace('!','').split('#').filter((m)=>m);chiltags='Related tags (will appear in orange):\n  • #'+ns.sort().join("\n  • #");allntags[t].setAttribute('title',chiltags)}
// Mark Unused Tags
utags=filterlist.querySelectorAll('t>*');uniq=[]
for(i=0;i<utags.length;i++){if(!uniq.includes(utags[i].value)){uniq.push(utags[i].value)}}
for(tag=0;tag<altgs.length;tag++){if(uniq.indexOf('#'+altgs[tag])==-1){tagselect[tag].classList.add('maclude')}}

// Alert Unlisted Tags (Lore maps & calendars)
mtg='';for(tag=0;tag<uniq.length;tag++)altgs.includes(uniq[tag].split('#')[1])||(mtg+='\n・'+uniq[tag])
''!=mtg&&window.alert('The following tags are used by some lore cards, but are absent from the list of selectable tags!\n\n'+mtg)

// Make text box Enter key friendly
document.getElementById("pastebin").addEventListener('keydown',function(e){if(e.key=='Enter'){LoadSearchState(this.value)}})



// Put all in one column automatically
onecol=true
if(onecol){filterlist.style.maxWidth="800px"}else{filterlist.style.maxWidth=""}
onecol=!onecol










// Create substitutes to input::after if you are on mobile devices
if("ontouchstart"in document.documentElement){
    for(i=0;i<tagselect.length;i++){
        if(tagselect[i].title){
            console.log(tagselect[i].title)
            console.log(tagselect[i].title.replace('•','<br>•'))
            infob=document.createElement('span')
            infob.classList.add('infob')
            infob.innerHTML=tagselect[i].title.replace('•','<br>•')//.replace('\n','<br>')
            tagselect[i].parentNode.insertBefore(infob,tagselect[i].nextSibling)
        }
    }
}
