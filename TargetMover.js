var AntiBot = Java.type("net.ccbluex.liquidbounce.features.module.modules.misc.AntiBot");
//LiquidBounce's Util
//var hogehoge = Java.type("").class;
var EntityUtils = Java.type("net.ccbluex.liquidbounce.utils.EntityUtils");
var RotationUtils = Java.type("net.ccbluex.liquidbounce.utils.RotationUtils");

function TargetMover() {
  var target=null
  var rotate=0
  var Move = value.createList("MovementMode", ["Teleport","Motion","SetXZ"],"Teleport");
  var Pos = value.createList("Position", ["Behind","TargetPos","RandomPos","RandomRotate","Rotate"],"TargetPos");
  var TargetMode = value.createList("TargetMode", ["Nearest","Attacked","Random"],"Nearest");
  var RotS = value.createFloat("RotateSpeed", 1,0,360);
  var Range = value.createFloat("Range", 3,0,30);
  var MaxR = value.createFloat("MaxTPRange",50,0,100);
  var PredictDeg = value.createFloat("PredictDeg", 45,-180,180);
  var MoveC = value.createBoolean("CancelMove",false);

  this.addValues = function(v) {
    v.add(Move)
    v.add(Pos)
    v.add(TargetMode)
    v.add(RotS)
    v.add(Range)
    v.add(MaxR)
    v.add(PredictDeg)
    v.add(MoveC)
  }
  this.getName = function() {
    return "TargetMover"
  }  
  this.getDescription = function() {
    return "TargetStrafe. Best for Vanilla?"
  }  
  this.getCategory = function() {
    return "Movement"
  }

  this.onMove = function(e) {
    MoveC.get() && (e.cancelEvent())
    //(TargetMode.get() == "SetXZ") && (
    //  e.setX(-Math.sin(rotate / 180 * Math.PI) * Range.get()),
    //  e.setZ( Math.cos(rotate / 180 * Math.PI) * Range.get())
    //)
  }
  this.onAttack = function(e) {
    if(TargetMode.get() == "Attacked") {chat.print("d");target=e.getTargetEntity()}
  }
  this.onUpdate = function() {
    //chat.print(target)
    switch (TargetMode.get()) {
      case "Nearest":
        target = getNearestTarget()
        break;
      //case "Random":
      //  for (var x in mc.theWorld.loadedEntityList) {
      //    //entity = mc.theWorld.loadedEntityList.unshift()
      //    entity = mc.theWorld.loadedEntityList
      //    RandomValue(entity)
      //    (mc.theWorld.loadedEntityList).indexOf()
      //    var entitie = mc.theWorld.loadedEntityList[x];
      //    if(entitie != null && entities != mc.thePlayer) {
      //      target = entities
      //    }
      //  }
      //  break;
    }
    if(target != null && !target.isDead && (target.getHealth() <=0) && !AntiBot.isBot(target) && (target != mc.thePlayer)) {
      //chat.print("a")
      switch(Pos.get()) {
        case "Behind":
          rotate = (target.rotationYaw - 180);break;
        case "TargetPos":
          rotate = 0;break;
        case "RandomPos":
        case "RandomRotate":
          rotate = RandomValue(180,-180);break;
        case "Rotate":
          if(rotate >=180) {rotate+=RotS.get()}
          break;
      }
      switch(Move.get()) {
        case "Teleport":
          //chat.print("b");
          mc.thePlayer.setPosition(target.posX - Math.sin(rotate / 180 * Math.PI) * Range.get(),target.posY, target.posZ + Math.cos(rotate / 180 * Math.PI) * Range.get());break;
        case "Motion":
          mc.thePlayer.motionX += (target.posX - Math.sin(rotate / 180 * Math.PI) * Range.get());
          mc.thePlayer.motionZ += (target.posZ + Math.cos(rotate / 180 * Math.PI) * Range.get());
          break;
      }
    }
  }
  this.onEnable = function() {}
  this.onDisable = function() {}
}

/* Function Utils */
function getNearestTarget(entityType, fromEntity, _entity) {//thank you for Czechek.
  Java.from(mc.theWorld.loadedEntityList).filter(function (e) {e != mc.thePlayer && entityType ? e instanceof entityType : EntityUtils.isSelected(e, true)}).sort(function (a, b) {(_entity = fromEntity || mc.thePlayer).getDistanceToEntity(a) - _entity.getDistanceToEntity(b)})[0]
};

function vClip(offset) {
  mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ);
}
function hclip(offset) {
  sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  mc.thePlayer.setPosition(mc.thePlayer.posX -= sin, mc.thePlayer.posY, mc.thePlayer.posZ += cos);
}
function HMotion(offset) {
  mc.thePlayer.motionX -= Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
  mc.thePlayer.motionZ += Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI) * offset
}
function VMotion(offset) {
  mc.thePlayer.motionY += offset;
}
function RandomDelay(MaxDelay, MinDelay) {
  return Math.floor(Math.random() * ((MaxDelay - MinDelay) + 1) + MinDelay);
}
function RandomValue(Max, Min) {
  return  Math.random() * (Max - Min) + Min;
}

var TargetMover = moduleManager.registerModule(new TargetMover);

TargetMover;

moduleManager.unregisterModule(TargetMover);
