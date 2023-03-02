var scriptName = "AntiBreakFail";
var scriptAuthor = "tk400.";
var scriptVersion = 1.0;

script.import("tKore.js")

function Tools() {
   var BreakingState=false
   this.getName = function() {
      return "AntiBreakFail"
   }  
   this.getDescription = function() {
      return "incompatible with AbortBreaking and CivBreak(maybe, cz it sends STOP Breaking packet) modules."
   }  
   this.getCategory = function() {
      return "World"
   }

   this.onPacket = function(e) {
     // chat.print("Packet Rec.")
      var packet= e.getPacket()
      if(packet instanceof C07PacketPlayerDigging) {
         chat.print("Start :" +packet.getStatus())
         if(packet.getStatus() == "START_DESTROY_BLOCK") {
            chat.print("§bSTART DESTROY BLOCK")
            moduleManager.getModule("AutoWeaapon").setStaate(false);
            BreakingState=true;
         } else if(packet.getStatus() == "STOP_DESTROY_BLOCK" || packet.getStatus() == "ABORT_DESTROY_BLOCK") {
            moduleManager.getModule("AutoWeaapon").setStaate(true);
            BreakingState=false;
         }
      }else if (packet instanceof C09PacketHeldItemChange && BreakingState) {moduleManager.getModule("AbortBreaking").setStaate(false);moduleManager.getModule("AbortBreaking").setStaate(true)}
   }
   this.onEnable = function() {}
   this.onDisable = function() {}
}
 
 
var Tools = moduleManager.registerModule(new Tools);

Tools;

moduleManager.unregisterModule(Tools);
