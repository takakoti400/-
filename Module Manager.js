/**
 * 
 * Script of tk400's
 * this script contains ModuleManager, TowerScaffoldzzzz, HypixelGameChanger.
 * 
 * ※ModuleManger is Help, Improve Bypass, And Your Cheating Life.
 * 
 * ※TSMM(TowwrScaffoldzzzz) is Brunch Of CzechHek's TowerScaffodldz,
 * that is Not Bad, But rly fucking simply code, so,,i mean that is uncode!!!! (This is also the reason for the development of the script xd)
 * 
 * 
 * Build for Latest / Tested For 2a87660
 * https://dl.ccbluex.net/skip/mLANvV0lDm
 * 
 */
var scriptName = "ModuleManager";
var scriptVersion = 1.42;
var scriptAuthor = "shirouto Co-Da- tk400.";

//Modules
var PingSpoofModule = moduleManager.getModule("PingSpoof");
var FuckerModule = moduleManager.getModule("Fucker");
var BlockESPModule = moduleManager.getModule("BlockESP");
var AutoLeaveModule = moduleManager.getModule("AutoLeave");
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
var TowerModule = moduleManager.getModule("Tower");
var InvModule = moduleManager.getModule("InventoryCleaner");
var InvAAModule = moduleManager.getModule("AutoArmor");
var BlinkModule = moduleManager.getModule("Blink");
var FreeCamModule = moduleManager.getModule("FreeCam");

//Scripts Shortcut, Addons, Helper...
var MMDchat = "§5[§dModuleManager§5] "
var TSMMchat = "§5[§dTSMM§5] "
var saveconfigname = 'default';

var MoveDir = 'A';

var LAB=01

//Packets
/*var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');*/

//Player | Mob States
var Potion = Java.type('net.minecraft.potion.Potion');

//Blocks
BlockPos = Java.type('net.minecraft.util.BlockPos')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')
AirBlock = Java.type('net.minecraft.block.BlockAir')

AntiSlab = Java.type('net.minecraft.block.BlockSlab')


