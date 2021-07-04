/**
 * 
 * Script of tk400's
 * this script contains ModuleManager, TowerScaffoldzzzz, HypixelGameChanger, Quitter(new) ChatManager(New!).
 * 
 * script for Latest build. (tested on 401b3c5)
 * https://dl.ccbluex.net/skip/lgJeAGuKh9
 * 
 */
var scriptName = "ModuleManager";
var scriptVersion = 1.42;
var scriptAuthor = "shirouto Co-Da- tk400.";

//Modules
var KickModule = moduleManager.getModule("Kick");
var ConSpamModule = moduleManager.getModule("ConsoleSpammer");
var CriticalsModule = moduleManager.getModule("Criticals");
var NoFallModule = moduleManager.getModule("NoFall");
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
var StoESPModule = moduleManager.getModule("StorageESP");
var ESPModule = moduleManager.getModule("ESP");

//Java
LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce").moduleManager;
KillAura = Java.type("net.ccbluex.liquidbounce.features.module.modules.combat.KillAura").class;
Color = Java.type('java.awt.Color');

var servername = '';

var LAB=01

//Packets
//var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
//var clientchat = Java.type("net.minecraft.network.play.client.C01PacketChatMessage");

//Player | Mob States
Potion = Java.type('net.minecraft.potion.Potion');
GuiInventory = Java.type("net.minecraft.client.gui.inventory.GuiInventory");
GuiIChest = Java.type("net.minecraft.client.gui.inventory.GuiChest");

//Blocks
BlockPos = Java.type('net.minecraft.util.BlockPos')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')
AirBlock = Java.type('net.minecraft.block.BlockAir')
AntiSlab = Java.type('net.minecraft.block.BlockSlab')

