({
	callApex : function(component, event, helper) {
		var inpStr=component.get("v.tempStr");
        var action=component.get("c.echoMethod");
        var str='Sample';
        
        action.setParams({tempStr:inpStr});
        action.setCallback(this,function(response){
             str=response.getReturnValue();
        console.log('###str value after capturing response is: ' + str);
        component.set("v.returnStr", str)
                           });
        console.log('###str value is ' + str);
        $A.enqueueAction(action);
	}
})