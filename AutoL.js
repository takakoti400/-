/* Big thanks to Senk Ju Command Util and JSON Config Manager. and Original script Dever of liulihaocai m(_ _)m */

var scriptName = "AutoKillSults"; //AutoL-Recoded
var scriptAuthor = "liulihaocai?, Senk Ju and tk400.";
var scriptVersion = 1.0;

/* Lib Importer */
script.import("lib/arrayFunctions.js")

script.import("tKore.js")
script.import("MineplexTeams.js")

var cprefix = "§8[§9AutoL Config§8]";
var filepath="/AutoLConfig.json";
var textfilepath="/texts.json";
var target = null;
var presets = [
   [],
   []
]
presets=loadConfig(filepath)
var Texts={}
Texts=loadConfig(textfilepath)

var NameIndex=0;

var ALname = null;
var Ldelayes = null;
var ALRate = null;
var PANList = [];
var texts=['undefined text.']
var AutoLToggle=false;

var PRP=[];
var delayes = null;
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
   CheckActionSend = value.createBoolean("CheckC02ActionSend", true),
   ALDmode = value.createList("DeadCheckMode", ["PacketChat", "DeadCheck"], ""), // tired coding.
   Lxdelay = value.createInteger("MaxDelay-L", 0, 0, 300),
   Lndelay = value.createInteger("MinDelay-L", 0, 0, 300),
   LRate = value.createInteger("LRate", 50, 0, 100),
]

