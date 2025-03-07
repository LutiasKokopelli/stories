//@SFOLD: Find Duplicate IDs
allid=document.querySelectorAll('[id]');ids=[];a=''
for(i=0;i<allid.length;i++){l=allid[i].id;if(ids.includes(l)){a+='ID referenced more than once: #'+l+'\n'}else{ids.push(l)}}
// if(!/^[A-Za-z]/.test(l)){a+='Invalid ID not starting with a letter: #'+l+'\n'} // Irrelevant for lore cards
if(a){alert(a)}
