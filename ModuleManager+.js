/**
 * 
 * Script of tk400's
 * this script contains ModuleManager, TowerScaffoldzzzzszszszszszszs.
 * 
 * Enchances LiquidBounce Hacked Client...?
 * (write description later)
 * 
 * script for Latest(1.8.9) build. (tested on 401b3c5) and LiquidBounce+R
 * 
 */
var scriptName = "ModuleManager+";
var scriptVersion = 1.42;
var scriptAuthor = "shirouto Co-Da- tk400.";

var servername = '';
LAB = 01

var Targets={}

/* Import  */
script.import("tKore.js")

function ModuleManager() {
  //var WasFallen = false;
  var MoveDir = 'A';
  var EnterConfirmCheck = EnterConfirmCheckA = false;
  var servername = ASServername = "";
  var configmode = "";
  var FallLimit = 0;
  var target = null;
  var sn;

  var values = [
    DMode = value.createBoolean("DevMode", false),
    test = value.createBoolean("test", false),
    Text1 = value.createText(">MMSettings", ""),
    SLT = value.createText("CustomTag", "SuperMechaMechaSugooooiModule!"),
    DColour = value.createList("CustomColor", colournames, "Dark Purple"), //https://minecraft.gamepedia.com/Formatting_codes
    Debug = value.createBoolean("DebugChat", false),
    //test = value.createBoolean("test", true), //Using on Develop, tset.
    //Crandom = value.createBoolean("ConfigRandomizer", false),
    SpeedJump = value.createBoolean("NoJumpSpeed", true),
    WASDSpeed = value.createBoolean("AntiHorizontalSpeedStrafing", false),
    AHSSM = value.createList("AHSSMethod", ["FreeControl", "ForcedDirection", "ForcedDirection2"], "ForcedDirection"),
    WithSC = value.createBoolean("WithSmoothCamera", false),
    SpeedsDisabler = value.createBoolean("SpeedsDisabler", true),
    //SDlist = value.createBoolean("DisableWhen", ["Scaffolding","MovementModule"],""), //idea = Czhechek's CC?
    ChangeMode = value.createText("ChangingMode", "Custom"),
    VelLJManage = value.createBoolean("VelLongJump", true),
    AutoKAJump = value.createBoolean("AutoKAJump", false),

    ReverseStepFix = value.createBoolean("ReverseStepFix", true), //using for Slime Motion Jumping, Falling on when you Floating from block.
    AntiNoCritical = value.createBoolean("AntiNoCritical", false),
    AutoFClear = value.createBoolean("AutoFClear", false),
    NoCPBlink = value.createBoolean("ClonedPlayerRemover", false),
    Text3 = value.createText(">BlockRenderManager", ""),
    RenderSetting = value.createBoolean("RenderSetting", true),
    RSCounter = value.createList("Counter", ["false", "Off", "Simple", "Advanced", "Sigma", "Novoline"], "false"),
    RSMark = value.createBoolean("Mark", false),
    Text4 = value.createText(">BlockSelection", ""),
    Selection = value.createBoolean("Selection", false),
    DSBlock = value.createBoolean("DetectServer'sBlock", false),
    mode = value.createList("SetBlock", ["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"], "Bed"),
    customid = value.createInteger("CustomID", 0, 0, 197),
    MidClick = value.createBoolean("MidClickToSet", false),
    fucker = value.createBoolean("Fucker", true),
    EnableFucker = value.createBoolean("EnableFucker", false),
    blockesp = value.createBoolean("BlockESP", true),
    EnableESP = value.createBoolean("EnableESP", true),
    AutoLeave = value.createBoolean("AlwaysAutoLeave", false), //Always Enable LB's AutoLeave Module.
    Text5 = value.createText(">ConfigManager", ""),
    AutoLoad = value.createBoolean("AutoLoader", false),
    LoadConfig = value.createBoolean("LoadConfig", false),
    AutoSave = value.createBoolean("AutoSaver", false),
    SaveConfig = value.createBoolean("SaveConfig", false),
    SavingName = value.createText("CurrentLoad/SaveFileName", "N/A"),
    DSConfig = value.createBoolean("ServerDetect", false),
    AntiESP = value.createBoolean("AntiNoControlableESP", false),
    NoMouse = value.createBoolean("NoMouseWhenAttack", false),
    MinFallDis = value.createFloat("MinFallDistance", 1.5, 0, 30),
    //auto = value.createBoolean("AutoFPSLimit", true),
    PSID = value.createBoolean("PrintSessionID", false),
    //KAASsis = value.createBoolean("KARangeAssist", false),
    //KAASsisDis = value.createFloat("RealAttackDist", 3.25, 0, 5),
  ]

  this.addValues = function(v) {
    addValue(values, v)
  };
  this.getName = function() {
    return "ModuleManager";
  };
  this.getDescription = function() {
    return "Management Disable, Setting, Modules. A Simple Script. coded for LB+ and LBOriginal.";
  };
  this.getCategory = function() {
    return "Player";
  };
  this.getTag = function() {
    return SLT.get();
  };
  this.onKey = function(e) {
    if (SpeedJump.get() && DMode.get()) {
      if (SpeedModule.getState() && mc.gameSettings.keyBindJump && mc.thePlayer.onGround) {
        if (MoveCheck()) {
          e.cancelEvent();
          DC(DCV.get(), "MM", Color2.get(), "Disabled Jump.");
        }
      }
    }
  }
  this.onMotion = function () {
    if(PSID.get()) {
      chat.print(mc.getSession().getToken())
    }
  }
  this.onUpdate = function() {
    //Manage SpeedJump /Fix Jump Boosting
    /* if (SpeedJump.get()  && !DMode.get()) {
      if (SpeedModule.getState() && mc.thePlayer.onGround) {
        if (mc.gameSettings.keyBindJump.pressed) {
          if (MoveCheck()) {
            mc.gameSettings.keyBindJump.pressed = false;
            DC(DCV.get(), "MM", Color2.get(), "Disabled Jump.");
          }
        }
      }
    }; */
    //WASDSpeed
    if (WASDSpeed.get()) { //==> this code is working, but i think Inefficient. well good for Detecting Faster Strafing Cheat <==//
      if (DCV.get()) {chat.print("MoveDirection =" + MoveDir)}
      if (SpeedModule.getState()) {
        if (WithSC.get()) {
          mc.gameSettings.smoothCamera = !mc.thePlayer.onGround;
        }
        if (mc.thePlayer.onGround) {
          if (!mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindForward.pressed) {
            MoveDir = 'A'
          } else if (mc.gameSettings.keyBindForward.pressed) {
            MoveDir = 'F'
          } else if (mc.gameSettings.keyBindRight.pressed) {
            MoveDir = 'R'
          } else if (mc.gameSettings.keyBindLeft.pressed) {
            MoveDir = 'L'
          } else if (mc.gameSettings.keyBindBack.pressed) {
            MoveDir = 'B'
          }
          if (mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindLeft.pressed) {
            MoveDir = 'FL'
          } else if (mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindLeft.pressed) {
            MoveDir = 'BL'
          } else if (mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindRight.pressed) {
            MoveDir = 'BR'
          }
        } else {
          switch (AHSSM.get()) {
            case "FreeControl":
              switch (MoveDir) {
                case 'F':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'R':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindForward.pressed = false;
                  break;
                case 'L':
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'B':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'FR':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = false;
                  break;
                case 'FL':
                  mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'BL':
                  mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'BR':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindLeft.pressed = false;
                  break;
              }
              break;
            case "ForcedDirection":
              switch (MoveDir) {
                case 'F':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  mc.gameSettings.keyBindForward.pressed = true;
                  break;
                case 'R':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindForward.pressed = false;
                  mc.gameSettings.keyBindRight.pressed = true;
                  break;
                case 'L':
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  mc.gameSettings.keyBindLeft.pressed = true;
                  break;
                case 'B':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  mc.gameSettings.keyBindBack.pressed = true
                  break;
                case 'FR':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = false;
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindRight.pressed = true;
                  break;
                case 'FL':
                  mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = true;
                  break;
                case 'BL':
                  mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindForward.pressed = false;
                  mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindLeft.pressed = true;
                  break;
                case 'BR':
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = false;
                  mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = true;
                  break;
              }
              break;
            case "ForcedDirection2":
              switch (MoveDir) {
                case 'F':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'R':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindForward.pressed = false;
                  break;
                case 'L':
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'B':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'FR':
                  mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindBack.pressed = false;
                  break;
                case 'FL':
                  mc.gameSettings.keyBindBack.pressed = mc.gameSettings.keyBindRight.pressed = false;
                  break;
                case 'BL':
                  mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindForward.pressed = false;
                  break;
                case 'BR':
                  mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = false;
                  break;
              }
          }
        }
      }
    } //SpeedDisabler
    if (SpeedsDisabler.get()) {
      if ((SpeedModule.getState() || LJModule.getState()) && (FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState() || TowerModulegetState)) {
        SpeedModule.setState(false) || LJModule.setState(false);
        dlog("Disabled Speed or LongJump.");
      }
    }
    //VelLJ /Hypixel Fix?
    if (VelLJManage.get()) {
      if (VelocityModule.getState() == LJModule.getState()) {
        VelocityModule.setState(!LJModule.getState())
        dlog("set to | Vel:" + !VelocityModule.getState())
      };
    };
    //ReverseStepFix
    if (ReverseStepFix.get()) {
      if (FlyModule.getState() || mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock) {
        RSModule.getState() && RSModule.setState(false)
      } else if (!FlyModule.getState() && !(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof SlimeBlock)) {
        RSModule.setState(true)
      }
    };
    //AntiNoCritical
    if (AntiNoCritical.get()) {
      if (!mc.thePlayer.onGround && mc.thePlayer.posY < 2.6) {
        if (mc.thePlayer.fallDistance >= 2.6) {
          if (!NoFallModule.getState()) {
            NoFallModule.setState(true)
          } else if (FallLimit != 2) {
            mc.thePlayer.fallDistance = 0;
            FallLimit += 1;
            dlog("Reset FallDistance") /*test code*/
          }
        }
      } else {FallLimit=0}
    }
    //AutoKAJump
    if (AutoKAJump.get() && KAModule.getState()) {mc.gameSettings.keyBindJump.pressed = true};
    //RemoveClonedPlayer
    if (NoCPBlink.get()) { //cloned from TSMM's
      if (BlinkModule.getState()) {
        for (var x in mc.theWorld.loadedEntityList) {
          var entities = mc.theWorld.loadedEntityList[x]; //i think generates from Blink's Fakeplayer's entityID is a binded for "-1337".
          if ((entities != mc.thePlayer) && (entities.getEntityId() == -1337)) {
            mc.theWorld.removeEntity(entities);
            dlog("Removed ClonedPlayer.")
          }
        }
      }
    }

    /* Manage Modules Setting */
    //RenderSetter /fix Replaced by other user's Setting
    if (RenderSetting.get()) {
      if (RSCounter.get() != "false") {
        switch (type) {
          case "Plus":
            if (RSCounter.get() != ScaffoldModule.getValue("Counter").get()) {ScaffoldModule.getValue("Counter").set(RSCounter.get())}
            break;
          case "Original":
            if (RSCounter.get("Off")) {
              ScaffoldModule.getValue("Counter").get() && ScaffoldModule.getValue("Counter").set(false);
              TowerModule.getValue("Counter").get() && TowerModule.getValue("Counter").set(false);
            } else if (RSCounter.get("Simple")) {
              ScaffoldModule.getValue("Counter").get() && ScaffoldModule.getValue("Counter").set(true);
              TowerModule.getValue("Counter").get() && TowerModule.getValue("Counter").set(true);
            }
            break;
        }
      }
      //Mark
      if (RSMark.get() != ScaffoldModule.getValue("Mark").get()) {
        ScaffoldModule.getValue("Mark").set(RSMark.get());
      }
    };
    //Selection
    if (Selection.get()) {
      id = [26, 92, 122, 9, 116, 58, customid.get()][["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"].indexOf(mode.get())];
      if (DSBlock.get()) {
        dlog("Detected :" + servername)
        switch (servername) {
          case "Hypixel":
            id = 26
            break;
          case "Mineplex":
            id = 92
            break;
          case "Cubecraft":
            id = 122
            break;
          case "CCBlueX":
            dlog("DEV | Checked!");
            id = 1
            break;
          default:
            D("sorry, your server ip dosent exist or found on the list. now setting up to your config")
            fucker.get() && FuckerModule.getValue("Block").set(id);
            blockesp.get() && BlockESPModule.getValue("Block").set(id);
            break;
        }
        if (fucker.get() && id != FuckerModule.getValue("Block").get()) {
          FuckerModule.getValue("Block").set(id)
        };
        if (blockesp.get() && id != BlockESPModule.getValue("Block").get()) {
          BlockESPModule.getValue("Block").set(id)
        }
      } else {
        fucker.get() && FuckerModule.getValue("Block").set(id);
        blockesp.get() && BlockESPModule.getValue("Block").set(id);
      }
      /* 
      for(var x=0;x<list.lengthx) {
        (moduleManager.getModule(list[x]).getState()) && (moduleManager.getModule(list[x]).setState(true))
      } */
      if (EnableFucker.get()) {
        !FuckerModule.getState() && FuckerModule.setState(true)
      }
      if (EnableESP.get()) {
        !BlockESPModule.getState() && BlockESPModule.setState(true)
      }
      Selection.set(false);
    }
    //Dev// //(Auto)Config Loader
    if (LoadConfig.get()) {
      LoadConfig.set(false);
      mc.thePlayer.closeScreen()
      if (DSConfig.get()) {
        EnterConfirmCheck = true;
        configmode = "Load";
        D("are you sure for loading config for <" + servername + ">?\npress Enter key for confirm, press ESCKey to cancel.")
      } else {
        D("i have no 'Idea', sorry. hm Loading Basement config is gooder idea?")
      }
    }
    if (SaveConfig.get()) {
      SaveConfig.set(false);
      mc.thePlayer.closeScreen()
      configmode = "Save";
      EnterConfirmCheck = true;
      D("are you sure for saving config for <" + servername + ">?\npress Enter key for confirm, press ESCKey to cancel.")
    };
    //AntiCESP /this is useful for me.
    if (AntiESP.get()) {//maybe works these code...
      if (['ShaderOutline',"ShaderGlow"].includes(ESPModule.getValue("Mode").get())) {
        ESPModule.getValue("Mode").set("2D");
        dlog("Detected")
      }
      if (['ShaderOutline',"ShaderGlow"].includes(StoESPModule.getValue("Mode").get())) {
        StoESPModule.getValue("Mode").set("2D");
        dlog("detected")
      }
    }
  }
  this.onKey = function(e) {
    //manager of config MM function
    if (EnterConfirmCheckA) {
      if (e.getKey() == 28 && e.getKey() != 1) {
        if (AutoSaver) {
          AutoSaver = false;
          !AutoLoader && (EnterConfirmCheckA = false)
          D("Enter pressed. Now saving " + servername)
          Config("Save", ASServername)
          AutoSave.get() && (ASServername = servername, D("EnterKey pressed."));
        } else if (AutoLoader) {
          AutoLoader = EnterConfirmCheckA = false;
          D("Enter pressed. Now loading " + servername)
          Config("Save", "FailFileSave" /*+wtisit() */) //Saving Last Config for FailSafe. but if you don't want this feature, plz delete this line.
          Config("Load", servername)
        }
      } else if (e.getKey() == 1) {
        if (AutoSaver) {
          AutoSaver = false;
          !AutoLoader && (EnterConfirmCheckA = false /*,D("detected AutoLoader has false. setting ECCA = false")*/ )
          AutoSave.get() && (ASServername = servername, D("ESCKey pressed."));
        } else if (AutoLoader) {
          AutoLoader = EnterConfirmCheckA = false;
          //D("Line 685 has loaded.")
        }
      }
    } else if (EnterConfirmCheck) {
      if (e.getKey() == 28) {
        //e.cancelEvent();
        D("Detected Enter has pressed. now " + configmode + " config...")
        Config(configmode, servername)
        EnterConfirmCheck = false;
      } else if (e.getKey() == 1) {
        //e.cancelEvent(); //eh this isn't working
        D("config " + configmode + " has been canceled.")
        EnterConfirmCheck = false;
      }
    }
  }
  this.onAttack = function(e) {
    target = e.getTargetEntity();
    NoMouse.get() && (mc.gameSettings.keyBindUseItem.pressed = mc.gameSettings.keyBindAttack.pressed = false)
      //AntiNoCritical
    (AntiNoCritical.get() && NoFallModule.getState()) && (NoFallModule.setState(false));
    //if(KAASsis.get() && KAModule.getState() && KAASsisDis.get() >= mc.thePlayer.getDistanceToEntity(target)) {e.cancelEvent()}
  };


  this.onWorld = function() {
    sn=ServerUtils.getRemoteIp();
    //This is not Module, But i think this is useful? (Ex:Mineplex)
    if (AutoFClear.get()) {
      commandManager.executeCommand(".friends clear")
    }
    //Check AutoLeave is Disabled.
    if (AutoLeave.get()) {
      if (!AutoLeaveModule.getState()) {AutoLeaveModule.setState(true)}
    }
    if (/hypixel/i.test(sn)) {
      servername = "Hypixel"
    } else if (sn.match(".mineplex.com")) {
      servername = "Mineplex"
    } else if (/"*\.cubecraft\.net"/.test(sn)) {
      servername = "Cubecraft"
    } else if (sn.contains("ccbluex.net")) {
      servername = "CCBlueX"
    } else if (sn.match("mccentral.org")) {
      servername = "MCCentral"
    } else if (sn.match("redesky.com")) {
      servername = "Redesky"
    } else if (sn.match("gommehd.net")) {
      servername = "GommeHD"
    } else {
      servername = "undetected"
    }
    // EXPEPIMENTAL //
    SavingName.set(servername);
    if (AutoSave.get() || AutoLoad.get()) {
      if (AutoSave.get()) {
        if (ASServername == "") {
          ASServername = servername; /*D("detected ASSN has Null. setting up to | "+ASServername+" / "+servername)*/
        }
        D("[§2AutoSave§r] Save config for<§b" + ASServername + "§r>?\nPress Enter for confirm. press ESCKey to CancelSave.")
        AutoSaver = EnterConfirmCheckA = true;
      }
      if (AutoLoad.get()) {
        D("[§4AutoLoad§r] Load config for<§b" + servername + "§r>?\nPress Enter for confirm. press ESCKey to CancelLoad.")
        AutoLoader = EnterConfirmCheckA = true;
      }
    }
  }
  //this.onClickBlock = function(e) {
  //  if(MidClick.get()) {
  //    chat.print(e.getClickedBlock())
  //    var id =mc.theWorld.getBlockState(new BlockPos(e.getClickedBlock())).getBlock()
  //    fucker.get() && FuckerModule.getValue("Block").set(id);
  //    blockesp.get()&&BlockESPModule.getValue("Block").set(id) 
  //    MidClick.set(false)
  //  }
  //}
}

