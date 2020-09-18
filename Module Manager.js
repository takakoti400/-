/*
<comment>
/Fixed
[SpeddJumpStoper] -Jump is now possible when WASD is not pressed
[ReNamed values]  -ManageSpeed and ManageSpeedD(isable) AndReFixed

/Added
[Counter, Mark Render] -Added.

etc...?
*/

var scriptName = "ModuleManager";
var scriptVersion = 1.05;
var scriptAuthor = "tk400.";

var KAModule = moduleManager.getModule("KillAura");
var SpeedModule = moduleManager.getModule("Speed");
var LJModule = moduleManager.getModule("LongJump");
var RSModule = moduleManager.getModule("ReverseStep");
var FlyModule = moduleManager.getModule("Fly");
var SprintModule = moduleManager.getModule("Sprint");
var VelocityModule = moduleManager.getModule("Velocity");
var HighJumpModule = moduleManager.getModule("HighJump");
var ScaffoldModule = moduleManager.getModule("Scaffold");
var TowerModule = moduleManager.getModule("Tower");
var NoFallModule = moduleManager.getModule("NoFall");
var DamageModule = moduleManager.getModule("Damage");
var FreeCamModule = moduleManager.getModule("FreeCam");


BlockPos = Java.type('net.minecraft.util.BlockPos')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')

AntiSlab = Java.type('net.minecraft.block.BlockSlab')

function ModuleManager() {

  var DebugChat = value.createBoolean("DebugChat", false);
  var SpeedJump = value.createBoolean("Speed", true);
  var SpeedDisabler = value.createBoolean("SpeedDisabler", true);
  var AutoKAJump = value.createBoolean("AutoKAJump", false);
  var DamageHighJumper = value.createBoolean("DamageHighJumper", true);
  var ReverseStepFix = value.createBoolean("ReverseStepFix", true);
  var AutoFClear = value.createBoolean("AutoFClear", true);
  var FreeCamSlower = value.createBoolean("FreeCamSlower", false);
  var AfterValue = value.createFloat("AfterValue", 1, 0, 1);
  var SlowValue = value.createFloat("SlowValue", 0.2, 0, 1);
  var RenderSetting = value.createBoolean("RenderSetting", true);
  var RSCounter = value.createBoolean("Counter", false);
  var RSMark = value.createBoolean("Mark", false);

    this.addValues = function(values) {
      /*values.add(AlwaysTrue);*/
      values.add(DebugChat);
      values.add(SpeedJump);
      values.add(SpeedDisabler);
      values.add(AutoKAJump);
      values.add(DamageHighJumper);
      values.add(ReverseStepFix);
      values.add(AutoFClear);
      values.add(FreeCamSlower);
      values.add(AfterValue);
      values.add(SlowValue);
      values.add(RenderSetting);
      values.add(RSCounter);
      values.add(RSMark);
    }

	this.getName = function () {
		return "ModuleManager";
	}
	this.getDescription = function () {
		return "Mangement Disable, Setting, Modules.";
	}
	this.getCategory = function () {
		return "Player";
	}

	this.onUpdate = function () {
    //Manage SpeedJump
    if(ManageSpeed.get() == true && SpeedModule.getState() && mc.thePlayer.onGround ) {
      if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
      if(DebugChat.get() == true && mc.gameSettings.keyBindJump.pressed) {mc.gameSettings.keyBindJump.pressed = false; chat.print("Disabled Jump.")}}}
      //SpeedDisabler
    if(ManageSpeedD.get() == true) {if(SpeedModule.getState() && FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState()) {SpeedModule.setState(false)}}
    //DamageHighJumper
    if(DamageHighJumper.get() == true) {
    if(!NoFallModule.getState() && HighJumpModule.getState() && mc.thePlayer.onGround && !mc.gameSettings.keyBindForward.pressed && mc.thePlayer.ticksExisted % 20 == 0) {DamageModule.setState(true)}
    if(HighJumpModule.getState()) {
      if(mc.thePlayer.onGround && NoFallModule.getState()) {NoFallModule.setState(false)}
      if(!mc.thePlayer.onGround && !NoFallModule.getState()) {NoFallModule.setState(true)}
   }
   if(!HighJumpModule.getState()) {NoFallModule.setState(true)}
   }
    //ReverseStepFix
    if(ReverseStepFix.get() == true) {
     if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
      if(RSModule.getState() && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}
     /*if(!RSModule.getState() && !FlyModule.getState() && !mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(true)}*/
    }
    //AutoKAJump
      if(AutoKAJump.get() == true && KAModule.getState() && mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed) {mc.thePlayer.jump()}
    //FreeCamSlower
    if(FreeCamSlower.get() == true && FreeCamModule.getState() && mc.gameSettings.keyBindSneak.pressed && mc.gameSettings.keyBindJump.pressed) {FreeCamModule.getValue("Speed").set(SlowValue.get())}
    if(FreeCamSlower.get() == true && FreeCamModule.getState() && !mc.gameSettings.keyBindSneak.pressed && !mc.gameSettings.keyBindJump.pressed) {FreeCamModule.getValue("Speed").set(AfterValue.get())}
    //RenderSetter
    if(RenderSetting.get() == true) {
      if(RSCounter.get() == true) {if(!ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(true)}; if(!TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(true)}}; if(RSCounter.get() == false) {if(ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(false); if(TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(false)}}}
      if(RSMark.get() == true) {if(!ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(true)}}; if(RSMark.get() == false) {if(ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(false)}};
    }
  }
  this.onWorld = function () {
    //This is not Module, But i think this is useful :)
    if(AutoFClear.get() == true) {commandManager.executeCommand(".friends clear")}
}
}