function ModuleManager() {
  //var WasFallen = false;
  var GaTex = 'LiquidBounce';
  var GaTT = '';
  var GaTexTix = 0;
  var ColourTixes =0;
  var GaTexProgress=0;
  var ColourProgress=0;
  var Rev = false;
  var CRev = false;
  var CCQ = false;
  var Colour="§0";
  var saveconfigname = 'default';
  var MoveDir = 'A';

  var ReadMe = value.createBoolean("ReadMe.js", false);
  var GamingText = value.createBoolean("GamingText", false);
  var GTMode = value.createList("AnimationMode", ["Rainbow", "Gradation"],"Rainbow");
  var TextAnimationMode = value.createList("TextAnimationMode", ["RegisterString", "UnderbarChange","Obfus"],"RegisterString");
  var GraColor = value.createList("GradationColorType", ["Sakura/CherryBlossom","Light","Gold","Green","Blue"],"Rainbow");
  var ColourTix = value.createInteger("ColourTix", 10, 0, 50);
  var TextDelay = value.createInteger("TextDelay", 10, 0, 30);
  var GTDebug = value.createBoolean("DebugInfo", false);
  var height = value.createFloat("Height", 2.5, 0, 50);
  var Width = value.createFloat("Width", 4, 0, 50);
  var Reseter = value.createBoolean("Reseter", false);
  var Profile = value.createList("MMMode", ["Lite", "", "All", ""],"");
  var Text1 = value.createText(">MMSettings", "");
  var SLT = value.createText("CustomTag", "SuperMechaMechaSugooooiModule!");
  var Color2 = value.createText("CustomColor", "a"); //https://minecraft.gamepedia.com/Formatting_codes
  var DCV = value.createBoolean("DebugChat", false);
//var test = value.createBoolean("test", true); //Using on Develop, tset.
  var SpeedJump = value.createBoolean("Speed", true);
  var WASDSpeed = value.createBoolean("AntiHorizontalSpeedStrafing", false);
  var SpeedsDisabler = value.createBoolean("SpeedsDisabler", true);
  var ChangeMode = value.createText("ChangingMode", "Custom");
  var VelLJManage = value.createBoolean("VelLongJump", true);
  var AutoKAJump = value.createBoolean("AutoKAJump", false);
  var ReverseStepFix = value.createBoolean("ReverseStepFix", true);
  var AntiNoCritical = value.createBoolean("AntiNoCritical", false); //Fixes? Not Criticalizing Bug. when you using Critical and NoFall. but idk...
  var AutoFClear = value.createBoolean("AutoFClear", true);
  var Text2 = value.createText("§l>InvModeManager", "");
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
  var AntiESP = value.createBoolean("AntiControlableESP", false);
  var NoMouse = value.createBoolean("NoMouseWhenAttack", false);
  var AntiVoid = value.createBoolean("AntiVoidFallingViaScaffold", false);
  var MinFallDis = value.createFloat("MinFallDistance", 1.5, 0, 30);
  
    this.addValues = function(v) {
      v.add(ReadMe);
      v.add(GamingText);
      v.add(GTMode);
      v.add(TextAnimationMode)
      v.add(GraColor);
      v.add(ColourTix);
      v.add(TextDelay);
      v.add(GTDebug);
      v.add(height);
      v.add(Width);
      v.add(Reseter);
      v.add(Profile);
      v.add(Text1);
      v.add(SLT);
      v.add(Color2);
    //v.add(test);
      v.add(DCV);
      v.add(SpeedsDisabler);
      v.add(ChangeMode)
      v.add(VelLJManage);
      v.add(AutoKAJump);
      v.add(ReverseStepFix);
      v.add(AntiNoCritical);
      v.add(SpeedJump);
      v.add(WASDSpeed)
      v.add(AutoFClear);
      v.add(Text2);
      v.add(Inv);
      v.add(InvList);
      v.add(Text3);
      v.add(RenderSetting);
      v.add(RSCounter);
      v.add(RSMark);
      v.add(Text4);
      v.add(Selection);
      v.add(DSBlock);
      v.add(mode);
      v.add(customid);
      v.add(fucker);
      v.add(EnableFucker);
      v.add(blockesp);
      v.add(EnableESP);
      v.add(AutoLeave);
      v.add(Text5);
      v.add(LoadConfig);
      v.add(SaveConfig);
      v.add(SavingName);
      v.add(DSConfig);
      v.add(AntiESP);
      v.add(NoMouse);
      v.add(AntiVoid)
    };

	this.getName = function () {
		return "ModuleManager";
	};
	this.getDescription = function () {
		return "Management Disable, Setting, Modules. A Simple Script";
	};
	this.getCategory = function () {
		return "Player";
  };
  this.getTag = function() {
    return SLT.get();
  };
  this.onEnabled = function () {
  }
	this.onUpdate = function () {
    if(ReadMe.get()) {
      chat.print("//==> Module manager<==//\n> this Script was coded By tk400.\n互 hm..")
      ReadMe.set(false);
    }
    if(!Profile.get() == "") {
      switch (Profile.get()) {
        case "Lite": break;
        case "All": break;
      }
      Profile.set("");
    }
    if(Reseter.get()) {
      GaTexTix = 0;
      Rev = false;
      CRev = false;
      GaTex = '';
      ColourTixes =0;
      GaTexProgress=0;
      ColourProgress=0;
      chat.print("§4[DEBUG]§1Reseted");
      Reseter.set(false);
    }
    if(GamingText.get()) {//ehhhh i think this is not good for your PC?(im a not Computer Nerd)
      GaTexTix+=1;ColourTixes+=1;//Counting Ticks
      if(GaTexTix==TextDelay.get()) {
        if(Rev) {GaTexTix=0;GaTexProgress-=1}else{GaTexTix=0;GaTexProgress+=1}
      }
      if(ColourTixes==ColourTix.get()) {
        if(CRev) {ColourTixes=0;ColourProgress-=1}else{ColourTixes=0;ColourProgress+=1}
        //i think this is stup1d making code. hmm.. sadly.
      }
      switch (TextAnimationMode.get()) {
        case "RegisterString":
          switch (GaTexProgress) {
            case 0:
              GaTT ='L';Rev=false;break;
            case 1:
              GaTT ='Li';break;
            case 2:
              GaTT ='Liq';break;
            case 3:
              GaTT ='Liqu';break;
            case 4:
              GaTT ='Liqui';break;
            case 5:
              GaTT ='Liquid';break;
            case 6:
              GaTT ='LiquidB';break;
            case 7:
              GaTT ='LiquidBo';break;
            case 8:
              GaTT ='LiquidBou';break;
            case 9:
              GaTT ='LiquidBoun';break;
            case 10:
              GaTT ='LiquidBounc';break;
            case 11:
              GaTT ='LiquidBounce';Rev = true;break;
          }
          break;
        case "UnderbarChange":
          switch (GaTexProgress) {
            case 0:
              GaTT ='_iquidBounce';Rev=false;break;
            case 1:
              GaTT ='L_quidBounce';break;
            case 2:
              GaTT ='Li_uidBounce';break;
            case 3:
              GaTT ='Liq_idBounce';break;
            case 4:
              GaTT ='Liqu_dBounce';break;
            case 5:
              GaTT ='Liqui_Bounce';break;
            case 6:
              GaTT ='Liquid_ounce';break;
            case 7:
              GaTT ='LiquidB_unce';break;
            case 8:
              GaTT ='LiquidBo_nce';break;
            case 9:
              GaTT ='LiquidBou_ce';break;
            case 10:
              GaTT ='LiquidBoun_e';break;
            case 11:
              GaTT ='LiquidBounc_';Rev = true;break;
          }
          break;
        case "Obfus":
          switch (GaTexProgress) {
            case 0:
              GaTT ='§kLiquidBounce';Rev=false;break;
            case 1:
              GaTT ='L§kiquidBounce';break;
            case 2:
              GaTT ='Li§kquidBounce';break;
            case 3:
              GaTT ='Liq§kuidBounce';break;
            case 4:
              GaTT ='Liqu§kidBounce';break;
            case 5:
              GaTT ='Liqui§kDBounce';break;
            case 6:
              GaTT ='Liquid§kBounce';break;
            case 7:
              GaTT ='LiquidB§kounce';break;
            case 8:
              GaTT ='LiquidBo§kunce';break;
            case 9:
              GaTT ='LiquidBou§knce';break;
            case 10:
              GaTT ='LiquidBoun§kce';break;
            case 11:
              GaTT ='LiquidBounc§ke';break;
            case 12:
              GaTT ='LiquidBounce';Rev = true;break;
          }
        }
      switch (GTMode.get()) {
        case "Rainbow":
            switch (ColourProgress) {
              case 0:
                Colour = "§4";CRev=false;break;
              case 1:
                Colour = "§c";break;
              case 2:
                Colour = "§d";break;
              case 3:
                Colour = "§5";break;
              case 4:
                Colour = "§4";break;
              case 5:
                Colour = "§5";break;
              case 6:
                Colour = "§1";break;
              case 7:
                Colour = "§9";break;
              case 8:
                Colour = "§b";break;
              case 9:
                Colour = "§5";CRev=true;break;
            }
            break;
        case "Gradation":
          switch (GraColor.get()) {
            case "Sakura/CherryBlossom": //hm its not working now. better to Adding Customized Color(Hex)
              if(ColourTixes==ColourTix.get()) {if(CCQ) {Colour="§5"; CCQ=false}else{Colour="§7";CCQ=true}}
              break;
            case "Light": //this toooooooooooo
              switch (ColourProgress) {
                case 0:
                  Colour = "§f";CRev=false;break;
                case 1:
                  Colour = "§7";break;
                case 2:
                  Colour = "§8";CRev=true;break;
              }
              break;
            case "Gold": //Gold! Gold! Gold! 金!金!金!
              if(ColourTixes==ColourTix.get()) {if(CCQ) {Colour="§2"; CCQ=false}else{Colour="§a";CCQ=true}}
              break;
            case "Green":
              if(ColourTixes==ColourTix.get()) {if(CCQ) {Colour="§2"; CCQ=false}else{Colour="§a";CCQ=true}}
              break;
            case "Blue":
              switch (ColourProgress) {
                case 0:
                  Colour = "§1";CRev=false;break;
                case 1:
                  Colour = "§9";break;
                case 3:
                  Colour = "§3";break;
                case 4:
                  Colour = "§b";CRev=true;break;
              }
            }
            break;
      }
      // Set GaTex.
      GaTex = Colour + GaTT;
    }
    //Manage SpeedJump /Fix Jump Boosting
      if(SpeedJump.get()) {
        if(SpeedModule.getState() && mc.thePlayer.onGround) {
          if(mc.gameSettings.keyBindJump.pressed) {
            if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
              mc.gameSettings.keyBindJump.pressed = false; DC(DCV.get(),"MM",Color2.get(),"Disabled Jump.", true);
            }}}};
    //WASDSpeed 
    if(WASDSpeed.get()) { //==> this code is working, but i think Inefficient. good for Detecting Faster Strafing Cheat <==//
      DCV.get() && chat.print(MoveDir)
      if(SpeedModule.getState()) {
        switch (MoveDir) {
          case 'F':
            if(mc.gameSettings.keyBindBack.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'R':
            if(mc.gameSettings.keyBindBack.pressed || mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindLeft.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'L':
            if(mc.gameSettings.keyBindBack.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindForward.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'B':
            if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'FR':
            if(mc.gameSettings.keyBindBack.pressed || mc.gameSettings.keyBindLeft.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'FL':
            if(mc.gameSettings.keyBindBack.pressed || mc.gameSettings.keyBindRight.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'BL':
            if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
            break;
          case 'BR':
            if(mc.gameSettings.keyBindLeft.pressed || mc.thePlayer.keyBindForward.pressed) {
              mc.gameSettings.keyBindBack.pressed=false;mc.gameSettings.keyBindRight.pressed=false;mc.gameSettings.keyBindLeft.pressed=false;mc.gameSettings.keyBindForward.pressed=false;
            }
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
    if(SpeedsDisabler.get() && SpeedModule.getState() || LJModule.getState()) {if(FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState()) {SpeedModule.setState(false) || LJModule.setState(false); DC(DCV.get(),"MM",Color2.get(),"Disabled Speed or LongJump.",false)}};
    //VelLJ /Hypixel Fix?
    if(VelLJManage.get()) {
      if(VelocityModule.getState()) {
        if(LJModule.getState()) {VelocityModule.setState(false)}
      }else if(!LJModule.getState()){VelocityModule.setState(true)}
    };// ???
    //ReverseStepFix
    if(ReverseStepFix.get()) {
     if(FlyModule.getState() && RSModule.getState()) {RSModule.setState(false)}
      if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {RSModule.setState(false)}else{RSModule.setState(true)}
    };
    //AntiNoCritical
    if(AntiNoCritical.get()) {
      if(!NoFallModule.getState() && mc.thePlayer.fallDistance >= 2.6){NoFallModule.setState(true)}
    }
    //AutoKAJump
    if(AutoKAJump.get() && KAModule.getState() && !mc.gameSettings.keyBindJump.pressed) {mc.gameSettings.keyBindJump.pressed = true};

  /* Manage Modules Setting */

      //RenderSetter /fix Replaced by other user's Setting
    if(RenderSetting.get()) {
      //Counter
      if(RSCounter.get()) {if(!ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(true)};if(!TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(true)}
    }else{
      if(ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(false)}; if(TowerModule.getValue("Counter").get()) {TowerModule.getValue("Counter").set(false)}}
      //Mark
      if(RSMark.get() && !ScaffoldModule.getValue("Mark").get()) {ScaffoldModule.getValue("Mark").set(true)}else{ScaffoldModule.getValue("Mark").set(false)}
    };
    //Inv /This is ???
    if(Inv.get()) {
      switch (InvList.get()) {
        case "None":
          if(InvModule.getValue("invOpen").get() == true) {InvModule.getValue("invOpen").set(false)}; if(InvModule.getValue("SimulateInventory").get()==true) {InvModule.getValue("SimulateInventory").set(false)}
          if(InvAAModule.getValue("invOpen").get() == true) {InvAAModule.getValue("invOpen").set(false)}; if(InvAAModule.getValue("SimulateInventory").get()==true) {InvAAModule.getValue("SimulateInventory").set(false)}
          break;
        case "Open":
          if(InvModule.getValue("invOpen").get() == false) {InvModule.getValue("invOpen").set(true)}; if(InvModule.getValue("SimulateInventory").get()==true) {InvModule.getValue("SimulateInventory").set(false)}
          if(InvAAModule.getValue("invOpen").get() == false) {InvAAModule.getValue("invOpen").set(true)}; if(InvAAModule.getValue("SimulateInventory").get()==true) {InvAAModule.getValue("SimulateInventory").set(false)}
          break;
        case "Simulate":
          if(InvModule.getValue("invOpen").get() == true) {InvModule.getValue("invOpen").set(false)}; if(InvModule.getValue("SimulateInventory").get()==false) {InvModule.getValue("SimulateInventory").set(true)}
          if(InvAAModule.getValue("invOpen").get() == true) {InvAAModule.getValue("invOpen").set(false)}; if(InvAAModule.getValue("SimulateInventory").get()==false) {InvAAModule.getValue("SimulateInventory").set(true)}
          break;
        case "Both":
          if(InvModule.getValue("invOpen").get() == false) {InvModule.getValue("invOpen").set(true)}; if(InvModule.getValue("SimulateInventory").get()==false) {InvModule.getValue("SimulateInventory").set(true)}
          if(InvAAModule.getValue("invOpen").get() == false) {InvAAModule.getValue("invOpen").set(true)}; if(InvAAModule.getValue("SimulateInventory").get()==false) {InvAAModule.getValue("SimulateInventory").set(true)}
          break;
      }
    }
    //Selection
    if(Selection.get()) {
      id = [26,92,122,9,116,58,customid.get()][["Bed", "Cake", "Dragon_Egg", "Obsidian","Enchanting_Table","Crafting_Table","Custom"].indexOf(mode.get())];
    if(DSBlock.get()) {
      chat.print("[DEBUG] Detected :"+serverip)
      switch (serverip) {
        case ".hypixel.net" || "hypixel.cn":
          FuckerModule.getValue("Block").set(26);
          BlockESPModule.getValue("Block").set(26);break;
        case ".mineplex.com":
          FuckerModule.getValue("Block").set(92);
          BlockESPModule.getValue("Block").set(92);break;
        case "hypixel.net" || "hypixel.cn":
          FuckerModule.getValue("Block").set(26);
          BlockESPModule.getValue("Block").set(26);break;
        case ".cubecraft.net" || "cubecraft.net":
          FuckerModule.getValue("Block").set(122);
          BlockESPModule.getValue("Block").set(122);break;
        case ".ccbluex.net":
          chat.print("DEV | Checked!");
          FuckerModule.getValue("Block").set(1);
          BlockESPModule.getValue("Block").set(1);break;
      }
    }else{
      FuckerModule.getValue("Block").set(id);
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
      }else{chat.print("i have no 'Idea', sorry.")}
    }
    if(SaveConfig.get()) {SaveConfig.set(false); commandManager.executeCommand(".localautosettings save " + servername + " all"); chat.print("§4Debug[SaveConfig]§f: Saved for §l" + servername)};
    //AntiCESP
    if(AntiESP.get()) {
      if(ESPModule.getValue("Mode").get() == "ShaderOutline" || ESPModule.getValue("Mode").get() == "ShaderGlow") {ESPModule.getValue("Mode").set("2D");chat.print("Detected")}
      if(StoESPModule.getValue("Mode").get() =="ShaderOutline" || StoESPModule.getValue("Mode").get() =="ShaderGlow") {StoESPModule.getValue("Mode").set("2D");chat.print("detected")}
    }
  }

  this.onAttack = function () {
    if(NoMouse.get()) {
      mc.gameSettings.keyBindUseItem.pressed = mc.gameSettings.keyBindAttack.pressed = false;
    }
    //AntiNoCritical
    if(AntiNoCritical.get()) {
      NoFallModule.getState() && NoFallModule.setState(false);
      }
  };

  this.onRender2D = function() {
    if(GamingText.get()) {mc.ingameGUI.drawCenteredString(mc.fontRendererObj, GaTex, mc.displayWidth / Width.get(), (mc.displayHeight / height.get()) + 8, -1)}
  }
  this.onMotion = function () {
    if(AntiVoid.get()) {
    }
  }

  this.onWorld = function () {
    //This is not Module, But i think this is useful (Ex:Mineplex) :)
    if(AutoFClear.get()) {commandManager.executeCommand(".friends clear")}
    //Check AutoLeave was Disabled.
    if(AutoLeave.get()) {if(!AutoLeaveModule.getState()) {AutoLeaveModule.setState(true)}}
    //Used for ConfigSaver
    var serverip = mc.getCurrentServerData().serverIP;
      switch (serverip) {
        case "*.ccbluex.net": servername = 'testccbluex'; break;
        case "*.hypixel.net" || "hypixel.net": servername = 'hypixel'; break;
        case "*.cubecraft.net" || "cubeaft.net": servername = 'cubecraft'; break;
        case "*.mineplex.com": servername = 'mineplex'; break;
        default: servername = 'undetected';break;
      }
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
  var i=0;
  var r=0;
  var z=0;
  var CoolTime=0;
  var CoolTimeB=false;
  
  var Color = value.createText("TSMMCustomColor", "a");
  var DCV = value.createBoolean("TSMMDebugChat", false);
  var BR = value.createBoolean("BodyReverser", false);
  var TSMMMode = value.createList("ScaffoldJump", ["Off", "Sprint", "XZR", "VClip"], "Off");
  var PotionTower = value.createBoolean("PotionTower", false);
  var SCATower = value.createBoolean("UseScaffoldsLegitTower", false);
  var TowerDelayer = value.createBoolean("TowerDelayer", false);
  var TDDelay = value.createInteger("Delay", 15, 0, 100);
  var CT = value.createInteger("CoolTime", 10, 0, 20);
  var ForceSprint = value.createBoolean("ForceSprint", true);
  var JumpScaffolding = value.createBoolean("JumpScaffolding", true); //Beta
  var JSMode = value.createList("Type", ["SimplyJump", "Motion", "TP"], "SimplyJump");
  var JSV = value.createFloat("Value", 0.42, -1, 2);
  var AntiHalf = value.createBoolean("AntiHalf", false);
  var WithBlinkAPI = value.createBoolean("WithLB'sBlink", false);
  var AutoSneak = value.createBoolean("AutoSneak", false);
  var MinDelay = value.createFloat("MinDelay", 5, 0, 30);
  var MaxDelay = value.createFloat("MaxDelay", 10, 0, 30);
  var RAutoSneak = value.createList("ReleaseKeyMode", ["Instant","Delay"], "Delay");
  var RMinDelay = value.createFloat("ReleaseMinDelay", 0, 0, 3);
  var RMaxDelay = value.createFloat("ReleaseMaxDelay", 1, 0, 3);
  var MLGScaffold = value.createBoolean("MLGSCaffold", false);
  var MLGSprint = value.createBoolean("AfterSprint", true);
  var NoXZMotion = value.createList("NoXZMotion", ["Off", "MotionZero", "NoKeyBoard", "BothAlgorism"], "Off");

  this.addValues = function(v) {
    v.add(Color);
    v.add(DCV);
    v.add(BR);
    v.add(TSMMMode);
    v.add(PotionTower);
    v.add(SCATower);
    v.add(TowerDelayer);
    v.add(TDDelay);
    v.add(CT);
    v.add(ForceSprint);
    v.add(JumpScaffolding);
    v.add(JSMode);
    v.add(JSV);
    v.add(AntiHalf);
    v.add(WithBlinkAPI);
    v.add(AutoSneak);
    v.add(MinDelay)
    v.add(MaxDelay)
    v.add(RAutoSneak);
    v.add(RMinDelay);
    v.add(RMaxDelay);
    v.add(MLGScaffold);
    v.add(MLGSprint);
    v.add(NoXZMotion);
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
    i=0;
    r=0;
    z=0;
    CoolTime=0;
    CoolTimeB=false;
    delay = DelayCal(MaxDelay.get(),MinDelay.get()); RDelay = DelayCal(MaxDelay.get(),MinDelay.get())
    if(BR.get()) {mc.thePlayer.rotationYaw += 180}
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
    if(JumpScaffolding.get()) {TSMMMode.set("Off"); if(!ScaffoldModule.getValue("SameY").get()) {ScaffoldModule.getValue("SameY").set(true)}}
    // //
    WithBlinkAPI.get() && BlinkModule.setState(true);
    DC(DCV.get(),"TS",Color.get(),"§a+Enabled TSMM and Scaffold and Tower",false)
  };
  this.onUpdate = function () {
    if(TowerDelayer.get()) {
      if(CoolTimeB) {CoolTime+=1;
        if(CT.get()==CoolTime) {CoolTime=0;CoolTimeB=false}else{mc.gameSettings.keyBindJump.pressed = false;DCV.get() && chat.print("you are now in CoolTime")}
      }
      if(TowerModule.getState()) {
        if(TDDelay.get()==z) {
          z=0;
          CoolTimeB = true; CoolTime=0;
          TowerModule.setState(false);
          DCV.get() && chat.print("test");
        }else{z+=1}
      }
    }
    if(!ScaffoldModule.getState()) {
      if(!mc.gameSettings.keyBindJump.pressed) {ScaffoldModule.setState(true); TowerModule.setState(false);DC(DCV.get(),"TS",Color.get(),"Enabled Scaffold, Disabled Tower",false)}
    }else if(!TowerModule.getState()) {
      if(!mc.gameSettings.keyBindJump.pressed) {
        if(TSMMMode.get() == "Sprint") {ScaffoldModule.getValue("Sprint").set(true)}
      }else if(mc.thePlayer.onGround) {
          switch (TSMMMode.get()) {
            case "Sprint":
              ScaffoldModule.getValue("Sprint").set(false);
              break;
            case "XZR":
              mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0;
              break;
            case "VClip":
              mc.thePlayer.jump(false); mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1, mc.thePlayer.posZ);
              break;
          }
        }
    }
    //if press mc.gameSettings.keyBindJump.pressed = enable Tower, and Managing
    if(!SCATower.get()) {
  if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {
      if(PotionTower.get()) {
        if(!mc.thePlayer.isPotionActive(Potion.jump)) {ScaffoldModule.setState(false); TowerModule.setState(true); DC(DCV.get(),"TS",Color.get(),"Enabled Speed.",true)}}else if(!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed)
          {ScaffoldModule.setState(false); TowerModule.setState(true);DC(DCV.get(),"TS",Color.get(),"Enabled Tower, Disabled Scaffold")};
  }}
    if(TowerModule.getState()) {
      switch (NoXZMotion.get()) {
        case "MotionZero":
          mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0;
          break;
        case "NoKeyBoard":
          mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
          break;
        case "BothAlgorism":
          mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
          mc.thePlayer.motionX = 0; mc.thePlayer.motionZ = 0;
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
          case "SimplyJump":mc.thePlayer.jump();break;
          case "Motion":mc.thePlayer.motionY = JSV.get();break;
          case "TP":mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + JSV.get(), mc.thePlayer.posZ);break;
        }}}
    }
  //MLGScaffold
    if(MLGScaffold.get()) {mc.gameSettings.keyBindSneak.pressed = true; mc.gameSettings.keyBindJump.pressed = false; ScaffoldModule.getValue("Sprint").set(false); SprintModule.setState(false); if(mc.thePlayer.onGround) {mc.thePlayer.jump()}; if(SprintModule.getState()) {SprintModule.setState(false)}}
  };
  this.onMove = function () {
    if (mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) {
    if(BR.get()) {//Reverse Forward to BackWard
      if(mc.gameSettings.keyBindForward.pressed) {
         mc.gameSettings.keyBindBack.pressed = true;
         mc.gameSettings.keyBindForward.pressed = false;
          }
        }
    //AutoSneaker
      if(AutoSneak.get()) {
        if(!mc.gameSettings.keyBindJump.isKeyDown()) {
          if(i == delay) {mc.gameSettings.keyBindSneak.pressed = true;delay = DelayCal(MaxDelay.get(),MinDelay.get());i=0;
          }else{
            switch (RAutoSneak.get()) {
              case "Instant":
                mc.gameSettings.keyBindSneak.pressed = false;break;
              case "Delay":
                r+=0;
                RDelay =DelayCal(RMaxDelay.get(), RMinDelay.get());
                if(r==RDelay) {mc.gameSettings.keyBindSneak.pressed = false}break;
            }i+=1}
          }
        }
      }
    }
  this.onDisable = function() {
    DC(DCV.get(),"TSMM",Color.get(),"Disabled TSMM.",false)
    if(BR.get()) {mc.thePlayer.rotationYaw += 180} /*Fix Head Rotation. only this code...*/ 
    ScaffoldModule.setState(false); TowerModule.setState(false);
    if(MLGSprint.get()) {SprintModule.setState(true)}else{SprintModule.setState(false)}
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
    this.addValues = function(v) {
      v.add(Hub);
      v.add(favorite);
      v.add(BedWars);
      v.add(SkyWars);
      v.add(murder);
      v.add(UHC);
      v.add(MegaWall);
      v.add(Custom);
      v.add(CTex);
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

//Add Hypixel Bypasser later and AutoReplay? xd
function ChatManager() {
  var jps = ""
  var br = ""
  var ar = ""
  ContJP = ["あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン　"]
  clientnameEN = ["LiqBounce", "Bounce of Liquidz", "LaquidBounce", "LiquidBounce", "Bounce of liquid", "LIQUIDBOUNCE"]
  insultEN = ["Fools", "Foolishes", "Dumbs", "Idiots", "GAYMER", "Loser", "GarbageHuman"]
  insultJA = ["馬鹿","間抜け","愚者","クソ雑魚","阿呆","あほ","馬鹿者","キチガイ","穀潰し","クソニート","無能","ボケナス","ゴミ","カス","役立たず","愚か者","社会の癌","社会不適合者","染色体x3マン","短小"]
  ClientNameJA = ["リキッドバウンス", "リキッドバウンス。net","りきっどばうんす♡","リクィッドバウンス","リキッドバウンス"]
  var i = 0;
  var delay = 0;

  var SpamMode = value.createList("Mode", ["onEnabled", "ValueChanged", "AutoSpam", "test.ccbluex.netBlockGiver"], "ValueChanged");
  var spamlist = value.createList("SpamProfile", ["Mineplex", "GameEnd", "Thx4Server", "LiquidAd", "Gaming", "DefaultLiquidSpammer", "All", "Custom//", ""], "");
  var yourname = value.createText("hackedBy", "[EnterNameHere]");
  var MaxDelay = value.createInteger("MaxDelay", 400,0,5000); // 10 = 1s.
  var MinDelay = value.createInteger("MinDelay", 100,0,5000);
  var randomish = value.createBoolean("Ramdomizer", true);
  var BeforeR = value.createBoolean("Before", false);
  var AfterR = value.createBoolean("After", false);
  var Incjp = value.createBoolean("#IncludeJapaneseString", false);
  var AllowBet = value.createBoolean("Between", false); //Im Recommanding set false.
  var RandomBet = value.createBoolean("RandomBetween", false);
  var RBA = value.createInteger("Amount", 1,1,5);
  var BetStB = value.createText("StringBefore", ">");
  var BetStA = value.createText("StringAfter", "|");

    this.addValues = function(v) {
      v.add(SpamMode);
      v.add(spamlist);
      v.add(yourname);
      v.add(MaxDelay);
      v.add(MinDelay);
      v.add(randomish);
      v.add(BeforeR);
      v.add(AfterR);
      v.add(Incjp);
      v.add(AllowBet);
      v.add(RandomBet);
      v.add(RBA);
      v.add(BetStB);
      v.add(BetStA);
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
    spamlist.set() == "";
    i=0;
    delay = Math.floor(Math.random() * ((MaxDelay.get()-MinDelay.get())+1) + MinDelay.get());
    if(SpamMode.get() == "onEnabled") {messageCont(spamlist.get(),yourname.get(),randomish.get(),BeforeR.get(),AfterR.get(),Incjp.get(),AllowBet.get(),RandomBet.get(),RBA.get(),BetStB.get(),BetStA.get())}
  }
	this.onUpdate = function () {
    switch (SpamMode.get()) {
      case "ValueChanged":
        if(!spamlist.get() == "") {messageCont(spamlist.get(),yourname.get(),randomish.get(),BeforeR.get(),AfterR.get(),Incjp.get(),AllowBet.get(),RandomBet.get(),RBA.get(),BetStB.get(),BetStA.get()); spamlist.set("")}break;
      case "AutoSpam":
        if (i ==delay) {messageCont(spamlist.get(),yourname.get(),randomish.get(),BeforeR.get(),AfterR.get(),Incjp.get(),AllowBet.get(),RandomBet.get(),RBA.get(),BetStB.get(),BetStA.get());delay =DelayCal(MaxDelay.get(),MinDelay.get());i=0}else{i+=1}break;
      case "test.ccbluex.netBlockGiver":
        if (i ==50) {mc.thePlayer.sendChatMessage("/give planks 64");i=0}else{i+=1}break;
    }
  }
}

function tk400sAdditonalModule() {
  var ResetTimer = false;

  var DCV = value.createBoolean("DebugChat", false);
  var Color = value.createText("Color", "6");
  var values = value.createText("values", "");
  var DelayTick = value.createInteger("DelayTicks", 1, 0, 30);
  var Timer = value.createFloat("Timer", 0.1, 0, 10);
  var TP = value.createFloat("TP", 0.05, 0, 1);
  var Motion = value.createFloat("Motion", 0.1, 0, 1);
  var Criticals = value.createList("Criticals", ["Off", "Jump", "SpeedModule", "TP", "Motion", "FastJump/Motion", "FastJump/TP","FastJump/Timer"], "Off");
  var WithJump = value.createBoolean("WithJump", false);
  var ClimbSpeed = value.createList("ClimbSpeed", ["Off", "TP", "Motion", ""], "Off");
  var BlockAnimation = value.createBoolean("BlockAnimation", false);
//var SWH = value.createBoolean("SingleWorldHack", false); //Just Modify
  var animation = value.createFloat("Animation", 0.75, 0, 1);
  var animation2 = value.createFloat("Animation2", 0.75, 0, 1);
  var AutoLeaver = value.createBoolean("AutoLeave", false);
  var WhenHealth = value.createFloat("Health", 5,0,20);
  var ALMode = value.createList("ALMode", ["Custom", "Lobby"],"Custom");
  var ReJoinServer = value.createList("ALServer", ["Hypixel", "Cubecraft","?"],"");
  var LMethod = value.createList("LeaveMethod", ["Command", "ConsoleSpammer/Payload","ConsoleSpammer/MineSecure", "RandomizedPos", "RandomizedMotion","CommandSpamKick","KickModuleAPI"],"Command");
  //var AntiTypo = value.createBoolean("AntiTypo", true);

    this.addValues = function(v) {
      v.add(DCV);
      v.add(Color);
      v.add(values);
      v.add(DelayTick);
      v.add(Timer);
      v.add(TP);
      v.add(Motion);
      v.add(Criticals);
      v.add(WithJump);
      v.add(ClimbSpeed);
      v.add(BlockAnimation);
    //v.add(SWH);
      v.add(animation);
      v.add(animation2);
      v.add(AutoLeaver);
      v.add(WhenHealth);
      v.add(ALMode);
      v.add(ReJoinServer);
      v.add(LMethod)
    //v.add(AntiTypo);
    }

	this.getName = function () {
		return "tk400sAdditonalModule";
	}
	this.getDescription = function () {
		return "Moved from MM.";
	}
	this.getCategory = function () {
		return "Player";
	}

  this.onEnable = function() {
  }

	this.onUpdate = function () {
    //moment Restener
    if(Criticals.get() == "FastJump/Timer") {if(ResetTimer) {if(mc.thePlayer.fallDistance || mc.thePlayer.onGround) {{mc.timer.timerSpeed = 1;ResetTimer=false; chat.print("Timer has reset")}}}}
    if(mc.thePlayer.isOnLadder()) {
      switch (ClimbSpeed.get()) {
        case "TP":
          mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ);break;
        case "Motion":
          mc.thePlayer.motionY + Motion.get();break;
      }
    }
    //if(SWH.get()) {
    //}
    if(AutoLeaver.get()) {
      if(mc.thePlayer.getHealth() <= WhenHealth.get()) {
        switch (LMethod.get()) {
          case "Command":
            switch (ALMode.get()) {
              case "ReJoin":
                mc.thePlayer.sendChatMessage("/")
                break;
              case "Hub":
                mc.thePlayer.sendChatMessage("/Hub")
                break;
            }
            break;
          case "ConsoleSpammer/Payload":
            ConSpamModule.getValue("Mode").set("Payload");
            ConSpamModule.getValue("Delay").set(0);
            ConSpamModule.setState(true);
            break;
          case "ConsoleSpammer/MineSecure":
            ConSpamModule.getValue("Mode").set("MineSecure");
            ConSpamModule.getValue("Delay").set(0);
            ConSpamModule.setState(true);
            break;
          case "RandomizedPos":
            mc.thePlayer.posX = DelayCal(0, 255);
            mc.thePlayer.posY = DelayCal(0, 255);
            mc.thePlayer.posZ = DelayCal(0, 255);
            break;
          case "RandomizedMotion":
            mc.thePlayer.motionX = DelayCal(0, 255);
            mc.thePlayer.motionY = DelayCal(0, 255);
            mc.thePlayer.motionZ = DelayCal(0, 255);
            break;
          case "CommandSpamKick":
            mc.thePlayer.sendChatMessage("/" + randomString(Math.floor(Math.random() * ((50-1)+1) + 1)))
            break;
          case "KickModuleAPI":
            KickModule.setState(true);
            break;
        }
      }
    }
  }
  this.onMotion = function () {
    if(BlockAnimation.get()){
      //if(mc.currentScreen instanceof GuiInventory || mc.currentScreen instanceof GuiIChest) {}else{
         //Fix? canceling Opening Inv.
        LiquidBounce.getModule(KillAura).blockingStatus && (mc.thePlayer.swingProgress = animation.get());
    }
  }
  this.onAttack = function () {
    if(mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0 && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
      switch (Criticals.get()) {
        case "Jump":
          SpeedModule.setState(false);
          mc.thePlayer.jump();
          break;
        case "SpeedModule":
          if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
            if(!mc.gameSettings.keyBindBack.pressed && KAModule.getState() && !SpeedModule.getState() && !LJModule.getState() && !ScaffoldModule.getState() && !TowerModule.getState()) {SpeedModule.setState(true); DC(DCV.get(),"AD",Color.get(),"Enabled Speed.",true)}}else{
          WithJump.get() && mc.thePlayer.jump();
            };
          break;
        case "TP":
          mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += TP.get(), mc.thePlayer.posZ);
          break;
        case "Motion":
          mc.thePlayer.motionY += Motion.get();
          break;
        case "FastJump/Motion":
          mc.thePlayer.jump();
          if(!mc.thePlayer.fallDistance) {mc.thePlayer.motionY += Motion.get()};
          break;
        case "FastJump/TP":
          mc.thePlayer.jump();
          if(!mc.thePlayer.fallDistance) {mc.thePlayer.posY += TP.get()};
          break;
      }};
      if(Criticals.get() == "FastJump/Timer") {
        if(!mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0 && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
          mc.thePlayer.onGround && mc.thePlayer.jump();
          if(!mc.thePlayer.fallDistance && !mc.thePlayer.onGround) {mc.timer.timerSpeed=Timer.get();ResetTimer=true;chat.print("DEBUG|TIMERED")};
        }
      }
  }
  /*this.onPacket = function (eventData) {
    if(AntiTypo.get()) {
      if (packet instanceof clientchat) {
      var packet = eventData.getPacket();
      if (packet.message.match("autOL" || "autol" || "utoL" || "utOL")) {
        eventData.cancelEvent();
        chat.print("§c[Debug] §7 Event(Chatpacket) was canceled");
      }
      if (packet.message.contains("antitypo")) {
        eventData.cancelEvent();
        chat.print("a")
      }
      }
    }
  }*/

  this.onDisable = function() {
  }
}


function MCMusicPlayer() {
  var soviets =0;

  var PlayingMusic = value.createList("Music", ["Roup", "Soviet", ""], "SovietMusic"); //i want create another template. but...hm
  var Volume = value.createFloat("Volume", 10, 0, 255);

    this.addValues = function(v) {
      v.add(PlayingMusic);
      v.add(Volume);
    }

	this.getName = function () {
		return "MCMusicPlayer";
	}
	this.getDescription = function () {
		return "Allow you to hear Music. But its played by Minecraft Sounds.";
	}
	this.getCategory = function () {
		return "Fun";
	}

  this.onEnable = function() {
    playSound("random.anvil_use", 10, 1);
  }

	this.onUpdate = function () {
    switch (PlayingMusic.get()) {
      case "Soviet":
        if(soviets >= 216){soviets =0}else{soviets+=1}
        switch (soviets) {
        case soviets > 0 && soviets < 30:
           playSound("note.harp", Volume.get(), 1.7);break;
        case 40:
           playSound("note.harp", Volume.get(), 1.3);break;
        case 55:
           playSound("note.harp", Volume.get(), 1.7);break;
        case 65:
           playSound("note.harp", Volume.get(), 1.3);break;
        case 75:
           playSound("note.harp", Volume.get(), 1.4);break;
        case 82:
           playSound("note.harp", Volume.get(), 1.6);break;
        case 90 || 95:
           playSound("note.harp", Volume.get(), 1.1);break;
        case 100:
           playSound("note.harp", Volume.get(), 1.4);break;
        case 115:
           playSound("note.harp", Volume.get(), 1.3);break;
        case 125:
           playSound("note.harp", Volume.get(), 1.2);break;
        case 135:
           playSound("note.harp", Volume.get(), 1.3);break;
        case 145:
           playSound("note.harp", Volume.get(), 0.85);break;
        case 155:
           playSound("note.harp", Volume.get(), 0.85);break;
        case 165 || 180:
           playSound("note.harp", Volume.get(), 0.95);break;
        case 190:
           playSound("note.harp", Volume.get(), 1.05);break;
        case 200:
           playSound("note.harp", Volume.get(), 1.15);break;
        case 215:
           playSound("note.harp", Volume.get(), 1.25);break;
        }
        break;
      }
  }

  this.onDisable = function() {
  }
}


var ModuleManager = moduleManager.registerModule(new ModuleManager)
var TSMM = moduleManager.registerModule(new TSMM);
var HypixelGameChange = moduleManager.registerModule(new HypixelGameChange);
var ChatManager = moduleManager.registerModule(new ChatManager)
//var Quiter = moduleManager.registerModule(new Quiter)
var tk400sAdditonalModule = moduleManager.registerModule(new tk400sAdditonalModule)
var MCMusicPlayer = moduleManager.registerModule(new MCMusicPlayer)

function onEnable() {
  ModuleManager;
  TSMM;
  HypixelGameChange;
  ChatManager;
  //Quiter;
  tk400sAdditonalModule;
  MCMusicPlayer;
};

function onDisable() {
  moduleManager.unregisterModule(ModuleManager);
  moduleManager.unregisterModule(TSMM);
  moduleManager.unregisterModule(HypixelGameChange);
  moduleManager.unregisterModule(ChatManager);
  //moduleManager.unregisterModule(Quiter);
  moduleManager.unregisterModule(tk400sAdditonalModule);
  moduleManager.unregisterModule(MCMusicPlayer);
};

/**
 * thank you for
 * AutoL Script(Used MessageRandomizer System, for ChatManager)
 * FileSpammer Script(Senk Ju) (Used RandomStringer, for ChatManager)
 * AutoBot Script(soulplexis) used Command System, used for AntiTypo.
 * Scriptolotl (Scorpion) Used from FileSpammer.
 * AutoBot used for MCMusicPlayer.
 * CzechHek's BlockAnimation and BlockSelector.
 * etc...!
**/

/* function utils */

function DC (isEnabled, Module, Color, Reason, withrandom) {
  var Mo = '';
  var C = "§0";
  var other = '';
  if(isEnabled) {
    switch (Module) {
      case "TS":
        Mo = "§5[§dTSMM§5] ";
        break;
      case "MM":
        Mo = "§5[§dModuleManager§5] ";
        break;
      case "AD":
        Mo = "§k[§cAdditionalModule§r§k]§2|";
        break;
    }
    C = "§" + Color;
    if(withrandom) {rn = " [" + Math.floor(Math.random()*11) + "]"}
    Message = Mo + C + Reason + rn;
    chat.print(Message);
  }
}

function DelayCal (MaxDelay, MinDelay) {
  delayed = Math.floor(Math.random() * ((MaxDelay-MinDelay)+1) + MinDelay);
  return delayed;
}

function rt (t) {//Shorten it longer randomizer code.
  var text = t[parseInt(Math.random()*t.length)]
  return text;
}

function playSound (name,a,b) {
  mc.theWorld.playSound(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, name, a, b, false);
}

function messageCont (spamlist, urname,randomish, BeforeR, AfterR, IncJP, AllowBet, RandomBet, RBA, BetStB, BetStA) {
  var insultworda = "";
  var clientnames = "";
  var Texts = Text1.concat(Text2, Text3);
  if(IncJP) {insultworda = insultEN.concat(insultJA); clientnames = clientnameEN.concat(ClientNameJA)}else{insultworda = insultEN; clientnames = clientnameEN}
  Mineplex = [
    "Don't Worry Mineplex! You've server is rly not popular. Alts are Almost all unbanned! xd!!",
    "Hello mineplex, you've BAN is doesn't have much of an effect at all. why? A is Simple you've server is not popular. ",
    "Hi mineplex! Don't worry The hackers stop coming to play. you've server is rly not popular. ",
    "mineplex, Do you want to banned hackers on this server? i think answer is not. ",
    "Lol! lagplex! We can never BANNED! Don't Worryyyyy!!!",
    "hey guys im back! ;) don't worry guys!",
    "Good News! you've server is rly not popular! well, We Can't Never Banned! ;)",
    "Mineplex AC, Staff, System is sucks go to Hypixel Now.",
  ]
  GameEnd = [
    "EZist haxied by " + urname + ", And " + rt(clientnames) + " Client. Download Now.",
    "E Z! :) this game was fun!!! | HACKED BY " + urname + ", and " + rt(clientnames) + " Client.",
    "E Z!! XD You are hacked by " + urname + ", and " + rt(clientnames) + " Client. ",
    "hacked by " + urname + " and " + rt(clientnames) + " Client",
    "gg! XD this game is rly fast ended! Guys Let's use " + rt(clientnames) + ", this's made 4 "+servername+ " Client!",
    "yeah excited won in this game. i'm Used " + rt(clientnames) + " Client! Best for grade up pvp experience!!",
    "gg! noobs. don't waste my time. you can't Never win!",
    "THIS GAME WAS HAXIED BY "+urname+", and "+rt(clientnames)+"!",
    "hahaha noobs, VanillaClient is sucks, Let's Use " +rt(clientnames)+" Client!",
    "gg! you guys client are sucks, Download Modern "+rt(clientnames)+" Client! this is Update you gaming performance!"
  ]
  LiquidAd = [
    rt(clientnames) + " is Best Client. Download Now.",
    rt(clientnames) + " , is totaly Free!",
     "Donate now " +rt(clientnames) + " Client!",
     "Sigma Client Is sucks, FREEDOWNLOAD " +rt(clientnames) + " Now.",
     "gg! XD this game is rly fast ended! Guys Let's use " + rt(clientnames) + ", this's made 4 "+servername+ " Client!",
     "yeah excited won in this game. i'm Used " + rt(clientnames) + " Client! Best for grade up pvp experience!!",
     "gg! noobs. don't waste my time. you can't Never win!",
     "hahaha noobs, VanillaClient is sucks, Let's Use " +rt(clientnames)+" Client!",
     "gg! you guys client are sucks, Download Modern "+rt(clientnames)+" Client! this is Update you gaming performance!"
  ]
  gaming = [
    "im just wearning gaming socks.",
    "im just sucks gaming air. it's good for corona impact and gaming",
    "im just always drinking gaming Hydrogen water.",
    "im just drinking gaming water.",
    "im just always drinking gaming water",
    "im just always sucking gaming cocaine",
    "im just always using gaming onahole, lotion, condom! at night.",
    "sorry guys im using gaming Electricity.",
    "sorry guys im using gaming Electric power plant",
    "sorry guys im using gaming weired cable. improve network speed.",
    "sorry guys im fucking gaming girl at always time.",
    "sorry guys im fucking gaming girl at night.",
    "sorry guys, im not haxin, you guys are just sucks",
    "sorry guys, im not haxin, you guys are just noob",
    "sorry guys, im not haxin, you guys are just stup1d xd",
    "hahaha guys you are totaly noob. im just pro",
    "im just pro, but guys. wth!? i dont saw Beginners like you. xd!",
    "im not using killaura, im just pro aiming, and sencivity is Maximum. plz understand.",
    "Im not Scaffolding, it just NoShift. huh but noobs can't understand? xd!",
    "im not using BHop, it just lagging sorry my internet is slower...",
    "im not used hax, idk how to install Hax, i know they are scam and Malware.",
    "Sorry Guys you are Vaccines are Fake. i'm Taken Gaming Vaccine. Sorry! im Elite Group.",
    "Im Just Injected Gaming Vaccine.",
    //"Woops! i forgot Infected GamingVirus." /???
  ]
if(IncJP) {jps = ContJP}else{jps = ""}
  if(randomish) {
    if(AllowBet) {
      if(RandomBet.get()) {
        StB = randomString(RBA);
        StA = randomString(RBA);
      } else {
        StB = BetStB;
        StA = BetStA;
      }
    } else {
      StB = "";
      StA = "";
    }
    if(BeforeR) {br = StB + randomString(8) + StA}else {br = ""}
    if(AfterR) { ar = StB + randomString(8) + StA}else {ar = ""}
  }
  switch (spamlist) {
    case "Mineplex":
      message = Mineplex;break;
    case "GameEnd":
      message = GameEnd;break;
    case "LiquidAd":
      message = LiquidAd;break;
    case "Gaming":
      message = gaming;break;
    case "All": //Not working ?
      message = 'you need? hm this is intersting for me.';break;
    default:
      message = "please select Profile. and i think this is Error. idk how to excute this error.";break;
  }
  MSG = br + message[parseInt(Math.random()*message.length)] + ar;
  mc.thePlayer.sendChatMessage(MSG);
  rtt = rt(clientnames);
  chat.print(rtt);
}//used only for CM.

function randomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 " + jps;

  for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function vClip(offset) {
  mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ);
}
function hclip(offset) {
  var sin = Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
  var cos = Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
  mc.thePlayer.setPosition(mc.thePlayer.posX -=sin, mc.thePlayer.posY, mc.thePlayer.posZ+=cos);
}
function HMotion(offset) {
  var sin = Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
  var cos = Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
  mc.thePlayer.motionX -= sin; mc.thePlayer.motionZ += cos;
}