// TSMM by tk400 //


/* TIP: if ScaffoldJump has set Off, you can Sprint ScaffoldingJump. like shitgma(Jello? XD). */

function TSMM() {
  var i = r = z = 0;
  var CoolTime = 0;
  var CoolTimeB = false;
  //var ghostremoved = false;
  var SMN = SSW = SAi = false;
  var JumpCalnceler = false;
  var RESSNK = false
  var prevMode="";
  //var hideScaffold; var hideTower;

  var values = [
    DColour = value.createList("TSMMCustomColor", colournames, "Dark Green"), //https://minecraft.gamepedia.com/Formatting_codes
    Debug = value.createBoolean("TSMMDebugChat", false),
    BR = value.createBoolean("BodyReverser", false),
    ScJMode = value.createList("ScaffoldJump", ["Off", "Sprint", "XZR", "VClip"], "Off"),
    SCJReset = value.createList("SCJSReset", ["Same","Ground","Air", "Off"], "Same"),
    TiTo = value.createList("Towerize", ["Timer", "Motion", "flooredClip","Off"],"Off"),
    TiToVal = value.createFloat("TowerizeVal", 0.42, -1, 2),
    PotionTower = value.createBoolean("PotionTower", false),
    BC = value.createBoolean("BlockChooser", false),
    SCATower = value.createBoolean("UseScaffoldsLegitTower", false),
    TowerDelayer = value.createBoolean("TowerDelayer", false),
    TDDelay = value.createInteger("Delay", 15, 0, 100),
    CT = value.createInteger("CoolTime", 10, 0, 20),
    ForceSprint = value.createBoolean("ForceSprint", true),
    JumpScaffolding = value.createBoolean("JumpScaffolding", true), //Beta
    JSMode = value.createList("Type", ["SimplyJump", "JumpKey", "Motion", "TP"], "JumpKey"),
    JSV = value.createFloat("Value", 0.42, -1, 2),
    AntiHalf = value.createBoolean("AntiHalf", false),
    invBlock = value.createBoolean("InvBlockFixes", false), //experimentalishation
    DownWards = value.createBoolean("2ndDownward", false), //experimentalishation
    WithBlinkAPI = value.createBoolean("WithLB'sBlink", false),
    RemoveGhost = value.createBoolean("RemoveYourGhost", false),
    RndmRotPit = value.createBoolean("RnadomizesRotPitch", false),
    TDiffLev = value.createFloat("DiffLevel", 10, 0, 15),
    MLGScaffold = value.createBoolean("MLGSCaffold", false),
    MLSGSneak = value.createBoolean("MLSGSneak", false),
    NoXZMotion = value.createList("NoXZMotion", ["Off", "MotionZero", "NoKeyBoard", "BothAlgorism", "ZeroXZEvent", "EventCanceler"], "Off")
  ]

  this.addValues = function(v) {
    addValue(values, v)
  }
  this.getName = function() {
    return "TSMM";
  }
  this.getDescription = function() {
    return "ModuleManager's Module, Manages Tower & Scaffold. A SimpleScript, Better Than tOwERsCaFFoldZ.";
  }
  this.getCategory = function() {
    return "Player";
  }
  this.getTag = function() {
    return ScJMode.get();
  }
  this.onEnable = function() {
    if(type=="Plus") {prevMode=ScaffoldModule.getValue("TowerMode").get()}
    if(RndmRotPit.get()) {
      var DiffRot= ScaffoldModule.getValue("Static-Pitch").get() + (DelayCal(TDiffLev.get()*100,-TDiffLev.get()*100)/100)
      if(DiffRot > 90) {DiffRot=90}else if(DiffRot < 80) {DiffRot=80}
      ScaffoldModule.getValue("Static-Pitch").set(DiffRot)
      //var ticks=0;
      //var rrpdticks=DelayCal(RRPMinDelay.get()*10,RRPMaxDelay.get()*10);
    }
    i=r=z=0;
    CoolTime = 0;
    CoolTimeB = false;
    if (BR.get()) {
      mc.thePlayer.rotationYaw += 180;
    }
    ScaffoldModule.setState(true);
    TowerModulesetState(false)
    if (JumpScaffolding.get()) {
      if (!ScaffoldModule.getValue("SameY").get()) {ScaffoldModule.getValue("SameY").set(true)}
    }
    // //
    if (WithBlinkAPI.get()) {BlinkModule.setState(true)};
  };
  this.onUpdate = function() {
    if(TowerModulegetState) {
      if(TowerDelayer.get()) {
        if(CoolTimeB) {
          CoolTime++
          if (CoolTime>=CT.get()) {
            CoolTime = 0
            CoolTimeB = false
          } else {
            mc.gameSettings.keyBindJump.pressed = false;
            DCV.get() && chat.print("->CoolTime")
          }
        }
        if(mc.gameSettings.keyBindJump.pressed && z>=TDDelay.get()) {
          z = CoolTime = 0
          CoolTimeB = true;
          mc.gameSettings.keyBindJump.pressed = false;
          DCV.get() && chat.print("test");
        }
      }
    }

    if (WithBlinkAPI.get()) {
        if (RemoveGhost.get()) {
          for (var x in mc.theWorld.loadedEntityList) {
            var entities = mc.theWorld.loadedEntityList[x]; //i think generated Blink's Fakeplayer entityID is fixed for "-1337".
            if ((entities != mc.thePlayer) && (entities.getEntityId() == -1337)) {
              mc.theWorld.removeEntity(entities)
              dlog("Removed Entity.")
            }
          }
        }
    };
    if(mc.gameSettings.keyBindJump.pressed) {
      ScaffoldSprint(SCJReset.get())
    }else if (!mc.thePlayer.onGround) {
      switch (ScJMode.get()) {
        case "Sprint":
          ScaffoldSprint("Off")
          mc.thePlayer.setSprinting(false);
          break;
        case "XZR":
          mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
          break;
        case "VClip":
          JumpCalnceler = true, mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += 1, mc.thePlayer.posZ);
          break;
      }
    }
    if (TowerDelayer.get()) {
      if(CoolTimeB) {
        if (CoolTime>=CT.get()) {
          CoolTime = 0
          CoolTimeB = false
        } else {
          CoolTime++
          mc.gameSettings.keyBindJump.pressed = false;
          DCV.get() && dlog("you are now in CoolTime")
        }
      }
      if (TowerModulegetState && z>=TDDelay.get()) {
        z = CoolTime = 0
        CoolTimeB = true;
        TowerModulesetState(false);
        DCV.get() && dlog("test");
      } else {z++}
    }
    if (TowerModulegetState) {
      if(!mc.gameSettings.keyBindJump.isKeyDown()) {TowerModulesetState(false)}
      switch (NoXZMotion.get()) {
        case "MotionZero":
          mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
          break;
        case "NoKeyBoard":
          mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
          break;
        case "BothAlgorism":
          mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
          mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
          break;
      }
    } else if(mc.thePlayer.onGround && mc.gameSettings.keyBindJump.isKeyDown() && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindSneak.pressed) {
      if (SCATower.get() || (PotionTower.get() ? (mc.thePlayer.isPotionActive(Potion.jump) ? true : false) : false)) {
        type=="Original" && ScaffoldModule.setState(false);
        type=="Plus" && ScaffoldModule.getValue("TowerMode").set("Jump");
        TowerModulesetState(false);
      }else{ScaffoldModule.getValue("TowerMode").set(prevMode);TowerModulesetState(true)}
    }
    //MLGScaffold Code
    if (MLGScaffold.get()) {/* maybe works. */
      MLSGSneak.get() && (mc.gameSettings.keyBindSneak.pressed = true);
      if (mc.thePlayer.onGround) {mc.gameSettings.keyBindJump.pressed = true};
    }
    //AntiSlab
    if (AntiHalf.get()) {
      if (mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof SlabBlock) {
        mc.gameSettings.keyBindJump.pressed = true;
      }
    };
    //DownWards
    if (DownWards.get()) {
      if (mc.gameSettings.keyBindSneak.isKeyDown()) {
        //mc.thePlayer.setSneaking(false)
        //Detectors of Scaffold Values
        (ScaffoldModule.getValue("Mode").get("Expand")) && (ScaffoldModule.getValue("Mode").set("Normal"), SMN = true)
        ScaffoldModule.getValue("SameY").get() && (ScaffoldModule.getValue("SameY").set(false), SSW = true)
        ScaffoldModule.getValue("AirSafe").get() && (ScaffoldModule.getValue("Air").set(false), SAi = true)
      } else {
        SMN && (ScaffoldModule.getValue("Mode").set("Expand"), SMN = false)
        SSW && (ScaffoldModule.getValue("SameY").set(true), ScaffoldModule.state = false, SSW = false)
        SAi && (ScaffoldModule.getValue("AirSafe").set(true), SAi = false)
      }
    }
    //Jump Scaffolding
    if (JumpScaffolding.get()) {
      if (ScaffoldModule.getState() && mc.thePlayer.onGround && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava() && !mc.gameSettings.keyBindSneak.pressed) {
        if (mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
          //if(!mc.gameSettings.keyBindForward.isKeyDown()) {//?
            switch (JSMode.get()) {
              case "Jump":
                mc.thePlayer.jump();
                break;
              case "JumpKey":
                mc.gameSettings.keyBindJump.pressed = true;
                break;
              case "Motion":
                mc.thePlayer.motionY = JSV.get();
                break;
              case "TP":
                mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + JSV.get(), mc.thePlayer.posZ);
                JumpCalnceler = true;
                break;
            }
          //}
        }
      }
    }
  }
  this.onMove = function(e) {
    (ForceSprint.get()&&ScaffoldModule.getState()) && mc.thePlayer.setSprinting(true)
    if (TowerModulegetState) {
      switch (NoXZMotion.get()) {
        case "ZeroXZEvent":
          e.zeroXZ();
          break;
        case "EventCanceler":
          if (e.getX() || e.getZ()) {
            e.cancelEvent();
          }
          break;
      }
    }
    if (invBlock.get()) {
      if (mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock().isBlockContainer) {
        dlog("Detected you've landing on Furnace or Workbench or Chest");
        mc.gameSettings.keyBindSneak.pressed = true;
      }
    }
    if (mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) {
      if (BR.get()) { //Reverse Forward to BackWard
        if (mc.gameSettings.keyBindForward.pressed) {
          mc.gameSettings.keyBindBack.pressed = true;
          mc.gameSettings.keyBindForward.pressed = false;
        }
      }
    }
  }
  this.onPacket = function(e) {
    if (invBlock.get()) {
      if(e.getPacket() instanceof S2DPacketOpenWindow) {
        //chat.print(e.getPacket().getWindowId())
        dlog("Inventory Open Detected.")
        //e.cancelEvent()
        mc.gameSettings.keyBindInventory.pressed = true;
        //moduleManager.getModule(this.getName()).setState(false);
        //mc.thePlayer.addToSendQueue(S2EPacketCloseWindow(e.getPacket().getWindowId()))//may bypasses,
      }
    }
  }
  this.onJump = function(e) {
    JumpCalnceler && (e.cancelEvent(), JumpCalnceler = false)
  }
  this.onDisable = function() {
    WithBlinkAPI.get() && BlinkModule.setState(false);
    switch (type) {
      case "Original":
        TowerModulegetState && TowerModulesetState(false);
      case "Plus":
        ScaffoldModule.setState(false);break;
    }
    //ScaffoldModule.array = TowerModule.array = hideTower;
    if (BR.get()) {
      mc.thePlayer.rotationYaw += 180
    } /*Fix Legitly Head Rotation. only this code...*/
  }
}

