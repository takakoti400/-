var Keyboard = Java.type("org.lwjgl.input.Keyboard");
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var type=""


var File = Java.type("java.io.File");
var FileReader = Java.type("java.io.FileReader");
var BufferedReader = Java.type("java.io.BufferedReader");
var FileWriter = Java.type("java.io.FileWriter");
var BufferedWriter = Java.type("java.io.BufferedWriter");
var Timer = Java.type("java.util.Timer");
/* Detect LiquidBounce Build. */
if((LiquidBounce.CLIENT_NAME).contains("+")) {
	//if(LiquidBounce.CLIENT_VERSION.toString() =="reborn") {type="R"}else{type="Plus"}//these build are dosent have any diffence now.
	type="Plus"
} else if(LiquidBounce.CLIENT_NAME == "LiquidBounce") {
	type="Original"
} else {
	type="UNDETECTED"
}
/* LiquidBounceModules */
var TimerModule = moduleManager.getModule("Timer");
var KickModule = moduleManager.getModule("Kick");
var ConSpamModule = moduleManager.getModule("ConsoleSpammer");
var CriticalsModule = moduleManager.getModule("Criticals");
var NoFallModule = moduleManager.getModule("NoFall");
var SpammerModule = moduleManager.getModule("Spammer");
var PingSpoofModule = moduleManager.getModule("PingSpoof");
var FuckerModule = moduleManager.getModule("Fucker");
var BlockESPModule = moduleManager.getModule("BlockESP");
var AutoLeaveModule = moduleManager.getModule("AutoLeave");
var AimBotModule = moduleManager.getModule("AimBot");
var KAModule = moduleManager.getModule("KillAura");
var BugUpModule = moduleManager.getModule("BugUp");
var SpeedModule = moduleManager.getModule("Speed");
var HighJumpModule = moduleManager.getModule("HighJump");
var LJModule = moduleManager.getModule("LongJump");
var RSModule = moduleManager.getModule("ReverseStep");
var FlyModule = moduleManager.getModule("Fly");
var SprintModule = moduleManager.getModule("Sprint");
var VelocityModule = moduleManager.getModule("Velocity");
var ScaffoldModule = moduleManager.getModule("Scaffold");
var InvAAModule = moduleManager.getModule("AutoArmor");
var BlinkModule = moduleManager.getModule("Blink");
var ClickGUIModule = moduleManager.getModule("ClickGUI");
var FreeCamModule = moduleManager.getModule("FreeCam");
var StoESPModule = moduleManager.getModule("StorageESP");
var ESPModule = moduleManager.getModule("ESP");


if(type=="Original") {
  var InvModule = moduleManager.getModule("InventoryManager"); //this module has renamed from InventoryCleaner. fuck sake.
  var TowerModule = moduleManager.getModule("Tower");
} else if(type=="Plus") {
  var InvModule = moduleManager.getModule("InvManager");
  var TowerModule = ScaffoldModule.getValue("EnableTower").get();
}

/* LBUtils */
//var hogehoge = Java.type("").class;
var RotationUtils = Java.type("net.ccbluex.liquidbounce.utils.RotationUtils");
var EntityUtils = Java.type('net.ccbluex.liquidbounce.utils.EntityUtils');
var ServerUtils = Java.type("net.ccbluex.liquidbounce.utils.ServerUtils");
var RenderUtils = Java.type("net.ccbluex.liquidbounce.utils.render.RenderUtils");
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var BlockUtils = Java.type("net.ccbluex.liquidbounce.utils.block.BlockUtils");

//Liq classes
var KillAura = Java.type("net.ccbluex.liquidbounce.features.module.modules.combat.KillAura");
var AntiBot = Java.type("net.ccbluex.liquidbounce.features.module.modules.misc.AntiBot"); //? Plus says world, but it not found???
//var Teams = Java.type("net.ccbluex.liquidbounce.features.module.modules.misc.Teams");
//var prefix = LiquidBounce.commandManager.getPrefix();


/* Objection! */
var Potion = Java.type('net.minecraft.potion.Potion');
var GuiInventory = Java.type("net.minecraft.client.gui.inventory.GuiInventory");
var GuiChest = Java.type("net.minecraft.client.gui.inventory.GuiChest");
var GameMode = Java.type('net.minecraft.world.WorldSettings.GameType')
var ItemCameraTransforms = Java.type('net.minecraft.client.renderer.block.model.ItemCameraTransforms')
var EntityMobs = Java.type("net.minecraft.entity.EntityCreature");
var EntityLiving = Java.type('net.minecraft.entity.EntityLivingBase');
var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var playerController = Java.type('net.minecraft.client.multiplayer.PlayerControllerMP');
var ItemArmor = Java.type('net.minecraft.item.ItemArmor');
var Item = Java.type('net.minecraft.item.Item');

/* MCUtil */
var Rotations = Java.type("net.minecraft.util.Rotations")
var EnumFacing = Java.type('net.minecraft.util.EnumFacing');
var BlockPos = Java.type('net.minecraft.util.BlockPos');


/* Packets */
//var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
var C0CPacketInput = Java.type('net.minecraft.network.play.client.C0CPacketInput');
var C00PacketKeepAlive = Java.type('net.minecraft.network.play.client.C00PacketKeepAlive');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C0FPacketConfirmTransaction = Java.type('net.minecraft.network.play.client.C0FPacketConfirmTransaction');
var C0BPacketEntityAction = Java.type('net.minecraft.network.play.client.C0BPacketEntityAction');
var C0APacketAnimation = Java.type('net.minecraft.network.play.client.C0APacketAnimation');
var C08PacketPlayerBlockPlacement = Java.type('net.minecraft.network.play.client.C08PacketPlayerBlockPlacement');
var S27PacketExplosion = Java.type('net.minecraft.network.play.server.S27PacketExplosion');
var S2DPacketOpenWindow = Java.type('net.minecraft.network.play.server.S2DPacketOpenWindow');
var S2EPacketCloseWindow = Java.type('net.minecraft.network.play.server.S2EPacketCloseWindow');
var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity')
var C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");

