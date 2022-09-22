/*({
	calcFun : function(component, event, helper) {
        helper.helperCalc(component, event, helper);
	}
})*/

({
  Add: function(component, event, helper) {
    component.set("v.variable3", "+");
    var s1 = component.get("v.variable1");
    var s2 = component.get("v.variable2");
    //helper.callMe(component);
    var res = parseInt(s1) + parseInt(s2);
    component.set("v.result", res);
    console.log("Add: " + res);
  },
  Diff: function(component, event, helper) {
    component.set("v.variable3", "-");
    var s1 = component.get("v.variable1");
    var s2 = component.get("v.variable2");
    // helper.callMe(component);
    var res = parseInt(s1) - parseInt(s2);
    component.set("v.result", res);
    console.log("Diff : " + res);
    console.log("Diff - S1 : " + s1);
    console.log("Diff: - S2 " + s2);
  },
  Multiply: function(component, event, helper) {
    component.set("v.variable3", "*");
    var s1 = component.get("v.variable1");
    var s2 = component.get("v.variable2");
    var res = parseInt(s1) * parseInt(s2);
    component.set("v.result", res);
    console.log("Mul: " + res);
  },
  Divide: function(component, event, helper) {
    component.set("v.variable3", "/");
    var s1 = component.get("v.variable1");
    var s2 = component.get("v.variable2");
    var res = parseInt(s1) / parseInt(s2);
    component.set("v.result", res);
    console.log("Div: " + res);
  },
  calcFun: function(component, event, helper) {
    var s1 = component.get("v.variable1");
    var s2 = component.get("v.variable2");
    //console.log("###num1 is: " + s1 + "###num2 is :" + s2);
    var s3 = component.get("v.variable3");
    var res;

    switch (s3) {
      case "+":
        res = s1 + s2;
        component.set("v.result", res);
        break;
      case "-":
        res = s1 - s2;
        component.set("v.result", res);
        break;
      case "*":
        res = s1 * s2;
        component.set("v.result", res);
        break;
      case "/":
        res = s1 / s2;
        component.set("v.result", res);
        break;
      default:
        alert("Please enter Any Operator");
    }

    //fire event with  values

    //var event = $A.get("e.c:mathEvent"); //this is for application event
    var event = component.getEvent("mathCmpEvent");
    event.setParams({
      eventVar1: s1,
      eventVar2: s2
    });
    event.fire();
  }
});