/* v: 0.01, Auther: tk400, Desc: Allow Hypixel Games*/

function HypixelGameChange() {
  var select=0;
  var mode=0;
  var games = [
    { name:"SkyWars",
      Texts:["Solo Normal", "Solo Insane", "Team Normal", "Team Insane"],
      addr :["Solo_Normal", "Solo_Insane", "Team_Normal", "Team_Insane"]},
    { name:"BedWars",
      Texts:["Solo", "Team", "3v3", "4v4"],
      addr :["bedwars_eight_one", "bedwars_eight_two", "bedwars_four_three", "bedwars_four_four"]},
    { name:"UHC",
      Texts:["Solo", "Teams", "Event", "Speed Solo", "Speed Team"],
      addr :["uhc_solo", "uhc_teams", "uhc_events", "speed_solo_normal", "speed_team_normal"]},
    //{murder = ["murder_classic", "murder_double_up", "murder_assassins", "murder_infection"],}
    { name: "MegaWars",
      Texts:["Standard", "Face_Off"],
      addr :["mw_standard", "mw_face_off"]},
    //{ name: "aaaa",
    //  Texts:["aaaa0", "bbbb1","cccc2","dddd3","eeee4","ffff5","gggg6"],
    //  addr :["aaaa0", "bbbb1","cccc2","dddd3","eeee4","ffff5","gggg6"]},
  ];

  this.getName = function() {
    return "HypixelGameChange";
  }
  this.getDescription = function() {
    return "Allows you to join games to Directly from selected game list.";
  }
  this.getCategory = function() {
    return "Player";
  }
  //this.onEnable=function(){chat.print(games[x].Texts[y].length)}
  this.onRender2D=function(){
    mc.ingameGUI.drawString(mc.fontRendererObj, "§6§l"+games[select].addr[mode], mc.displayWidth / 4, (mc.displayHeight / 2.5 -1), -1)
    for(x=0;x<games.length;x=(x+1)|0) {
      mc.ingameGUI.drawString(mc.fontRendererObj, checker(x,select) + games[x].name, mc.displayWidth / 4, (mc.displayHeight / 2.5) + (x*20)+5, -1)
      for(y=0;y<games[x].Texts.length;y=(y+1)|0) {
        mc.ingameGUI.drawString(mc.fontRendererObj, checker(y,mode,x,select) + games[x].Texts[y], mc.displayWidth / 4 + (((games[x].Texts[y].length+2)*4)*y), (mc.displayHeight / 2.5) + (x*20)+12, -1)
      }
    }
  }
  this.onKey = function(e) {
    var keycode=e.getKey()
    if(keycode == 1) {
      moduleManager.getModule(this.getName()).state=false;
    }else{
      //Select Gamemode.
      if(keycode == 200) {
        if(select>0) {select--;mode=0}
      }else if(keycode == 208) {
        if(select<games.length-1) {select++;mode=0}
      }if(keycode == 203) {
        if(mode>0) {mode--}
      }else if(keycode == 205) {
        if(mode<(games[select].addr.length-1)) {mode++}
      }else if(keycode == 28 || keycode ==156) {
        sendChat("/play " + games[select].addr[mode])
        moduleManager.getModule(this.getName()).state=false;
      }
    }
    //chat.print(keycode+"|"+select+"|"+mode+"|"+games[select].addr.length)
  }
}


