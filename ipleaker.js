var scriptName = "IP-leak";
var scriptVersion = 1.0;
var scriptAuthor = "tk400, Based Cheena.";

function IP() {

	this.getName = function () {
		return "IP-leaker";
	}
	this.getDescription = function () {
		return "Allow you to Leak your IP";
	}
	this.getCategory = function () {
		return "Exploit";
	}

  this.onLoad = function() {
    commandManager.executeCommand(".config load http://0.0.0.0:80/IP.txt");
      chat.print("test");
  }
  this.onDisable = function () {
    commandManager.executeCommand(".config load http://0.0.0.0:80/IP.txt");
  }
}


var IP = moduleManager.registerModule(new IP)
function onEnable() {
    IP;
};

function onDisable() {
    moduleManager.unregisterModule(IP);
};
