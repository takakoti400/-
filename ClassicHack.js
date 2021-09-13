var scriptName = "Old Cheats";
var scriptVersion = 1.0;
var scriptAuthor = "tk400.";

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
        if(GroundSpoof.get() == true) {mc.thePlayer.onGround = true}
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
      if(mc.thePlayer.capabilities.isFlying) {
            mc.thePlayer.capabilities.isFlying = false}
  }
}


var MoonJump = moduleManager.registerModule(new MoonJump)
function onEnable() {
    MoonJump;
};

function onDisable() {
    moduleManager.unregisterModule(MoonJump);
};