var AutoRvalues = [
   Reseter = value.createBoolean("Reset", false),
   ExpAdvDtct,
   DetAE,
   RMode = value.createList("ReportMode", ["Command","Chat"], "Command"),
   Mode = value.createList("CommandType", ["Hypixel", "/report","Custom"], "Hypixel"),
   reasonMode = value.createList("Reason", ["Randomized","Custom"],"Randomized"),
   MinLength = value.createInteger("MinLength", 1, 1, 10), // ReashShow.length is unusable, mmm...
   CrrentReasson = value.createText("CurrentReason", ''),
   ReasL = value.createList("ReasonsList", [" Fly", " HighJump", " Speed", "AntiKB", " LongJump", " Jesus", " Dolphin", " KillAura", " Aimbot", " AutoClicker","Reach", "ClickValueToAdd/Remove!"], "ClickValueToAdd/Remove!"),
   Reas = value.createText("AddCustomReason=>", ""),
   mes = value.createBoolean("ReportReported", false), //wth
   xdelay = value.createInteger("MaxDelay-R", 0, 0, 300),
   ndelay = value.createInteger("MinDelay-R", 0, 0, 300),
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
   var TargetName=null;
   function CheckEntityforL(target) {return ((DetAE.get() ? (target instanceof EntityMobs || target instanceof EntityLiving || target instanceof EntityPlayer) : target instanceof EntityPlayer) && !AntiBot.isBot(target) && target != null && !target.isDead && (target.getHealth() > 0) && target != mc.thePlayer && (!ExpAdvDtct.get() || mc.playerController.getCurrentGameType() != "ADVENTURE"))}
   function AddName(Name) {
      if (!TargetNames.includes(Name) && !PANList.includes(Name) && !PRP.includes(Name)) {
         if(/mineplex/i.test(ServerUtils.getRemoteIp().toLowerCase())) {
            if(!TeamMates.includes(Name)) {
               TargetNames.push(Name);
               chat.print("Added Player '"+Name+"' -> ["+TargetNames+"]");
            }
         } else {
            TargetNames.push(Name)
            chat.print("Added Player '"+Name+"' -> ["+TargetNames+"] |")
         }
      }
   }
   this.getName = function() {
      return "KillDetector";
   }
   this.getDescription = function() {
      return "Allows you to Automaticaly insults when you killed target."
   }
   this.getCategory = function() {
      return "Player"
   }
   this.getTag =function() {
      return Debugy.get() ?  (TargetNames.length > 0 ? "TargetName->"+TargetNames : "") : ""
   }
   this.onEnable = function() {
      if(Debugy.get()) {chat.print(presets)}
   }
   this.onAttack = function(e) {
      target = e.getTargetEntity()
      //chat.print(ServerUtils.getRemoteIp())
      if (!CheckActionSend.get() && CheckEntityforL(target)) {
         AddName(target.getName())
      }
   }
   this.onUpdate = function () {
      if(mc.thePlayer.isSpectator()) {
         chat.print("detected gamemode is spectator.")
         TargetName=null;TargetNames=PANList=PRP=[];
      }else{
         if (TargetNames.length > 0) {
            for (var x in mc.theWorld.loadedEntityList) {
               var entity = mc.theWorld.loadedEntityList[x];
               var EntName=entity.getName();
               for(var y=0;y<TargetNames.length;y=(y+1)|0) {
                  if(EntName==TargetNames[y]) {
                     function addPlayer() {
                        if (entity.isDead || entity.getHealth()==0) {//detect Target isDead.
                           /* if(SPDeath.get()) { // No Idea.
                              if(target.isBurning() && !target.isImmuneToFire()) {
                                 'EntName'
                              }
                           } */
                           (AutoRToggle && !reportedPlayers.includes(EntName)) && (PRP.push(EntName));
                           AutoLToggle  && (PANList.push(EntName));
                           chat.print("TN:"+TargetNames+"| NI"+y);
                           chat.print("detected dead player '"+EntName+"' -> " +(AutoRToggle ? +"AutoR["+PRP+"]" : "")+ (AutoLToggle ? "AutoL["+PANList+"]" : ""));
                           TargetNames.splice(y, 1);
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
         }
         /* AutoReport */
         if(AutoRToggle) {
            if(PRP.length > 0) {
               if(ARname==null) {ARname = PRP[0]};
               if (Reportablerate==null) {
                  chat.print("Sec1")
                  if (RRate.get() >= Reportablerate) {
                     chat.print("Sec2")
                     if (delayes==null) {
                        delayes = DelayCal(xdelay.get(), ndelay.get())
                     }else{
                        if (delayes <= 0) {
                           chat.print("Sec3")
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
                                 sendChat("/report " + ARname + " " + Reason);
                                 break;
                              case "/report":
                                 sendChat("/report " + ARname);
                                 break;
                              case "Custom":
                                 sendChat("/" + RC.get()+(AppendReason.get() && (" "+Reason) || !AppendReason.get()&&""));
                                 break;
                           }
                           chat.print("Sec4-1")
                           mes.get() && (sendChat("Hi " + ARname + ", u got reported by LiquidBounce!")) // or rt(exampletexts)
                           chat.print("§6§l[AutoReport]§r Successfully reported §f§l" + ARname + "§a§l")
                           delayes = null;
                           Reportablerate = null;
                           reportedPlayers.push(ARname);
                           ARname = null;
                           PRP.shift();
                        } else {delayes--}
                     }
                  } else {
                     PRP.shift();
                     ARname =Reportablerate = null;
                     reportedPlayers.push(ARname);
                     chat.print("§duwu he was a lucky!\n[DEBUG]\nPRPLists->" + PRP + "\nARname->" + ARname+"\nReportedPlayers"+reportedPlayers+"\n---------END OF DEBUG---------");
                  }
               }else{
                  Reportablerate = DelayCal(100, 0)
               }
            }
         }
         /* AutoL */
         if(AutoLToggle) {
            if (PANList.length > 0) {
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
   }
   this.onPacket = function(e) {
      if(CheckActionSend.get()) {
         var packet=e.getPacket();
         if(packet instanceof C02PacketUseEntity) {
            if(packet.getAction()=="ATTACK")  {
               var packetEntity=packet.getEntityFromWorld(mc.theWorld)
               if (CheckEntityforL(packetEntity)) {
                  AddName(packetEntity.getName())
               }
            }
         }
      }
   }
   this.onDisable = function() {
      TargetNames=[]
      TargetName=null;
      //AutoRToggle && (moduleManager.getModule("AutoReport").state = false)
      //AutoLToggle && (moduleManager.getModule("AutoL").state=false)
   }
   this.onWorld=function(){TargetName=null;TargetNames=[]}
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
      return ((PANList.length > 0) ? ("("+Ldelayes/10+")"+PANList.toString()):"")
   }
   this.onLoad = function () {presets=loadConfig(filepath)}
   this.onEnable = function () {
      presets=loadConfig(filepath)
      texts = loadConfig(textfilepath)
      if(["onEnable", "Both"].includes(refl.get())) {chat.print("aaa4");ALname=ALRate = null;Ldelayes = 0;PANList=[]}
      moduleManager.getModule("KillDetector").state =AutoLToggle = true;
      texts=[];
      if(Textsets.get() == "") {
         texts=["undefined text."]
      }else{
         var x=z=0;
         if((x=(presets[0].indexOf(Textsets.get())))>=0) {
            chat.print(x)
            for(var y=0;y<presets[1][x].length;y=(y+1)|0) {
               if((z= (Texts.AutoL[0].indexOf(presets[1][x][y])))>=0) {
                  chat.print(z)
                  texts=texts.concat(Texts.AutoL[1][z]);
               }
            }
         }
      }
   }
   this.onDisable = function() {AutoLToggle = false}
   this.onWorld = function() {
      chat.print(refl.get())
      if(["onWorld", "Both"].includes(refl.get())) {ALname=ALRate = null;Ldelayes = 0;PANList=[]}
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
      return "Allows you to (fake) Reports Automaticaly, with some options"
   }
   this.getCategory = function() {
      return "Player"
   }
   this.getTag = function () {
      return (PRP.length > 0 ? "("+delayes/10+")"+PRP.toString():"")
   }
   this.onEnable = function() {moduleManager.getModule("KillDetector").state = AutoRToggle = true;if(["onEnable", "Both"].includes(refl.get())) {PRP=[]; delayes = 0;target = null;ARname=nullReason = '';Reportablerate = null;ReasShow = [];Rerray='';Reaz=[]}}
   this.onDisable = function() {AutoRToggle = false}
   this.onWorld = function () {if(["onWorld", "Both"].includes(refl.get())) {;PRP=[]; delayes = 0;target = null;ARname=nullReason = '';Reportablerate = null;ReasShow = [];Rerray='';Reaz=[]}}
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
      function showClist() {
         chat.print(">-Current presset-<")
         for(var x=0;x<presets.length;x=(x+1)|0) {
            chat.print("§4PName §l"+presets[0][x])
            chat.print("PcList §o" +presets[1][x])
            chat.print("§7>----")
         }
      }
      function showcatlist() {
         chat.print(">-[Categories] of AutoL texts-<")
         for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
            chat.print("["+x+"]"+Texts.AutoL[0][x])
         }
      }
      if (cmd.length < 2) {
         log("§6KillDetector AutoLConfigCUI by tk400.")
         log("Syntax: .AutoLConfig/ALC <presset/texts/settext>", true);
      } else {
         switch (cmd[1]) {
            case "presset":
               if(cmd.length <  3) {
                  log("Syntax: .AutoLConfig presset <add/remove/show>",true)
                  showClist()
                  chat.print(">-Available AutoL texts-<")
                  for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                     chat.print("["+x+"] to Add "+Texts.AutoL[0][x])
                  }
               } else {
                  switch (cmd[2]) {
                     case "add":
                        if(cmd.length < 5) {
                           log("Syntax: .AutoLConfig presset add <name> <list>",true)
                        } else {
                           var Pname = cmd[3]
                           var lists = []
                           for(var x=0;x<cmd.length-4;x=(x+1)|0) {
                              if(/^([1-9]\d*|0)$/.test(cmd[4+x])) {
                                 lists.push(Texts.AutoL[0][Number(cmd[4+x])])
                                 chat.print("lists"+lists)
                              }else{
                                 chat.print("pressets"+presets)
                                 lists.push(Texts.AutoL[0][Texts.AutoL[0].indexOf(cmd[4+x])])
                                 chat.print("lists"+lists)
                              }
                           }
                           presets[0].push(Pname)
                           presets[1].push(lists)
                           chat.print(Pname+" has Added!")
                           saveConfig(filepath,presets);
                        }
                        break;
                     case "remove":
                        if(cmd.length < 4) {
                           log("Syntax: .AutoLConfig presset remove <id/name>",true)//it may eazy to add name opt, but its lazy and slower?
                           showClist()
                        } else {
                           if(/^([1-9]\d*|0)$/.test(cmd[3])) {
                              //chat.print(presets[Number(cmd[3])].name+" has Removed!")
                              presets.splice(Number(cmd[3]),1)
                              showClist()
                           }else{
                              for(var x=0;x<cmd.length-4;x=(x+1)|0) {
                                 var index=presets[0].indexOf(cmd[4+x])
                                 presets[0].splice(index,1)
                                 presets[1].splice(index,1)
                              }
                              showClist()
                           }
                           saveConfig(filepath,presets);
                        }
                        break;
                     case "show":
                        saveConfig(filepath,presets);
                        //loadConfig();
                        chat.print(">-Available pressets-<")
                        for(var x=0;x<presets[0].length;x=(x+1)|0) {
                           chat.print("§4PName §l"+presets[0][x])
                           chat.print("PcList §o"+presets[1][x])
                           var minus=''
                           for(var x=0;x<presets[1][x].length;x=(x+1)|0) {minus+="-"}
                           chat.print("§7>"+minus+"<")
                        }
                        break;
                     case "reset":
                        presets=[[],[]];
                        showClist();
                        saveConfig(filepath,presets);
                        break;
                  }
               }
               break;
            case "texts":
               if(cmd.length < 3) {
                  log("Syntax: .AutoLConfig texts <add/edit/remove/show>",true)
                  chat.print(">-Available AutoL texts-<")
                  for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                     chat.print("["+x+"] to Add "+Texts.AutoL[0][x])
                  }
               } else {
                  switch (cmd[2]) {//.ALC[0]1 texts[1]2 add[2]3 id[3]4
                     case "add":
                        if(cmd.length < 5) {
                           log("Syntax: .AutoLConfig texts add <cat/text> <name/id>",true)
                        } else {
                           var catindex=Number(cmd[4])
                           switch (cmd[3]) {
                              case "cat":
                                 if(cmd.length < 6) {
                                    Texts.AutoL[0].push(cmd[4])
                                    Texts.AutoL[1].push([]) //inserts new empty box on the text lists.
                                 }else{
                                    for(var x=0;x<cmd.length-4;x=(x+1)|0) {
                                       Texts.AutoL[0].push(cmd[4+x])
                                       Texts.AutoL[1].push([]) //inserts new empty box on the text lists.
                                    }
                                 }
                                 saveConfig(textfilepath,Texts)
                                 log("Cats\n"+Texts.AutoL[0],false)
                                 break;
                              case "text":
                                 if(cmd.length < 6) {
                                    log("Syntax: .AutoLConfig texts add text <id> <text>",true)
                                    log("TIP: %s% will be replaces to space.",false)
                                 } else {
                                    var textset=''
                                    for(var x=0;x<cmd.length-5;x=(x+1)|0) {
                                       textset+=(cmd[x+5])
                                    }
                                    if(/^([1-9]\d*|0)$/.test(cmd[4])) {
                                       Texts.AutoL[1][catindex].push(textset.replace(/%s%/gi, ' '))//mmm
                                    }else{
                                       if((catindex=(Texts.AutoL[0].indexOf($4x)))!=-1) {
                                          Texts.AutoL[1][catindex].push(textset.replace(/%s%/gi, ' '))
                                       }
                                    }
                                    saveConfig(textfilepath,Texts)
                                    log("texts\n"+Texts.AutoL[1][catindex],false);
                                 }
                                 break;
                              default:log("unknown error, probably typo.",true);break;
                           }
                           //chat.print(Texts.AutoL[1][Number(cmd[3])])
                        }break;
                     case "edit":
                        if(cmd.length < 4) {
                           log("Syntax: .AutoLConfig texts edit <catname/text>",true)
                           log("TIP: %s% will be replaces to space.",false)
                        } else {
                           if(cmd.length <5) {
                              showcatlist()
                           }else{
                              switch (cmd[3]) {
                                 case "catname":
                                    Texts.AutoL[0][Number(cmd[4])]=cmd[5]
                                    log("Cat Name has changed.",false)
                                    showcatlist()
                                    break;
                                 case "text":
                                    Texts.AutoL[1][Number(cmd[4])][Number(cmd[5])]=cmd[6].replace(/%s%/gi, ' ');
                                    chat.print("Text Changed. :"+Texts.AutoL[1][Number(cmd[4])]);
                                    break;
                              }
                           }
                        }break;
                     case "remove":
                        if(cmd.length < 5) {
                           log("Syntax: .AutoLConfig texts remove <cat/text> <name/id - text>",true)
                        } else {
                           var catindex=Number(cmd[4])
                           switch (cmd[3]) {
                              case "cat":
                                 if(cmd.length < 5) {
                                    log("Syntax: .AutoLConfig texts add cat <id>",true)
                                 } else {
                                    for(var x=0;x<cmd.length-4;x=(x+1)|0) {
                                       var $4x=cmd[4+x]
                                       if(/^([1-9]\d*|0)$/.test($4x)) {
                                          Texts.AutoL[0].splice(Number($4x), 1)
                                          Texts.AutoL[1].splice(Number($4x), 1)
                                       }else{
                                          var ind= -1;
                                          if((ind=(Texts.AutoL[0].indexOf($4x)))!=-1) {
                                             Texts.AutoL[0].splice(ind,1)
                                             Texts.AutoL[1].splice(ind,1)
                                          }
                                       }
                                    }
                                    saveConfig(textfilepath,Texts)
                                 }
                                 chat.print(">-[Categories] of AutoL texts-<")
                                 for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                                    chat.print("["+x+"]"+Texts.AutoL[0][x])
                                 }
                                 log("Cats\n"+Texts.AutoL[0],false)
                                 break;
                              case "text":
                                 if(cmd.length < 6) {
                                    log("Syntax: .AutoLConfig texts add text <catid> <textIds>",true)
                                 } else {
                                    for(var x=0;x<cmd.length-5;x=(x+1)|0) {
                                       var $5x=cmd[5+x]
                                       if(/^([1-9]\d*|0)$/.test($5x)) {
                                          Texts.AutoL[1][catindex].splice(Number($5x), 1)
                                       }else{
                                          var ind= -1;
                                          if((ind=(Texts.AutoL[0].indexOf($5x)))!=-1) {
                                             Texts.AutoL[1][catindex].splice(ind,1)
                                          }
                                       }
                                    }
                                    chat.print("Available texts of"+Texts.AutoL[1][catindex])
                                    for(var x=0;x<Texts.AutoL[1][catindex].length;x=(x+1)|0) {
                                       chat.print("["+x+"]"+Texts.AutoL[1][catindex][x])
                                    }
                                    saveConfig(textfilepath,Texts)
                                 }
                                 break;
                              default:log("unknown error, probably typo.",true);break;
                           }
                           chat.print(Texts.AutoL[1][cmd[3]])//chat.print(Texts.AutoL[1][cmd[3]].replace(',', '\n'))
                        }break;
                     case "reset":
                        Texts.AutoL=[[],[]]
                        saveConfig(textfilepath,Texts)
                        log("Cleaned AutoL texts."+Texts.AutoL,false)
                     case "show":
                        if(cmd.length < 4) {
                           log("Syntax: .AutoLConfig texts show <id>",true)
                           chat.print(">-[Categories] of AutoL texts-<")
                           for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                              chat.print("["+x+"]"+Texts.AutoL[0][x])
                           }
                        } else {
                           chat.print(Texts.AutoL[1][Number(cmd[3])])
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
                     chat.print("§4PName §l"+presets[0][x])
                     chat.print("PcList §o"+presets[1][x])
                     chat.print("§7>----")
                  }
                  chat.print(">-Available AutoL texts-<")
                  for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                     chat.print("["+x+"] to Add "+Texts.AutoL[0][x])
                  }
               } else {
                  switch (cmd[2]) {
                     case "show":
                        chat.print(">-Available AutoL texts-<")
                        for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                           chat.print("["+x+"] to Add "+Texts.AutoL[0][x])
                        }
                        break;
                     case "all":
                        for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                           log(Texts.AutoL[0][x])
                           texts=texts.concat(Texts.AutoL[1][x])
                        }
                        break;
                     case /^([1-9]\d*|0)$/:
                        log(Texts.AutoL[0][Number(cmd[3])])
                        texts=texts.concat(Texts.AutoL[1][Number(cmd[3])])
                        break;
                     default:
                        if(!/^([1-9]\d*|0)$/.test(cmd[3])) {
                           for(var x=0;x<Texts.AutoL[0].length;x=(x+1)|0) {
                              if(Texts.AutoL[0][x] == cmd[3]) {
                                 texts=texts.concat(Texts.AutoL[1][x])
                                 saveConfig(filepath,presets)
                                 break;
                              }
                           }
                        }
                        break;
                  }
               }
               break;
            case "reload":
               Texts=loadConfig(textfilepath);break;
            default:
               log("Syntax: .AutoLConfig/ALC <presset/settext>", true);break;
         }
      }
   }
}

