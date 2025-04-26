//@SFOLD — NOTES & INITIALIZATION
// 1 day	= 22 sunrises				(55px for large scale)
// 1 week	= 309 sunrises = 14 days + 1 sunrise
// 1 year	= 22 weeks = 309 days
// 1 Hearthian year = 327.31 human days.

// A Hearthian date is in the shape of YYYY/[01-22]/[01-14]           or YYYY/23/01 for Interday only
// For getting in Excel a week & day number that isn’t an interday:
// =ALEA.ENTRE.BORNES(1,22)
// =ALEA.ENTRE.BORNES(1,14)
// =CONCATENER(A1,",",A2,"]")
const tlday=[2001,01,06] // Year number / Week number / Day number of the week (Interday = YYYY/00/00)
const cdta={
//@EFOLD
//@SFOLD — Birthdays
"Tektite’s birth": {"Date":[tlday[0]-73,22,05],"Tags":"#tektite  #birthday"},
"Spinel’s birth":  {"Date":[tlday[0]-69,07,01],"Tags":"#spinel   #birthday"},
"Gneiss’ birth":   {"Date":[tlday[0]-68,05,02],"Tags":"#gneiss   #birthday"},
"Rutile’s birth":  {"Date":[tlday[0]-60,18,10],"Tags":"#rutile   #birthday"},
"Esker’s birth":   {"Date":[tlday[0]-49,10,07],"Tags":"#esker    #birthday"},
"Gossan’s birth":  {"Date":[tlday[0]-45,12,08],"Tags":"#gossan   #birthday"},
"Feldspar’s birth":{"Date":[tlday[0]-44,11,10],"Tags":"#feldspar #birthday"},
"Slate’s birth":   {"Date":[tlday[0]-44,19,03],"Tags":"#slate    #birthday"},
"Hornfels’ birth": {"Date":[tlday[0]-43,14,14],"Tags":"#hornfels #birthday"},
"Porphy’s birth":  {"Date":[tlday[0]-41,14,10],"Tags":"#porphy   #birthday"},
"Chert’s birth":   {"Date":[tlday[0]-40,04,01],"Tags":"#chert    #birthday"},
"Gabbro’s birth":  {"Date":[tlday[0]-37,16,11],"Tags":"#gabbro   #birthday"},
"Riebeck’s birth": {"Date":[tlday[0]-28,08,02],"Tags":"#riebeck  #birthday"},
"Tuff’s birth":    {"Date":[tlday[0]-26,01,03],"Tags":"#tuff     #birthday"},
"Marl’s birth":    {"Date":[tlday[0]-25,22,14],"Tags":"#marl     #birthday"},
"Hal’s birth":     {"Date":[tlday[0]-20,09,11],"Tags":"#hal      #birthday"},
"Firn’s birth":    {"Date":[tlday[0]-20,09,11],"Tags":"#firn     #birthday"},
"Arkose’s birth":  {"Date":[tlday[0]-14,12,06],"Tags":"#arkose   #birthday"},
"Moraine’s birth": {"Date":[tlday[0]-13,11,12],"Tags":"#moraine  #birthday"},
"Mica’s birth":    {"Date":[tlday[0]-12,07,14],"Tags":"#mica     #birthday"},
"Galena’s birth":  {"Date":[tlday[0]-10,05,08],"Tags":"#galena   #birthday"},
"Tephra’s birth":  {"Date":[tlday[0]-10,02,04],"Tags":"#tephra   #birthday"},
//@EFOLD

// "TITLE":{"Date":[tlday[0],0,0],"Tags":"#"},
// Required:
//     "Date": [tlday[0]-Y,WW,DD]
//     "Tags": "#TAG1 #TAG2 #..."
// Optional:
//     "Color":"rgba(var(--goldd),.2)",
//     "Image":"<img src=../../img/astr_timberhearth.png>"
//     "LoreID":"ID name of the corresponding card from the FKNO lore map"





// The following should be listed in chronological order (at least more or less), but the dates are stuck on Interday for now. This needs to be fixed.

"Ghost Matter Incident":{"Date":[tlday[0]-30,8,2],"Tags":"#ghost matter #tektite #spinel #gneiss #rutile #esker #gossan #feldspar #slate #hornfels #porphy #chert #gabbro","LoreID":"30yroGMincident"},

"Feldspar’s First Launch":{"Date":[tlday[0]-27,13,12],"Tags":"#feldspar #outer wilds ventures #launch"},

"Gossan’s First Launch":{"Date":[tlday[0]-25,18,1],"Tags":"#gossan #outer wilds ventures #launch"},

"Feldspar’s 1st trip to the Attlerock":{"Date":[tlday[0]-24,1,13],"Tags":"#feldspar #outer wilds ventures #launch #attlerock"},

"Feldspar’s 2nd trip to the Hourglass Twins":{"Date":[tlday[0]-22,4,5],"Tags":"#feldspar #outer wilds ventures #launch #ember twin"},

"Gossan’s Eye Incident":{"Date":[tlday[0]-13,9,8],"Tags":"#gossan #firn #slate","LoreID":"OGGossanEyeIncident"},

"Chert’s First Launch":{"Date":[tlday[0]-10,8,2],"Tags":"#chert #outer wilds ventures #launch"},

"Gabbro’s First Launch":{"Date":[tlday[0]-9,14,4],"Tags":"#gabbro #outer wilds ventures #launch"},

// Marl falling off a tree incident

// First time Hal was brought to the Quantum Grove
// Firn experiments on the museum’s quantum shard with water and proves Gabbro’s theory right
// Firn’s first jetpack training leading them in the Quantum Grove (oh fuck possible quantum trauma with Gabbro saving them?? Is Firn scared of quantum stuff because of it???)



"Riebeck and Tuff are told about the imminent extinction of their species; Firn listens in":{"Date":[tlday[0]-10,20,1],"Tags":"#riebeck #tuff #firn #ghost matter"},


"Feldspar’s 4th(?) trip to Giant’s Deep":{"Date":[tlday[0]-10,19,14],"Tags":"#feldspar #outer wilds ventures #giant’s deep #launch"},
"Chert brings back a Nomai cactus stew cookbook from Ember Twin":{"Date":[tlday[0]-9,19,12],"Tags":"#chert #outer wilds ventures #launch"},
"Feldspar Declared Missing":{"Date":[tlday[0]-9,7,3],"Tags":"#feldspar #outer wilds ventures"},


"Feldspar meets their future jellyfish pet":{"Date":[tlday[0]-9,8,2],"Tags":"#feldspar"},



"Silky’s Death":{"Date":[tlday[0]-5,16,8],"Tags":"#firn #hal #marl #silkmoth"},

"Riebeck’s First Launch":{"Date":[tlday[0]-5,22,7],"Tags":"#riebeck #outer wilds ventures #launch"},



"Gneiss helps Hal whittle a kazoo for Firn":{"Date":[tlday[0]-11,3,9],"Tags":"#firn #hal #gneiss"},








"Firn’s Launch Day":{"Date":tlday,"Tags":"#firn #outer wilds ventures #launch","Image":"<img src=../../img/chr_eye.png>","Color":"rgba(var(--purpled),.5)"}}