function tk400sAdditonalModule() {
  var variableoftimerboolean=ResetTimer=false;
  var values = [
    Timer = value.createFloat("Timer", 0.1, 0, 10),
    downtimer = value.createFloat("downtimer", 0.1, 0, 3),
    uptimer = value.createFloat("uptimer", 0.1, 0, 3),
    stoptimer = value.createFloat("stoptimer", 0.1, 0, 3),
    TP = value.createFloat("TP", 0.05, 0, 1),
    Motion = value.createFloat("Motion", 0.1, 0, 1),
    Criticals = value.createList("Criticals", ["Off", "Jump", "SpeedModule", "TP", "Motion", "FastJump/Motion", "FastJump/TP", "FastJump/Timer", "SlowFall", "testTimer", "testMotion"], "Off"),
    WithJump = value.createBoolean("WithJump", false),
    ClimbSpeed = value.createList("ClimbSpeed", ["Off", "TP", "Motion", ""], "Off"),
    BlockAnimation = value.createList("BlockAnimation", ["RandomizedProgress", "SwingProgressAbort", "BlockBlock", "Off"], "Off"),
    VibVal = value.createFloat("Vibration", 0.1, 0, 1),
    //SWH = value.createBoolean("SingleWorldHack", false), //Just Modify
    animation = value.createFloat("Animation", 0.75, 0, 1),
    animation2 = value.createFloat("Animation2", 0.75, 0, 1),
    AutoLeaver = value.createBoolean("AutoLeave", false),
    ForceKick = value.createBoolean("ForceKick", false),
    WhenHealth = value.createFloat("Health", 5, 0, 19),
    ALMode = value.createList("ALMode", ["Custom", "Lobby"], "Custom"),
    ReJoinServer = value.createList("ALServer", ["Hypixel", "Cubecraft", "?"], ""),
    LMethod = value.createList("LeaveMethod", ["Command", "ConsoleSpammer/Payload", "ConsoleSpammer/MineSecure", "RandomizedPos", "ExtremeRandomizedPos", "UltraRandomizedPos", "RandomizedPacketPos", "ExtremeRandomizedPacketPos", "RandomizedMotion", "CommandSpamKick", "KickModuleAPI"], "Command"),
    //AntiTypo = value.createBoolean("AntiTypo", true),
    TimeFix = value.createBoolean("TimerFixer", false),
    AntiDamage = value.createBoolean("AntiDamage", false),
  ]

  this.addValues = function(v) {
    addValue(values,v)
  }

  this.getName = function() {
    return "tk400sAdditonalModule";
  }
  this.getDescription = function() {
    return "Moved from MM.";
  }
  this.getCategory = function() {
    return "Player";
  }
  this.onUpdate = function() {
    if (AutoLeaver.get()) {
      if ((mc.thePlayer.getHealth() <= WhenHealth.get()) || (ForceKick.get())) {
        ForceKick.set(false); //Optionaly you can set to true, false. or Remove this line
        switch (LMethod.get()) {
          case "Command":
            switch (ALMode.get()) {
              case "ReJoin"://For Hypixel
                mc.thePlayer.sendChatMessage("/rejoin")
                break;
              case "Hub":
                mc.thePlayer.sendChatMessage("/Hub")
                break;
              case "Custom":
                mc.thePlayer.sendChatMessage(Custom.get())
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
            mc.thePlayer.posX = DelayCal(-255, 255);
            mc.thePlayer.posY = DelayCal(-255, 255);
            mc.thePlayer.posZ = DelayCal(-255, 255);
            break;
          case "ExtremeRandomizedPos": //Never Recommanded. this can probably crash your computer
            mc.thePlayer.posX = DelayCal(-30000000, 30000000)
            mc.thePlayer.posY = DelayCal(-30000000, 30000000)
            mc.thePlayer.posZ = DelayCal(-30000000, 30000000)
            break;
          case "UltraRandomizedPos":
            mc.thePlayer.posX = DelayCal(Number.MIN_VALUE, Number.MAX_VALUE)
            mc.thePlayer.posY = DelayCal(Number.MIN_VALUE, Number.MAX_VALUE)
            mc.thePlayer.posZ = DelayCal(Number.MIN_VALUE, Number.MAX_VALUE)
          case "RandomizedPacketPos": //a.k.a OldAAC Crasher. (you can check at Original LiqBounce Repo.)
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX += DelayCal(-255, 255), mc.thePlayer.posY += DelayCal(-255, 255), mc.thePlayer.posZ += DelayCal(-255, 255), RandomPool()));
            break;
          case "ExtremeRandomizedPacketPos":
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX = DelayCal(-30000000, 30000000), mc.thePlayer.posY = DelayCal(-30000000, 30000000), mc.thePlayer.posZ = DelayCal(-30000000, 30000000), RandomPool()));
            break;
          case "ExtremeRandomizedPacketPos":
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX = DelayCal(Number.MIN_VALUE, Number.MAX_VALUE), mc.thePlayer.posY = DelayCal(Number.MIN_VALUE, Number.MAX_VALUE), mc.thePlayer.posZ = DelayCal(Number.MIN_VALUE, Number.MAX_VALUE), RandomPool()));
            break;
          case "RandomizedMotion":
            mc.thePlayer.motionX = DelayCal(-255, 255);
            mc.thePlayer.motionY = DelayCal(-255, 255);
            mc.thePlayer.motionZ = DelayCal(-255, 255);
            break;
          case "CommandSpamKick":
            //mc.thePlayer.sendChatMessage("/" + randomString(Math.floor(Math.random() * ((50 - 2) + 1) + 1)))
            break;
          case "KickModuleAPI":
            KickModule.setState(true);
            break;
        }
      }
    }
  }
  this.onMotion = function() {
    //moment Restener
    if (Criticals.get() == "FastJump/Timer") {
      if (ResetTimer) {
        if (mc.thePlayer.fallDistance || mc.thePlayer.onGround) {
          mc.timer.timerSpeed = 1;
          ResetTimer = false;
          chat.print("Timer has reset")
        }
      }
    }else if (Criticals.get() == "SlowFall") {
      if(variableoftimerboolean) {
        if(isTotalyGround(mc.thePlayer)) {variableoftimerboolean=false;ResetTimer=true}
        if(mc.thePlayer.fallDistance > 0) {mc.timer.timerSpeed=Timer.get()}
      }else if (ResetTimer) {mc.timer.timerSpeed=1;ResetTimer=false}
    }
    if (mc.thePlayer.isOnLadder()) {
      switch (ClimbSpeed.get()) {
        case "TP":
          mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ);
          break;
        case "Motion":
          mc.thePlayer.motionY = Motion.get();
          break;
      }
    }
    if (TimeFix.get()) {
      if (mc.timer.timerSpeed <= 0.01 && !fixed) {
        mc.timer.timerSpeed = 1, chat.print("Game has Freezed or Slowely. now fixing...")
        Timer
        fixed = true;
      } else {
        fixed = false;
        chat.print("a")
      }
    }
    if(KAModule.blockingStatus) {
      switch (BlockAnimation.get()) {
        case "RandomizedProgress":
          mc.thePlayer.swingProgress = Math.random();
          break;
        case "SwingProgressAbort":
          //if(mc.currentScreen instanceof GuiInventory || mc.currentScreen instanceof GuiChest) {}else{
          //Fix? canceling Opening Inv.
          mc.thePlayer.swingProgress = (animation.get() * -VibVal.get());
          break;
      }
    }
    switch (Criticals.get()) {
      case "testTimer":
        if(mc.thePlayer.fallDistance == 0) {
          mc.timer.timerSpeed = uptimer.get()
        } else if(mc.thePlayer.fallDistance >= 0) {
          if(MoveCheck("OK")) {
            mc.timer.timerSpeed = downtimer.get()
          }else{
            mc.timer.timerSpeed = stoptimer.get()
          }
        }
        break;
      case "testMotion":
        if(mc.thePlayer.fallDistance >= 0) {
          if(MoveCheck("OK")) {
            mc.thePlayer.motionY -= uptimer.get()
          }else{
            mc.thePlayer.motionY -= stoptimer.get()
          }
        }
        break;
    }
  }
  this.onAttack = function() {
    if (mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
      switch (Criticals.get()) {
        case "Jump":
          SpeedModule.setState(false);
          mc.thePlayer.jump();
          break;
        case "SpeedModule":
          if (mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
            if (!mc.gameSettings.keyBindBack.pressed && KAModule.getState() && !SpeedModule.getState() && !LJModule.getState() && !ScaffoldModule.getState() && !TowerModulegetState) {
              SpeedModule.setState(true);
            }
          } else {
            WithJump.get() && mc.thePlayer.jump();
          };
          break;
        case "TP":
          mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ);
          break;
        case "Motion":
          mc.thePlayer.motionY = Motion.get();
          break;
        case "FastJump/Motion":
          mc.thePlayer.jump();
          if (!mc.thePlayer.fallDistance) {
            mc.thePlayer.motionY += Motion.get()
          };
          break;
        case "FastJump/TP":
          mc.thePlayer.jump();
          if (!mc.thePlayer.fallDistance) {
            mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ);
          };
          break;
      }
    };
    if (Criticals.get() == "FastJump/Timer") {
      if (!mc.gameSettings.keyBindSneak.pressed && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
        mc.thePlayer.onGround && mc.thePlayer.jump();
        if (!mc.thePlayer.fallDistance && !mc.thePlayer.onGround) {
          mc.timer.timerSpeed = Timer.get();
          ResetTimer = true;
          chat.print("DEBUG|TIMERED")
        };
      }
    }else if (Criticals.get() == "SlowFall") {
      if(!mc.gameSettings.keyBindSneak.pressed && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
        variableoftimerboolean=true;
      }
    }
  }

  this.onDisable = function() {}
}


