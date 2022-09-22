({
  callMe: function(component) {
    var s1 = component.find("variable1").get("v.value");
    var s2 = component.find("variable2").get("v.value");
     // component.set("v.variable1",s1);
     // component.set("v.variable2",s2);
   
  }
});
/*       var s1=component.get("v.variable1");
        var s2=component.get("v.variable2");
        console.log('###num1 is: '+ s1+'###num2 is :'+s2)
        var s3=component.get("v.variable3");
        var res;
       
        
        switch(s3)
        {
            case"+":
                 res=s1+s2;
                component.set("v.result",res);
                break;
            case"-":
                res=s1-s2;
                component.set("v.result",res);
                break;
             case"*":
                res=s1*s2;
                component.set("v.result",res);
                break;
             case"/":
                res=s1/s2;
                component.set("v.result",res);
                break;
            default:
                alert('Please enter Any Operator');
                
        }
        
       //fire event with  values
        //
        //var event = $A.get("e.c:mathEvent"); //this is for application event
        var event=component.getEvent("mathCmpEvent");
        event.setParams({
            "eventVar1":s1,
            "eventVar2":s2
        });
        event.fire(); */