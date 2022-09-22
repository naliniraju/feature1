({
	myAction : function(component, event, helper) {
		var chCmp=component.find("childComp");
        var retMess=chCmp.exposeMethod('hi','universe');
        alert('### retMessage is:'+' ' + retMess);
	}
})