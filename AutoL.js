/* Big thanks to Senk Ju Command Util and JSON Config Manager. and Original script Dever of liulihaocai m(_ _)m */

var scriptName = "AutoKillSults"; //AutoL-Recoded
var scriptAuthor = "liulihaocai?, Senk Ju and tk400.";
var scriptVersion = 1.0;

/* Lib Importer */
script.import("lib/arrayFunctions.js")

script.import("tKore.js")
script.import("MineplexTeams.js")
script.import("texts.js") //for spam texts.

var chatPrefix = "§8[§9AutoL Config§8]";
var filepath="/AutoLConfig.json";
var target = null;
//var TargetEntId = '';
//var KTName =''
//var KTEntId=0;
var presets = [
   //{name: "",list: []}
]
loadConfig()

var ALname = null;
var Ldelayes = 0;
var ALRate = null;
var PANList = [];
var texts=['undefined text.']
var AutoLToggle=false;

var PRP=[];
var delayes = 0;
var target = null;
var reportedPlayers = [];
var ARname=null
var Reason = ''
var Reportablerate = null;
var ReasShow = []
var Rerray=''
var Reaz=[]
var AutoRToggle=false;

/* Shared Values */
var ExpAdvDtct = value.createBoolean("ExperimentalAdventureDetect", false);
var DetAE = value.createBoolean("Debug!DetectAllEntity", false);

var AutoLvalues=[
   ExpAdvDtct,
   DetAE,
   Textsets = value.createText("Presset", ""),
   LPrev = value.createBoolean("PreventDupeL", false),
   ALDmode = value.createList("DeadCheckMode", ["PacketChat", "DeadCheck"], ""), // tired coding.
   Lxdelay = value.createInteger("MaxDelay-L", 0, 0, 500),
   Lndelay = value.createInteger("MinDelay-L", 0, 0, 500),
   LRate = value.createInteger("LRate", 50, 0, 100),
]

var AutoRvalues = [
   Reseter = value.createBoolean("Reset", false),
   ExpAdvDtct,
   DetAE,
   RMode = value.createList("ReportMode", ["Command","Chat"], "Command"),
   Mode = value.createList("CommandType", ["Hypixel", "Redesky", "/report","Custom"], "Hypixel"),
   reasonMode = value.createList("Reason", ["Randomized","Custom"],"Randomized"),
   MinLength = value.createInteger("MinLength", 1, 1, 10), // ReashShow.length is unusable, mmm...
   CrrentReasson = value.createText("CurrentReason", ''),
   ReasL = value.createList("ReasonsList", [" Fly", " HighJump", " Speed", "AntiKB", " LongJump", " Jesus", " Dolphin", " KillAura", " Aimbot", " AutoClicker","Reach", "ClickValueToAdd/Remove!"], "ClickValueToAdd/Remove!"),
   Reas = value.createText("AddCustomReason=>", ""),
   mes = value.createBoolean("ReportReported", false), //wth
   xdelay = value.createInteger("MaxDelay-R", 0, 0, 500),
   ndelay = value.createInteger("MinDelay-R", 0, 0, 500),
   RRate = value.createInteger("ReportRate", 25, 0, 100),
   RC = value.createText("ReportCommand", "wdr"),
   AppendReason = value.createBoolean("AppendReason", false),
   AllowDupe = value.createBoolean("AllowDuplicate", false),
]

var TargetNames=[]