function ModuleManager() {

  var Text1 = value.createText(">MMSettings", "");
  var SLT = value.createText("CustomTag", "SuperMechaMechaSugooooiModule!");
  var CC = value.createText("CustomColor", "a"); //https://minecraft.gamepedia.com/Formatting_codes
  var DebugChat = value.createBoolean("DebugChat", false);
  //var test = value.createBoolean("test", true); //Using on Develop, tset.
  var SpeedJump = value.createBoolean("Speed", true);
  var WASDSpeed = value.createBoolean("AntiHorizontalSpeedStrafing", false);
  var SpeedsDisabler = value.createBoolean("SpeedsDisabler", true);
  var VelLJManage = value.createBoolean("VelLongJump", true);
  var AutoKAJump = value.createBoolean("AutoKAJump", false);
  var ReverseStepFix = value.createBoolean("ReverseStepFix", true);
  var Criticals = value.createList("Criticals", ["Off", "Jump", "SpeedModule", "TP", "Motion"], "Off");
  var DelayTick = value.createInteger("DelayTicks", 1, 0, 30);
  var Timer = value.createFloat("Timer", 0.1, 0, 10);
  var TP = value.createFloat("TP", 0.05, 0, 1);
  var Motion = value.createFloat("Motion", 0.1, 0, 1);
  var AutoFClear = value.createBoolean("AutoFClear", true);
  var Text2 = value.createText(">InvModeManager", "");
  var Inv = value.createBoolean("Inv", true);
  var InvList = value.createList("Mode", ["None", "Open", "Simulate"], "None");
  var Text3 = value.createText(">BlockRenderManager", "");
  var RenderSetting = value.createBoolean("RenderSetting", true);
  var RSCounter = value.createBoolean("Counter", false);
  var RSMark = value.createBoolean("Mark", false);
  var Text4 = value.createText(">BlockSelection", "");
  var Selection = value.createBoolean("Selection", false);
  var DSBlock = value.createBoolean("DetectServer'sBlock", false);
  var mode = value.createList("SetBlock", ["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"], "Bed");
  var customid = value.createInteger("CustomID", 0, 0, 197);
  var fucker = value.createBoolean("Fucker", true);
  var EnableFucker = value.createBoolean("EnableFucker", false);
  var blockesp = value.createBoolean("BlockESP", true);
  var EnableESP = value.createBoolean("EnableESP", true);
  var AutoLeave = value.createBoolean("AlwaysAutoLeave", false); //Always Enable LB's AutoLeave Module.
  var Text5 = value.createText(">ConfigManager", "");
  var LoadConfig = value.createBoolean("LoadConfig", false);
  var SaveConfig = value.createBoolean("SaveConfig", false);
  var SavingName = value.createText("CurrentLoad/SaveFileName", "N/A");
  var DSConfig = value.createBoolean("ServerDetect", false);

    this.addValues = function(values) {
      values.add(Text1);
      values.add(SLT);
      values.add(CC);
      //values.add(test);
      values.add(DebugChat);
      values.add(SpeedsDisabler);
      values.add(VelLJManage);
      values.add(AutoKAJump);
      values.add(ReverseStepFix);
      values.add(SpeedJump);
      values.add(WASDSpeed)
      values.add(Criticals);
      values.add(DelayTick);
      values.add(Timer);
      values.add(TP);
      values.add(Motion);
      values.add(AutoFClear);
      values.add(Text2);
      values.add(Inv);
      values.add(InvList);
      values.add(Text3);
      values.add(RenderSetting);
      values.add(RSCounter);
      values.add(Text4);
      values.add(RSMark);
      values.add(Selection);
      values.add(DSBlock);
      values.add(mode);
      values.add(customid);
      values.add(fucker);
      values.add(EnableFucker);
      values.add(blockesp);
      values.add(EnableESP);
      values.add(AutoLeave);
      values.add(Text5);
      values.add(LoadConfig);
      values.add(SaveConfig)
      values.add(SavingName);
      values.add(DSConfig);
    };

	this.getName = function () {
		return "ModuleManager";
	};
	this.getDescription = function () {
		return "Mangement Disable, Setting, Modules. A Simple Script";
	};
	this.getCategory = function () {
		return "Player";
  };
  this.getTag = function() {
    return SLT.get();
  };
	this.onUpdate = function () {
    //Manage SpeedJump /Fix Jump Boosting
      if(SpeedJump.get() && SpeedModule.getState() && mc.thePlayer.onGround) {
        if(mc.gameSettings.keyBindJump.pressed) {
        if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
          mc.gameSettings.keyBindJump.pressed = false;
          rc = " [" + rn + "]"
          rn = Math.floor(Math.random() * 11);
           DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Jump." + rc)};
        }};
    //WASDSpeed 
    if(WASDSpeed.get()) { //==> this code is working, but i think Inefficient. good for Detecting Faster Strafing Cheat <==//
      if(SpeedModule.getState()) {
        switch (MoveDir) {
          case 'F':
            mc.gameSettings.keyBindBack.pressed = false;
            break;
          case 'R':
            mc.gameSettings.keyBindLeft.pressed = false;
            break;
          case 'L':
            mc.gameSettings.keyBindRight.pressed = false;
            break;
          case 'B':
            mc.gameSettings.keyBindForward.pressed = false;
            break;
        }
        if(!mc.thePlayer.onGround) {
          if(mc.gameSettings.keyBindForward.pressed) {MoveDir = 'F'}
          if(mc.gameSettings.keyBindRight.pressed) {MoveDir = 'R'}
          if(mc.gameSettings.keyBindLeft.pressed) {MoveDir = 'L'}
          if(mc.gameSettings.keyBindBack.pressed) {MoveDir = 'B'}
        }
        if(mc.thePlayer.onGround) {MoveDir = 'A'}
      }
    }
    //SpeedDisabler
    if(SpeedsDisabler.get() && SpeedModule.getState() || LJModule.getState()) {if(FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState()) {SpeedModule.setState(false) || LJModule.setState(false); DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Speed or LongJump.")}};
    //VelLJ /Hypixel Fix?
    if(VelLJManage.get()) {
      if(LJModule.getState() && VelocityModule.getState()) {VelocityModule.setState(false)}
      if(!LJModule.getState() && !VelocityModule.getState()) {VelocityModule.setState(true)}};
    //ReverseStepFix
    if(ReverseStepFix.get()) {
     if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
      if(RSModule.getState() && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}
     /*if(!RSModule.getState() && !FlyModule.getState() && !mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(true)}*/
    };
    //AutoKAJump
      if(AutoKAJump.get() && KAModule.getState() && !mc.gameSettings.keyBindJump.pressed) {mc.gameSettings.keyBindJump.pressed = true};

  /* Manage Modules Setting */

      //RenderSetter /fix Replace by other user's Setting
    if(RenderSetting.get()) {
      //Counter
      if(RSCounter.get()) {if(!ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(true)}; if(!TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(true)}}
      if(!RSCounter.get()) {if(ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(false)}; if(TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(false)}}
      //Mark
      if(RSMark.get()) {if(!ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(true)}}
      if(!RSMark.get()) {if(ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(false)}}
    };
    //Inv /This is ???
    if(Inv.get()) {
      if(InvList.get() == "None") {
        if(InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(false)}; if(InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(false)}
        if(InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(false)}; if(InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(false)}}
      if(InvList.get() == "Open") {
        if(!InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(true)}; if(InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(false)}
        if(!InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(true)}; if(InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(false)}}
      if(InvList.get() == "Simulate") {
        if(InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set()}; if(!InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(true)}
        if(InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(false)}; if(!InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(true)}}
    };
    //Selection
    if(Selection.get()) {
      switch (mode.get()) { //Test
        case "Bed": id = 26; break;
        case "Cake": id = 92; break;
        case "Dragon_Egg": id = 122; break;
        case "Obsidian": id = 49; break;
        case "Enchanting_Table": id = 116; break;
        case "Crafting_Table": id = 58; break;
        case "Custom": id = customid.get(); break;
      }
    if(DSBlock.get()) {
      if(mc.getCurrentServerData().serverIP.match(".hypixel.net" || "hypixel.cn")) {
          FuckerModule.getValue("Block").set(26);
          BlockESPModule.getValue("Block").set(26);
      }
      if(mc.getCurrentServerData().serverIP.match(".mineplex.com")) {
          FuckerModule.getValue("Block").set(92);
          BlockESPModule.getValue("Block").set(92);
      }
      if(mc.getCurrentServerData().serverIP.match(".cubecraft.net" || "cubecraft.net")) {
          FuckerModule.getValue("Block").set(122);
          BlockESPModule.getValue("Block").set(122);
      }
      if(mc.getCurrentServerData().serverIP.match(".ccbluex.net")) {
        chat.print("checked.")
          FuckerModule.getValue("Block").set(1);
          BlockESPModule.getValue("Block").set(1);
      }
    }
    if(!DSBlock.get()) {
      FuckerModule.getValue("Block").get() != id && FuckerModule.getValue("Block").set(id);
      BlockESPModule.getValue("Block").set(id);
    }
      if(EnableFucker.get()) {!FuckerModule.getState() && FuckerModule.setState(true)}
      if(EnableESP.get()) {!BlockESPModule.getState() && BlockESPModule.setState(true)}
      Selection.set(false);
    }
    //Dev// //(Auto)Config Loader
    if(LoadConfig.get()) {
      LoadConfig.set(false);
      if(DSConfig.get()) { //I cant Code using switch method..? iF Is bESt foR nEwbIe cODerS
        if(mc.getCurrentServerData().serverIP.match(".ccbluex.net")) {commandManager.executeCommand(".localautosettings load testccbluex"); saveconfigname = 'testccbluex'};
        if(mc.getCurrentServerData().serverIP.match(".hypixel.net")) {commandManager.executeCommand(".localautosettings load hypixel"); saveconfigname = 'hypixel'};
        if(mc.getCurrentServerData().serverIP.match(".cubecraft.net")) {commandManager.executeCommand(".localautosettings load Cubecraft"); saveconfigname = 'cubecraft'};
        if(mc.getCurrentServerData().serverIP.match(".mineplex.com")) {commandManager.executeCommand(".localautosettings load mineplex"); saveconfigname = 'mineplex'};
      }
      if(!DSConfig.get()) {
      }
    }
    if(SaveConfig.get()) {SaveConfig.set(false); commandManager.executeCommand(".localautosettings save " + saveconfigname + "all"); chat.print("§4Debug[SaveConfig]§f: Saved for §l" + saveconfigname)}
  }

  this.onAttack = function () {
    mc.gameSettings.keyBindUseItem.pressed = mc.gameSettings.keyBindAttack.pressed = false;
    if(mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0) {
    switch (Criticals.get()) {
      case "Jump":
        SpeedModule.setState(false);
        mc.thePlayer.jump(); mc.gameSettings.keyBindJump.pressed = false;
      break;
      case "SpeedModule":
        if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
          if(!mc.gameSettings.keyBindBack.pressed && KAModule.getState() && !SpeedModule.getState() && !LJModule.getState() && !ScaffoldModule.getState() && !TowerModule.getState()) {SpeedModule.setState(true); if(DebugChat.get()) {chat.print(MMDchat + "§" + CC.get() + "Enabled Speed!")}}};
      break;
      case "TP":
        mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ);
      break;
      case "Motion":
        mc.thePlayer.motionY = Motion.get();
      break;
    }};
  };

  this.onWorld = function () {
    //This is not Module, But i think this is useful (Ex:Mineplex) :)
    if(AutoFClear.get()) {commandManager.executeCommand(".friends clear")}
    //Check AutoLeave was Disabled.
    if(AutoLeave.get()) {if(!AutoLeaveModule.getState()) {AutoLeaveModule.setState(true)}}
    //Use for ConfigSaver
      if(mc.getCurrentServerData().serverIP.match(".ccbluex.net")) {saveconfigname = 'testccbluex'};
      if(mc.getCurrentServerData().serverIP.match(".hypixel.net" || "hypixel.net")) {saveconfigname = 'hypixel'};
      if(mc.getCurrentServerData().serverIP.match(".cubecraft.net" || "cubeaft.net")) {saveconfigname = 'cubecraft'};
      if(mc.getCurrentServerData().serverIP.match(".mineplex.com")) {saveconfigname = 'mineplex'};
      SavingName.set(saveconfigname);
  }
}

