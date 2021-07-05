var scriptName = "RetroModules";
var scriptVersion = 1.0;
var scriptAuthor = "tk400. but Ideas are Czecheks";

var FlyModule = moduleManager.getModule("Fly");

function CubeFloat() {
   var i =0;
   var Clicked = false;

   var Mode = value.createList("Mode", ["OldCube","Clip",""],"Clip");
   var VClip = value.createBoolean("StartVClip", false);
   var VClipV = value.createFloat("VClip", 2.5, 0, 5);
   var HClip = value.createFloat("HClip", 2.5, 0, 5);
   var Delay = value.createInteger("DelayTicks", 5, 0, 15);
   var Timer = value.createFloat("Timer", 0.4, 0, 1);
   var NotFalling = value.createBoolean("NotFalling", false);

   this.addValues = function(v) {
      v.add(Mode);
      v.add(VClip);
      v.add(VClipV);
      v.add(HClip);
      v.add(Delay);
      v.add(Timer);
      v.add(NotFalling);
   }

	this.getName = function () {
		return "CubeFloat";
	}
	this.getDescription = function () {
		return "It was Allowed you to Flying on Fucking Cubecraft"; //maybe
	}
	this.getCategory = function () {
		return "Movement";
	}

   this.onEnable = function() {
      NFPosY = mc.thePlayer.posY;
      mc.timer.timerSpeed = Timer.get();
      //Vclip
      if(VClip.get()) {vclip(VClip.get())}
   }
   this.onclickBlock = function () {
      if(Mode.get() == "OldCube") {Clicked = true}
   }

   this.onUpdate = function () {
      if(NotFalling.get()) {mc.thePlayer.motionY = 0}
      switch (Mode.get()) {
         case "OldCube": //!?
            if(Clicked) {
               FlyModule.setState(true);
               Clicked = false;
            }
            break;
         case "Clip":
         i+=1;
         if(i==Delay.get()) {
            i=0;
            hclip(HClip.get());
         }
         break;
      }
   }

   this.onDisable = function() {
      mc.timer.timerSpeed = 1;
      i=0;
      Clicked = false;
      FlyModule.getState() && FlyModule.setState(false);
   }
}


var CubeFloat = moduleManager.registerModule(new CubeFloat)
function onEnable() {
    CubeFloat;
};

function onDisable() {
    moduleManager.unregisterModule(CubeFloat);
};

function vclip(offset) {
   mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += offset, mc.thePlayer.posZ);
}
function hclip(offset) {
   var sin = Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   var cos = Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   mc.thePlayer.setPosition(mc.thePlayer.posX -=sin, mc.thePlayer.posY, mc.thePlayer.posZ+=cos);
}
 function HMotion(offset) {
   var sin = Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   var cos = Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   mc.thePlayer.motionX -= sin; mc.thePlayer.motionZ += cos;
}