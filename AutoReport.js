//downgraded from fuckest version of scpt.v.2.0.0
var scriptName = "AutoReport-Recoded";
var scriptAuthor = "liulihaocai and tk400.";
var scriptVersion = 32767.255;

function AutoReport() {
   var EntityMobs = Java.type("net.minecraft.entity.EntityCreature");
   var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
   var delayes = 0;
   var reportedPlayers=[];
   var reportingPlayers=[];
   var RPlayers=[];
   var Reasindex = '' // fuckyou indexof error
   var ReasShindex = ''
   var name = ''
   var ARname = ''
   var RPname = ''
   var spoken = true
   var delaying=false

   var Mode = value.createList("Mode", ["Hypixel","Redesky","/report"],"");
   var refl = value.createList("RefreshPlayerlist", ["onWorld","onEnable","Both","Off"],"onEnable");
   var hypm = value.createBoolean("ConstedReason", false);
   var Reseter = value.createBoolean("Reset", false);
   //var Rand = value.createBoolean("Randomize-from-Reasons", false);
   //var RandLength = value.createInteger("ConstedRandomizerLength", 0, 0, ReasShow.length); // delete comment out '//' for enable this function.
   var ReasShow = value.createText("Reasons", "");
   var Reas = value.createText("CustomReason=>", "");
   var ReasL = value.createList("ReasonsList", [" Fly"," HighJump"," Speed"," LongJump"," Jesus"," Dolphin"," KillAura"," Aimbot"," AutoClicker", "ClickValueToAdd!"], "ClickValueToAdd!");
   var mes = value.createBoolean("ReportReported", false);
   var xdelay = value.createInteger("MaxDelay", 0, 0, 2000);
   var ndelay = value.createInteger("MinDelay", 0, 0, 2000);

   this.addValues = function(v) {
      v.add(Mode)
      v.add(refl);
      v.add(hypm)
      v.add(Reseter)
      //v.add(Rand)
      //v.add(RandL) // and this line.
      v.add(ReasShow)
      v.add(Reas)
      v.add(ReasL)
      v.add(mes)
      v.add(xdelay)
      v.add(ndelay)
   }
   this.getName = function() {
      return "AutoReport"
   }  
   this.getDescription = function() {
      return "Makes Moderetor Busy or reduce Anti Legitly Banning? :D / More Customizable, more functional more bypassable(?)"
   }  
   this.getCategory = function() {
      return "Player"
   }
   this.getTag = function () {
      return ("PENDINGREPORTS : "+reportingPlayers+"("+(Math.floor(delayes/10))+")")
   }

   this.onAttack = function(e) {
      if(e.getTargetEntity() instanceof EntityPlayer){
         RPname = name = e.getTargetEntity().getName();
         if((reportingPlayers.indexOf(name) && RPlayers.indexOf(name)) == -1) {
            chat.print("§6Added §5'§r"+name+"§5'§6 Reporting List! plz wait a secounds...")
            RPlayers.push(RPname) //dumb way code...
            reportingPlayers.push(name);
         }
      }
   }
   this.onUpdate = function() {
      if(reportingPlayers.length >= 1) {
         spoken && (ARname = reportingPlayers[0],spoken=false)
         //chat.print("§1Checkra1n.")
         if(reportedPlayers.indexOf(ARname) == -1) {
            //chat.print("Null")
            !delaying && (delayes = DelayCal(xdelay.get(),ndelay.get()),delaying=true);
            if (delayes <= 0) {
               //chat.print("§4Null2")
               delaying=false;
               spoken =true;
               reportingPlayers.shift()
               //if(Rand.get()) {//tired for coding xd
               //   var ReasShindexR = ReasShow.get()
               //   ReasShindexR.split(' ')
               //   for(var x = 0; x >= ReasShow.length; x +=1) {
               //      if(RandomPool()) {
               //         text.push(ReasShindexR[x])
               //      }else{
               //         ReasShindexR.shift()
               //      }
               //   }
               //}
               switch(Mode.get()) {
                  case "Hypixel":{
                    if(hypm.get()) {
                        sendChat("/report "+ARname+Reas.get());
                     } else {
                        sendChat("/report "+ARname+ReasShow.get());
                     }
                     break;
                  }
                  case "Redesky":{
                     sendChat("/reportar "+ARname);
                     break;
                  }
                  case "/report":{
                     sendChat("/report "+ARname);
                     break;
                  }
               }
               reportedPlayers.push(ARname)
               /*chat.print(
                  "[DEBUG]§r REMOVED NAME FROM THE LIST." + "\n"+
                  "§5[REPORTINGLIST]§r §7" + reportingPlayers+"\n"+
                  "§3[REPORTED LIST]§r §7" + reportedPlayers
               )*/
               mes.get() && (sendChat("Hi "+ARname+" u got reported by LiquidBounce!"))
               Chat.print("§6§l[AutoReport]§r Successfully reported §f§l"+name+"§a§l")
            }else{delayes -= 1}
         }
         //chat.print(delayes)
      }

      Reasindex = Reas.get()
      ReasShindex = ReasShow.get()
      if(Reasindex.indexOf("-") != -1) {Reas.set(Reas.get().replace("-"," "))}
      if(ReasShindex.indexOf("-") != -1) {ReasShow.set(ReasShow.get().replace("-"," "))}
      Reseter.get() && (ReasShow.set(""),Reseter.set(false))
      if(!hypm.get()) {
         if(ReasL.get() != 'ClickValueToAdd!') {
            if(ReasShindex.indexOf(ReasL.get()) == -1) {
               ReasShow.set(ReasShow.get().concat(ReasL.get()))
               ReasL.set("ClickValueToAdd!")
            } else {
               ReasShow.set(ReasShow.get().replace(ReasL.get(), ""))
               ReasL.set("ClickValueToAdd!")
            }
         }
         if(Reas.get() != '') {
            if(ReasShindex.indexOf(Reas.get()) == -1) {
               ReasShow.set(ReasShow.get().concat(" "+Reas.get()))
               Reas.set('')
            }else {
               ReasShow.set(ReasShow.get().replace(" "+Reas.get(), ""))
               Reas.set('')
            }
         }
      }
   }
   this.onEnable = function() {refl.get("onEnable"||"Both") &&(reportedPlayers=[],reportingPlayers=[],RPlayers=[],spoken=true,delayes=0)}
   this.onWorld = function () {refl.get("onWorld" ||"Both") && (reportedPlayers=[],reportingPlayers=[],RPlayers=[],spoken=true,delayes=0)}
   this.onDisable = function() {}
}

function sendChat (msg) {
   mc.thePlayer.sendChatMessage(msg);
}
function DelayCal (MaxDelay, MinDelay) {
   var x = Math.floor(Math.random() * ((MaxDelay-MinDelay)+1) + MinDelay);
   return x;
}
function RandomPool() {
   if(Math.round(Math.random()) >1) {
      return true
   }else{
      return false
   }
}

var AutoReport = moduleManager.registerModule(new AutoReport);

AutoReport;

moduleManager.unregisterModule(AutoReport);