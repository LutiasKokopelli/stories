// Stranger dam: https://discord.com/channels/590799151118155780/613170452680015882/1334203413843673158

// From Clock mod: Warp Platforms Inactive | 21:30
// Clock mod: "The Stranger solar sails deploy | 06:40" except your measures give different value
// Utilise Unity Explorer et/ou demande à Nepo comment faire

// From Nepo, add to calendar because this data was obtained via datamining:
// Va voir ses DMs en vrai: https://discord.com/channels/@me/1333795187410862090/1334958061038866454
// 400 = Stranger Sails start deploying
// 401 = Stranger Light flicker
// 412 = Stranger Sails finish deploying
// 412 = Stranger starts moving [dependent on the sails being fully deployed]
// 411 = Dam starts taking damage [411 in game but the default value in the code is 410]
// 780 = Dam breaks
// 1220 = Lighthouse collapses
//
// 1320 = Start of the Sun collapse
// 1330 = Sun Disappeared / Start Supernova
// 1333 = Black Hole starts being created
// 1334 = Black Hole created
// 1358 = Black Hole starts collapsing
// 1359 = Black Hole collapsed
// Then I got those but I think I'll test them so take with a grain of salt
// # 1359 = Death by Time Loop (1 sec sooner than the start of the purple line cinematic on your calendar)
// # 1453 = Escape Endings [When you remove the ATP warpcore and go on the QM, in the Stranger, or escape the supernova]
//
// Théorie de Nepo pour "warp platforms inactive":
// En gros, avant d'ouvrir un trou noir le jeu vérifie plusieurs choses, mais celle qui est importante pour nous est l'angle entre la plateforme de départ et la plateforme d'arrivée.
// En très gros s'il y a une différence d'orientation inférieure à *x* degrés le trou noir s'ouvre
// ```
// this.GetViewAngleToTarget() > 0.5 * (TimeLoop.GetSecondsRemaining() < 30.0 ? 5.0 : this._alignmentWindow))
// ```
// La dedans on voit un truc intéressant, ``TimeLoop.GetSecondsRemaining() < 30.0``, en gros il y a une différence dans les 30 dernières secondes de la boucle, soit à partir de 21:30.
//
// Sauf que ça n'a pas vraiment de sens, là il s'agit juste de changer l'angle à partir duquel le trou noir s'ouvre, habituellement c'est `_alignmentWindow`, après 21:30 c'est `5.0`, sauf que la valeur par défaut c'est déjà 5.0. La seul exception est la plateforme de l'ATP qui a une valeur de 24, surement pour que le timing ne soit pas trop strict.
// Mais donc pourquoi faire ça? Il n'y a aucun timing de warp après 21:30 et avant la supernova.
// Je pense que c'est juste du vieux code, peut-être que pendant le développement il y en avait une mais qu'ils voulaient la rendre plus complexe à atteindre pour éviter qu'un joueur ne rentre au dernier moment et soit confus en voyant la supernova et la fin de la loop depuis l'intérieur. Il y a d'autres endroits dans le code avec des choses pas logique donc pourquoi pas
//
// Et du coup le·a créateur·ice du Clock Mod a probablement fait un Ctrl+F pour `TimeLoop.GetSecondsRemaining()` qui est souvent utilisé pour les éléments scriptés dans la loop et a trouvé cette partie du code. J'ai pas tester moi même in game mais si effectivement les plateformes marchent correctement comme je m'y attend alors je pense qu'il/elle a juste mal interprété cette partie du code



// 03:40 - The interloper becomes accessible
// 04:20 - The interloper becomes inaccessible
// 11:40 - The Interloper becomes accessible
// 12:20 - The Interloper becomes inaccessible.



// When is the Interloper’s core accessible?

// Sun station WARP WINDOWS:
// 05:30.7
// 06:20.0
// 07:09.3
// 07:59.6
// 08:48.8
// 09:38.2
// 10:28.6
// 11:17.7

// Timber Hearth WARP WINDOWS:
// 10:13.8		This warp is almost functional. The black hole opens, but the sand is still too high to let you enter it.
// 11:23.1
// 12:33.1
// 13:32.4
// 14:38.3
// 15:51.6		Caution: The column of sand passes overhead around the same time.
// 16:50.7
// 17:55.6
// 19:10.0
// 20:08.8
// 21:14.4

