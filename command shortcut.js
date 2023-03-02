var scriptName = "Command Shortcut";
var scriptAuthor = "Senk Ju and tk400";
var scriptVersion = 1.6;

var chatPrefix = "§8[§9§lLiquidBounce§8]";

var GameMode = Java.type('net.minecraft.world.WorldSettings.GameType')

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

function HClipcommand() {
    var sin = 0;
    var cos = 0;
    var sinr = 0;
    var cosr = 0;
    var X = 0;
    var Z = 0;

    this.getName = function() {
        return "hclipScript";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(offset) {
        if (offset.length < 2) {
            log("tHiS iS lOG (Error)", true);
            return;
        }

        var sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI)
        var cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI)
        var sinr = Math.round(sin*1000) / 1000
        var cosr = Math.round(cos*1000) / 1000
        var X = sinr * offset
        var Z = cosr * offset
        chat.print("sin "+sin+" /cos "+cos+" /sinr "+sinr+" /cosr "+cosr+" /X "+X+" /Z "+Z)
        mc.thePlayer.setPosition(mc.thePlayer.posX -=X, mc.thePlayer.posY, mc.thePlayer.posZ+=Z);
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

    this.execute = function() {
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
function KillMeLiquid() {

    this.getName = function() {
        return "kill";
    }

    this.getAliases = function() {
        return [];
    }

    this.execute = function(args) {
        var PlayerHealth = mc.thePlayer.getHealth();
        if(args[1] == "AAC") {
            commandManager.executeCommand(".hurt aac")
        }else if (args[1] == null) {
            commandManager.executeCommand(".damage "+ PlayerHealth)
        }else{
            switch (GameMode.GameType) {
                case "CREATIVE":
                    mc.thePlayer.sendChatMessage("/Kill");break;
                case "SURVIVAL" || "ADVENTURE":
                    commandManager.executeCommand(".hurt " + PlayerHealth);break;
            }
        }
    }
}
function evaler() {
    this.getName = function() {
        return "eval";
    }
    this.getAliases = function() {
        return [];
    }
    this.execute = function(args) {
        args=args.replace(".eval ","")
        eval(args)
    }
}

var SampleCommand = new SampleCommand();var SampleCommandClient;
var HClipcommand = new HClipcommand();var HClipcommandClient;
var CCommand = new CCommand();var CCommandClient;
var CLCommand = new CLCommand();var CLCommandClient;
var LSSCommand = new LSSCommand();var LSSCommandClient;
var LLSCommand = new LLSCommand();var LLSCommandClient;
var LSDCommand = new LSDCommand();var LSDCommandClient;
var LSLCommand = new LSLCommand();var LSLCommandClient;
var GMCommand = new GMCommand();var GMCommandClient;
var ForceSetCommand = new ForceSetCommand();var ForceSetCommandClient;
var JumpCommand = new JumpCommand();var JumpCommandClient;
var MJumpCommand = new MJumpCommand();var MJumpCommandClient;
var KillMeLiquid = new KillMeLiquid();var KillMeLiquid;
var evaler = new evaler();var evaler;

function onEnable() {
    SampleCommandClient = commandManager.registerCommand(SampleCommand);
    HClipcommandClient = commandManager.registerCommand(HClipcommand);
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
    KillMeLiquidClient = commandManager.registerCommand(KillMeLiquid);
    evalerClient = commandManager.registerCommand(evaler);
}

function onDisable() {
    commandManager.unregisterCommand(SampleCommandClient);
    commandManager.unregisterCommand(CCommandClient);
    commandManager.unregisterCommand(CLCommandClient);
    commandManager.unregisterCommand(LSSCommandClient);
    commandManager.unregisterCommand(LLSCommandClient);
    commandManager.unregisterCommand(LSDCommandClient);
    commandManager.unregisterCommand(LSLCommandClient);
    commandManager.unregisterCommand(GMCommandClient);
    commandManager.unregisterCommand(JumpCommandClient);
    commandManager.unregisterCommand(MJumpCommandClient);
    commandManager.unregisterCommand(KillMeLiquidClient);
    commandManager.unregisterCommand(evalerClient);
}
