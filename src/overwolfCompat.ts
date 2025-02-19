export function overwolfWeaponToName(overwolfWeapon: string): string | null {
  return {
    "TX_Hud_Pistol_Glock_S": "Classic",
    "TX_Hud_Pistol_SawedOff_S": "Shorty",
    "TX_Hud_AutoPistol": "Frenzy",
    "TX_Hud_Pistol_Luger_S": "Ghost",
    "TX_Hud_Pistol_Revolver_S": "Sheriff",

    "TX_Hud_Pump": "Bucky",
    "TX_Hud_Shotguns_Spas12_S": "Judge",

    "TX_Hud_Vector": "Stinger",
    "TX_Hud_SMG_MP5_S": "Spectre",
    
    "TX_Hud_Burst": "Bulldog",
    "tx_hud_dmr": "Guardian",
    "TX_Hud_Assault_AR10A2_S": "Phantom",
    "TX_Hud_Volcano": "Vandal",

    "TX_Hud_Sniper_BoltAction_S": "Marshal",
    "TX_Hud_Operator": "Operator",
    "TX_Hud_DoubleSniper": "Outlaw",

    "TX_Hud_LMG": "Ares",
    "TX_Hud_HMG": "Odin",

    "TX_Hud_Knife_Standard_S": "Knife"
  }[overwolfWeapon] || null;
}

export function overwolfMapToName(overwolfMap: string): string | null {
  return {
    "Infinity": "Abyss",
    "Triad": "Haven",
    "Duality": "Bind",
    "Bonsai": "Split",
    "Ascent": "Ascent",
    "Port": "Icebox",
    "Foxtrot": "Breeze",
    "Canyon": "Fracture",
    "Pitt": "Pearl",
    "Jam": "Lotus",
    "Juliett": "Sunset"
  }[overwolfMap] || null;
}

export function overwolfAgentToName(overwolfAgent: string): string | null {
  return {
    "Clay_PC_C": "Raze",
    "Pandemic_PC_C": "Viper",
    "Wraith_PC_C": "Omen",
    "Hunter_PC_C": "Sova",
    "Thorne_PC_C": "Sage",
    "Phoenix_PC_C": "Phoenix",
    "Wushu_PC_C": "Jett",
    "Gumshoe_PC_C": "Cypher",
    "Sarge_PC_C": "Brimstone",
    "Breach_PC_C": "Breach",
    "Vampire_PC_C": "Reyna",
    "Killjoy_PC_C": "Killjoy",
    "Guide_PC_C": "Skye",
    "Stealth_PC_C": "Yoru",
    "Rift_PC_C": "Astra",
    "Grenadier_PC_C": "KAY/O",
    "Deadeye_PC_C": "Chamber",
    "Sprinter_PC_C": "Neon",
    "BountyHunter_PC_C": "Fade",
    "Mage_PC_C": "Harbor",
    "AggroBot_PC_C": "Gekko",
    "Cable_PC_C": "Deadlock",
    "Sequoia_PC_C": "Iso",
    "Smonk_PC_C": "Clove",
    "Nox_PC_C": "Vyse",
    "Cashew_PC_C": "Tejo"
  }[overwolfAgent] || null;
}