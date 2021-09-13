//source = https://forums.ccbluex.net/topic/464/mineplex-bot-remover recoded by tk400
//i think Supported NoGround Hackers.

function AntiBot() {
   var a = value.createBoolean("a", false)
   
   this.addValues = function(v) {
     v.add(a);
   }
     this.getName = function() {
         return "PlexAntiBot";
     };
 
     this.getDescription = function() {
         return "MineplexAntiBot. recoded by tk400, i think bypass/remove Mineplex Shit Bots.";
     };
 
     this.getCategory = function() {
         return "Misc";
     };
     this.onMotion = function() {
       if (mc.thePlayer.ticksExisted > 40) {
         for (var x in mc.theWorld.loadedEntityList) {
           var entities = mc.theWorld.loadedEntityList[x];
           if(a.get()) {
             a.set(false);
             chat.print(entities+" is "+entities.onGround)
           }
           if(((entities.getHealth() >= 0) && !(entities == null) && !(entities == mc.thePlayer) &&  (mc.thePlayer.getDistanceToEntity(entities) < 10) && (entities.getCustomNameTag() == "") && !entities.onGround) || entities.isInvisible()) {
             mc.theWorld.removeEntity(entities);
             //chat.print("Bot has removed = "+ entities)
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