var ModuleManager = moduleManager.registerModule(new ModuleManager)
var TSMM = moduleManager.registerModule(new TSMM);
var HypixelGameChange = moduleManager.registerModule(new HypixelGameChange);
var tk400sAdditonalModule = moduleManager.registerModule(new tk400sAdditonalModule)

function onEnable() {
  ModuleManager;
  TSMM;
  HypixelGameChange;
  tk400sAdditonalModule;
};

function onDisable() {
  moduleManager.unregisterModule(ModuleManager);
  moduleManager.unregisterModule(TSMM);
  moduleManager.unregisterModule(HypixelGameChange);
  moduleManager.unregisterModule(tk400sAdditonalModule);
};

/**
 * thank you for
 * ->CzechHek
 * BlockAnimation, BlockSelector Script, Core.lib. and TowerScaffoldz's Idea ;)
 * 
 * ->Scorpion
 * Scriptolotl Script.
 * 
 * ->soulplexis
 * i think used his Script. but i forgot.. sorry.
 * 
 * ->Senk Ju
 * FileSpammer Script.
 * 
 * ->AutoL Script
 * 
 * ->and some people
 */

/* function utils */

function ScaffoldSprint(mode) {
  switch (type) {
    case "Original":
      if(mode=="Off") {
          ScaffoldModule.getValue("Sprint").set(false);
      }else{ScaffoldModule.getValue("Sprint").set(true);}
      break;
    case "Plus":
      ScaffoldModule.getValue("SprintMode").set(mode);
      break;
  }
}

