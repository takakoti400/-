var scriptName = "MineplexTeams";
var scriptAuthor = "tk400.";
var scriptVersion = 1.0;

script.import("tKore.js")

function MineplexTeams() {
   var target = null
   var TeamMates=[]
   var start=false
   var MyColour;
   var SoColour;
   var SoItem;
   var myItem;
   var armorIndex = value.createInteger("armorIndex", 1, 0, 3);
 
   this.addValues = function(v) {
      v.add(armorIndex)
   }
   this.getName = function() {
      return "MineplexTeams"
   }  
   this.getDescription = function() {
      return "this Module can "
   }  
   this.getCategory = function() {
      return "Player"
   }
   this.getTag = function() {
     return TeamMates.toString();
   };
   this.onAttack =function(e) {
      target = e.getTargetEntity();
   }
   this.onMotion=function() {
      if(start) {
         chat.print(mc.theWorld.loadedEntityList.length)
         if (mc.thePlayer.ticksExisted >= 1) {
            for (var x=0;x<mc.theWorld.loadedEntityList.length;x=(x+1)|0) {
               var ent = mc.theWorld.loadedEntityList[x];
               if (mc.playerController.getCurrentGameType() == "SURVIVAL" &&  (ent instanceof EntityPlayer && TeamMates.indexOf(ent.getName()) == -1 && mc.thePlayer.getDistanceToEntity(ent) < 15 /* && !AntiBot.isBot(ent) */) && ent != mc.thePlayer && ent != null) {
                  SoItem=ent.inventory.armorInventory[armorIndex.get()]
                  SoColour = (SoItem.getItem().getColor(SoItem));
                  chat.print("So :"+SoColour +"\nMy :"+MyColour)
                  if(MyColour == SoColour) {
                     TeamMates.push(ent.getName())
                     //chat.print("AddedTeam :"+ent.getName())
                  }
               }
               if(x>=mc.theWorld.loadedEntityList.length-1) {
                  chat.print("scanned")
                  start=false
               }
            }
         }
      }
   }
   this.onPacket =function (e) {
      for(var x in TeamMates) {
         if (e.getPacket() instanceof C02PacketUseEntity && (target.getName() == TeamMates[x])) {
            e.cancelEvent();
         }
      }
   }
   this.onWorld = function() {
      //chat.print(mc.playerController.getCurrentGameType())
      if(!start) {
         TeamMates=[];
         chat.print("§5started");
         start=true;
         myItem=mc.thePlayer.inventory.armorInventory[armorIndex.get()]
         if(myItem!=null /* && myItem instanceof ItemArmor */) {
            MyColour = (myItem.getItem().getColor(myItem));
         }
      }
   }
   this.onUpdate = function() {}
   this.onEnable = function() {}
   this.onDisable = function() {}
}
 
 
var MineplexTeams = moduleManager.registerModule(new MineplexTeams);

MineplexTeams;

moduleManager.unregisterModule(MineplexTeams);
