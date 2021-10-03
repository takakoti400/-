//source = https://forums.ccbluex.net/topic/464/mineplex-bot-remover recoded by tk400
//i think Supported NoGround Hackers. (i was thinking LB's Module can't Detect NoGround hacker. ...?)

function AntiBot() {
  var b = 20;

  var BotsOption = value.createList("BotExcludingOption", ["RemoveEntity", "Void", "AttackEventCancel","Ignore"],"RemoveEntity")
  var Debug = value.createBoolean("Debug", false)
  var a = value.createBoolean("CheckEntitis", false)

  this.addValues = function(v) {
    v.add(BotsOption);
    v.add(Debug);
    v.add(a);
  }
  this.getName = function() {
      return "AntiBots";
  };
  this.getDescription = function() {
      return "aka EntityChecker";
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
          a.set(false);
          chat.print("Falldis  | "+entities+" => "+entities.onGround)
          chat.print("Falldis  | "+entities+" => "+entities.fallDistance)
          chat.print("Health   | "+entities+" => "+entities.getHealth())
          chat.print("EntityID | "+entities+" => "+entities.getEntityId())
          chat.print("EntityID | "+entities+" => "+entities.isInvisible())
          chat.print("Null     | "+entities+" => "+(entities == null))
          chat.print("NameTag  | "+entities+" => "+entities.getCustomNameTag())
          chat.print("AI       | "+entities+" => "+entities.isAIDisabled())
          mc.theWorld.removeEntity(entities);
          //remove when checked.
        }
      } //i found the Bot's HP is NaN.
        if(((entities.getHealth() === Number.NaN) &&(entities != null) && (entities != mc.thePlayer) && entities.getCustomNameTag() == "") && mc.thePlayer.getDistanceToEntity(entities) < 10 && entities.isInvisible() && mc.thePlayer.getDistanceToEntity(entities) < 10 && entities.isInvisible()) {
          switch (BotsOption.get()) {
            case "RemoveEntity":
              mc.theWorld.removeEntity(entities);break;
            case "Void":
              entities.posY = 0;break;
            case "Ignore":
          }
          if(Debug.get()) {
            chat.print("Bot has Removed => " + entities +
            "\n       >=RemovedBotEntity'sInfo=<\n"+
            "Health   | "+entities+" => "+entities.getHealth()+"\n"+
            "EntityID | "+entities+" => "+entities.getEntityId()+"\n"+
            "EntityID | "+entities+" => "+entities.isInvisible()+"\n"+
            "Null     | "+entities+" => "+(entities == null)+"\n"+
            "NameTag  | "+entities+" => "+entities.getCustomNameTag()+"\n"+
            "AI       | "+entities+" => "+entities.isAIDisabled()+"\n"+
            "Falldis  | "+entities+" => "+entities.fallDistance+"\n"
            )
          }
        }//else{if(BotsOption.get() == "Void") {}}
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