// Brittle Hollow WARP WINDOWS:
// 10:52.1
// 12:12.8
// 13:19.4
// 14:37.7
// 15:46.8
// 17:00.5
// 18:14.2
// 19.23.6
// 20:41.6
// 21:48.7

// Attlerock eclipses: From *where* on TH are they visible? Show them after you’ve changed their names & given this indication.
// "113 Crickets Eclipse":{"GameTime":46.1,"Attlerock/Sun angle":[310.777,310.760],"Tags":["fkno","timber hearth","hearthian clock"]},
// "114 Midday Eclipse":{  "GameTime":3*60+41.9,"Attlerock/Sun angle":[102.816,102.894],"Tags":["fkno","timber hearth","hearthian clock"]},
// "114 Midnight Eclipse":{"GameTime":6*60+37.8,"Attlerock/Sun angle":[255.146,255.115],"Tags":["fkno","timber hearth","hearthian clock"]},
// "115 Forenoon Eclipse":{"GameTime":9*60+33.6,"Attlerock/Sun angle":[47.184,47.250],"Tags":["fkno","timber hearth","hearthian clock"]},
// "115 Dusk Eclipse":{    "GameTime":12*60+29.5,"Attlerock/Sun angle":[199.515,199.471],"Tags":["fkno","timber hearth","hearthian clock"]},
// "115 Sunrise Eclipse":{ "GameTime":15*60+25.3,"Attlerock/Sun angle":[351.553,351.606],"Tags":["fkno","timber hearth","hearthian clock"]},
// "116 Undern Eclipse":{  "GameTime":18*60+21.2,"Attlerock/Sun angle":[143.883,143.827],"Tags":["fkno","timber hearth","hearthian clock"]},
// "116 Crickets Eclipse":{"GameTime":21*60+17,"Attlerock/Sun angle":[295.922,295.962],"Tags":["fkno","timber hearth","hearthian clock"]},

// FKNO ONLY: Time at which the 8th mask falls off the ATP: about 10s in-game after the earliest warp window?




// MEASURED ON SWITCH BUT THIS NEEDS CHECKING ON PC:
// ~03:00: very top of sun tower starts poking out of the sand at *around* 3:00
// ~05:00: sun tower bottom door's top starts to become visible, soon after the column of sand passed over the tower.





