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
var SpammerModule = moduleManager.getModule("Spammer");
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

//Java Utils
//var Timer = Java.type("java.util.Timer");


//Scripts Shortcut, Addons, Helper...
var MMDchat = "§5[§dModuleManager§5] "
var TSMMchat = "§5[§dTSMM§5] "
var saveconfigname = 'default';
var MoveDir = 'A';
var servername;

var jps = ""
var br = ""
var ar = ""

ContJP = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン　"
clientname = ["LiqBounce", "Bounce of Liquidz", "LaquidBounce", "LiquidBounce", "Bounce of liquid", "LIQUIDBOUNCE"]
insultword = ["Fools", "Foolishes", "Dumbs", "Idiots", "GAYMER", "Loser", "GarbageHuman"]

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
  var InvList = value.createList("Mode", ["None", "Open", "Simulate", "Both"], "None");
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
      values.add(RSMark);
      values.add(Text4);
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
      values.add(SaveConfig);
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
  this.onLoad = function () {
    switch (mode.get()) { //Test
      case "Bed": id = 26; break;
      case "Cake": id = 92; break;
      case "Dragon_Egg": id = 122; break;
      case "Obsidian": id = 49; break;
      case "Enchanting_Table": id = 116; break;
      case "Crafting_Table": id = 58; break;
      case "Custom": id = customid.get(); break;
    }}
	this.onUpdate = function () {
    //Manage SpeedJump /Fix Jump Boosting
      if(SpeedJump.get()) {
        if(SpeedModule.getState() && mc.thePlayer.onGround) {
          if(mc.gameSettings.keyBindJump.pressed) {
            if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
              mc.gameSettings.keyBindJump.pressed = false;
              rc = " [" + rn + "]"
              rn = Math.floor(Math.random() * 11);
              DebugChat.get() && chat.print(MMDchat + "§" + CC.get() + "Disabled Jump." + rc)};
        }}};
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
          case 'FR':
            mc.gameSettings.keyBindBack.pressed = false; mc.gameSettings.keyBindLeft.pressed = false; mc.gameSettings.keyBindRight.pressed = true;
            break;
          case 'FL':
            mc.gameSettings.keyBindBack.pressed = false; mc.gameSettings.keyBindRight.pressed = false; mc.gameSettings.keyBindLeft.pressed = true;
            break;
          case 'BL':
            mc.gameSettings.keyBindForward.pressed = false; mc.gameSettings.keyBindRight.pressed = false; mc.gameSettings.keyBindLeft.pressed = true;
            break;
          case 'BR':
            mc.gameSettings.keyBindForward.pressed = false; mc.gameSettings.keyBindLeft.pressed = false; mc.gameSettings.keyBindRight.pressed = true;
            break;
        }
        if(!mc.thePlayer.onGround) {
          if(mc.gameSettings.keyBindForward.pressed) {MoveDir = 'F'}
          if(mc.gameSettings.keyBindRight.pressed) {MoveDir = 'R'}
          if(mc.gameSettings.keyBindLeft.pressed) {MoveDir = 'L'}
          if(mc.gameSettings.keyBindBack.pressed) {MoveDir = 'B'}
          if(mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindRight.pressed) {MoveDir = 'FR'}
          if(mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindLeft.pressed) {MoveDir = 'FL'}
          if(mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindLeft.pressed) {MoveDir = 'BL'}
          if(mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindRight.pressed) {MoveDir = 'BR'}
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
      if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}else{RSModule.setState(true)}
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
      switch (InvList.get()) {
        case "None":
          if(InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(false)}; if(InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(false)}
          if(InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(false)}; if(InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(false)}
          break;
        case "Open":
          if(!InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(true)}; if(InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(false)}
          if(!InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(true)}; if(InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(false)}
          break;
        case "Simulate":
          if(InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(false)}; if(!InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(true)}
          if(InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(false)}; if(!InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(true)}
          break;
        case "Both":
          if(!InvModule.getValue("invOpen").get()) {InvModule.getValue("invOpen").set(true)}; if(!InvModule.getValue("SimulateInventory").get()) {InvModule.getValue("SimulateInventory").set(true)}
          if(!InvAAModule.getValue("invOpen").get()) {InvAAModule.getValue("invOpen").set(true)}; if(!InvAAModule.getValue("SimulateInventory").get()) {InvAAModule.getValue("SimulateInventory").set(true)}
      }
    }
    
    //Selection
    if(Selection.get()) {
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
        commandManager.executeCommand(".localautosettings load "+ servererna + " all"); 
      }
      if(!DSConfig.get()) {
        chat.print("i have no 'Idea', sorry.")
      }
    }
    if(SaveConfig.get()) {SaveConfig.set(false); commandManager.executeCommand(".localautosettings save " + servername + " all"); chat.print("§4Debug[SaveConfig]§f: Saved for §l" + servername)}
  }

  this.onAttack = function () {
    mc.gameSettings.keyBindUseItem.pressed = mc.gameSettings.keyBindAttack.pressed = false;
    if(mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0 && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
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
      if(mc.getCurrentServerData().serverIP.match(".ccbluex.net")) {servername = 'testccbluex'};
      if(mc.getCurrentServerData().serverIP.match(".hypixel.net" || "hypixel.net")) {servername = 'hypixel'};
      if(mc.getCurrentServerData().serverIP.match(".cubecraft.net" || "cubeaft.net")) {servername = 'cubecraft'};
      if(mc.getCurrentServerData().serverIP.match(".mineplex.com")) {servername = 'mineplex'};
      // EXPEPIMENTAL //
      SavingName.set(servername);
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
  var JSMode = value.createList("Type", ["SimplyJump", "Motion", "TP"], "SimplyJump");
  var JSV = value.createFloat("Value", 0.42, -1, 2);
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
    values.add(JSMode);
    values.add(JSV);
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
  if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {
      if(PotionTower.get()) {
        if(!mc.thePlayer.isPotionActive(Potion.jump)) {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")}}else if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed)
          {ScaffoldModule.setState(false); TowerModule.setState(true); TSMMDebugChat.get() && chat.print(TSMMchat + "§" + TSCC.get() + "Enabled Tower, Disabled Scaffold")};
  }
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
        if(ScaffoldModule.getState() && mc.thePlayer.onGround && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava() && !mc.gameSettings.keyBindSneak.pressed) {if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {mc.gameSettings.keyBindJump.pressed = false;
        switch (JSMode.get()) {
          case "SimplyJump":
            mc.thePlayer.jump()
            break;
          case "Motion":
            mc.thePlayer.motionY = JSV.get();
            break;
          case "TP":
            mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + JSV.get(), mc.thePlayer.posZ);
            break;
        }}}
    }
  //MLGScaffold
    if(MLGScaffold.get()) {mc.gameSettings.keyBindSneak.pressed = true; mc.gameSettings.keyBindJump.pressed = false; ScaffoldModule.getValue("Sprint").set(false); SprintModule.setState(false); if(mc.thePlayer.onGround) {mc.thePlayer.jump()}; if(SprintModule.getState()) {SprintModule.setState(false)}}
  };

  this.onDisable = function() {
    BR.get() && mc.thePlayer.rotationYaw + 180; /*Fix Head Rotation. only this code...*/ 
    ScaffoldModule.setState(false); TowerModule.setState(false);
    if(MLGSprint.get()) {SprintModule.setState(true)}else{SprintModule.setState(false)}
    WithBlinkAPI.get() || BlinkTower.get() && BlinkModule.setState(false);
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
    if(Custom.get()) {Custom.set(false); mc.thePlayer.sendChatMessage("/play " + CTex.get())}//... i forgot this '.GET()' smh...
  }
}

function randomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 " + jps;

  for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

//Add Hypixel Bypasser later and AutoReplay? xd
function ChatManager() {
  var i = 0;
  var delay = 0;

  var SpamMode = value.createList("Mode", ["onEnabled", "ValueChanged", "AutoSpam"], "ValueChanged");
  var spamlist = value.createList("SpamProfile", ["Mineplex", "GameEnd", "Thx4Server", "LiquidAd", "DefaultLiquidSpammer", "TrulySpeach", "All", "Custom//", ""], "");
  var yourname = value.createText("hackedBy", "[EnterNameHere]");
  var maxDelay = value.createInteger("MaxDelay", 400,0,5000); // 10 = 1s.
  var minDelay = value.createInteger("MinDelay", 100,0,5000);
  var randomish = value.createBoolean("Ramdomizer", true);
  var BeforeR = value.createBoolean("Before", false);
  var AfterR = value.createBoolean("After", false);
  var Incjp = value.createBoolean("#IncludeJapaneseString", false);
  var AllowBet = value.createBoolean("Between", false); //Im Recommanding set false.
  var RandomBet = value.createBoolean("RandomBetween", false);
  var RBA = value.createInteger("Amount", 1,1,5);
  var BetStB = value.createText("StringBefore", ">");
  var BetStA = value.createText("StringAfter", "|");

    this.addValues = function(values) {
      values.add(SpamMode);
      values.add(spamlist);
      values.add(yourname);
      values.add(maxDelay);
      values.add(minDelay);
      values.add(randomish);
      values.add(BeforeR);
      values.add(AfterR);
      values.add(Incjp);
      values.add(AllowBet);
      values.add(RandomBet);
      values.add(RBA);
      values.add(BetStB);
      values.add(BetStA);
    }

	this.getName = function () {
		return "ChatManager";
	}
	this.getDescription = function () {
		return "Spammer, But Addition Profiler Mode, Simple Code";
	}
	this.getCategory = function () {
		return "Misc";
	}
  this.onEnable = function() {
    i=0;
    delay = Math.floor(Math.random() * ((maxDelay.get()-minDelay.get())+1) + minDelay.get());
    if(SpamMode.get() == "onEnabled") {mc.thePlayer.sendChatMessage(MSG)}
  }
	this.onUpdate = function () {
    Mineplex = [
      "Don't Worry Mineplex! You've server is rly not popular. Alts are Almost all unbanned! xd!!",
      "Hello mineplex, you've BAN is doesn't have much of an effect at all. why? A is Simple you've server is not popular. ",
      "Hi mineplex! Don't worry The hackers stop coming to play. you've server is rly not popular. ",
      "mineplex, Do you want to banned hackers on this server? i think answer is not. ",
      "Lol! lagplex! We can never BANNED! Don't Worryyyyy!!!",
      "hey guys im back! ;) don't worry guys!"
    ]
    GameEnd = [
      "EZist haxied by " + yourname.get() + ", And " + clientname[parseInt(Math.random()*clientname.length)] + " Client. Download Now.",
      "E Z! :) this game was fun!!! | HACKED BY " + yourname.get() + ", and " + clientname[parseInt(Math.random()*clientname.length)] + " Client.",
      "E Z!! XD You are hacked by " + yourname.get() + ", and " + clientname[parseInt(Math.random()*clientname.length)] + " Client. ",
      "hacked by " + yourname.get() + " and " + clientname[parseInt(Math.random()*clientname.length)] + " Client",
      "gg! XD this game is rly fast ended! Guys Let's use " + clientname[parseInt(Math.random()*clientname.length)] + ", this's made 4 "+servername+ " Client!",
      "yeah excited won in this game. i'm Used " + clientname[parseInt(Math.random()*clientname.length)] + " Client! Best for grade up pvp experience!!",
      "gg! noobs. don't waste my time. you can't Never win! We "+clientname[parseInt(Math.random()*clientname.length)]+". Do you Vanilla?",
      "THIS GAME WAS HAXIED BY "+yourname.get()+", and "+clientname[parseInt(Math.random()*clientname.length)]+"!",
      "hahaha noobs, VanillaClient is sucks, Let's Use " +clientname[parseInt(Math.random()*clientname.length)]+" Client!",
      "gg! you guys client are sucks, Download Modern "+clientname[parseInt(Math.random()*clientname.length)]+" Client! this is Update you gaming performance!"
    ]
    LiquidAd = [
      clientname[parseInt(Math.random()*clientname.length)] + " is Best Client. Download Now.",
      clientname[parseInt(Math.random()*clientname.length)] + " , is totaly Free!",
       "Donate now " +clientname[parseInt(Math.random()*clientname.length)] + " Client!",
       "Sigma Client Is sucks, FREEDOWNLOAD " +clientname[parseInt(Math.random()*clientname.length)] + " Now.",
       "gg! XD this game is rly fast ended! Guys Let's use " + clientname[parseInt(Math.random()*clientname.length)] + ", this's made 4 "+servername+ " Client!",
       "yeah excited won in this game. i'm Used " + clientname[parseInt(Math.random()*clientname.length)] + " Client! Best for grade up pvp experience!!",
       "gg! noobs. don't waste my time. you can't Never win! We "+clientname[parseInt(Math.random()*clientname.length)]+". Do you Vanilla?",
       "hahaha noobs, VanillaClient is sucks, Let's Use " +clientname[parseInt(Math.random()*clientname.length)]+" Client!",
       "gg! you guys client are sucks, Download Modern "+clientname[parseInt(Math.random()*clientname.length)]+" Client! this is Update you gaming performance!"
    ]
    TrulySpeach = [
      "Sigma Client is Good for " +insultword[parseInt(Math.random()*insultword.length)] + " Gift Client",
      "Sigma User Never don't want to know. 'Im scammed.' ",
      "Sigma Need to Know "  +insultword[parseInt(Math.random()*insultword.length)],
      "Paid Client is Good for rich. But Never recommanded Student, Poor. ",
      "Why you using Shit gma? i never understand your thinking. ",
      "i Admit Using Paid Client. (if they good performance), But Sigma is sucks. ",
      "const SigmaClient = sucks",
      "const SigmaClient = shit",
      "const SigmaClient = worstclient",
      "const SigmaClient = Paid",
      "const SigmaClientDev = Scammer",
      "const SigmaClientDev = Fraudsters",
      "const Korean = " + insultword[parseInt(Math.random()*insultword.length)] + "",
      "const Korean = Raqed-Humans",
      "const Korean = !Smart",
    ]
  if(Incjp.get()) {jps = ContJP}else{jps = ""}
    if(randomish.get()) {
      if(AllowBet.get()) {
        if(RandomBet.get()) {
          StB = randomString(RBA.get());
          StA = randomString(RBA.get());
        } else {
          StB = BetStB.get();
          StA = BetStA.get();
        }
      } else {
        StB = "";
        StA = "";
      }
      if(BeforeR.get()) {br = StB + randomString(8) + StA}else {br = ""}
      if(AfterR.get()) { ar = StB + randomString(8) + StA}else {ar = ""}
    }
    switch (spamlist.get()) {
      case "Mineplex":
        message = Mineplex;break;
      case "GameEnd":
        message = GameEnd;break;
      case "LiquidAd":
        message = LiquidAd;break;
      case "TrulySpeach": //like hate speach(propaganda?), im not recommanded using this option. xd! but hope they are true
        message = TrulySpeach;break;
      case "All":
        message = Mineplex,HackedBy,LiquidAd,TrulySpeach;break;
      default:
        message = "please select Profile.";break;
    }
    MSG = br + message[parseInt(Math.random()*message.length)] + ar;
    switch (SpamMode.get()) {
      case "ValueChanged":
        if(!spamlist.get() == "") {mc.thePlayer.sendChatMessage(MSG); spamlist.set("")}break;
      case "AutoSpam":
        if (i ==delay) {mc.thePlayer.sendChatMessage(MSG);delay = Math.floor(Math.random() * ((maxDelay.get()-minDelay.get())+1) + minDelay.get());i=0}else{i+=1}break;
    }
  }
}

