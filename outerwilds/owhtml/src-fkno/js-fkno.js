//@SFOLD AU List
aus={
// "arkau":{"Name":"Arkose’s universe","img":"chr_hea_arkose"},
// "cheau":{"Name":"Chert’s universe","img":"chr_hea_chert"},
// "eskau":{"Name":"Esker’s universe","img":"chr_hea_esker"},
// "felau":{"Name":"Feldspar’s universe","img":"chr_hea_feldspar"},
"firau":{"Name":"Firn’s universe","img":"chr_hea_firn"},
"gabau":{"Name":"Gabbro’s universe","img":"chr_hea_gabbro"},
// "galau":{"Name":"Galena’s universe","img":"chr_hea_galena"},
// "gneau":{"Name":"Gneiss’ universe","img":"chr_hea_gneiss"},
// "gosau":{"Name":"Gossan’s universe","img":"chr_hea_gossan"},
"halau":{"Name":"Hal’s universe","img":"chr_hea_hal"},
// "horau":{"Name":"Hornfels’ universe","img":"chr_hea_hornfels"},
// "marau":{"Name":"Marl’s universe","img":"chr_hea_marl"},
// "micau":{"Name":"Mica’s universe","img":"chr_hea_mica"},
// "morau":{"Name":"Moraine’s universe","img":"chr_hea_moraine"},
// "porau":{"Name":"Porphy’s universe","img":"chr_hea_porphy"},
// "rieau":{"Name":"Riebeck’s universe","img":"chr_hea_riebeck"},
// "rutau":{"Name":"Rutile’s universe","img":"chr_hea_rutile"},
// "slaau":{"Name":"Slate’s universe","img":"chr_hea_slate"},
// "spiau":{"Name":"Spinel’s universe","img":"chr_hea_spinel"},
// "tekau":{"Name":"Tektite’s universe","img":"chr_hea_tektite"},
// "tepau":{"Name":"Tephra’s universe","img":"chr_hea_tephra"},
// "tufau":{"Name":"Tuff’s universe","img":"chr_hea_tuff"},
"vanau":{"Name":"Vanilla universe","img":"chr_eye"},
}
//@EFOLD
//@SFOLD Character Ages in Hearthian Seconds
adta={
"Tektite":1763316483,
"Spinel":1676089229,
"Gneiss":1653080632,
"Rutile":1447300936,
"Esker":1184099129,
"Gossan":1085138092,
"Feldspar":1060993177,
"Slate":1055826408,
"Hornfels":1034132675,
"Porphy":985527679,
"Chert":968441027,
"Gabbro":885983647,
"Riebeck":672117821,
"Tuff":636600644,
"Marl":587938134,
"Hal":475178332,
"Firn":475129222,
"Arkose":326026259,
"Moraine":302218167,
"Mica":280722971,
"Tephra":235619769,
"Galena":233207689,
}
// Do not add here characters who don’t exist in all universes. Update the adta variable in the HTML or JS files dedicated to the AUs they are exclusive to.
//@EFOLD
//@SFOLD General Functions
function Float2HumanTime(f,offset){
    f=(f-offset)*864
    h=Math.floor(f/36)
    m=Math.floor((f-h*36)/.6)
    if(h>=24){h-=24}
    return h.toString().padStart(2,"0")+':'+m.toString().padStart(2,"0")
}
//@EFOLD
//@SFOLD Van!AU HEA Calendar Functions
function VanHEAdate2secs(d){
    [yer,wek,day,sun,min,sec]=d.split(/[/ds\s:]+/)
    return yer*24472800+(wek-1)*1108800+(day-1)*79200+(sun-1)*3600+min*60+sec*1
}
function VanHEAsecs2time(a){
    a=Math.abs(a)
    y=Math.floor(a/24472800)
    w=Math.floor((a-y*24472800)/1108800)
    d=Math.floor((a-y*24472800-w*1108800)/79200)
    s=Math.floor((a-y*24472800-w*1108800-d*79200)/3600)
    m=Math.floor((a-y*24472800-w*1108800-d*79200-s*3600)/60)
    t=a-y*24472800-w*1108800-d*79200-s*3600-m*60
    return[y,w,d,s,m,t]
}
function VanHEAs2age(a,full=false){
    [y,w,d,s,m,t]=VanHEAsecs2time(a);out=''
    out+=y.toString()+'y '
    if(!full){out+='& ~'+Math.floor((w*1108800+d*79200+s*3600+m*60+t)/244728).toString()+'%';return(out)}
    if(w>0){out+=w.toString()+'w '}
    if(d>0){out+=d.toString()+'d '}
    if(full){
        if(s>0){out+=s.toString()+'sun '}
        if(m>0){out+=m.toString()+'min '}
        if(t>0){out+=t.toString()+'sec'}
    }
    return(out)
}
function VanHEAs2date(a){
    [y,w,d,s,m,t]=VanHEAsecs2time(a)
    return y.toString()+'/'+(w+1).toString().padStart(2,"0")+' '+(d+1).toString().padStart(2,"0")+'d'+(s+1).toString().padStart(2,"0")+'s '+m.toString().padStart(2,"0")+':'+t.toString().padStart(2,"0")
}
function VanHEACircadian(d){
    [yer,wek,day,sun,min,sec]=d.split(/[/ds\s:]+/)
    return((sun-1)*3600+min*60+sec*1)/79200+.5
}
VanHEA2HumanOffset=.25
//@EFOLD
//@SFOLD Hal!AU HEA Calendar Functions
function HalHEAdate2secs(d){
    [yer,mon,day,hou,min,sec]=d.split(/[/\s:]+/)
    return yer*31104000+(mon-1)*2592000+(day-1)*86400+(hou-1)*3600+min*60+sec*1
}
function HalHEAsecs2time(a){
    a=Math.abs(a)
    y=Math.floor(a/31104000)
    w=Math.floor((a-y*31104000)/2592000)
    d=Math.floor((a-y*31104000-w*2592000)/86400)
    s=Math.floor((a-y*31104000-w*2592000-d*86400)/3600)
    m=Math.floor((a-y*31104000-w*2592000-d*86400-s*3600)/60)
    t=a-y*31104000-w*2592000-d*86400-s*3600-m*60
    return[y,w,d,s,m,t]
}
function HalHEAs2age(a,full=false){
    [y,w,d,s,m,t]=HalHEAsecs2time(a);out=''
    out+=y.toString()+'y '
    if(!full){out+='& ~'+Math.floor((w*2592000+d*86400+s*3600+m*60+t)/244728).toString()+'%';return(out)}
    if(w>0){out+=w.toString()+'w '}
    if(d>0){out+=d.toString()+'d '}
    if(full){
        if(s>0){out+=s.toString()+'h '}
        if(m>0){out+=m.toString()+'min '}
        if(t>0){out+=t.toString()+'sec'}
    }
    return(out)
}
function HalHEAs2date(a){
    [y,w,d,s,m,t]=HalHEAsecs2time(a)
    return y.toString()+'/'+(w+1).toString().padStart(2,"0")+'/'+(d+1).toString().padStart(2,"0")+' '+(s+1).toString().padStart(2,"0")+':'+m.toString().padStart(2,"0")+':'+t.toString().padStart(2,"0")
}
//@EFOLD

