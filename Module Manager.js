/*
1.25
[bug fixes], [Added], [Renamed], etc...

Build for ffe6cb6(Latest)
https://dl.ccbluex.net/skip/mLANvV0lDm
*/

var scriptName = "ModuleManager";
var scriptVersion = 1.25;
var scriptAuthor = "tk400.";

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
var FreeCamModule = moduleManager.getModule("FreeCam");

var MMDchat = "§5[§dModuleManager§5] "
var TSMMchat = "§5[§dTSMM§5] "

BlockPos = Java.type('net.minecraft.util.BlockPos')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')

AntiSlab = Java.type('net.minecraft.block.BlockSlab')

function ModuleManager() {

  var CC = value.createText("CustomColor", "a");
  //https://minecraft.gamepedia.com/Formatting_codes
  var test = value.createBoolean("test", true);
  var test2 = value.createBoolean("test2", true);
  var DebugChat = value.createBoolean("DebugChat", false);
  var SpeedJump = value.createBoolean("Speed", true);
  var Criticals = value.createList("Criticals", ["None", "Jump", "SpeedModule", "TP", "Motion", "TPStopFall", "TPJumpStopFall"], "None");
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
      values.add(CC);
      values.add(test);
      values.add(test2);
      values.add(DebugChat);
      values.add(SpeedJump);
      values.add(Criticals);
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

	this.onUpdate = function () {
    if(test.get() == true) {
    };
    if(test2.get() == true) {
    };
    //Manage SpeedJump /Fix Jump Boosting
    if(SpeedJump.get() == true && SpeedModule.getState() && mc.thePlayer.onGround) {
      if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
      if(mc.gameSettings.keyBindJump.pressed) {mc.gameSettings.keyBindJump.pressed = false; DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Jump.")}}};
      //SpeedDisabler
    if(SpeedsDisabler.get() == true && SpeedModule.getState() || LJModule.getState()) {if(FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState()) {SpeedModule.setState(false) || LJModule.setState(false); DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Speed or LongJump.")}};
    //VelLJ /Hypixel Fix?
    if(VelLJManage.get() == true) {
      if(LJModule.getState() && VelocityModule.getState()) {VelocityModule.setState(false)}
      if(!LJModule.getState() && !VelocityModule.getState()) {VelocityModule.setState(true)}
    };
    //ReverseStepFix
    if(ReverseStepFix.get() == true) {
     if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
      if(RSModule.getState() && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}
     /*if(!RSModule.getState() && !FlyModule.getState() && !mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(true)}*/
    };
    //AutoKAJump
      if(AutoKAJump.get() == true && KAModule.getState() && mc.thePlayer.onGround && !mc.gameSettings.keyBindJump.pressed) {mc.thePlayer.jump()};
    //RenderSetter /fix
    if(RenderSetting.get() == true) {
      //Counter
      if(RSCounter.get() == true) {if(!ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(true)}; if(!TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(true)}}
      if(RSCounter.get() == false) {if(ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(false)}; if(TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(false)}}
      //Mark
      if(RSMark.get() == true) {if(!ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(true)}}
      if(RSMark.get() == false) {if(ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(false)}}
    };
    //Inv /This is fixing Item Not throwing Bug
    if(Inv.get() == true) {
      if(InvList.get() == "None") {
        if(InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(false)}; if(InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(false)}
        if(InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(false)}; if(InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(false)}}
      if(InvList.get() == "Open") {
        if(!InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(true)}; if(InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(false)}
        if(!InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(true)}; if(InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(false)}}
      if(InvList.get() == "Simulate") {
        if(InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(false)}; if(!InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(true)}
        if(InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(false)}; if(!InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(true)}}
    };
  }

  this.onAttack = function () {
    switch (Criticals.get()) {
      case "Jump":
        SpeedModule.setState(false)
        if(mc.thePlayer.onGround) {mc.thePlayer.jump(); mc.gameSettings.keyBindJump.pressed = false}
      break;
      case "SpeedModule":
        if(mc.thePlayer.onGround && mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
          if(!mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindSneak.pressed && KAModule.getState() && !SpeedModule.getState() && !LJModule.getState() && !ScaffoldModule.getState() && !TowerModule.getState()) {SpeedModule.setState(true); if(DebugChat.get()) {chat.print(MMDchat + "§" + CC.get() + "Enabled Speed!")}}};
      break;
      case "TP":
        if(mc.thePlayer.onGround) {mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ)};
      break;
      case "Motion":
        if(mc.thePlayer.onGround) {mc.thePlayer.motionY = Motion.get()};
      break;
      case "TPStopFall":
        //Dev
        if(mc.thePlayer.onGround) {mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ)};
        if(mc.thePlayer.ticksExisted % 2 == 0) {mc.thePlayer.motionY = 0};
      break;
      case "TPJumpStopFall":
        //Dev
        if(mc.thePlayer.onGround) {mc.thePlayer.jump()};
        if(!mc.thePlayer.onGround && mc.thePlayer.ticksExisted % 2 == 0) {mc.thePlayer.motionY = 0};
      break;
    };
  };

  this.onWorld = function () {
    //This is not Module, But i think this is useful :)
    if(AutoFClear.get() == true) {commandManager.executeCommand(".friends clear")}
}
}


/* TSMM */

/*
[improved]
Tower And Scaffold Management

[Added]
DebugChat and option and custom color
NoXZ "NokeyBoard" option / i think better than XZMotionZero
*/

var scriptName = "TSMM";
var scriptVersion = 1.6;
var scriptAuthor = "tk400.";

function TSMM() {

  var TSMMDebugChat = value.createBoolean("TSMMDebugChat", false);
  var TSCC = value.createText("TSMMCustomColor", "a");
  var TSMMMode = value.createList("ScaffoldJump", ["None", "Sprint", "XZR", "VClip"], "None");
  var ForceSprint = value.createBoolean("ForceSprint", true);
  var JumpScaffolding = value.createBoolean("JumpScaffold", false);
  var JSSprint = value.createBoolean("JSSprint", false);
  var AntiHalf = value.createBoolean("AntiHalf", false);
  var MLGScaffold = value.createBoolean("MLGSCaffold", false);
  var NoXZMotion = value.createList("NoXZMotion", ["None", "MotionZero", "NoKeyBoard"], "None");

  this.addValues = function(values) {
    values.add(TSMMDebugChat);
    values.add(TSCC);
    values.add(TSMMMode);
    values.add(ForceSprint);
    values.add(JumpScaffolding);
    values.add(JSSprint);
    values.add(AntiHalf);
    values.add(MLGScaffold);
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
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
    TSMMDebugChat.get() && chat.print(TSMMchat + "§a+Enabled TSMM and Scaffold and Tower");
  }
	this.onUpdate = function () {
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
    //if press mc.gameSettings.keyBindJump.pressed = enable Tower and Manage Tower
    if(mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")};
    if(TowerModule.getState()) {
      if(NoXZMotion.get() == "MotionZero") {mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0};
      if(NoXZMotion.get() == "NoKeyBoard") {mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false}};
      //if press Jump + wasd disable Tower enable Scaffoldolder
        if(JumpScaffolding.get() == true) {
          if(mc.gameSettings.keyBindSneak.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {if(mc.thePlayer.onGround) {mc.thePlayer.jump(); ScaffoldModule.getValue("SameY").set(true)}}
        if(JSSprint.get() == true) {ScaffoldModule.getValue("Sprint").set(true)}
        if(JSSprint.get() == false) {ScaffoldModule.getValue("Sprint").set(false)}
      }
        //ForceSprint /Fix Can't sprinting Bug... or my setting?
        if(ForceSprint.get() == true && ScaffoldModule.getState()) {mc.thePlayer.setSprinting(true)}
        //AntiSlab
        if(AntiHalf.get() == true && mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof AntiSlab) {mc.thePlayer.jump()}
        //MLGScaffold
        if(MLGScaffold.get() == true) {mc.gameSettings.keyBindSneak.pressed = true; mc.gameSettings.keyBindJump.pressed = false; ScaffoldModule.getValue("Sprint").set(false); SprintModule.setState(false); if(mc.thePlayer.onGround) {mc.thePlayer.jump()}; if(SprintModule.getState()) {SprintModule.setState(false)}}
  };

  this.onDisable = function() {
    ScaffoldModule.setState(false);
    TowerModule.setState(false);
    TSMMDebugChat.get() && chat.print(TSMMchat + "§c-Disabled TSMM and Scaffold and Tower");
    if(MLGScaffold.get() == true) {SprintModule.setState(true)}
  }
}


var TSMM = moduleManager.registerModule(new TSMM)
var ModuleManager = moduleManager.registerModule(new ModuleManager)
function onEnable() {
    ModuleManager;
    TSMM;
};

function onDisable() {
    moduleManager.unregisterModule(ModuleManager);
    moduleManager.unregisterModule(TSMM);
};