/* Flow ~> getAttacked target, (t['Alice']) -> waiting Alice die, then throw to lists, -> a['Alice'] => AutoL['Alice]. */
//var LedPlayers = [];
function KillDetector() {
   var Debugy = value.createBoolean("Debug", false);
   this.getName = function() {
      return "KillDetector";
   }
   this.getDescription = function() {
      return "Allows you to Automaticaly insults when you killed target."
   }
   this.getCategory = function() {
      return "Player"
   }
   this.onEnable = function() {moduleManager.getModule(this.getName()).array = false}
   this.onAttack = function(e) {
      target = e.getTargetEntity()
      var TargetName=target.getName()
      //chat.print(ServerUtils.getRemoteIp())
      if ((DetAE.get() ? (target instanceof EntityMobs || target instanceof EntityLiving || target instanceof EntityPlayer) : target instanceof EntityPlayer) && !AntiBot.isBot(target) && target != null && !target.isDead && target != mc.thePlayer && (!ExpAdvDtct.get() || mc.playerController.getCurrentGameType() != "ADVENTURE")) {
         if (!TargetNames.includes(TargetName) && !PANList.includes(TargetName) && !PRP.includes(TargetName)  /*  && !PIdList.includes(entity.getEntityId()) */) {
            if(/mineplex/i.test(ServerUtils.getRemoteIp().toLowerCase())) {
               if(!TeamMates.includes(TargetName)) {TargetNames.push(TargetName);chat.print("Added Player '"+TargetName+"' -> ["+TargetNames+"]")}
               //TargetEntId = target.getEntityId()
            } else {TargetNames.push(TargetName)//TargetEntId = target.getEntityId()
                    chat.print("Added Player '"+TargetName+"' -> ["+TargetNames+"]")
            }
         }
      }
   }
   this.onUpdate = function () {
      moduleManager.getModule(this.getName()).array = false;
      if (TargetNames.length >= 1) {
         for (var x in mc.theWorld.loadedEntityList) {
            var entity = mc.theWorld.loadedEntityList[x];
            var EntName=entity.getName()
            if(TargetNames.includes(EntName)) {
               function addPlayer() {
                  if (entity.isDead || entity.getHealth() <= 0) {//detect Target isDead.
                     AutoRToggle &&     (PRP.push(EntName))
                     AutoLToggle && (PANList.push(EntName))
                     TargetNames.splice(TargetNames.indexOf(EntName), 1);
                     chat.print("detected dead player '"+EntName+"' -> " +(AutoRToggle ? +"AutoR["+PRP+"]" : "")+ (AutoLToggle ? "AutoL["+PANList+"]" : ""))
                  }
               }
               if(/mineplex/i.test(ServerUtils.getRemoteIp().toLowerCase())) {
                  entity.setHealth(mineplexHP(EntName))
                  //chat.print(target.getHealth())
                  addPlayer()
               } else {addPlayer()}
            }
         }
      }
      /* AutoReport */
      if(AutoRToggle) {
         if(PRP.length >= 1) {
            if(ARname==null) {ARname = PRP[0]};
            if (Reportablerate==null) {
               if (!reportedPlayers.includes(ARname)) {
                  if (RRate.get() >= Reportablerate) {
                     if (delayes==null) {
                        delayes = DelayCal(xdelay.get(), ndelay.get())
                     }else{
                        if (delayes <= 0) {
                           switch(reasonMode.get()) {
                              case "Randomized":
                                 if(MinLength.get() > ReasShow.length) {MinLength.set(ReasShow.length)}
                                 Reason = (RandomArray(ReasShow, DelayCal(ReasShow.length, MinLength.get()))).join(' ');
                                 break;
                              case "Custom":
                                 Reason = (ReasShow).join(' ');;
                                 break;
                           }
                           switch (Mode.get()) {
                              case "Hypixel":
                                 sendChat("/report " + ARname + Reason);
                                 break;
                              case "Redesky":
                                 sendChat("/reportar " + ARname);
                                 break;
                              case "/report":
                                 sendChat("/report " + ARname);
                                 break;
                              case "Custom":
                                 sendChat("/" + RC.get()+(AppendReason.get() && (" "+Reason) || !AppendReason.get()&&""));
                                 break;
                           }
                           PRP.shift();
                           delayes = null;
                           reportedPlayers.push(ARname);
                           mes.get() && (sendChat("Hi " + ARname + ", u got reported by LiquidBounce!")) // or rt(exampletexts)
                           chat.print("§6§l[AutoReport]§r Successfully reported §f§l" + ARname + "§a§l")
                        } else {delayes--}
                     }
                  } else {
                     PRP.shift();
                     ARname = null;
                     Reportablerate = null;
                     reportedPlayers.push(ARname);
                     chat.print("uwu he was a lucky!\n[DEBUG]\nPRPLists->" + PRP + "\nARname->" + ARname+"\nReportedPlayers"+reportedPlayers+"\n---------END OF DEBUG---------");
                  }
               }
            }else{
               Reportablerate = DelayCal(100, 0)
            }
         }
      }
      /* AutoL */
      if(AutoLToggle) {
         if (PANList.length >= 1) {
            if (ALRate == null) {
               ALRate = DelayCal(100, 0);
               chat.print(ALRate+"/"+LRate.get());
            } else {
               if (LRate.get() >= ALRate) {
                  if (Ldelayes == null) {
                     Ldelayes = DelayCal(Lxdelay.get(), Lndelay.get());
                  } else {
                     if (Ldelayes <= 0) {
                        ALname = PANList[0];
                        //var text=rt(texts)
                        if(texts==[]) {chat.print("texts is undefined!"); var text='null!'}else {var text=AutosendChat(texts)}
                        if (Debugy.get()) {chat.print("said :§c" + text)};
                        sendChat(text);
                        PANList.shift();
                        //LedPlayers.push(ALname);
                        chat.print("§6§l[AutoL]§r Successfully L §f§l" + ALname + "§a§l");
                        Ldelayes = null;
                        ALname = null;
                     } else {Ldelayes--};
                  }
               } else {
                  PANList.shift();
                  chat.print("uwu he is a lucky!\n[DEBUG]\nPendingLPlayerLists->" + PANList + "\nALname->" + ALname);
                  ALRate = null;
                  ALname = null;
               }
            }
         }
      }
   }
   this.onDisable = function() {
      AutoRToggle && (moduleManager.getModule("AutoReport").state = false)
      AutoLToggle && (moduleManager.getModule("AutoL").state=false)
   }

   this.addValues = function(v) {//mmm.....
      v.add(Debugy)
      v.add(ExpAdvDtct)
      v.add(DetAE)
   }
}

