var scriptName = "NoAttackOnEating";
var scriptAuthor = "Various Coder and tk400.";
var scriptVersion = 1.0;

script.import("tKore.js");

function NoAttackOnEating() {
   var ReEnable=false
   this.getName = function() {
      return "NoAttackOnEat"
   }
   this.getDescription = function() {
      return "SimpleCode"
   }
   this.getCategory = function() {
      return "Player"
   }
   this.onMotion = function() {
      if(mc.thePlayer.isEating() && mc.thePlayer.getHeldItem().getItem() instanceof ItemFood) {KAModule.state&& (KAModule.setState(false),ReEnable=true)}else if(ReEnable) {KAModule.setState(true);ReEnable=false}
   }
   this.onEnable = function() {}
   this.onDisable = function() {}
}
var NoAttackOnEating = moduleManager.registerModule(new NoAttackOnEating);
NoAttackOnEating;
moduleManager.unregisterModule(NoAttackOnEating);