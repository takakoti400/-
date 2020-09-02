var scriptName = "ModuleManager";
var scriptVersion = 0.95;
var scriptAuthor = "tk400.";

/*
Change log

<0.95>
Added   : Anti Slime (ReverseStep's Slime HighJump Bug.)
Added   : onWorld AutoFriendsCleaner
Removed : Speed Changer This thinking is good(maybe), but coder is sucks...
*/

var SpeedModule = moduleManager.getModule("Speed");
var ScaffoldModule = moduleManager.getModule("Scaffold");
var TowerModule = moduleManager.getModule("Tower");
var DamageModule = moduleManager.getModule("Damage");
var HighJumpModule = moduleManager.getModule("HighJump");
var RSModule = moduleManager.getModule("ReverseStep");
var FlyModule = moduleManager.getModule("Fly");

BlockPos = Java.type('net.minecraft.util.BlockPos')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')

function ModuleManager() {

  var DebugChat = value.createBoolean("DebugChat", false);
  var ManageSpeed = value.createBoolean("Speed", true);
  var DamageHighJumper = value.createBoolean("DamageHighJumper", true);
  var ReverseStepFix = value.createBoolean("ReverseStepFix", true);
  var AutoFClear = value.createBoolean("AutoFClear", true);

    this.addValues = function(values) {
      /*values.add(AlwaysTrue);*/
      values.add(DebugChat);
      values.add(ManageSpeed);
      values.add(DamageHighJumper);
      values.add(ReverseStepFix);
      values.add(AutoFClear);
    }

	this.getName = function () {
		return "ModuleManager";
	}
	this.getDescription = function () {
		return "ModuleManager Manager";
	}
	this.getCategory = function () {
		return "Player";
	}

	this.onUpdate = function () {
    //SpeedManager
    if(ManageSpeed.get() == true && SpeedModule.getState() && mc.thePlayer.onGround) {
      if(DebugChat.get() == true && mc.gameSettings.keyBindJump.pressed) {chat.print("Disabled Jump.")}
    mc.gameSettings.keyBindJump.pressed = false;
    }
    //DamageHighJump
    if(HighJumpModule.getState() && mc.thePlayer.onGround && !mc.gameSettings.keyBindForward.pressed && mc.thePlayer.ticksExisted % 20 == 0) {DamageModule.setState(true)}
    //ReverseStepFix
    if(ReverseStepFix.get() == true) {
    if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
     if(RSModule.getState() && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}
    }
  }
  this.onWorld = function () {
    //This is not Module, But i think this is useful :)
    if(AutoFClear.get() == true) {commandManager.executeCommand(".friends clear")}
  }
}




var scriptName = "TSMM";
var scriptVersion = 1.0;
var scriptAuthor = "tk400.";

function TSMM() {

  var TSMMMode = value.createList("Mode", ["None", "Sprint", "XZR"], "None");

  this.addValues = function(values) {
    values.add(TSMMMode);
  }
	this.getName = function () {
		return "TSMM";
	}
	this.getDescription = function () {
		return "ModuleManager's Module of TowerScaffold ;)";
	}
	this.getCategory = function () {
		return "Player";
	}

  this.onEnable = function() {
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
  }

	this.onUpdate = function () {
      if(SpeedModule.getState()) {
        SpeedModule.setState(false);
      }
      if(!mc.gameSettings.keyBindJump.pressed) {TowerModule.setState(false); ScaffoldModule.setState(true)}
      if(mc.gameSettings.keyBindJump.pressed && mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {TowerModule.setState(false); ScaffoldModule.setState(true)}
      if(mc.gameSettings.keyBindJump.pressed) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(false)}
        if(TSMMMode.get() == "XZR") {mc.thePlayer.motionX = 0, mc.thePlayer.motionZ = 0}
      }
      if(!mc.gameSettings.keyBindJump.pressed) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(true)}
      }
        if(!mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindRight.pressed && !mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindJump.pressed) {ScaffoldModule.setState(false); TowerModule.setState(true)}
  }

  this.onDisable = function() {
    ScaffoldModule.setState(false);
    TowerModule.setState(false);
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