function AutoLModule() {
   var refl = value.createList("RefreshPlayerlist", ["onWorld", "onEnable", "Both", "Off"], "onEnable")
   this.getName = function() {
      return "AutoL"
   }
   this.getDescription = function() {
      return "Allows you to insult automaticaly."
   }
   this.getCategory = function() {
      return "Player"
   }
   this.getTag = function () {
      return ((PANList.length > 1) ? (PANList.toString()+"("+Ldelayes/10+")"):"")
   }
   this.onLoad = function () {loadConfig()}
   this.onEnable = function () {
      if(["onEnable", "Both"].includes(refl.get())) {chat.print("aaa4");ALname=ALRate = null;Ldelayes = 0;PANList=[]}
      moduleManager.getModule("KillDetector").state =AutoLToggle = true;
      texts=[];
      if(Textsets.get() == "") {
         texts=["undefined text."]
      }else{
         for(var x=0;x<presets.length;x=(x+1)|0) {
            if(Textsets.get()==presets[x].name) {
               for(var z=0;z<presets[x].list.length;z=(z+1)|0) {
                  for(var y=0;y<AutoL.length;y=(y+1)|0) {
                     if(presets[x].list[z] == AutoL[y].name) {
                        texts=texts.concat(AutoL[y].texts)
                     }
                  }
               }
            }
         }
      }
   }
   this.onWorld = function() {
      chat.print(refl.get())
      if(["onWorld", "Both"].includes(refl.get())) {chat.print("aaa3");ALname=ALRate = null;Ldelayes = 0;PANList=[]}
   }
   this.addValues = function(v) {
      v.add(refl)
      addValue(AutoLvalues,v)
   }
}

function AutoReportModule() {
   var refl = value.createList("RefreshPlayerlist", ["onWorld", "onEnable", "Both", "Off"], "onEnable")
   this.addValues = function(v) {
      v.add(refl)
      addValue(AutoRvalues,v)
   }
   this.getName = function() {
      return "AutoReport"
   }
   this.getDescription = function() {
      return "Allows you to (fake) Report Automaticaly, with some options"
   }
   this.getCategory = function() {
      return "Player"
   }
   this.getTag = function () {
      return (PRP.length > 1 ? PRP.toString()+"("+delayes/10+")":"")
   }
   this.onEnable = function() {moduleManager.getModule("KillDetector").state = AutoRToggle = true;if(["onEnable", "Both"].includes(refl.get())) {chat.print("aaa1");PRP=[]; delayes = 0;target = null;reportedPlayers = [];ARname=nullReason = '';Reportablerate = null;ReasShow = [];Rerray='';Reaz=[]}}
   this.onDisable = function() {AutoRToggle = true}
   this.onWorld = function () {if(["onWorld", "Both"].includes(refl.get())) {chat.print("aaa2");PRP=[]; delayes = 0;target = null;reportedPlayers = [];ARname=nullReason = '';Reportablerate = null;ReasShow = [];Rerray='';Reaz=[]}}
   this.onUpdate = function() {
      if (ReasL.get() != 'ClickValueToAdd/Remove!') {
         if (ReasShow.includes(ReasL.get())) { //Remove
            ReasShow.splice(ReasShow.indexOf(ReasL.get()), 1);
            CrrentReasson.set(ReasShow.toString())
            ReasL.set("ClickValueToAdd/Remove!");
         } else {//Add
            ReasShow=ReasShow.concat(ReasL.get());
            CrrentReasson.set(ReasShow.toString())
            ReasL.set("ClickValueToAdd/Remove!");
         }
      }
   
      Reseter.get() && (ReasShow ="", Reseter.set(false));

      if (Reas.get() != '') {
         if(Reas.get().indexOf("-") >= 0) {Reaz = Reas.get();Reaz =Reaz.split('-');Reas.set(Reaz.join(' '))};
         if(Rerray.length == 0) {
            Rerray = Reaz.shift();
            Reas.set(Reaz.join(' '))
         }
         if(Rerray.length >= 1) {
            if (ReasShow.indexOf(Rerray) >= 0) {
               Rerray=''
            }else{
               ReasShow=ReasShow.concat(Rerray)
               CrrentReasson.set(ReasShow.toString())
               Rerray = '';
            }
         }
      }
   }
}

