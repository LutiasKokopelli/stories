const
tloop="2001/01 06d03s 45:09",
eyemo="2001/02 11d13s 22:34"

/*
.   A Hearthian date is in the shape of YYYY/[01-22] [01-14]d           or YYYY/23 01d for Interday only
.   For getting in Excel a week & day number that isn’t an interday:
.   =ALEA.ENTRE.BORNES(1,22)
.   =ALEA.ENTRE.BORNES(1,14)
.   =CONCATENER(A1,",",A2,"]")
*/
cdta={/*
.   "TITLE":{"Date":"YYYY/WW DDdSSs MM:SS","Tags":"#"},
.   Required:
.       "Date": "YYYY/WW DDdSSs MM:SS"
.       "Tags": "#TAG1 #TAG2 #..."
.   Optional:
.       "Color":"rgba(var(--goldd),.2)",
.       "Image":"<img src=../ast-fkno/ico/chr_hea_firn.png>"
.       "LoreID":"ID name of the corresponding card from the FKNO lore map"
*/
//@SFOLD NOMAI TIME
"Interloper Core Exploded":{"Date":"-279042/21 12d08s 22:31","Tags":"#ghost matter #interloper #nomai"},
//@EFOLD



"Ghost Matter Incident":{"Date":"1971/08 02d04s 32:45","Tags":"#ghost matter #tektite #spinel #gneiss #rutile #esker #gossan #feldspar #slate #hornfels #porphy #chert #gabbro","LoreID":"30yroGMincident"},

"Feldspar’s First Launch":{"Date":"1974/13 12d04s 50:12","Tags":"#feldspar #outer wilds ventures #launch"},
"Gossan’s First Launch":{"Date":"1974/18 01d02s 12:45","Tags":"#gossan #outer wilds ventures #launch"},
// Esker’s First Launch
"Feldspar’s 1st trip to the Attlerock":{"Date":"1977/01 13d03s 01:32","Tags":"#feldspar #outer wilds ventures #launch #attlerock"},
// Esker launches to the Attlerock
"Feldspar’s 2nd trip to the Hourglass Twins":{"Date":"1979/04 5d02s 32:52","Tags":"#feldspar #outer wilds ventures #launch #ember twin"},

// Marl falling off a tree incident
"Gossan’s Eye Incident":{"Date":"1988/09 8d07s 31:52","Tags":"#gossan #firn #slate","LoreID":"OGGossanEyeIncident"},

"Chert’s First Launch":{"Date":"1991/08 02d02s 00:00","Tags":"#chert #outer wilds ventures #launch"},

"Gabbro’s First Launch":{"Date":"1992/14 04d02s 41:23","Tags":"#gabbro #outer wilds ventures #launch"},


// First time Hal was brought to the Quantum Grove
// Gabbro writes the quantum poem

// Firn experiments on the museum’s quantum shard with water and proves Gabbro’s theory right
// Firn’s first jetpack training leading them in the Quantum Grove (oh fuck possible quantum trauma with Gabbro saving them?? Is Firn scared of quantum stuff because of it???)



"Riebeck and Tuff are told about the imminent extinction of their species; Firn listens in":{"Date":"1991/20 01d16s 25:23","Tags":"#riebeck #tuff #firn #ghost matter"},

"Gneiss helps Hal whittle a kazoo for Firn":{"Date":"1988/15 08d07s 34:52","Tags":"#firn #hal #gneiss"},

"Feldspar’s 4th(?) trip to Giant’s Deep":{"Date":"1991/19 14d01s 01:42","Tags":"#feldspar #outer wilds ventures #giant’s deep #launch"},
"Feldspar crashes on Dark Bramble":{"Date":"1991/20 13d04s 21:56","Tags":"#feldspar #dark bramble"},
"Interday 1991":{"Date":"1991/23 01d12s 00:00","Tags":""},
"Feldspar Officially Declared Missing":{"Date":"1992/08 13d04s 33:21","Tags":"#feldspar #outer wilds ventures"},
"Feldspar meets their soon-to-be jellyfish pet":{"Date":"1992/08 02d05s 32:15","Tags":"#feldspar"},
"Chert brings back a Nomai cactus stew cookbook from Ember Twin":{"Date":"1992/19 12d10s 20:13","Tags":"#chert #outer wilds ventures #launch"},



"Silky’s Death":{"Date":"1994/16 08d13s 05:35","Tags":"#firn #hal #marl #silkmoth"},

"Riebeck’s First Launch":{"Date":"1995/22 07d02s 00:00","Tags":"#riebeck #outer wilds ventures #launch"},









"Firn’s Launch Day":{"Date":tloop,"Tags":"#firn #outer wilds ventures #launch","Image":"<img src=../ast-fkno/ico/chr_eye.png>","Color":"rgba(var(--purpled),.5)"},
"The Stranger enters the Eye":{"Date":eyemo,"Tags":"#end","Image":"<img src=../ast-fkno/ico/chr_eye.png>","Color":"rgba(var(--purpled),.5)"}}