//@SFOLD (Debug tests)
// pairdates=[
//     ["2001/01 01d01s 00:00","2001/01 14d22s 59:59"],["2001/01 01d01s 00:00","2001/23 01d22s 59:59"],["2001/23 01d22s 59:59","2002/01 01d01s 00:00"],
//     // ["2019/02/29 22:59:58","2019/02/30 00:00:00"]
// ]
// funchoice="VanHEA"
// for(pair of pairdates){
//     delays=window[funchoice+"date2secs"](pair[1])-window[funchoice+"date2secs"](pair[0])
//     delaya=window[funchoice+"s2age"](delays,full=true)
//     console.log("BEFORE: "+pair[0]+"\nAFTER:  "+pair[1]+"\nDELAY (s):    "+delays.toString()+"\nDELAY (age):  "+delaya)
// }
//@EFOLD



// Alternate JSON object idea to define all calendars?
// all_calendars={
// 	"VanHEA":[
// 		(<smallest_unit_name>,<duration_in_human_seconds>,<either_single_number_if_constant_amount_of_this_unit_inside_the_next_one_or_list_of_possible_names_until_periodicity>)
// 	],
// }



//@SFOLD Build Calendar
function filltable(clock){
    table.innerHTML="<tr><th></th><th>Event</th><th width=300px>Date</th><th>Ages</th></tr>"
    tr=document.createElement('tr');table.appendChild(tr);td=document.createElement('td');td.setAttribute('colspan','9');tr.appendChild(td)
    for(const c of charlist){
        // Character Birthday
        if(c.endsWith('s')){titl='’ birth'}else{titl='’s birth'}
        cdta[c+titl]={"Date":window[clock+"s2date"](window[clock+"date2secs"](eyemo)-adta[c]),"Tags":"#"+c.toLowerCase()+" #birthday","Image":'<img src=../ast-fkno/ico/chr_hea_'+c.toLowerCase()+'.png>'}
        // Tag selection buttons
        document.querySelector(".tagcategory").innerHTML+="<input value=#"+c.toLowerCase()+" style='background-image:url(../ast-fkno/ico/ico_hea_"+c.toLowerCase()+".png);background-position:-12px -6px;padding-left:39px'type=button onclick=AddTagSelector(this)>"
    }
    for(const[k,v]of Object.entries(cdta)){
        newtr=document.createElement('tr');newtr.setAttribute('id',k.replace(/^[^a-z]+|[^\w:.-]+/gi, "")+'-@-'+window[clock+"date2secs"](v["Date"]).toString());table.appendChild(newtr)
        newtd0=document.createElement('td');newtd1=document.createElement('td');newtd2=document.createElement('td');newtd3=document.createElement('td')
        newtr.setAttribute("onclick","MeasureDistance(this,'"+clock+"')")
        // First image
        if("Image"in v){newtd0.innerHTML=v["Image"]}
        else{newtd0.innerHTML=""}
        // Lore Map link
        if("LoreID"in v){newtd1.innerHTML='<a href=loremap.html#'+v["LoreID"]+' target=_blank>'+k}else{newtd1.innerHTML=k}
        // Date
        newtd2.innerHTML=v["Date"]
        ago=window[clock+"date2secs"](tloop)-window[clock+"date2secs"](v["Date"])
        newtd2.innerHTML+="<br>("+window[clock+"s2age"](ago)
        newtd2.setAttribute("title",window[clock+"s2age"](ago,full=true)+' ago')
        if(ago>0){newtd2.innerHTML+=" ago"}else if(ago==0){newtd2.innerHTML+="Time Loop Start"}else{newtd2.innerHTML+=" after Time Loop"}newtd2.innerHTML+=")"

        //@SFOLD Human Circadian Rhythm Equivalent (24h Clock)
        newtd2.innerHTML+='<br>';humaneq=document.createElement('div');newtd2.appendChild(humaneq);humaneq.innerHTML="<p>Human clock:</p>"
        clockvas=document.createElement('canvas');clockvas.classList.add('clock')
        circa=window[clock+"Circadian"](v["Date"])
        clockvas.height=60
        clockvas.width=60
        ctx=clockvas.getContext("2d")
        ctx.translate(clockvas.width/2,clockvas.height/2)
        ctx.beginPath();ctx.arc(0,0,clockvas.height/2,0,Math.PI,true);ctx.fillStyle="rgb(255,167,104)";ctx.fill();ctx.closePath()
        ctx.beginPath();ctx.arc(0,0,clockvas.height/2,0,Math.PI);ctx.fillStyle="rgb(50,128,255)";ctx.fill();ctx.closePath()
        for(i=0;i<24;i++){
            ctx.beginPath()
            ctx.moveTo(Math.cos(i/12*Math.PI)*clockvas.height/2.5,Math.sin(i/12*Math.PI)*clockvas.height/2.5)
            ctx.lineTo(Math.cos(i/12*Math.PI)*clockvas.height/2,Math.sin(i/12*Math.PI)*clockvas.height/2)
            ctx.closePath();ctx.strokeStyle="#000";ctx.stroke()
        }
        ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,clockvas.height/2.2,
            2*Math.PI*(circa-.015),
            2*Math.PI*(circa+.015))
        ctx.closePath();ctx.fillStyle="white";ctx.fill();ctx.strokeStyle="black";ctx.stroke()
        humaneq.appendChild(clockvas)
        humclo=document.createElement('span');humclo.innerHTML=Float2HumanTime(circa,window[clock+"2HumanOffset"]);humaneq.appendChild(humclo)
        //@EFOLD

        // Character ages
        ages='';for(c of charlist){
            if(c+"’s birth"in cdta){akey=c+"’s birth"}else if(c+"’ birth"in cdta){akey=c+"’ birth"}
            a=window[clock+"date2secs"](v["Date"])-window[clock+"date2secs"](cdta[akey]["Date"])
            if(a>0){
                ages+='<card title="'+window[clock+"s2age"](a,full=true)+'">'
                if(agecol=='img'){ages+='<img src=../ast-fkno/ico/ico_hea_'+c+'.png>'}else{ages+=c+': '}
                ages+=window[clock+"s2age"](a)+'</card>'
            }
        }newtd3.innerHTML=ages
        // Color, Append, Tags
        if("Color"in v){newtd0.style.background=v['Color'];newtd1.style.background=v['Color'];newtd2.style.background=v['Color'];newtd3.style.background=v['Color']}
        newtr.appendChild(newtd0);newtr.appendChild(newtd1);newtr.appendChild(newtd2);newtr.appendChild(newtd3)
        tags=v["Tags"].split('#').map(item=>item.trim()).filter(n=>n);v["Tags"]=tags
    }
    const tagselect=document.querySelectorAll('div[id="tagselect"] input');for(t of tagselect){t.id="btn_"+t.value.replace(/^[^a-z]+|[^\w:.-]+/gi, "").slice(1)};var curtinput=[]
    // SET CHRONOLOGICAL ORDER
    const elements=[...document.querySelectorAll('tr:has(td:nth-child(3))')]
    elements.sort((elementA,elementB)=>{
        const[firstElement,secondElement]=true?[elementA,elementB]:[elementB,elementA]
        return new Intl.Collator(undefined,{numeric:true,sensitivity:'base'}).compare(firstElement.id.split('-@-')[1],secondElement.id.split('-@-')[1])
    }).forEach(element=>table.appendChild(element))
    tr=document.createElement('tr');table.appendChild(tr);td=document.createElement('td');td.setAttribute('colspan','9');tr.appendChild(td)
}
function MeasureDistance(ele,clock){
    ele.setAttribute("keep","keep1")
    tds=ele.getElementsByTagName("TD")
    dl.push([tds[1].innerText,tds[2].innerHTML.split('<br>')[0],ele])
    mes=document.getElementById('measures')
    if(dl.length<2){
        mes.innerHTML+="» “<b style=color:rgb(var(--orng))>"+dl[0][0]+"</b>” selected. Click on another event to compare how much time separates them..."
    }
    else{
        if(dl.length>2){dl[0][2].removeAttribute("keep");dl=[dl[1],dl[2]]}
        dl[1][2].setAttribute("keep","keep1")
        dl[0][2].setAttribute("keep","keep2")
        o="<br>» “<b style=color:rgb(var(--orng))>"+dl[0][0]+"</b>” occurred <b style=color:rgb(var(--greenl))>"
        dif=window[clock+"date2secs"](dl[0][1])-window[clock+"date2secs"](dl[1][1])
        if(dif>0){
            mes.innerHTML+=o+window[clock+"s2age"](dif,full=true)+"</b> after “<b style=color:rgb(var(--orng))>"+dl[1][0]+"</b>”"
        }else if(dif<0){
            mes.innerHTML+=o+window[clock+"s2age"](-dif,full=true)+"</b> before “<b style=color:rgb(var(--orng))>"+dl[1][0]+"</b>”"
        }
    }
}
//@EFOLD