function getMoveYaw() {
  var moveYaw = mc.thePlayer.rotationYaw
  if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing == 0) {
    if(mc.thePlayer.moveForward > 0) {moveYaw += 0} else {moveYaw += 180}
  } else if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing != 0) {
      if (mc.thePlayer.moveForward > 0) {
        if (mc.thePlayer.moveStrafing > 0) {moveYaw += -45} else {moveYaw += 45}
      } else {
        if (mc.thePlayer.moveStrafing > 0) {moveYaw -= -45} else {moveYaw -= 45}
      }
    if(mc.thePlayer.moveForward > 0) {moveYaw += 0} else {moveYaw += 180}
  } else if (mc.thePlayer.moveStrafing != 0 && mc.thePlayer.moveForward == 0) {
      if(mc.thePlayer.moveStrafing > 0) {moveYaw += -90} else {moveYaw += 90}
  }
  return moveYaw
}

function MoveCheck(cl) { //only check XZ. not Jump Falling, etc..
  if (cl == null || cl == "Zero" || cl == 0) {
    return (mc.thePlayer.motionX != 0 || mc.thePlayer.motionZ != 0)
  } else if (cl != null || cl == "Zero" || cl != 0) {
    return ((mc.thePlayer.motionX < cl || mc.thePlayer.motionX > cl) || (mc.thePlayer.motionZ < cl || mc.thePlayer.motionZ > cl))
  } else if(cl =="OnlyKey" || cl =="OK") {
    return (mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindBack.pressed || mc.gameSettings.keyBindLeft.pressed || mc,gameSettings.keyBindRight.pressed)
  }
}

