/**
 * 
 * Script of tk400's
 * this script contains ModuleManager, TowerScaffoldzzzzszszszszszszs, HypixelGameChanger, Quitter(new?) ChatManager(New!).
 * 
 * Enchancing LiquidBounce Hacked Client.
 * (write description later)
 * 
 * script for Latest(1.8.9) build. (tested on 401b3c5) and LiquidBounce+
 * https://dl.ccbluex.net/skip/lgJeAGuKh9 / Original
 * 
 */
var scriptName = "ModuleManager+";
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
var AimBotModule = moduleManager.getModule("AimBot");
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
var InvModule = moduleManager.getModule("InvCleaner"); //this module has renamed from InventoryCleaner. :I
var InvAAModule = moduleManager.getModule("AutoArmor");
var BlinkModule = moduleManager.getModule("Blink");
var ClickGUIModule = moduleManager.getModule("ClickGUI");
var FreeCamModule = moduleManager.getModule("FreeCam");
var StoESPModule = moduleManager.getModule("StorageESP");
var ESPModule = moduleManager.getModule("ESP");

//LiquidBounce's Util
//var hogehoge = Java.type("").class;
var RotationUtils = Java.type("net.ccbluex.liquidbounce.utils.RotationUtils").class;
var KillAura = Java.type("net.ccbluex.liquidbounce.features.module.modules.combat.KillAura").class;
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce").moduleManager;

var servername = '';

var LAB = 01

//Packets
//var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
//var clientchat = Java.type("net.minecraft.network.play.client.C01PacketChatMessage");
var C0CPacketInput = Java.type('net.minecraft.network.play.client.C0CPacketInput');
var C00PacketKeepAlive = Java.type('net.minecraft.network.play.client.C00PacketKeepAlive');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C0FPacketConfirmTransaction = Java.type('net.minecraft.network.play.client.C0FPacketConfirmTransaction');
var C0BPacketEntityAction = Java.type('net.minecraft.network.play.client.C0BPacketEntityAction');

//minecraft/Java Utils
//var hogehoge = Java.type("")
var Rotations = Java.type("net.minecraft.util.Rotations")
//var DamageSource = Java.type("net.minecraft.util.DamageSource") // unused obj
//var mouseHelper = Java.type("net.minecraft.util.MouseHelper") // unused obj

//Player | Mob States
EntityLiving = Java.type('net.minecraft.entity.EntityLivingBase');
EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
Potion = Java.type('net.minecraft.potion.Potion');
GuiInventory = Java.type("net.minecraft.client.gui.inventory.GuiInventory");
GuiChest = Java.type("net.minecraft.client.gui.inventory.GuiChest");
GameMode = Java.type('net.minecraft.world.WorldSettings.GameType')
ItemCameraTransforms = Java.type('net.minecraft.client.renderer.block.model.ItemCameraTransforms')

//Blocks
BlockPos = Java.type('net.minecraft.util.BlockPos')
SlabBlock = Java.type('net.minecraft.block.BlockSlab')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')
AirBlock = Java.type('net.minecraft.block.BlockAir')
Workbench = Java.type('net.minecraft.block.BlockWorkbench')
Chest = Java.type('net.minecraft.block.BlockChest')
Furnace = Java.type('net.minecraft.block.BlockFurnace')

