var scriptName = "MurdererDetector";
var scriptAuthor = "Soulplexis and tk400.";
var scriptVersion = 0.5;

/* Lib Importer */
script.import("lib/arrayFunctions.js")

script.import("tKore.js")

var Swords = Java.type('net.minecraft.item.ItemSword');
var Spade = Java.type('net.minecraft.item.ItemSpade');
var ItemMap = Java.type('net.minecraft.item.ItemMap');
var ItemBow = Java.type('net.minecraft.item.ItemBow');
var ItemPotion = Java.type('net.minecraft.item.ItemPotion');
//var ItemStack = Java.type('net.minecraft.item.ItemStack');
var ItemArmorStand = Java.type('net.minecraft.item.ItemArmorStand');
var ItemSnowball = Java.type('net.minecraft.item.ItemSnowball');
function MurdererHack() {
   var Murderername=SaidPlayers=[]
   var Murders=0;
   var TellMurderer = value.createBoolean("TellMurderer", false);
   var sayrange = value.createFloat("MaxSpeakRange", 6, 0, 30);
   var MurdersVal = value.createInteger("MaxMurderers", 1,1,2);
 
   this.addValues = function(v) {
      v.add(TellMurderer)
      v.add(sayrange)
      v.add(MurdersVal)
   }
   this.getName = function() {
      return "MurderMysteryHack";
   }
   this.getDescription = function() {
      return "Automaticaly find Murderer on Hypixel.";//but this is laggy...i want reserch memory
   }
   this.getCategory = function() {
      return "Player";
   }
   this.getTag = function() {
      return Murderername.toString();
   }
   this.onUpdate = function() {//fuck onmotion
      if((Murders < MurdersVal.get()) || (TellMurderer.get() && SaidPlayers.length < MurdersVal.get())) {
		   for (var x in mc.theWorld.loadedEntityList) {
		   	var entities = mc.theWorld.loadedEntityList[x];
            if(entities != null && entities != mc.thePlayer && entities instanceof EntityPlayer && !AntiBot.isBot(entities)) {
               var gethelditem=entities.getHeldItem()
               if(gethelditem != null) {
                  var helditem=gethelditem.getItem()
                  function checkhelditem (b) {
                     return (helditem instanceof b)
                  }
                  if(!([30,46,50,95,148,262,266,332,339,355,397,402,416].includes(Item.getIdFromItem(helditem)) || checkhelditem(ItemMap) || checkhelditem(ItemBow) || checkhelditem(ItemPotion) || (checkhelditem(Spade) ? (helditem.getToolMaterial()=="WOOD" ? true : false) : false)) || checkhelditem(Swords)) {
                     var entname=entities.getName()
                     if(!Murderername.includes(entname)) {
                        chat.print(entname+ " has equiped an Item!")
                        chat.print("§2ItemDetail §r[§e"+helditem+ +"§r] §3Id§r :[§d"+Item.getIdFromItem(helditem)+"§r] "+"("+Item.getByNameOrId(Item.getIdFromItem(helditem))+")")
                        chat.print("§5Detected Murderer §r: §4" +entname)
                        Murderername.push(entname)
                        Murders++
                     }
                     if(TellMurderer.get() && !SaidPlayers.includes(entname) && mc.thePlayer.getDistanceToEntity(entities) <= sayrange.get()) {
                        sendChat(entname +" is Murderer!");
                        SaidPlayers.push(entname);
                     }
                  }
               }
            }
         }
      }
   }
   this.onWorld=function() {
      Murders=0;SaidPlayers=[];Murderername=[];
   }
	this.onRender2D = function(){
		if(Murderername.length>=1) {
         mc.ingameGUI.drawString(mc.fontRendererObj, "§lMurderer§r:"+Murderername.toString(), mc.displayWidth / 2, mc.displayHeight / 2.5, -1)
		} else {
			mc.ingameGUI.drawString(mc.fontRendererObj, "§lMurderer: §r§4" + "No murderer found", mc.displayWidth / 2, (mc.displayHeight / 2.5), -1);
		}
	}
   this.onEnable = function() {}
   this.onDisable = function() {
      Murderername=SaidPlayers=[];Murders=0;
   }
}

var MurdererHack = moduleManager.registerModule(new MurdererHack);

function onEnable() {
   MurdererHack;
}

function onDisable() {
   moduleManager.unregisterModule(MurdererHack);
}