function wtisit() {
  var availableColors = ["§4", "§c", "§6", "§e", "§2", "§a", "§b", "§3", "§1", "§9", "§d", "§5"];
  var color = rt(availableColors)
  
  var d = new Date();
  return ("§7["+d.getHours().slice(-2)+":"+d.getMinutes().slice(-2)+":"+d.getSeconds().slice(-2)+":"+color+DelayCal(1, 9)+"§r]");
}

function D(Desc) {
  chat.print(Desc)
}

function checker(n1, c1, n2,c2) {
  if((n1==c1) && (n2==c2)) {
      return"->§l§a";
    }else{
      return "  §4";
    }
}

function reset() {
  currentTrans = 0;
  KeepAlives.clear();
  Transactions.clear();
}
/*function Sleep (delay) {
  i+=1;
  if(delay==i) {return = true}else{return=false}
}
function RSleep (max, min) {
  var d = new Date();
  var H = ('0' + d.getHours()).slice(-2);
  var m = ('0' + d.getMinutes()).slice(-2);
  var s = ('0' + d.getSeconds()).slice(-2);
 
  var passed =false, i=0;
  i+=1;
  if(delay ==i) {passed = true; i=0;delay = Math.floor(Math.random() * ((max-min)+1) + min);}else{passed=false}
  return passed;
}*/