/* TSMM */

/*
im forgot update, what updated?
*/


var scriptName = "TSMM";
var scriptVersion = 1.5;
var scriptAuthor = "tk400.";

function TSMM() {

  var TSMMMode = value.createList("Mode", ["None", "Sprint", "XZR", "VClip"], "None");
  var JumpScaffolding = value.createBoolean("JumpScaffold", false);
  var JSSprint = value.createBoolean("JSSprint", false);
  var AntiHalf = value.createBoolean("AntiHalf", false);
  var MLGScaffold = value.createBoolean("MLGSCaffold", false);
  var NoXZMotion = value.createBoolean("NoXZMotion", false);

  this.addValues = function(values) {
    values.add(TSMMMode);
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
		return "ModuleManager's Module of TowerScaffold ;)";
	}
	this.getCategory = function () {
		return "Player";
	}

  this.onEnable = function() {
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
  }
  this.getTag = function() {
    return TSMMMode.get();
}

	this.onUpdate = function () {
      if(!mc.gameSettings.keyBindJump.pressed) {TowerModule.setState(false); ScaffoldModule.setState(true)}
      if(ScaffoldModule.getState() && !TowerModule.getState()) {
        if(mc.gameSettings.keyBindJump.pressed && mc.thePlayer.onGround) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(false)}
        if(TSMMMode.get() == "XZR") {mc.thePlayer.motionX = 0, mc.thePlayer.motionZ = 0}
        if(TSMMMode.get() == "VClip") {mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1, mc.thePlayer.posZ)}
      }
      if(!mc.gameSettings.keyBindJump.pressed ) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(true)}
      }
    }
    //if press JumpKey enable Tower
    if(mc.gameSettings.keyBindJump.pressed) {
      if(!mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindRight.pressed && !mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindBack.pressed) {ScaffoldModule.setState(false); TowerModule.setState(true); if(NoXZMotion.get() == true) {mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0}}
      if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {ScaffoldModule.setState(true); TowerModule.setState(false)}
  }
      //if press Jump + wasd disable Tower enable Scaffoldolder
        if(JumpScaffolding.get() == true) {
          if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindBack.pressed) {if(mc.thePlayer.onGround) {mc.thePlayer.jump(); ScaffoldModule.getValue("SameY").set(true)}}
        if(JSSprint.get() == true) {ScaffoldModule.getValue("Sprint").set(true)}
        if(JSSprint.get() == false) {ScaffoldModule.getValue("Sprint").set(false)}
      }
        //AntiSlab
        if(AntiHalf.get() == true && mc.gameSettings.keyBindForward.pressed && mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof AntiSlab) {mc.thePlayer.jump()}
        //MLGScaffold
        if(MLGScaffold.get() == true) {mc.gameSettings.keyBindForward.pressed = true; mc.gameSettings.keyBindJump.pressed = false; ScaffoldModule.getValue("Sprint").set(false); SprintModule.setState(false); if(mc.thePlayer.onGround) {mc.thePlayer.jump()}; if(SprintModule.getState()) {SprintModule.setState(false)}}
  }

  this.onDisable = function() {
    ScaffoldModule.setState(false);
    TowerModule.setState(false);
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