/*
//
//hmm...
var Count = -1;
var EndGame;

var scriptName = "Quiter";
var scriptVersion = 1.0;
var scriptAuthor = "tk400.";

function Quiter() {

  var EndGame = value.createInteger("End", 20, 0, 100);
  var AutoQuit = value.createBoolean("AutoQuit", false);

    this.addValues = function(values) {
      values.add(EndGame);
      values.add(AutoQuit);
    }

	this.getName = function () {
		return "Quiter";
	}
	this.getDescription = function () {
		return "Allow you to make playing Time to stop.";
	}
	this.getCategory = function () {
		return "Fun";
	}
  this.onLoad = function () {Count == 0; chat.print("changed to :" + Count)}

  this.onWorld = function() {
    Count += 1;
    chat.print("Now:" + Count)
    if(EndGame.get() == Count) {chat.print("it's time to stop")}
    if((EndGame.get() + 1) <= Count) {chat.print("are you enjoied Cheating? xd but time to stop."); AutoQuit.get() && moduleManager.getModule("Kick").set(true)}
  }

	this.onRender2D = function () {
    mc.ingameGUI.drawCenteredString(mc.fontRendererObj, EndGame.get() + "/" + Count, mc.displayWidth / 4, mc.displayHeight / 2.5, -1)
  }
}

//var Quiter = moduleManager.registerModule(new Quiter)
//function onEnable () {Quiter};
//function onDisable () {moduleManager.unregisterModule(Quiter);};

//
*/



var ModuleManager = moduleManager.registerModule(new ModuleManager)
var TSMM = moduleManager.registerModule(new TSMM);
var HypixelGameChange = moduleManager.registerModule(new HypixelGameChange);
var ChatManager = moduleManager.registerModule(new ChatManager)
//var Quiter = moduleManager.registerModule(new Quiter)

function onEnable() {
  ModuleManager;
  TSMM;
  HypixelGameChange;
  ChatManager;
  //Quiter;
};

function onDisable() {
  moduleManager.unregisterModule(ModuleManager);
  moduleManager.unregisterModule(TSMM);
  moduleManager.unregisterModule(HypixelGameChange);
  moduleManager.unregisterModule(ChatManager);
  //moduleManager.unregisterModule(Quiter);
};

/** thank you for
 * AutoL Script(Used MessageRandomizer System, for ChatManager)
 * FileSpammer Script(Senk Ju) (Used RandomStringer, for ChatManager)
 * Scriptolotl (Scorpion) Used for FileSpammer...?
 * etc...!
 */



//functions?
