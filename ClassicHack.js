var scriptName = "Old Cheats";
var scriptVersion = 1.0;
var scriptAuthor = "tk400.";

var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');

function MoonJump() {

    var Mode = value.createList("Mode", ["MoonJump", "Creative"], "MoonJump");
    var GroundSpoof = value.createBoolean("GroundSpoof", false);
	

    this.addValues = function(values) {
        values.add(Mode);
        values.add(GroundSpoof);
    }

	this.getName = function () {
		return "MoonJump";
	}
	this.getDescription = function () {
		return "Allow you to Jump Always. And Creative Fly";
	}
	this.getCategory = function () {
		return "Movement";
	}

	this.onUpdate = function () {
        switch (Mode.get()) {
            case "MoonJump":
                if(mc.gameSettings.keyBindJump.pressed) {mc.thePlayer.jump()}
                break;
            case "Creative":
                mc.thePlayer.capabilities.isFlying = true;
                break;
        }
  }

  this.onDisable = function() {
    mc.thePlayer.capabilities.isFlying && (mc.thePlayer.capabilities.isFlying = false)
  }
  this.onPacket = function (e) {
    var packet = e.getPacket();
    if (GroundSpoof.get() && packet instanceof C03PacketPlayer) {
      packet.onGround = true;
   }
  }
}


var MoonJump = moduleManager.registerModule(new MoonJump)
function onEnable() {
    MoonJump;
};

function onDisable() {
    moduleManager.unregisterModule(MoonJump);
};
