var scriptName = "NoFOVZoom";
var scriptVersion = 1.0;
var scriptAuthor = "tk400.";

function NoFOVZoom() {
    AfterValue = value.createFloat("AfterValue", 1.25, 0, 10),

    this.addValues = function(values) {
        values.add(AfterValue);
    }

	this.getName = function () {
		return "NoFOVZoom";
	}
	this.getDescription = function () {
		return "This is Beta Please Recode This Script.";
	}
	this.getCategory = function () {
		return "Render";
	}

  this.onEnable = function() {
      Chat.print("This Script is NotGood, Can you Recode this?");
      Chat.print("Please Recode this, I can't code properly.");
    moduleManager.getModule("NoFov").getValue("Fov").set(0);
  }

	this.onUpdate = function () {
  }

  this.onDisable = function() {
    moduleManager.getModule("NoFov").getValue("Fov").set(AfterValue.get());
  }
}


var NoFOVZoom = moduleManager.registerModule(new NoFOVZoom)
function onEnable() {
    NoFOVZoom;
};

function onDisable() {
    moduleManager.unregisterModule(NoFOVZoom);
};
