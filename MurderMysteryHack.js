var scriptName = "MurdererDetector";
var scriptAuthor = "Soulplexis and tk400.";
var scriptVersion = 0.5;

script.import("tKore.js")
script.import("lib/arrayFunctions.js")

var Swords = Java.type('net.minecraft.item.ItemSword');
var Spade = Java.type('net.minecraft.item.ItemSpade');
var ItemMap = Java.type('net.minecraft.item.ItemMap');
var ItemBow = Java.type('net.minecraft.item.ItemBow');
var ItemPotion = Java.type('net.minecraft.item.ItemPotion');
//var ItemStack = Java.type('net.minecraft.item.ItemStack');
var ItemArmorStand = Java.type('net.minecraft.item.ItemArmorStand');
var ItemSnowball = Java.type('net.minecraft.item.ItemSnowball');
function namae() {
   var Murderername=saidPlayers=useditems=[]
   var Murders=0;
   var TellMurderer = value.createBoolean("TellMurderer", false);
   var sayrange = value.createFloat("MaxSpeakRange", 1.5, 0, 30);
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
   this.onUpdate = function() {
      function checkhelditem (b) {
         return (helditem instanceof b)
      }
      if(Murders < MurdersVal.get() || (!TellMurderer.get() || saidPlayers.length < MurdersVal.get())) {
		   for (var x=0;x<mc.theWorld.loadedEntityList.length;x=(x+1)|0) {
		   	var entities = mc.theWorld.loadedEntityList[x];
		   	if(entities != null && entities != mc.thePlayer && entities instanceof EntityPlayer && !AntiBot.isBot(entities) && !entities.isDead) {
               var getHeldItem=entities.getHeldItem()
               if(getHeldItem != null) {
                  var helditem=getHeldItem.getItem()
                  //30=WEB, 46=TNTBlock,95=StainedGlassBlock, 50=TORCH, 148=presyasu plate, 266=GoldIngut, 332=snowball, 339=Paper, 355=Bed, 397=Skull, 402=firecharge, 416=ArmorStand 
		   		   if(!([30,46,50,95,148,266,332,339,355,397,402,416].includes(Item.getIdFromItem(helditem)) || checkhelditem(ItemMap) || checkhelditem(ItemBow) || checkhelditem(ItemPotion)) || (checkhelditem(Swords) || checkhelditem(Spade))) {
                     if(checkhelditem(Spade) ? (helditem.getToolMaterial()=="WOOD" ? false : true) : true) {
                        var entname=entities.getName()
                        if(TellMurderer.get() && !saidPlayers.includes(entname) && mc.thePlayer.getDistanceToEntity(entities) <= sayrange.get()) {sendChat(entname +" is Murderer!");saidPlayers.push(entname)}
                        if(!Murderername.includes(entname) && Murders < MurdersVal.get()) {
                           chat.print(entname+ " has equiped an Item!")
                           chat.print("§2ItemDetail §r[§e"+helditem+ +"§r] §3Id§r:[§d"+Item.getIdFromItem(helditem)+"§r]"+"("+Item.getByNameOrId(Item.getIdFromItem(helditem))+")")
                           chat.print("§5Detected Murderer §r: §4" +entname)
                           Murderername.push(entname)
                           Murders++
                        }
                     }
                  }
                  //if(checkhelditem(ItemBow)) {}
               }
		   	}
		   }
      }
   }
   this.onWorld=function() {
      Murders=0;saidPlayers=Murderername=[];
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
      Murderername=[];Murders=0;saidPlayers=false;
   }
}
 
 
var namae = moduleManager.registerModule(new namae);

namae;

moduleManager.unregisterModule(namae);