//@SFOLD Other (compare with human seconds & in-game)
// 1 day = 22 sunrises (55px for large scale)
// 1 Hearthian year = 327.31 human days.

const GMtime=t=>{const time={m:('00'+Math.trunc(t/60)).slice(-2),s:('00'+Math.round(t)%60).slice(-2)};return Object.entries(time).map(([key,val])=>`${val}:`).join('').slice(0,-1)},
weekoffset=46905
function HMsecs2THtime(t){
    HMseconds=t+weekoffset
    nbdays=Math.trunc(1+HMseconds/(22*416))
    nbsuns=Math.trunc(1+(HMseconds-22*nbdays)/416)%22
    nbmins=Math.trunc((HMseconds-416*22*Math.trunc(HMseconds/(22*416))-416*(Math.trunc((HMseconds-22*nbdays)/416)%22))/416*60)
    if(nbmins>59){nbmins-=60;nbsuns+=1}
    nbsecs=Math.round((HMseconds-(nbdays-1)*22*416-(nbsuns-1)*416-nbmins*416/60)/(416/3600))
    return(('00'+nbdays).slice(-2)+'d'+('00'+nbsuns).slice(-2)+'s '+('00'+nbmins).slice(-2)+':'+('00'+nbsecs).slice(-2))
}
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
//@EFOLD