/* TSMM v:1.65, by tk400
 * 
 * [1.65]
 * ReCoded(?) JumpScaffolding but it sh1t xd.
 * Added EnableBlink Option, it may helps Bypassing.
 * 
 * [1.66]
 * Forgot add Sneak Option, Remove BackWard option.
*/


/* TIP: if ScaffoldJump is set Off, you can Sprint ScaffoldingJump. like shitgma(Jello? XD). */

 function TSMM() {
  
  var TSCC = value.createText("TSMMCustomColor", "a");
  var TSMMDebugChat = value.createBoolean("TSMMDebugChat", false);
  var BR = value.createBoolean("BodyReverser", false);
  var TSMMMode = value.createList("ScaffoldJump", ["Off", "Sprint", "XZR", "VClip"], "Off");
  var PotionTower = value.createBoolean("PotionTower", false);
  var ForceSprint = value.createBoolean("ForceSprint", true);
  var JumpScaffolding = value.createBoolean("JumpScaffolding", true); //Beta
  var AntiHalf = value.createBoolean("AntiHalf", false);
  var WithBlinkAPI = value.createBoolean("WithLB'sBlink", false);
  var MLGScaffold = value.createBoolean("MLGSCaffold", false);
  var MLGSprint = value.createBoolean("AfterSprint", true);
  var NoXZMotion = value.createList("NoXZMotion", ["Off", "MotionZero", "NoKeyBoard"], "Off");

  this.addValues = function(values) {
    values.add(TSCC);
    values.add(TSMMDebugChat);
    values.add(BR);
    values.add(TSMMMode);
    values.add(PotionTower);
    values.add(ForceSprint);
    values.add(JumpScaffolding);
    values.add(AntiHalf);
    values.add(WithBlinkAPI);
    values.add(MLGScaffold);
    values.add(MLGSprint);
    values.add(NoXZMotion);
  }
	this.getName = function () {
		return "TSMM";
	}
	this.getDescription = function () {
		return "ModuleManager's Module, Manage Tower & Scaffold. A SimpleScript";
	}
	this.getCategory = function () {
		return "Player";
	}
  this.getTag = function() {
    return TSMMMode.get();
  }
  this.onEnable = function() {
    BR.get() && mc.thePlayer.rotationYaw + 180;
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
    if(JumpScaffolding.get()) {TSMMMode.set("Off"); if(!ScaffoldModule.getValue("SameY").get()) {ScaffoldModule.getValue("SameY").set(true)}}
    // //
    WithBlinkAPI.get() && BlinkModule.setState(true);
    TSMMDebugChat.get() && chat.print(TSMMchat + "§a+Enabled TSMM and Scaffold and Tower");
  };
  this.onUpdate = function () {
    if(BR.get()) {//Reverse Forward to BackWard
      if(mc.gameSettings.keyBindForward.pressed) {
         mc.gameSettings.keyBindBack.pressed = true;
         mc.gameSettings.keyBindForward.pressed = false;
          }
        }
    if(!ScaffoldModule.getState()) {
      if(!mc.gameSettings.keyBindJump.pressed) {ScaffoldModule.setState(true); TowerModule.setState(false); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Scaffold, Disabled Tower")}};
      if(ScaffoldModule.getState() && !TowerModule.getState()) {
        if(mc.gameSettings.keyBindJump.pressed && mc.thePlayer.onGround) {
          switch (TSMMMode.get()) {
            case "Sprint":
              ScaffoldModule.getValue("Sprint").set(false);
              break;
            case "XZR":
              mc.thePlayer.motionX = 0, mc.thePlayer.motionZ = 0;
              break;
            case "VClip":
              mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1, mc.thePlayer.posZ);
              break;
          }
        }
      if(!mc.gameSettings.keyBindJump.pressed) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(true)}
      }
    }
  //if press mc.gameSettings.keyBindJump.pressed = enable Tower, and Managing
    if(PotionTower.get()) {
    if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.thePlayer.isPotionActive(Potion.jump)) {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")}};
    if(!PotionTower.get()) {
    if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")}};
    if(TowerModule.getState()) {
      switch (NoXZMotion.get()) {
        case "MotionZero":
          mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0;
          break;
        case "NoKeyBoard":
          mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
          break;
      }
    };
  //ForceSprint /Fix Can't sprinting Bug... or my setting?
    if(ForceSprint.get() && ScaffoldModule.getState()) {mc.thePlayer.setSprinting(true)}
  //AntiSlab
    if(AntiHalf.get()) {
    if(mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof AntiSlab) {mc.thePlayer.jump()}};
  //Jump Scaffolding
    if(JumpScaffolding.get()) {
      if(ScaffoldModule.getState() && mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed) {if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {mc.gameSettings.keyBindJump.pressed = false; mc.thePlayer.jump()}}
    }
  //MLGScaffold
    if(MLGScaffold.get()) {mc.gameSettings.keyBindSneak.pressed = true; mc.gameSettings.keyBindJump.pressed = false; ScaffoldModule.getValue("Sprint").set(false); SprintModule.setState(false); if(mc.thePlayer.onGround) {mc.thePlayer.jump()}; if(SprintModule.getState()) {SprintModule.setState(false)}}
  };

  this.onDisable = function() {
    BR.get() && mc.thePlayer.rotationYaw + 180; /*Fix Head Rotation. only this code...*/ 
    ScaffoldModule.setState(false); TowerModule.setState(false);
    MLGSprint.get() && SprintModule.setState(true);
    !MLGSprint.get() && SprintModule.setState(false);
    WithBlinkAPI.get() && BlinkModule.setState(false);
  }
  /*this.onRender2D = function() {
    if(TSMMisEnabled == true) {mc.ingameGUI.drawCenteredString(mc.fontRendererObj, TSMMchat + "§c-Disabled TSMM and Scaffold and Tower", mc.displayWidth / 4, (mc.displayHeight / 2.5) + 8, -1)}
  }*/
}

/* v: 0.01, Auther: tk400, Desc: Allow Changing Hypixel Games*/

function HypixelGameChange() {
	
  var Hub = value.createBoolean("Hub", false);
  var favorite = value.createList("favorite", ["BedWars Solo","BedWars Team","SkyWars Solo Insane", ""], "");
  var BedWars = value.createList("BedWars", ["solo","Team","3v3","4v4", ""], "");
  var SkyWars = value.createList("SkyWars", ["Solo Normal","Solo Insane","Team Normal","Team Insane", ""], "");
  var murder = value.createList("Murder Mystery", ["Classic", "Double Up", "Assassins", "Infection", ""], "");
  var UHC = value.createList("UHC", ["solo", "teams", "event", "Speed Solo", "Speed Team", ""], "");
  var MegaWall = value.createList("MegaWalls", ["Standard", "Face Off", ""], "");
  var Custom = value.createBoolean("Custom", false);
  var CTex = value.createText("CustomCommand", "arcade_mini_walls");
 //Other Play Commands here https://hypixel.net/threads/guide-play-commands-useful-tools-mods-more-updated-11-17-19.1025608/
    this.addValues = function(values) {
      values.add(Hub);
      values.add(favorite);
      values.add(BedWars);
      values.add(SkyWars);
      values.add(murder);
      values.add(UHC);
      values.add(MegaWall);
      values.add(Custom);
      values.add(CTex);
    }

	this.getName = function () {
		return "HypixelGameChange";
	}
	this.getDescription = function () {
		return "Moved from Hypixel.js";
	}
	this.getCategory = function () {
		return "Player";
	}
	this.onUpdate = function () {
    fv = ["bedwars_eight_one", "bedwars_eight_two", "Solo_Insane"][["BedWars Solo","BedWars Team","SkyWars Solo Insane"].indexOf(favorite.get())];
    bw = ["bedwars_eight_one", "bedwars_eight_two", "bedwars_four_three", "bedwars_four_four"][["Solo","Team","3v3","4v4"].indexOf(BedWars.get())];
    sw = ["Solo_Normal", "Solo_Insane", "Team_Normal", "Team_Insane"][["Solo Normal","Solo Insane","Team Normal","Team Insane"].indexOf(SkyWars.get())];
    mm = ["murder_classic", "murder_double_up", "murder_assassins", "murder_infection"][["Classic", "Double Up", "Assassins", "Infection"].indexOf(murder.get())];
    uhccmd = ["uhc_solo", "uhc_teams", "uhc_events", "speed_solo_normal", "speed_team_normal"][["solo", "teams", "event", "Speed Solo", "Speed Team"].indexOf(UHC.get())];
    MegaW = ["mw_standard", "mw_face_off"][["Standard", "Face Off"].indexOf(MegaWall.get())];
    if(Hub.get()) {mc.thePlayer.sendChatMessage("/hub"); Hub.set(false)}
    if(!favorite.get() == "") {mc.thePlayer.sendChatMessage("/play " + fv); favorite.getValue("Favorite").set("")}
    if(!BedWars.get() == "") {mc.thePlayer.sendChatMessage("/play " + bw); BedWars.getValue("BedWars").set("")}
    if(!SkyWars.get() == "") {mc.thePlayer.sendChatMessage("/play " + sw); SkyWars.getValue("SkyWars").set("")}
    if(!murder.get() == "") {mc.thePlayer.sendChatMessage("/play " + mm); murder.getValue("Murder Mystery").set("")}
    if(!UHC.get() == "") {mc.thePlayer.sendChatMessage("/play " + uhccmd); UHC.getValue("UHC").set("")}
    if(!MegaWall.get() == "") {mc.thePlayer.sendChatMessage("/play " + MegaW); MegaWall.getValue("MegaWalls").set("")}
    if(Custom.get()) {chat.print(CTex)}
  }
}

var scriptName = "ForceBugUper";
var scriptVersion = 1.0;
var scriptAuthor = "tk400.";

function ForceBugUper() {

	this.getName = function () {
		return "ForceBugUper";
	}
	this.getDescription = function () {
		return "";
	}
	this.getCategory = function () {
		return "";
	}

  this.onEnable = function() {
    BugUpModule.getValue("MaxDistanceToSetBlock").get(n)
  }
  
  this.onDisable = function() {
    BugUpModule.getValue("MaxDistanceToSetBlock").set(n)
  }
}


var ModuleManager = moduleManager.registerModule(new ModuleManager)
var TSMM = moduleManager.registerModule(new TSMM);
var HypixelGameChange = moduleManager.registerModule(new HypixelGameChange);

function onEnable() {
    ModuleManager;
    TSMM;
    HypixelGameChange;
};

function onDisable() {
    moduleManager.unregisterModule(ModuleManager);
    moduleManager.unregisterModule(TSMM);
    moduleManager.unregisterModule(HypixelGameChange);
};