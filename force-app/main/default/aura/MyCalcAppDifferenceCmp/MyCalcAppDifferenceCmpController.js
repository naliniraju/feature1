({
	calculateDiff : function(component, event, helper) {
		var a= event.getParam("eventVar1");
        var b= event.getParam("eventVar2");
        var c=a-b;
        component.set("v.resultDiff",c);
	}
})