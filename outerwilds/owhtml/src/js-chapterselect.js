chlist=[];l=document.links;for(i=0;i<l.length;i++){if(l[i].href.replace(window.location.pathname,'').replace('https://','').replace('http://','').replace('file://','').replace('lutiaskokopelli.github.io','').startsWith('#')){chlist.push(l[i].href)}}curtchp=window.location.href.split('#')[1];if(curtchp){changechp(window.location.href)}
