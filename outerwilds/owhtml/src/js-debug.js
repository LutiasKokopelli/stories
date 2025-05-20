//@SFOLD: Find Duplicate IDs
allid=document.querySelectorAll('[id]');ids=[];a=''
for(d of allid){l=d.id;if(ids.includes(l)){a+='ID referenced more than once: #'+l+'\n'}else{ids.push(l)}}
// if(!/^[A-Za-z]/.test(l)){a+='Invalid ID not starting with a letter: #'+l+'\n'} // Irrelevant for lore cards
if(a){alert(a)}
for(tit of document.querySelectorAll('it[wip]')){tit.getElementsByTagName('details')[0].open=true}