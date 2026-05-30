/* UNNAMED NOMAI MENTIONED:
-- ♀️🩷Conoy’s grandmother: was present during the crash and said there was little time to assess the nature or extent of the damage. (BH_City_Forum_2)
-- ♂️🩵Plume’s brother (BH_OldSettlement_Flavor_3): could be Keek, or could be a separate Nomai. BH_OldSettlement_Flavor_1 reads as ambiguously romantic, but a sibling relationship could be strong enough to also give off these vibes platonically?
-- ♂️🩵Solanum’s Father (CT_City_Journal_ChildIlex)
-- Laevi & Lami’s ♀️🩷Mom & ♂️🩵Dad (CT_City_KidDirectionToFossil_2)
♀️🩷♂️🩵 Born:"🌕 = ET, 🌑= BH, 💥= Pre-crash, 🛸= Modern Nomai"
❤️💙 = gender deduced from non-English source

You already checked that the number of files where the Nomai speaks or is mentioned is correct.
Now you can establish a timeline per Nomai first, rather than strictly per file.

Reddit: "I think the implication is that Filix died with her students on presentation day. The small skeletons outnumber the scroll presentations, so they likely weren’t done. Solanum’s scroll could be like a demo project: teachers sometimes keep really good examples from previous students to show how the project should be done. Solanum’s scroll is stored in the classroom and not on the wall."



Later: Find a way to create a graph which indicates, thanks to the "Speaks"/"Mentioned" fields, how everyone is connected to who in terms of "lesser" bonds (just who shared a conversation with who)


🟥 next to a Nomai’s section = haven’t yet checked the text file order according to that Nomai’s story specifically

*/

TODO_EXAMPLE={
    Timeline order:{
        "BH_City_Forum_3"                          :[1,2,3],
        "Shared_GD_ConstructionYard_BH_Observatory":[1,2],
        "BH_Observatory_TornadoResearch"           :[2,3],
        "Shared_SS_SunStation_TT_TimeLoopInterior" :[4],
    },
}

