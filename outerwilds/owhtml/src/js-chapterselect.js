var chlist=[],l=document.links;for(i=0;i<l.length;i++){
    // if(/^(ch[0-9]*)$/.test(l[i].href.split('#')[1])||/^(ch[0-9]*_[0-9]*)$/.test(l[i].href.split('#')[1])||/^(int_[0-9]*)$/.test(l[i].href.split('#')[1])){chlist.push(l[i].href.split('#')[1])}
    if(l[i].href.replace(window.location.pathname,'').replace('https://','').replace('http://','').replace('file://','').startsWith('#')){chlist.push('#'+l[i].href.split('#')[1])}
}curtchp=window.location.href.split('#')[1];if(curtchp){changechp('#'+curtchp)}