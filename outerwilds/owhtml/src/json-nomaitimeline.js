/* ERA  (from https://lutiaskokopelli.github.io/stories/outerwilds/owhtml/owdoc/loremap.html#NomaiTimeline ):
1.x     Shipwrecked in the solar system: After Vessel crash, before first settlements are built
2.x     Construction of temporary, then permanent settlements (Sunless & Hanging cities)
3.x     Settlements are built, life resumes. Ends with Reinvention of spaceflight & reunion ET/BH Nomai
4.x     Quantum research, establishment of the Quantum Moon pilgrimage
5.x     Construction of the Eye signal locators & discovery of time travel
6.x     Construction of the Ash Twin Project
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                                                                                                            /////
/////          ██████  ██████  ██████  ███████ ██████  ██ ███    ██  ██████      ██████  ██    ██ ██      ███████ ███████        /////
/////         ██    ██ ██   ██ ██   ██ ██      ██   ██ ██ ████   ██ ██           ██   ██ ██    ██ ██      ██      ██             /////
/////         ██    ██ ██████  ██   ██ █████   ██████  ██ ██ ██  ██ ██   ███     ██████  ██    ██ ██      █████   ███████        /////
/////         ██    ██ ██   ██ ██   ██ ██      ██   ██ ██ ██  ██ ██ ██    ██     ██   ██ ██    ██ ██      ██           ██        /////
/////          ██████  ██   ██ ██████  ███████ ██   ██ ██ ██   ████  ██████      ██   ██  ██████  ███████ ███████ ███████        /////
/////                                                                                                                            /////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

const rules=[ //{before:"A",after:"B",why:"Reason"},
{before:"DB_Vessel_SignalFirstContact",after:"Vessel crash"},
{before:"Vessel crash",after:"DB_Vessel_OutgoingMessages"},
{before:"DB_Vessel_OutgoingMessages",after:"Launching Escape Pods"},
{before:"Launching Escape Pods",after:"DB_EscapePod_FlightLog"},
{before:"DB_EscapePod_FlightLog",after:"DB_EscapePod_CrashSiteRecording_1"},
{before:"DB_EscapePod_CrashSiteRecording_1",after:"DB_EscapePod_CrashSiteRecording_2"},
{before:"DB_EscapePod_CrashSiteRecording_2",after:"DB_EscapePod_BrambleSeedRecording"},
// Stranded on BH
{before:"Launching Escape Pods",after:"BH_EscapePod_FlightLog"},
{before:"BH_EscapePod_FlightLog",after:"BH_EscapePod_CrashSiteRecording"},
{before:"BH_EscapePod_CrashSiteRecording",after:"BH_EscapePod_BlackHoleWarning"},
{before:"BH_EscapePod_BlackHoleWarning",after:"Building the Old Settlement"},
{before:"Building the Old Settlement",after:"BH_OldSettlement_NoteAboutConstruction"},
// Stranded on CT
{before:"Launching Escape Pods",after:"CT_EscapePod_FlightLog"},
{before:"CT_EscapePod_FlightLog",after:"CT_EscapePod_CrashSiteRecording"},





{before:"Annona’s Death",after:"WH_TimeDelay_1"},
{before:"Annona’s Death",after:"BH_City_Forum_3"},
{before:"Annona’s Death",after:"BH_City_Journal_Poke"},





// From Bells’ timeline:
{before:"BH_Quantum_WindowNote",after:"Shared_BH_Cannon_BH_Quantum",why:"Presumably wrote this long before Solanum started her pilgrimage"},
{before:"BH_Quantum_TowerEntrance",after:"Shared_BH_Cannon_BH_Quantum",why:"Presumably wrote this long before Solanum started her pilgrimage"},
{before:"BH_Quantum_PilgrimageHistory",after:"Shared_BH_Cannon_BH_Quantum",why:"Presumably wrote this long before Solanum started her pilgrimage"},

// From Bur’s timeline:
{before:"CT_EscapePod_PathToRocks",after:"CT_Quantum_WanderingRock_2",why:"2 was long after the crash"},
{before:"CT_EscapePod_PathToRocks",after:"CT_QuantumMoonObservation",why:"2 was long after the crash"},
{before:"CT_Quantum_WanderingRock_2",after:"CT_Quantum_EntanglementHint",why:"1. Started search for Coleus, 2. Search continues"},
{before:"CT_QuantumMoonObservation",after:"CT_QuantumMoonObservation_2",why:"Before vs after Ember Twin’s Quantum Moon Locator was built"},

// From Conoy’s timeline:
{before:"THM_SignalDish_2",after:"BH_Observatory_EyeSearch_1",why:"1. Southern Observatory not yet built; 2. Southern Observatory failed to locate the Eye"},
{before:"BH_Observatory_EyeSearch_1",after:"BH_Observatory_EyeSearch_2",why:"Parts 1 & 2 of transition between Eye signal locators and Ash Twin Project"},
{before:"BH_Observatory_EyeSearch_2",after:"Shared_GD_ConstructionYard_BH_Observatory",why:"1. First talk about building the OPC; 2. OPC under construction"},
{before:"BH_Observatory_EyeSearch_2",after:"TT_Tower_CT",why:"1. First talk about the ATP; 2. ATP related"},
{before:"BH_Observatory_EyeSearch_2",after:"BH_City_Forum_2",why:"1. First talk about the ATP; 2. ATP related"},

// From Cycad’s timeline:
{before:"TH_Mine_FindingHearthianLife",after:"TH_Mine_SizeOfProject",why:"1. Only just started mining, about to move to mining site 2b; 2. Extracted a lot of ore from mining site 2b"},


// From Rhus’ timeline:
{before:"CT_EscapePod_CrashSiteRecording",after:"CT_EscapePod_CrashSiteRecording_2"},
{before:"CT_EscapePod_CrashSiteRecording_2",after:"CT_EscapePod_PathToRocks",why:"In CrashSiteRecording_2, the Nomai had yet to leave the Escape pod."},


// From Solanum’s timeline:
{before:"Shared_BH_Cannon_BH_Quantum",after:"BH_Quantum_ShrineNorthHint",why:"Solanum learns where to find ToQK in Shared_*"},
{before:"CT_Fossil_ExitHint",after:"BH_City_School_BigBangLesson",why:"Solanum’s childhood on Ember Twin presumably before she boarded school on Brittle Hollow"},
{before:"CT_City_Journal_ChildIlex",after:"BH_City_School_BigBangLesson",why:"Solanum’s childhood on Ember Twin presumably before she boarded school on Brittle Hollow"},
{before:"CT_City_KidDirectionToFossil_2",after:"BH_City_School_BigBangLesson",why:"Solanum’s childhood on Ember Twin presumably before she boarded school on Brittle Hollow"},
{before:"CT_UnusedTranslations_Beta_Nomai_Kids",after:"BH_City_School_BigBangLesson",why:"Solanum’s childhood on Ember Twin presumably before she boarded school on Brittle Hollow"},
{before:"BH_City_Journal_OlderIlex",after:"QM_Shuttle_IlexRecording",why:"1. Solanum not yet on the QM"},



// From Spire’s timeline:
{before:"Shared_GD_ConstructionYard_BH_Observatory",after:"BH_Observatory_TornadoResearch",why:"In Shared_*, the model was built by the end, but Cassava hasn't yet been to the Southern Observatory."},
{before:"BH_City_Forum_3",after:"Shared_SS_SunStation_TT_TimeLoopInterior",why:"Shared_SS_* recounts the failure of the sun station."},
{before:"Shared_GD_ConstructionYard_BH_Observatory",after:"Shared_SS_SunStation_TT_TimeLoopInterior",why:"Shared_SS_* recounts the failure of the sun station."},
{before:"BH_Observatory_TornadoResearch",after:"Shared_SS_SunStation_TT_TimeLoopInterior",why:"Shared_SS_* recounts the failure of the sun station."},





{before:"SS_ClosingEmergencyDoor",after:"DB_Vessel_IncomingMessages",why:"Ship log refers to “Modern” Nomai"}]
/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                                                                                                            /////
/////       ██████   █████  ████████  █████  ███    ███ ██ ███    ██ ███████ ██████      ████████ ███████ ██   ██ ████████       /////
/////       ██   ██ ██   ██    ██    ██   ██ ████  ████ ██ ████   ██ ██      ██   ██        ██    ██       ██ ██     ██          /////
/////       ██   ██ ███████    ██    ███████ ██ ████ ██ ██ ██ ██  ██ █████   ██   ██        ██    █████     ███      ██          /////
/////       ██   ██ ██   ██    ██    ██   ██ ██  ██  ██ ██ ██  ██ ██ ██      ██   ██        ██    ██       ██ ██     ██          /////
/////       ██████  ██   ██    ██    ██   ██ ██      ██ ██ ██   ████ ███████ ██████         ██    ███████ ██   ██    ██          /////
/////                                                                                                                            /////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
const FUNDAMENTAL_DEFAULTS={
    Type:"File",
    Present:"",
    Mention:"",
};function normalizeItem(item){return{...FUNDAMENTAL_DEFAULTS,...item}}
const nomaidialogue=[
//🙧 0.001 - Vessel: Before crash, discuss Eye signal, decide to warp
{
    Name:"DB_Vessel_SignalFirstContact",
    Era:0.001,
    Summary:"Filix and Escall detect the Eye of the universe’s signal. Escall, fearful that the signal may disappear, demands to warp immediately.",
    Present:"#FILIX #ESCALL #ANNONA",
    Dialogue:[
        "FILIX: I’m recording now — I’ve never encountered anything like this! The signal the Vessel is receiving appears to be <i>older than the universe itself</i>!",
        "ESCALL: This is our first contact with anything of this nature. Everyone, prepare to warp immediately!",
        "FILIX: Escall, wait, I need more time to send an outgoing message! Shouldn’t we tell another clan where we’re going?",
        "ESCALL: We can send the message upon our arrival. This extraordinary signal appeared suddenly; it may disappear just as quickly, and we can’t lose a discovery this incredible! Focus on preparing for the warp, instead.",
        "FILIX: I understand!",
        "ESCALL: Annona, is the Vessel ready to warp to the signal’s approximate coordinates?",
        "ANNONA: The warp core is powered, but this will be a significant jump. Afterward, we’ll need time to recharge the core.",
        "ESCALL: That shouldn’t create a problem, provided we arrive at or near the signal’s source. Everyone, we’re ready to warp!",
    ],
},
//🙤
{Name:"Vessel crash",Era:1.0,Type:"H1"},
//🙧 1.001 - Vessel: After crash, Filix fails to call for help because comms broken
{
    Name:"DB_Vessel_OutgoingMessages",
    Era:1.001,
    Summary:"Filix tries to call for help, only to realize that the Vessel is no longer capable of sending messages.",
    Present:"#FILIX",
    Mention:"#ESCALL",
    Dialogue:[
        "FILIX: This is Escall’s Vessel; something went badly wrong during our warp, and our Vessel is mortally wounded. We need help as quickly as possible!",
        "FILIX: Our Vessel appears to have... has it <i>fused</i> with the local environment, somehow? There are vines that are now part of the Vessel! It’s been torn apart from inside itself!",
        "FILIX: We... we are abandoning our Vessel. Any Nomai clans or spaceflight-capable species receiving this message, I implore you, we need your help!",
        "FILIX: Is this broken? Can anyone hear me? Our Vessel is dying! We need immediate assistance!",
    ],
},
//🙤
{Name:"Launching Escape Pods",Era:1.1,Type:"H2"},
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//              ███████ ████████ ██████   █████  ███    ██ ██████  ███████ ██████                //
//              ██         ██    ██   ██ ██   ██ ████   ██ ██   ██ ██      ██   ██               //
//              ███████    ██    ██████  ███████ ██ ██  ██ ██   ██ █████   ██   ██               //
//                   ██    ██    ██   ██ ██   ██ ██  ██ ██ ██   ██ ██      ██   ██               //
//              ███████    ██    ██   ██ ██   ██ ██   ████ ██████  ███████ ██████                //
//                                                                                               //
// ██████   █████  ██████  ██   ██    ██████  ██████   █████  ███    ███ ██████  ██      ███████ //
// ██   ██ ██   ██ ██   ██ ██  ██     ██   ██ ██   ██ ██   ██ ████  ████ ██   ██ ██      ██      //
// ██   ██ ███████ ██████  █████      ██████  ██████  ███████ ██ ████ ██ ██████  ██      █████   //
// ██   ██ ██   ██ ██   ██ ██  ██     ██   ██ ██   ██ ██   ██ ██  ██  ██ ██   ██ ██      ██      //
// ██████  ██   ██ ██   ██ ██   ██    ██████  ██   ██ ██   ██ ██      ██ ██████  ███████ ███████ //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 1.101 - DB EPod3: Flight log, pod crashes.
{
    Name:"DB_EscapePod_FlightLog",
    Era:1.101,
    Dialogue:[
        "BEGIN FLIGHTLOG: Escape Pod 3. Vessel has been mortally injured. Emergency sequence activated. Awaiting departure from Vessel.",
        "Now launching Escape Pod 3.",
        "ALERT: Multiple collisions have altered pod’s trajectory. Significant damage to pod detected.",
        "WARNING: Navigation error. Life support error. Propulsion error.",
        "Scanning external environment... Scan complete. Gravity not detected. Breathable air not detected. Multiple lifeforms detected (potentially hostile). Verdict: DO NOT EXIT POD.",
    ],
},
//🙤
//🙧 1.102 - DB EPod3: Survivors must leave the pod, as their oxygen is running out.
{
    Name:"DB_EscapePod_CrashSiteRecording_1",
    Era:1.102,
    Summary:"Due to Escape Pod 3’s crash, it has become safer to go back to the Vessel.",
    Present:"#SECCA #ESCALL",
    Dialogue:[
        "SECCA: Our escape pod crashed as we tried to flee this place, destroying our movement and communication capabilities in the process.",
        "SECCA: We’ve held out as long as we could here, but this pod’s supply of breathable air is nearly depleted, and the anglerfish attack more and more frequently.",
        "SECCA: Our best chance at survival is to return to the Vessel to either repair the damage or, more probably, await rescue.",
        "ESCALL: Secca, is the message finished? The Vessel’s beacon is already growing fainter; it will be gone in a matter of hours. We need to leave here, quickly."
    ],
},
//🙤
//🙧 1.103 - DB EPod3: Hears two beacons for the Vessel; only enough oxygen for the closest one.
{
    Name:"DB_EscapePod_CrashSiteRecording_2",
    Era:1.103,
    Summary:"As they prepare to leave Escape Pod 3 and go back to the Vessel, Din notices there is a duplicate signal issue. Escall estimates they don’t have enough oxygen to reach for the furthest signal, and therefore urges to aim for the closest.",
    Present:"#DIN #SECCA #ESCALL",
    Mention:"",
    Dialogue:[
        "DIN: There is a new problem: Our equipment is detecting two distinct beacons from the Vessel.",
        "SECCA: But it isn’t possible for the Vessel to be in two different locations at the same time.",
        "DIN: I agree, but the beacons are exactly identical to each other. Perhaps if I had more time —",
        "SECCA: We’re nearly out of time already, Din; the Vessel’s beacon is quickly fading. Soon, it will be gone, and we will be lost.",
        "ESCALL: We will follow the beacon whose source is nearest to us.",
        "DIN: But suppose that beacon is false!",
        "ESCALL: We likely don’t have enough air to reach the farther of the two beacons, Din. The decision is made for us.",
        "ESCALL: We’ll leave a trail of lights as we go. There’s still a chance someone could hear our escape pod’s distress signal."
    ],
},
//🙤
//🙧 1.104 - DB Nomai Grave: Nowhere to go.
{
    Name:"DB_EscapePod_BrambleSeedRecording",
    Era:1.104,
    Summary:"Secca records that the Escape Pod 3 survivors reached a dead end: the seed from which they hear the Vessel is too small to pass through or to have come out of, and the Vessel’s beacon is dying.",
    Present:"#SECCA",
    Dialogue:[
        "SECCA: To any who come here searching for us: We followed one of the two beacons from the Vessel to this place, but now can go no further.",
        "SECCA: It's almost too faint to hear now, but the Vessel’s beacon is still faintly emitting from within this thorny seed. Yet the opening is too small for even a single Nomai to fit through it, so our escape pod couldn’t have flown through here.",
        "SECCA: I don’t understand how this could be possible, but this gruesome place seems able to manipulate space itself; maybe this was our undoing.",
        "SECCA: To be so close to the location of the Vessel and still so far is... difficult. Worse, the Vessel’s beacon is dying; soon, we will be unable to hear it.",
        "SECCA: There is nothing we can do now but try to perhaps find a way inside, or at least attempt to comprehend why this happened.",
        "SECCA: My dearest hope is that the other escape pods were able to reach relative safety.",
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//              ███████ ████████ ██████   █████  ███    ██ ██████  ███████ ██████                //
//              ██         ██    ██   ██ ██   ██ ████   ██ ██   ██ ██      ██   ██               //
//              ███████    ██    ██████  ███████ ██ ██  ██ ██   ██ █████   ██   ██               //
//                   ██    ██    ██   ██ ██   ██ ██  ██ ██ ██   ██ ██      ██   ██               //
//              ███████    ██    ██   ██ ██   ██ ██   ████ ██████  ███████ ██████                //
//                                                                                               //
//    ██████  ██████  ████████ ██          ██   ██  ██████  ██      ██       ██████  ██     ██   //
//    ██   ██ ██   ██    ██    ██          ██   ██ ██    ██ ██      ██      ██    ██ ██     ██   //
//    ██████  ██████     ██    ██          ███████ ██    ██ ██      ██      ██    ██ ██  █  ██   //
//    ██   ██ ██   ██    ██    ██          ██   ██ ██    ██ ██      ██      ██    ██ ██ ███ ██   //
//    ██████  ██   ██    ██    ███████     ██   ██  ██████  ███████ ███████  ██████   ███ ███    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 1.101 - BH EPod1: Flight log, pod finds BH surface hospitable.
{
    Name:"BH_EscapePod_FlightLog",
    Era:1.101,
    Summary:"Escape Pod 1’s flight log before and after crashing on Brittle Hollow.",
    Dialogue:[
        "BEGIN FLIGHTLOG: Escape Pod 1. Vessel has been mortally injured. Emergency sequence activated. Awaiting departure from Vessel.",
        "Launching Escape Pod 3... Launching Escape Pod 2... Now launching Escape Pod 1.",
        "ALERT. Collision imminent. Preparing for impact.",
        "Scanning external environment... Scan complete. Minor structural instabilities detected. Pockets of breathable air detected. Adequate solar energy detected.Verdict: HOSPITABLE."
    ]
},
//🙤
//🙧 1.102 - BH EPod1: Already saw the Lantern erupt at least once; now ready to move below the crust.
{
    Name:"BH_EscapePod_CrashSiteRecording",
    Era:1.102,
    Present:"#THATCH #PLUME #FILIX",
    Dialogue:[
        "THATCH: Is everyone unharmed?",
        "PLUME: No one was badly injured from the escape pod’s impact. We’re incredibly fortunate.",
        "THATCH: This is good news, at least. Have we heard from Escape Pod 2 or Escape Pod 3?",
        "FILIX: No, I... I’m unable to make contact. My equipment can hear the other two escape pods’ distress signals, however. If it’s any comfort, both pods must be structurally intact.",
        "FILIX: I’ll continue calling for them.",
        "THATCH: My gratitude. If we can —",
        "PLUME: Thatch, the moon is approaching again!",
        "THATCH: Everyone brace yourselves, swiftly! The volcanic moon has returned!",
        "THATCH: Be cautious of falling ash and debris!",
        "PLUME: ...I believe the moon has passed.",
        "FILIX: This planet doesn’t appear eager to have guests. We are certainly unwelcome on its surface.",
        "THATCH: We need to find shelter, and quickly. The volcanic moon won’t be gone for long.",
        "PLUME: I observed several promising sites below the surface, but we’ll need to construct a way for everyone to climb safely down this cliff. Perhaps we could build platforms?"
    ]
},
//🙤
//🙧 1.103 - BH EPod1: Plume leads the group below the surface & warns of the black hole.
{
    Name:"BH_EscapePod_BlackHoleWarning",
    Era:1.103,
    Present:"#PLUME",
    Dialogue:["PLUME: Use caution! A black hole sleeps below. You must not slip."]
},
//🙤
{Name:"Building the Old Settlement",Era:2.0,Type:"P",Location:"BH"},
//🙧 2.001 - BH OldStlmt: Plume warns that temporary settlement is finished, but unstable.
{
    Name:"BH_OldSettlement_NoteAboutConstruction",
    Era:2.001,
    Summary:"Plume warns that the temporary settlement is finished, but still unstable.",
    Present:"#PLUME",
    Dialogue:[
        "PLUME: Of note: Be sure not to wander far from here. Though this area is somewhat unstable, it’s safer than any we’ve found so far.",
        "PLUME: The temporary settlement is finished, but remember to be cautious of falling rocks and dust created by meteor impacts."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 2.101 - BH OldStlmt: Try to understand why the Vessel crashed.
{
    Name:"BH_OldSettlement_WhyDidWeCrash",
    Era:2.101,
    Summary:"Thatch, Plume and Filix ponder why the Vessel crashed in Dark Bramble. Filix confirms having checked with Annona that the Vessel was well before the warp, and claims that the Vessel did not end up where they tried to go.",
    Present:"#THATCH #PLUME #FILIX",
    Mention:"#ANNONA",
    Topics:"#vessel crash",
    Dialogue:[
        "THATCH: I can’t understand. Why did the <color=orange>Vessel</color> crash in that place?",
        "PLUME: Was the <color=orange>Vessel</color> unwell in some way?",
        "FILIX: No, Annona and I checked before the warp, and the warp core and navigation systems were both well.",
        "FILIX: We warped to follow that curious signal from the <color=lightblue>Eye of the universe</color>. Where we arrived was wrong; it wasn’t where we tried to go.",
        "THATCH: Suppose it wasn’t a problem with the <color=orange>Vessel</color>, but with our destination.",
        "FILIX: I’m afraid for our friends in <color=orange>Escape Pod 3</color>...."
    ]
},
//🙤
//🙧 2.102 - BH OldStlmt: Write all they know about the Eye of the universe.
{
    Name:"BH_OldSettlement_EyeCarving",
    Era:2.102,
    Summary:"Thatch, Filix and Plume record everything they know about the Eye of the universe.",
    Present:"#THATCH #FILIX #PLUME",
    Topics:"#eye of the universe",
    Dialogue:[
        "THATCH: This knowledge is too dear to lose: Here is everything we can recall about the signal we encountered while aboard the <color=orange>Vessel</color>.",
        "FILIX: The signal looked like an eye: round, with a circle at the center much like a pupil. (Suppose the signal was looking for something.)",
        "FILIX: The signal was older than the universe itself! This is the most significant detail.",
        "PLUME: No Nomai clan has ever encountered anything like it! How can anything in this universe be older than the universe itself?",
        "THATCH: Imagine what rare and profound knowledge it might offer. We <i>must</i> find this <color=lightblue>Eye of the universe</color>."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 2.201 - BH OldStlmt: Flavor: Plume mourns Keek
{
    Name:"BH_OldSettlement_Flavor_1",
    Era:2.201,
    Summary:"Plume worries about Keek.",
    Present:"#PLUME",
    Mention:"#KEEK",
    Dialogue:[
        "PLUME: The pain of your absence is sharp and haunting, and I would give anything not to know it; anything but never knowing you at all (which would be worse).",
        "PLUME: I can only hope that you are safe, Keek, wherever you are."
    ]
},
//🙤
//🙧 2.202 - BH OldStlmt: Flavor: Kousa mourns Foli
{
    Name:"BH_OldSettlement_Flavor_2",
    Era:2.202,
    Summary:"Kousa worries about Foli.",
    Present:"#KOUSA",
    Mention:"#FOLI",
    Dialogue:[
        "KOUSA: We can hear the other escape pods’ distress signals, which gives me hope. Foli, are you still here? I am unsure how to survive in this place without you.",
        "KOUSA: (I am unsure how to be me without you.)"
    ]
},
//🙤
//🙧 2.203 - BH OldStlmt: Flavor: Plume worries about his brother
{
    Name:"BH_OldSettlement_Flavor_3",
    Era:2.203,
    Summary:"Plume worries about his brother (Keek?)",
    Present:"#PLUME",
    Mention:"#zzz_Plume_s_brother",
    Dialogue:[
        "PLUME: My brother wasn’t in Escape Pod 1 with us. Was he in Pod 2, or Pod 3? Was he able to board an escape pod at all?",
        "PLUME: We sacrificed too much arriving here. I cannot (I will not) allow our clan’s greatest loss to be in vain."
    ]
},
//🙤
//🙧 2.204 - BH OldStlmt: Flavor: Thatch thinks of Melorae
{
    Name:"BH_OldSettlement_Flavor_4",
    Era:2.204,
    Present:"#THATCH",
    Mention:"#MELORAE",
    Dialogue:["THATCH: Is the hardest part of this tragedy not knowing who we may have lost? Or will the hardest part come later, when we learn? (Be well, Aunt Melorae...)"],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 2.501 - BH OldStlmt: Sightings of the Quantum Moon. Note: “Hollow’s Lantern” is now named!
{
    Name:"BH_OldSettlement_QuantumMoonSighting",
    Era:2.501,
    Present:"#FILIX #THATCH #PLUME",
    Topics:"#quantum moon",
    Dialogue:[
        "FILIX: Has anyone observed the phantom moon that sometimes greets us in the night sky? Your thoughts interest me.",
        "THATCH: I compliment your eyes! How do you imagine it disappears? Hypothesis: Could it be a shift in the light spectrum?",
        "PLUME: Suppose this moon is too shy to show us its face.",
        "PLUME: I’m interested in your playful moon. Is it much like its violent friend (Hollow’s Lantern)?",
        "THATCH: Imagine if there were two volcanic moons.",
        "PLUME: Then I imagine there’d be none of us left!",
        "FILIX: Hypothesis: There can exist too much lava.",
        "THATCH: I’d strongly prefer we test the null hypothesis.",
        "FILIX: This moon isn’t volcanic (to my unaided eyes). Sometimes it leaves its friend Hollow’s Lantern for nights at a time.",
        "PLUME: The nights the moon circles this planet appear random. It seems to travel as it likes."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 2.901 - BH OldStlmt: No longer waiting for rescue; decide to migrate to the northern glacier.
{
    Name:"BH_OldSettlement_MigrationPlan",
    Era:2.901,
    Summary:"Plume, Thatch and Filix decide to migrate away from the Escape Pod (as they no longer believe in rescue) and towards the northern glacier.",
    Present:"#PLUME #THATCH #FILIX",
    Dialogue:[
        "PLUME: Given concerns about our settlement’s stability, where should we construct a new, less temporary shelter?",
        "THATCH: We need to stay close to the escape pod so Filix can monitor incoming messages. We can’t be rescued if we aren’t present to respond.",
        "FILIX: I don’t believe anyone is coming to save us, Thatch. Now we must save ourselves.",
        "PLUME: I agree. We’re here because the Eye’s signal called to us and we followed. If we’re to find it, we need to not merely survive, but thrive.",
        "PLUME: I believe we should migrate to the northern glacier.",
        "FILIX: What if we use gravity crystals to craft a stable path?",
        "THATCH: Building beneath the crust again would shelter us from the volcanic moon’s eruptions.",
        "THATCH: This is a wise point, Plume, and eloquently made. If moving to the northern glacier will keep us safer, then that is what we should do."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 3.301 - BH QuGrove(ToQK): Plume panics at the sight of quantum behavior.
{
    Name:"BH_Quantum_ShardDiscovery",
    Era:3.301,
    Summary:"Plume panics at the sight of Brittle Hollow’s quantum grove. Thatch and Filix encourage studying the shard, which looks unlike any other rock on Brittle Hollow.",
    Present:"#PLUME #THATCH #FILIX",
    Topics:"#quantum",
    Dialogue:[
        "PLUME: The <i>trees</i> are moving! The trees in this grove wander about freely (the entire plant, roots and all)! This is <i>not normal</i>, even for this alien planet. And I never see them move! Is that even possible?!",
        "PLUME: If anyone else witnesses this disturbing behavior, I implore you, record your observations here. Either these trees are aberrant, or my brain must be!",
        "THATCH: Plume is right; the trees <i>do</i> move! I confess I didn’t notice until I read his notes.",
        "THATCH: Alarmingly, it isn’t only the trees: There is other matter in this area (such as that unusual shard of rock) moving in this same eerie way.",
        "FILIX: That rock is unusual for another reason, too, Thatch: It possesses color and texture I’ve never seen elsewhere on this planet!",
        "FILIX: Hypothesis: This rock shard’s presence is significant. We should study it! (Could it be what is causing other nearby objects to also move about this area?)"
    ]
},
//🙤
//🙧 3.302 - BH QuGrove(ToQK): Hypothesize the quantum shard comes from the wandering moon (now QM)
{
    Name:"BH_Quantum_ShardDiscovery_2",
    Era:3.302,
    Summary:"Thatch, Plume and Filix conclude that the BH grove’s quantum behavior is caused by the local quantum shard. As the same type of rock cannot be found elsewhere on Brittle Hollow, Plume hypothesizes that it originated from the Quantum Moon. Filix notes that the shard emits a ‘unique signal’ common with the Quantum Moon.",
    Present:"#THATCH #PLUME #FILIX",
    Topics:"#quantum moon",
    Dialogue:[
        "THATCH: Plume, Filix, and I have determined this atypical shard of rock is the reason objects in this grove are behaving in a quantum manner.",
        "THATCH: The only other object we’ve observed displaying this quantum behavior is the <color=lightblue>wandering moon</color>. I imagine the moon’s behavior and this grove’s are related.",
        "PLUME: In her note from earlier, Filix mentions this strange type of rock isn’t found elsewhere on <color=lightblue>Brittle Hollow</color>. What if it isn’t originally from this planet?",
        "PLUME: Hypothesis: This “quantum shard” is from the <color=lightblue>wandering (quantum) moon</color>. Perhaps it is even a small piece of the moon itself.",
        "FILIX: Of note: A unique signal is coming from this shard! Curiously, our friend the <color=lightblue>wandering moon</color> sounds the same.",
        "FILIX: I’ve also heard the same signal this shard produces calling out from <color=lightblue>Giant’s Deep</color>,<color=lightblue>Timber Hearth</color>, and the <color=lightblue>Hourglass Twins</color>. Suppose there are other shards like this one!"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
// Nomai from Brittle Hollow recreate gravity cannons and shuttles then reunite with Ember Twin.
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//              ███████ ████████ ██████   █████  ███    ██ ██████  ███████ ██████                //
//              ██         ██    ██   ██ ██   ██ ████   ██ ██   ██ ██      ██   ██               //
//              ███████    ██    ██████  ███████ ██ ██  ██ ██   ██ █████   ██   ██               //
//                   ██    ██    ██   ██ ██   ██ ██  ██ ██ ██   ██ ██      ██   ██               //
//              ███████    ██    ██   ██ ██   ██ ██   ████ ██████  ███████ ██████                //
//                                                                                               //
//        ███████ ███    ███ ██████  ███████ ██████      ████████ ██     ██ ██ ███    ██         //
//        ██      ████  ████ ██   ██ ██      ██   ██        ██    ██     ██ ██ ████   ██         //
//        █████   ██ ████ ██ ██████  █████   ██████         ██    ██  █  ██ ██ ██ ██  ██         //
//        ██      ██  ██  ██ ██   ██ ██      ██   ██        ██    ██ ███ ██ ██ ██  ██ ██         //
//        ███████ ██      ██ ██████  ███████ ██   ██        ██     ███ ███  ██ ██   ████         //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 1.001 - ET EPod 2: Flight log, surface too hot.
{
    Name:"CT_EscapePod_FlightLog",
    Era:1.001,
    Dialogue:[
        "ALERT. Collision imminent. Preparing for impact.",
        "BEGIN FLIGHTLOG: Escape Pod 2. Vessel has been mortally injured. Emergency sequence activated. Awaiting departure from Vessel.",
        "Launching Escape Pod 3... Now launching Escape Pod 2.",
        "Scanning external environment... Scan complete. External temperature is prohibitively high.Verdict: INHOSPITABLE. Do not seek shelter on planet surface."
    ],
},
//🙤
//🙧 1.002 - ET EPod 2: Annona asks for news of the other escape pods.
{
    Name:"CT_EscapePod_CrashSiteRecording",
    Era:1.002,
    Summary:"Annona asks for news of the other escape pods’ state.",
    Present:"#ANNONA #RHUS #BUR",
    Dialogue:[
        "ANNONA: We need status reports for all systems, but initial things first: Is everyone unharmed?",
        "RHUS: Our escape pod’s passengers are afraid, but physically well, Annona; everyone survived the crash.",
        "ANNONA: This is a relief, at least. You have my gratitude. Bur, were you able to find the other escape pods’ distress signals?",
        "BUR: I can hear both signals somewhere in this star system, but I don’t believe either escape pod crashed on the same planet as us."
    ]
},
//🙤
//🙧 1.003 - ET EPod 2: Nomai start exploring the caves
{
    Name:"CT_EscapePod_CrashSiteRecording_2",
    Era:1.003,
    Summary:"The Nomai just entered below the surface and decide to build shelter within the caves. They split into groups to better explore, and leave marks on walls in order not to get lost.",
    Present:"#MELORAE #ANNONA #RHUS",
    Dialogue:[
        "MELORAE: The heat from this star system’s sun is more bearable below the surface.",
        "MELORAE: When our escape pod punctured this planet’s surface, it broke into what scans show is a cave system with much cooler air. I would recommend we seek a site down there to build a long-term shelter, Annona, but these passages are a maze!",
        "ANNONA: Even with this danger, they are still our best chance for survival. We’ll form teams and descend into the caves to look for a shelter site. We can mark our findings on the walls to avoid becoming irreversibly lost.",
        "ANNONA: Be cautious, everyone.",
        "RHUS: And be aware of the sand as you search. It appears to be rising gradually."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 1.051 - ET EPod 2: Melorae warns against following the path to the anglerfish fossil
{
    Name:"CT_EscapePod_PathToFossil",
    Era:1.051,
    Summary:"Melorae warns against following the path to the anglerfish fossil.",
    Present:"#MELORAE",
    Mention:"#COLEUS",
    Dialogue:["MELORAE: Do not follow this tunnel to its end! (Coleus and I will examine the horror that lies at its terminus later, provided we live through this.)"]
},
//🙤
//🙧 1.052 - ET EPod 2: Rhus found a path with nothing but rocks
{
    Name:"CT_EscapePod_PathToRocks",
    Era:1.052,
    Present:"#RHUS",
    Dialogue:[
        "RHUS: Keep moving, friends: There is nothing of interest at the end of this passage but rocks.",
        "RHUS: And while these rocks are interesting, they can wait until a less urgent time."
    ]
},
//🙤
//🙧 1.053 - Annona found breathable air
{
    Name:"CT_EscapePod_PathToOxygen_1",
    Era:1.053,
    Summary:"Annona found a passage to breathable air.",
    Present:"#ANNONA",
    Dialogue:["ANNONA: Of note: This passage leads to breathable air. Refill your supply tank there (we cannot tell how far or deep these tunnels may wind), but do not linger, as the area is exposed to the heat of this alien sun."]
},
//🙤
//🙧 1.054 - Annona recommends refilling air supply tank
{
    Name:"CT_EscapePod_PathToOxygen_2",
    Era:1.054,
    Present:"#ANNONA",
    Dialogue:["ANNONA: Refill your air supply tank and return quickly."]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 1.101 - Melorae and Coleus found the right cave
{
    Name:"CT_EscapePod_PathToCity_1",
    Era:1.101,
    Summary:"Melorae and Coleus found the most promising cave, in which the Sunless City will be built.",
    Present:"#MELORAE #ANNONA #COLEUS",
    Dialogue:[
        "MELORAE: We have found an enormous cavern at the end of this passage that appears promising! I believe we could construct long-term shelter there.",
        "ANNONA: The cavern Melorae found is a wise choice for shelter. Could one of you mark directions for the others to follow?",
        "COLEUS: This is the start of the path to the shelter site. I’ve left directions to guide you there.",
        "MELORAE: Of note: We must hurry, as the pathway there is filling with sand. Do not allow yourself to be buried by sand, and make sure no one is lost!"
    ]
},
//🙤
//🙧 1.102 - Path to future Sunless city
{
    Name:"CT_EscapePod_PathToCity_1b",
    Era:1.102,
    Summary:"Coleus gives instructions for the path to the shelter site.",
    Present:"#COLEUS",
    Dialogue:["COLEUS: The path to the shelter site is somewhat convoluted, so follow the instructions ahead closely!"]
},
//🙤
//🙧 1.103 - Path to future Sunless city
{
    Name:"CT_EscapePod_PathToCity_2",
    Era:1.103,
    Summary:"Coleus gives instructions for the path to the shelter site.",
    Present:"#COLEUS",
    Dialogue:[
        "COLEUS: To reach the shelter site, walk forward until you meet the sandfall at the pit, then turn left. Continue to the room filled with rock column formations and climb upward through the opening above them.",
        "COLEUS: The sand here is rising, so you must be cautious but swift."
    ]
},
//🙤
//🙧 1.104 - Path to future Sunless city
{
    Name:"CT_EscapePod_PathToCity_3",
    Era:1.104,
    Summary:"Coleus gives instructions for the path to the shelter site. He and Melorae crafted a bridge.",
    Present:"#COLEUS",
    Mention:"#MELORAE",
    Dialogue:[
        "COLEUS: Be cautious crossing the chasm ahead. The bridge Melorae and I crafted will do its job, but it isn’t strong.",
        "COLEUS: Once on the far side, look for the tunnel hidden behind the falling sand. Follow it, and you’ll reach the shelter site."
    ]
},
//🙤
//🙧 1.105 - Path to future Sunless city
{
    Name:"CT_EscapePod_PathToCity_4",
    Era:1.105,
    Summary:"Coleus gives instructions for the path to the shelter site.",
    Present:"#COLEUS",
    Dialogue:["COLEUS: You’re doing well! There’s only a little farther left to go now until you reach the shelter site. You can rest there. Hurry, before the sand comes!"]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 3.001 - First talk of the Quantum Moon
{
    Name:"CT_QuantumMoonObservation",
    Era:3.001,
    Summary:"Ember Twin Nomai first discuss the Quantum Moon. Annona first mentions the possibility for macroscopic quantum mechanics.",
    Present:"#MELORAE #BUR #ANNONA",
    Topics:"#quantum moon",
    Dialogue:[
        "MELORAE: This planet sometimes (and only sometimes) has a moon! This is also of note: It disappears if no one is watching it! Isn’t that a fascinating orbital characteristic?",
        "BUR: I found your note, Melorae; kindly count me among this moon’s admirers! What is happening when it disappears (I doubt it ceases to exist)? Does it move to another location?",
        "ANNONA: I believe so. Not only does the moon appear around Brittle Hollow, I can confirm it sometimes orbits Timber Hearth, as well.",
        "MELORAE: This is my first time encountering a natural satellite with the ability to vanish when not being watched. We should study it! Or, even better, we should travel there!",
        "BUR: I agree! Our first step would be determining a method to track this phantom moon so that we can always know where it is.",
        "ANNONA: Given its reluctance to move while consciously observed, it might be a form of macroscopic quantum mechanics."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 3.101 - QM Locator almost done. QM has a name but Bur still calls it “phantom moon”
{ // Though “Quantum Moon” was decided for its name, Bur still calls it "phantom moon."
    Name:"CT_QuantumMoonObservation_2",
    Era:3.101,
    Present:"#ANNONA #MELORAE #BUR",
    Topics:"quantum moon",
    Dialogue:[
        "ANNONA: The Quantum Moon locator is functioning. We have markers for each of the places the moon goes.",
        "MELORAE: Annona, Bur, I just observed the Quantum Moon in orbit around Dark Bramble.",
        "ANNONA: You have keen eyes, my friend. So this moon travels to a total of five locations, not four.",
        "BUR: I added a marker for Dark Bramble.",
        "BUR: I thought the locator now accounted for all of the phantom moon’s locations, but sometimes the locator can’t tell where the moon is. Perhaps there’s a problem with the device?",
        "MELORAE: It’s also possible there exists a sixth place in this star system to which the phantom moon travels.",
    ],
},
//🙤
//🙧 3.102 - QM Locator has been built; discuss what happens when the Quantum Moon disappears
{
    Name:"CT_QuantumMoonObservation-UNUSED",
    Era:3.102,
    Present:"#ANNONA #MELORAE #COLEUS #PYE",
    Topics:"#quantum moon",
    Dialogue:[
        "1. ANNONA: As can be observed from this Quantum Moon locator, the moon typically wanders throughout the solar system.",
        "2. ANNONA: However, at certain intervals, the locator is unable to tell us where the Quantum Moon is. Its indicator just spins endlessly. What does this mean?",
        "3. Melorae: When the moon is visible, it’s always visiting a planet (one of five) in this solar system.",
        "4. Melorae: Hypothesis: There exists a sixth planet we haven’t yet observed, and the Quantum Moon travels there.",
        "5. COLEUS: Do you suppose this theoretical planet is hidden?",
        "6. PYE: If it isn’t a planet we can see, it must be much farther away from the Hourglass Twins than the rest of the planets (perhaps even outside of this solar system).",
        "7. COLEUS: Given the other places the Quantum Moon are all within this solar system, the sixth location likely lies within it, also.",
        "8. COLEUS: I don’t imagine this is likely, but is it possible the moon briefly ceases to exist?"
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 3.201 - Melorae and Coleus study the quantum shard. They know the QM by name.
{
    Name:"CT_Quantum_WanderingRock_1a",
    Era:3.201,
    Summary:"Melorae and Coleus notice a quantum shard which can wander between different caves on Ember Twin, like the Quantum Moon.",
    Present:"#MELORAE #COLEUS",
    Topics:"#quantum #quantum entanglement",
    Dialogue:[
        "MELORAE: This rock is very familiar! Did you travel here, my sedimentary friend? Because your unique color and texture appears identical to a rock I met earlier.",
        "MELORAE: Wasn’t this same rock fragment in the cave we found at the bottom of the dry lakebed (at the north pole)?",
        "COLEUS: An update: Melorae and I went back to the Lakebed Cave and observed this rock again. Sometimes it’s there, and sometimes it isn’t.",
        "MELORAE: That means this rock wanders like the Quantum Moon does. How curious!",
        "COLEUS: We plan to reexamine the northern Lakebed Cave. (Maybe our friendly rock will meet us down there!)"
    ]
},
//🙤
//🙧 3.202 - Coleus disappeared today; Melorae gets help from the Sunless City
{
    Name:"CT_Quantum_WanderingRock_2",
    Era:3.202,
    Summary:"Melorae first gets help from the Sunless City to search for the missing Coleus.",
    Present:"#MELORAE #BUR #ANNONA",
    Mention:"#COLEUS",
    Dialogue:[
        "MELORAE: Friends, if you find any sign of Coleus, I implore you to tell me! He vanished without a trace during our research trip, and has been missing ever since.",
        "BUR: Melorae, some of us from the Sunless City are here to help search for Coleus. Can you tell us more about your expedition?",
        "MELORAE: You have my gratitude, Bur! Coleus and I were studying the caves’ geology. We hoped to learn more about a unique and wandering rock that visits several different caves in the area.",
        "ANNONA: Where was young Coleus lost, Melorae?",
        "MELORAE: He disappeared in the cave at the bottom of the dry lakebed at the north pole. It happened in an instant, and without warning.",
        "MELORAE: I turned away from Coleus to examine a sample, and when I turned back, he simply wasn’t there anymore. He had a limited supply of air, Annona! I’m afraid for him!",
        "ANNONA: Hypothesis: We will learn more by examining the northern Lakebed Cave where Coleus disappeared. Search quickly, everyone; we have no time to squander!"
    ]
},
//🙤
//🙧 3.203 - Coleus disappeared two days ago. Peeps seem unknowledgeable of quantum stuff
{
    Name:"CT_Quantum_EntanglementHint",
    Era:3.203,
    Summary:"Melorae looks for Coleus, who has been missing for two days.",
    Present:"#MELORAE #ANNONA #BUR",
    Mention:"#COLEUS",
    Topics:"#quantum entanglement",
    Dialogue:[
        "MELORAE: If you’ve come here to look for Coleus, this is where we were when he vanished. He’s been missing for two days now!",
        "ANNONA: Your strange, wandering rock friend is here, though Coleus isn’t.",
        "MELORAE: Coleus and I observed this unusual-looking rock shard (and several smaller rocks) in at least two other caverns. I’m unsure if this is relevant.",
        "BUR: What happened before Coleus disappeared?",
        "MELORAE: We were examining the different rocks. I recall Coleus standing on the largest one (the wandering rock). I was taking notes, and then my lantern died.",
        "MELORAE: When I lit it again, Coleus and the rock were both gone."
    ]
},
//🙤
//🙧 3.204 - Coleus disappeared several days ago
{
    Name:"CT_Quantum_WanderingRock_1b",
    Era:3.204,
    Summary:"Melorae panics, as Coleus went missing “several days ago.”",
    Present:"#MELORAE",
    Mention:"#COLEUS",
    Topics:"#quantum #quantum entanglement",
    Dialogue:["MELORAE: Coleus is missing! He vanished from the Lakebed Cave (the one at the bottom of the dry lakebed at the north pole) several days ago, and we’re unable to find any trace of him. I don’t know how much air he had when he disappeared. I beg any friend reading this, help us recover Coleus!"]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//                ██████  ███████ ██    ██ ███    ██ ██ ████████ ███████ ██████                  //
//                ██   ██ ██      ██    ██ ████   ██ ██    ██    ██      ██   ██                 //
//                ██████  █████   ██    ██ ██ ██  ██ ██    ██    █████   ██   ██                 //
//                ██   ██ ██      ██    ██ ██  ██ ██ ██    ██    ██      ██   ██                 //
//                ██   ██ ███████  ██████  ██   ████ ██    ██    ███████ ██████                  //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
// The GD and TH quantum shard are studied, rule of quantum imaging is discovered
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.301 - Coleus is finally found and discovers the rule of quantum entanglement
{ // They know of at least one other quantum rule ==> This would be after the discovery of quantum imaging?
    Name:"CT_Quantum_ColeusTrapped",
    Era:4.301,
    Summary:"Coleus figures out the rule of quantum entanglement. Melorae already knew of other quantum rules before this.",
    Present:"#COLEUS #MELORAE",
    Topics:"#quantum entanglement",
    Dialogue:[
        "COLEUS: How curious! This rock took me with it to a new location. I wonder why this happened?",
        "COLEUS: Curious, but also alarming: This new cave appears to lack an entrance or exit. Also, the rock that brought me here disappeared while I wasn’t watching.",
        "COLEUS: The wandering rock has returned! Never before have I been so delighted to see a sedimentary specimen.",
        "COLEUS: I wonder if I myself became quantum briefly when the rock carried me here! This seems the clearest explanation. Hypothesis: If the rock can bring me here, it can also carry me out.",
        "COLEUS: My hypothesis was correct! I can travel on this rock, as long as I’m not observing my surroundings (meaning I must be in complete darkness). I’m going to bring my mentor here to see this.",
        "COLEUS: Melorae is here now, too. We theorize when a conscious being is in contact with a quantum object and ceases to act as an observer (explaining the need for darkness), the being can become entangled with that quantum object, and they move together.",
        "MELORAE: Friends, Coleus has discovered a new quantum rule! (He has also promised me he’ll never vanish again, even if he <i>does</i> learn something useful from it!)"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.401 - Brittle Hollow & Ember Twin Eye Shrines are built (Entrance sign)
// The text is exactly the same on ET & BH, so the shrines were built (or at least updated) after the Nomai reunited.
{
    Name:"BH_City_EyeShrine_Entrance",
    Era:4.401,
    Topics:"#eye of the universe #eye shrine",
    Dialogue:[
        "Be welcomed in this place. This shrine is a space to reflect on what brought us to this star system: the signal from the Eye.",
        "We observed the Eye’s signal in our travels, and followed it here to find its source.",
        "What we know is this: The source of the signal (which we have chosen to call the Eye of the universe) is older than this universe itself. The rest, we have yet to learn.",
        "Enter, and open your mind to its possibilities."
    ],
},
{
    Name:"CT_City_EyeShrine_Entrance",
    Era:4.401,
    Topics:"#eye of the universe #eye shrine",
    Dialogue:[
        "Be welcomed in this place. This shrine is a space to reflect on what brought us to this star system: the signal from the Eye.",
        "We observed the Eye’s signal in our travels, and followed it here to find its source.",
        "What we know is this: The source of the signal (which we have chosen to call the Eye of the universe) is older than this universe itself. The rest, we have yet to learn.",
        "Enter, and open your mind to its possibilities."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.501 - Anonymous messages left in the BH & ET Eye shrines
{
    Name:"BH_City_EyeShrine_1",
    Era:4.501,
    Topics:"#eye of the universe #eye shrine",
    Dialogue:[
        "What is the Eye of the universe?",
        "The Eye is the source of the signal that brought us here.",
        "Suppose the Eye is a more advanced being.",
        "The Eye is older than this universe, so imagine how much it could teach us.",
        "Perhaps it is a cosmic library!"
    ],
},
{
    Name:"BH_City_EyeShrine_2",
    Era:4.501,
    Topics:"#eye of the universe #eye shrine",
    Dialogue:[
        "What is the Eye’s signal?",
        "Suppose the Eye wishes to communicate.",
        "The signal is a call. Were we the intended audience?",
        "The signal is the Eye’s voice. It speaks a language we don’t yet know.",
        "Or maybe the signal is the Eye’s attempt at expressing itself.",
        "Of note: From the signal, we were able to determine the Eye’s approximate age (or perhaps its lack of age?)."
    ],
},
{
    Name:"BH_City_EyeShrine_3",
    Era:4.501,
    Topics:"#eye of the universe #eye shrine",
    Dialogue:[
        "How can the Eye be older than the universe itself?",
        "Suppose it is a relic from a previous universe.",
        "The early universe was unimaginably hot and dense. If anything existed before, it would have been destroyed.",
        "Suppose the universe is older than previously assumed."
    ],
},

{
    Name:"CT_City_EyeShrine_1",
    Era:4.501,
    Dialogue:[
        "If the Eye called to us, why won’t it reveal itself? Why is it so difficult to locate it?",
        "Did something happen to it?",
        "Did the signal stop? Does the Eye no longer desire to be found?",
        "Perhaps this isn’t the Eye’s choice. The Eye may not be able to communicate with us more than it already has."
    ],
},
{
    Name:"CT_City_EyeShrine_2",
    Era:4.501,
    Dialogue:[
        "Did the Eye deliberately call out to us by sending the signal, or did we hear the signal by coincidence?",
        "We could be seeing meaning where there is none. Suppose the signal was produced incidentally.",
        "Does that mean the Eye is any less important, though?",
        "Perhaps the Eye wanted to be found (could it be sentient?). Maybe it chose us.",
        "Does the Eye desire something from us? Could it need us in some way?",
        "Maybe it doesn’t have to be us."
    ],
},
{
    Name:"CT_City_EyeShrine_3",
    Era:4.501,
    Dialogue:[
        "Is the Eye natural, or artificial?",
        "Maybe someone built it.",
        "The Eye is older than the universe itself. How could something exist before its creator?",
        "It could be naturally occurring, though this doesn't answer how the Eye could be as old as it is."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.601 - Kid Solanum’s journal
{
    Name:"CT_City_Journal_ChildIlex",
    Era:4.601,
    Present:"#SOLANUM",
    Mention:"#zzz_Solanum_s_father",
    Topics:"#eye of the universe",
    Dialogue:[
        "SOLANUM: I don’t know why everyone says the Eye is important.",
        "SOLANUM: They say it brought us to this solar system, but is that good? Dad told me lots of Nomai died when our clan came here.",
        "SOLANUM: What if the Eye wanted that to happen?",
        "SOLANUM: What if the Eye isn’t something good?"
    ],
},
//🙤
//🙧 4.611 - Kid Solanum writes a poem about the sand column
{
    Name:"CT_Fossil_ExitHint",
    Era:4.611,
    Summary:"Solanum writes a poem about the sand column.",
    Present:"#SOLANUM",
    Dialogue:["The sands go to and fro, Reversing their swift flow. If you’re inside When turns the tide, Then skyward you should go."],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.631 - Anglerfish study: Coleus notices children playing, hasn’t found entrance yet
{
    Name:"CT_EscapePod_FossilDiscovery",
    Era:4.631,
    Summary:"Melorae and Coleus admire the anglerfish fossil from afar, wondering how to get closer — and how the fish itself was able to get inside.",
    Present:"#MELORAE #COLEUS",
    Mention:"#zzz_Various_children",
    Topics:"#anglerfish fossil",
    Dialogue:[
        "MELORAE: This is amazing (look inside the cave)! How did this come to rest here? We haven’t encountered others in these caves; I think this is a rare find.",
        "MELORAE: From what we can see, Coleus and I believe the specimen must be very old indeed. Imagine what we might learn if we could examine it!",
        "COLEUS: An update: We need to find a way inside quickly, Melorae, because when I returned here to search for an entrance to the cave, there were children playing on the specimen!",
        "COLEUS: We both agree it’s unlikely this dry planet is this horror’s place of origin (especially considering what we observed during the <color=orange>Vessel</color>’s evacuation).",
        "MELORAE: Clearly this hole is too small for it to have fit through. Hypothesis: There is another entrance to this cave. If there is, Coleus and I will find it! We can’t leave valuable information undiscovered!"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.651 - Taget too big to fit through the Anglerfish Overlook hole
{
    Name:"CT_City_KidDirectionToFossil_1",
    Era:4.651,
    Summary:"Taget can’t fit through the Anglerfish Overlook hole anymore because he grew bigger, and is now taller than Laevi. Laevi: “Who cares? Ilex is still tallest.”",
    Present:"#LAEVI #TAGET #ILEX #LAMI",
    Topics:"#anglerfish fossil",
    Dialogue:[
        "LAEVI: We’re meeting in the <color=orange>Fossil Fish Cave</color> to play the game! If you’re too big to climb through the <color=orange>Anglerfish Overlook</color> hole:",
        "LAEVI: You’ll have to go the long way, but it isn’t far. Go to <color=orange>Stepping Stone Cave</color>, and then up and into the <color=orange>Fossil Fish Cave</color>.",
        "TAGET: I tried to get to the fossil fish through <color=orange>Stepping Stone Cave</color>, but I couldn’t find the entrance. Where is it?",
        "ILEX: Remember to feed the fossil fish first! If you go to the <color=orange>Anglerfish Overlook</color> and throw a light into his mouth, he’ll show you the way.",
        "LAMI: Taget can’t fit through the <color=orange>Anglerfish Overlook</color> hole anymore because he grew bigger! He’s taller than Laevi now.",
        "LAEVI: Who cares? Ilex is still tallest."
    ]
},
//🙤
//🙧 4.652 - Solanum short enough to feed a lamp.
{
    Name:"CT_City_KidDirectionToFossil_2",
    Era:4.652,
    Summary:"Solanum is short enough to feed the anglerfish a lamp. Lami & Laevi’s parents are tall, therefore Lami won’t be short for long.",
    Present:"#TAGET #SOLANUM #LAEVI #LAMI",
    Mention:"#zzz_Laevi_Lami_s_Mother #zzz_Laevi_Lami_s_Father",
    Topics:"#anglerfish fossil",
    Dialogue:[
        "TAGET: Are we playing the fossil fish game tonight?",
        "SOLANUM: I fed the fossil fish a new lantern. If you go to Stepping Stone Cave, the entrance to the Fossil Fish Cave is easy to see now.",
        "LAEVI: Gratitude, Solanum! It’s good you’re small enough to climb in through the hole at the Anglerfish Overlook.",
        "LAMI: I’m still small enough!",
        "LAEVI: You won’t be for long. Mom and Dad are tall, so you and I will be tall, too."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.701 - Laevi changes the anglerfish game’s rules
{
    Name:"CT_Fossil_GameRules",
    Era:4.701,
    Summary:"After Laevi heard “Aunt Pye” say that real anglerfish are blind, the game’s rules changed.",
    Present:"#LAEVI #LAMI #ILEX",
    Mention:"#PYE",
    Topics:"#anglerfish fossil",
    Dialogue:[
        "LAEVI: Whoever was it when we ended last time is the anglerfish.",
        "LAEVI: <i>Rule change</i>! The anglerfish now has to wear a blindfold. (And do <i>not</i> peek!)",
        "LAEVI: The rest of us (the littlefish) line up against one wall. When the anglerfish says go, the littlefish sneak across to the other side.",
        "LAEVI: If the anglerfish catches you, you’re eaten.",
        "LAEVI: Last littlefish to be caught is the new anglerfish! (The old anglerfish gives the new anglerfish the blindfold and becomes a littlefish.)",
        "LAMI: Why are we changing it? It’s too hard if you can’t see anything!",
        "LAEVI: Aunt Pye says real anglerfish are blind, so you have to wear a blindfold! The rule stands!",
        "ILEX: Rule update: It’s okay if younger kids don’t wear the blindfold when they’re it. (The rest of us will still wear it for scientific accuracy and to make the game more even.)"
    ]
},
//🙤
//🙧 4.751 - Anglerfish study: children included blindfold rule
{
    Name:"CT_Fossil_AnglerfishResearch",
    Era:4.751,
    Summary:"Melorae and Coleus continue studying the anglerfish fossil. Coleus notices the children are back, and have this time incorporated the rule that the anglerfish is blind.",
    Present:"#MELORAE #COLEUS",
    Mention:"#zzz_Various_children",
    Topics:"#anglerfish fossil",
    Dialogue:[
        "MELORAE: Anglerfish study",
        "COLEUS: An update: Melorae, while I was here making sketches of the anglerfish, I observed the children I saw earlier playing here again. They’ve added a rule to their game that incorporates our research (it’s wonderful)!",
        "MELORAE: I’m entirely delighted! It’s never too early to appreciate biology!",
        "COLEUS: This anglerfish’s digestive tract suggests death by starvation.",
        "MELORAE: Visually, the specimen appears to be of the same species as the anglerfish in <color=lightblue>Dark Bramble</color>. We don’t believe it originated from this planet.",
        "MELORAE: The long growth protruding from its head is bioluminescent. Perhaps it used this growth to attract prey (a lure?)."
    ]
},
//🙤
//🙧 4.781 - Ember Twin Kids discuss who was it last time
{
    Name:"CT_UnusedTranslations_Beta_Nomai_Kids",
    Era:4.781,
    Summary:"Nomai kids discuss who was “it” the last time they played the anglerfish game.",
    Present:"#ILEX #LAEVI #LAMI #SOLANUM #TAGET",
    Topics:"#anglerfish fossil",
    Dialogue:[
        "SOLANUM: Who was it when we last quit:",
        "SOLANUM: Me",
        "LAEVI: Me",
        "ILEX: I was",
        "ILEX: Me again",
        "LAMI: Me!",
        "SOLANUM: Me_test",
        "SOLANUM: Me_test2",
        "LAMI: Me",
        "TAGET: It was me",
        "SOLANUM: Me_test3",
        "ILEX: I was_test",
        "TAGET: Me again",
        "LAEVI: Me_test",
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 4.801 - GD: Building the Tower of Quantum Trials
{
    Name:"GD_Quantum_Entrance_1",
    Era:4.801,
    Dialogue:["Be welcomed in this place. This tower shares with all who ask the knowledge needed to make his or her first quantum journey."],
},{
    Name:"GD_Quantum_Entrance_2",
    Era:4.801,
    Dialogue:["Enter this place without friends, however; these are lessons to learn for yourself."],
},{
    Name:"GD_Quantum_PuzzleHint_1",
    Era:4.801,
    Dialogue:[
        "<i>(UNUSED: “To observe a quantum object causes stillness.”)</i>",
        "Seek the wandering arch."
    ],
},{
    Name:"GD_Quantum_PuzzleHint_2",
    Era:4.801,
    Dialogue:["Observing a quantum object; observing an image of a quantum object. These are the same."],
},{
    Name:"GD_Quantum_PuzzleHint_3",
    Era:4.801,
    Dialogue:["The arch and the crystal do not naturally meet."],
},{
    Name:"GD_Quantum_PuzzleHint_4",
    Era:4.801,
    Dialogue:["This is the last one (but we made it harder)."],
},{
    Name:"GD_Quantum_FinalRoom",
    Era:4.801,
    Dialogue:[
        "We offer our congratulations! You’ve learned the rule of quantum imaging. Take this knowledge with you on the remainder of your quantum pilgrimage.",
        "Remember, the other quantum shards have other lessons to teach.",
        "Our curiosity goes with you on your journey. You walk in the footsteps of those who came before you, and your path guides those who will follow later."
    ],
},
//🙤
//🙧 4.851 - QM: Quantum Shrine signs about recalling all three quantum rules
{
    Name:"QM_Shrine_QuantumClues_1",
    Era:4.851,
    Dialogue:["You have recalled the rule of quantum imaging."],
},{
    Name:"QM_Shrine_QuantumClues_2",
    Era:4.851,
    Dialogue:["Recall the rule of quantum entanglement."],
},{
    Name:"QM_Shrine_QuantumClues_3",
    Era:4.851,
    Dialogue:["Recall the rule of the sixth location."],
},
//🙤
//🙧 4.901 - Signs written by Bells to welcome and teach all QM pilgrims of the Nomai history
{
    Name:"BH_Quantum_WindowNote",
    Era:4.901,
    Summary:"Bells welcomes visitors to the Tower of Quantum Knowledge.",
    Present:"#BELLS",
    Topics:"#quantum moon",
    Dialogue:[
        "BELLS: Beneath your feet lies the <color=orange>Tower of Quantum Knowledge</color>.",
        "BELLS: If you are preparing to make your first pilgrimage to the <color=lightblue>Quantum Moon</color>, descend the steps to the entrance below. The knowledge held within will help you on your journey."
    ]
},{
    Name:"BH_Quantum_TowerEntrance",
    Era:4.901,
    Summary:"Bells welcomes visitors to the Tower of Quantum Knowledge.",
    Present:"#BELLS",
    Topics:"#quantum moon",
    Dialogue:[
        "BELLS: Be welcomed in this place! Above you stands the <color=orange>Tower of Quantum Knowledge</color>.",
        "BELLS: If you are making your first pilgrimage to the <color=lightblue>Quantum Moon</color>, ascend these stairs, and obtain the last of the knowledge you need for your journey."
    ]
},{
    Name:"BH_Quantum_PilgrimageHistory",
    Era:4.901,
    Summary:"Bells writes: “After the two divided groups were able to reunite, it became our clan’s united goal to find and visit the Quantum Moon. This took time, and many Nomai who dreamed of seeing the Quantum Moon died before we discovered how to make the journey.”",
    Present:"#BELLS",
    Topics:"#quantum moon",
    Dialogue:[
        "BELLS: If you’re here to make your first pilgrimage to the Quantum Moon, you are almost prepared to set out on this deeply significant journey. Before you do, pause, and remember your history.",
        "BELLS: We make this journey not only for ourselves, but also to honor the members of our clan who came before us: those who, after the crash that brought them to this star system, became stranded on Brittle Hollow and on Ember Twin, with no communication between these two groups of survivors.",
        "BELLS: These Nomai looked upward from two different planets and saw the same wandering moon visiting their skies. It was this moon (the Quantum Moon) that kept their curiosity alive during this long period of hardship.",
        "BELLS: After the two divided groups were able to reunite, it became our clan’s united goal to find and visit the Quantum Moon. This took time, and many Nomai who dreamed of seeing the Quantum Moon died before we discovered how to make the journey.",
        "BELLS: When you reach the Quantum Moon, recall these Nomai, and carry their curiosity onward with you."
    ]
},
//🙤

// {Name:"Annona’s Death",Type:"H3",Location:"BH"},

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//            ███████ ██    ██ ███████        ██        ████████ ██ ███    ███ ███████           //
//            ██       ██  ██  ██             ██           ██    ██ ████  ████ ██                //
//            █████     ████   █████       ████████        ██    ██ ██ ████ ██ █████             //
//            ██         ██    ██          ██  ██          ██    ██ ██  ██  ██ ██                //
//            ███████    ██    ███████     ██████          ██    ██ ██      ██ ███████           //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 5.101 - Finished building the Attlerock’s Eye signal locator
{
    Name:"TH_Museum_EyeSymbol",
    Era:5.101,
    Summary:"The search for the Eye of the universe resumes for the first time, as Cassava and Filix have finished constructing the Attlerock’s locator and they are about to start calibration.",
    Present:"#CASSAVA #FILIX",
    Dialogue:[
        "CASSAVA: We’re nearly ready! Filix and I have finished construction, and she says calibrating the device won’t take long.",
        "FILIX: Fortunately, the Attlerock’s lack of atmosphere will make calibration simple. After all this time, I’m thrilled to finally resume our search!"
    ],
},
//🙤
//🙧 5.102 - Attlerock Eye locator failed; Nomai discuss where to build a better locator
{
    Name:"THM_SignalDish_1",
    Era:5.102,
    Summary:"Testing of the Attlerock’s Eye locator is a failure, as it is not sensitive enough. The Nomai decide to find a better place to build a new locator.",
    Present:"#COLEUS #THATCH #FILIX #CASSAVA",
    Mention:"#PRIVET",
    Dialogue:[
        "COLEUS: I was upstairs testing the <color=orange>Eye signal locator</color>, and it can hear and follow the signals from the <color=lightblue>sun</color>, <color=lightblue>Giant’s Deep</color>, and <color=lightblue>Brittle Hollow</color>.",
        "COLEUS: However, something strange is happening when I ask the <color=orange>Eye signal locator</color> to follow the <color=lightblue>Eye</color>’s signal: The device’s indicator rotates wildly and never points to just one direction.",
        "THATCH: This is a curious result. It’s possible the <color=lightblue>Eye</color> has stopped calling out its signal.",
        "FILIX: I see! I most likely calibrated the locator incorrectly. Privet (my apprentice) and I will make adjustments and try again.",
        "FILIX: An update: Disappointingly, everything is correctly calibrated after all.",
        "CASSAVA: It saddens me to posit this, my friends, but I believe this <color=orange>locator</color> cannot detect the <color=lightblue>Eye</color>’s signal. We would need to build a more sensitive device if we want to locate the <color=lightblue>Eye of the universe</color>.",
        "THATCH: Then we will build it. Don’t lose hope, Cassava; our search for the <color=lightblue>Eye</color> is what brought our clan to this place. We won’t give up so easily!"
    ]
},
//🙤
//🙧 5.103 - Attlerock Eye locator failed; Plume offers building the Southern Observatory
{
    Name:"THM_SignalDish_2",
    Era:5.103,
    Summary:"Nomai debate where to build a bigger, more sensitive Eye locator. Coleus mentions having built the QM locator on Ember Twin prior to the clan reunion, and not recommending that place. Plume offers building a new building at the south pole of Brittle Hollow. Filix thinks building it there will make Conoy extremely happy.",
    Present:"#THATCH #PLUME #FILIX #COLEUS",
    Mention:"#CONOY #ANNONA",
    Dialogue:[
        "THATCH: Where should this new, more sophisticated locator be built? It may need to be larger than this Eye signal locator is.",
        "PLUME: The southern glacier on Brittle Hollow has ample available space. I could construct a new building to house this proposed locator.",
        "FILIX: Yes, let’s build there! I imagine our young friend Conoy would enjoy that immensely. He’s always held a great interest in the Eye, especially for a child born so long after the crash.",
        "PLUME: I will begin construction on Brittle Hollow’s south pole immediately, then!",
        "COLEUS: Annona and those of us originally stranded on Ember Twin built a Quantum Moon locator there, but the heat of the sun made its construction challenging. I wouldn’t recommend building on that planet."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 5.201 - Poke writes instructions for all users of the White Hole Station
{
    Name:"WH_WarpTowerInstructions",
    Era:5.201,
    Summary:"Poke gives instructions on how to use any warp tower. (Could have been written later, long after the WHS was actually built, as it offers the possibility for other warp towers to exist)",
    Present:"#POKE",
    Dialogue:[
        "POKE: Welcome to the <color=orange>White Hole Station</color>! If you fell through the black hole by accident (don't worry, you aren’t the first), this warp tower can return you to <color=lightblue>Brittle Hollow</color>.",
        "POKE: Every warp tower is tuned to a specific astral body. A tower's warp can only be used during the brief window when the tower is aligned with its corresponding astral body (in this case, <color=lightblue>Brittle Hollow</color>).",
        "You must be standing on the warp platform on the floor during this alignment to be warped.",
        "POKE: If you look up while the station is rotating, you can see the alignment happens when the astral body is directly overhead."
    ]
},
//🙤
//🙧 5.202 - Clary warped from WHS, proving the very first recreation of warp travel
{
    Name:"WH_TimeDelay_1",
    Era:5.202,
    Summary:"Clary just warped from the White Hole Station for the first time, proving that the Black Hole Forge successfully recreated warp travel. However, Poke notices that the readings monitoring the warp seem to violate causality, and urges Clary and Root to follow her to the White Hole Station to investigate.",
    Present:"#CLARY #FILIX #POKE",
    Mention:"#ANNONA #CASSAVA #ROOT",
    Dialogue:[
        "CLARY: To our friends on Brittle Hollow: I just warped here from the White Hole Station (on the other side of Brittle Hollow’s black hole)! Our design worked; we’ve successfully recreated warp travel!",
        "FILIX: This is wonderful news! I can’t wait to see the warp tower (although it’s been a long time since I’ve jumped through a black hole!).",
        "POKE: I don’t know how close it is to Annona’s original design, but as long as what we’ve built works, then I’m delighted! I knew we could do it (Cassava, I hope you’re reading this)!",
        "POKE: Wait, this can’t be correct. Clary, have you seen these readings? If they were accurate, they would violate causality. There must be an equipment error somewhere.",
        "POKE: I’m returning to the White Hole Station. If you and Root meet me there, we can run a full diagnostic and hopefully locate the problem.",
        "POKE: (Don’t tell Cassava.)"
    ],
},
//🙤
//🙧 5.203 - Pye and Ramie receive Poke’s records of the WHS & plan time travel experiment
{
    Name:"WH_TimeDelay_2",
    Era:5.203,
    Summary:"Pye and Ramie have reviewed records Poke sent them about the WHS warp receiver, and have decided to try recreating the negative time interval phenomenon at the High Energy Lab. Later, Pye urges Poke to come see the result.",
    Present:"#PYE #POKE #RAMIE",
    Mention:"#CLARY",
    Dialogue:[
        "PYE: Ramie and I reviewed the records you sent, Poke, and they appear to show Nomai are arriving at the warp receiver on <color=lightblue>Brittle Hollow</color> slightly <i>before</i> departing from the <color=orange>White Hole Station</color>.",
        "POKE: I understand it’s exceedingly odd, but Clary and I have tested and retested the equipment, and the result is the same every time someone warps.",
        "RAMIE: The interval is incredibly minuscule (roughly one hundred-thousandth of a second). Do you suppose our instruments can’t accurately measure time to such a small degree?",
        "PYE: As I’ve already told Ramie, these measurements can’t be accurate. How can a Nomai arrive on <color=lightblue>Brittle Hollow</color> before he or she ever stepped into the teleporter? The implications are absurd.",
        "POKE: I don’t disagree. It <i>would</i> mean I’ve inadvertently broken several fundamental theories regarding this universe. We would have to reconsider all of our beliefs about the nature of time.",
        "RAMIE: Yes, I hope so, too!",
        "RAMIE: Poke, as Pye is confident the reading is inaccurate, she’s kindly helping me attempt to recreate this phenomenon at the <color=orange>High Energy Lab</color>. We’re designing an experiment to take more data.",
        "PYE: An update: Poke, the <color=orange>High Energy Lab</color> is in the canyon on <color=lightblue>Ember Twin</color>’s equator. <i>Come here at once</i>. You need to see this."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 5.301  - Pye and Ramie start setting up the time travel experiment in the High Energy Lab
{
    Name:"CT_TLE_TimeTravelConfirmed1",
    Era:5.301,
    Summary:"Pye and Ramie set up the time travel experiment in the High Energy Lab to test whether the phenomenon is real, or just machine error.",
    Present:"#PYE #RAMIE",
    Dialogue:[
        "PYE: Records show Nomai arriving at the warp receiver on Brittle Hollow very slightly before departing from the White Hole Station. Ramie and I are devising an experiment to test if this is a real phenomenon or simple machine error.",
        "RAMIE: In theory, what we want to try to reproduce is a negative amount of time elapsing between something entering the black hole and exiting the white hole at its destination.",
        "PYE: Initial things first: Our experiment setup will first pair a small black hole core with a small white hole core to mimic the setup on the White Hole Station.",
        "RAMIE: Hypothesis: It is possible for an object to exit a white hole before entering the corresponding black hole.",
    ],
},
//🙤
//🙧 5.302  - Ramie and Pye close the High Energy Lab door while experimenting time travel
{
    Name:"CT_TLE_CityToExperimentHint",
    Era:5.302,
    Summary:"Ramie and Pye warn that the main door to the High Energy Lab needs to stay closed until they can prove or disprove the White Hole Station’s findings. Much later, Ramie updates this message to add that the High Energy Lab is now used to design the Ash Twin Project.",
    Present:"#RAMIE #PYE",
    Dialogue:[
        "RAMIE: Note: This door will need to remain closed for some time! Pye and I are running an experiment based on the extraordinary findings from the White Hole Station.",
        "PYE: Ramie and I will be running this experiment until one of us (specifically, me) can prove the other wrong, so although it’s inconvenient, the lab currently can only be accessed by the path from the Sunless City.",
        "RAMIE: Inviting sand inside would disrupt our setup and could have enormous consequences. (We realize this is an intriguing prospect, but the door must remain closed nonetheless!)",
        "RAMIE: An update: The High Energy Lab is now being used to design the Ash Twin Project! If you’re here to help (or even just to observe), be sure to use the Sunless City path to the lab.",
    ],
},
//🙤
//🙧 5.303  - Pye and Ramie reroute the Sunless City’s energy & prove time travel is possible
{
    Name:"CT_TLE_TimeTravelConfirmed2",
    Era:5.303,
    Summary:"Pye and Ramie, after rerouting the energy from the Sunless City, prove that time travel is possible.",
    Present:"#RAMIE #PYE",
    Mention:"#YARROW",
    Dialogue:[
        "RAMIE: An update: Our experiment here reproduced the anomaly in arrival and departure times, but Pye is unconvinced it’s more than an equipment error. I hope to strengthen the effect to render it visible to the unaided eyes.",
        "PYE: To that end, we’ve decided to try adding more energy. I imagine the Sunless City’s energy supply should prove sufficient.",
        "PYE: Of note, Ramie: Yarrow requests that we let him know before we reroute energy to the experiment.",
        "RAMIE: I’d hate to leave him in the dark!",
        "PYE: All available energy has been rerouted from the city to our experiment. Ramie and I are about to run a new test.",
        "RAMIE: Hypothesis confirmed! Hypothesis confirmed! I saw it! Pye saw it! <i>Hypothesis confirmed</i>!",
        "PYE: This is beyond extraordinary! This changes <i>everything</i>! What a beautiful day for the intersection of abstract theory and practical application!",
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 5.801 - Southern Observatory finished but fails to locate the Eye
{
    Name:"BH_Observatory_Computer",
    Era:5.801,
    Topics:"#eye of the universe",
    Dialogue:["ERROR: Unable to determine orbit. No signal detected matching any known criteria for the Eye of the universe."],
},
//🙤
//🙧 5.802 - Southern Observatory: Nomai discuss what they have learned so far about the Eye
{
    Name:"BH_Observatory_EyeSearch_1",
    Era:5.802,
    Present:"#CONOY #PLUME #PRIVET #AVENS #CASSAVA #MALLOW",
    Topics:"#eye of the universe",
    Dialogue:[
        "CONOY: What have we learned thus far in our search for the Eye of the universe?",
        "PLUME: Those of us on the Vessel originally followed the Eye’s signal to this star system, but we were unable to warp to the Eye itself.",
        "PRIVET: The locator we built on the Attlerock and the new, more sensitive locator we built here were both unable to detect any trace of the Eye’s signal.",
        "AVENS: Hypothesis: The Eye has stopped emitting its signal.",
        "CASSAVA: Suppose the Eye doesn’t wish to be found.",
        "PLUME: Cassava, how can you suggest that? The Eye’s signal called out to summon us to this star system!",
        "CASSAVA: I’m aware; I grew up hearing the Eye’s story. Yet we’re no closer to finding it than you were when you first arrived here.",
        "MALLOW: Based on our knowledge of the Quantum Moon, we believe the Eye is in orbit around this star system’s sun. This would mean the Eye is located within a finite (albeit enormous) range."
    ]
},
//🙤
//🙧 5.803 - Southern Observatory: Nomai think of other ways to find the Eye
{
    Name:"BH_Observatory_EyeSearch_2",
    Era:5.803,
    Summary:"Since locating the Eye’s signal seems hopeless, the Nomai discuss other ways to find it. The basic idea behind the Ash Twin Project (sending a visual probe in all directions at once thanks to a time loop) is developed, and the decision to build the OPC in orbit around Giant’s Deep is taken.",
    Present:"#AVENS #CASSAVA #CONOY #MALLOW #PRIVET",
    Mention:"#RAMIE #PYE",
    Topics:"#eye of the universe",
    Dialogue:[
        "CONOY: How should our methods change as we continue our search for the Eye of the universe?",
        "PRIVET: As we couldn’t find the Eye’s signal using two different devices built for this exact purpose, we should discontinue this search method.",
        "MALLOW: We know what the Eye looks like thanks to the Quantum Moon, so what if we try to find the Eye visually, instead? Let’s send out a probe!",
        "CASSAVA: Mallow’s idea is clever, but we have no idea where the Eye is in relation to here. The probability of launching a probe in the correct direction would be absurdly small.",
        "CONOY: I believe I have a solution for that problem! Have you spoken with Ramie and Pye about the technology they’re developing?",
        "AVENS: We’d need to build a probe-launching mechanism to cover those long distances quickly. A cannon in orbit around a celestial body would circumvent the need to escape gravity’s pull.",
        "CASSAVA: Giant’s Deep would be a good choice. It’s furthest from the sun, so it would provide the best angles for launch. And it’s moonless (except when the Quantum Moon is visiting).",
        "AVENS: Yes, let’s build the cannon in orbit around Giant’s Deep!"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 5.901 - Southern Observatory asks High Energy Lab if 22min possible. Pye lists ATP requirements
{
    Name:"CT_TLE_TimeLoopEnergyRequirements1",
    Era:5.901,
    Summary:"The Southern Observatory asks if creating a negative interval of 22 minutes is possible. Pye states that in order to handle such high levels of energy, advanced warp technology is required (leads into BH_City_Forum_1), and enormous space (Ash Twin) is needed.",
    Present:"#RAMIE #PYE",
    Dialogue:[
        "RAMIE: The Southern Observatory is asking if creating a 22 minute interval is possible (that is, to have something arrive 22 minutes before it is actually sent through the warp).",
        "RAMIE: We’ve learned the negative interval of time between departure and arrival can be increased by adding more energy to the warp core. Problematically, the energy required to extend the interval increases at an exponential rate.",
        "PYE: Hypothesis: Creating a 22-minute-long interval is possible, but we are currently unable to generate the necessary energy.",
        "PYE: Ramie and I believe it would be necessary to invent a new method of producing energy, a thrilling but enormous undertaking. We would also require advanced warp technology able to handle such energy.",
        "PYE: We would also likely need an enormous space to fit these proposed new energy and warp technologies together. The only location large enough would be Ash Twin.",
        "RAMIE: The energy is currently unavailable, you say? You’re a gas, Pye!",
        "PYE: My pun was unintended, Ramie, so I believe it’s you who’s aeriform!",
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//       █████     ████████        ██████  ██████   ██████       ██ ███████  ██████ ████████     //
//      ██   ██       ██           ██   ██ ██   ██ ██    ██      ██ ██      ██         ██        //
//      ███████       ██           ██████  ██████  ██    ██      ██ █████   ██         ██        //
//      ██   ██       ██           ██      ██   ██ ██    ██ ██   ██ ██      ██         ██        //
//      ██   ██ ██    ██    ██     ██      ██   ██  ██████   █████  ███████  ██████    ██        //
//                                                                                               //
//                           ███████ ████████  █████  ██████  ████████                           //
//                           ██         ██    ██   ██ ██   ██    ██                              //
//                           ███████    ██    ███████ ██████     ██                              //
//                                ██    ██    ██   ██ ██   ██    ██                              //
//                           ███████    ██    ██   ██ ██   ██    ██                              //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////

//🙧 6.0   - ATP: just starting to plan. Pye asks for the AT warp towers, BHF crew starts working on it.
{
    Name:"CT_TLE_TimeLoopEnergyRequirements2",
    Era:6.0,
    Summary:"Pye requests that a means to quickly travel between planets be built. Root suggests building warp towers like the one on the White Hole Station. Clary suggests working on it at the Black Hole Forge with Root and Poke. Phlox suggests designing each tower after its destination.",
    Present:"#PYE #ROOT #CLARY #YARROW #PHLOX",
    Mention:"#POKE",
    Topics:"#warp tower",
    Dialogue:[
        "PYE: The <color=orange>Ash Twin Project</color> will be one of our biggest undertakings (metaphorically <i>and</i> physically). To build it, we need a way to travel quickly between <color=lightblue>Ash Twin</color> and each location that holds crucial project materials.",
        "ROOT: What if we used warp towers (like the one we have on the <color=orange>White Hole Station</color>) to connect <color=lightblue>Ash Twin</color> directly to each critical location?",
        "CLARY: Poke, Root, and I can begin work on this immediately in the <color=orange>Black Hole Forge</color> (this will keep us busy!).",
        "YARROW: Of note: Each tower on <color=lightblue>Ash Twin</color> will warp to a different planet.",
        "PHLOX: We can design each tower to visually reflect its warp destination!",
        "PHLOX: The <color=orange>Giant’s Deep tower</color>, for instance, could resemble a cyclone. And we could model the <color=orange>Timber Hearth tower</color> after a geyser mountain!",
        "YARROW: My gratitude to those who noted my imprecise language! Yes, the <color=lightblue>sun</color> is not a planet. I believe this has been sufficiently clarified (kindly stop reminding me!)."
    ]
},
//🙤

///////////////////////////////////////////////////////////////////////////////////////////////////
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
//🙧 6.101 - AT Chamber: AT core now empty; construction of the central chamber can start.
{
    Name:"TT_TimeLoop_Timeline_1",
    Era:6.101,
    Summary:"Ash Twin’s core has been fully emptied out. Construction of the Ash Twin Project within the emptied space is about to start.",
    Present:"#YARROW #COLEUS #RAMIE #PYE",
    Dialogue:[
        "YARROW: Today we finished the excavation of Ash Twin. Here, in this space we carved, we will craft our most ambitious project yet: the Ash Twin Project, powerful enough to send information back in time.",
        "COLEUS: We’ve also finished relocating all subterranean plants we met while digging.",
        "RAMIE: We’ll need to keep our eyes on how significantly we’ve altered the environment here.",
        "PYE: How far we’ve come since our experiments at the High Energy Lab! I still can hardly believe Ramie’s hypothesis was true."
    ],
},
//🙤
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
//🙧 6.201 - AT Chamber: All warp towers done. OPC & memory statues still in progress.
{
    Name:"TT_TimeLoop_Timeline_2",
    Era:6.201,
    Summary:"The warp cores for the tower leading to Giant’s Deep was finished last. Meanwhile, Cassava and Avens work on crafting the OPC, and Phlox is sculpting the memory statues.",
    Present:"#YARROW #POKE #CASSAVA",
    Mention:"#AVENS #PHLOX",
    Dialogue:[
        "YARROW: Poke just sent the warp core for the final tower to us from the Black Hole Forge. Now Ash Twin can be connected with Giant’s Deep, where Cassava is working with Avens to craft the Orbital Probe Cannon, and where Phlox is sculpting the memory statues.",
        "CASSAVA: Hypothesis: It was not by accident the core of our warp tower was the last to be forged.",
        "POKE: Hypothesis: The cores could have been forged faster if Cassava had interrupted my work less frequently to ask for updates.",
        "YARROW: The important point is we are all connected through Ash Twin now, and also that I’m no longer needed for mediating your disagreements."
    ],
},
//🙤
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
//🙧 6.401 - AT Chamber: Yarrow says OPC was first tested and works fine.
{
    Name:"TT_TimeLoop_Timeline_3a",
    Era:6.401,
    Summary:"The Orbital Probe Cannon was first tested; Avens advocates for more launch power, to Yarrow’s worry.",
    Present:"#YARROW",
    Mention:"#MALLOW #AVENS",
    Dialogue:[
        "YARROW: Our friends on Giant’s Deep tested the Orbital Probe Cannon today. Mallow tells me the cannon is doing well, and that Avens advocates for more launch power. If anyone can coax the maximum power from a device, Avens can.",
        "YARROW: But then, if anyone can goad a device into exploding, that, too, is likely Avens. Perhaps I should check in with the Orbital Probe Cannon crew in the interest of safety.",
        "YARROW: Would it help to remind Avens that Mallow (his love) will be one of the Nomai aboard the cannon, or is Mallow part of the problem?"
    ],
},
//🙤
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
//🙧 6.501 - AT Chamber: Yarrow says Phlox & Daz’s work on the statues is complete.
{
    Name:"TT_TimeLoop_Timeline_3b",
    Era:6.501,
    Summary:"The memory statues are complete.",
    Present:"#YARROW",
    Mention:"#PHLOX #DAZ",
    Dialogue:[
        "YARROW: Phlox and Daz finished the memory statues today, and they are truly remarkable.",
        "YARROW: When the Ash Twin Project succeeds (or in the event it fails), the memory statues will activate, allowing us to gather more data before we shut down the project."
    ],
},
//🙤
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
//🙧 6.601 - AT Chamber: Yarrow says Pye & Idaea’s work on the sun station is complete.
{
    Name:"TT_TimeLoop_Timeline_3c",
    Era:6.601,
    Summary:"The sun station is finished.",
    Present:"#YARROW #RAMIE",
    Mention:"#PYE #IDAEA",
    Dialogue:[
        "YARROW: Pye and Idaea have worked hard on the Sun Station, and it at last is complete. If everything goes as planned, this structure will prompt the sun’s explosion, which will in turn supply the power the Ash Twin Project requires.",
        "RAMIE: I’m impressed by their mental fortitude. This was the project’s most difficult task, in more ways than one."
    ],
},
//🙤
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼ //
//🙧 6.901 - AT Chamber: Nearly ready to activate the ATP
{
    Name:"TT_TimeLoop_Timeline_4",
    Era:6.901,
    Summary:"Nearly ready to activate the Ash Twin Project, Yarrow explains how it will operate.",
    Present:"#YARROW",
    Dialogue:[
        "YARROW: We’re nearly ready to activate the <color=orange>Ash Twin Project</color>! Here is what will happen: First, the <color=orange>Sun Station</color> will receive the order to fire at the <color=lightblue>sun</color>, prompting it to explode.",
        "YARROW: Using the energy from the resulting supernova, the <color=orange>Ash Twin Project</color> will send the order for the <color=orange>Orbital Probe Cannon</color> to fire back in time by 22 minutes.",
        "YARROW: Exactly 22 minutes after these orders are received, the <color=orange>Sun Station</color> will again trigger the supernova to send the probe data from this cannon launch back in time.",
        "YARROW: In total, each cycle created by the <color=orange>Ash Twin Project</color> will last precisely 22 minutes. We can end this cycle at will."
    ]
},
//🙤
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ //
///////////////////////////////////////////////////////////////////////////////////////////////////








//🙧 x < 6.5    - GD Statues: Phlox questions the ethical implications of the time loop
{
    Name:"GD_StatueIsland_ConsciousnessDebate",
    Era:6.,
    Summary:"Phlox questions the ethical implications of the time loop necessarily ending with alternate versions of everyone dying, and whether these alternate versions truly exist. Perhaps OPC construction was temporarily halted while Cassava is waiting for news from the Southern Observatory in regards to the tornado issue, and Cassava therefore has time to visit Phlox?",
    Present:"#PHLOX #DAZ #CASSAVA",
    Dialogue:[
        "PHLOX: I’m curious: Is sending a being’s memories back in time the same as sending the being itself back in time?",
        "PHLOX: As an example, if we were to send my memories back in time, is that the same as sending “me” back in time (not my physical body, but my essence)?",
        "DAZ: I imagine they’re two different actions.",
        "CASSAVA: Wouldn’t both actions be effectively the same?",
        "DAZ: Suppose that time was being rewritten. I believe this is different than receiving memories from what is effectively the future.",
        "CASSAVA: But isn’t the end result identical in either case?"
    ]
},
//🙤

//🙧 6.2 < x < 6.5 - Phlox welcomes visitors to the statue workshop (GD warp tower finished)
{
    Name:"GD_StatueIsland_WarpReceiverNote",
    Era:6.,
    Summary:"Phlox left a note next to the GD warp receiver to welcome visitors.",
    Present:"#PHLOX",
    Dialogue:[
        "PHLOX: Welcome to Giant’s Deep, friends! I’m excited for you to meet the statues!",
        "PHLOX: If I’m not in my dwelling, I’m likely in my workshop below (inside the island)."
    ],
},
//🙤
//🙧 6.2 < x < 6.5 - GD Statues: Lami wants to see Phlox’s statue pairing test
{
    Name:"GD_StatueIsland_WindowNote",
    Era:6.492,
    Summary:"Lami wants to sneak in Phlox’s workshop during the first statue pairing test that will take place later in the day. Taget and Laevi agree it’s too dangerous.",
    Present:"#LAMI #TAGET #LAEVI",
    Mention:"#PHLOX",
    Dialogue:[
        "LAMI: They’re going to test the memory statues tonight! Phlox says it could be dangerous, so we can’t come.",
        "LAMI: But, what if we didn’t use the door and snuck in the other way? Does anyone want to?",
        "TAGET: Phlox specifically told us not to do that.",
        "LAEVI: I really want to see the test, too, Lami, but that’s a huge risk to take. We probably shouldn’t. Maybe Phlox’ll let us see a later test."
    ],
},
//🙤
//🙧 6.2 < x < 6.5 - GD Statues: Phlox, Daz & Yarrow conclude first statue pairing
{
    Name:"GD_StatueIsland_FirstMemoryStatueTest",
    Era:6.493,
    Summary:"Phlox, Daz and Yarrow test the first statue pairing. Daz then suggests testing his memory storage prototype.",
    Present:"#PHLOX #YARROW #DAZ",
    Dialogue:[
        "PHLOX: Yarrow, would you kindly step back so Daz is closest to the statue? When pairing, the statue will choose whoever is in closest proximity.",
        "PHLOX: ...See how its eyes have opened? That tells us the statue has paired with Daz. Now, no matter where he is in this star system, Daz’s statue will record his memories and send them to the Ash Twin Project.",
        "YARROW: This is extraordinary sculpting work, Phlox!",
        "DAZ: He has outdone himself again, hasn’t he? And now that we have our first successful pairing, we can test my memory storage prototype.",
        "DAZ: Each statue will send a single Nomai’s memories to his or her own storage unit within Ash Twin.",
        "PHLOX: Each storage unit will be equipped with a mask, the statue’s counterpart, which will be able to send those stored memories back to the corresponding Nomai.",
    ],
},
//🙤



//🙧 6.    - ET City: Debate over whether the sun station should or not be built
{
    Name:"CT_SunStationDebate",
    Era:6.,
    Summary:"Nomai on Ember Twin debate the construction of the Sun Station. Given Poke’s eagerness and the mining timeline for Ash Twin’s shell, this would likely take place before she started working on the advanced warp core and lost some of her confidence. Also, it had to be decided that the supernova would be the power source basically right at the beginning… right?",
    Present:"#IDAEA #PYE #YARROW #RAMIE #COLEUS #POKE",
    Topics:"#sun station",
    Dialogue:[
        "Should we build the <color=orange>Sun Station</color> to power the <color=orange>Ash Twin Project</color>?",
        "IDAEA: I almost can’t comprehend this is being suggested seriously. The purpose of the <color=orange>Sun Station</color> goes against every standard we hold ourselves to and everything we believe in as a species!",
        "PYE: Unsurprisingly, Idaea, I disagree. We’re pushing a possible new technology further than ever before. That, in my experience, is the defining characteristic of our species.",
        "YARROW: Are there other ways to generate this level of power?",
        "PYE: Theoretically, yes. Practically, no. I can’t imagine discovering them in our lifetimes...",
        "RAMIE: I understand this proposal is unsettling, but the <color=orange>Sun Station</color> must be built if we hope to complete the <color=orange>Ash Twin Project</color>.",
        "COLEUS: If we fail (and the probability of this is not insignificant), we will without question destroy ourselves, all life here, and the rest of this star system. I wish to protect these species.",
        "IDAEA: The potential annihilation of an entire star system is too severe a cost. We shouldn’t build the <color=orange>Sun Station</color>, no matter how badly we want the knowledge that comes with it.",
        "POKE: Fear of failure is a poor reason not to try. I believe, if we’re cautious, the <color=orange>Sun Station</color> will work. I believe in Pye.",
        "PYE: Poke, I’m deeply honored. Idaea, I comprehend your position; however, if we aren’t all but certain the <color=orange>Sun Station</color> will not cause destruction once we’ve built it, then I won’t support the station’s use."
    ]
},
//🙤

//🙧 6. - BH City: Anonymous asks how to get the advanced warp core for the ATP
{
    Name:"BH_City_Forum_1",
    Era:6.,
    Summary:"How should the Nomai get the advanced warp core required by the Ash Twin Project? This happens before Poke starts working on the advanced warp core. Before or after the Ash Twin warp towers are built? More likely after? (BHF now fully capable of creating simpler cores)",
    Topics:"#ash twin project #advanced warp core",
    Dialogue:["The Ash Twin Project requires a powerful, highly advanced warp core. How should we obtain it?"],
},
//🙤
//🙧 6. - BH City: Debate: Try retrieving the Vessel’s warp core
{
    Name:"BH_City_Forum_2",
    Era:6.,
    Summary:"Solution 1: Retrieve the Vessel’s warp core. Ramie reminds that those present during the crash said the Vessel sustained lethal injuries, and that the reward for such risk is not guaranteed. Conoy’s grandmother said there was little time to assess the damage, therefore Conoy believes the warp core might still be repaired. Cassava believes the old core could be a valuable blueprint, regardless of its state — provided it can be brought back. ...",
    Present:"#CASSAVA #COLEUS #CONOY #CYCAD #PHLOX #RAMIE",
    Mention:"#zzz_Conoy_s_grandmother #PLUME #MELORAE",
    Topics:"#ash twin project #advanced warp core",
    Dialogue:[
        "Solution 1: We could retrieve the warp core from the <color=orange>Vessel</color>.",
        "RAMIE: The <color=orange>Vessel</color>’s warp core is broken, at best (recall those present when the <color=orange>Vessel</color> crashed said it sustained lethal injuries). There is no guaranteed reward for this risk.",
        "CONOY: Perhaps we could still repair it. My grandmother told me there was little time to assess the nature or extent of the damage.",
        "CASSAVA: Even if it no longer functions, the old core could be a valuable blueprint, provided we’re able to transport it back here.",
        "PHLOX: This would require a return to <color=lightblue>Dark Bramble</color>. Plume (my father) said many good Nomai perished there.",
        "CYCAD: My mentor (Coleus) and his old mentor once discovered and studied an anglerfish fossil on <color=lightblue>Ember Twin</color>. Using that knowledge, we could avoid the anglerfish entirely!",
        "COLEUS: What Melorae and I learned from that fossil would theoretically help us evade the anglerfish, but our hypothesis was never tested on a live specimen.",
        "RAMIE: I remember that anglerfish fossil! We used to play in <color=orange>Fossil Fish Cave</color> when we were children."
    ]
},
//🙤
//🙧 6. - BH City: Debate: Craft a new advanced warp core from scratch
{
    Name:"BH_City_Forum_3",
    Era:6.,
    Summary:"Solution 2: Craft a new advanced warp core inspired by the Vessel’s. Oeno points out that all original crafters of the Vessel’s core have passed away. Poke decides to recreate the warp core from scratch.",
    Present:"#OENO #CLARY #POKE #IDAEA #AVENS #CASSAVA #SPIRE #MITIS",
    Mention:"#ANNONA", // deceased
    Topics:"#ash twin project #advanced warp core",
    Dialogue:[
        "Solution 2: We could craft a new advanced warp core inspired by the Vessel’s warp core.",
        "OENO: The greatest challenge here, I think, is we don’t have the design for such a powerful core, or any of the original crafters of the Vessel’s core.",
        "CLARY: No, but Poke was apprenticed to Annona, who created the original design, and our Black Hole Forge is adept at crafting simpler cores.",
        "POKE: I believe I can be of use here! The Vessel’s warp core was created before my time, but Annona explained many of his designs to me.",
        "IDAEA: This is the safest path for our clan.",
        "AVENS: Is the safest path the best one? Our goal is worth the risk.",
        "CASSAVA: Is it, though? We’ve tried for so long to find something that I (and others) now believe might be impossible to find. If the search for the Eye is a futile one, we should choose the option with the least potential for harm.",
        "SPIRE: Abandoning the Vessel’s warp core and its casing means losing valuable knowledge.",
        "MITIS: This is true; however, it’s knowledge we have little hope of recovering. It would be best to relearn, I think.",
        "POKE: I would very much like to craft such a powerful core! More relevantly, I believe the Black Hole Forge crew and I could recreate the basic design."
    ]
},
//🙤
// THE ABOVE HAPPENS BEFORE POKE STARTS WORKING ON THE ADVANCED WARP CORE. Before or after the Ash Twin warp towers are built? More likely after? (BHF now fully capable of creating simpler cores)



//🙧 x < 6.2 - TH: Mining site 2a unsafe for Hearthian life; will mine in site 2b instead.
{
    Name:"TH_Mine_FindingHearthianLife",
    Era:6.,
    Summary:"Coleus states that mining site 2a is unsafe for the local wildlife. Cycad offers to examine site 2b, as it has similar geology.",
    Present:"#COLEUS #CYCAD #OENO",
    Mention:"#MELORAE", // deceased
    Dialogue:[
        "COLEUS: After closer observation, mining site 2a wouldn’t be safe for the native life dwelling in some of this cave’s pools, so (unfortunately) we’ll have to mine one of the other sites.",
        "COLEUS: On the opposite hand, new life! This species is semi-aquatic, and very hardy. The ecosystem here is quite robust, so I believe they’ll thrive in the long run. Be cautious near the pools if you visit 2a to meet them.",
        "CYCAD: There are a few other cave sites that look promising. What about site 2b (it shares similar formations and strata)?",
        "OENO: This sounds promising! Will you and your mentor investigate? If mining site 2b proves safe for this native species, we’ll move our work there.",
        "CYCAD: Site 2b is safe! Coleus says we’ll continue to monitor our activity and its effect on life here.",
        "CYCAD: I was watching them once during a rest, and the hours escaped from me. They’re fascinating (I wonder what their fourth eye does)!",
        "COLEUS: They remind me of a subterranean species that my mentor, Melorae, once told me about (from when our clan used to travel across this universe). I imagine she would have enjoyed these lifeforms greatly."
    ],
},
//🙤

//🙧 x < 6.2 - Root asks TH crew to send more ore to the Lantern for durability testing
{
    Name:"Shared_TH_Mine_BHM_Volcano",
    Era:6.,
    Summary:"Root asks the Timber Hearth mining crew to send more ore to Hollow’s Lantern, as the forge crew is working on a new coating intended to improve durability. Root plans on soon giving an updated estimate of how much ore will be required for building Ash Twin’s protective shell, which will be significantly bigger than initially thought.",
    Present:"#ROOT #OENO",
    Dialogue:[
        "<h3>Before Patch 1.0.3:</h3>",
        "ROOT: Friends in the <color=orange>Timber Hearth Mines</color>, can you send more ore samples to us for testing?",
        "ROOT: Our forge has already burned through everything you sent!",
        "OENO: You must be fired up about these tests!",
        "ROOT: Yes, the experiments have kindled our curiosity! (Also, it’s fun throwing materials into lava.)",
        "OENO: We’ll send more samples to <color=lightblue>Hollow’s Lantern</color> immediately.",
        "ROOT: My gratitude! The last ore you sent survives the longest in direct heat out of any we’ve tested. We’re searching for a treatment to improve its durability.",
        "<h3>Patch 1.0.3 onwards:</h3>",
        "ROOT: Friends in the <color=orange>Timber Hearth Mines</color>, the last type of ore you sent us survives the longest in direct heat.",
        "ROOT: Can you send us more of the same for additional testing? We’re attempting to improve its durability, and our forge has already burned through everything you sent!",
        "OENO: We’ll deliver more ore to <color=lightblue>Hollow’s Lantern</color> immediately. You must be fired up about crafting the <color=orange>Ash Twin Project</color>’s protective shell!",
        "ROOT: Yes, the idea of an encasement that’s supernova-proof, however briefly, has kindled my curiosity!",
        "ROOT: My gratitude! I imagine we’ll also have an updated estimate soon of how much ore is needed to seal off the <color=orange>Ash Twin Project</color>.",
        "OENO: Will it be more than we initially thought?",
        "ROOT: It will be <i>significantly</i> more. The smallest crack or opening in the protective shell would destroy everything."
    ]
},
//🙤
// ^ Testing sun-proof ore for Ash Twin = Ash Twin towers not yet built due to requiring the planet’s protective shell to be almost finished first (with maybe just an access to the inner part up until the ATP warp functions).

//🙧 x < 6.2 - Pondering how much ore is needed. AT warp towers WIP; protective shell WIP.
{
    Name:"TH_Mine_SizeOfProject",
    Era:6.,
    Summary:"Oeno and Cycad discuss how large the amount of materials required for Ash Twin’s towers, and for the project’s protective shell, is. Coleus is relieved to know that the ore on Timber Hearth is solely being mined for the protective shell, for the sake of the Hearthians’ future.",
    Present:"#OENO #CYCAD #COLEUS",
    Dialogue:[
        "OENO: I’m still amazed by how much ore the <color=orange>Ash Twin Project</color> requires!",
        "CYCAD: Isn’t this the ore for the remaining towers being built on <color=lightblue>Ash Twin</color>? The completed towers I’ve seen are quite large!",
        "OENO: No, the material for those towers is all being taken from <color=lightblue>Ash Twin</color>. The ore we’re mining here will be used to craft an immensely thick protective shell that will physically seal off the chamber inside <color=lightblue>Ash Twin</color>’s core.",
        "COLEUS: I’m relieved by our clan’s decision to use <color=lightblue>Timber Hearth</color>’s ore only for constructing the shell. If, eventually, life on this planet were to evolve to the point of advanced metallurgy, I’m confident we won’t have destroyed their ability to create!",
        "<strong>Before 1.0.3:</strong> CYCAD: All of this ore is for the shell? I hope they measured the shield’s area and planned a<i>core</i>rdingly!",
        "<strong>1.0.3 onward:</strong> CYCAD: If they're sealing off all entrances, I hope they've planned a-<i>core</i>-dingly!",
        "OENO: I thought you had forbidden your apprentice from making puns, Coleus.",
        "COLEUS: How else would he improve?"
    ]
},
//🙤
// ^ Some of Ash Twin’s warp towers are built, others not yet. The protective shell is being built.

//🙧 x < 6.2 - AT: Protective shell about to be finished; must mean ATP warp functional
{
    Name:"Shared_TH_Mine_TT_TimeLoopInterior",
    Era:6.,
    Summary:"The last of the required ore has been brought to Ash Twin for finishing the project’s protective shell. Ramie will use it to seal all entrances",
    Present:"#YARROW #OENO",
    Mention:"#RAMIE",
    Dialogue:[
        "YARROW: My gratitude for the latest shipment, Oeno! This ore should be the last we’ll need for the Ash Twin Project.",
        "YARROW: With the protective shell built, Ramie says she’s ready to seal all entrances used during its construction. After, she’ll help inspect the barrier from the outside (our final safety check). // YARROW: Once we’ve finished the shell that seals off the central chamber, we’ll check to ensure there are no longer any physical entrances. Ramie and I will be checking the interior and then the exterior for cracks (our final safety check).",
        "OENO: This is exciting news! Can I offer an extra set of eyes for this final check (specifically, mine)? If my work here is complete, I’d be delighted to help.",
        "YARROW: We’d be grateful if you would! The more eyes, the better, as the smallest flaw or opening in the shell that protects the Ash Twin Project could lead to disaster."
    ],
},
//🙤



//🙧 6. - GD-OPC: Cassava asks Southern Observatory to study why OPC part fell below current
{
    Name:"Shared_GD_ConstructionYard_BH_Observatory",
    Era:6.,
    Summary:"Cassava calls Conoy for help: while lifting OPC parts in orbit, one part somehow sank beneath the current. Cassava had to convince Daz not to recreate the phenomenon with other cannon parts. Conoy later answers mentioning Spire’s model, but Cassava can’t see clearly enough through the projection pool and asks to come in person.",
    Present:"#CASSAVA #DAZ #CONOY",
    Mention:"#SPIRE",
    Topics:"#cyclone",
    Dialogue:[
        "CASSAVA: Conoy, Daz and I were lifting <color=orange>Orbital Probe Cannon</color> components into orbit for assembly, and one somehow sank down down <i>beneath</i> the current.",
        "DAZ: Cassava convinced me not to try to recreate the phenomenon myself using other cannon parts, but we’re very curious to know what happened! How could something pass through the current?",
        "CONOY: My gratitude for your interesting question! This is exciting: Spire constructed a model of <color=lightblue>Giant's Deep</color> here at <color=lightblue>Brittle Hollow</color>'s <color=orange>Southern Observatory</color>, and it reveals how an object might sink below the current.",
        "CASSAVA: Conoy, I’m unable to grasp the answer by looking through the <color=orange>projection pool</color>. If I visit the <color=orange>observatory</color>, would you kindly explain?",
        "CONOY: If you don’t mind the trek beneath the surface to the south pole, I’d be delighted to see you! (There are two trailheads, one at <color=lightblue>Brittle Hollow</color>'s <color=orange>gravity cannon</color> and one at the <color=orange>Tower of Quantum Knowledge</color>.)",
        "DAZ: Conoy, you should’ve seen it! We’d thought it was impossible for any cannon components to sink even partially below the current, but ours sank straight to the core!"
    ]
},
//🙤
// ^ This conversation starts before Spire’s models were built, and ends after.

//🙧 6. - AT Chamber: Ramie just finished installing the ATP masks
{
    Name:"Shared_GD_StatueIsland_TT_TimeLoopInterior",
    Era:6.,
    Summary:"Ramie just finished installing the masks inside the Ash Twin Project. Phlox explains that though they ideally only will pair once the project succeeds, they might also pair in case of equipment failure.",
    Present:"#RAMIE #PHLOX",
    Dialogue:[
        "RAMIE: I’ve installed the masks inside the <color=orange>Ash Twin Project</color>, Phlox. They look beautiful (although I do feel as though I’m being observed!).",
        "RAMIE: It’s comforting to know the statues will not pair until the project succeeds. Otherwise, I imagine the experience would be hard to endure!",
        "PHLOX: Ideally, they’ll only need to activate once the project succeeds; as a safety measure, however, the statues will also activate in the event of equipment failure.",
        "RAMIE: They will? Why is that?",
        "PHLOX: If anything goes wrong with the <color=orange>Ash Twin Project</color>, the statues (and their masks) will make us aware of the situation and enable us to fix it. Otherwise, it would be possible for us to remain permanently unaware of the problem.",
        "RAMIE: I hadn’t thought of that! What a profoundly horrific fate that would be."
    ]
},
//🙤
// ^ Statues finished, Ash Twin towers & sun-proof cavity probably finished. Unknown state for the sun station and AWC.

//🙧 6. - Poke’s journal after she starts working on the advanced warp core
{
    Name:"BH_City_Journal_Poke",
    Era:6.,
    Summary:"",
    Present:"#POKE",
    Mention:"#ANNONA #CLARY #ROOT",
    Topics:"",
    Dialogue:[
        "POKE: I feel strange, trying to recreate Annona’s warp core without him. At times, it still feels strange to no longer be his (very young) apprentice, and for the Black Hole Forge to be in my care and not his.",
        "POKE: Hypothesis: This will always feel strange. Even though my time with him was short, I miss my old mentor, and deeply.",
        "POKE: To have the chance to try is thrilling, but... I don’t want to disappoint everyone. I <i>think</i> I can do this (probably), but what if excitement has clouded my assessment of my own abilities?",
        "POKE: Was I wrong in volunteering to build it...? I was born in this star system, and never saw Annona’s warp core with my own three eyes. I only know what he taught me. What if I’ve bitten off a larger portion than I can consume?",
        "POKE: Still, all I can give is my best. And as Annona would say, should my best prove insufficient, then we will find another way to achieve what’s needed. I have Clary and Root in the forge, and I have my clan. I am not alone!"
    ],
},
//🙤
// ^ This happens AFTER Poke starts working on the advanced warp core

//🙧 6. - Cassava’s journal after he pressed Poke
{
    Name:"BH_City_Journal_Cassava",
    Era:6.,
    Summary:"Cassava reflects after having pressed Poke to work harder on the AWC construction.",
    Present:"#CASSAVA",
    Mention:"#POKE #CLARY",
    Dialogue:[
        "CASSAVA: I imagine I’ve been hard on Poke, again. This in turn means I’ve made things difficult for her sister (Clary).",
        "CASSAVA: If Poke and I are oil and water, Clary is our emulsifier. She certainly makes us a better team than would mixing through shaking (although sometimes I would like to shake Poke!).",
        "CASSAVA: Jokes aside, suppose my own fear of never finding the Eye prompted my argument with Poke. That would be immature of me.",
        "CASSAVA: I should apologize... At least to Clary, who could then tell Poke."
    ],
},
//🙤

//🙧 6. - Pye is calculating shuttle trajectories while waiting for the sun station work to start
{
    Name:"CT_City_SunStationHint",
    Era:6.,
    Summary:"Yarrow caught Pye calculating shuttle trajectories to land on the sun station, and explains there is no need. Idaea and Pye haven’t started working on the sun station yet. Ash Twin warp towers are ready but may not be public knowledge yet?",
    Present:"#IDAEA #YARROW #PYE",
    Dialogue:[
        "Who’s been computing shuttle trajectories to the <color=orange>Sun Station</color>? Don’t worry; the station is in such a low stellar orbit, we’ve constructed a different, safer way to travel there from <color=lightblue>Ash Twin</color>.",
        "IDAEA: That would be Pye. I told her we wouldn’t be traveling there by <color=orange>shuttle</color>, and that the <color=orange>Sun Station</color> doesn’t even have a landing pad, but she said she knew.",
        "PYE: It’s a purely theoretical exercise on my part, Yarrow. Who doesn’t love computing a good low stellar orbit shuttle trajectory!",
        "IDAEA: Pye, I look forward to working with you, but I’m also relieved it will be easy to return to <color=lightblue>Ash Twin</color> regularly."
    ]
},
//🙤
//🙧 6. - Pye and Idaea just started working at the sun station
{
    Name:"SS_MissionStatement",
    Era:6.,
    Summary:"Pye and Idaea argue over the mission statement, before their work has even started.",
    Present:"#PYE #IDAEA",
    Dialogue:[
        "PYE: Mission: Science compels us to explode the <color=lightblue>sun</color>!",
        "IDAEA: Here’s a better one. Mission: Determine if it’s possible to prompt the <color=lightblue>sun</color> to explode.",
        "IDAEA: Can’t we change this? I don’t enjoy working in view of such a morbid mission statement.",
        "PYE: But it’s accurate. We’re going to create a supernova for the purpose of scientific progress. That’s our mission.",
        "IDAEA: Our mission is to decide if such an irresponsible feat is even possible.",
        "PYE: You lack a sense of humor.",
        "IDAEA: At least I don’t lack a sense of ethics!",
        "PYE: Kindly refrain from going supernova on me before the <color=lightblue>sun</color> does, Idaea."
    ]
},
//🙤

//🙧 6. - AT TowerSS: Yarrow asks for sun station progress; suggests Pye & Idaea take a break.
{
    Name:"TT_Tower_SS_1",
    Era:6.,
    Summary:"Yarrow asks Pye for an update on the sun station progress. Considering how poorly Pye and Idaea behave towards each other, Yarrow suggests they take a break.",
    Present:"#YARROW #PYE #IDAEA",
    Mention:"#RAMIE",
    Dialogue:[
        "YARROW: Some time has passed since I checked in with you, Pye. How are you and Idaea progressing with the Sun Station plans?",
        "PYE: Presently, my assessment is that our plan will either fail explosively or succeed explosively.",
        "IDAEA: Pye, you know I don’t find that funny.",
        "PYE: How curious; Ramie thinks I’m a gas. And I don’t recall requesting that you monitor this conversation, Idaea.",
        "IDAEA: I don’t see what state of matter you are has to do with this. And I don’t recall supporting the Sun Station’s construction, but here we are.",
        "YARROW: Hypothesis: Time spent away from the station would be beneficial to you both.",
        "PYE: I’m immensely interested in testing your hypothesis, Yarrow.",
        "IDAEA: That, at least, we can agree on.",
    ],
},
//🙤

//🙧 6. - Poke’s advanced warp core is ready to be installed inside Ash Twin
{
    Name:"Shared_BH_Forge_TT_TimeLoopInterior",
    Era:6.,
    Summary:"Clary announces to Yarrow that Poke’s advanced warp core is ready to be installed inside Ash Twin. Yarrow states that Pye is overjoyed at this news (either she is on Ash Twin around this time, or Yarrow contacted the sun station crew via projection stones?). Poke is nervous and thinks it’s not ready yet, but Clary dismisses her.",
    Present:"#CLARY #YARROW #POKE",
    Mention:"#PYE",
    Dialogue:[
        "CLARY: I have good news, Yarrow! The advanced warp core is ready to be installed in the central chamber of <color=lightblue>Ash Twin</color>.",
        "YARROW: I’m intrigued, love! Everyone here working on the <color=orange>Ash Twin Project</color> is excited to see it (Pye is beside herself with joy!).",
        "POKE: No, it isn’t!",
        "YARROW: Is everything well at the <color=orange>forge</color>?",
        "CLARY: Don’t worry, love; Poke is only nervous. The core is extraordinary, and her design work is beautifully clever.",
        "POKE: The core’s durability could still be improved! I need more time!",
        "CLARY: Ignore her, Yarrow. The core is finished. And if my sister tells you otherwise, then <i>she</i> will be finished, as well."
    ]
},
//🙤

//🙧 6. - Conoy & Spire create a model to study GD’s cyclones
{
    Name:"BH_Observatory_TornadoResearch",
    Era:6.,
    Summary:"Conoy and Spire create a model to study why one of the OPC parts sank below the current instead of being lifted in orbit. Spire discovers the existence of counterclockwise cyclones. This is during construction of the OPC; unknown if before or after Ash Twin towers, advanced warp core...",
    Present:"#CONOY #CASSAVA #SPIRE",
    Topics:"#cyclone",
    Dialogue:[
        "CONOY: Cassava’s <color=orange>Construction Yard</color> has been using the cyclones on <color=lightblue>Giant’s Deep</color> to lift <color=orange>Orbital Probe Cannon</color> parts into orbit, but one component was pushed down past the current that usually prevents anything from sinking.",
        "CONOY: Spire and I are crafting a model to determine why this happened.",
        "SPIRE: An update: It’s now clear there are two different types of cyclone.",
        "SPIRE: Most cyclones on <color=lightblue>Giant’s Deep</color> rotate clockwise. These are the cyclones Cassava typically uses to send components into orbit.",
        "SPIRE: There also exists a rarer type of cyclone that spins the opposite direction and pushes objects beneath the waters and below the current.",
        "CASSAVA: My gratitude, Spire. Conoy is showing me your handiwork, and I’m intrigued by this secondary type of cyclone. But was it really necessary to build a model to tell me that?",
        "SPIRE: The model will be useful as we continue monitoring <color=lightblue>Giant’s Deep</color>.",
        "SPIRE: Also I very much wanted to make a model."
    ]
},
//🙤

//🙧 6. - GD ConstrYard: About to send the last OPC part in orbit for assembly
{
    Name:"GD_ConstructionYard_CannonMerge",
    Era:6.,
    Summary:"Cassava’s team just finished building the final OPC module, which is now ready to send in orbit for assembly. The next step will be to send Privet up there, who will install the probe tracking system. Daz, knowing Avens and Mallow, also suggests implementing a limit to the cannon’s firepower.<br>OPC almost finished; Considering Shared_OPC_Intact_OPC_Damaged, it just might be that every other element of the Ash Twin Project is nearly ready too?",
    Present:"#CASSAVA #DAZ",
    Mention:"#MALLOW #AVENS #PRIVET",
    Topics:"#orbital probe cannon",
    Dialogue:[
        "CASSAVA: This is it: We’ve finished building the final Orbital Probe Cannon module and are ready to send it into orbit around Giant’s Deep for assembly!",
        "CASSAVA: To all my friends here at the Construction Yard, my gratitude for your tireless work. I had given up hope, but I truly believe this cannon may actually succeed where many other attempts have not.",
        "DAZ: Are you going gelatinous on us, love? I’m delighted by your words, but they’re atypical for you!",
        "CASSAVA: If I’m ever half as gooey as Mallow and Avens behave together, Daz, you may launch <i>me</i> from the Orbital Probe Cannon.",
        "CASSAVA: Our next step will be to send Privet up to the Orbital Probe Cannon to install the probe tracking system.",
        "DAZ: If I know my brother, Avens (and his spouse) will want to launch the probe with as much power as possible. I’m worried the cannon would break under the strain.",
        "DAZ: I propose we give Avens and Mallow a slightly lower maximum power setting than the absolute maximum possible to create room for their enthusiasm.",
    ],
},
//🙤
//🙧 6. - OPC: Avens & Mallow adjust the OPC’s firepower settings
{
    Name:"Shared_OPC_Intact_OPC_Damaged",
    Era:6.,
    Summary:"As Cassava is sending the last OPC components in orbit, Avens and Mallow decide to adjust the firepower settings in order to launch the probe as fast as possible, against Cassava and the Construction Yard crew’s orders.",
    Present:"#AVENS #MALLOW",
    Mention:"#CASSAVA",
    Topics:"#orbital probe cannon",
    Dialogue:[
        "AVENS: Mallow, my better 50 percent! Cassava is sending the last of the cannon components. Soon (relatively speaking), we’ll know the Eye’s precise location!",
        "MALLOW: The thought of concluding our elders’ curious and challenging search increases my heart’s temperature, my love!",
        "AVENS: Cassava tells me he and the Construction Yard crew have determined a power setting we are not, under any circumstances, to go above.",
        "MALLOW: I see! And am I right to think that, consequently, we’ll be ignoring that setting?",
        "AVENS: I can posit with nearly 100 percent certainty our friends have accounted for our natures, so I suggest we do!",
        "AVENS: Giving the Orbital Probe Cannon all the power it can structurally withstand creates the greatest chance of finding the Eye of the universe.",
        "MALLOW: Yes, the probe must travel as fast as it can, as far as it can. I’ll make some adjustments!"
    ],
},
//🙤
//🙧 6. - OPC: Mallow shares her excitement with Privet
{
    Name:"Shared_OPC_Damaged_OPC_Sunken",
    Era:6.,
    Summary:"Mallow shares her excitement with Privet; Privet is worried Mallow will fire the cannon with too much force.",
    Present:"#MALLOW #PRIVET",
    Dialogue:[
        "MALLOW: Imagine, Privet: the Probe Tracking Module will be the first to know the coordinates of the Eye of the universe! You’ll be the first to see them!",
        "PRIVET: I am honored and terrified!",
        "PRIVET: You won’t ask the Orbital Probe Cannon to use so much power that it breaks, will you?",
        "MALLOW: Fret not, my nervous friend! We only need to fire the probe once, anyway, so who minds if it compromises the Orbital Probe Cannon’s structural integrity slightly?",
        "PRIVET: I would mind, Mallow! I would mind, because we won’t be capable of receiving our probe’s data if the Probe Tracking Module is destroyed!"
    ],
},
//🙤
//🙧 6. - OPC + AT Chamber: Yarrow tells Privet the ATP is almost ready to receive the OPC’s data
{
    Name:"Shared_OPC_Sunken_TT_TimeLoopInterior",
    Era:6.,
    Summary:"Yarrow tells Privet the Ash Twin Project is almost ready to receive the OPC’s data once it fires. The probe tracking module’s statue is ready to record all flight trajectories. Privet is ready to tell Yarrow and Ramie as soon as she sees the Eye’s coordinates; but she worries about Avens and Mallow’s enthusiasm.",
    Present:"#YARROW #PRIVET",
    Mention:"#RAMIE",
    Dialogue:[
        "YARROW: I have exciting news, Privet: The Ash Twin Project is almost prepared to receive the probe data from the Orbital Probe Cannon.",
        "YARROW: Ramie is adding some finishing touches here, but she’ll be finished soon. Are you and the Orbital Probe Cannon well?",
        "PRIVET: We are! The statue here in the Probe Tracking Module is ready to record each launch’s flight trajectory and will automatically transmit all relevant data to you.",
        "PRIVET: Once the probe determines the location of the Eye of the universe, I’ll send an alert directly to you and Ramie.",
        "PRIVET: On the other appendage, I’m now worried about this cannon’s structural integrity and its crew’s moral integrity."
    ],
},
//🙤






//🙧 6. - BH Forge: Designing warp towers, explain 5° leeway
{
    Name:"BH_Forge_AlignmentWindow",
    Era:6.,
    Summary:"Clary asks if the Ash Twin warp towers need to be perfectly aligned with the center of the astral body to which it’s tuned. Poke clarifies the 5° leeway rule.<br>Ash Twin warp towers are probably not yet built. Unknown whether this is before or after BH_City_Forum",
    Present:"#CLARY #POKE",
    Topics:"#warp tower",
    Dialogue:[
        "CLARY: Regarding the warp towers on <color=lightblue>Ash Twin</color>: Does each tower have to be perfectly aligned with the center of the astral body to which it’s tuned?",
        "CLARY: I enjoy precision as much as the next Nomai, but if, for example, a tower’s base were to shift even slightly, that tower might no longer align with its astral body.",
        "POKE: We don’t need the alignment angle to be exact; it only needs to be within five degrees of the astral body’s center.",
        "POKE: Of note: This gives us a slightly longer warp window. I imagine this window will last roughly several seconds.",
        "POKE: As such, any Nomai stepping onto the warp platform during the active window will be immediately warped. We will need to be careful around the platform for the duration of the time it’s active to avoid accidental transportation.",
        "CLARY: More accurately, I enjoy precision as much as the next Nomai, provided the next Nomai is not Poke."
    ]
},
//🙤

//🙧 6. - BH Forge: Designing warp towers, explain Hourglass Twins barycenter alignment
{
    Name:"BH_Forge_HourglassAlignment",
    Era:6.,
    Summary:"Ash Twin warp towers are most likely not yet built, probably early in development",
    Present:"#POKE #CLARY",
    Mention:"#YARROW",
    Topics:"#warp tower",
    Dialogue:[
        "POKE: Of note: Yarrow believes he spotted a flaw in the warp tower designs: namely, that one of the warp towers on Ash Twin will never activate, because its warp receiver will never align overhead.",
        "POKE: Does your romantic interest think a warp tower’s alignment point is its <i>receiver</i>? Does he not know that a warp tower always aligns with the center of its corresponding astral body?",
        "CLARY: That isn’t an unreasonable belief, given the receiver <i>does</i> have to be located on (or in close orbit around) the relevant astral body.",
        "CLARY: I seem to recall that was <i>your</i> understanding of warp technology, at first.",
        "CLARY: No, Yarrow understands the distinction. He likely doesn’t realize the Hourglass Twins are so close together they function as a single astral body, with a shared alignment point in between them."
    ],
},
//🙤

//🙧 6. - BH Forge: Tune first warp core pairs to their astral bodies
{
    Name:"BH_Forge_WarpCoreCompleted",
    Era:6.,
    Summary:"The first warp cores’ alignments for Ash Twin’s towers are being tuned.<br>Ash Twin warp tower warp cores are almost finished, need tuning for alignments.",
    Present:"#POKE #CLARY #ROOT",
    Mention:"#YARROW #PHLOX",
    Topics:"#warp tower",
    Dialogue:[
        "<h3>Patches 1.0.1 &amp; 1.0.2:</h3>",
        "POKE: Clary and Root, kindly tune the alignments on each pair of warp cores as I finish them.",
        "CLARY: I’ve tuned the first pair to activate when its warp tower is aligned with Brittle Hollow. This will drastically speed future deliveries to Ash Twin.",
        "CLARY: And before anyone comments, <i>yes</i>, I’m aware this reduces the distance between Yarrow and me.",
        "ROOT: It looks like the towers on Ash Twin respond to only five alignments when there are six warp receivers. Is that a mistake?",
        "POKE: No, that’s correct. Have you seen the schematic in the High Energy Lab on Ember Twin? It depicts which tower is meant to align with which astral body.",
        "<h3>Patches 1.0.3 &amp; 1.0.4:</h3>",
        "POKE: Clary and Root, kindly tune the alignments on each black hole core as I finish them. The schematic on the floor shows which warp tower aligns with which astral body.",
        "CLARY: To speed future deliveries to Ash Twin, I’ve tuned the first black hole core to activate when its warp tower aligns with Brittle Hollow.",
        "CLARY: And before anyone comments, <i>yes</i>, I am aware this reduces the distance between Yarrow and me.",
        "ROOT: The schematic shows the six towers on Ash Twin are being tuned to only five alignments. Is that a mistake?",
        "<strong>1.0.3:</strong> POKE: No, that’s correct. Technically, a warp tower’s alignment and its destination don’t have to be the same astral body.",
        "<strong>1.0.4:</strong> POKE: No, that’s correct. For these alignments we've decided to treat the Hourglass Twins as a single astral body.",
        "POKE: Have you seen Phlox’s tower designs in the High Energy Lab on Ember Twin? They clarify each tower’s warp destination.",
        "<strong>1.0.3:</strong> POKE: This is advantageous for warping from towers that lack a clear line of sight to their destinations.",
        "<strong>1.0.4:</strong> POKE: If it helps, you can imagine the Hourglass Twins as aligning with themselves."
    ]
},
//🙤

//🙧 6. - BH Forge: First warp core pair finished; Root asks where to send the delivery
{
    Name:"BH_Forge_BlackHoleCoreShipment",
    Era:6.,
    Summary:"Root just finished the first pair of warp cores intended for the Ash Twin warp towers, and asks where it and the next ones should be shipped.<br>Ash Twin warp towers are being built; first black hole core finished, not yet in use.",
    Present:"#ROOT #CLARY #POKE",
    Mention:"#YARROW",
    Topics:"#warp tower",
    Dialogue:[
        "ROOT: Where am I taking this first black hole core? (And where am I taking the remaining cores once they’re ready?)",
        "CLARY: All of the warp towers are being constructed on Ash Twin, so the black hole cores will go there.",
        "POKE: The white hole cores are for the warp receivers. Each of the six receivers are being constructed at different locations, so those deliveries will be a greater pain in your cervical spine.",
        "<i>Old interesting info Poke used to add: “(Yarrow can give you their exact locations).”</i>",
        "ROOT: My gratitude! In that case: Poke, Clary, I’m leaving for delivery! I’ll send Yarrow your regards.",
        "CLARY: Poke, I’ll return to the forge shortly; I’m going to catch up to Root and help him deliver the first core to Ash Twin, just to make sure Yarrow receives it.",
        "POKE: Of course you are.",
        "POKE: The tower designs in the High Energy Lab on Ember Twin reveal each receiver's location. Ask Yarrow; he is familiar with them."
    ]
},
//🙤

//🙧 6. - BH Forge: AT’s BH warp tower has 2 functioning warps
{
    Name:"BH_UnusedTranslations_BHF_Wrong_Warp",
    Era:[6.0,6.999999999],
    Summary:"Root wants to deliver ore data to Poke at the Black Hole Forge, but warped to the wrong location on Brittle Hollow. Clary clarifies that Ash Twin’s warp tower for Brittle Hollow can lead to two different locations, including the forge.<br>Ash Twin’s BH warp tower is fully operational, unsure if others are",
    Present:"#ROOT #CLARY",
    Mention:"#POKE",
    Topics:"#black hole forge #ore data #warp tower",
    Dialogue:[
        "ROOT: I was hoping to deliver new ore data to Poke in her Black Hole Forge, but the warp tower on the Twilight Twin sent me to the wrong part of Brittle Hollow.",
        "ROOT: Could someone kindly remind me if there’s a way to warp directly to the forge or if I imagined this?",
        "CLARY: There is! The Brittle Hollow warp tower that stands on the Twilight Twin will take you to two different places, including the forge. Just make sure you start at the correct place within the tower.",
        "ROOT: Of personal note: Remember to give Clary my gratitude when next I visit the Black Hole Forge."
    ],
},
//🙤

//🙧 6. - AT TowerBH: Clary installs BH warp tower’s first black hole core.
{
    Name:"TT_Tower_BH_1",
    Era:6.,
    Summary:"Clary brings the first black hole core to Ash Twin, while Root installs the corresponding white hole on Brittle Hollow. Yarrow brings up interest in the initial time travel discovery at the White Hole Station as an attempt to flirt with Clary.",
    Present:"#CLARY #YARROW #POKE",
    Mention:"#ROOT",
    Topics:"warp tower",
    Dialogue:[
        "CLARY: Here’s our first delivery, Yarrow: one warp core, fresh from the Black Hole Forge! Root is installing this core’s sibling on Brittle Hollow as I write this.",
        "CLARY: I wish I could wait here for you to arrive, but the forge (and my unfinished work there) is calling. I’ll return with more materials soon.",
        "YARROW: My gratitude, Clary! With this, the Ash Twin Project is underway!",
        "YARROW: I confess, I’m deeply curious about what you and Poke found on the White Hole Station that started this project. Could I visit sometime to learn more?",
        "CLARY: I recommend you do! The White Hole Station is the model for the towers being built for the Ash Twin Project, so a visit to the station would be doubly useful.",
        "YARROW: I suppose, more precisely, I would like to visit the White Hole Station with you, Clary.",
        "CLARY: I’d be happy to explain our findings!",
        "POKE: Yarrow, stop using this scroll wall to flirt with my sister (in romantic matters, her density rivals a neutron star’s) and go meet her on the White Hole Station.",
    ],
},
//🙤

//🙧 6. - AT TowerCT: Pye shows BH Nomai to ET ==> Warp tower to ET functional
{
    Name:"TT_Tower_CT",
    Era:6.,
    Summary:"Pye and Ramie invite Nomai from the Hanging City to plan the Ash Twin Project at the High Energy Lab.",
    Present:"#PYE #CONOY #RAMIE",
    Dialogue:[
        "PYE: Friends visiting from the Hanging City, we are planning the Ash Twin Project at the High Energy Lab on Ember Twin’s equator.",
        "CONOY: I became lost on Ember Twin (my gratitude that Ramie found me!), but the High Energy Lab is the building with the large solar panels. I’m surprised I didn’t see it!",
        "RAMIE: I imagine our otherwise immensely clever Conoy would lose his own head if it weren’t anatomically impossible!"
    ],
},
//🙤
































//🙧 6. - BH OldStlmt: Ilex writes a poem about the black hole
{
    Name:"BH_OldSettlement_ChildrensRhyme",
    Era:6.,
    Summary:"Ilex writes a poem about the dangers of the black hole.",
    Present:"#ILEX",
    Dialogue:[
        "ILEX: Look out, look out below!",
        "ILEX: Look out for the gravity hole!",
        "ILEX: For should you slip",
        "ILEX: And lose your grip,",
        "ILEX: Then into space you’ll go!"
    ]
},
//🙤
//🙧 6. - BH School: Solanum essay about the universe
{
    Name:"BH_City_School_BigBangLesson",
    Era:6.,
    Summary:"At school, Solanum writes an essay about the creation and fate of the universe.",
    Present:"#SOLANUM",
    Mention:"#CONOY",
    Topics:"#end of the universe",
    Dialogue:[
        "SOLANUM: Formation Of This Universe",
        "SOLANUM: No one knows how this universe was made, but one thing we do know is everything used to be very hot and very dense (tightly packed together).",
        "SOLANUM: As this early universe expanded, it also cooled down. Once it had cooled down enough, particles were able to group together to form things like galaxies, stars, and planets!",
        "SOLANUM: Since then, space has continued to expand at a faster and faster rate, which is hard to think about for too long without your brain hurting.",
        "SOLANUM: This universe will keep getting colder and larger, until one day, the stars and the life they support will all die.",
        "SOLANUM: That’s scary to think about, even though Conoy tells me it won’t happen in our lifetimes. But it’ll happen in someone else’s, someday!"
    ]
},
//🙤
//🙧 6. - BH School: Lami essay about festivals
{
    Name:"BH_City_School_FestivalLesson",
    Era:6.,
    Present:"#LAMI #FILIX",
    Mention:"#ANNONA #THATCH",
    Dialogue:[
        "LAMI: Explanation of Festivals",
        "LAMI: All the Nomai clans from all over the universe meet in one place to share what they’ve learned in science and art. It’s called the festival!",
        "FILIX: Don’t forget, festivals happen every ten years!",
        "LAMI: We can’t go because we’re stuck here. But Filix says we used to go, too.",
        "LAMI: At some festivals, one clan’s big discovery can mean all the Nomai get to advance, too. Like Annona’s warp core, which made it so everyone can warp long distances and explore more.",
        "LAMI: Each clan has a festival envoy to show their most interesting work. (Our envoy was Thatch!)",
        "LAMI: A single festival could last a long, long time!"
    ]
},
//🙤
//🙧 6. - BH School: Ilex essay about the Vessel
{
    Name:"BH_City_School_VesselLesson",
    Era:6.,
    Summary:"Towers on Ash Twin are built. Poke's advanced warp core isn’t ready yet.",
    Present:"#ILEX",
    Mention:"#COLEUS #YARROW #POKE",
    Dialogue:[
        "ILEX: Why We Should Build A New Vessel",
        "ILEX: Each Nomai clan explores the universe in its own Vessel. The Vessel is the heart of every clan.",
        "ILEX: It’s unusual for Nomai to remain in one place for so long. Nomai are wanderers and have no permanent home.",
        "ILEX: If we built a new Vessel, we could return to our adventurous way of life. Imagine all the new places we could go! Our clan wouldn’t be stuck here in this star system.",
        "ILEX: We could even meet with other Nomai, and learn from them, like Coleus says we used to do.",
        "ILEX: It probably wouldn’t be hard to get parts if we stopped building other new things, and if we broke down other structures (like the towers on Ash Twin) for parts.",
        "ILEX: We might have to build a smaller Vessel for now, even though Vessels are normally large. But we could make it bigger later once we reach planets with more resources.",
        "ILEX: It would also help if we stopped building so many things to search for the Eye of the universe. I asked Yarrow, and he says we use lots of resources on the Ash Twin Project.",
        "ILEX: We could even have a warp core for jumping long distances like Vessels have. Poke tells me she plans to make a very advanced warp core for a different project. I’m sure she could connect it to the Vessel for travel (because Poke is smart)."
    ]
},
//🙤

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
//       █████     ████████        ██████  ██████   ██████       ██ ███████  ██████ ████████     //
//      ██   ██       ██           ██   ██ ██   ██ ██    ██      ██ ██      ██         ██        //
//      ███████       ██           ██████  ██████  ██    ██      ██ █████   ██         ██        //
//      ██   ██       ██           ██      ██   ██ ██    ██ ██   ██ ██      ██         ██        //
//      ██   ██ ██    ██    ██     ██      ██   ██  ██████   █████  ███████  ██████    ██        //
//                                                                                               //
//                           ██████  ███████  █████  ██████  ██    ██                            //
//                           ██   ██ ██      ██   ██ ██   ██  ██  ██                             //
//                           ██████  █████   ███████ ██   ██   ████                              //
//                           ██   ██ ██      ██   ██ ██   ██    ██                               //
//                           ██   ██ ███████ ██   ██ ██████     ██                               //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.001 - SS + ATP Chamber: The sun station fired, but failed
{
    Name:"Shared_SS_SunStation_TT_TimeLoopInterior",
    Era:7.001,
    Summary:"The Sun Station fired, but failed.",
    Present:"#YARROW #PYE #IDAEA",
    Mention:"#SPIRE",
    Dialogue:[
        "YARROW: What happened? Did the Sun Station not fire?",
        "PYE: It fired, Yarrow. But it failed. The sun barely responded; there were infintestimally small surface-level changes, but they were barely visible, even to the third eye.",
        "PYE: The Sun Station is useless. It will never, and could never, cause the sun to explode.",
        "PYE: I don’t know what comes next, my friends. I suppose we must start over, but I’m unsure how to start over.",
        "YARROW: Return to Ash Twin first, my friend. Perhaps a change of task would help: Spire noticed a comet approaching this star system that we’d like to investigate.",
        "YARROW: Pye... I hurt for you, my friends; we all know how hard you’ve both worked. I can only offer my compassion. How are you? How is Idaea?",
        "IDAEA: We’re well, Yarrow (or as well as can be expected, given the circumstances), though disappointed. I may have disagreed with exploding the sun, but I never wished the device would fail. I’d hoped our terrible work was finished.",
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.101 - ATP Chamber: Yarrow, Ramie Pye & Idaea discuss the sun station failure
{
    Name:"TT_TimeLoop_Timeline_5",
    Era:7.101,
    Summary:"Yarrow, Pye, Idaea and Ramie are gathered inside the Ash Twin Project to discuss how to get the supernova they need.",
    Present:"#YARROW #PYE #IDAEA #RAMIE",
    Dialogue:[
        "YARROW: These words are difficult to write: The Sun Station did not work.",
        "YARROW: However, this is the closest we have ever been. The Ash Twin Project is theoretically sound; we were only unable to power it. Perhaps there is another way.",
        "PYE: Suppose we redesign the Sun Station. To generate power of that magnitude, a supernova is still our only viable option.",
        "IDAEA: This is easier expressed than accomplished.",
        "PYE: You can wait for the sun to explode on its natural timeline if you prefer, Idaea, but you’ll need to find some way to halt our aging process.",
        "RAMIE: I believe we can still find a way to create a supernova, my friend. Don’t lose hope!"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.201 - GD CnstrYard + OPC: Cassava tells Avens the OPC is on indefinite hiatus
{
    Name:"Shared_GD_ConstructionYard_OPC_Intact",
    Era:7.201,
    Summary:"Cassava tells Avens that the Orbital Probe Cannon is on indefinite hiatus. Cassava asks Avens to tell Privet and Mallow to return from the cannon.",
    Present:"#CASSAVA #AVENS",
    Mention:"#YARROW #PRIVET #MALLOW #DAZ #IDAEA",
    Dialogue:[
        "CASSAVA: I have bad news, Avens. Yarrow says there was a problem with the proposed power source, so the Orbital Probe Cannon won’t be asked to fire.",
        "AVENS: I hope you’re pulling my locomotive limb here, Cassava.",
        "CASSAVA: I wish I were, my friend, but no. They aren’t certain they can fix the problem, so the Orbital Probe Cannon is on indefinite hiatus.",
        "CASSAVA: Tell Privet and Mallow they should return from the cannon. My spouse and I will remain at the Construction Yard, for now.",
        "AVENS: An update: Mallow and I will join you and Daz. Privet left to visit her brother. She fears Idaea may feel responsible."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.601 - ATP Chamber: Yarrow informs a comet has arrived
{
    Name:"TT_TimeLoop_Timeline_7",
    Era:7.601,
    Summary:"Yarrow writes that work on the Ash Twin Project was halted, as a comet has newly arrived in this star system and all Nomai are eager to explore it.",
    Present:"#YARROW",
    Dialogue:[
        "YARROW: We are halting our research into creating a supernova for this moment; a comet has newly arrived in this solar system, and we’re anxious to explore it.",
        "YARROW: It’s been a very long time since we last explored somewhere new, so we’re excited to welcome this comet. Imagine what knowledge might be gained there!"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.701 - BH GvCannon: Bells tells Solanum to come at the ToQK
{
    Name:"Shared_BH_Cannon_BH_Quantum",
    Era:7.701,
    Summary:"Solanum is at the BH gravity cannon ready to start her pilgrimage, but Bells (located at the ToQK) reminds her that she still needs to visit the Tower of Quantum Knowledge.",
    Present:"#SOLANUM #BELLS",
    Topics:"#quantum moon",
    Dialogue:[
        "SOLANUM: I’m at the shuttle! I’m ready to make my first pilgrimage to the Quantum Moon.",
        "BELLS: That’s exciting! You’re almost ready, but there’s still one more rule you need to learn. Come see me at the Tower of Quantum Knowledge.",
        "BELLS: The tower is on the opposite side of Brittle Hollow. If you follow the path west to the Crossroads, you can reach the tower from there.",
        "SOLANUM: My gratitude for the directions, Bells. I’ll see you soon!"
    ],
},
//🙤
//🙧 7.702 - BH ToQK: Bells tells Solanum about the Rule of the Sixth Location
{
    Name:"BH_Quantum_ShrineNorthHint",
    Era:7.702,
    Summary:"Solanum has finished her preparations on Giant’s Deep, and is ready to enter the Tower of Quantum Knowledge. Bells teaches her the Rule of the Sixth Location.",
    Present:"#BELLS",
    Mention:"#SOLANUM",
    Topics:"#quantum",
    Dialogue:[
        "BELLS: Welcome, Solanum! Your arrival here means you’ve completed your preparations on Giant’s Deep and are ready to depart for the Quantum Moon.",
        "BELLS: On your pilgrimage, the Quantum Moon will carry you, just as it carried me and many in our clan before me, to the moon’s sixth and most secret location.",
        "BELLS: You’ll be aided in your pilgrimage by the shrine our clan built on the Quantum Moon. But remember this final rule: To explore the sixth location, the shrine must be on the moon’s north pole.",
        "BELLS: Be curious on your journey!"
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.801 - BH: Solanum reflects how her views on the Eye changed
{
    Name:"BH_City_Journal_OlderIlex",
    Era:7.801,
    Summary:"Solanum, now on Brittle Hollow, reflects how her views of the Eye have evolved as she matured.",
    Present:"#SOLANUM",
    Topics:"#eye of the universe",
    Dialogue:[
        "SOLANUM: I no longer believe, as I did as a child on Ember Twin, that the Eye of the universe (the source of the signal) wishes to harm us. But it may not want to be found, either.",
        "SOLANUM: The terrible circumstances of our arrival here were almost certainly exactly that: circumstance.",
        "SOLANUM: I suspect imagining we are special to the Eye in some way is wishful thinking. The Eye might have called out to any sentient species.",
        "SOLANUM: Or it might not have been calling out at all, and that my ancestors heard the Eye’s signal holds no great, deep meaning.",
        "SOLANUM: This wouldn’t be so bad, I think.",
        "SOLANUM: In fact, the Eye may not have wishes at all. We have no evidence supporting this."
    ],
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 7.901 - INTERLOPER: Clary decides to stay behind
{
    Name:"C_Shuttle_OutsideRecording",
    Era:7.901,
    Summary:"Since the shuttle is at risk of being submerged in ice, Clary stays behind to keep it warm.",
    Present:"#CLARY #POKE #PYE",
    Dialogue:[
        "CLARY: This is troublesome: It seems the comet wishes to submerge our shuttle in ice. If we stay on the surface too long, the shuttle may freeze entirely.",
        "POKE: Even if it did, couldn’t someone call it back home to the gravity cannon on Ember Twin?",
        "PYE: Yes, but the exploration of the comet would be more difficult if we were without the shuttle until someone recalled it. Perhaps we shouldn’t have landed on the dark side of the comet...",
        "CLARY: Suppose one of us remained in the shuttle to keep it warm and continue monitoring the surface.",
        "PYE: This would be wise, I think, Clary. If you don’t mind waiting here with it, Poke and I can continue to investigate the surface."
    ]
},
//🙤
//🙧 7.902 - INTERLOPER: Pye & Poke just below the crust
{
    Name:"C_Interior_ChooseCarefullyRecording",
    Era:7.902,
    Summary:"Pye’s energy readings become stronger now that an access below the crust has been found. Pye starts to believe that whatever has to lie at the center of the comet may be more dangerous than anticipated.",
    Present:"#PYE #CLARY #POKE",
    Dialogue:[
        "PYE: I’m receiving much stronger energy readings now that we’re beneath the crust. Whatever it is must lie somewhere below, closer to the comet’s center. And I’m starting to think it’s more dangerous than we realized.",
        "PYE: Clary, can you hear us?",
        "CLARY: Yes, but your voices are faint. I fear we will lose communication entirely if you continue any deeper.",
        "POKE: Keep the shuttle warm for us, Clary. We’ll return the moment we identify the source of the energy readings!",
        "CLARY: I understand, but... Be cautious, both of you."
    ]
},
//🙤
//🙧 7.903 - INTERLOPER: Clary worries alone
{
    Name:"C_Shuttle_InsideRecording",
    Era:7.903,
    Summary:"Clary, alone in the shuttle, has lost contact with Poke and Pye; she waits anxiously for news.",
    Present:"#CLARY",
    Mention:"#POKE #PYE",
    Dialogue:[
        "CLARY: I fear our situation may be dire:",
        "CLARY: Pye, Poke, and I landed here on this comet not long after its arrival in this star system. Our shuttle’s equipment heard strange energy readings coming from somewhere beneath the surface.",
        "CLARY: Pye and Poke were able to locate a fissure in the ice on the comet’s sunward side, and they descended inside to investigate the source of the readings.",
        "CLARY: But... Pye and my sister have been gone for a long time now. They haven’t contacted me since descending below the surface, either.",
        "CLARY: Should I leave the shuttle to look for them? I want to follow protocol, but I don’t know what I’ll do if they aren’t well...",
        "CLARY: Poke... Pye... Come back to me safely, my friends."
    ]
},
//🙤
//🙧 7.904 - QM: Solanum landed her shuttle on the QM’s south pole
{
    Name:"QM_Shuttle_IlexRecording",
    Era:7.904,
    Summary:"Solanum has just landed her shuttle on the Quantum Moon. She shares her last thoughts before leaving the shuttle and starting her pilgrimage.",
    Present:"#SOLANUM",
    Topics:"#quantum moon",
    Dialogue:[
        "<h3>Original translation:</h3><br>",
        "SOLANUM: I am here! After watching it wander the skies for so long, I am about to stand (for the first time) on the Quantum Moon.",
        "SOLANUM: My excitement is so great, I could combust! Before I step outside the shuttle, here are my reflections:",
        "SOLANUM: I have learned about the wandering Quantum Moon in school and from those who came before me.",
        "SOLANUM: I visited each of the quantum shards and learned what they had to teach me.",
        "SOLANUM: I am ready.",
        "<br><h3>Final version:</h3><br>",
        "SOLANUM: I am here! After watching it wander the skies for so long, I am about to stand (for the first time) on the Quantum Moon.",
        "SOLANUM: As expected, my shuttle has landed at the moon’s south pole. I will make the remainder of my journey on foot.",
        "SOLANUM: We don’t know why the Quantum Moon always welcomes its visitors at the south pole, just that this is true.",
        "SOLANUM: As a child, I considered such unknowns sinister. Now, though, I understand they bear no ill will. The universe is, and we are.",
        "SOLANUM: I am ready."
    ]
},
//🙤
//🙧 7.905 - INTERLOPER: Pye & Poke realize the danger
{
    Name:"C_Interior_FinalRecording",
    Era:7.905,
    Summary:"Poke and Pye have reached the core of the Interloper and realize too late the magnitude of the danger.",
    Present:"#POKE #PYE",
    Dialogue:[
        "POKE: The spherical stone casing here seems to be the source of the energy readings... No, rather, the source is what’s within the stone. I’m detecting some form of exotic matter.",
        "PYE: The stone is <i>muting</i> our energy readings; they should be ten times what we’re seeing, at least.",
        "POKE: Pye, I don’t think we want this matter interacting with us. As far as I can tell, direct contact with it would almost certainly be fatal.",
        "PYE: I’ve never encountered anything like this casing, but it’s all that’s protecting us from what’s inside. Worse still, this matter is disturbingly volatile.",
        "POKE: ...Pye. Whatever the matter inside this stone casing is, it’s more than just profoundly unstable; it’s under tonnes of pressure. Look at this density scan. I’ve never seen <i>anything</i> this tightly compacted before! What <i>is</i> this?",
        "PYE: This is orders of magnitude worse than I’d imagined. If this stone were to rupture, the lethal matter within would rapidly expand, completely blanketing this star system almost instantaneously. And the pressure is still building as the comet approaches this star system...",
        "PYE: Return to the shuttle, right now! The rest of our friends need to know they’re in terrible danger. Leave your equipment and run!",
        "POKE: What are you doing, Pye?!",
        "PYE: The more we know about this alien matter, the better our chances of survival. I will learn what I can here. Go, warn the others; maybe they can construct shelter somehow. ...<i>Now</i>, Poke!"
    ]
},
//🙤
//🙧 7.906 - SS: “No user commands received for 10 minutes. All systems entering sleep.”
{
    Name:"SS_ClosingEmergencyDoor",
    Era:7.906,
    Dialogue:[
        "281,042 YEARS AGO: No user commands received for 10 minutes. All systems entering sleep.",
        "<TimeMinutes> MINUTES, <TimeSeconds> SECONDS AGO: Increased solar activity detected. Sun Station hull integrity approaching critical levels. Closing emergency doors."
    ]
},
//🙤
///////////////////////////////////////////////////////////////////////////////////////////////////
//🙧 9.999 - Modern Nomai
{
    Name:"DB_Vessel_IncomingMessages",
    Era:9.999,
    Summary:"Modern Nomai discuss how to survive for as long as possible, considering the end of the universe.",
    Present:"#CANNA #BROMI #NEEM #CLEM #HYSSOP",
    Mention:"#ESCALL",
    Dialogue:[
        "CANNA: To any Nomai clans whose Vessels can hear this message:",
        "CANNA: It’s clear the universe is dying. There are fewer and fewer resources and safe places within space now, so my clan and I believe the best option is for all of our clans to stay together.",
        "CANNA: If you can reach the Gloaming Galaxy, we’ve found that Blackrock’s suns are fairly stable, and life in this star system is (comparatively) thriving. We live in relative safety.",
        "CANNA: If you prefer to continue exploring alone, know you will be on your own.",
        "BROMI: Canna, we’re making our way to you.",
        "CANNA: It’s good to hear from you, Bromi! We’ll watch for your Vessel.",
        "CANNA: Has anyone heard from Neem? His clan was on its way to our Vessel, but they never arrived, and he hasn’t sent any messages. I’m beginning to worry.",
        "BROMI: That <i>is</i> unsettling. It reminds me of that old myth my grandfather used to tell, the Disappearance of Escall.",
        "CLEM: I remember hearing that story as a child! One day, Escall’s Vessel simply stopped responding. The other clans searched and searched, but found no trace. It was as if their missing friends had warped out of existence.",
        "HYSSOP: That’s no myth, friends; Escall’s clan existed, and their story was real.",
        "BROMI: What a curious event to have passed into myth! Our ancestors’ ancestors were told that story when they were young. Are you sure it’s true, Hyssop?",
        "HYSSOP: It was a very long time ago, but yes. My clan’s ancestors searched for Escall’s clan for a long time, but in the end, none of them were ever seen again. (It’s the only time in our history a Vessel has ever disappeared this way.)",
        "NEEM: Hyssop, I hope you aren’t comparing Escall’s story to my clan’s Vessel!",
        "CLEM: Neem, my friend! We feared you were gone!",
        "NEEM: Not yet, we aren’t, but nearly. We found trouble during our warp: The triple suns of the Bright Spark star system exploded, and it was only a lucky coincidence we weren’t caught in the blast. We’ll meet you soon, Canna!",
        "CANNA: I’m relieved your clan is safe, Neem! It’s good to hear your words. Any Vessels nearby, remember to be extremely cautious of potentially unstable stars (which is most of them, now).",
    ],
},
//🙤
//🙧 Other Modern/Unclassified
/*
{
    Name:"BH_Cannon_LaunchLog",Dialogue:["The shuttle is currently resting at the Quantum Moon."]
},
{
    Name:"BH_City_BlackholeForgeControls",Dialogue:["Black Hole Forge controls"]
},
{
    Name:"BH_EscapePod_EmergencyExit",Dialogue:["Emergency escape hatch"]
},
{
    Name:"BH_Forge_Alignment_1",Dialogue:["ALIGNMENT 1: the sun"]
},
{
    Name:"BH_Forge_Alignment_2",Dialogue:["ALIGNMENT 2: the Hourglass Twins"]
},
{
    Name:"BH_Forge_Alignment_3",Dialogue:["ALIGNMENT 3: Timber Hearth"]
},
{
    Name:"BH_Forge_Alignment_4",Dialogue:["ALIGNMENT 4: Brittle Hollow"]
},
{
    Name:"BH_Forge_Alignment_5",Dialogue:["ALIGNMENT 5: Giant's Deep"]
},
{
    Name:"BH_Forge_EntryClue",Dialogue:["WARNING: Be cautious near the boarding area while the Black Hole Forge is in operation."]
},
// 18 BH_Trail_* files
{
    Name:"BHM_Computer",Dialogue:["WARNING: Increased solar activity detected.","WARNING: Increased volcanic activity detected.","VERDICT: Location is now inhospitable. Evacuation recommended."]
},
{
    Name:"CT_Cannon_LaunchShuttle",Dialogue:["Activate the gravity cannon"]
},
{
    Name:"CT_Cannon_RetrieveShuttle",Dialogue:["Call the shuttle home"]
},
{
    Name:"CT_Cannon_ShuttleLocation",Dialogue:["The shuttle is currently resting at the comet."]
},
// 4 CT_City_LightSwitch_*
{
    Name:"CT_TLE_Entrance",Dialogue:["High Energy Lab"]
},
// 8 CT_Trail_* files
{
    Name:"GD_ConstructionYard_LaunchReport",Dialogue:["<TimeMinutes> MINUTES, <TimeSeconds> SECONDS AGO: Long-range probe successfully launched from the Orbital Probe Cannon."]
},
{
    Name:"GD_StatueIsland_WorkshopSign",Dialogue:["Statue Workshop"]
},
{
    Name:"OPC_Intact_DamageReport",Dialogue:["ORBITAL PROBE CANNON DAMAGE REPORT: Severe structural stress detected. Assessing damage to modules...","Control Module: Intact. No structural damage.","Launch Module: Viewport window fractured. Module exposed to vacuum of space.","Probe Tracking Module: MISSING."]
},
{
    Name:"OPC_Intact_HourglassOrdersReceived",Dialogue:["<TimeMinutes> MINUTES, <TimeSeconds> SECONDS AGO: Request to launch probe received from Ash Twin Project.","Cannon aligned with randomly selected probe trajectory. Gravity field activated."]
},
{
    Name:"OPC_Intact_LaunchReport",Dialogue:["BEGIN LAUNCH LOG: Orbital Probe Cannon. Launch request received. Probe launch successful.","Probe Tracking Module is receiving data from probe.","WARNING: Orbital Probe Cannon structure compromised during launch. Damage to multiple modules detected."]
},
// 3 OPC_ModuleSign_*
{
    Name:"OPC_Sunken_AllLaunchesData",Dialogue:["Retrieving previous launch data from Ash Twin.","Total number of probes launched: <NbTimeloops>","Deep space anomaly matching all known criteria for the Eye of the universe found by probe 9,318,054."]
},
{
    Name:"OPC_Sunken_EyeCoordinates",Dialogue:["Retrieving stored coordinates from Ash Twin.","Displaying coordinates for the Eye of the universe."]
},
{
    Name:"OPC_Sunken_LastLaunchData",Dialogue:["Receiving data from probe <NbTimeloops>.","Visualizing current trajectory of probe <NbTimeloops>."]
},
// 15 QM_SolanumConvo_Response_*+*
{
    Name:"SS_ApproximateTime",Dialogue:["Star has reached end of natural life cycle. Now approaching red giant stage. WARNING: Evacuate Sun Station.","Approximate time until Sun Station is destroyed by expanding star: <RemainingMinutes> MINUTES, <RemainingSeconds> SECONDS\\nApproximate time until star’s death: <MinutesToRedGiant> MINUTES, <SecondsToRedGiant> SECONDS"]
},
{
    Name:"SS_EmergencyDoorLabel",Dialogue:["WARNING: Opens emergency door."]
},
// 1 TH_Trail_MiningSite
{
    Name:"TT_TimeLoop_CoreRemovalWarning",Dialogue:["Caution: You are about to access the core while the Ash Twin Project is active.","WARNING: Removing the core will disable the Ash Twin Project."]
},
{
    Name:"TT_TimeLoop_MaskActivationStatus",Dialogue:["<TimeMinutes> MINUTES, <TimeSeconds> SECONDS AGO: Received data from previous cycles.","MASKS RECEIVING DATA FROM:\\nProbe Tracking Module\\nGiant’s Deep memory statue\\nTimber Hearth memory statue","<TimeMinutesRemaining> MINUTES UNTIL END-OF-CYCLE TRANSMISSION"]
},
{
    Name:"TT_TimeLoop_RingShutdownLabel",Dialogue:["Artificial gravity control"]
},
*/].map(normalizeItem)
//🙤