nomai={
//🙧 🩵💥 ANNONA            🟥
ANNONA:{
    Gender:"♂️🩵 (BH_City_Forum_3) (BH_City_Journal_Poke)",
    Born:"Pre-crash (DB_Vessel_SignalFirstContact)",
    Link:{
        POKE:"Apprentice (BH_City_Forum_3) (BH_City_Journal_Poke)",
    },
    Speaks:[
        0.001,"DB_Vessel_SignalFirstContact",
        1.002,"CT_EscapePod_CrashSiteRecording",
        1.003,"CT_EscapePod_CrashSiteRecording_2",
        1.053,"CT_EscapePod_PathToOxygen_1",
        1.054,"CT_EscapePod_PathToOxygen_2",
        1.101,"CT_EscapePod_PathToCity_1",
        3.001,"CT_QuantumMoonObservation",
        3.101,"CT_QuantumMoonObservation_2",
        3.102,"CT_QuantumMoonObservation-UNUSED",
        3.202,"CT_Quantum_WanderingRock_2",
        3.203,"CT_Quantum_EntanglementHint",
    ],
    Mention:[
        2.101,"BH_OldSettlement_WhyDidWeCrash",
        5.103,"THM_SignalDish_2",
        5.202,"WH_TimeDelay_1 (deceased)",
        "BH_City_School_FestivalLesson",
        "BH_City_Forum_3 (deceased)",
        "BH_City_Journal_Poke (deceased)",
    ],
    Timeline order:{
    },
    Trivia:[
        "Apprenticed Poke at a young age.",
        "Created the original design for the Vessel’s warp core (BH_City_Forum_3)",
        "Filix and Annona had checked that the Vessel’s warp core and navigation systems were both well prior to warping (BH_OldSettlement_WhyDidWeCrash)",
        "Boarded Escape Pod 2",
        // Most definitely moved to Brittle Hollow as soon as he could to get the Black Hole Forge built and start working on warp travel... provided he didn’t die before that happened.
        "Deceased by the time of BH_City_Forum_3",
    ]
},
//🙤
//🙧 🩵➖ AVENS             🟥
AVENS:{
    Gender:"♂️🩵 (GD_ConstructionYard_CannonMerge)",
    Born:"",
    Link:{
        MALLOW:"Spouse (GD_ConstructionYard_CannonMerge)",
        DAZ:"Sibling (GD_ConstructionYard_CannonMerge)",
    },
    Speaks:[
        5.802,"BH_Observatory_EyeSearch_1",
        5.803,"BH_Observatory_EyeSearch_2",
        "BH_City_Forum_3",
        "Shared_OPC_Intact_OPC_Damaged",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Mention:[
        "TT_TimeLoop_Timeline_2",
        "TT_TimeLoop_Timeline_3a",
        "GD_ConstructionYard_CannonMerge",
    ],
    Trivia:[
        "After seeing the BH Southern observatory fail to locate the Eye, hypothesized that it stopped emitting its signal. (BH_Observatory_EyeSearch_1)",
        "Known to be “gooey” with Mallow (GD_ConstructionYard_CannonMerge)",
    ]
},
//🙤
//🙧 ➖➖ BELLS                Exclusively ToQK related + Solanum = very close to Interloper
BELLS:{
    Gender:"",
    Born:"",
    Link:{},
    Speaks:[
        4.901,"BH_Quantum_WindowNote",
        4.901,"BH_Quantum_TowerEntrance",
        4.901,"BH_Quantum_PilgrimageHistory",
        7.701,"Shared_BH_Cannon_BH_Quantum",
        7.702,"BH_Quantum_ShrineNorthHint",
    ],
    Mention:[],
    Timeline order:{
        "BH_Quantum_WindowNote":[1,2,3],
        "BH_Quantum_TowerEntrance":[1,2,3],
        "BH_Quantum_PilgrimageHistory":[1,2,3],
        "Shared_BH_Cannon_BH_Quantum":[4],
        "BH_Quantum_ShrineNorthHint":[5],
    },
    Trivia:[
        "Organizes the Quantum Moon Pilgrimage and prepares the pilgrims (BH_Quantum_PilgrimageHistory)",
    ]
},
//🙤
//🙧 💙💥 BUR
BUR:{
    Gender:"💙 (French version of CT_EscapePod_CrashSiteRecording)",
    Born:"Pre-crash (CT_EscapePod_CrashSiteRecording)",
    Link:{},
    Speaks:[
        1.002,"CT_EscapePod_CrashSiteRecording",
        3.001,"CT_QuantumMoonObservation",
        3.101,"CT_QuantumMoonObservation_2",
        3.202,"CT_Quantum_WanderingRock_2",
        3.203,"CT_Quantum_EntanglementHint",
    ],
    Mention:[],
    Timeline order:{
        "CT_EscapePod_CrashSiteRecording":[1],
        "CT_Quantum_WanderingRock_2":[2,3,4],
        "CT_Quantum_EntanglementHint":[3,4,5],// Necessarily follows CT_Quantum_WanderingRock_2
        "CT_QuantumMoonObservation":[2,3,4],
        "CT_QuantumMoonObservation_2":[3,4,5],// Necessarily follows CT_QuantumMoonObservation
    },
    Trivia:[
        "Boarded Escape Pod 2",
        "Built the Quantum Moon Locator on Ember Twin. (CT_QuantumMoonObservation_2)"
    ]
},
//🙤
//🙧 🩵➖ CASSAVA           🟥
CASSAVA:{
    Gender:"♂️🩵 (Shared_OPC_Intact_OPC_Damaged)",
    Born:"", // After crash: "Grew up hearing the Eye’s story" (BH_Observatory_EyeSearch_1)
    Link:{
        // POKE: Don’t get along too great while working on ATP (BH_City_Journal_Cassava)
        // CLARY: Poke & Cassava’s "emulsifier" (BH_City_Journal_Cassava)
        DAZ:"Spouse (GD_ConstructionYard_CannonMerge)"
    },
    Speaks:[
        5.101,"TH_Museum_EyeSymbol",
        5.102,"THM_SignalDish_1",
        5.802,"BH_Observatory_EyeSearch_1",
        5.803,"BH_Observatory_EyeSearch_2",
        "BH_City_Forum_2",
        "BH_City_Forum_3",
        "BH_City_Journal_Cassava",
        "Shared_GD_ConstructionYard_BH_Observatory",
        "TT_TimeLoop_Timeline_2",
        "GD_StatueIsland_ConsciousnessDebate",
        "BH_Observatory_TornadoResearch",
        "GD_ConstructionYard_CannonMerge",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Mention:[
        5.202,"WH_TimeDelay_1",
        "Shared_OPC_Intact_OPC_Damaged",
    ],
    Trivia:[
        "Constructed the Attlerock’s Eye locator with Filix (TH_Museum_EyeSymbol)",
        "Runs/Owns the Construction Yard, using Giant’s Deep’s tornadoes to send Orbital Probe Cannon parts in orbit. (BH_Observatory_TornadoResearch)",
        "Starting from BH_Observatory_EyeSearch_1 and by the time of BH_City_Forum_3, believes (alongside others) that the search for the Eye might be futile, and that the Eye may not wish to be found.",
        "Fears never finding the Eye (BH_City_Journal_Cassava)",
        "Once the OPC construction nears its end, regains hope of finding the Eye (GD_ConstructionYard_CannonMerge)"
    ]
},
//🙤
//🙧 🩷➖ CLARY             🟥
CLARY:{
    Gender:"♀️🩷 (BH_City_Journal_Cassava)",
    Born:"",
    Link:{
        POKE:"Sister (BH_City_Journal_Cassava) (C_Shuttle_InsideRecording)",
        // CASSAVA: Clary is Poke & Cassava’s "emulsifier" (BH_City_Journal_Cassava)
        YARROW:"Lover (BH_Forge_HourglassAlignment) (Shared_BH_Forge_TT_TimeLoopInterior)",
    },
    Speaks:[
        5.202,"WH_TimeDelay_1",
        "CT_TLE_TimeLoopEnergyRequirements2",
        "@UnusedTranslations_BHF_Wrong_Warp",
        "BH_Forge_BlackHoleCoreShipment",
        "BH_Forge_AlignmentWindow",
        "BH_City_Forum_3",
        "TT_Tower_BH_1",
        "BH_Forge_HourglassAlignment",
        "BH_Forge_WarpCoreCompleted",
        "Shared_BH_Forge_TT_TimeLoopInterior",
        7.901,"C_Shuttle_OutsideRecording",
        7.902,"C_Interior_ChooseCarefullyRecording",
        7.903,"C_Shuttle_InsideRecording"
    ],
    Mention:[
        5.203,"WH_TimeDelay_2",
        "BH_City_Journal_Poke",
        "BH_City_Journal_Cassava",
    ],
    Trivia:[
        "Part of the Black Hole Forge crew (BH_City_Journal_Poke)",
    ]
},
//🙤
//🙧 🩵💥 COLEUS            🟥
COLEUS:{
    Gender:"♂️🩵 (BH_City_Forum_2) (CaveTwin:CT_LAKEBED_CAVERN_X2) (CT_Quantum_EntanglementHint) (CT_Quantum_WanderingRock_2)",
    Born:"Pre-crash (CT_EscapePod_FossilDiscovery) (CT_EscapePod_PathToCity_1)",
    Link:{
        MELORAE:"Mentor (BH_City_Forum_2)",
        CYCAD:"Apprentice (BH_City_Forum_2)",
        // Told Ilex their clan used to meet and learn from other Nomai (BH_City_School_VesselLesson)
    },
    Speaks:[
        1.101,"CT_EscapePod_PathToCity_1",
        1.102,"CT_EscapePod_PathToCity_1b",
        1.103,"CT_EscapePod_PathToCity_2",
        1.104,"CT_EscapePod_PathToCity_3",
        1.105,"CT_EscapePod_PathToCity_4",
        3.102,"CT_QuantumMoonObservation-UNUSED",
        3.201,"CT_Quantum_WanderingRock_1a",
        4.301,"CT_Quantum_ColeusTrapped",
        4.631,"CT_EscapePod_FossilDiscovery",
        4.751,"CT_Fossil_AnglerfishResearch",
        5.102,"THM_SignalDish_1",
        5.103,"THM_SignalDish_2",
        "CT_SunStationDebate",
        "TT_TimeLoop_Timeline_1",
        "TH_Mine_FindingHearthianLife",
        "TH_Mine_SizeOfProject",
        "BH_City_Forum_2",
    ],
    Mention:[
        1.051,"CT_EscapePod_PathToFossil",
        3.202,"CT_Quantum_WanderingRock_2",
        3.203,"CT_Quantum_EntanglementHint",
        3.204,"CT_Quantum_WanderingRock_1b",
        "BH_City_School_VesselLesson",
    ],
    Trivia:[
        "Boarded Escape Pod 2",
        "Studied Ember Twin’s anglerfish fossil with Melorae. Their hypothesis that anglerfish are blind was never tested on a live specimen. (BH_City_Forum_2)",
        "Accidentally discovered the rule of quantum entanglement while studying Ember Twin’s north lakebed rocks... and went missing for two days in the meantime. (CT_Quantum_EntanglementHint)",
        "Relocated all subterranean plants present within Ash Twin while it was being carved and emptied out for the Ash Twin Project (TT_TimeLoop_Timeline_1)"
    ]
},
//🙤
//🙧 🩵🌑 CONOY
CONOY:{
    Gender:"♂️🩵 (THM_SignalDish_2)",
    Born:"Brittle Hollow (THM_SignalDish_2) (TT_Tower_CT)",
    Link:{
        UNNAMED:"Grandmother (BH_City_Forum_2)",
        SOLANUM:"Told her the end of the universe won't happen in their lifetimes (BH_City_School_BigBangLesson)",
        RAMIE:"Knew of her time travel discovery before most did (BH_Observatory_EyeSearch_2)",
        PYE:"Knew of her time travel discovery before most did (BH_Observatory_EyeSearch_2)",
        SPIRE:"Coworker_BH_Observatory_Tornado (BH_Observatory_TornadoResearch) — Spire’s supervisor? (Conoy is more centered on communicating results than doing the science)",
    },
    Speaks:[
        5.802,"BH_Observatory_EyeSearch_1",
        5.803,"BH_Observatory_EyeSearch_2",
        "BH_City_Forum_2",
        "TT_Tower_CT",
        "Shared_GD_ConstructionYard_BH_Observatory",
        "BH_Observatory_TornadoResearch",
    ],
    Mention:[
        5.103,"THM_SignalDish_2",
        "BH_City_School_BigBangLesson",
    ],
    Timeline order:{
        "THM_SignalDish_2":[1,2],
        "BH_Observatory_EyeSearch_1":[2,3],
        "BH_Observatory_EyeSearch_2":[3,4],
        "TT_Tower_CT":[4,5,6,7,8],
        "Shared_GD_ConstructionYard_BH_Observatory":[4,5,6,7],
        "BH_Observatory_TornadoResearch":[5,6,7,8],
        "BH_City_Forum_2":[4,5,6,7,8],
        "BH_City_School_BigBangLesson":[1,2,3,4,5,6,7,8],// Solanum's essay
    },
    Trivia:[
        "Worked at BH’s Southern Observatory",
        "Contributed to investigating Giant’s Deep’s tornadoes (Shared_GD_ConstructionYard_BH_Observatory)",
        "First thought of using Ramie and Pye’s time travel discovery in order to launch a single probe in many directions (BH_Observatory_EyeSearch_2)",
        "Lived in the Hanging City (TT_Tower_CT)",
        "Tends to get lost easily? (TT_Tower_CT)"
    ]
},
//🙤
//🙧 🩵➖ CYCAD
CYCAD:{
    Gender:"♂️🩵 (TH_Mine_SizeOfProject)",
    Born:"",
    Link:{
        COLEUS:"Mentor (BH_City_Forum_2)",
    },
    Speaks:[
        "TH_Mine_FindingHearthianLife",
        "TH_Mine_SizeOfProject",
        "BH_City_Forum_2",
    ],
    Mention:[],
    Timeline order:{
        "TH_Mine_FindingHearthianLife":[1,2],
        "TH_Mine_SizeOfProject":[2,3],
        "BH_City_Forum_2":[1,2,3],
    },
    Trivia:[
        "Presumably forbidden by Coleus from making puns, but not actually enforced (TH_Mine_SizeOfProject)",
    ]
},
//🙤
//🙧 🩵➖ DAZ               🟥
DAZ:{
    Gender:"♂️🩵 (GD_StatueIsland_FirstMemoryStatueTest)",
    Born:"",
    Link:{
        CASSAVA:"Spouse (GD_ConstructionYard_CannonMerge)",
        AVENS:"Brother (GD_ConstructionYard_CannonMerge)",
    },
    Speaks:[
        "Shared_GD_ConstructionYard_BH_Observatory",
        "GD_StatueIsland_FirstMemoryStatueTest",
        "GD_StatueIsland_ConsciousnessDebate",
        "GD_ConstructionYard_CannonMerge",
    ],
    Mention:[
        "TT_TimeLoop_Timeline_3b",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Trivia:[
        "Contributed to the construction of the Orbital Probe Cannon (Shared_GD_ConstructionYard_BH_Observatory)",
        "Suggests Cassava’s crew implement a “slightly lower maximum power setting than the absolute maximum possible” on the Orbital Probe Cannon, “to create room for [Avens and Mallow’s] enthusiasm.” (GD_ConstructionYard_CannonMerge)",
    ]
},
//🙤
//🙧 ➖💥 DIN
DIN:{
    Gender:"",
    Born:"Pre-crash (DB_EscapePod_CrashSiteRecording_2)",
    Link:{},
    Speaks:[
        1.103,"DB_EscapePod_CrashSiteRecording_2",
    ],
    Mention:[],
    Timeline order:{
        "DB_EscapePod_CrashSiteRecording_2":[1],
    },
    Trivia:[
        "Boarded Escape Pod 3",
        "Noticed the Vessel’s beacon signal was duplicated"
    ],
    Corpse_Location:"DB, Nomai Grave: xxx"
},
//🙤
//🙧 ➖💥 ESCALL
ESCALL:{
    Gender:"",
    Born:"Pre-crash (DB_Vessel_OutgoingMessages)",
    Link:{},
    Speaks:[
        0.001,"DB_Vessel_SignalFirstContact",
        1.102,"DB_EscapePod_CrashSiteRecording_1",
        1.103,"DB_EscapePod_CrashSiteRecording_2",
    ],
    Mention:[
        1.001,"DB_Vessel_OutgoingMessages",
        9.999,"DB_Vessel_IncomingMessages"
    ],
    Timeline order:{
        "DB_Vessel_SignalFirstContact":     [1],
        "DB_Vessel_OutgoingMessages":       [2],
        "DB_EscapePod_CrashSiteRecording_1":[3],
        "DB_EscapePod_CrashSiteRecording_2":[4],
        "DB_Vessel_IncomingMessages":       [5],
    },
    Trivia:[
        "Leader and namesake of the Vessel (DB_Vessel_OutgoingMessages)",
        "Boarded Escape Pod 3",
    ],
    Corpse_Location:"DB, Nomai Grave: xxx"
},
//🙤
//🙧 🩷💥 FILIX             🟥
FILIX:{
    Gender:"♀️🩷 (BH_Quantum_ShardDiscovery_2)",
    Born:"Pre-crash (BH_EscapePod_CrashSiteRecording)",
    Link:{
        PRIVET:"Apprentice (THM_SignalDish_1)",
        // Teacher at BH school? taught Lami?
    },
    Speaks:[
        0.001,"DB_Vessel_SignalFirstContact",
        1.001,"DB_Vessel_OutgoingMessages",
        1.102,"BH_EscapePod_CrashSiteRecording",
        2.101,"BH_OldSettlement_WhyDidWeCrash",
        2.102,"BH_OldSettlement_EyeCarving",
        2.501,"BH_OldSettlement_QuantumMoonSighting",
        2.901,"BH_OldSettlement_MigrationPlan",
        3.301,"BH_Quantum_ShardDiscovery",
        3.302,"BH_Quantum_ShardDiscovery_2",
        5.101,"TH_Museum_EyeSymbol",
        5.102,"THM_SignalDish_1",
        5.103,"THM_SignalDish_2",
        5.202,"WH_TimeDelay_1",
        "BH_City_School_FestivalLesson",
    ],
    Mention:[],
    Trivia:[
        "Tried to call other Vessels for help after the crash, only to realize that communications are broken (DB_Vessel_OutgoingMessages)",
        "Boarded Escape Pod 1 (BH_EscapePod_CrashSiteRecording)",
        "Thinks the Eye’s signal looked like an eye (round, with a circle at the center much like a pupil), and supposes the signal was looking for something. (BH_OldSettlement_EyeCarving)",
        "First on Brittle Hollow to be openly curious about the Quantum Moon (BH_OldSettlement_QuantumMoonSighting)",
        "Filix’s sight is somewhat faulty (BH_OldSettlement_QuantumMoonSighting)",
        "Filix and Annona had checked that the Vessel’s warp core and navigation systems were both well prior to warping (BH_OldSettlement_WhyDidWeCrash)",
        "Detected that BH’s quantum shard and the Quantum Moon emit the same signal, and heard that signal from Giant’s Deep, Timber Hearth and the Hourglass Twins, hypothesizing the existence of other shards there. (BH_Quantum_ShardDiscovery_2)",
        "Constructed the Attlerock’s Eye locator with Cassava (TH_Museum_EyeSymbol)",
    ]
},
//🙤
//🙧 ➖💥 FOLI
FOLI:{
    Gender:"",
    Born:"Pre-crash (BH_OldSettlement_Flavor_2)",
    Link:{
        KOUSA:"Loved_one (BH_OldSettlement_Flavor_2)",
    },
    Speaks:[],
    Mention:[
        2.202,"BH_OldSettlement_Flavor_2",
    ],
    Timeline order:{
        "BH_OldSettlement_Flavor_2":[1],
    },
    Trivia:["Separated from Kousa during the Vessel crash"]
},
//🙤
//🙧 🩵➖ IDAEA             🟥
IDAEA:{
    Gender:"♂️🩵 (Shared_GD_ConstructionYard_OPC_Intact)",
    Born:"",
    Link:{
        PRIVET:"Sister (Shared_GD_ConstructionYard_OPC_Intact)"
    },
    Speaks:[
        "BH_City_Forum_3",
        "CT_SunStationDebate",
        "CT_City_SunStationHint",
        "SS_MissionStatement",
        "TT_Tower_SS_1",
        7.001,"Shared_SS_SunStation_TT_TimeLoopInterior",
        7.101,"TT_TimeLoop_Timeline_5",
    ],
    Mention:[
        "TT_TimeLoop_Timeline_3c",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Trivia:[]
},
//🙤
//🙧 💙➖ ILEX              🟥
ILEX:{
    Gender:"💙 French version of CT_City_KidDirectionToFossil_1 & BH_City_School_VesselLesson",
    Born:"", // Probably Ember Twin, but found writing a poem in Brittle Hollow’s Old Settlement too. lil kiddo snuck out after class to graffiti some old ruins? :P
    Link:{
        LAEVI:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        LAMI:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        SOLANUM:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        TAGET:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        // Coleus told Ilex their clan used to meet and learn from other Nomai (BH_City_School_VesselLesson)
        // Ilex knows Poke (BH_City_School_VesselLesson)
        // Ilex knows Yarrow (BH_City_School_VesselLesson)
    },
    Speaks:[
        4.651,"CT_City_KidDirectionToFossil_1",
        4.701,"CT_Fossil_GameRules",
        4.781,"@UnusedTranslations_Beta_Nomai_Kids",
        "BH_City_School_VesselLesson",
        "BH_OldSettlement_ChildrensRhyme",
    ],
    Mention:[],
    Trivia:[
        "Used to play in Fossil Fish Cave as a child (@UnusedTranslations_Beta_Nomai_Kids)",
    ]
},
//🙤
//🙧 ➖💥 KEEK
KEEK:{
    Gender:"",
    Born:"Pre-crash (BH_OldSettlement_Flavor_1)",
    Link:{
        PLUME:"Loved_one (BH_OldSettlement_Flavor_1)", // Is Keek also Plume's brother? (BH_OldSettlement_Flavor_3)
    },
    Speaks:[],
    Mention:[
        2.201,"BH_OldSettlement_Flavor_1",
    ],
    Timeline order:{
        "BH_OldSettlement_Flavor_1":[1],
    },
    Trivia:[
        "Separated from Plume during the Vessel crash",
    ]
},
//🙤
//🙧 ➖💥 KOUSA
KOUSA:{
    Gender:"",
    Born:"Pre-crash (BH_OldSettlement_Flavor_2)",
    Link:{
        FOLI:"Loved_one (BH_OldSettlement_Flavor_2)",
    },
    Speaks:[
        2.202,"BH_OldSettlement_Flavor_2",
    ],
    Mention:[],
    Timeline order:{
        "BH_OldSettlement_Flavor_2":[1],
    },
    Trivia:[
        "Separated from Foli during the Vessel crash",
        "Boarded Escape Pod 1"
    ]
},
//🙤
//🙧 ❤️➖ LAEVI             🟥
LAEVI:{
    Gender:"❤️ (French version of CT_City_KidDirectionToFossil_2: “toutes les deux” = “both female”)",
    Born:"", // Most likely Ember Twin
    Link:{
        UNNAMED:"Mother (CT_City_KidDirectionToFossil_2)",
        UNNAMED:"Father (CT_City_KidDirectionToFossil_2)",
        LAMI:"Sibling (CT_City_KidDirectionToFossil_2)",
        PYE:"Aunt (CT_Fossil_GameRules)",
        ILEX:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        SOLANUM:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        TAGET:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
    },
    Speaks:[
        4.651,"CT_City_KidDirectionToFossil_1",
        4.652,"CT_City_KidDirectionToFossil_2",
        4.701,"CT_Fossil_GameRules",
        4.781,"@UnusedTranslations_Beta_Nomai_Kids",
        "GD_StatueIsland_WindowNote",
    ],
    Mention:[],
    Trivia:[
        "Used to play in Fossil Fish Cave as a child (@UnusedTranslations_Beta_Nomai_Kids)",
    ]
},
//🙤
//🙧 ❤️➖ LAMI              🟥
LAMI:{
    Gender:"❤️ (French version of CT_City_KidDirectionToFossil_2: “toutes les deux” = “both female”)",
    Born:"", // Most likely Ember Twin
    Link:{
        UNNAMED:"Mother (CT_City_KidDirectionToFossil_2)",
        UNNAMED:"Father (CT_City_KidDirectionToFossil_2)",
        LAEVI:"Sibling (CT_City_KidDirectionToFossil_2)",
        PYE:"Aunt (CT_Fossil_GameRules)",
        ILEX:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        SOLANUM:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        TAGET:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        // Taught by Filix?
    },
    Speaks:[
        4.651,"CT_City_KidDirectionToFossil_1",
        4.652,"CT_City_KidDirectionToFossil_2",
        4.701,"CT_Fossil_GameRules",
        4.781,"@UnusedTranslations_Beta_Nomai_Kids",
        "BH_City_School_FestivalLesson",
        "GD_StatueIsland_WindowNote",
    ],
    Mention:[],
    Trivia:[
        "Used to play in Fossil Fish Cave as a child (@UnusedTranslations_Beta_Nomai_Kids)",
    ]
},
//🙤
//🙧 ❤️➖ MALLOW            🟥
MALLOW:{
    Gender:"❤️ Consistently written as female in the French version of TT_TimeLoop_Timeline_3a & GD_ConstructionYard_CannonMerge & Shared_OPC_Intact_OPC_Damaged",
    Born:"",
    Link:{
        AVENS:"Husband (GD_ConstructionYard_CannonMerge)",
    },
    Speaks:[
        5.802,"BH_Observatory_EyeSearch_1",
        5.803,"BH_Observatory_EyeSearch_2",
        "Shared_OPC_Intact_OPC_Damaged",
        "Shared_OPC_Damaged_OPC_Sunken",
    ],
    Mention:[
        "GD_ConstructionYard_CannonMerge",
        "TT_TimeLoop_Timeline_3a",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Trivia:[
        "First thought of searching for the Eye visually rather than via its signal, based on their knowledge of the Quantum Moon and the hypothesis that the Eye orbits the sun. (BH_Observatory_EyeSearch_1) (BH_Observatory_EyeSearch_2)",
    ]
},
//🙤
//🙧 🩷💥 MELORAE           🟥
MELORAE:{
    Gender:"♀️🩷 (BH_OldSettlement_Flavor_4)",
    Born:"Pre-crash (BH_OldSettlement_Flavor_4)",
    Link:{
        THATCH:"Nibling (BH_OldSettlement_Flavor_4)",
        COLEUS:"Apprentice (BH_City_Forum_2)",
    },
    Speaks:[
        1.003,"CT_EscapePod_CrashSiteRecording_2",
        1.051,"CT_EscapePod_PathToFossil",
        1.101,"CT_EscapePod_PathToCity_1",
        3.001,"CT_QuantumMoonObservation",
        3.101,"CT_QuantumMoonObservation_2",
        3.102,"CT_QuantumMoonObservation-UNUSED",
        3.201,"CT_Quantum_WanderingRock_1a",
        3.202,"CT_Quantum_WanderingRock_2",
        3.203,"CT_Quantum_EntanglementHint",
        3.204,"CT_Quantum_WanderingRock_1b",
        4.301,"CT_Quantum_ColeusTrapped",
        4.631,"CT_EscapePod_FossilDiscovery",
        4.751,"CT_Fossil_AnglerfishResearch",
    ],
    Mention:[
        1.104,"CT_EscapePod_PathToCity_3",
        2.204,"BH_OldSettlement_Flavor_4",
        "BH_City_Forum_2",
        "TH_Mine_FindingHearthianLife",
    ],
    Trivia:[
        "Studied Ember Twin’s anglerfish fossil with Coleus. Their hypothesis that anglerfish are blind was never tested on a live specimen. (BH_City_Forum_2)",
        "Got curious about the quantum shard in Ember Twin’s lakebed caves, panicked when Coleus went missing. (CT_Quantum_WanderingRock_*)",
        "Once told Coleus of a subterranean species from another star system somewhat similar to proto-Hearthians (TH_Mine_FindingHearthianLife)",
    ]
},
//🙤
//🙧 ➖➖ MITIS
MITIS:{
    Gender:"",
    Born:"",
    Link:{},
    Speaks:[
        "BH_City_Forum_3",
    ],
    Mention:[],
    Timeline order:{
        "BH_City_Forum_3":[1],
    },
    Trivia:[
        "Believes there is little hope of recovering the Vessel’s knowledge",
        "In favor of relearning Advanced Warp Core technology from scratch"
    ]
},
//🙤
//🙧 💙➖ OENO              🟥
OENO:{
    Gender:"💙 (French translation of TH_Mine_SizeOfProject)",
    Born:"",
    Link:{},
    Speaks:[
        "TH_Mine_FindingHearthianLife",
        "Shared_TH_Mine_BHM_Volcano",
        "Shared_TH_Mine_TT_TimeLoopInterior",
        "BH_City_Forum_3",
        "TH_Mine_SizeOfProject",
    ],
    Mention:[],
    Trivia:[]
},
//🙤
//🙧 🩵➖ PHLOX             🟥
PHLOX:{
    Gender:"♂️🩵 (GD_StatueIsland_FirstMemoryStatueTest)",
    Born:"",
    Link:{
        PLUME:"Father (BH_City_Forum_2)",
    },
    Speaks:[
        "CT_TLE_TimeLoopEnergyRequirements2",
        "BH_City_Forum_2",
        "GD_StatueIsland_WarpReceiverNote",
        "GD_StatueIsland_FirstMemoryStatueTest",
        "GD_StatueIsland_ConsciousnessDebate",
        "Shared_GD_StatueIsland_TT_TimeLoopInterior",
    ],
    Mention:[
        "TT_TimeLoop_Timeline_2",
        "GD_StatueIsland_WindowNote",
        "BH_Forge_WarpCoreCompleted",
        "TT_TimeLoop_Timeline_3b",
    ],
    Trivia:[
        "Designed the Ash Twin warp towers schematics in the High Energy Lab (BH_Forge_WarpCoreCompleted)",
        "Sculpted the Ash Twin Project’s memory statues and masks",
        "Lives on Giant’s Deep (GD_StatueIsland_WarpReceiverNote)",
    ]
},
//🙤
//🙧 🩵💥 PLUME             🟥
PLUME:{
    Gender:"♂️🩵 (BH_City_Forum_2) (BH_Quantum_ShardDiscovery)",
    Born:"Pre-crash (BH_EscapePod_BlackHoleWarning) (BH_Observatory_EyeSearch_1)",
    Link:{
        PHLOX:"Child (BH_City_Forum_2)",
        KEEK:"Loved_one (BH_OldSettlement_Flavor_1)", // Is Keek also Plume’s brother? (BH_OldSettlement_Flavor_3)
    },
    Speaks:[
        1.102,"BH_EscapePod_CrashSiteRecording",
        1.103,"BH_EscapePod_BlackHoleWarning",
        2.001,"BH_OldSettlement_NoteAboutConstruction",
        2.101,"BH_OldSettlement_WhyDidWeCrash",
        2.102,"BH_OldSettlement_EyeCarving",
        2.201,"BH_OldSettlement_Flavor_1",
        2.203,"BH_OldSettlement_Flavor_3",
        2.501,"BH_OldSettlement_QuantumMoonSighting",
        2.901,"BH_OldSettlement_MigrationPlan",
        3.301,"BH_Quantum_ShardDiscovery",
        3.302,"BH_Quantum_ShardDiscovery_2",
        5.103,"THM_SignalDish_2",
        5.802,"BH_Observatory_EyeSearch_1",
    ],
    Mention:[
        "BH_City_Forum_2",
    ],
    Trivia:[
        "Told Phlox that many Nomai died in Dark Bramble (BH_City_Forum_2)",
        "Boarded Escape Pod 1 (BH_EscapePod_CrashSiteRecording)",
        "Separated from Keek and his brother (if two separate people) during the Vessel crash",
        "Scouted for dangers and guided survivors of Escape Pod 1 (BH_EscapePod_CrashSiteRecording) (BH_EscapePod_BlackHoleWarning)",
        "Strongly believes that the Eye called out to summon them to this star system (BH_Observatory_EyeSearch_1)",
        "Refuses to allow the clan’s greatest loss to be in vain (BH_OldSettlement_Flavor_3)",
        "Hypothesized that the ToQK’s Quantum Shard originated from the wandering (quantum) moon. (BH_Quantum_ShardDiscovery_2)"
    ]
},
//🙤
//🙧 🩷➖ POKE              🟥
POKE:{
    Gender:"♀️🩷 (@UnusedTranslations_BHF_Wrong_Warp) (BH_City_School_VesselLesson) (C_Shuttle_InsideRecording)",
    Born:"", // "in this star system" (BH_City_Journal_Poke)
    Link:{
        ANNONA:"Mentor (BH_City_Forum_3) (BH_City_Journal_Poke)",
        CLARY:"Sister (BH_City_Journal_Cassava) (C_Shuttle_InsideRecording)",
        // Doesn't get along great with Cassava while working on AWC (BH_City_Journal_Cassava)
    },
    Speaks:[
        5.201,"WH_WarpTowerInstructions",
        5.202,"WH_TimeDelay_1",
        5.203,"WH_TimeDelay_2",
        "CT_SunStationDebate",
        "BH_City_Forum_3",
        "TT_TimeLoop_Timeline_2",
        "BH_City_Journal_Poke",
        "BH_Forge_BlackHoleCoreShipment",
        "BH_Forge_AlignmentWindow",
        "BH_Forge_HourglassAlignment",
        "BH_Forge_WarpCoreCompleted",
        "TT_Tower_BH_1",
        "Shared_BH_Forge_TT_TimeLoopInterior",
        7.901,"C_Shuttle_OutsideRecording",
        7.902,"C_Interior_ChooseCarefullyRecording",
        7.905,"C_Interior_FinalRecording"
    ],
    Mention:[
        "CT_TLE_TimeLoopEnergyRequirements2",
        "@UnusedTranslations_BHF_Wrong_Warp",
        "BH_City_School_VesselLesson",
        "BH_City_Journal_Cassava",
        7.903,"C_Shuttle_InsideRecording"
    ],
    Trivia:[
        "Runs/Owns the Black Hole Forge (@UnusedTranslations_BHF_Wrong_Warp)",
        "Was born after the Vessel’s warp core was created (BH_City_Forum_3), but had Annona explain many of his designs.",
        "Never saw Annona’s warp core with her own eyes (BH_City_Journal_Poke)",
    ]
},
//🙤
//🙧 🩷➖ PRIVET            🟥
PRIVET:{
    Gender:"♀️🩷 (Shared_GD_ConstructionYard_OPC_Intact)",
    Born:"",
    Link:{
        IDAEA:"Brother (Shared_GD_ConstructionYard_OPC_Intact)",
        FILIX:"Mentor (THM_SignalDish_1)",
    },
    Speaks:[
        5.802,"BH_Observatory_EyeSearch_1",
        5.803,"BH_Observatory_EyeSearch_2",
        "Shared_OPC_Damaged_OPC_Sunken",
        "Shared_OPC_Sunken_TT_TimeLoopInterior",
    ],
    Mention:[
        5.102,"THM_SignalDish_1",
        "GD_ConstructionYard_CannonMerge",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Trivia:[
        "Installed the probe tracking system in the Orbital Probe Cannon (GD_ConstructionYard_CannonMerge)",
        "Worried Idaea may feel responsible for the sun station failure (Shared_GD_ConstructionYard_OPC_Intact)",
    ]
},
//🙤
//🙧 🩷➖ PYE               🟥
PYE:{
    Gender:"♀️🩷 (CT_City_SunStationHint)",
    Born:"",
    Link:{
        LAEVI:"Nibling (CT_Fossil_GameRules)",
        LAMI:"Nibling (CT_Fossil_GameRules)",
    },
    Speaks:[
        3.102,"CT_QuantumMoonObservation-UNUSED",
        5.203,"WH_TimeDelay_2",
        5.301,"CT_TLE_TimeTravelConfirmed1",
        5.302,"CT_TLE_CityToExperimentHint",
        5.303,"CT_TLE_TimeTravelConfirmed2",
        5.901,"CT_TLE_TimeLoopEnergyRequirements1",
        "CT_TLE_TimeLoopEnergyRequirements2",
        "CT_SunStationDebate",
        "TT_TimeLoop_Timeline_1",
        "TT_Tower_CT",
        "CT_City_SunStationHint",
        "SS_MissionStatement",
        "TT_Tower_SS_1",
        7.001,"Shared_SS_SunStation_TT_TimeLoopInterior",
        7.101,"TT_TimeLoop_Timeline_5",
        7.901,"C_Shuttle_OutsideRecording",
        7.902,"C_Interior_ChooseCarefullyRecording",
        7.905,"C_Interior_FinalRecording"
    ],
    Mention:[
        4.701,"CT_Fossil_GameRules",
        5.803,"BH_Observatory_EyeSearch_2",
        "TT_TimeLoop_Timeline_3c",
        "Shared_BH_Forge_TT_TimeLoopInterior",
        7.903,"C_Shuttle_InsideRecording"
    ],
    Trivia:[
        "Told Laevi real anglerfish are blind. Must have heard it from Coleus or Melorae? (CT_Fossil_GameRules)"
        "Discovered the possibility for time travel with Ramie (CT_TLE_CityToExperimentHint)",
    ]
},
//🙤
//🙧 🩷➖ RAMIE             🟥
RAMIE:{
    Gender:"♀️🩷 (Shared_OPC_Sunken_TT_TimeLoopInterior)",
    Born:"", // Probably not on the Vessel (BH_City_Forum_2) // Most likely Ember Twin (BH_City_Forum_2)
    Link:{},
    Speaks:[
        5.203,"WH_TimeDelay_2",
        5.301,"CT_TLE_TimeTravelConfirmed1",
        5.302,"CT_TLE_CityToExperimentHint",
        5.303,"CT_TLE_TimeTravelConfirmed2",
        5.901,"CT_TLE_TimeLoopEnergyRequirements1",
        "CT_SunStationDebate",
        "TT_TimeLoop_Timeline_1",
        "BH_City_Forum_2",
        "TT_Tower_CT",
        "Shared_GD_StatueIsland_TT_TimeLoopInterior",
        "TT_TimeLoop_Timeline_3c",
        7.101,"TT_TimeLoop_Timeline_5",
    ],
    Mention:[
        5.803,"BH_Observatory_EyeSearch_2",
        "Shared_TH_Mine_TT_TimeLoopInterior",
        "Shared_OPC_Sunken_TT_TimeLoopInterior",
        "TT_Tower_SS_1",
    ],
    Trivia:[
        "Used to play in Fossil Fish Cave as a child (BH_City_Forum_2)",
        "Discovered the possibility for time travel with Pye (CT_TLE_CityToExperimentHint)",
        "Enjoys puns (CT_TLE_TimeLoopEnergyRequirements1)",
        "Finished building the supernova-proof protective shell around Ash Twin (Shared_TH_Mine_TT_TimeLoopInterior)",
        "Installed the memory masks inside the Ash Twin Project (Shared_GD_StatueIsland_TT_TimeLoopInterior)",
    ]
},
//🙤
//🙧 ➖💥 RHUS
RHUS:{
    Gender:"",
    Born:"Pre-crash (CT_EscapePod_CrashSiteRecording_2)",
    Link:{},
    Speaks:[
        1.002,"CT_EscapePod_CrashSiteRecording",
        1.003,"CT_EscapePod_CrashSiteRecording_2",
        1.052,"CT_EscapePod_PathToRocks",
    ],
    Mention:[],
    Timeline order:{
        "CT_EscapePod_CrashSiteRecording":[1],
        "CT_EscapePod_CrashSiteRecording_2":[2],
        "CT_EscapePod_PathToRocks":[3],
    },
    Trivia:[
        "Boarded Escape Pod 2",
        "Seems to like geology (CT_EscapePod_PathToRocks)"
    ]
},
//🙤
//🙧 🩵➖ ROOT              🟥
ROOT:{
    Gender:"♂️🩵 (BH_Forge_BlackHoleCoreShipment)",
    Born:"",
    Link:{},
    Speaks:[
        "CT_TLE_TimeLoopEnergyRequirements2",
        "Shared_TH_Mine_BHM_Volcano",
        "@UnusedTranslations_BHF_Wrong_Warp",
        "BH_Forge_BlackHoleCoreShipment",
        "BH_Forge_WarpCoreCompleted",
    ],
    Mention:[
        5.202,"WH_TimeDelay_1",
        "BH_City_Journal_Poke",
        "TT_Tower_BH_1",
    ],
    Trivia:[
        "Part of the Black Hole Forge crew (BH_City_Journal_Poke)",
        "Part of the forge crew which tested ore durability at Hollow’s Lantern for Ash Twin’s protective shell (Shared_TH_Mine_BHM_Volcano)",
    ]
},
//🙤
//🙧 ➖💥 SECCA
SECCA:{
    Gender:"",
    Born:"Pre-crash (DB_EscapePod_CrashSiteRecording_1)",
    Link:{},
    Speaks:[
        1.102,"DB_EscapePod_CrashSiteRecording_1",
        1.103,"DB_EscapePod_CrashSiteRecording_2",
        1.104,"DB_EscapePod_BrambleSeedRecording"
    ],
    Mention:[],
    Timeline order:{
        "DB_EscapePod_CrashSiteRecording_1":[1],
        "DB_EscapePod_CrashSiteRecording_2":[2],
        "DB_EscapePod_BrambleSeedRecording":[3]
    },
    Trivia:["Boarded Escape Pod 3","Recorded the Nomai Grave message"],
    Corpse_Location:"DB, Nomai Grave: likely closest to the record"
},
//🙤
//🙧 🩷➖ SOLANUM
SOLANUM:{
    Gender:"♀️🩷 (BrittleHollow:BH_QUANTUM_RESEARCH_TOWER_X1)",
    Born:"", // Most likely Ember Twin
    Link:{
        ILEX:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        LAEVI:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        LAMI:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        TAGET:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        CONOY:"Told her that the end of the universe won’t happen in their lifetimes (BH_City_School_BigBangLesson)",
        UNNAMED:"Father (CT_City_Journal_ChildIlex)"
    },
    Speaks:[
        4.601,"CT_City_Journal_ChildIlex",
        4.611,"CT_Fossil_ExitHint",
        4.652,"CT_City_KidDirectionToFossil_2",
        4.781,"@UnusedTranslations_Beta_Nomai_Kids",
        "BH_City_School_BigBangLesson",
        7.701,"Shared_BH_Cannon_BH_Quantum",
        7.801,"BH_City_Journal_OlderIlex",
        7.904,"QM_Shuttle_IlexRecording",
        9.999,"QM_SolanumConvo_Response_Explain+Eye",
        9.999,"QM_SolanumConvo_Response_Explain+Me.xml",
        9.999,"QM_SolanumConvo_Response_Explain+QuantumMoon.xml",
        9.999,"QM_SolanumConvo_Response_Explain+You.xml",
        9.999,"QM_SolanumConvo_Response_Eye+Me.xml",
        9.999,"QM_SolanumConvo_Response_Eye+QuantumMoon.xml",
        9.999,"QM_SolanumConvo_Response_Eye+You.xml",
        9.999,"QM_SolanumConvo_Response_Identify+Explain",
        9.999,"QM_SolanumConvo_Response_Identify+Eye.xml",
        9.999,"QM_SolanumConvo_Response_Identify+Me.xml",
        9.999,"QM_SolanumConvo_Response_Identify+QuantumMoon.xml",
        9.999,"QM_SolanumConvo_Response_Identify+You.xml",
        9.999,"QM_SolanumConvo_Response_QuantumMoon+Me.xml",
        9.999,"QM_SolanumConvo_Response_QuantumMoon+You.xml",
        9.999,"QM_SolanumConvo_Response_You+Me.xml"
    ],
    Mention:[
        7.702,"BH_Quantum_ShrineNorthHint",
    ],
    Timeline order:{
        "CT_Fossil_ExitHint":[1,2,3,4],
        "CT_City_Journal_ChildIlex":[1,2,3,4],
        "CT_City_KidDirectionToFossil_2":[1,2,3,4],
        "@UnusedTranslations_Beta_Nomai_Kids":[1,2,3,4],
        "BH_City_School_BigBangLesson":[5],
        "BH_City_Journal_OlderIlex":[6,7,8],
        "Shared_BH_Cannon_BH_Quantum":[6,7],
        "BH_Quantum_ShrineNorthHint":[7,8],
        "QM_Shuttle_IlexRecording":[9],
        "QM_SolanumConvo_Response_*":[10],
    },
    Trivia:[
        "Used to play in Fossil Fish Cave as a child (@UnusedTranslations_Beta_Nomai_Kids)",
        "Attended school on Brittle Hollow (BH_City_School_BigBangLesson)",
        "As a child on Ember Twin, believed that the Eye wishes to harm her clan. While this is no longer the case, she reflects that it may not want to be found, then that her clan’s tragedy may not have any deeper meaning, as there is no evidence supporting that the Eye is capable of “wanting” anything. (BH_City_Journal_OlderIlex)",
    ]
},
//🙤
//🙧 🩵➖ SPIRE
SPIRE:{
    Gender:"♂️🩵 (Kelsey Beachum mentioned “his replication of Giant’s Deep’s tornadoes” in the Lost In Cult book)",
    Born:"",
    Link:{
        CONOY:"Coworker_BH_Observatory_Tornado (BH_Observatory_TornadoResearch)",
    },
    Speaks:[
        "BH_City_Forum_3",
        "BH_Observatory_TornadoResearch",
    ],
    Mention:[
        "Shared_GD_ConstructionYard_BH_Observatory",
        7.001,"Shared_SS_SunStation_TT_TimeLoopInterior",
    ],
    Timeline order:{
        "BH_City_Forum_3"                          :[1,2,3],
        "Shared_GD_ConstructionYard_BH_Observatory":[1,2],
        "BH_Observatory_TornadoResearch"           :[2,3],
        "Shared_SS_SunStation_TT_TimeLoopInterior" :[4],
    },
    Trivia:[
        "Worked at the BH Southern Observatory",
        "Discovered Giant’s Deep’s rarer counterclockwise cyclones (BH_Observatory_TornadoResearch)",
        "Really loves to make models for studying and monitoring phenomena (BH_Observatory_TornadoResearch)",
        "In favor of retrieving the Advanced Warp Core from the Vessel",
        "First noticed the comet approaching the star system (Shared_SS_SunStation_TT_TimeLoopInterior)"
    ]
},
//🙤
//🙧 🩵➖ TAGET             🟥
TAGET:{
    Gender:"♂️🩵 (CT_City_KidDirectionToFossil_1)",
    Born:"", // Most likely Ember Twin
    Link:{
        ILEX:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        LAEVI:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        LAMI:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
        SOLANUM:"Childhood_Friend (@UnusedTranslations_Beta_Nomai_Kids)",
    },
    Speaks:[
        4.651,"CT_City_KidDirectionToFossil_1",
        4.652,"CT_City_KidDirectionToFossil_2",
        4.781,"@UnusedTranslations_Beta_Nomai_Kids",
        "GD_StatueIsland_WindowNote",
    ],
    Mention:[],
    Trivia:[
        "Used to play in Fossil Fish Cave as a child (@UnusedTranslations_Beta_Nomai_Kids)",
    ]
},
//🙤
//🙧 ❤️💥 THATCH            🟥
THATCH:{
    Gender:"❤️ From German translation of BH_City_School_FestivalLesson (“Unsere Gesandte war Thatch!”)",
    Born:"Pre-crash (BH_City_School_FestivalLesson)",
    Link:{
        MELORAE:"Aunt (BH_OldSettlement_Flavor_4)",
    },
    Speaks:[
        1.102,"BH_EscapePod_CrashSiteRecording",
        2.101,"BH_OldSettlement_WhyDidWeCrash",
        2.102,"BH_OldSettlement_EyeCarving",
        2.204,"BH_OldSettlement_Flavor_4",
        2.501,"BH_OldSettlement_QuantumMoonSighting",
        2.901,"BH_OldSettlement_MigrationPlan",
        3.301,"BH_Quantum_ShardDiscovery",
        3.302,"BH_Quantum_ShardDiscovery_2",
        5.102,"THM_SignalDish_1",
        5.103,"THM_SignalDish_2",
    ],
    Mention:[
        "BH_City_School_FestivalLesson",
    ],
    Trivia:[
        "Used to be the envoy of Escall’s clan for festivals (BH_City_School_FestivalLesson)",
        "Boarded Escape Pod 1 (BH_EscapePod_CrashSiteRecording)",
        "Resolved to find the Eye of the universe considering its properties and ‘what rare and profound knowledge it might offer.’ (BH_OldSettlement_EyeCarving)",
    ]
},
//🙤
//🙧 🩵➖ YARROW            🟥
YARROW:{
    Gender:"♂️🩵 (BH_Forge_HourglassAlignment) (CT_TLE_TimeTravelConfirmed2)",
    Born:"", // Presumably Sunless City? (CT_TLE_TimeTravelConfirmed2)
    Link:{
        CLARY:"Lover (BH_Forge_HourglassAlignment) (Shared_BH_Forge_TT_TimeLoopInterior)",
    },
    Speaks:[
        "CT_TLE_TimeLoopEnergyRequirements2",
        "GD_StatueIsland_FirstMemoryStatueTest",
        "Shared_TH_Mine_TT_TimeLoopInterior",
        "CT_SunStationDebate",
        "TT_TimeLoop_Timeline_1",
        "CT_City_SunStationHint",
        "TT_Tower_BH_1",
        "TT_TimeLoop_Timeline_2",
        "TT_TimeLoop_Timeline_3a",
        "TT_TimeLoop_Timeline_3b",
        "TT_TimeLoop_Timeline_3c",
        "TT_Tower_SS_1",
        "TT_TimeLoop_Timeline_4",
        "Shared_BH_Forge_TT_TimeLoopInterior",
        "Shared_OPC_Sunken_TT_TimeLoopInterior",
        7.001,"Shared_SS_SunStation_TT_TimeLoopInterior",
        7.101,"TT_TimeLoop_Timeline_5",
        7.601,"TT_TimeLoop_Timeline_7",
    ],
    Mention:[
        5.303,"CT_TLE_TimeTravelConfirmed2",
        "BH_City_School_VesselLesson",
        "BH_Forge_BlackHoleCoreShipment",
        "BH_Forge_HourglassAlignment",
        "BH_Forge_WarpCoreCompleted",
        7.201,"Shared_GD_ConstructionYard_OPC_Intact",
    ],
    Trivia:[]
},
//🙤
// MODERN NOMAI:
//🙧 ➖🛸 BROMI
BROMI:{
    Gender:"",
    Born:"Modern Times (DB_Vessel_IncomingMessages)",
    Link:{
        UNNAMED:"Grandfather" // Used to tell the old myth of the Disappearance of Escall; likely deceased
    },
    Speaks:[
        9.999,"DB_Vessel_IncomingMessages"
    ],
    Mention:[],
    Timeline order:{
        "DB_Vessel_IncomingMessages" :[1],
    },
    Trivia:[
        "Heard Canna’s message and prepares to warp to Blackrock.",
        "Hearing Neem’s lack of news, reminded of the old myth of the Disappearance of Escall.",
        "Seems surprised and skeptical to hear that Escall’s story was real."
    ]
},
//🙤
//🙧 ➖🛸 CANNA
CANNA:{
    Gender:"",
    Born:"Modern Times (DB_Vessel_IncomingMessages)",
    Link:{},
    Speaks:[
        9.999,"DB_Vessel_IncomingMessages"
    ],
    Mention:[],
    Timeline order:{
        "DB_Vessel_IncomingMessages" :[1],
    },
    Trivia:[
        "Concluded the universe is dying.",
        "Calls out to all Nomai clans to gather at Blackrock in the Gloaming Galaxy.",
        "Reminds all Vessels to be extremely cautious of potentially unstable stars (which is most of them, now)."
    ]
},
//🙤
//🙧 ➖🛸 CLEM
CLEM:{
    Gender:"",
    Born:"Modern Times (DB_Vessel_IncomingMessages)",
    Link:{
        NEEM:"Close_Acquaintance (Clem is the first to express extreme relief at Neem’s message)"
    },
    Speaks:[
        9.999,"DB_Vessel_IncomingMessages"
    ],
    Mention:[],
    Timeline order:{
        "DB_Vessel_IncomingMessages" :[1],
    },
    Trivia:[
        "As a child, heard the story of Escall’s Vessel: “One day, Escall’s Vessel simply stopped responding. The other clans searched and searched, but found no trace. It was as if their missing friends had warped out of existence.”.",
    ]
},
//🙤
//🙧 ➖🛸 HYSSOP
HYSSOP:{
    Gender:"",
    Born:"Modern Times (DB_Vessel_IncomingMessages)",
    Link:{},
    Speaks:[
        9.999,"DB_Vessel_IncomingMessages"
    ],
    Mention:[],
    Timeline order:{
        "DB_Vessel_IncomingMessages" :[1],
    },
    Trivia:[
        "Knows that Escall’s clan truly existed, and that their disappearance is no myth.",
        "Hyssop’s clan’s ancestors searched for Escall’s clan for a long time, to no avail; it is the only time in their history that a Vessel ever disappeared this way."
    ]
},
//🙤
//🙧 🩵🛸 NEEM
NEEM:{
    Gender:"♂️🩵",
    Born:"Modern Times (DB_Vessel_IncomingMessages)",
    Link:{
        // Hyssop: seems on friendly enough terms?
    },
    Speaks:[
        9.999,"DB_Vessel_IncomingMessages"
    ],
    Mention:[],
    Timeline order:{
        "DB_Vessel_IncomingMessages" :[1],
    },
    Trivia:[
        "Tried to warp to Canna’s Vessel, but nearly avoided the triple suns of the Bright Spark’s supernova on the way, leading Canna to worry until he could give news."
    ]
},
//🙤
}