var scriptName = "RetroModules";
var scriptVersion = 1.0;
var scriptAuthor = "tk400. but Ideas are Czecheks";

var FlyModule = moduleManager.getModule("Fly");

function CubeFloat() {
   var i =0;
   var Clicked = false;
   var SDV = 0;
   var StartPass=false;

   var Mode = value.createList("Mode", ["OldCube","Clip",""],"Clip");
   var vc = value.createBoolean("StartVClip", false);
   var VClipV = value.createFloat("VClip", 2.5, 0, 5);
   var StartDelay = value.createInteger("StartHDelay", 0, 0, 15); //you ecchi!
   var hc = value.createFloat("HClip", 2.5, 0, 5);
   var Delay = value.createInteger("DelayTicks", 5, 0, 15);
   var Timer = value.createFloat("Timer", 0.4, 0, 1);
   var NoFalling = value.createList("NoFalling", ["MotionZero", "MoveEventCanceler", "MotionEventCanceler"],"EventCanceler");

   this.addValues = function(v) {
      v.add(Mode);
      v.add(vc);
      v.add(StartDelay);
      v.add(VClipV);
      v.add(hc);
      v.add(Delay);
      v.add(Timer);
      v.add(NoFalling);
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
      if(vc.get()) {VClip(VClipV.get())}
   }
   this.onclickBlock = function () {
      if(Mode.get() == "OldCube") {Clicked = true}
   }
   this.onMove = function (e) {
      if(NoFalling.get() == "MoveEventCanceler") {e.cancelEvent()}
   }
   this.onMotion = function (e) {
      if(NoFalling.get() =="MotionEventCanceler") {e.cancelEvent()}
   }
   this.onUpdate = function () {
      if(!StartPass) {
         if(!StartDelay.get()==0) {SDV+=1;
            if(StartDelay.get()==SDV) {HClip(hc.get()); StartPass = true}
         }else{StartPass=true}
      }
      if(NoFalling.get()) {mc.thePlayer.motionY = 0}
      switch (Mode.get()) {
         case "OldCube": //!?
            if(Clicked) {
               FlyModule.setState(true);
               Clicked = false;
            }
            break;
         case "Clip":
            if(StartPass) {i+=1;
               if(i==Delay.get()) {
                  i=0;
                  HClip(hc.get());
               }
            }
         break;
      }
   }

   this.onDisable = function() {
      mc.timer.timerSpeed = 1;
      i=0;
      Clicked = false;
      StartPass = false;SDV=0;
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

function VClip(offset) {
   mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += offset, mc.thePlayer.posZ);
}
function HClip(offset) {
   var sin = Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   var cos = Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   mc.thePlayer.setPosition(mc.thePlayer.posX -=sin, mc.thePlayer.posY, mc.thePlayer.posZ+=cos);
}
 function HMotion(offset) {
   var sin = Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   var cos = Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*offset;
   mc.thePlayer.motionX -= sin; mc.thePlayer.motionZ += cos;
}