function AutoLCommand() {

   this.getName = function() {
      return "AutoLConfig";
   }

   this.getAliases = function() {
      return ["ALC","AutoLcfg"];
   }

   this.execute = function(cmd) {
      if (cmd.length < 2) {
         log("§6KillDetector AutoLConfigCUI by tk400.")
         log("Syntax: .AutoLConfig/ALC <presset/settext>", true);
      } else {
         switch (cmd[1]) {
            case "presset":
               if(cmd.length <  3) {
                  log("Syntax: .AutoLConfig presset <add/remove/show>",true)
                  chat.print(">-Current presset-<")
                  for(var x=0;x<presets.length;x=(x+1)|0) {
                     chat.print("PName "+presets[x].name)
                     chat.print("PList "+presets[x].list)
                     chat.print(">----")
                  }
                  chat.print(">-Available AutoL texts-<")
                  for(var x=0;x<AutoL.length;x=(x+1)|0) {
                     chat.print("["+x+"] to Add "+AutoL[x].name)
                  }
               } else {
                  switch (cmd[2]) {
                     case "add":
                        if(cmd.length < 5) {
                           log("Syntax: .AutoLConfig presset add <name> <list>",true)
                        } else {
                           var Pname = cmd[3]
                           var lists=[]
                           for(var x=0;x<cmd.length-4;x=(x+1)|0) {
                              lists.push(AutoL[Number(cmd[4+x])].name)
                              chat.print("lists"+lists)
                              //if(x==cmd.length-4) {presets.push({name: Pname, list: lists})}
                           }
                           presets.push({name: Pname, list: lists})
                           chat.print(Pname+" has Added!")
                           for(var x=0;x<presets.length;x=(x+1)|0) {
                              chat.print("§4PName §l"+presets[x].name)
                              chat.print("PcList §o"+presets[x].list)
                              chat.print("§7>----")
                           }
                           saveConfig();
                        }
                        break;
                     case "remove":
                        if(cmd.length < 4) {
                           log("Syntax: .AutoLConfig presset remove <id>",true)//it may eazy to add name opt, but its lazy and slower?
                           chat.print(">-Current presset-<")
                           for(var x=0;x<presets.length;x=(x+1)|0) {
                              chat.print("§4PName §l"+presets[x].name)
                              chat.print("PcList §o"+presets[x].list)
                              chat.print("§7>----")
                           }
                        } else {
                           saveConfig();
                           presets.splice(Number(cmd[3]),1)
                           chat.print(presets[Number(cmd[3])].name+" has Removed!")
                           chat.print(">-Current presset-<")
                           for(var x=0;x<presets.length;x=(x+1)|0) {
                              chat.print("§4PName §l"+presets[x].name)
                              chat.print("PcList §o"+presets[x].list)
                              chat.print("§7>----")
                           }
                        }
                        break;
                     case "show":
                        saveConfig();
                        //loadConfig();
                        chat.print(">-Available pressets-<")
                        for(var x=0;x<presets.length;x=(x+1)|0) {
                           chat.print("§4PName §l"+presets[x].name)
                           chat.print("PcList §o"+presets[x].list)
                           chat.print("§7>----")
                        }
                        break;
                  }
               }
               break;
            case "settext":/* I dont want touch these code. */
               if(cmd.length < 3) {
                  log("Syntax: .AutoLConfig settext <all/0~9/name/show>",true)
                  chat.print(">-Current presset-<")
                  for(var x=0;x<presets.length;x=(x+1)|0) {
                     chat.print("§4PName §l"+presets[x].name)
                     chat.print("PcList §o"+presets[x].list)
                     chat.print("§7>----")
                  }
                  chat.print(">-Available AutoL texts-<")
                  for(var x=0;x<AutoL.length;x=(x+1)|0) {
                     chat.print("["+x+"] to Add "+AutoL[x].name)
                  }
               } else {
                  switch (cmd[2]) {
                     case "show":
                        chat.print(">-Available AutoL texts-<")
                        for(var x=0;x<AutoL.length;x=(x+1)|0) {
                           chat.print("["+x+"] to Add "+AutoL[x].name)
                        }
                        break;
                     case "all":
                        for(var x=0;x<AutoL.length;x=(x+1)|0) {
                           log(AutoL[x].name)
                           texts=texts.concat(AutoL[x].texts)
                        }
                        break;
                     case /[0-9]/:
                        log(AutoL[Number(cmd[3])].name)
                        texts=texts.concat(AutoL[Number(cmd[3])].texts)
                        break;
                     default:
                        if(!/[0-9]/.test(cmd[3])) {
                           for(var x=0;x<AutoL.length;x=(x+1)|0) {
                              if(AutoL[x].name == cmd[3]) {
                                 texts=texts.concat(AutoL[x].texts)
                                 saveConfig()
                                 break;
                              }
                           }
                        }
                        break;
                  }
               }
               break;
            default:
               log("Syntax: .AutoLConfig/ALC <presset/settext>", true);break;
         }
      }
   }
}


