/* Big thanks to Senk Ju Command Util and JSON Config Manager. and Original script Dever of liulihaocai m(_ _)m */

var scriptName = "AutoL-Recoded";
var scriptAuthor = "liulihaocai?, Senk Ju and tk400.";
var scriptVersion = 1.0;

script.import("tKore.js")
script.import("texts.js") //for spam texts.


var chatPrefix = "§8[§9AutoL Config§8]";
var filepath="/AutoLConfig.json"
var presets = [
   //{name: "",list: []}
]

//var LedPlayers = [];

function AutoLModule() {
   var Ldelayes = 0;
	var target = null;
	var ALname = null;
	var ALRate = null;
	var PANList = [];
	var PALIdList = [];
	var PAList = [];
   var texts=[]
	var values = [//i have no plan to automate add values.(like Czechek's Core)
      Help = value.createBoolean("ReadMe", false),
      ExpAdvDtct = value.createBoolean("ExperimentalAdventureDetect", false),
      DebugyAL = value.createBoolean("DebugCheck", false),
      Debugy = value.createBoolean("Debug", false),
      Textsets = value.createText("Textset", ""),
      SLists = value.createBoolean("PessetList", false),
      LPrev = value.createBoolean("PreventDupeL", false),
      DebugyAL = value.createBoolean("Debug!DetectAllEntity", false),
      ALDmode = value.createList("DeadCheckMode", ["PacketChat", "DeadCheck"], ""), // tired coding.
      Lxdelay = value.createInteger("MaxDelay-L", 0, 0, 2000),
      Lndelay = value.createInteger("MinDelay-L", 0, 0, 2000),
      LRate = value.createFloat("LRate", 25, 0, 100),
   ]
   this.getName = function() {
      return "AutoL"
   }
   this.getDescription = function() {
      return "Allows you to Automaticaly insults when you killed target."
   }
   this.getCategory = function() {
      return "Player"
   }
   this.onEnable = function() {
      texts=[]
      if(Textsets.get() != "") {
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
   this.onAttack = function(e) {
      target = e.getTargetEntity()
      //chat.print(ServerUtils.getRemoteIp())
      if (((!DebugyAL.get() || (target instanceof EntityPlayer || target instanceof EntityMobs || target instanceof EntityLiving)) && !AntiBot.isBot(target)) && target != null && !target.isDead && target != mc.thePlayer && (!ExpAdvDtct.get() || !(mc.playerController.getCurrentGameType() == "ADVENTURE"))) {
         if(/mineplex/i.test(ServerUtils.getRemoteIp().toLowerCase())) {
            target.setHealth(mineplexHP(target.getName()))
            //chat.print(target.getHealth())
         }
         if(target.getHealth() > 0) {
            //Add Player name
            if (PAList.indexOf(target.getName()) == -1 && PALIdList.indexOf(target.getEntityId()) == -1 && PANList.indexOf(target.getName()) == -1) {
               PALIdList.push(target.getEntityId());
               PAList.push(target.getName());
               chat.print("§6Added §5'§r" + target.getName() + "§5' to AutoL List! Let's Kill Him!");
            }
         }
      }
   }
   this.onUpdate = function() {
      if (PAList.length >= 1) {
         for (var x in mc.theWorld.loadedEntityList) {
            var entity = mc.theWorld.loadedEntityList[x];
            if (PAList.indexOf(entity.getName()) != -1 && PALIdList.indexOf(entity.getEntityId()) != -1) {
               if(/mineplex/i.test(ServerUtils.getRemoteIp())) {
                  entity.setHealth(mineplexHP(entity.getName()))
                  chat.print(entity.getHealth())
               }
               if (entity.isDead || entity.getHealth() <= 0) { //detect Target Dead.
                  if (PANList.indexOf(entity.getName()) == -1) {PANList.push(entity.getName())};
                  Index = PAList.indexOf(entity.getName());
                  PALIdList.splice(Index, 1);
                  PAList.splice(Index, 1);
               }
            }
         }
      }
      if (PANList.length >= 1) {
         if (ALRate == null) {
            ALRate = DelayCal(100, 0);
            chat.print(LRate.get() + "/" + ALRate);
         } else {
            if (LRate.get() >= ALRate) {
               (ALname == null) && (ALname = PANList[0]);
               if (Ldelayes == null) {
                  Ldelayes = DelayCal(Lxdelay.get(), Lndelay.get());
               } else {
                  if (Ldelayes <= 0) {
                     var text=rt(texts)
                     if (Debugy.get()) {chat.print("said :§c" + AutosendChat(text))};
                     sendChat(AutosendChat(text));
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
   this.onWorld=function () {
      Ldelayes = 0;
      target = null;
      ALname = null;
      ALRate = null;
      PANList = [];
      PALIdList = [];
      PAList = [];
   }
   this.onDisable = function() {}

   this.addValues = function(v) {//mmm.....
      addValue(values, v)
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
      saveConfig();
      if (cmd.length < 2) {
         log("§6AutoLModule AutoLConfigCUI by tk400.")
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
                  break;
               }
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
   mc.thePlayer.sendChatMessage(rt(msg)
      .replace(/(%playername%|%name%|%s%)/gi, ALname)
      .replace(/%MyHealth%/gi, Math.floor(mc.thePlayer.getHealth()))
      .replace(/%insult_EN%/gi, rt(insultEN))
      .replace(/%insult_JA%/gi, rt(insultJA))
      .replace(/%insult_BI%/gi, rt(insultEN.concat(insultJA)))
      .replace(/%clientN_EN%/gi,rt(ClientNameEN))
      .replace(/%clientN_JA%/gi,rt(ClientNameJA))
      .replace(/%clientN_BI%/gi,rt(ClientNameEN.concat(ClientNameJA)))
      .replace(/%me_ja%/gi,rt(meJA))
      .replace(/%rn%/gi, Math.floor(Math.random()*10))
   );
}
function log(message, isError) {
   if (isError) {
       chat.print(chatPrefix + " §c" + message);
   } else {
       chat.print(chatPrefix + " §f" + message);
   }
}

//var AutoReport = moduleManager.registerModule(new AutoReport);
var AutoLModule = moduleManager.registerModule(new AutoLModule);
var AutoLCommand = commandManager.registerCommand(new AutoLCommand);

function onEnable() {
   loadConfig();
   AutoLModule;
   AutoLCommand;
}

function onDisable() {
   saveConfig();
   //moduleManager.unregisterModule(AutoReport);
   moduleManager.unregisterModule(AutoLModule);
   commandManager.unregisterCommand(AutoLCommand);
}


