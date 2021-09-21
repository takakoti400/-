//source = https://forums.ccbluex.net/topic/464/mineplex-bot-remover recoded by tk400
//i think Supported NoGround Hackers. (i was thinking LB's Module can't Detect NoGround hacker. ...?)

function AntiBot() {
  var b = 20;

  var a = value.createBoolean("CheckEntitis", false)

  this.addValues = function(v) {
    v.add(a);
  }
  this.getName = function() {
      return "PlexAntiBot";
  };
  this.getDescription = function() {
      return "Kill Mineplex Bots and Squids.(!?)";
  };
  this.getCategory = function() {
      return "Misc";
  };
  this.onMotion = function() {
    if (mc.thePlayer.ticksExisted > 40) {
      for (var x in mc.theWorld.loadedEntityList) {
        //b = entities.getHealth()
        var entities = mc.theWorld.loadedEntityList[x];
        if(entities != mc.thePlayer) {
        if(a.get()) {
          a.set(false); // Debuger of AntiBot you can check Entities Info.
          chat.print("Health   | "+entities+" => "+entities.getHealth())
          chat.print("EntityID | "+entities+" => "+entities.getEntityId())
          chat.print("EntityID | "+entities+" => "+entities.isInvisible())
          chat.print("Null     | "+entities+" => "+(entities == null))
          chat.print("NameTag  | "+entities+" => "+entities.getCustomNameTag())
          mc.theWorld.removeEntity(entities);
          //remove when checked.
        }
      } //i found the Bot's are HP is NaN but it says eNTiTies.gETHeAlTh() iS nOt fUnCtIon hmm. so it Removes Squids too.. haha
        if(((entities != null) && (entities != mc.thePlayer) && entities.getCustomNameTag() == "") && mc.thePlayer.getDistanceToEntity(entities) < 10 && entities.isInvisible()) {
          mc.theWorld.removeEntity(entities);
          chat.print("Bot has Removed => " + entities)
        }
      }
    }
  }
  this.onUpdate = function () {
  }
}


var AntiBot = moduleManager.registerModule(new AntiBot);


function onEnable() {
    AntiBot;
};

function onDisable() {
    moduleManager.unregisterModule(AntiBot);
};