// In case you need an entry specific to the Probe Tracking Module inside GD’s core that isn’t related to the supernova: "<img src=../ast/ico/astr_GD.png><img src=../ast/ico/astr_OPC.png style='width:32px;margin-left:-36px;margin-right:4px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
const cdta={"Wake Up":{"GameTime":0,"Tags":["k"],"Color":"rgba(var(--greenl),.42)"},
// "":{
//     "GameTime":,"Tags":[],"Color":"","Image":""
// },
// @SFOLD — SUN & SUN STATION
"The Sun warp tower’s outer door is uncovered enough to pass through":{
    "GameTime":5*60+10,"Tags":["ash twin","sun station","warp tower","location accessibility"],"Image":"<img src=../ast/ico/astr_SS.png>"
},
"The Sun warp tower’s inner door is uncovered enough to pass through (warp platform becomes accessible)":{
    "GameTime":5*60+20,"Tags":["ash twin","sun station","warp tower","location accessibility"],"Image":"<img src=../ast/ico/astr_SS.png>"
},
"Sun Station Warp Window<s>1</s>":{
    "GameTime":7*60+10,"Tags":["sun station","warp window","location accessibility","warp tower"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_SS.png>"
},
"The Sun starts to expand":{
    "GameTime":10*60,"Tags":["sun"],"Color":"rgba(var(--indigod),.34)","Image":"<img src=../ast/ico/Steam_Lv2_Subgiant.png>"
},
"The Sun Station is engulfed by the sun":{
    "GameTime":11*60+30,"Tags":["sun station","sun","location accessibility"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv3_Red_Giant.png><img src=../ast/ico/astr_SS.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Will automatically wake up from “Doze off” & Cannot go back to sleep":{
    "GameTime":20*60+32,"Tags":[]
},
"End Times starts playing":{
    "GameTime":20*60+35,"Tags":[],"Color":"rgba(var(--indigod),.34)","Image":"<img src=../ast/ico/Steam_Lv3_Red_Giant.png>"
},
"The Red Giant reaches its maximal size":{
    "GameTime":21*60,"Tags":["sun"],"Color":"rgba(var(--indigod),.34)","Image":"<img src=../ast/ico/Steam_Lv3_Red_Giant.png>"
},
"The Sun starts to collapse":{
    "GameTime":22*60,"Tags":["sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv4_Star_Collapse.png>"
},
"The Sun starts to explode":{
    "GameTime":22*60+10,"Tags":["sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png>"
},
// @EFOLD
// @SFOLD — HOURGLASS TWINS
"Sand starts draining off Ash Twin and flowing to Ember Twin":{
    "GameTime":2*60,"Tags":["hourglass twins","ember twin","ash twin"],"Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"The top of the Ember Twin warp tower starts peeking out of the sand":{
    "GameTime":3*60+11,"Tags":["ember twin","ash twin","warp tower","location accessibility"],"Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"The second floor of the Ember Twin warp tower becomes accessible":{
    "GameTime":4*60+16,"Tags":["ember twin","ash twin","warp tower","location accessibility"],"Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"The glass ceilings of the Ash & Ember Twin warp towers, the bottom of the Ember Twin tower’s gravity beam, and the bridge linking the two towers, start peeking out of the sand":{
    "GameTime":5*60+24,"Tags":["ember twin","ash twin","warp tower","location accessibility"],"Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"The Ash & Ember Twin towers’ warp platforms become accessible":{
    "GameTime":7*60+5,"Tags":["ember twin","ash twin","warp tower","ash twin project","location accessibility"],"Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Hourglass Twins Warp Window<s>1</s>":{
    "GameTime":7*60+53.2,"Tags":["hourglass twins","ember twin","ash twin","ash twin project","warp window","warp tower","location accessibility"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Hourglass Twins Warp Window<s>2</s>":{
    "GameTime":10*60+18.7,"Tags":["hourglass twins","ember twin","ash twin","ash twin project","warp window","warp tower","location accessibility"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Hourglass Twins Warp Window<s>3</s>":{
    "GameTime":12*60+44.3,"Tags":["hourglass twins","ember twin","ash twin","ash twin project","warp window","warp tower","location accessibility"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Hourglass Twins Warp Window<s>4</s>":{
    "GameTime":15*60+10.0,"Tags":["hourglass twins","ember twin","ash twin","ash twin project","warp window","warp tower","location accessibility"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Hourglass Twins Warp Window<s>5</s>":{
    "GameTime":17*60+35.6,"Tags":["hourglass twins","ember twin","ash twin","ash twin project","warp window","warp tower","location accessibility"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Hourglass Twins Warp Window<s>6</s>":{
    "GameTime":20*60+1.1,"Tags":["hourglass twins","ember twin","ash twin","ash twin project","warp window","warp tower","location accessibility"],"Color":"rgba(var(--redd),.4)","Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"Sand stops flowing between Ash Twin and Ember Twin":{
    "GameTime":20*60+20,"Tags":["hourglass twins","ember twin","ash twin"],"Image":"<img src=../ast/ico/astr_CT.png style=height:20px><img src=../ast/ico/astr_TT.png style=height:20px;margin-left:-34px>"
},
"“Distracted Chert” — Chert Becomes Nervous (stage 2)":{
    "GameTime":660,"Tags":["chert"],"Color":"rgba(var(--indigod),.34)"
},
"“Distraught Chert” — Chert Panics (stage 3)":{
    "GameTime":1020,"Tags":["chert"],"Color":"rgba(var(--indigod),.34)"
},
"“Horrified but calm Chert” — Chert Becomes Catatonic (stage 4)":{
    "GameTime":1230,"Tags":["chert"],"Color":"rgba(var(--indigod),.34)"
},
"Supernova reaches Ash Twin <smol>(North pole)</smol>":{
    "GameTime":22*60+22.5,"Tags":["ash twin","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_TT.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches Ember Twin <smol>(Chert’s camp)</smol>":{
    "GameTime":22*60+23,"Tags":["ember twin","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_CT.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
// @EFOLD
// @SFOLD — TIMBER HEARTH & ATTLEROCK
"First Sunrise of the Loop <smol>(from Timber Hearth’s Spawn Point)</smol>":{
    "GameTime":1*60+43,"Tags":["timber hearth","hearthian clock"],"Color":"rgba(var(--goldd),.2)","Image":"<img src=../ast/ico/astr_TH.png>"
},
"First Sunset of the Loop <smol>(from Timber Hearth’s Spawn Point)</smol>":{
    "GameTime":5*60+7,"Tags":["timber hearth","hearthian clock"],"Image":"<img src=../ast/ico/astr_TH.png>"
},
"Second Sunrise of the Loop <smol>(from Timber Hearth’s Spawn Point)</smol>":{
    "GameTime":8*60+39,"Tags":["timber hearth","hearthian clock"],"Color":"rgba(var(--goldd),.2)","Image":"<img src=../ast/ico/astr_TH.png>"
},
"Second Sunset of the Loop <smol>(from Timber Hearth’s Spawn Point)</smol>":{
    "GameTime":12*60+3,"Tags":["timber hearth","hearthian clock"],"Image":"<img src=../ast/ico/astr_TH.png>"
},
"Third Sunrise of the Loop <smol>(from Timber Hearth’s Spawn Point)</smol>":{
    "GameTime":15*60+35,"Tags":["timber hearth","hearthian clock"],"Color":"rgba(var(--goldd),.2)","Image":"<img src=../ast/ico/astr_TH.png>"
},
"Third Sunset of the Loop <smol>(from Timber Hearth’s Spawn Point)</smol>":{
    "GameTime":18*60+59,"Tags":["timber hearth","hearthian clock"],"Image":"<img src=../ast/ico/astr_TH.png>"
},
"Supernova reaches Timber Hearth <smol>(Spawn point)</smol>":{
    "GameTime":22*60+27,"Tags":["timber hearth","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_TH.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches Timber Hearth <smol>(North pole)</smol>":{
    "GameTime":22*60+27.5,"Tags":["timber hearth","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_TH.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches the Attlerock <smol>(Esker’s Observation platform on the North pole)</smol>":{
    "GameTime":22*60+28,"Tags":["attlerock","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_THM.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"<i>Fourth Sunrise of the Loop <smol>(from Timber Hearth’s Spawn Point, after Timber Hearth was destroyed)</smol></i>":{
    "GameTime":22*60+31,"Tags":["fkno","timber hearth","hearthian clock"],"Color":"rgba(var(--goldd),.2)","Image":"<img src=../ast/ico/astr_TH.png>"
},
// @EFOLD
// @SFOLD — BRITTLE HOLLOW, LANTERN & WHITE HOLE
"The Tower of Quantum Knowledge can now fall into the black hole (this was impossible up to this point).<br>Meteors start dealing double damage to its surroundings.":{
    "GameTime":900,"Tags":["brittle hollow","location accessibility","tower of quantum knowledge"],"Image":"<img src=../ast/ico/astr_BH.png>","LoreID":"BHtoqkFall"
},
"The Tower of Quantum Knowledge reaches 0% integrity and starts falling (if it hasn’t already).":{
    "GameTime":1080,"Tags":["brittle hollow","location accessibility","tower of quantum knowledge"],"Image":"<img src=../ast/ico/astr_BH.png>","LoreID":"BHtoqkFall"
},

"Supernova reaches Hollow’s Lantern <smol>(Project Platform at North pole)</smol>":{
    "GameTime":22*60+29.3,"Tags":["hollow’s lantern","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_BHM.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches Brittle Hollow <smol>(Black Hole Forge warp pad)</smol>":{
    "GameTime":22*60+30,"Tags":["brittle hollow","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_BH.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches the White Hole Station":{
    "GameTime":22*60+38.1,"Tags":["white hole","white hole station","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_WHS.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches the White Hole":{
    "GameTime":22*60+38.4,"Tags":["white hole","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_WH.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
// @EFOLD
// @SFOLD — GIANT’S DEEP & OPC
"Supernova reaches the Probe Tracking Module <smol>(Core of Giant’s Deep)</smol>":{
    "GameTime":22*60+33,"Tags":["probe tracking module","orbital probe cannon","giant’s deep","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_GD.png style=margin-left:-34px;width:30px><img src=../ast/ico/astr_OPC.png style='width:28px;margin-left:-29px;margin-right:4px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches Giant’s Deep <smol>(Quantum Tower at North pole)</smol>":{
    "GameTime":22*60+34.5,"Tags":["giant’s deep","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_GD.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches the Orbital Probe Cannon":{
    "GameTime":22*60+35,"Tags":["orbital probe cannon","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_OPC.png style='width:24px;margin-left:-31px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
// @EFOLD
// @SFOLD — DARK BRAMBLE
"Supernova reaches Dark Bramble <smol>(Outside)</smol>":{
    "GameTime":22*60+36.2,"Tags":["dark bramble","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_DB.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
"Supernova reaches the Vessel":{
    "GameTime":22*60+39,"Tags":["dark bramble","the vessel","sun","supernova"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv5_Supernova.png><img src=../ast/ico/astr_DB.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
// @EFOLD
// @SFOLD — INTERLOPER
"The Interloper is at its Perihelion (closest to the sun)<s>1</s>":{
    "GameTime":3*60+58,"Tags":["interloper"],"Image":"<img src=../ast/ico/astr_C.png>"
},
"The Interloper is at its Aphelion (furthest away from the sun)<s>1</s>":{
    "GameTime":7*60+58,"Tags":["interloper"],"Image":"<img src=../ast/ico/astr_C.png>"
},
"The Interloper is at its Perihelion (closest to the sun)<s>2</s>":{
    "GameTime":11*60+58,"Tags":["interloper"],"Image":"<img src=../ast/ico/astr_C.png>"
},
"The Interloper is at its Aphelion (furthest away from the sun)<s>2</s>":{
    "GameTime":15*60+58,"Tags":["interloper"],"Image":"<img src=../ast/ico/astr_C.png>"
},
"The Interloper is engulfed by the sun":{
    "GameTime":19*60+48,"Tags":["interloper","sun","location accessibility"],"Color":"rgba(var(--indigol),.34)","Image":"<img src=../ast/ico/Steam_Lv3_Red_Giant.png><img src=../ast/ico/astr_C.png style='width:24px;margin-left:-32px;margin-right:8px;filter:drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)drop-shadow(0 0 .5px black)'>"
},
// @EFOLD
// @SFOLD — STRANGER & DEEP SPACE SATELLITE
"Deep Space Satellite Angle = 40°":{
    "GameTime":3*60+21,"Tags":["deep space satellite","stranger","location accessibility"]
},
"The Stranger’s solar sails start deploying (sound cue)":{
    "GameTime":6*60+48,"Tags":["stranger"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
"The Stranger’s solar sails are completely open":{
    "GameTime":7*60,"Tags":["stranger"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
"The Stranger’s dam bursts":{
    "GameTime":13*60,"Tags":["stranger"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
"The River Lowlands are flooded":{
    "GameTime":13*60+10,"Tags":["stranger","location accessibility"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
"The Cinder Isles are flooded":{
    "GameTime":13*60+30,"Tags":["stranger","location accessibility"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
"The Hidden Gorge walkways are destroyed":{
    "GameTime":13*60+40,"Tags":["stranger","location accessibility"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
"The Cinder Isles tower completely falls":{
    "GameTime":20*60+30,"Tags":["stranger","location accessibility"],"Image":"<img src=../ast/ico/astr_IP.png>"
},
// @EFOLD
// @SFOLD — QUANTUM MOON
"The Quantum Moon stops orbiting around Ember Twin":{
    "GameTime":15*60,"Tags":["quantum moon","hourglass twins","ember twin","location accessibility"],"Image":"<img src=../ast/ico/astr_QM.png>"
},
// @EFOLD
// @SFOLD — ATP & End of Loop
"The Ash Twin Project’s black hole starts to form":{
    "GameTime":22*60+13.1,"Tags":["ash twin project"],"Color":"rgba(var(--goldl),.3)"
},
"The Ash Twin Project’s black hole is at full size":{
    "GameTime":22*60+14.1,"Tags":["ash twin project"],"Color":"rgba(var(--goldl),.3)"
},
"The Ash Twin Project’s black hole starts to vanish":{
    "GameTime":22*60+38.1,"Tags":["ash twin project"],"Color":"rgba(var(--goldl),.3)"
},
"The Ash Twin Project’s black hole is gone":{
    "GameTime":22*60+39,"Tags":["ash twin project"],"Color":"rgba(var(--goldl),.3)"
},
"End of Loop: Purple lines cutscene starts":{"GameTime":22*60+40,"Tags":["k"],"Color":"rgba(var(--greenl),.42)"},
"End of Loop: Purple lines cutscene stops, fade to black":{"GameTime":22*60+43,"Tags":["k"],"Color":"rgba(var(--greenl),.42)"},
"End of Loop":{"GameTime":22*60+43.314,"Tags":["k"],"Color":"rgba(var(--greenl),.42)"}}
// @EFOLD