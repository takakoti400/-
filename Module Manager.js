var scriptName = "ModuleManager";
var scriptVersion = 0.9;
var scriptAuthor = "tk400.";

var SpeedModule = moduleManager.getModule("Speed");
var ScaffoldModule = moduleManager.getModule("Scaffold");
var TowerModule = moduleManager.getModule("Tower");
var DamageModule = moduleManager.getModule("Damage");
var HighJumpModule = moduleManager.getModule("HighJump");
var RSModule = moduleManager.getModule("ReverseStep");
var FlyModule = moduleManager.getModule("Fly");

function ModuleManager() {

  var DebugChat = value.createBoolean("DebugChat", false);
  var ManageSpeed = value.createBoolean("Speed", true);
  var SpeedModeChange = value.createBoolean("ChangeSpeedMode", false);
  var SpeedMode = value.createList("SpeedModeType", ["Mineplex", "OldCube", "Custom"], "Mineplex");
  var BMineplexSpeed = value.createText("BeforeMineplexSpeed", "MineplexGround");
  var AMineplexSpeed = value.createText("AfterMineplexSpeed", "Custom");
  var BOldCubeSpeed = value.createText("BeforeOldCubeSpeed", "TeleportCubeCraft");
  var AOldCubeSpeed = value.createText("AfterOldCubeSpeed", "SlowHop");
  var BCustomSpeedChange = value.createText("BeforeCustomSpeed", "BCustom");
  var ACustomSpeedChange = value.createText("AfterCustomSpeed", "ACustom");
  var DamageHighJumper = value.createBoolean("DamageHighJumper", true);
  var ReverseStepFix = value.createBoolean("ReverseStepFix", true);

    this.addValues = function(values) {
      /*values.add(AlwaysTrue);*/
      values.add(DebugChat);
      values.add(ManageSpeed);
      values.add(SpeedModeChange);
      values.add(SpeedMode);
      values.add(BMineplexSpeed);
      values.add(AMineplexSpeed);
      values.add(BOldCubeSpeed);
      values.add(AOldCubeSpeed);
      values.add(BCustomSpeedChange);
      values.add(ACustomSpeedChange);
      values.add(DamageHighJumper);
      values.add(ReverseStepFix);
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
    //SpeedModeChanger
    if(SpeedModeChange.get() == true && SpeedModule.getState()) {
        //Mineplex
      if(mc.gameSettings.keyBindSprint.pressed) {
        if(SpeedMode.get() == "Mineplex") {SpeedModule.getValue("Mode").set(BMineplexSpeed.get())}}
      if(!mc.gameSettings.keyBindSprint.pressed) {
        if(SpeedMode.get() == "Mineplex") {SpeedModule.getValue("Mode").set(AMineplexSpeed.get())}}
        //OldCube
        if(mc.gameSettings.keyBindSprint.pressed) {
          if(SpeedMode.get() == "OldCube") {SpeedModule.getValue("Mode").set(BOldCubeSpeed.get())}}
        if(!mc.gameSettings.keyBindSprint.pressed) {
          if(SpeedMode.get() == "OldCube") {SpeedModule.getValue("Mode").set(AOldCubeSpeed.get())}}
          //Custom
        if(mc.gameSettings.keyBindSprint.pressed) {
          if(SpeedMode.get() == "Custom") {SpeedModule.getValue("Mode").set(BCustomSpeedChange.get())}}
        if(!mc.gameSettings.keyBindSprint.pressed) {
          if(SpeedMode.get() == "Custom") {SpeedModule.getValue("Mode").set(ACustomSpeedChange.get())}}
    }
    //ReverseStepFix
    if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
    if(!FlyModule.getState() && !RSModule.getState()) {RSModule.setState(true)}
     /*next Feature is AntiSlime etc...?*/
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
