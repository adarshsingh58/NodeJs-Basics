var Constants=require("./Constants");
var Events = require("events");
var event=new Events();

event.on(Constants.events.GREET,function() {console.log("Hi Buddy")});
event.on(Constants.events.GREET,function() {console.log("Hey Dude")});

event.emit(Constants.events.GREET);