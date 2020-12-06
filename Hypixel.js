///api_version=2
(script = registerScript({
    name: "HypixelServer",
    version: "0.1",
    authors: ["tk400"]
})).import("Core.lib");

list = [
    favorite = value.createList("favorite", ["BedWars Solo","BedWars Team","SkyWars Solo Insane", ""], ""),
    BedWars = value.createList("BedWars", ["solo","Team","3v3","4v4", ""], ""),
    SkyWars = value.createList("SkyWars", ["Solo Normal","Solo Insane","Team Normal","Team Insane", ""], ""),
    murder = value.createList("Murder Mystery", ["Classic", "Double Up", "Assassins", "Infection", ""], ""),
    UHC = value.createList("UHC", ["solo", "teams", "event", "Speed Solo", "Speed Team", ""], ""),
    MegaWall = value.createList("MegaWalls", ["Standard", "Face Off", ""], ""),
/*   SkyWars = value.createList("Please Select a Game", ["BedWars_1v1","BedWars_2v2","BedWars_3v3","BedWars_4v4","SkyWars_Solo","SkyWars_Solo_Insane","SkyWars_Team","SkyWars_Team_Insane","SurivialGames_Solo","SurivialGames_Team","MiniWalls", ""], ""),*/
]
module = {
    name: "GameChange",
    description: "Allow Change Game. One Click Mode",
    values: list,
    category: "Hypixel",
    onUpdate: function () {
        fv = ["bedwars_eight_one", "bedwars_eight_two", "Solo_Insane"][["BedWars Solo","BedWars Team","SkyWars Solo Insane"].indexOf(favorite.get())];
        bw = ["bedwars_eight_one", "bedwars_eight_two", "bedwars_four_three", "bedwars_four_four"][["BedWars_Solo", "BedWars_Team", "BedWars_3v3", "BedWars_4v4"].indexOf(BedWars.get())];
        sw = ["Solo_Normal", "Solo_Insane", "Team_Normal", "Team_Insane"][["Solo Normal","Solo Insane","Team Normal","Team Insane"].indexOf(SkyWars.get())];
        mm = ["murder_classic", "murder_double_up", "murder_assassins", "murder_infection"][["Classic", "Double Up", "Assassins", "Infection"].indexOf(murder.get())];
        uhccmd = ["uhc_solo", "uhc_teams", "uhc_events", "speed_solo_normal", "speed_team_normal"][["solo", "teams", "event", "Speed Solo", "Speed Team"].indexOf(UHC.get())];
        MegaW = ["mw_standard", "mw_face_off"][["Standard", "Face Off"].indexOf(MegaWall.get())];
        if(!favorite.get() == "") {mc.thePlayer.sendChatMessage("/play " + fv); GameChangeModule.getValue("Favorite").set("")}
        if(!BedWars.get() == "") {mc.thePlayer.sendChatMessage("/play " + bw); GameChangeModule.getValue("BedWars").set("")}
        if(!SkyWars.get() == "") {mc.thePlayer.sendChatMessage("/play " + sw); GameChangeModule.getValue("SkyWars").set("")}
        if(!murder.get() == "") {mc.thePlayer.sendChatMessage("/play " + mm); GameChangeModule.getValue("Murder Mystery").set("")}
        if(!UHC.get() == "") {mc.thePlayer.sendChatMessage("/play " + uhccmd); GameChangeModule.getValue("UHC").set("")}
        if(!MegaWall.get() == "") {mc.thePlayer.sendChatMessage("/play " + MegaW); GameChangeModule.getValue("MegaWalls").set("")}
        if(!GameChangeModule.state) {GameChangeModule.state = true}
    }
}
/*
 * thx to CzechHek. Core.lib and this ScriptBase
 */