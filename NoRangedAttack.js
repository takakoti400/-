var scriptName = "NoRangedAttack";
var scriptAuthor = "tk400.";
var scriptVersion = 1.9;

script.import("tKore.js");
Float = Java.type("java.lang.Float");

function NoRangedAttack() {
   var Reach = value.createFloat("Reach", 3.5,0,5);
 
   this.addValues = function(v) {
      v.add(Reach)
   }
   this.getName = function() {
      return "NoRangedAttack"
   }
   this.getDescription = function() {
      return "Cancels Packet of Attack as Target is in far. tested in Hypixel,NCP"
   }
   this.getCategory = function() {
      return "Combat"
   }
   /* this.onAttack = function(e) {
      var t = e.getTargetEntity()
      if(Teams.isInYourTeam(t)) {}
   } */

   this.onPacket = function(e) {
      if(e.getPacket() instanceof C02PacketUseEntity) {
         if (KAModule.state && killAura.target!=null ? (mc.thePlayer.getDistanceToEntity(killAura.target) > Reach.get()):false) {
            e.cancelEvent()
         }
      }
   }
}

var NoRangedAttack = moduleManager.registerModule(new NoRangedAttack);

NoRangedAttack;

moduleManager.unregisterModule(NoRangedAttack);