var chatpacket = Java.type("net.minecraft.network.play.server.S02PacketChat");
var clientchat = Java.type("net.minecraft.network.play.client.C01PacketChatMessage");


/* Blocks */
var BlockColour = Java.type('net.minecraft.block.BlockColored')
var block = Java.type('net.minecraft.block.Block');
var Blocks = Java.type('net.minecraft.init.Blocks');
var SlabBlock = Java.type('net.minecraft.block.BlockSlab')
var SlimeBlock = Java.type('net.minecraft.block.BlockSlime')
var AirBlock = Java.type('net.minecraft.block.BlockAir')
var Workbench = Java.type('net.minecraft.block.BlockWorkbench')
var Chest = Java.type('net.minecraft.block.BlockChest')
var Furnace = Java.type('net.minecraft.block.BlockFurnace')
var StainedGlass = Java.type('net.minecraft.block.BlockStainedGlass');

/* Custom Util */
function shower(obj,name) {
  for(var x=0;x<obj.length;x=(x+1)|0) {
    return obj[x].name
  }
}
function log(message, isError) {
    if (isError) {
        chat.print(chatPrefix + " §c" + message);
    } else {
        chat.print(chatPrefix + " §f" + message);
    }
}

function readFile(filePath) {
    try {
        var file = new File(filePath);
        var reader = new BufferedReader(new FileReader(file));
        var content = [];
        var line;

        while ((line = reader.readLine()) !== null) {
            content.push(line);
        }

        return content;
    } catch (err) {
        log("Unable to open file!", true);

        throw err;
    }
}

function writeFile(path, string) {
    try {
        writer = new BufferedWriter(new FileWriter(path));
        writer.write(string);

        writer.close();
    } catch (err) {}
}


function addValue(values, v) {
  for (var x=0;x<values.length;x=(x+1)|0) {
     v.add(values[x])
  }
}

function sendChat(msg) {
   mc.thePlayer.sendChatMessage(msg);
}

function RandomArray(array, num) {
   var a = array;
   var t = [];
   var r = [];
   var l = a.length;
   var n = num < l ? num : l;
   while (n-- > 0) {
     var i = Math.random() * l | 0;
     r[n] = t[i] || a[i];
     --l;
     t[i] = t[l] || a[l];
   }
   return r;
}

function DelayCal(MaxDelay, MinDelay) {
   return Math.floor(Math.random() * ((MaxDelay - MinDelay) + 1) + MinDelay);
}

function RandomPool() {
   if (Math.round(Math.random()) > 1) {
      return true
   } else {
      return false
   }
}

function rt(t) { //Shorten it longer randomizer code.
   var text = t[parseInt(Math.random() * t.length)]
   return text;
}

function targetcheck(tar) {
   if (tar.isDead) {
      return true
   }
}
function getPlayerList() {
   var PlayerInfoMap = mc.getNetHandler().getPlayerInfoMap().toArray()
   var Array = []
   for (var i in PlayerInfoMap) {
     Array.push(PlayerInfoMap[i].getGameProfile().getName())
   }
   return Array
}


function GroundChecker() { //i think you can use like if(GC()) {chat.print(you are on the ground.)}
   if (mc.thePlayer.onGround && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
      return true;
   } else {
      return false;
   }
 }
 


function AimBotFunc(tX, tZ) {
  strafeYaw = Math.atan2(tZ - mc.thePlayer.posZ, tX- mc.thePlayer.posX);
  mc.thePlayer.rotationYaw = strafeYaw - (0.5 * Math.PI);
  //mc.thePlayer.rotationYaw = (Math.atan2(mc.thePlayer.posX - tX,mc.thePlayer.posZ- tZ) / Math.PI * 180 +180) * -1
}

function _2DRoundCheck(pX,pZ,Range) {
  if(Math.sqrt(Math.pow(mc.thePlayer.posX - pX, 2) + Math.pow(mc.thePlayer.posZ - pZ, 2)) <= Range) {
    return true
  }
}

function _3DRoundCheck(pX,pY,pZ,Range) {
  if(Math.sqrt(Math.pow(mc.thePlayer.posX - pX, 2) +Math.pow(mc.thePlayer.posY - pY,2) + Math.pow(mc.thePlayer.posZ - pZ, 2)) <= Range) {
    return true
  }
}

function playSound(name, a, b) {
  mc.theWorld.playSound(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, name, a, b, false);
}

function Config(Mode, server) {
  if (Mode == "Save") {
    commandManager.executeCommand(".localautosettings save " + server + " all")
    chat.print("§4Debug[SaveConfig]§f: Saved for §l" + server)
  } else if (Mode == "Load") {
    commandManager.executeCommand(".localautosettings load " + server)
    chat.print("§4Debug[LoadConfig]§f: Loaded for §l" + server)
  }
}

function randomString(length, adoptchara) {
  var text = "";
  if (adoptchara == null) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".concat(adoptchara);
  }

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
 

function vClip(offset) {
  mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ);
}

function hclip(offset) {
  sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  mc.thePlayer.setPosition(mc.thePlayer.posX -= sin, mc.thePlayer.posY, mc.thePlayer.posZ += cos);
}

function HMotion(offset) {
  sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  mc.thePlayer.motionX -= sin;
  mc.thePlayer.motionZ += cos;
}

function VMotion(offset) {
  mc.thePlayer.motionY += offset;
}
