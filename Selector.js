///api_version=2
(script = registerScript({
    name: "Selector",
    version: "1.1",
    authors: ["CzechHek", "yorik100"]
})).import("Core.lib");

mp = '.mineplx.com'

list = [
    AutoDetect = value.createBoolean("AutoDetect", false),
    mode = value.createList("Mode", ["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"], "Bed"),
    customid = value.createInteger("CustomID", 0, 0, 197),
    fucker = value.createBoolean("Fucker", true),
    EnableFucker = value.createBoolean("EnableFucker", false),
    blockesp = value.createBoolean("BlockESP", true),
    EnableESP = value.createBoolean("EnableESP", true),
]

module = {
    values: list,
    onEnable: function () {
    if(AutoDetect.get() == true) {
        if(mc.getCurrentServerData().serverIP.match('.hypixel.net' || 'hypixel.cn'/* ? */)) {
            FuckerModule.getValue("Block").set("26");
            BlockESPModule.getValue("Block").set("26");
        }
        if(mc.getCurrentServerData().serverIP.match('.mineplex.com')) {
            FuckerModule.getValue("Block").set("92");
            BlockESPModule.getValue("Block").set("92");
        }
        if(mc.getCurrentServerData().serverIP.match('.cubecraft.net' || 'cubecraft.net')) {
            FuckerModule.getValue("Block").set("122");
            BlockESPModule.getValue("Block").set("122");
        }
        }
        if(AutoDetect.get() == false) {
        id = [26, 92, 122, 49, 116, 58][["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table"].indexOf(mode.get())] || customid.get();
        fucker.get() && FuckerModule.getValue("Block").set(id);
        blockesp.get() && BlockESPModule.getValue("Block").set(id);
        EnableFucker.get() && FuckerModule.setState(true);
        EnableESP.get() && BlockESPModule.setState(true);
        }
    },
    onUpdate: function () {
        SelectorModule.state = false;
    }
}
//Custom Coded by tk400, Added Cake Option. And Enablation
//Server Detector