function ModuleManager() {
  //var WasFallen = false;
  var MoveDir = 'A';
  var teex = false;
  var WasFallen = false;
  var ANC = true;
  var EnterConfirmCheck = EnterConfirmCheckA = false;
  var servername = ASServername = "";
  var configmode = "";
  var FPSLimited = false;
  var FallLimit = 0;
  var target = null;
  //var targetposX = 0;
  //var targetposZ = 0;
  //var azoz = 0;
  //var azoz2 = 0;

  var test = value.createBoolean("test", false);
  var ReadMe = value.createBoolean("ReadMe.js", false);
  var MMMode = value.createList("MMMode", ["Original", "LiquidBounce+"], "");
  var Text1 = value.createText(">MMSettings", "");
  var SLT = value.createText("CustomTag", "SuperMechaMechaSugooooiModule!");
  var Color2 = value.createText("CustomColor", "a"); //https://minecraft.gamepedia.com/Formatting_codes
  var DCV = value.createBoolean("DebugChat", false);
  var DML = value.createList("DebugLevel", ["NormalInfo", ""], "");
  //var test = value.createBoolean("test", true); //Using on Develop, tset.
  //var Crandom = value.createBoolean("ConfigRandomizer", false);
  var SpeedJump = value.createBoolean("Speed", true);
  var WASDSpeed = value.createBoolean("AntiHorizontalSpeedStrafing", false);
  var AHSSM = value.createList("AHSSMethod", ["FreeControl", "ForcedDirection", "ForcedDirection2"], "ForcedDirection");
  var AHSSD = value.createBoolean("AHSSDebug", false);
  var WithSC = value.createBoolean("WithSmoothCamera", false);
  var SpeedsDisabler = value.createBoolean("SpeedsDisabler", true);
  //var SDlist = value.createBoolean("DisableWhen", ["Scaffolding","MovementModule"],""); //idea = Czhechek's CC?
  var ChangeMode = value.createText("ChangingMode", "Custom");
  var VelLJManage = value.createBoolean("VelLongJump", true);
  var AutoKAJump = value.createBoolean("AutoKAJump", false);



  var ReverseStepFix = value.createBoolean("ReverseStepFix", true); //using for Slime Motion Jumping, Falling on when you Floating from block.
  var AntiNoCritical = value.createBoolean("AntiNoCritical", false); //Fixes? Not Criticalizing Bug. when you using Critical with NoFall.
  var AutoFClear = value.createBoolean("AutoFClear", false);
  var NoCPBlink = value.createBoolean("ClonedPlayerRemover", false);
  var Text2 = value.createText("§l>InvModeManager", "");
  var Inv = value.createBoolean("Inv", true);
  var InvList = value.createList("Mode", ["None", "Open", "Simulate", "Both"], "None");
  var Text3 = value.createText(">BlockRenderManager", "");
  var RenderSetting = value.createBoolean("RenderSetting", true);
  var RSCounter = value.createList("Counter", ["false", "Off", "Simple", "Advanced", "Sigma", "Novoline"], "false");
  var RSMark = value.createBoolean("Mark", false);
  var Text4 = value.createText(">BlockSelection", "");
  var Selection = value.createBoolean("Selection", false);
  var DSBlock = value.createBoolean("DetectServer'sBlock", false);
  var mode = value.createList("SetBlock", ["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"], "Bed");
  var customid = value.createInteger("CustomID", 0, 0, 197);
  var MidClick = value.createBoolean("MidClickToSet", false);
  var fucker = value.createBoolean("Fucker", true);
  var EnableFucker = value.createBoolean("EnableFucker", false);
  var blockesp = value.createBoolean("BlockESP", true);
  var EnableESP = value.createBoolean("EnableESP", true);
  var AutoLeave = value.createBoolean("AlwaysAutoLeave", false); //Always Enable LB's AutoLeave Module.
  var Text5 = value.createText(">ConfigManager", "");
  var AutoLoad = value.createBoolean("AutoLoader", false);
  var LoadConfig = value.createBoolean("LoadConfig", false);
  var AutoSave = value.createBoolean("AutoSaver", false);
  var SaveConfig = value.createBoolean("SaveConfig", false);
  var SavingName = value.createText("CurrentLoad/SaveFileName", "N/A");
  var DSConfig = value.createBoolean("ServerDetect", false);
  var AntiESP = value.createBoolean("AntiNoControlableESP", false);
  var NoMouse = value.createBoolean("NoMouseWhenAttack", false);
  //var AntiVoid = value.createBoolean("AntiVoidFallingViaScaffold", false); //exist on LiquidBouncePlus
  var MinFallDis = value.createFloat("MinFallDistance", 1.5, 0, 30);
  var auto = value.createBoolean("AutoFPSLimit", true);
  var PSID = value.createBoolean("PrintSessionID", false);

  this.addValues = function(v) {
    v.add(test)
    v.add(ReadMe);
    v.add(MMMode);
    v.add(Text1);
    v.add(SLT);
    v.add(Color2);
    //v.add(test);
    v.add(DCV);
    v.add(DML);
    v.add(SpeedsDisabler);
    v.add(ChangeMode)
    v.add(VelLJManage);
    v.add(AutoKAJump);
    v.add(ReverseStepFix);
    v.add(AntiNoCritical);
    v.add(SpeedJump);
    v.add(WASDSpeed);
    v.add(AHSSM);
    v.add(AHSSD);
    v.add(WithSC);
    v.add(AutoFClear);
    v.add(NoCPBlink);
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
    v.add(MidClick);
    v.add(fucker);
    v.add(EnableFucker);
    v.add(blockesp);
    v.add(EnableESP);
    v.add(AutoLeave);
    v.add(Text5);
    v.add(AutoLoad);
    v.add(LoadConfig);
    v.add(AutoSave);
    v.add(SaveConfig);
    v.add(SavingName);
    v.add(DSConfig);
    v.add(AntiESP);
    v.add(NoMouse);
    //v.add(AntiVoid) //exist on LiquidBouncePlus
    v.add(MinFallDis);
    v.add(auto);
    v.add(PSID);
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
  this.onEnabled = function() {}
  this.onUpdate = function() {
    if (test.get()) {
      hclip(3)
    }
    if(PSID.get()) {
      chat.print(mc.getSession().getToken())
    }
    if (ReadMe.get()) {
      chat.print(null);
      ReadMe.set(false);
    }
    //Manage SpeedJump /Fix Jump Boosting
    if (SpeedJump.get()) {
      if (SpeedModule.getState() && mc.thePlayer.onGround) {
        if (mc.gameSettings.keyBindJump.pressed) {
          if (mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindBack.pressed) {
            mc.gameSettings.keyBindJump.pressed = false;
            DC(DCV.get(), "MM", Color2.get(), "Disabled Jump.");
          }
        }
      }
    };
    //WASDSpeed
    if (WASDSpeed.get()) { //==> this code is working, but i think Inefficient. well good for Detecting Faster Strafing Cheat <==//
      if (AHSSD.get()) {
        DC(DCV.get(), "MM", Color2.get(), "MoveDirection =" + MoveDir)
      }
      if (SpeedModule.getState()) {
        if (WithSC.get()) {
          mc.gameSettings.smoothCamera = true;
          teex = true
        }
        if (mc.thePlayer.onGround) {
          if (!mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindForward.pressed) {
            MoveDir = 'A'
          }
          if (mc.gameSettings.keyBindForward.pressed) {
            MoveDir = 'F'
          }
          if (mc.gameSettings.keyBindRight.pressed) {
            MoveDir = 'R'
          }
          if (mc.gameSettings.keyBindLeft.pressed) {
            MoveDir = 'L'
          }
          if (mc.gameSettings.keyBindBack.pressed) {
            MoveDir = 'B'
          }
          if (mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindRight.pressed) {
            MoveDir = 'FR'
          }
          if (mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindLeft.pressed) {
            MoveDir = 'FL'
          }
          if (mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindLeft.pressed) {
            MoveDir = 'BL'
          }
          if (mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindRight.pressed) {
            MoveDir = 'BR'
          }
        } else {
          if (WithSC.get() && teex) {
            mc.gameSettings.smoothCamera = false;
            teex = false
          }
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
      if ((SpeedModule.getState() || LJModule.getState()) && (FlyModule.getState() || FreeCamModule.getState() || ScaffoldModule.getState() || TowerModule.getState())) {
        SpeedModule.setState(false) || LJModule.setState(false);
        DC(DCV.get(), "MM", Color2.get(), "Disabled Speed or LongJump.");
      }
    };
    //VelLJ /Hypixel Fix?
    if (VelLJManage.get()) {
      if (VelocityModule.getState() == LJModule.getState()) {
        VelocityModule.setState(!LJModule.getState())
        chat.print("set to | Vel:" + !VelocityModule.getState())
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
            DC(DCV.get(), "MM", Color2.get(), "Reset FallDistance") /*test code*/
          }
        }
      } else {
        FallLimit = 0
      }
    }
    //AutoKAJump
    if (AutoKAJump.get() && KAModule.getState()) {
      mc.gameSettings.keyBindJump.pressed = true
    };
    //RemoveClonedPlayer
    if (NoCPBlink.get()) { //cloned from TSMM's
      if (BlinkModule.getState()) {
        for (var x in mc.theWorld.loadedEntityList) {
          var entities = mc.theWorld.loadedEntityList[x]; //i think generate from Blink's Fakeplayer entityID is fixed for "-1337".
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
        switch (MMMode.get()) {
          case "LiquidBounce+":
            if (RSCounter.get() != (ScaffoldModule.getValue("Counter").get() || TowerModule.getValue("Counter").get())) {
              chat.print("b")
              ScaffoldModule.getValue("Counter").set(RSCounter.get())
              TowerModule.getValue("Counter").set(RSCounter.get())
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
    //Inv /This is ???
    if (Inv.get()) {
      switch (InvList.get()) {
        case "None":
          if (InvModule.getValue("invOpen").get()) {
            InvModule.getValue("invOpen").set(false)
          };
          if (InvModule.getValue("SimulateInventory").get()) {
            InvModule.getValue("SimulateInventory").set(false)
          }
          if (InvAAModule.getValue("invOpen").get()) {
            InvAAModule.getValue("invOpen").set(false)
          };
          if (InvAAModule.getValue("SimulateInventory").get() == true) {
            InvAAModule.getValue("SimulateInventory").set(false)
          }
          break;
        case "Open":
          if (InvModule.getValue("invOpen").get(false)) {
            InvModule.getValue("invOpen").set(true)
          };
          if (InvModule.getValue("SimulateInventory").get()) {
            InvModule.getValue("SimulateInventory").set(false)
          }
          if (InvAAModule.getValue("invOpen").get(false)) {
            InvAAModule.getValue("invOpen").set(true)
          };
          if (InvAAModule.getValue("SimulateInventory").get() == true) {
            InvAAModule.getValue("SimulateInventory").set(false)
          }
          break;
        case "Simulate":
          if (InvModule.getValue("invOpen").get()) {
            InvModule.getValue("invOpen").set(false)
          };
          if (InvModule.getValue("SimulateInventory").get(false)) {
            InvModule.getValue("SimulateInventory").set(true)
          }
          if (InvAAModule.getValue("invOpen").get()) {
            InvAAModule.getValue("invOpen").set(false)
          };
          if (InvAAModule.getValue("SimulateInventory").get(false)) {
            InvAAModule.getValue("SimulateInventory").set(true)
          }
          break;
        case "Both":
          if (InvModule.getValue("invOpen").get(false)) {
            InvModule.getValue("invOpen").set(true)
          };
          if (InvModule.getValue("SimulateInventory").get(false)) {
            InvModule.getValue("SimulateInventory").set(true)
          }
          if (InvAAModule.getValue("invOpen").get(false)) {
            InvAAModule.getValue("invOpen").set(true)
          };
          if (InvAAModule.getValue("SimulateInventory").get(false)) {
            InvAAModule.getValue("SimulateInventory").set(true)
          }
          break;
      }
    }
    //Selection
    if (Selection.get()) {
      id = [26, 92, 122, 9, 116, 58, customid.get()][
        ["Bed", "Cake", "Dragon_Egg", "Obsidian", "Enchanting_Table", "Crafting_Table", "Custom"].indexOf(mode.get())
      ];
      if (DSBlock.get()) {
        DC(DCV.get(), "MM", Color2.get(), "Detected :" + servername)
        switch (servername) { //next feature is for() config system? xd
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
    if (AntiESP.get()) {
      if (ESPModule.getValue("Mode").get() == "ShaderOutline" || ESPModule.getValue("Mode").get() == "ShaderGlow") {
        ESPModule.getValue("Mode").set("2D");
        chat.print("Detected")
      }
      if (StoESPModule.getValue("Mode").get() == "ShaderOutline" || StoESPModule.getValue("Mode").get() == "ShaderGlow") {
        StoESPModule.getValue("Mode").set("2D");
        chat.print("detected")
      }
    }
  }
  this.onMove = function() {
    /*if(AntiVoid.get()) {
      if(!mc.thePlayer.onGround && mc.thePlayer.fallDistance >= MinFallDis.get()) {
        ScaffoldModule.state=true; WasFallen=true;
      }else if(WasFallen) {DC(DCV.get(),"MM",Color2.get(),"Catch detected. Disabling ScaffoldModule."); ScaffoldModule.state = false;WasFallen=false}
    }*/
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
    //DebugMenu
    /*if(DebugMenu) {
      
    }else if(e.getKey()) {}*/
  }
  this.onAttack = function(e) {
    target = e.getTargetEntity();
    NoMouse.get() && (mc.gameSettings.keyBindUseItem.pressed = mc.gameSettings.keyBindAttack.pressed = false)
      //AntiNoCritical
    AntiNoCritical.get() && NoFallModule.getState() && (NoFallModule.setState(false));
  };


  this.onWorld = function() {
    //This is not Module, But i think this is useful (Ex:Mineplex) :)
    if (AutoFClear.get()) {
      commandManager.executeCommand(".friends clear")
    }
    //Check AutoLeave was Disabled.
    if (AutoLeave.get()) {
      if (!AutoLeaveModule.getState()) {AutoLeaveModule.setState(true)}
    }
    //Used for ConfigSaver
    if (mc.getCurrentServerData().serverIP.match(".hypixel.net" || "hypixel.cn" || "hypixel.net")) {
      servername = "Hypixel"
    } else if (mc.getCurrentServerData().serverIP.match(".mineplex.com")) {
      servername = "Mineplex"
    } else if (mc.getCurrentServerData().serverIP.match(".cubecraft.net" || "cubecraft.net")) {
      servername = "Cubecraft"
    } else if (mc.getCurrentServerData().serverIP.match(".ccbluex.net")) {
      servername = "CCBlueX"
    } else if (mc.getCurrentServerData().serverIP.match("mccentral.org")) {
      servername = "MCCentral"
    } else if (mc.getCurrentServerData().serverIP.match("redesky.com")) {
      servername = "Redesky"
    } else if (mc.getCurrentServerData().serverIP.match("gommehd.net")) {
      servername = "GommeHD"
    } else {
      servername = "undetected"
    }
    // EXPEPIMENTAL //
    SavingName.set(servername);
    if (AutoSave.get() || AutoLoad.get()) {
      if (AutoSave.get()) {
        if (ASServername == "") {
          ASServername = servername; /*D("detected ASSN has Null. setting uped to | "+ASServername+" / "+servername)*/
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
  this.onClickBlock = function(e) {//修正すんのめんどくさい!やだ!
    //if(MidClick.get()) {
    //  chat.print(e.getClickedBlock())
    //  //id =mc.theWorld.getBlockState(new BlockPos(e.getClickedBlock())).getBlock()
    //  //fucker.get() && FuckerModule.getValue("Block").set(id);
    //  //blockesp.get()&&BlockESPModule.getValue("Block").set(id) 
    //  MidClick.set(false)
    //}
  }
  this.onLoad = function() {
    if (auto.get() && !FPSLimited) { //fixes fpslimiter has reseting for reboootowafawef
      commandManager.executeCommand("/fpslimit unlimited")
      auto.set(false);
      FPSLimited = true;
    }
  }
}
/* gokuhi project ?
function TargetStrafation() {
  var rotYawVal = rotationYaw = 0;
  var azoz = 0;
  var target = null;
  var sin = cos = 0;
  var Fsin = Fcos = 0;
  var targetposX = targetposZ = 0;
  var FtargetposX = FtargetposZ = 0;
  var NegTarRot = PosTarRot = rot = 0;
  var posX = posZ = NearestX = NearestZ = tan = 0
  var ticks = 0;
  var state = 'Null'
  var ratate = 360;
  var RState=0;
  var speed=0;
  var test1 = 0;
  var test2 = 0;
  var yaw=speed=0;

  var mode = value.createList("Mode", ["AimBottedLegitTS", "LegitlyRotateY","SetXZ", "MotionXZ", "None"], "") //Δ version
  var fl = value.createInteger("FixLength", 10, 0, 100) //Δ version
  var range = value.createFloat("Range", 3.25, 0, 8) //Δ version
  var Rect = value.createInteger("Rectangle", 8, 0, 36) //Δ version
  var Tole = value.createFloat("Tolerances", 0.3, 0, 1) //Δ version
  //var Boost = value.createFloat("Boost", 0.1, 0, 180) //Δ version
  var DegValue = value.createFloat("Deg", 8, 40, 360)
  //var rotatemode = value.createList("RotateMode", ["Default", "AlwaysRotate", "random"], "Default")

  this.addValues = function(v) {
    v.add(mode);
    v.add(fl);
    v.add(range);
    v.add(Rect);
    v.add(Tole);
    v.add(DegValue);
    //v.add(rotatemode);
  }
  this.getName = function() {
    return "TargetStrafation"
  }
  this.getDescription = function() {
    return "TargetStrafation"
  }
  this.getCategory = function() {
    return "Fun"
  }
  this.onAttack = function(e) {
    target = e.getTargetEntity();
  }
  this.onStrafe = function(e) {
    yaw =Math.atan2(target.posX -mc.thePlayer.posX , target.posZ - mc.thePlayer.posZ) / Math.PI * 180 *-1
    speed =pitagora(mc.thePlayer.motionX,mc.thePlayer.motionZ)

    e.setX(-Math.sin(yaw / 180 * Math.PI)* speed)
    e.setZ(Math.cos(yaw / 180 * Math.PI)* speed)
      mc.thePlayer.motionX -= Math.sin(yaw / 180 * Math.PI)* speed
      mc.thePlayer.motionZ += Math.cos(yaw / 180 * Math.PI)* speed
    //yaw =Math.atan2(target.posX-mc.thePlayer.posX, target.poZ - mc.thePlayer.posZ) / Math.PI * 180
    //speed = pitagora(mc.thePlayer.motionX,mc.thePlayer.motionZ)
//
    //  mc.thePlayer.motionX = -Math.sin(yaw * Math.PI / 180)* speed
    //  mc.thePlayer.motionZ =  Math.cos(yaw * Math.PI / 180)* speed
    if(_2DRoundCheck(target.posX - Math.sin(ratate / 180 * Math.PI) * range.get(),target.posZ + Math.cos(ratate / 180 * Math.PI) * range.get(),Tole.get())) {
      chat.print("test")
      if(ratate >= 360) {
        ratate = 360 / Rect.get()
      }else{
        ratate += (360 / Rect.get())
      }
    }
  }
  this.onUpdate = function() {
    if (target != null && !target.isDead && !target.getHealth() <= 0) {
      switch (mode.get()) {//umm bad code... but.. ah um.
        
        case "AimBottedLegitTS":
          AimBotFunc(target.posX, target.posZ)

          //rot = target.rotationYaw;
          if ((target.rotationYaw + DegValue.get()) > 180) {
            PosTarRot = ((-180) + (DegValue.get() - (180 - target.rotationYaw)))
          } else {
            PosTarRot = (target.rotationYaw + DegValue.get())
          }
          if ((target.rotationYaw - DegValue.get()) < -180) {
            NegTarRot = (180 - (DegValue.get() - (180 - target.rotationYaw)))
          } else {
            NegTarRot = (target.rotationYaw - DegValue.get())
          }
          //Calculation of LookLength.
          azoz = Math.atan2(target.posX - mc.thePlayer.posX, target.posZ - mc.thePlayer.posZ)
          //Shape of range
          if ((azoz / Math.PI * 180) <= PosTarRot && (azoz / Math.PI * 180) >= NegTarRot) {
            if(mc.thePlayer.keyBindLeft.pressed) {
              mc.gameSettings.keyBindLeft.pressed = false;
              mc.gameSettings.keyBindRight.pressed = true;
            }
            if(mc.thePlayer.keyBindRight.pressed) {
              mc.gameSettings.keyBindRight.pressed = false;
              mc.gameSettings.keyBindLeft.pressed = true;
            }
          }
          //Controller of F/B.
          if (ticks == 0) {
            switch (state) {
              case 'outsided':
                if (Math.sqrt(Math.pow(mc.thePlayer.posX - target.posX, 2) + Math.pow(mc.thePlayer.posZ - target.posZ, 2)) < range.get()) {
                  mc.gameSettings.keyBindForward.pressed = true;
                  ticks = fl.get()
                }
                break;
              case 'inseded':
                if (Math.sqrt(Math.pow(mc.thePlayer.posX - target.posX, 2) + Math.pow(mc.thePlayer.posZ - target.posZ, 2)) > range.get()) {
                  mc.gameSettings.keyBindBack.pressed = true;
                  ticks = fl.get()
                }
                break;
            }
            if (Math.sqrt(Math.pow(mc.thePlayer.posX - target.posX, 2) + Math.pow(mc.thePlayer.posZ - target.posZ, 2)) < range.get()) {
              state = 'inseded'
            }
            if (Math.sqrt(Math.pow(mc.thePlayer.posX - target.posX, 2) + Math.pow(mc.thePlayer.posZ - target.posZ, 2)) > range.get()) {
              state = 'outsided'
            }
          } else {ticks--}
          break;
        case "LegitlyRotateY":
          chat.print("ratate="+ratate)
          AimBotFunc(target.posX - Math.sin(ratate / 180 * Math.PI) * range.get(), target.posZ + Math.cos(ratate / 180 * Math.PI) * range.get())
          if(_2DRoundCheck(target.posX - Math.sin(ratate / 180 * Math.PI) * range.get(),target.posZ + Math.cos(ratate / 180 * Math.PI) * range.get(),Tole.get())) {
            chat.print("test")
            if(ratate >= 360) {ratate = 360 / Rect.get()
            }else{
              if(mc.gameSettings.keyBindForward.pressed) {ratate += (360 / Rect.get())}
              else if(mc.gameSettings.keyBindBack.pressed) {ratate -= (360 / Rect.get())}
            }
          }
          break;
      case "SetXZ":
        break;
      case "MotionXZ":
      }
    }
  }
  this.onEnable = function() {wasDown = false}
  this.onMove = function(e) {}
  this.onDisable = function() {
    neared = false;
  }
}

function ABAssis() {
  var WM_BR = value.createInteger("->Moving-BR", 100, 0, 100); //when you moving (like B-Hoping, TargetStrafing, etc..)
  var WS_BR = value.createInteger("->Stopping-BR", 100, 0, 100); //When you fighting with 1v1 (HvH), good for if you using lower BR for AntiBotting
  var BRCM_R = value.createBoolean("->Rotation", false);//
  var BRCM_D = value.createBoolean("->Distance", false);//
  var BRCM_M = value.createBoolean("->PlayerMovement", false);//ignoring Player setting.
  var BRCMT_B = value.createBoolean("-->isTarget?", false)
  var BRCMP_B = value.createBoolean("-->isPlayer?", false)
  var ShapeLength = value.createFloat("-->ShapeLength", 4.55, 0, 10); //not MatxRangeToBlock. Attentioning when you unselected IT. i think you can set Smaller Value than MRTB.
  var TCS_BR = value.createInteger("-->Contacted_Stopping-BR", 100, 0, 100); //from target.
  var TCM_BR = value.createInteger("-->Contacted_Moving-BR", 100, 0, 100); //from target.
  var NCS_BR = value.createInteger("-->NotContacted_Stopping-BR", 100, 0, 100); //from target.
  var NCM_BR = value.createInteger("-->NotContacted_Moving-BR", 100, 0, 100); //from target.
  var NOTS_BR = value.createInteger("-->NearOnTheTarget_Stopping-BR", 0, 0, 100); //from target. If you enabled RotateChecker, Increase or Decrease Value from RotateCheck. If Disabled, Use Positive(if you configred -, Force set to +.)BlockRate Value.
  var NOTM_BR = value.createInteger("-->NearOnTheTarget_Moving-BR", 0, 0, 100); //from target. If you enabled RotateChecker, Increase or Decrease Value from RotateCheck. If Disabled, Use Positive(if you configred -, Force set to +.)BlockRate Value.
  var NotNOTS_BR = value.createInteger("-->NotNearOnTarget_Stopping-BR", 0, 0, 100); //from target. If you enabled RotateChecker, Increase or Decrease Value from RotateCheck. If Disabled, Use Positive(if you configred -, Force set to +.)BlockRate Value.
  var NotNOTM_BR = value.createInteger("-->NotNearOnTarget_Moving-BR", 0, 0, 100); //from target. If you enabled RotateChecker, Increase or Decrease Value from RotateCheck. If Disabled, Use Positive(if you configred -, Force set to +.)BlockRate Value.
  var CheckMode = value.createList("-->CheckMode", ["OnlyXZCirculment", "Sqhere"], "FullTriangle"); //Desighen of contactCheck.
  var HeightCheck = value.createBoolean("-->HeightCheck", false); //false = Check Any YPos
  var DegValue = value.createFloat("-->DegValue", 40, 0, 360); //Recommanded 40?
  var MRTBlock = value.createFloat("-->MaxRangeToBlock", 4, 0, 10); //Blocking on Enemy is in 4(Default) Distances. Smaller is dangerous, but Bigger is umm..
  var ShapeMode = value.createList("->ShapeMode", ["InfiniTriangle", "TrumpetDesighned"], "FullTriangle"); //hm IT= only check Deg, TD=Using Dec(Circumference) (these name are will be changing.)
  //var Height = value.createFloat("---> HeightValue", 0, 0, 10); //Negative + (Enemy'sYPos) + Positive = HeightValue

  this.addValues = function(v) {
    v.add(WS_BR)
    v.add(WM_BR)
    v.add(BRCM_R)
    v.add(BRCM_D)
    v.add(BRCM_M)
    v.add(BRCMT_B)
    v.add(BRCMP_B)
    v.add(ShapeLength)
    v.add(TCS_BR)
    v.add(TCM_BR)
    v.add(NCS_BR)
    v.add(NCM_BR)
    v.add(NOTS_BR)
    v.add(NOTM_BR)
    v.add(NotNOTS_BR)
    v.add(NotNOTM_BR)
    v.add(CheckMode)
    v.add(HeightCheck)
    v.add(DegValue)
    v.add(MRTBlock)
    v.add(ShapeMode)
     //v.add(Height)
  }

  this.getName = function() {
    return "AutoBlockAssist"
  }  
  this.getDescription = function() {
    return "Allow to automaticaly management AutoBlockRate, it may effectable for AAC, and Better Autoblcokrate"
  }  
  this.getCategory = function() {
    return "Fun"
  }

  this.onAttack = function(e) {target = e.getTargetEntity()}
  this.onUpdate = function() {
    //if() {}
  }
  this.onEnable = function() {}
  this.onDisable = function() {}
}

function ModuleRandomizer() { //Beta Module
  var a = b = r = h = htime = htiming = Subtraced = 0;

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
  //var RVel = value.createBoolean("RandomVelocity", false);//Novo Clone / it exist on LiqB+.
  //var RVMode = value.createList("VelMode", ["Simple", "Reverse1", "Reverse2"], "Simple");
  //var RVelMin = value.createInteger("MinChance", 0, 0, 100);
  //var RVelMax = value.createInteger("MaxChance", 100, 0, 100);

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
    //v.add(RVel)
    //v.add(RVMode)
    //v.add(RVelMin)
    //v.add(RVelMax)
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
    var xCPS = KAModule.getValue("MaxCPS").get()
    var nCPS = KAModule.getValue("MinCPS").get()

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
    //if (RVel.get()) {
    //  switch (RVMode.get()) {
    //    case "Simple":
    //      VelocityModule.getValue("").set()
    //      break;
    //    case "Reverse1":
    //      VelocityModule.getValue("").set()
    //      break;
    //    case "Reverse2":
    //      VelocityModule.getValue("").set()
    //      break;
    //  }
    //}
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
}*/
// TSMM by tk400 //


/* TIP: if ScaffoldJump is set Off, you can Sprint ScaffoldingJump. like shitgma(Jello? XD). */

function TSMM() {
  var i = r = z = 0;
  var CoolTime = 0;
  var CoolTimeB = false;
  var enventcanceler = false;
  //var ghostremoved = false;
  var SMN = SSW = SAi = false;
  var JumpCalnceler = false;
  //var hideScaffold; var hideTower;

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
  var JSMode = value.createList("Type", ["SimplyJump", "JumpKey", "Motion", "TP"], "JumpKey");
  var JSV = value.createFloat("Value", 0.42, -1, 2);
  var AntiHalf = value.createBoolean("AntiHalf", false);
  var invBlock = value.createBoolean("InvBlockFixes", false); //experimentalishation
  var DownWards = value.createBoolean("2ndDownward", false); //experimentalishation
  var WithBlinkAPI = value.createBoolean("WithLB'sBlink", false);
  var RemoveGhost = value.createBoolean("RemoveYourGhost", false);
  var AutoSneak = value.createBoolean("AutoSneak", false);
  var MinDelay = value.createFloat("MinDelay", 5, 0, 30);
  var MaxDelay = value.createFloat("MaxDelay", 10, 0, 30);
  var RAutoSneak = value.createList("ReleaseKeyMode", ["Instant", "Delay"], "Delay");
  var RMinDelay = value.createFloat("ReleaseMinDelay", 0, 0, 3);
  var RMaxDelay = value.createFloat("ReleaseMaxDelay", 1, 0, 3);
  var MLGScaffold = value.createBoolean("MLGSCaffold", false);
  var MLGSprint = value.createBoolean("AfterSprint", true);
  var NoXZMotion = value.createList("NoXZMotion", ["Off", "MotionZero", "NoKeyBoard", "BothAlgorism", "ZeroXZEvent", "EventCanceler"], "Off");

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
    v.add(invBlock);
    v.add(DownWards);
    v.add(WithBlinkAPI);
    v.add(RemoveGhost);
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
    return TSMMMode.get();
  }
  this.onEnable = function() {
    //Array Remover
    //ScaffoldModule.array = TowerModule.array = false;
    //ScaffoldModule.array = TowerModule.array = TowerModule.state = !(ScaffoldModule.state = true); i want know that Mechanism.
    i = 0;
    r = 0;
    z = 0;
    CoolTime = 0;
    CoolTimeB = false;
    delay = DelayCal(MaxDelay.get(), MinDelay.get());
    RDelay = DelayCal(MaxDelay.get(), MinDelay.get())
    if (BR.get()) {
      mc.thePlayer.rotationYaw += 180
    }
    ScaffoldModule.setState(true);
    TowerModule.setState(false);
    if (JumpScaffolding.get()) {
      TSMMMode.set("Off");
      if (!ScaffoldModule.getValue("SameY").get()) {
        ScaffoldModule.getValue("SameY").set(true)
      }
    }
    // //
    if (WithBlinkAPI.get()) {
      BlinkModule.setState(true)
      if (RemoveGhost.get()) {
        for (var x in mc.theWorld.loadedEntityList) {
          var entities = mc.theWorld.loadedEntityList[x]; //i think generate from Blink's Fakeplayer entityID is fixed for "-1337".
          if ((entities != mc.thePlayer) && (entities.getEntityId() == -1337)) {
            mc.theWorld.removeEntity(entities)
          }
        }
      }
    };
    DC(DCV.get(), "TS", Color.get(), "§a+Enabled TSMM and Scaffold and Tower")
  };
  this.onUpdate = function() {
    if (TowerDelayer.get()) {
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
      if (TowerModule.getState() && z>=TDDelay.get()) {
        z = CoolTime = 0
        CoolTimeB = true;
        TowerModule.setState(false);
        DCV.get() && chat.print("test");
      } else {z++}
    }
    if (!ScaffoldModule.getState()) {
      if (!mc.gameSettings.keyBindJump.pressed) {
        ScaffoldModule.setState(true);
        TowerModule.setState(false);
        DC(DCV.get(), "TS", Color.get(), "Enabled Scaffold, Disabled Tower")
      }
    } else if (!TowerModule.getState()) {
      if (!mc.gameSettings.keyBindJump.pressed) {
        (TSMMMode == "Sprint") && (ScaffoldModule.getValue("Sprint").set(true))
      } else if (mc.thePlayer.onGround) {
        switch (TSMMMode.get()) {
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
    //if press mc.gameSettings.keyBindJump.pressed = enable Tower, and Managing
    if (!SCATower.get()) {
      if (!TowerModule.getState() && mc.thePlayer.onGround && mc.gameSettings.keyBindJump.pressed && !mc.gameSettings.keyBindForward.pressed) {
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
    };
    //ForceSprint /Fix Can't sprinting Bug... or my setting?
    if (ForceSprint.get() && ScaffoldModule.getState()) {
      mc.thePlayer.setSprinting(true)
    }
    //AntiSlab
    if (AntiHalf.get()) {
      if (mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof SlabBlock) {
        mc.thePlayer.jump()
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
          mc.gameSettings.keyBindJump.pressed = false;
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
              mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + JSV.get(), mc.thePlayer.posZ);
              JumpCalnceler = true;
              break;
          }
        }
      }
    }
    //MLGScaffold
    if (MLGScaffold.get()) {
      mc.gameSettings.keyBindSneak.pressed = true;
      mc.gameSettings.keyBindJump.pressed = false;
      ScaffoldModule.getValue("Sprint").set(false);
      SprintModule.setState(false);
      if (mc.thePlayer.onGround) {
        mc.thePlayer.jump()
      };
      if (SprintModule.getState()) {
        SprintModule.setState(false)
      }
    }
  };
  this.onClickBlock = function(e) {
    if (invBlock.get()) {
      if (enventcanceler) {
        e.cancelEvent()
      }
    }
  }
  this.onMove = function(e) {
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
        if (!mc.gameSettings.keyBindJump.isKeyDown()) {
          if (i == delay) {
            mc.gameSettings.keyBindSneak.pressed = true;
            delay = DelayCal(MaxDelay.get(), MinDelay.get());
            i = 0;
          } else {
            switch (RAutoSneak.get()) {
              case "Instant":
                mc.gameSettings.keyBindSneak.pressed = false;
                break;
              case "Delay":
                r += 1;
                RDelay = DelayCal(RMaxDelay.get(), RMinDelay.get());
                if (r == RDelay) {
                  mc.gameSettings.keyBindSneak.pressed = false;
                  r = 0
                }
                break;
            }
            i += 1
          }
        }
      }
    }
  }
  this.onJump = function(e) {
    JumpCalnceler && (e.cancelEvent(), JumpCalnceler = false)
  }
  this.onDisable = function() {
      ScaffoldModule.state = TowerModule.state = false;
      //ScaffoldModule.array = hideScaffold; TowerModule.array = hideTower;
      DC(DCV.get(), "TS", Color.get(), "Disabled TSMM.")
      if (BR.get()) {
        mc.thePlayer.rotationYaw += 180
      } /*Fix Head Rotation. only this code...*/
      if (MLGSprint.get()) {
        SprintModule.setState(true)
      } else {
        SprintModule.setState(false)
      }
      WithBlinkAPI.get() && BlinkModule.setState(false);
    }
    /*this.onRender2D = function() {
      if(TSMMisEnabled == true) {mc.ingameGUI.drawCenteredString(mc.fontRendererObj, TSMMchat + "§c-Disabled TSMM and Scaffold and Tower", mc.displayWidth / 4, (mc.displayHeight / 2.5) + 8, -1)}
    }*/
}

/* v: 0.01, Auther: tk400, Desc: Allow Changing Hypixel Games*/

function HypixelGameChange() {

  var Hub = value.createBoolean("Hub", false);
  var favorite = value.createList("favorite", ["BedWars Solo", "BedWars Team", "SkyWars Solo Insane", ""], "");
  var BedWars = value.createList("BedWars", ["solo", "Team", "3v3", "4v4", ""], "");
  var SkyWars = value.createList("SkyWars", ["Solo Normal", "Solo Insane", "Team Normal", "Team Insane", ""], "");
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

  this.getName = function() {
    return "HypixelGameChange";
  }
  this.getDescription = function() {
    return "Moved from Hypixel.js";
  }
  this.getCategory = function() {
    return "Player";
  }
  this.onUpdate = function() {
    fv = ["bedwars_eight_one", "bedwars_eight_two", "Solo_Insane"][
      ["BedWars Solo", "BedWars Team", "SkyWars Solo Insane"].indexOf(favorite.get())
    ];
    bw = ["bedwars_eight_one", "bedwars_eight_two", "bedwars_four_three", "bedwars_four_four"][
      ["Solo", "Team", "3v3", "4v4"].indexOf(BedWars.get())
    ];
    sw = ["Solo_Normal", "Solo_Insane", "Team_Normal", "Team_Insane"][
      ["Solo Normal", "Solo Insane", "Team Normal", "Team Insane"].indexOf(SkyWars.get())
    ];
    mm = ["murder_classic", "murder_double_up", "murder_assassins", "murder_infection"][
      ["Classic", "Double Up", "Assassins", "Infection"].indexOf(murder.get())
    ];
    uhccmd = ["uhc_solo", "uhc_teams", "uhc_events", "speed_solo_normal", "speed_team_normal"][
      ["solo", "teams", "event", "Speed Solo", "Speed Team"].indexOf(UHC.get())
    ];
    MegaW = ["mw_standard", "mw_face_off"][
      ["Standard", "Face Off"].indexOf(MegaWall.get())
    ];
    if (Hub.get()) {
      mc.thePlayer.sendChatMessage("/hub");
      Hub.set(false)
    }
    if (!favorite.get() == "") {
      mc.thePlayer.sendChatMessage("/play " + fv);
      favorite.getValue("Favorite").set("")
    }
    if (!BedWars.get() == "") {
      mc.thePlayer.sendChatMessage("/play " + bw);
      BedWars.getValue("BedWars").set("")
    }
    if (!SkyWars.get() == "") {
      mc.thePlayer.sendChatMessage("/play " + sw);
      SkyWars.getValue("SkyWars").set("")
    }
    if (!murder.get() == "") {
      mc.thePlayer.sendChatMessage("/play " + mm);
      murder.getValue("Murder Mystery").set("")
    }
    if (!UHC.get() == "") {
      mc.thePlayer.sendChatMessage("/play " + uhccmd);
      UHC.getValue("UHC").set("")
    }
    if (!MegaWall.get() == "") {
      mc.thePlayer.sendChatMessage("/play " + MegaW);
      MegaWall.getValue("MegaWalls").set("")
    }
    if (Custom.get()) {
      Custom.set(false);
      mc.thePlayer.sendChatMessage("/play " + CTex.get())
    } //... i forgot this '.GET()' smh...
  }
}


//Add Hypixel Bypasser later and AutoReplay? xd // i think it importing to AutoReport/AutoL Script.
function ChatManager() {//修正する気になんてなれないさ...
  var jps = "",
    br = "",
    ar = "";
  ContJP = ["あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン　"]
  clientnameEN = ["LiqBounce", "Bounce of Liquidz", "LaquidBounce", "LiquidBounce", "Bounce of liquid", "LIQUIDBOUNCE"]
  insultEN = ["Fools", "Foolishes", "Dumbs", "Idiots", "GAYMER", "Loser", "GarbageHuman"]
  insultJA = ["馬鹿", "間抜け", "愚者", "クソ雑魚", "阿呆", "あほ", "馬鹿者", "キチガイ", "穀潰し", "無能", "ボケナス", "ゴミ", "カス", "役立たず", "愚か者", "社会の癌", "短小"]
  ClientNameJA = ["リキッドバウンス", "リキッドバウンス。net", "りきっどばうんす♡", "リクィッドバウンス", "リキッドバウンス"]
  var i = 0;
  var delay = 0;


  function messageCont(spamlist, urname, randomish, BeforeR, AfterR, IncJP, AllowBet, RandomBet, RBA, BetStB, BetStA) {
    var insultworda = "";
    var clientnames = "";
    if (IncJP) {
      insultworda = insultEN.push(insultJA);
      clientnames = clientnameEN.push(ClientNameJA)
    } else {
      insultworda = insultEN;
      clientnames = clientnameEN
    }
    Mineplex = [
      "Don't Worry Mineplex! You've server is rly not popular. Alts are Almost all unbanned! xd!!",
      "Hello mineplex, you've BAN is doesn't have much of an effect at all. why? A is Simple you've server is not popular. ",
      "Hi mineplex! Don't worry The hackers stop coming to play. you've server is rly not popular. ",
      "mineplex, Do you want to banned hackers on this server? i think answer is not. ",
      "Lol! lagplex! We can never BANNED! Don't Worryyyyy!!!",
      "hey guys im back! ;) don't worry guys!",
      "Good News! you've server is rly not popular! well, We Can't Never Banned! ;)",
      "Mineplex AC, Staff, System is sucks go to Hypixel Now.",
      "hacker are wanted playing your fucking shit server. don't ban us.",
      "sigh dont ban us, your works are shit.",
      "OMGGGGG! freealts pw is working on this shit server!! OMGGGGG!!!!!",
      "wow! free alts gen is worked! thx!!! lagplex staffs!!!!!",
      "we need thank to this idiot staffs. thx dumbers.",
      "i love mp, why? free cheating, ez bypass, only this reason. LOL! hypixel is better server.",
      "hypixel is good for everyone. but mp is good for ... ?",
      "holy shit! free alt is working this server! OMGGGGGGGG!!!!",
      "dont worry this server working free alt. we can never banned.",
      "mineplex, give me Op. i can ban you'ves you've never needed on this server",
      "please install Exrief. this is good AntiAnticheat.",
    ]
    GameEnd = [
      "EZist haxied by " + urname + ", And " + rt(clientnames) + " Client. Download Now.",
      "E Z! :) this game was fun!!! | HACKED BY " + urname + ", and " + rt(clientnames) + " Client.",
      "E Z!! XD You are hacked by " + urname + ", and " + rt(clientnames) + " Client. ",
      "hacked by " + urname + " and " + rt(clientnames) + " Client",
      "gg! XD this game is rly fast ended! Guys Let's use " + rt(clientnames) + ", this's made 4 " + servername + " Client!",
      "yeah excited won in this game. i'm Used " + rt(clientnames) + " Client! Best for grade up pvp experience!!",
      "gg! noobs. don't waste my time. you can't Never win!",
      "THIS GAME WAS HAXIED BY " + urname + ", and " + rt(clientnames) + "!",
      "hahaha noobs, VanillaClient is sucks, Let's Use " + rt(clientnames) + " Client!",
      "gg! you guys client are sucks, Download Modern " + rt(clientnames) + " Client! this is Update you gaming performance!"
    ]
    HypixelFun = [
      "Hey guys this server is sucks, lets join hypixel now!",
      "Hey guys this server is sucks, lets join sexy hypixel now!",
      "Hey guys this server is dumb, lets join smarter hypixel now!",
      "lets try best server. join hypixel(dot)net now.",
      "dont forget delete this server's IP and join hypixel.",
      "dont forget remove this server's IP and join hypixel.",
      "this server contains HIV. (made in China Virus). but hypixel have vaccine.",
      "Hypixel is still best server.",
      "Hypixel is still contining god server.",
      "why you waiting for not joining to hypixel? dont waste your time.",
      "hypixel can make you happy, but this server is...xd you can get stressness, Angry, Dumb, HIV, Corona",
      "i'm warried you staying this tard server. lets join to hypixel now! don't worry! hypixel is good!",
      "Hey! dont waste your health. join hypixel",
      "plz leave from this idiotly server, are you dumb?",
      "i'm thinking hypixel is best server, but this is... xd",
      "i cant wait you've coming on our godness server! join hypixel(dot)net!",
      "i love you! lets join hypixel!",
      "okay hypixel is good, join hypixel now!",
      "sorry for spaming. but i'm kind, i'm worried you, please join to hypixel",
      "yay i can't wait you've joining hypixelation! i can't waaaaiiitttt!!!! Don't disappoint us!",
      "hypixel is good.",
      "Hacker love tard server, like this. but hypixel needed money for alt. but this is free gen working! LOL!",
      "you can infected if you still staying this idiot server. j0in hypixel nooooooooowwwwwwwwww!!!!!!",
      "dont make me sad. JOIN HYPIXEL NOW. DONT MAKE ME CRY",
      "you received letter from hypixel! subject=> lets join us! (hypixel net) and leave from that poopest server!",
      "you received letter from hypixel! subject=> you can join our server! Hypixel is waiting joining you!",
      "you've not dumb. join to get more smart PvPer(xd)s! => hypixel net",
      "hey you! had better to join hypixel!",
      "hey you! had better to leave this tardederst server, and join hypixel!",
      "i love you! dont cry me! join hypixelllll noowowwowowoow!!!!!!!!!",
      "you can close this game. and you can Study, this server make you dumber.",
      "you can make smarter brain for join hypixel.",
      "you've not dumb. but this server make you dumber.",
      "dont forget! you can not noob! but this server make you idiotly!",
      "you can buy hypixel(NFA/SFA/Lifetime)AlT from alts(dot)top!(cheapest alts!)",
      "why you waiting! this server located for CHINA! you can infect CoronaSigma! dont stayyyyy!!!!!!",
      "plz plz plz... join hypixel now...",
      "why still staying this idiot server!!!!! ARE YOU KIDDING ME!!!!?????",
      "plz pzl zp lplz!!!!!!!!! dont waste your/my time!!!!! join hypixel nOooWwWWWwww!!!!",
    ]
    LiquidAd = [
      rt(clientnames) + " is Best Client. Download Now.",
      rt(clientnames) + " , is totaly Free!",
      "Donate now " + rt(clientnames) + " Client!",
      "Sigma Client Is sucks, FREEDOWNLOAD " + rt(clientnames) + " Now.",
      "gg! XD this game is rly fast ended! Guys Let's use " + rt(clientnames) + ", this's made 4 " + servername + " Client!",
      "yeah excited won in this game. i'm Used " + rt(clientnames) + " Client! Best for grade up pvp experience!!",
      "gg! noobs. don't waste my time. you can't Never win!",
      "hahaha noobs, VanillaClient is sucks, Let's Use " + rt(clientnames) + " Client!",
      "gg! you guys client are sucks, Download Modern " + rt(clientnames) + " Client! this is Update you gaming performance!"
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
      "cough cough i think infected Gaming Corona...",
      "i'm infected gaming Virus! dont report me."
    ]
    NoobInsult = [
      "Fuck you Noobs",
      "Hey fucking teams! GO to HELL Dumbers!",
      "Hey fucking teams! GO DIE! Dumbers!",
      "I can't Understand you've so dumb.",
      "please suicide now. you are not needed on this Socical, world.",
      "please use your fucked brain.",
      "sorry, i was forgoten you guys are just Down's Syndromers. sadly..",
      "sorry, i was forgoten you guys are just Asperger's Syndromers. sadly...",
      "Oh Comeon plz fucking dumbers. Don't sabotage Pro Gaymers.",
      "Oh Comeon plz fucking Fools. Don't sabotage Pro Gaymers.",
      "fuck fuck fuckkkk Go die! fucking noobs!",
    ]
    if (IncJP) {
      jps = ContJP
    } else {
      jps = ""
    }
    if (randomish) {
      if (AllowBet) {
        if (RandomBet.get()) {
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
      if (BeforeR) {
        br = StB + randomString(8) + StA
      } else {
        br = ""
      }
      if (AfterR) {
        ar = StB + randomString(8) + StA
      } else {
        ar = ""
      }
    }
    switch (spamlist) {
      case "Mineplex":
        message = Mineplex;
        break;
      case "GameEnd":
        message = GameEnd;
        break;
      case "LiquidAd":
        message = LiquidAd;
        break;
      case "Gaming":
        message = gaming;
        break;
      case "NoobInsult":
        message = NoobInsult;
        break;
      case "All": //Not working ?
        message = 'you need? hm this is intersting for me.';
        break;
    }
    MSG = br + message[parseInt(Math.random() * message.length)] + ar;
    mc.thePlayer.sendChatMessage(MSG);
    rtt = rt(clientnames);
    chat.print(rtt);
  } //used only for CM.

  var SpamMode = value.createList("Mode", ["onEnabled", "ValueChanged", "AutoSpam", "test.ccbluex.netBlockGiver"], "ValueChanged");
  var spamlist = value.createList("SpamProfile", ["Mineplex", "GameEnd", "Thx4Server", "LiquidAd", "Gaming", "DefaultLiquidSpammer", "NoobInsult", "All", "Custom//", ""], "");
  var yourname = value.createText("hackedBy", "[EnterNameHere]");
  var MaxDelay = value.createInteger("MaxDelay", 400, 0, 5000); // 10 = 1s.
  var MinDelay = value.createInteger("MinDelay", 100, 0, 5000);
  var randomish = value.createBoolean("Ramdomizer", true);
  var BeforeR = value.createBoolean("Before", false);
  var AfterR = value.createBoolean("After", false);
  var Incjp = value.createBoolean("#IncludeJapaneseString", false);
  var AllowBet = value.createBoolean("Between", false); //Im Recommanding set false.
  var RandomBet = value.createBoolean("RandomBetween", false);
  var RBA = value.createInteger("Amount", 1, 1, 5);
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

  this.getName = function() {
    return "ChatManager";
  }
  this.getDescription = function() {
    return "Spammer, But Addition Profiler Mode, Simple Code";
  }
  this.getCategory = function() {
    return "Misc";
  }
  this.onEnable = function() {
    spamlist.set() == "";
    i = 0;
    delay = Math.floor(Math.random() * ((MaxDelay.get() - MinDelay.get()) + 1) + MinDelay.get());
    if (SpamMode.get() == "onEnabled") {
      messageCont(spamlist.get(), yourname.get(), randomish.get(), BeforeR.get(), AfterR.get(), Incjp.get(), AllowBet.get(), RandomBet.get(), RBA.get(), BetStB.get(), BetStA.get())
    }
  }
  this.onUpdate = function() {
    switch (SpamMode.get()) {
      case "ValueChanged":
        if (!spamlist.get() == "") {
          messageCont(spamlist.get(), yourname.get(), randomish.get(), BeforeR.get(), AfterR.get(), Incjp.get(), AllowBet.get(), RandomBet.get(), RBA.get(), BetStB.get(), BetStA.get());
          spamlist.set("")
        }
        break;
      case "AutoSpam":
        if (i == delay) {
          messageCont(spamlist.get(), yourname.get(), randomish.get(), BeforeR.get(), AfterR.get(), Incjp.get(), AllowBet.get(), RandomBet.get(), RBA.get(), BetStB.get(), BetStA.get());
          delay = DelayCal(MaxDelay.get(), MinDelay.get());
          i = 0
        } else {
          i += 1
        }
        break;
      case "test.ccbluex.netBlockGiver":
        if (i == 50) {
          mc.thePlayer.sendChatMessage("/give planks 64");
          i = 0
        } else {
          i += 1
        }
        break;
    }
  }
}

function tk400sAdditonalModule() {
  var DelayTick = value.createInteger("DelayTicks", 1, 0, 30);
  var Timer = value.createFloat("Timer", 0.1, 0, 10);
  var TP = value.createFloat("TP", 0.05, 0, 1);
  var Motion = value.createFloat("Motion", 0.1, 0, 1);
  var Criticals = value.createList("Criticals", ["Off", "Jump", "SpeedModule", "TP", "Motion", "FastJump/Motion", "FastJump/TP", "FastJump/Timer"], "Off");
  var WithJump = value.createBoolean("WithJump", false);
  var ClimbSpeed = value.createList("ClimbSpeed", ["Off", "TP", "Motion", ""], "Off");
  var BlockAnimation = value.createList("BlockAnimation", ["RandomizedProgress", "SwingProgressAbort", "BlockBlock", "Off"], "Off");
  //var SWH = value.createBoolean("SingleWorldHack", false); //Just Modify
  var animation = value.createFloat("Animation", 0.75, 0, 1);
  var animation2 = value.createFloat("Animation2", 0.75, 0, 1);
  var AutoLeaver = value.createBoolean("AutoLeave", false);
  var ForceKick = value.createBoolean("ForceKick", false);
  var WhenHealth = value.createFloat("Health", 5, 0, 19);
  var ALMode = value.createList("ALMode", ["Custom", "Lobby"], "Custom");
  var ReJoinServer = value.createList("ALServer", ["Hypixel", "Cubecraft", "?"], "");
  var LMethod = value.createList("LeaveMethod", ["Command", "ConsoleSpammer/Payload", "ConsoleSpammer/MineSecure", "RandomizedPos", "ExtremeRandomizedPos", "UltraRandomizedPos", "RandomizedPacketPos", "ExtremeRandomizedPacketPos", "RandomizedMotion", "CommandSpamKick", "KickModuleAPI"], "Command");
  //var AntiTypo = value.createBoolean("AntiTypo", true);
  var TimeFix = value.createBoolean("TimerFixer", false);
  var AntiDamage = value.createBoolean("AntiDamage", false);

  this.addValues = function(v) {
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
    v.add(ForceKick);
    v.add(WhenHealth);
    v.add(ALMode);
    v.add(ReJoinServer);
    v.add(LMethod)
      //v.add(AntiTypo);
    v.add(TimeFix);
    v.add(AntiDamage)
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
    //moment Restener
    if (Criticals.get() == "FastJump/Timer") {
      if (ResetTimer) {
        if (mc.thePlayer.fallDistance || mc.thePlayer.onGround) {
          {
            mc.timer.timerSpeed = 1;
            ResetTimer = false;
            chat.print("Timer has reset")
          }
        }
      }
    }
    if (mc.thePlayer.isOnLadder()) {
      switch (ClimbSpeed.get()) {
        case "TP":
          mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + TP.get(), mc.thePlayer.posZ);
          break;
        case "Motion":
          mc.thePlayer.motionY + Motion.get();
          break;
      }
    }
    //if(SWH.get()) {
    //}
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
          case "ExtremeRandomizedPos": //Never Recommanded. i think allow you to crash your computer?
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
            mc.thePlayer.sendChatMessage("/" + randomString(Math.floor(Math.random() * ((50 - 2) + 1) + 1)))
            break;
          case "KickModuleAPI":
            KickModule.setState(true);
            break;
        }
      }
    }
    if (TimeFix.get()) {
      if (mc.timer.timerSpeed <= 0.001 && !fixed) {
        mc.timer.timerSpeed = 1, chat.print("Game was Freezed or Slowely. now fixing...")
        fixed = true;
      } else {
        fixed = false;
        chat.print("a")
      }
    }
  }
  this.onMotion = function() {
    switch (BlockAnimation.get()) {
      case "RandomizedProgress":
        LiquidBounce.getModule(KillAura).blockingStatus && (mc.thePlayer.swingProgress = Math.random());
        break;
      case "SwingProgressAbort":
        //if(mc.currentScreen instanceof GuiInventory || mc.currentScreen instanceof GuiChest) {}else{
        //Fix? canceling Opening Inv.
        LiquidBounce.getModule(KillAura).blockingStatus && (mc.thePlayer.swingProgress = animation.get());
        break;
        /*case "BlockBlock":
          if(LiquidBounce.getModule(KillAura).blockingStatus){LiquidBounce.getModule(KillAura).blockingStatus = false;On2d = true}else{On2d=false}
          break;*/
    }
  }
  this.onRender2D = function() {
    //if(On2d && DCV.get()) {mc.ingameGUI.drawCenteredString(mc.fontRendererObj, "§k|§cDon't Worry! NotBlocking is Fake! You've Blocking in ServerSided!§k|", mc.displayWidth / 4, (mc.displayHeight / 2.5) + 8, -1)}
    if (GamingText.get()) {
      mc.ingameGUI.drawCenteredString(mc.fontRendererObj, GaTex, mc.displayWidth / Width.get(), (mc.displayHeight / height.get()) + 8, -1)
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
          mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += TP.get(), mc.thePlayer.posZ);
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
            mc.thePlayer.posY += TP.get()
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

function MCMusicPlayer() {
  var soviets = 0;

  var PlayingMusic = value.createList("Music", ["Roup", "Soviet", ""], "SovietMusic"); //i want create another template. but...hm
  var Volume = value.createFloat("Volume", 10, 0, 255);

  this.addValues = function(v) {
    v.add(PlayingMusic);
    v.add(Volume);
  }

  this.getName = function() {
    return "MCMusicPlayer";
  }
  this.getDescription = function() {
    return "Allow you to hear Music. But its played by Minecraft Sounds.";
  }
  this.getCategory = function() {
    return "Fun";
  }

  this.onEnable = function() {
    playSound("random.anvil_use", 10, 1);
  }

  this.onUpdate = function() {
    switch (PlayingMusic.get()) {
      case "Soviet":
        if (soviets >= 216) {
          soviets = 0
        } else {
          soviets += 1
        }
        switch (soviets) {
          case soviets > 0 && soviets < 30:
            playSound("note.harp", Volume.get(), 1.7);
            break;
          case 40:
            playSound("note.harp", Volume.get(), 1.3);
            break;
          case 55:
            playSound("note.harp", Volume.get(), 1.7);
            break;
          case 65:
            playSound("note.harp", Volume.get(), 1.3);
            break;
          case 75:
            playSound("note.harp", Volume.get(), 1.4);
            break;
          case 82:
            playSound("note.harp", Volume.get(), 1.6);
            break;
          case 90 || 95:
            playSound("note.harp", Volume.get(), 1.1);
            break;
          case 100:
            playSound("note.harp", Volume.get(), 1.4);
            break;
          case 115:
            playSound("note.harp", Volume.get(), 1.3);
            break;
          case 125:
            playSound("note.harp", Volume.get(), 1.2);
            break;
          case 135:
            playSound("note.harp", Volume.get(), 1.3);
            break;
          case 145:
            playSound("note.harp", Volume.get(), 0.85);
            break;
          case 155:
            playSound("note.harp", Volume.get(), 0.85);
            break;
          case 165 || 180:
            playSound("note.harp", Volume.get(), 0.95);
            break;
          case 190:
            playSound("note.harp", Volume.get(), 1.05);
            break;
          case 200:
            playSound("note.harp", Volume.get(), 1.15);
            break;
          case 215:
            playSound("note.harp", Volume.get(), 1.25);
            break;
        }
        break;
    }
  }

  this.onDisable = function() {}
}

/*function FightBot() {//dead projekt
  var test = value.createFloat("test", 1.5, 0, 30);
 
  this.addValues = function(v) {
    v.add(test)
  }
  this.getName = function() {
    return "FightBot"
  }  
  this.getDescription = function() {
    return "like a WURST's FightBot"
  }  
  this.getCategory = function() {
    return "Combat"
  }
 
  this.onUpdate = function() {}
  this.onMove = function() {
 
  }
  this.onEnable = function() {}
  this.onDisable = function() {}
}*/


//var FightBot = moduleManager.registerModule(new FightBot);
//
//FightBot;
//
//moduleManager.unregisterModule(FightBot);


var ModuleManager = moduleManager.registerModule(new ModuleManager)
var TSMM = moduleManager.registerModule(new TSMM);
var HypixelGameChange = moduleManager.registerModule(new HypixelGameChange);
var ChatManager = moduleManager.registerModule(new ChatManager)
//var Quiter = moduleManager.registerModule(new Quiter)
var tk400sAdditonalModule = moduleManager.registerModule(new tk400sAdditonalModule)
var MCMusicPlayer = moduleManager.registerModule(new MCMusicPlayer)
var TargetStrafation = moduleManager.registerModule(new TargetStrafation);
var ABAssis = moduleManager.registerModule(new ABAssis);
var ModuleRandomizer = moduleManager.registerModule(new ModuleRandomizer)

function onEnable() {
  ModuleManager;
  TSMM;
  HypixelGameChange;
  ChatManager;
  //Quiter;
  tk400sAdditonalModule;
  MCMusicPlayer;
  TargetStrafation;
  ModuleRandomizer;
  ABAssis;
};

function onDisable() {
  moduleManager.unregisterModule(ModuleManager);
  moduleManager.unregisterModule(TSMM);
  moduleManager.unregisterModule(HypixelGameChange);
  moduleManager.unregisterModule(ChatManager);
  //moduleManager.unregisterModule(Quiter);
  moduleManager.unregisterModule(tk400sAdditonalModule);
  moduleManager.unregisterModule(MCMusicPlayer);
  moduleManager.unregisterModule(TargetStrafation);
  moduleManager.unregisterModule(ModuleRandomizer);
  moduleManager.unregisterModule(ABAssis);
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
      if(mc.thePlayer.moveForward > 0) {moveYaw +=0} else {moveYaw +=180}
  } else if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing != 0) {
      if (mc.thePlayer.moveForward > 0) {
          if (mc.thePlayer.moveStrafing > 0) {moveYaw += -45} else {moveYaw+=45}
      } else {
          if (mc.thePlayer.moveStrafing > 0) {moveYaw -=-45} else {moveYaw-= -45}
      }
      if(mc.thePlayer.moveForward > 0) {moveYaw +=0} else {moveYaw +=180}
  } else if (mc.thePlayer.moveStrafing != 0 && mc.thePlayer.moveForward == 0) {
      if(mc.thePlayer.moveStrafing > 0) {moveYaw += -90} else {moveYaw +=90}
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

function AimBotFunc(tX, tZ) {
  strafeYaw = Math.atan2(tZ - mc.thePlayer.posZ, tX- mc.thePlayer.posX);
  mc.thePlayer.rotationYaw = strafeYaw - (0.5 * Math.PI);
  //mc.thePlayer.rotationYaw = (Math.atan2(mc.thePlayer.posX - tX,mc.thePlayer.posZ- tZ) / Math.PI * 180 +180) * -1
}
function AimBotCalc(tX, tZ) {
  return (Math.atan2(tZ - mc.thePlayer.posZ, tX - mc.thePlayer.posX) - (0.5 * Math.PI))/ Math.PI * 180;
}
function pitagora(x,z){
  return Math.sqrt(Math.pow(x,2)+Math.pow(z,2))
}

function _2DRoundCheck(pX,pZ,Range) {
  if(Math.sqrt(Math.pow(mc.thePlayer.posX - pX, 2) + Math.pow(mc.thePlayer.posZ - pZ, 2)) <= Range) {
    return true
  }
}

function _3DRoundCheck(pX,pY,pZ,Range) {
  if(Math.sqrt(Math.pow(mc.thePlayer.posX - pX, 2) +Math.pow(mc.thePlayer.posY - pY,2) + Math.pow(mc.thePlayer.posZ - pZ, 2)) <= Range) {
    return true
  }
}

function DelayCal(MaxDelay, MinDelay) {
  delayed = Math.floor(Math.random() * ((MaxDelay - MinDelay) + 1) + MinDelay);
  return delayed;
}

function RandomPool() {
  if(Math.round(Math.random()) >1) {
     return true
  }else{
     return false
  }
}

function rt(t) { //Shorten it longer randomizer code.
  var text = t[parseInt(Math.random() * t.length)]
  return text;
}

function playSound(name, a, b) {
  mc.theWorld.playSound(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, name, a, b, false);
}

function Config(Mode, server) {
  if (Mode == "Save") {
    commandManager.executeCommand(".localautosettings save " + server + " all")
    chat.print("§4Debug[SaveConfig]§f: Saved for §l" + server)
  } else if (Mode == "Load") {
    commandManager.executeCommand(".localautosettings load " + server)
    chat.print("§4Debug[LoadConfig]§f: Loaded for §l" + server)
  }
}

function randomString(length, adoptchara) {
  var text = "";
  if (adoptchara == null) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".concat(adoptchara);
  }

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

/* Rejected fucking code. */

function reset() {
  currentTrans = 0;
  KeepAlives.clear();
  Transactions.clear();
}

function kick(mode) {
  if (mode == null) {
    commandManager.executeCommand(".kick")
  } else {
    switch (mode) {
      case "toHub":
        mc.thePlayer.sendChatMessage("/hub")
        break;
    }
  }
}

function vClip(offset) {
  mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ);
}

function hclip(offset) {
  sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  mc.thePlayer.setPosition(mc.thePlayer.posX -= sin, mc.thePlayer.posY, mc.thePlayer.posZ += cos);
}

function HMotion(offset) {
  sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  mc.thePlayer.motionX -= sin;
  mc.thePlayer.motionZ += cos;
}

function VMotion(offset) {
  mc.thePlayer.motionY += offset;
}

/*function Sleep (delay) {
  i+=1;
  if(delay==i) {passed = true}else{passed=false}
  return passed;
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