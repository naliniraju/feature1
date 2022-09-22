({
	helperAddition : function(component,event,helper) {
		var num1=component.get("v.variable1");
        var num2=component.get("v.variable2");
        
        var res=num1+num2;
        component.set("v.result",res);
	}
})