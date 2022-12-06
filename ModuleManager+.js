/**
 * 
 * Script of tk400's
 * this script contains ModuleManager, TowerScaffoldzzzzszszszszszszs.
 * 
 * Enchancing LiquidBounce Hacked Client...?
 * (write description later)
 * 
 * script for Latest(1.8.9) build. (tested on 401b3c5) and LiquidBounce+
 * https://dl.ccbluex.net/skip/lgJeAGuKh9 / Original
 * 
 */
var scriptName = "ModuleManager+";
var scriptVersion = 1.42;
var scriptAuthor = "shirouto Co-Da- tk400.";

var servername = '';
var LAB = 01

var Targets={}

/* Import */
script.import("tKore.js")

function ModuleManager() {
  //var WasFallen = false;
  var MoveDir = 'A';
  var WasFallen = false;
  var ANC = true;
  var EnterConfirmCheck = EnterConfirmCheckA = false;
  var servername = ASServername = "";
  var configmode = "";
  var FallLimit = 0;
  var target = null;
  var sn;

  var values = [
    DMode = value.createBoolean("DevMode", false),
    test = value.createBoolean("test", false),
    ReadMe = value.createBoolean("ReadMe.js", false),
    //MMMode = value.createList("MMMode", ["Original", "LiquidBounce+"], ""),
    Text1 = value.createText(">MMSettings", ""),
    SLT = value.createText("CustomTag", "SuperMechaMechaSugooooiModule!"),
    Color2 = value.createText("CustomColor", "a"), //https://minecraft.gamepedia.com/Formatting_codes
    DCV = value.createBoolean("DebugChat", false),
    DML = value.createList("DebugLevel", ["NormalInfo", ""], ""),
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
    AntiNoCritical = value.createBoolean("AntiNoCritical", false), //Fixes? Not Criticalizing Bug. when you using Critical with NoFall.
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
    //AntiVoid = value.createBoolean("AntiVoidFallingViaScaffold", false), //exist on LiquidBouncePlus
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
    };
  }
  this.onMotion = function () {
    if(PSID.get()) {
      chat.print(mc.getSession().getToken())
    }
    if (ReadMe.get()) {
      chat.print(null);
      ReadMe.set(false);
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
    switch (type) {
      case "Plus":
        if (SpeedsDisabler.get()) {
          if ((SpeedModule.getState() || LJModule.getState()) && (FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState())) {
            SpeedModule.setState(false) || LJModule.setState(false);
            DC(DCV.get(), "MM", Color2.get(), "Disabled Speed or LongJump.");
          }
        };break;
      case "Original":
        if (SpeedsDisabler.get()) {
          if ((SpeedModule.getState() || LJModule.getState()) && (FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState() || TowerModule.getState())) {
            SpeedModule.setState(false) || LJModule.setState(false);
            DC(DCV.get(), "MM", Color2.get(), "Disabled Speed or LongJump.");
          }
        };break;
    }
    //VelLJ /Hypixel Fix?
    if (VelLJManage.get()) {
      if (VelocityModule.getState() == LJModule.getState()) {
        VelocityModule.setState(!LJModule.getState())
        chat.print("set to | Vel:" + !VelocityModule.getState())
      };
    };
    //ReverseStepFix
    if (ReverseStepFix.get()) {
      if(RSModule.getState()) {ReverseStepFix.set(false)}
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
            DC(DCV.get(), "MM", Color2.get(), "Reset FallDistance") /*test code*/
          }
        }
      } else {
        FallLimit = 0
      }
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
            DC(DCV.get(), "MM", Color2.get(), "Removed ClonedPlayer.")
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
            if (RSCounter.get() != ScaffoldModule.getValue("Counter").get()) {
              ScaffoldModule.getValue("Counter").set(RSCounter.get())
            }
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
      id = [26, 92, 122, 9, 116, 58, customid.get()][
        ["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"].indexOf(mode.get())
      ];
      if (DSBlock.get()) {
        DC(DCV.get(), "MM", Color2.get(), "Detected :" + servername)
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
            chat.print("DEV | Checked!");
            id = 1
            break;
          default:
            D("sorry, your server ip wasn't found on the list. now setting up to your config")
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
    //AntiCESP /this function is useful for me.
    if (AntiESP.get()) {//maybe works these code...
      if (ESPModule.getValue("Mode").get().contains(/ShaderOutline|ShaderGlow/)) {
        ESPModule.getValue("Mode").set("2D");
        chat.print("Detected")
      }
      if (StoESPModule.getValue("Mode").get().contains(/ShaderOutline|ShaderGlow/)) {
        StoESPModule.getValue("Mode").set("2D");
        chat.print("detected")
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
          D("Enter has pressed. Now saving " + servername)
          Config("Save", ASServername)
          AutoSave.get() && (ASServername = servername, D("EnterKey pressed."));
        } else if (AutoLoader) {
          AutoLoader = EnterConfirmCheckA = false;
          D("Enter has pressed. Now loading " + servername)
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
    if (sn.test(/hypixel/i)) {
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

function ModuleRandomizer() { //Beta Module
  var a = b = r = h = htime = htiming = Subtraced=xCPS=nCPS= 0;

  var KAMR = value.createBoolean("KillAura", false);
  var UseHT = value.createBoolean("UseHurtTime", false);
  var Method = value.createList("ChangeMethod", ["UseDifference", "FullyRandom", "MinChanger"], "");
  var ntHT = value.createInteger("MinToHurtTime", 40, 0, 70);
  var xtHT = value.createInteger("MaxToHurtTime", 40, 0, 70);
  var HT = value.createInteger("HurtingTime", 10, 0, 20);
  var CM = value.createList("ChargingMoment", ["Always", "ChargeOnAttack"], "ChargeOnAttack");
  var KAMRS = value.createInteger("ChargingSpeed", 40, 0, 100);
  var text1 = value.createText("UseDifference", "");
  var max = value.createInteger("Max", 0, 0, 20); // Min-Min<Min<Max-Min<Max
  var maxn = value.createInteger("Max-Min", 0, 0, 20);
  var min = value.createInteger("Min", 0, 0, 20);
  var minn = value.createInteger("Min-Min", 0, 0, 20);
  var C = value.createBoolean("ChargeNow", false); //Debugy

  this.addValues = function(v) {
    v.add(KAMR)
    v.add(UseHT)
    v.add(Method)
    v.add(ntHT)
    v.add(xtHT)
    v.add(HT)
    v.add(CM)
    v.add(KAMRS)
    v.add(text1)
    v.add(max)
    v.add(maxn)
    v.add(min)
    v.add(minn)
    v.add(C)
  }
  this.getName = function() {
    return "ImJustProGaymer" //aka AntiBAN/BANPreventor
  }

  this.getDescription = function() {
    return "ModuleRandomizer"
  }

  this.getCategory = function() {
    return "Exploit"
  }

  this.onEnable = function() {
    xCPS = KAModule.getValue("MaxCPS").get()
    nCPS = KAModule.getValue("MinCPS").get()

    //var VH = VelocityModule.getValue("Horizontal").get()
    //var VV = VelocityModule.getValue("Vertical").get()
  }
  this.onUpdate = function() {
    if (Method.get("MinChanger") && !KAModule.getValue("MaxCPS").get(20)) {
      KAModule.getValue("MaxCPS").set(20)
    }
    if (C.get()) {r = 0;C.set(false);
    }
    if (KAMR.get()) {
      if (htime == tHT.get()) {
        if (UseHT.get()) { //Make Stronger your KillAura Settings. if Charged
          chat.print("Now HurtTime")
          htiming++
          KAModule.getValue("MaxCPS").set(DelayCal(max.get(), maxn.get()))
          KAModule.getValue("MinCPS").set(DelayCal(min.get(), minn.get()))
          if (htiming == HT.get()) { //Reset CPS on HurtTime was ended.
            htiming = htime = 0;
            chat.print("reset HurtTime")
            KAModule.getValue("MaxCPS").set(xCPS)
            KAModule.getValue("MinCPS").set(nCPS)
          }
        }
      } else {
        if (CM.get() === "Always") {r++}
        if (r==KAMRS.get()) {r=0;
          D("Value has Changed")
          switch (Method.get()) {
            case "UseDifference":
              a = DelayCal(max.get(), min.get())
              KAModule.getValue("MaxCPS").set(a)
              KAModule.getValue("MinCPS").set((a - Subtraced))
              break;
            case "FullyRandom":
              a = DelayCal(max.get(), min.get())
              b = DelayCal(a, min.get())
              KAModule.getValue("MaxCPS").set(a)
              KAModule.getValue("MinCPS").set(b)
              break;
            case "MinChanger": //test
              KAModule.getValue("MinCPS").set(DelayCal(max.get(), min.get()))
              break;
          }
        }
      }
    }
  }
  this.onAttack = function() {
    if (UseHT.get() && htime>0) {htime--}
    if (CM.get("Attack")) {r--}
  }
  this.onPacket = function() {
    //insert here Catch Velocity Packet Code.
  }
  this.onRender2D = function() {
    mc.ingameGUI.drawCenteredString(mc.fontRendererObj, "a=" + a + ", b=" + b + ", xCPS=" + xCPS + ", nCPS=" + nCPS + ", r=" + r + ", htime=" + htime + ", htiming=" + htiming + ", Subtracted=" + Subtraced, mc.displayWidth / 4, (mc.displayHeight / 2.5) + 8, -1)
  }
  this.onDisable = function() {
    a = r = htime = htiming = 0;
    KAModule.getValue("MaxCPS").set(xCPS)
    KAModule.getValue("MinCPS").set(nCPS)
  }
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
  //var hideScaffold; var hideTower;

  var values = [
    NAT = value.createBoolean("NoAutoTower", false), //wtf?
    Color = value.createText("TSMMCustomColor", "a"),
    DCV = value.createBoolean("TSMMDebugChat", false),
    BR = value.createBoolean("BodyReverser", false),
    ScJMode = value.createList("ScaffoldJump", ["Off", "Sprint", "XZR", "VClip"], "Off"),
    SCJReset = value.createList("SCJSReset", ["Same","Ground","Air", "Off"], "Same"),
    PotionTower = value.createBoolean("PotionTower", false),
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
    AutoSneak = value.createBoolean("AutoSneak", false),
    MinDelay = value.createInteger("MinDelay", 5, 0, 30),
    MaxDelay = value.createInteger("MaxDelay", 10, 0, 30),
    RAutoSneak = value.createList("ReleaseKeyMode", ["Instant", "Delay"], "Delay"),
    RMinDelay = value.createInteger("ReleaseMinDelay", 0, 0, 3),
    RMaxDelay = value.createInteger("ReleaseMaxDelay", 1, 0, 3),
    MLGScaffold = value.createBoolean("MLGSCaffold", false),
    MLGSprint = value.createBoolean("AfterSprint", true),
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
    i=r=z=0;
    CoolTime = 0;
    CoolTimeB = false;
    delay = DelayCal(MaxDelay.get(), MinDelay.get());
    RDelay = DelayCal(MaxDelay.get(), MinDelay.get())
    if (BR.get()) {
      mc.thePlayer.rotationYaw += 180
    }
    ScaffoldModule.setState(true);
    if(type == "Original") {
      TowerModule.setState(false);
    }
    if (JumpScaffolding.get()) {
      ScJMode.set("Off");
      if (!ScaffoldModule.getValue("SameY").get()) {ScaffoldModule.getValue("SameY").set(true)}
    }
    // //
    if (WithBlinkAPI.get()) {
      if(BlinkModule.getState()) {
        if (RemoveGhost.get()) {
          for (var x in mc.theWorld.loadedEntityList) {
            var entities = mc.theWorld.loadedEntityList[x]; //i think generate from Blink's Fakeplayer entityID is fixed for "-1337".
            if ((entities != mc.thePlayer) && (entities.getEntityId() == -1337)) {
              mc.theWorld.removeEntity(entities)
            }
          }
        }
      }
    };
    DC(DCV.get(), "TS", Color.get(), "§a+Enabled TSMM and Scaffold and Tower")
  };
  this.onUpdate = function() {
    //chat.print(ScaffoldModule.launchY) /hmm private value
    switch (type) {
      case "Original":
        if (TowerDelayer.get()) {
              if(CoolTimeB) {
                if (CoolTime>=CT.get()) {
                  CoolTime = 0
                  CoolTimeB = false
                } else {
                  CoolTime++
                  mc.gameSettings.keyBindJump.pressed = false;
                  DCV.get() && chat.print("you are now in CoolTime")
                }
              }
              if (TowerModule.getState() && z>=TDDelay.get()) {
                z = CoolTime = 0
                CoolTimeB = true;
                TowerModule.setState(false);
                DCV.get() && chat.print("test");
              } else {z++}
        }
        if (TowerModule.getState()) {
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
        } else if(SCATower.get() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {
          if (PotionTower.get()) {
            if (!mc.thePlayer.isPotionActive(Potion.jump)) {
              ScaffoldModule.setState(false);
              TowerModule.setState(true);
              DC(DCV.get(), "TS", Color.get(), "Enabled Speed.")
            }
          } else if (!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {
            ScaffoldModule.setState(false);
            TowerModule.setState(true);
            DC(DCV.get(), "TS", Color.get(), "Enabled Tower, Disabled Scaffold")
          };
        }
        //ForceSprint /Fix Can't sprinting Bug... or my setting? /* Fixed in LiquidBounce+!
        if (ForceSprint.get() && ScaffoldModule.getState()) {
          mc.thePlayer.setSprinting(true)
        }
        if (!ScaffoldModule.getState()) {
          if (!mc.gameSettings.keyBindJump.pressed) {
            ScaffoldModule.setState(true);
            type =="Original" && TowerModule.setState(false)
            DC(DCV.get(), "TS", Color.get(), "Enabled Scaffold, Disabled Tower")
          }
        } else {
          if (!TowerModule.getState()) {
            if (!mc.gameSettings.keyBindJump.pressed) {
              ScJMode.get("Sprint") && (ScaffoldModule.getValue("Sprint").set(true))
            } else if (mc.thePlayer.onGround) {
              switch (ScJMode.get()) {
                case "Sprint":
                  ScaffoldModule.getValue("Sprint").set(false);
                  break;
                case "XZR":
                  mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
                  break;
                case "VClip":
                  JumpCalnceler = true, mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += 1, mc.thePlayer.posZ);
                  break;
              }
            }
          }
        }
        //MLGScaffold Code
        if (MLGScaffold.get()) {
          mc.gameSettings.keyBindSneak.pressed = true;
          ScaffoldModule.getValue("Sprint").set(false);
          SprintModule.setState(false);
          if (mc.thePlayer.onGround) {mc.gameSettings.keyBindJump.pressed = true};
          SprintModule.getState() && (SprintModule.setState(false))
        }
        break;
      case "Plus":
        if(NAT.get()) {
          if(mc.gameSettings.keyBindJump.isKeyDown() && !MoveCheck("OnlyKey")) {
            mc.gameSettings.keyBindJump.pressed = false;//i finaly found this combo code! yay!!!
            ScaffoldModule.getValue("EnableTower").set(true)
          }else{
            ScaffoldModule.getValue("EnableTower").set(false)
          }
        }
        if(TowerDelayer.get()) {
          if(CoolTimeB) {
            CoolTime++
            if (CoolTime>=CT.get()) {
              CoolTime = 0
              CoolTimeB = false
            } else {
              mc.gameSettings.keyBindJump.pressed = false;
              DCV.get() && chat.print("you are now in CoolTime")
            }
          }
          if(ScaffoldModule.getValue("EnableTower").get()) {
            if(mc.gameSettings.keyBindJump.pressed && z>=TDDelay.get()) {
              z = CoolTime = 0
              CoolTimeB = true;
              mc.gameSettings.keyBindJump.pressed = false;
              DCV.get() && chat.print("test");
            }
          }
        }
        ForceSprint.get() && ForceSprint.set(false)
        if (!mc.gameSettings.keyBindJump.pressed) {
          ScJMode.get("Sprint") && (ScaffoldModule.getValue("SprintMode").set(SCJReset.get())) //fuck.
        } else if (mc.thePlayer.onGround) {
          switch (ScJMode.get()) {
            case "Sprint":
              ScaffoldModule.getValue("SprintMode").set("Off");
              break;
            case "XZR":
              mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
              break;
            case "VClip":
              JumpCalnceler = true, mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += 1, mc.thePlayer.posZ);
              break;
          }
        }
        break;
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
          if(!mc.gameSettings.keyBindForward.isKeyDown()) {
            switch (JSMode.get()) {
              case "SimplyJump":
                mc.thePlayer.jump();
                break;
              case "JumpKey":
                mc.gameSettings.keyBindJump.pressed = true;
                break;
              case "Motion":
                mc.thePlayer.motionY = JSV.get();
                break;
              case "TP":
                mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + JSV.get(), mc.thePlayer.posZ);//smh i was a coder of noob...
                JumpCalnceler = true;
                break;
            }
          }
        }
      }
    }
  };
  this.onMove = function(e) {
    if(type =="Original") {
      chat.print("Crap")
        if (TowerModule.getState()) {
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
    }
    if (invBlock.get()) {
      if (mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof Furnace) {
        //chat.print("Detected you on Furnace or Workbench or Chest");
        mc.gameSettings.keyBindSneak.pressed = true; //mc.thePlayer.sneak is not working.. :(
        enventcanceler = true;
      } else { /*D("eventcanceler will be false to this moment.")*/ }
    }
    if (mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) {
      if (BR.get()) { //Reverse Forward to BackWard
        if (mc.gameSettings.keyBindForward.pressed) {
          mc.gameSettings.keyBindBack.pressed = true;
          mc.gameSettings.keyBindForward.pressed = false;
        }
      }
      //AutoSneaker
      if (AutoSneak.get()) {
        if(i>=delay && !RESSNK) {
          mc.gameSettings.keyBindSneak.pressed = true;
          RANDOMIZA&&(RESDelay=DelayCal(RMinDelay,RMaxDelay),RANDOMIZA=false)
          switch (RAutoSneak.get()) {
            case "Instant":
              mc.gameSettings.keyBindSneak.pressed = false,i=0
              break;
            case "Delay":
              RESSNKDEL++
              if(RESSNKDEL>=RESDelay) {RESSNK=RANDOMIZA=true,i=RESSNKDEL=0}
              break;
          }
        }else {i++}
      }
    }
  }
  this.onPacket = function(e) {
    if (invBlock.get()) {
      if(e.getPacket() instanceof S2DPacketOpenWindow) {
        e.cancelEvent()
       // mc.thePlayer.addToSendQueue(S2EPacketCloseWindow())//idk packets.
      }
    }
  }
  this.onJump = function(e) {
    JumpCalnceler && (e.cancelEvent(), JumpCalnceler = false)
  }
  this.onDisable = function() {
    switch (type) {
      case "Original":
        TowerModule.getState() && TowerModule.setState(false);
        if (MLGSprint.get()) {
          SprintModule.setState(true)
        } else {
          SprintModule.setState(false)
        }
      case "Plus":
        ScaffoldModule.getState() && ScaffoldModule.setState(false);break;
    }
    //ScaffoldModule.array = hideScaffold; TowerModule.array = hideTower;
    DC(DCV.get(), "TS", Color.get(), "Disabled TSMM.")
    if (BR.get()) {
      mc.thePlayer.rotationYaw += 180
    } /*Fix Head Rotation. only this code...*/
    WithBlinkAPI.get() && BlinkModule.setState(false);
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
    mc.ingameGUI.drawString(mc.fontRendererObj, "§n§l§6"+games[select].addr[mode], mc.displayWidth / 4, (mc.displayHeight / 2.5 -1), -1)
    for(x=0;x<games.length;x=(x+1)|0) {
      mc.ingameGUI.drawString(mc.fontRendererObj, checker(x,select) + games[x].name, mc.displayWidth / 4, (mc.displayHeight / 2.5) + (x*20)+5, -1)
      for(y=0;y<games[x].Texts.length;y=(y+1)|0) {
        mc.ingameGUI.drawString(mc.fontRendererObj, checker(y,mode,x,select) + games[x].Texts[y], mc.displayWidth / 4 + ((games[x].Texts[y].length*4)*y), (mc.displayHeight / 2.5) + (x*20)+12, -1)
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
        if(select<games.length) {select++;mode=0}
      }if(keycode == 203) {
        if(mode>0) {mode--}
      }else if(keycode == 205) {
        if(mode<(games[select].addr.length-1)) {mode++}
      }else if(keycode == 28 || keycode ==156) {
        sendChat("/play " + games[select].addr[mode])
      }
    }
    //chat.print(keycode+"|"+select+"|"+mode+"|"+games[select].addr.length)
  }
}


function tk400sAdditonalModule() {
  var values = [
    DelayTick = value.createInteger("DelayTicks", 1, 0, 30),
    Timer = value.createFloat("Timer", 0.1, 0, 10),
    downtimer = value.createFloat("downtimer", 0.1, 0, 3),
    uptimer = value.createFloat("uptimer", 0.1, 0, 3),
    stoptimer = value.createFloat("stoptimer", 0.1, 0, 3),
    TP = value.createFloat("TP", 0.05, 0, 1),
    Motion = value.createFloat("Motion", 0.1, 0, 1),
    Criticals = value.createList("Criticals", ["Off", "Jump", "SpeedModule", "TP", "Motion", "FastJump/Motion", "FastJump/TP", "FastJump/Timer", "testTimer", "testMotion"], "Off"),
    WithJump = value.createBoolean("WithJump", false),
    ClimbSpeed = value.createList("ClimbSpeed", ["Off", "TP", "Motion", ""], "Off"),
    BlockAnimation = value.createList("BlockAnimation", ["RandomizedProgress", "SwingProgressAbort", "BlockBlock", "Off"], "Off"),
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
          case "ExtremeRandomizedPos": //Never Recommanded. i think allows you to crash your computer?
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
      if (mc.timer.timerSpeed <= 0.001 && !fixed) {
        mc.timer.timerSpeed = 1, chat.print("Game has Freezed or Slowely. now fixing...")
        Timer
        fixed = true;
      } else {
        fixed = false;
        chat.print("a")
      }
    }
    switch (BlockAnimation.get()) {
      case "RandomizedProgress":
        LiquidBounce.getModule(KillAura).blockingStatus && (mc.thePlayer.swingProgress = Math.random());
        break;
      case "SwingProgressAbort":
        //if(mc.currentScreen instanceof GuiInventory || mc.currentScreen instanceof GuiChest) {}else{
        //Fix? canceling Opening Inv.
        LiquidBounce.getModule(KillAura).blockingStatus && (mc.thePlayer.swingProgress = animation.get());
        break;
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
    if (mc.thePlayer.onGround && !mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0 && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
      switch (Criticals.get()) {
        case "Jump":
          SpeedModule.setState(false);
          mc.thePlayer.jump();
          break;
        case "SpeedModule":
          if (mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed) {
            if (!mc.gameSettings.keyBindBack.pressed && KAModule.getState() && !SpeedModule.getState() && !LJModule.getState() && !ScaffoldModule.getState() && !TowerModule.getState()) {
              SpeedModule.setState(true);
              DC(DCV.get(), "AD", Color.get(), "Enabled Speed.")
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
      if (!mc.gameSettings.keyBindSneak.pressed && mc.thePlayer.ticksExisted % DelayTick.get() == 0 && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
        mc.thePlayer.onGround && mc.thePlayer.jump();
        if (!mc.thePlayer.fallDistance && !mc.thePlayer.onGround) {
          mc.timer.timerSpeed = Timer.get();
          ResetTimer = true;
          chat.print("DEBUG|TIMERED")
        };
      }
    }
  }

  this.onDisable = function() {}
}


var ModuleManager = moduleManager.registerModule(new ModuleManager)
var TSMM = moduleManager.registerModule(new TSMM);
var HypixelGameChange = moduleManager.registerModule(new HypixelGameChange);
var tk400sAdditonalModule = moduleManager.registerModule(new tk400sAdditonalModule)
var ModuleRandomizer = moduleManager.registerModule(new ModuleRandomizer)

function onEnable() {
  ModuleManager;
  TSMM;
  HypixelGameChange;
  tk400sAdditonalModule;
  ModuleRandomizer;
};

function onDisable() {
  moduleManager.unregisterModule(ModuleManager);
  moduleManager.unregisterModule(TSMM);
  moduleManager.unregisterModule(HypixelGameChange);
  moduleManager.unregisterModule(tk400sAdditonalModule);
  moduleManager.unregisterModule(ModuleRandomizer);
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
function GroundChecker(target, abst) { //i think you can use like if(GC()) {chat.print(you are on the ground.)}
  if (target == undefined) { //check when player is on the ground.
    if (abst == undefined) {
      if (mc.thePlayer.onGround) {
        return true;
      } else {
        return false;
      }
    } else {
      if (mc.thePlayer.onGround && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava()) {
        return true;
      } else {
        return false;
      }
    }
  } else /* if(target != [undefined, null, "Player", ""])*/ {
    if (abst == undefined) {
      if (target.onGround) {
        return true;
      } else {
        return false;
      }
    } else {
      if (target.onGround && !target.isOnLadder() && !target.isInWeb && !target.isInWater() && !target.isInLava()) {
        return true;
      } else {
        return false;
      }
    }
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
    if (mc.thePlayer.motionX != 0 || mc.thePlayer.motionZ != 0) {
      return true; //[D☆] Player has Moving.
    } else {
      return false;
    }
  } else if (cl != null || cl == "Zero" || cl != 0) {
    if ((mc.thePlayer.motionX < cl || mc.thePlayer.motionX > cl) || (mc.thePlayer.motionZ < cl || mc.thePlayer.motionZ > cl)) {
      return true; //[D☆] Player has Moving.
    }
  } else if(cl =="OnlyKey" || cl =="OK") {
    if(mc.gameSettings.keyBindForward || mc.gameSettings.keyBindBack || mc.gameSettings.keyBindLeft || mc,gameSettings.keyBindRight) {
      return true;
    }else{
      return false;
    }
  }
}

function wtisit() {
  var availableColors = ["§4", "§c", "§6", "§e", "§2", "§a", "§b", "§3", "§1", "§9", "§d", "§5"];
  var color = rt(availableColors)
  
  var d = new Date();
  a = ("§7["+d.getHours().slice(-2)+":"+d.getMinutes().slice(-2)+":"+d.getSeconds().slice(-2)+":"+color+DelayCal(1, 9)+"§r]");
  return a
}

function D(Desc) {
  chat.print(Desc)
}

function DC(isEnabled, Module, Color, Reason) {
  var Mo = '';
  var C = "§0";
  if (isEnabled) {
    switch (Module) {
      case "TS":
        Mo = "§5[§dTSMM§5] ";
        break;
      case "MM":
        Mo = "§5[§dMM§5] ";
        break;
      case "AD":
        Mo = "§k[§cAddedMod§r§k]§2|";
        break;
    }
    C = "§" + Color;
    Message = Mo + C + Reason;
    chat.print(wtisit() + Message);
  }
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