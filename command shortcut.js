var scriptName = "Command Shortcut";
var scriptAuthor = "Senk Ju and tk400";
var scriptVersion = 1.6;

var chatPrefix = "§8[§9§lLiquidBounce§8]";

function log(message, isError) {
    if (isError) {
        chat.print(chatPrefix + " §c" + message);
    } else {
        chat.print(chatPrefix + " §f" + message);
    }
}

function SampleCommand() {

    this.getName = function() {
        return "SampleCommand";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log("tHiS iS lOG (Error)", true);
            return;
        }

        commandManager.executeCommand(".say " + args[1]);
    }
}

function CCommand() {

    this.getName = function() {
        return "c";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log("Syntax: .c <name>", true);
            return;
        }

        commandManager.executeCommand(".config load " + args[1]);
    }
}

function CLCommand() {

    this.getName = function() {
        return "cl";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        commandManager.executeCommand(".config list");
    }
}

function LLSCommand() {

    this.getName = function() {
        return "lls";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log("Syntax: .lls <name>", true);
            return;
        }

        commandManager.executeCommand(".localautosettings load " + args[1]);
    }
}

function LSSCommand() {

    this.getName = function() {
        return "lss";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log("Syntax: .lss <name>", true);
            return;
        }

        commandManager.executeCommand(".localautosettings save " + args[1] + " all");
    }
}

function LSDCommand() {

    this.getName = function() {
        return "lsd";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log("Syntax: .lsd <name>", true);
            return;
        }
        
        commandManager.executeCommand(".localautosettings delete " + args[1]);}
}

function LSLCommand() {

    this.getName = function() {
        return "lsl";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function() {
        commandManager.executeCommand(".localautosettings list");
    }
}

function GMCommand() {

    this.getName = function() {
        return "gm";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log("Syntax: .gm <c, s, sp, a>", true);
            return;
        }
        mc.thePlayer.sendChatMessage("/gamemode " + args[1]);
    }
}

function ForceSetCommand() {

    this.getName = function() {
        return "Forceset";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 3) {
            log("what the hex!?", true);
            return;
        }
        moduleManager.getModule(args[1]).getValue(args[2]).set(args[3]);
    }
}

function JumpCommand() {

    this.getName = function() {
        return "jump";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        mc.thePlayer.jump();
    }
}

function MJumpCommand() {

    this.getName = function() {
        return "MotionJump";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        if (args.length < 2) {
            log(".MotionJump <value>", true);
            return;
        }
        mc.thePlayer.motionY = args[1];
    }
}

var SampleCommand = new SampleCommand();
var SampleCommand;

var CCommand = new CCommand();
var CCommandClient;

var CLCommand = new CLCommand();
var CLCommandClient;

var LSSCommand = new LSSCommand();
var LSSCommandClient;

var LLSCommand = new LLSCommand();
var LLSCommandClient;

var LSDCommand = new LSDCommand();
var LSDCommandClient;

var LSLCommand = new LSLCommand();
var LSLCommandClient;

var GMCommand = new GMCommand();
var GMCommandClient;

var ForceSetCommand = new ForceSetCommand();
var ForceSetCommandClient;

var JumpCommand = new JumpCommand();
var JumpCommandClient;

var MJumpCommand = new MJumpCommand();
var MJumpCommandClient;

function onEnable() {
    SampleCommand = commandManager.registerCommand(SampleCommand);
    CCommandClient = commandManager.registerCommand(CCommand);
    CLCommandClient = commandManager.registerCommand(CLCommand);
    LSSCommandClient = commandManager.registerCommand(LSSCommand);
    LLSCommandClient = commandManager.registerCommand(LLSCommand);
    LSDCommandClient = commandManager.registerCommand(LSDCommand);
    LSLCommandClient = commandManager.registerCommand(LSLCommand);
    GMCommandClient = commandManager.registerCommand(GMCommand);
    ForceSetCommandClient = commandManager.registerCommand(ForceSetCommand);
    JumpCommandClient = commandManager.registerCommand(JumpCommand);
    MJumpCommandClient = commandManager.registerCommand(MJumpCommand);
}

function onDisable() {
    commandManager.unregisterCommand(SampleCommand);
    commandManager.unregisterCommand(CCommandClient);
    commandManager.unregisterCommand(CLCommandClient);
    commandManager.unregisterCommand(LSSCommandClient);
    commandManager.unregisterCommand(LLSCommandClient);
    commandManager.unregisterCommand(LSDCommandClient);
    commandManager.unregisterCommand(LSLCommandClient);
    commandManager.unregisterCommand(GMCommandClient);
    commandManager.unregisterCommand(JumpCommandClient);
    commandManager.unregisterCommand(MJumpCommandClient);
}
