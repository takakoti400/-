/*
Build for Latest / Tested For 2a87660
https://dl.ccbluex.net/skip/mLANvV0lDm
*/

var scriptName = "ModuleManager";
var scriptVersion = 1.4;
var scriptAuthor = "shirouto Co-Da- tk400.";

//Modules
var KAModule = moduleManager.getModule("KillAura");
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

var TSMMisEnabled = false;

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

  var SLT = value.createText("CustomTag", "SuperMechaMechaSugooooiModule!");
  var CC = value.createText("CustomColor", "a");
  //https://minecraft.gamepedia.com/Formatting_codes
  var test = value.createBoolean("test", true);
  var DebugChat = value.createBoolean("DebugChat", false);
  var SpeedJump = value.createBoolean("Speed", true);
  var Criticals = value.createList("Criticals", ["Off", "Jump", "SpeedModule", "TP", "Motion"], "Off");
  var DelayTick = value.createInteger("DelayTicks", 0, 1, 30);
  var Timer = value.createFloat("Timer", 0.1, 0, 10);
  var TP = value.createFloat("TP", 0.05, 0, 1);
  var Motion = value.createFloat("Motion", 0.1, 0, 1);
  var SpeedsDisabler = value.createBoolean("SpeedsDisabler", true);
  var VelLJManage = value.createBoolean("VelLongJump", true);
  var AutoKAJump = value.createBoolean("AutoKAJump", false);
  var ReverseStepFix = value.createBoolean("ReverseStepFix", true);
  var AutoFClear = value.createBoolean("AutoFClear", true);
  var Inv = value.createBoolean("Inv", true);
  var InvList = value.createList("Mode", ["None", "Open", "Simulate"], "None");
  var RenderSetting = value.createBoolean("RenderSetting", true);
  var RSCounter = value.createBoolean("Counter", false);
  var RSMark = value.createBoolean("Mark", false);

    this.addValues = function(values) {
      values.add(SLT);
      values.add(CC);
      values.add(test);
      values.add(DebugChat);
      values.add(SpeedJump);
      values.add(Criticals);
      values.add(DelayTick);
      values.add(Timer);
      values.add(TP);
      values.add(Motion);
      values.add(SpeedsDisabler);
      values.add(VelLJManage);
      values.add(AutoKAJump);
      values.add(ReverseStepFix);
      values.add(AutoFClear);
      values.add(Inv);
      values.add(InvList);
      values.add(RenderSetting);
      values.add(RSCounter);
      values.add(RSMark);
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
      if(SpeedJump.get() == true && SpeedModule.getState() && mc.thePlayer.onGround) {
        if(mc.gameSettings.keyBindJump.pressed) {
        if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
          mc.gameSettings.keyBindJump.pressed = false;
          rc = " [" + rn + "]"
          rn = Math.floor(Math.random() * 11);
           DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Jump." + rc)};
        }};
      //SpeedDisabler
    if(SpeedsDisabler.get() == true && SpeedModule.getState() || LJModule.getState()) {if(FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState()) {SpeedModule.setState(false) || LJModule.setState(false); DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Speed or LongJump.")}};
    //VelLJ /Hypixel Fix?
    if(VelLJManage.get() == true) {
      if(LJModule.getState() && VelocityModule.getState()) {VelocityModule.setState(false)}
      if(!LJModule.getState() && !VelocityModule.getState()) {VelocityModule.setState(true)}};
    //ReverseStepFix
    if(ReverseStepFix.get() == true) {
     if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
      if(RSModule.getState() && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}
     /*if(!RSModule.getState() && !FlyModule.getState() && !mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(true)}*/
    };
    //AutoKAJump
      if(AutoKAJump.get() == true && KAModule.getState() && !mc.gameSettings.keyBindJump.pressed) {mc.gameSettings.keyBindJump.pressed = true};

  /* Manage Modules Setting */

      //RenderSetter /fix Replace by other user's Setting
    if(RenderSetting.get() == true) {
      //Counter
      if(RSCounter.get() == true) {if(!ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(true)}; if(!TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(true)}}
      if(RSCounter.get() == false) {if(ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(false)}; if(TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(false)}}
      //Mark
      if(RSMark.get() == true) {if(!ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(true)}}
      if(RSMark.get() == false) {if(ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(false)}}
    };
    //Inv /This is ???
    if(Inv.get() == true) {
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
  }

  this.onAttack = function () {
    CToggleTimerAPI.get() && mc.timer.timerSpeed == Timer.get();
    mc.gameSettings.keyBindUseItem.pressed = mc.gameSettings.keyBindAttack.pressed = false;
    if(mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0) {
      CToggleTimerAPI = true;
    switch (Criticals.get()) {
      case "Jump":
        SpeedModule.setState(false);
        mc.thePlayer.jump(); mc.gameSettings.keyBindJump.pressed = false;
      break;
      case "SpeedModule":
        if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
          if(!mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindSneak.pressed && KAModule.getState() && !SpeedModule.getState() && !LJModule.getState() && !ScaffoldModule.getState() && !TowerModule.getState()) {SpeedModule.setState(true); if(DebugChat.get()) {chat.print(MMDchat + "§" + CC.get() + "Enabled Speed!")}}};
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
    if(AutoFClear.get() == true) {commandManager.executeCommand(".friends clear")}
}
}

/* TSMM v:1.65, by tk400
 * 
 * [1.65]
 * ReCoded(?) JumpScaffolding but it sh1t xd.
 * Added EnableBlink Option, it may helps Bypassing.
 * 
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
    TSMMisEnabled == true;
    BR.get() && mc.thePlayer.rotationYaw + 180;
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
    if(JumpScaffolding.get() == true) {TSMMMode.set("Off"); if(!ScaffoldModule.getValue("SameY").get()) {ScaffoldModule.getValue("SameY").set(true)}}
    // //
    WithBlinkAPI.get() && BlinkModule.setState(true);
    TSMMDebugChat.get() && chat.print(TSMMchat + "§a+Enabled TSMM and Scaffold and Tower");
  };
  this.onUpdate = function () {
    if(BR.get() == true) {//Reverse Forward to BackWard
      if(mc.gameSettings.keyBindForward.pressed) {
         mc.gameSettings.keyBindBack.pressed = true;
         mc.gameSettings.keyBindForward.pressed = false;
          }
        }
    if(!ScaffoldModule.getState()) {
      if(!mc.gameSettings.keyBindJump.pressed) {ScaffoldModule.setState(true); TowerModule.setState(false); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Scaffold, Disabled Tower")}};
      if(ScaffoldModule.getState() && !TowerModule.getState()) {
        if(mc.gameSettings.keyBindJump.pressed && mc.thePlayer.onGround) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(false)}
        if(TSMMMode.get() == "XZR") {mc.thePlayer.motionX = 0, mc.thePlayer.motionZ = 0}
        if(TSMMMode.get() == "VClip") {mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1, mc.thePlayer.posZ)}}
      if(!mc.gameSettings.keyBindJump.pressed) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(true)}
      }
    }
  //if press mc.gameSettings.keyBindJump.pressed = enable Tower, and Managing
    if(PotionTower.get() == true) {
    if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.thePlayer.isPotionActive(Potion.jump)) {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")}};
    if(PotionTower.get() == false) {
    if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")}};
    if(TowerModule.getState()) {
      if(NoXZMotion.get() == "MotionZero") {mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0};
      if(NoXZMotion.get() == "NoKeyBoard") {mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false};
    };
  //ForceSprint /Fix Can't sprinting Bug... or my setting?
    if(ForceSprint.get() == true && ScaffoldModule.getState()) {mc.thePlayer.setSprinting(true)}
  //AntiSlab
    if(AntiHalf.get() == true) {
    if(mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof AntiSlab) {mc.thePlayer.jump()}};
  //Jump Scaffolding
    if(JumpScaffolding.get() == true) {
      if(ScaffoldModule.getState() && mc.thePlayer.onGround) {if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {mc.gameSettings.keyBindJump.pressed = false; mc.thePlayer.jump()}}
    }
  //MLGScaffold
    if(MLGScaffold.get() == true) {mc.gameSettings.keyBindSneak.pressed = true; mc.gameSettings.keyBindJump.pressed = false; ScaffoldModule.getValue("Sprint").set(false); SprintModule.setState(false); if(mc.thePlayer.onGround) {mc.thePlayer.jump()}; if(SprintModule.getState()) {SprintModule.setState(false)}}
  };

  this.onDisable = function() {
    TSMMisEnabled == false;
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
 //Other Play Commands here https://hypixel.net/threads/guide-play-commands-useful-tools-mods-more-updated-11-17-19.1025608/
    this.addValues = function(values) {
      values.add(Hub);
      values.add(favorite);
      values.add(BedWars);
      values.add(SkyWars);
      values.add(murder);
      values.add(UHC);
      values.add(MegaWall);
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

  this.onEnable = function() {
    chat.print("HypixelGameChanger Module Enabled Check.");
  }

	this.onUpdate = function () {
    fv = ["bedwars_eight_one", "bedwars_eight_two", "Solo_Insane"][["BedWars Solo","BedWars Team","SkyWars Solo Insane"].indexOf(favorite.get())];
    bw = ["bedwars_eight_one", "bedwars_eight_two", "bedwars_four_three", "bedwars_four_four"][["Solo","Team","3v3","4v4"].indexOf(BedWars.get())];
    sw = ["Solo_Normal", "Solo_Insane", "Team_Normal", "Team_Insane"][["Solo Normal","Solo Insane","Team Normal","Team Insane"].indexOf(SkyWars.get())];
    mm = ["murder_classic", "murder_double_up", "murder_assassins", "murder_infection"][["Classic", "Double Up", "Assassins", "Infection"].indexOf(murder.get())];
    uhccmd = ["uhc_solo", "uhc_teams", "uhc_events", "speed_solo_normal", "speed_team_normal"][["solo", "teams", "event", "Speed Solo", "Speed Team"].indexOf(UHC.get())];
    MegaW = ["mw_standard", "mw_face_off"][["Standard", "Face Off"].indexOf(MegaWall.get())];
    if(Hub.get() == true) {mc.thePlayer.sendChatMessage("/hub"); Hub.set(false)}
    if(!favorite.get() == "") {mc.thePlayer.sendChatMessage("/play " + fv); favorite.getValue("Favorite").set("")}
    if(!BedWars.get() == "") {mc.thePlayer.sendChatMessage("/play " + bw); BedWars.getValue("BedWars").set("")}
    if(!SkyWars.get() == "") {mc.thePlayer.sendChatMessage("/play " + sw); SkyWars.getValue("SkyWars").set("")}
    if(!murder.get() == "") {mc.thePlayer.sendChatMessage("/play " + mm); murder.getValue("Murder Mystery").set("")}
    if(!UHC.get() == "") {mc.thePlayer.sendChatMessage("/play " + uhccmd); UHC.getValue("UHC").set("")}
    if(!MegaWall.get() == "") {mc.thePlayer.sendChatMessage("/play " + MegaW); MegaWall.getValue("MegaWalls").set("")}
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