function mineplexHP(playername) {
	var scoreboard = mc.theWorld.getScoreboard()
	for (var i in mc.theWorld.loadedEntityList) {
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

function AutosendChat(msg) {
   var $text=rt(msg)
   for (var x = 0; x < Texts.rep.length; x=(x+1)|0) {/* Lazy code? */
      if(Texts.rep[x].for instanceof Array) {
         for (var x = 0; x < Texts.rep[x].for.length; x=(x+1)|0) {
            if($text.indexOf("%"+Texts.rep[x].for[y]+"%")!=-1) {$text=$text.replace(("%"+Texts.rep[x].for[y]+"%"), rt(Texts.rep[x]._text))}
         }
      }else{
         if($text.indexOf("%"+Texts.rep[x].for+"%")!=-1) {$text=$text.replace(("%"+Texts.rep[x].for+"%"), rt(Texts.rep[x]._text))}
      }
   }
   return $text.replace(/(%playername%|%name%|%s%)/gi, ALname).replace(/(%username%|%myname%)/gi, mc.thePlayer.getName()).replace(/%MyHealth%|%Health%/gi, Math.floor(mc.thePlayer.getHealth())).replace(/%rn%/gi, (Math.floor(Math.random()*10).toString()))
}



var KillDetector = moduleManager.registerModule(new KillDetector);
var AutoLCommand = commandManager.registerCommand(new AutoLCommand);
var AutoLModule = moduleManager.registerModule(new AutoLModule);
var AutoReportModule = moduleManager.registerModule(new AutoReportModule);

function onEnable() {
   presets=loadConfig(filepath);
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