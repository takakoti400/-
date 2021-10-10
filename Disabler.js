///api_version=2
/*
    Requires core.lib to use!
*/
(script = registerScript({
   name: "PacketManager", //LiquidBoucne+ including Disabler Module. fixing Module/Values duplication
   authors: ["Rilshrink"],
   version: "1.1" // Actually remembered to change it!
})).import("Core.lib");

var cv = 0;

list = [
   mode = value.createList("Mode", ["MineplexCombat", "Lunar", "OnlyMC", "HazelMC", "NoPayload", "Offset", "C03 Cancel", "C06 Only", "Spectate", "VerusCombat", "VerusOld", "NaNPlace", "CustomPlace", "NaNPos", "CustomPos"], "MineplexCombat"),
   customvalue = value.createList("CustomType", ["null", "NaN", "PositiveInfinite", "NegativeInfinite", "+Infinite","-Infinite", "MAX_VALUE", "MAX_SAFE_INTEGER","MIN_SAFE_INTEGER"], "null"),
]

module = {
   category: "Exploit",
   description: "Anticheat no work",
   values: list,

   onPacket: function(e) {
      switch (mode.get()) {
         case "Lunar":
         case "OnlyMC":
            if(e.getPacket() instanceof C0FPacketConfirmTransaction) {
                Transactions.add(e.getPacket());
                e.cancelEvent();
            }
            if(e.getPacket() instanceof C00PacketKeepAlive) {
                //Temporary until I can figure out how to e.getPacket().key -= 1337;
                KeepAlives.add(e.getPacket());
                e.cancelEvent();
            }
            if(e.getPacket() instanceof C03PacketPlayer) {
                sendPacket(new C0CPacketInput());
            }
            break;
         case "HazelMC":
            if(e.getPacket() instanceof C0FPacketConfirmTransaction) {
                Transactions.add(e.getPacket());
                e.cancelEvent();
            }
            if(e.getPacket() instanceof C00PacketKeepAlive) {
                KeepAlives.add(e.getPacket());
                e.cancelEvent();
            }
            if(e.getPacket() instanceof C03PacketPlayer) {
                sendPacket(new C0CPacketInput());
            }
            break;
         case "NoPayload":
				if(e.getPacket() instanceof C17PacketCustomPayload) {
					e.cancelEvent();
				}
            break;
         case "Offset":
				if(e.getPacket() instanceof C03PacketPlayer) {
					if(mc.thePlayer.ticksExisted < 20 && mc.thePlayer.ticksExisted % 2 == 0) {
						sendPacket(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY - 21, mc.thePlayer.posZ, true));
					}
				} else if(e.getPacket() instanceof S08PacketPlayerPosLook) {
					e.getPacket().y += 0.001;
				}
            break;
         case "C03 Cancel":
				if(e.getPacket() instanceof C03PacketPlayer) {
					if(mc.thePlayer.ticksExisted % 3 != 0) {
						e.cancelEvent();
					}
				}
            break;
         case "C06 Only":
				if(e.getPacket() instanceof C03PacketPlayer) {
					sendPacket(new C06PacketPlayerPosLook(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, mc.thePlayer.rotationYaw, mc.thePlayer.rotationPitch, mc.thePlayer.onGround));
					e.cancelEvent();
				}
            break;
			case "Spectate":
				if(e.getPacket() instanceof C03PacketPlayer) {
					sendPacket(new C18PacketSpectate(UUID.randomUUID()));
				}
				break;
         case "VerusCombat":
            if (e.getPacket() instanceof C0FPacketConfirmTransaction) {
                if(currentTrans++>0) e.cancelEvent();
            } else if(e.getPacket() instanceof C0BPacketEntityAction) {
                e.cancelEvent();
            }
            break;
         case "VerusOld":
            if(e.getPacket() instanceof C0FPacketConfirmTransaction) {
                Transactions.add(e.getPacket());
                e.cancelEvent();
            }
            if(e.getPacket() instanceof C00PacketKeepAlive) {
                sendPacket(new C00PacketKeepAlive(e.getPacket().getKey() - 1));
                e.cancelEvent();
            }
            if(e.getPacket() instanceof C03PacketPlayer) {
                sendPacket(new C0CPacketInput()); // Disables old verus speed checks.
            }
            break;
         case "NaNPlace":
            sendPacket(new C08PacketPlayerBlockPlacement(new BlockPos(Double.NaN, Double.NaN, Double.NaN), 1, null, 0, 0, 0));
            break;
         case "CustomPlace":
            sendPacket(new C08PacketPlayerBlockPlacement(new BlockPos(cv,cv,cv), 1, null, 0, 0, 0));break;
         case "NaNPos":
            var packet = e.getPacket();
            if (packet instanceof C03PacketPlayer) {
               packet.x = packet.x = packet.x = Double.NaN;
            }
            break;
         case "CustomYPos":
            var packet = e.getPacket();
            if (packet instanceof C03PacketPlayer) {
               packet.y= cv;
            }break;
         case "CustomPos":
            var packet = e.getPacket();
            if (packet instanceof C03PacketPlayer) {
               packet.x = packet.y = packet.z = cv;
            }break;
      }
   },
   onWorld: function(ev) {
      reset();
   },
   onUpdate: function() {
      switch (customvalue.get()) {// ... this can not make disable anticheats, it can make crashes...huh
         case "null":
            cv = null;break;
         case "NaN":
            cv = Number.NaN;break;
         case "PositiveInfinite":
            cv = 1/0;break;
         case "NegativeInfinite":
            cv = (-0/0);break;
         case "+Infinite":
            cv = Number.POSITIVE_INFINITY;break;
         case "-Infinite":
            cv = Number.NEGATIVE_INFINITY;break;
         case "MAX_VALUE":
            cv = Number.MAX_VALUE;break;
         case "MAX_SAFE_INTEGER":
            cv = Number.MAX_SAFE_INTEGER;break;
         case "MIN_SAFE_INTEGER":
            cv = Number.MIN_SAFE_INTEGER;break;
      }
      DisablerModule.tag = mode.get();
      switch (mode.get()) {
         case "MineplexCombat":
            sendPacket(new C00PacketKeepAlive());
            sendPacket(new C0CPacketInput());
            break;
         case "OnlyMC":
         case "Lunar":
            if(mc.thePlayer.ticksExisted % 20 == 0 && Transactions.size() > currentTrans) {
                sendPacket(Transactions.get[currentTrans++]);
            }
            if(mc.thePlayer.ticksExisted % 20 == 0) {
                for(var i = 0; i < KeepAlives.size(); i++) {
                    var packet = KeepAlives.get(i);
                    if(packet != null) {
                        sendPacket(packet);
                    }
                }
                KeepAlives.clear();
            }
            if(mc.thePlayer.ticksExisted % 5 == 0) {
                sendPacket(new C06PacketPlayerPosLook(mc.thePlayer.posX, mc.thePlayer.posY + 21, mc.thePlayer.posZ, mc.thePlayer.rotationYaw, mc.thePlayer.rotationPitch, true));
            }
            if(mc.thePlayer.ticksExisted % 30 == 0) {
                reset();
            }
            break;
         case "HazelMC":
            sendPacket(new C00PacketKeepAlive(0));
            if(Transactions.size() > currentTrans) {
                sendPacket(Transactions.get[currentTrans++]);
            }
            if(mc.thePlayer.ticksExisted % 100 == 0) {
                for(var i = 0; i < KeepAlives.size(); i++) {
                    var packet = KeepAlives.get(i);
                    if(packet != null) {
                        sendPacket(packet);
                    }
                }
                KeepAlives.clear();
            }
            break;
         case "VerusOld":
            if (mc.thePlayer.ticksExisted % 120 == 0 && Transactions.size() > currentTrans) {
               sendPacket(Transactions.get[currentTrans++]);
            }
            if (mc.thePlayer.ticksExisted % 25 == 0) { // This is used to disable old verus flight checks
               sendPacket(new C06PacketPlayerPosLook(mc.thePlayer.posX, mc.thePlayer.posY - 11, mc.thePlayer.posZ, mc.thePlayer.rotationYaw, mc.thePlayer.rotationPitch, true));
            }
            if (mc.thePlayer.ticksExisted % 300 == 0) {
               reset();
            }
            break;
      }
   },
   onEnable: function() {

   },
   onDisable: function() {
      reset();
   }
};

var KeepAlives = new(Java.type("java.util.ArrayList"))();
var Transactions = new(Java.type("java.util.ArrayList"))();
var currentTrans = 0;
var reset = function() {
   currentTrans = 0;
   KeepAlives.clear();
   Transactions.clear();
}