function mineplexHP(playername){
	var scoreboard = mc.theWorld.getScoreboard()
	for (var i in mc.theWorld.loadedEntityList){
		var entity = mc.theWorld.loadedEntityList[i]
		if (entity instanceof EntityPlayer && entity !=mc.thePlayer){
			var scorpion = scoreboard.getObjectivesForEntity(entity.getGameProfile().getName())

			for (var key in scorpion) {
				if (entity.getGameProfile().getName() == playername){
					return Number(scorpion[key].getScorePoints())//*2
				}
			}
		}
	}
	return 0
}

function saveConfig() {
   writeFile(mc.mcDataDir + filepath, JSON.stringify(presets));
}

function loadConfig() {
   try {
      presets = JSON.parse(readFile(mc.mcDataDir + filepath).join(""));
   } catch (err) {}
}

function AutosendChat(msg) {
   return rt(msg)
      .replace(/(%playername%|%name%|%s%)/gi, ALname)
      .replace(/%MyHealth%|%Health%/gi, Math.floor(mc.thePlayer.getHealth()))
      .replace(/%insult_EN%/gi, rt(insultEN))
      .replace(/%insult_JA%/gi, rt(insultJA))
      .replace(/%insult_BI%/gi, rt(insultEN.concat(insultJA)))
      .replace(/%clientN_EN%/gi,rt(ClientNameEN))
      .replace(/%clientN_JA%/gi,rt(ClientNameJA))
      .replace(/%clientN_BI%/gi,rt(ClientNameEN.concat(ClientNameJA)))
      .replace(/%me_ja%/gi,rt(meJA))
      .replace(/%rn%/gi, Math.floor(Math.random()*10));
}

function log(message, isError) {
   if (isError) {
       chat.print(chatPrefix + " §c" + message);
   } else {
       chat.print(chatPrefix + " §f" + message);
   }
}

//var AutoReport = moduleManager.registerModule(new AutoReport);
var KillDetector = moduleManager.registerModule(new KillDetector);
var AutoLCommand = commandManager.registerCommand(new AutoLCommand);
var AutoLModule = moduleManager.registerModule(new AutoLModule);
var AutoReportModule = moduleManager.registerModule(new AutoReportModule);

function onEnable() {
   loadConfig();
   KillDetector;
   AutoLCommand;
   AutoLModule;
   AutoReportModule;
}

function onDisable() {
   moduleManager.unregisterModule(KillDetector);
   commandManager.unregisterCommand(AutoLCommand);
   moduleManager.unregisterModule(AutoLModule);
   moduleManager.unregisterModule(AutoReportModule);
}