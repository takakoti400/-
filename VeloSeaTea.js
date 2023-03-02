var scriptName = "VeloSeaTea";
var scriptAuthor = "Various Coder and tk400.";
var scriptVersion = 1.0;

script.import("tKore.js");

function VeloSeaTea() {
   //var test = value.createList("Mode", ['Behind','JumpSpoof','Clip'],'Behind');

   //this.addValues = function(v) {
   //   v.add(test)
   //}
   this.getName = function() {
      return "VeloSeaTea"
   }
   this.getDescription = function() {
      return "NoStrafe Version of StrafeOnVel, and you will knockbacks to behind of Target."
   }
   this.getCategory = function() {
      return "Movement"
   }
   //this.getTag = function() {
   //  return mode.get();
   //}

   this.onPacket=function(e) {
      var packet = e.getPacket()
      if(packet instanceof S12PacketEntityVelocity) {
         if(mc.thePlayer != null && packet.getEntityID() == mc.thePlayer.getEntityId()) {
            if(killAura.target !=null) {
               var xPos = killAura.target.posX + -Math.sin(Math.toRadians(killAura.target.rotationYaw)) * -2
               var zPos = killAura.target.posZ +  Math.cos(Math.toRadians(killAura.target.rotationYaw)) * -2
               var rotYaw = RotationUtils.getRotations1(xPos, killAura.target.posY, zPos)[0]
               var speed=MovementUtils.getSpeed(packet.getMotionX(),packet.getMotionZ())
               packet.motionX = -Math.sin(Math.toRadians(rotYaw)) * speed;
               packet.motionZ =  Math.cos(Math.toRadians(rotYaw)) * speed;
               chat.print('packet.motionX :'+packet.motionX+" | packet.motionZ :"+packet.motionZ)
            }/*  else {
               if()
            } */
            if(ScaffoldModule.state || EagleModule.state) {
               if(isTotalyGround(mc.thePlayer)) {
                  packet.motionX = 0
                  packet.motionY = packet.getMotionY()
                  packet.motionZ = 0
               }else{
                  e.cancelEvent()
               }
            }
         }
      }
   }
   this.onUpdate = function() {}
   this.onEnable = function() {}
   this.onDisable = function() {}
}
var VeloSeaTea = moduleManager.registerModule(new VeloSeaTea);
VeloSeaTea;
moduleManager.unregisterModule(VeloSeaTea);