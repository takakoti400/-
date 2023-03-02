//downgraded from fuckest version of scpt.v.2.0.0
/*
   thank you for
   -Senk Ju
   >Macro Script - used for FileConfigrate system.

   this script is protected by CC BY NC
*/
var scriptName = "AutoReport-Recoded";
var scriptAuthor = "liulihaocai and tk400.";
var scriptVersion = 1.0;

script.import("tKore.js")

function ChatManager() {
   var CDChat = true;
   var chatz = [];
   var deads = 0, Respawned = true;
   var SGdelayes = null;
   var SGrate = null;
   var OldPlayerList = []
   var AAPD=null;
   var AtaSaid=false
   var $chatAAP= ''
   var fstchat=null
   var fticks=aticks=0;

   var values = [
      ExpAdvDtct = value.createBoolean("ExperimentalAdventureDetect", false),
      Dev = value.createBoolean("DevMode", false),
      NoSpeak = value.createBoolean("NoSpeak", false),
      DebugyAL = value.createBoolean("DebugCheck", false),
      Debugy = value.createBoolean("Debug", false),
      yourname = value.createText("hackedBy", "[EnterNameHere]"),
      
      /* AtAllPlayer */
      ToggleAAP = value.createBoolean("AtAllPlayer", false),
      AAP_Rep = value.createBoolean("Repeat", false),
      AAPxdelay = value.createInteger("MaxDelay-AAP", 0, 0, 2000),
      AAPndelay = value.createInteger("MinDelay-AAP", 0, 0, 2000),
      
      /* LongGame | say as made too long battle time.(ex Spawning EnderDragon) */
      ToggleLG = value.createBoolean("AutoLongGame", false),
      LGTmode = value.createList("Texts", ["hypixel", "Mineplex", "Basic"], "Hypixel"),
      DebugyLG = value.createBoolean("Debug!DetectAllEntity", false),
      LGndelay = value.createInteger("MinCheckToLong", 0, 0, 2000),
      LGxdelay = value.createInteger("MaxCheckToLong", 0, 0, 2000),
      LGRate = value.createFloat("LRate", 25, 0, 100),
      
      /* 負け惜しみ */
      ToggleSG = value.createBoolean("Sour-Grapes", false),
      SGMode = value.createList("Sour-GrapesTiming", ["Health","Height", "Both"], "Both"),
      SGxdelay = value.createInteger("MaxDelay-SG", 0, 0, 2000),
      SGndelay = value.createInteger("MinDelay-SG", 0, 0, 2000),
      SGRate = value.createFloat("SGRate", 25, 0, 100),
      
      /*ハッカーへの追悼 / Hacker Ripper */
      ToggleHRIP = value.createBoolean("R.I.P_Hacker", false), // i think work
      RIPText = value.createText("AddCustomRIPTexts=>", ""), //not working
      RipTexts = value.createList("RIPTexts", [""], "Hypixel"), //lazy code
      
      /* Misc */
      ToggleFixTypo = value.createBoolean("RemoveTypo", false),
      AutoReply = value.createBoolean("AutoReply", false),//lazy to code
      AutoCDelay = value.createBoolean("AutoChatDelay", false),
      ACDndelay = value.createInteger("Delay-ACD", 0, 0, 500),
      ACDRandom = value.createInteger("RandomDelay", 0, 0, 100),
   ]
   this.addValues = function(v) {
      addValue(values,v)
   }

   this.getName = function() {
      return "ChatManager";
   }
   this.getDescription = function() {
      return "Allow you to spam with same bypass, more custmizable than Original";
   }
   this.getCategory = function() {
      return "Misc";
   }
   this.onUpdate = function() {
      if(ToggleAAP.get() && AtaSaid) {
         if(AAPCD==null) {
            AAPCD=DelayCal(AAPxdelay,AAPndelay)
         }else{
            if(AAPD>=AAPCD) {
               for(var x=0;x<OldPlayerList.length;x=(x+1)|0) {
                  chat.print($chatAAP.replace(/"@a"/gi, OldPlayerList[x]));AAPD=null;
                  if(x==(OldPlayerList-1)) {!AAP_Rep.get() &&(AtaSaid=false);OldPlayerList=getPlayerList()}
               }
            }else{AAPD++}
         }
      }

      if (ToggleSG.get()) {
         //chat.print(GroundChecker())
         if((!SGMode.get()==="Health" || ( mc.thePlayer.isDead || mc.thePlayer.getHealth() <= 0)) || SGMode.get("Both") && ((!SGMode.get() ==="Height" || !SGMode.get() ==="Both") || (mc.thePlayer.posY <= 0 && mc.thePlayer.fallDistance >= 2)) ) {
            if (Respawned && (mc.thePlayer.isDead || (mc.thePlayer.getHealth() <= 0))) {
               deads++; Respawned = false;
            }
            if(!mc.thePlayer.isDead && (mc.thePlayer.getHealth() > 0)) {
               Respawned = true;
            }
            if (deads> 0) {
               if (SGrate==null) {
                  SGrate = DelayCal(100, 0)
               } else if (SGRate.get() >= SGrate) {
                  if (SGdelayes==null) {
                     SGdelayes = DelayCal(SGxdelay.get(), SGndelay.get())
                  }else if (SGdelayes <= 0) {
                     if (SGdelayes <= 0) {
                        AutosendChat(SourGrape);
                        SGabled = SGdelaying = false;
                        deads--
                     } else {SGdelayes--}
                  }
               }// else {SGabled = idead = false}
            }
         }
      }
      if (AutoCDelay.get()) {
         chat.print("list :"+chatz)
         chat.print("length :"+chatz.length)
         if(fstchat != null) {
            chat.print("i1 :"+fticks)
            if(fticks >= 50) {
               fticks=0
               CDChat=true;
               fstchat=null;
               sendChat(fstchat);
               chatz.shift();
            }else{fticks=(fticks+1)|0}
         } else if (chatz.length >= 2) {
            chat.print("i2 :"+aticks)
            if(aticks >= 50) {
               aticks=0
               CDChat=true;
               sendChat(chatz[0]);
               chatz.shift()
            }else{aticks=(aticks+1)|0}
            /* if (ACDundelayed) {
               sendChat(chatz[0]);
               ACDundelayed = false
               chatz.shift()
            } */
         }
      }
   }
   this.onPacket = function(e) {
      var packet = e.getPacket();
      if (packet instanceof chatpacket) {
         var CMessage = packet.getChatComponent().getUnformattedText().toLowerCase()
         var Upname = mc.thePlayer.getName().toLowerCase()
         if (AutoReply.get()) {
            if(!packet.isChat()) {
               //chat.print('§1section1')
               var plist=getPlayerList()
               if(plist.indexOf(mc.thePlayer.getName())!= -1) {plist.splice(plist.indexOf(mc.thePlayer.getName()),1)}
               for(var x=0;x< plist.length;x=(x+1)|0) {//mmm Brute Code xd
                  if (CMessage.indexOf(plist[x].toLowerCase()) > -1 && ((CMessage.indexOf(plist[x].toLowerCase()) < (CMessage.indexOf(Upname) + mc.thePlayer.getName().length)) || !CMessage.indexOf(Upname) > -1)) {
                     //chat.print('§3section3')
                     var CutMessage=CMessage.slice(CMessage.indexOf(plist[x]) + plist[x].length)
                     if (/"ハッカー|ハック|チート|チーター|hack|hax|hak|hac|cheat|chaet"/i.test(CutMessage)) {
                        if(/what/i.test(CutMessage)) {
                           AutosendChat(whatclient.en)
                        } else if(/what/i.test(CutMessage)) {
                           AutosendChat(whatclient.ja)
                        } else if(/idiot|retard|degenerate|stupid|fuck|nigger|shit|bad|dump|worst|\*\*\*\*/i.test(CutMessage)) {
                           AutosendChat(clientinsulted)
                        } else {
                           if (CutMessage.contains(message)) {
                              AutosendChat(whohax.callme)
                           } else {
                              AutosendChat(whohax.uncallme)
                           }
                        }
                     } else if(/([L]+)|Loser|n?([o]+)?b|idiot|retard|degenerate|stupid|fuck|nigger|nub/i.test(CutMessage) && CutMessage.contains(Upname)) {
                        AutosendChat(insultresponses)
                     } else if(/client\?|what client/i.test(CutMessage)) {
                        AutosendChat(whatclient)
                     }
                  }//else{chat.print('detected you said.')}
               }
            }
         }
         if(ToggleHRIP.get()) {
            if(packet.isChat()) {
               if(/banned|\[WATCHDOG CHEAT DETECTION\]/i.test(CMessage) && !CMessage.contains(mc.thePlayer.getName())) {
                  AutosendChat(RIP_Hacker.en)
               }
            }//else{}
         }
      }
      if (packet instanceof clientchat) {
         var message =e.getPacket().getMessage().toLowerCase() //supports multiple Type (likes 'siGmA iS beST CLiENt')
         if (NoSpeak.get() && !message.startsWith("/"))  {
            chat.print("You said :"+message)
            e.cancelEvent()
         }
         //var regexp = /\%?([0-9]+)?\%/;
         /* using for prevent of chatpacket dupe */
         //if(regexp.test(message)) {
         //   e.cancelEvent();
         //   chat.print("send packet :"+message)
         //   var match;
         //   //var matches = [];
         //   while ((match = regexp.exec(message)) != null) {
         //      //chat.print(Number(match[1])*3);
         //      message=(message.replace(regexp, Number(match[1])*3))
         //   }
         //   chat.print(message)
         //}
         if(ToggleAAP.get()) {
            if((/"@a"/gi).test(message)) {
               AtaSaid=true;$chatAAP= message;plist = getPlayerList();e.cancelEvent()
               if(plist.length > 0) {
                  for(var x;x < plist.length;x=(x+1)|0) {
                     if(aapticks >= aapdelayes) {
                        AAPCD=null;
                     }else{aapticks++}
                  }
               }
            }
         }
         if (ToggleFixTypo.get()) {
            if (message.startsWith('delaytest')) {
               sendChat("1-")
               sendChat("2-")
               sendChat("3-")
               sendChat("4-")
               sendChat("5-")
               e.cancelEvent();
            }
         }
         if (AutoCDelay.get()) {
            if(CDChat) {
               chat.print("aaa "+message)
               CDChat=false;
            } else {
               fstchat=message;
               chatz.push(message);
               e.cancelEvent();
            }
         }
      }
   }
   //this.getTag = function() {
   //   return ("PENDINGREPORTS : " + PendingReportPlayer + "(" + (Math.floor(delayes / 10)) + ")");
   //}
   this.onEnable = function() {
      i = 0;
      ARname = '';
   }
}

var ChatManager = moduleManager.registerModule(new ChatManager);

function onEnable() {
   ChatManager;
}

function onDisable() {
   moduleManager.unregisterModule(ChatManager);
}