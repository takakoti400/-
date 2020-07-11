var scriptName = "Jesus";
var scriptVersion = 1.0;
var scriptAuthor = "Etho Coded By tk400.";

var StrafeModule = moduleManager.getModule("Strafe")

function Jesus() {

    var Mode = value.createList("Mode", ["Basic", "Motion", "Bouncing", "Cubecraft", "Debug"], "Basic");
    var Strafe = value.createBoolean("Strafe", true);
    var AntiFall = value.createBoolean("AntiFall", true);
    var Ticks = value.createInteger("Ticks", 7, 0, 15);
    var VClipT = value.createBoolean("VClip", true);
    var Height = value.createFloat("Height", 2.5, 0, 3);

    BlockPos = Java.type('net.minecraft.util.BlockPos')
    BlockWater = Java.type('net.minecraft.block.BlockLiquid')

	this.getName = function () {
		return "Jesus2";
	}
	this.getDescription = function () {
		return "Jesus Reloaded";
	}
	this.getCategory = function () {
		return "Movement";
	}
	this.onEnable = function () {
        if(Strafe.get() == true) {
            StrafeModule.setState(true)
        }


    }

  this.getTag = function() {
      return Mode.get();
  }

	this.onUpdate = function () {
    if(AntiFall.get() == true && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY + 0.9, mc.thePlayer.posZ)).getBlock() instanceof BlockWater) {
          mc.thePlayer.motionY = 0;
    }
        if(Strafe.get() == true) {
            StrafeModule.setState(true)
        }
        if(Strafe.get() == false) {
            StrafeModule.setState(false)
        }


        if(Mode.get() == "Motion") {
	    	if(mc.thePlayer.isInWater()){
                if(mc.gameSettings.keyBindSneak.pressed) {
                    mc.thePlayer.motionY = -0.45
                } else {
                    mc.thePlayer.motionY = 0.35
                }

                if(mc.gameSettings.keyBindJump.pressed) {
                    mc.thePlayer.motionY = 0.25
                }
            }
        }

        if(Mode.get() == "Basic") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.05, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                if(mc.gameSettings.keyBindSneak.pressed) {
                    mc.thePlayer.motionY = -0.45
                } else {
                    mc.thePlayer.motionY = 0.05
                }

                if(mc.gameSettings.keyBindJump.pressed) {
                    mc.thePlayer.motionY = 0.25
                }
            }
        }
    }

    this.onMotion = function () {
        if(Mode.get() == "Motion") {
            if(mc.thePlayer.isInWater()) {
                if(mc.gameSettings.keyBindForward.pressed) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX - Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.4, mc.thePlayer.posY, mc.thePlayer.posZ + Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.4)
                }
            }
        }
        if(Mode.get() == "Basic") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                if(mc.gameSettings.keyBindForward.pressed) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX - Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.05, mc.thePlayer.posY, mc.thePlayer.posZ + Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*0.05)
                }
            }
        }
        if(Mode.get() == "Bouncing") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                if(mc.gameSettings.keyBindForward.pressed) {
                    mc.thePlayer.motionY = 1;
                }
            }
        }
        if(Mode.get() == "Cubecraft") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                if(mc.gameSettings.keyBindForward.pressed) {
                  if(mc.thePlayer.ticksExisted % Ticks.get() == 0) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX - Math.sin(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*1, mc.thePlayer.posY, mc.thePlayer.posZ + Math.cos(mc.thePlayer.rotationYaw / 180.0 * 3.1415927)*1)
                  }
                }
                if(VClipT.get() == true){ if(mc.gameSettings.keyBindJump.pressed) {
                  if(mc.thePlayer.ticksExisted % Ticks.get() == 0) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX,mc.thePlayer.posY + Height.get(), mc.thePlayer.posZ)
                  }
                }
                if(mc.gameSettings.keyBindSneak.pressed) {
                  if(mc.thePlayer.ticksExisted % Ticks.get() == 0) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX,mc.thePlayer.posY - Height.get(), mc.thePlayer.posZ)
                  }
                }
              }
            }
              }
        if(Mode.get() == "Debug") {
            if(mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY + 0.25, mc.thePlayer.posZ)).getBlock() instanceof BlockWater){
                    mc.thePlayer.motionY = 1;
            }
        }
    }

    this.onDisable = function() {
        StrafeModule.setState(false);
        mc.timer.timerSpeed = 1;
    }

    this.addValues = function(values) {
        values.add(Mode);
        values.add(Strafe);
        values.add(Ticks);
        values.add(VClipT);
        values.add(Height);
    }
}


var Jesus = moduleManager.registerModule(new Jesus)
function onEnable() {
    Jesus;
};

function onDisable() {
    moduleManager.unregisterModule(Jesus);
};
