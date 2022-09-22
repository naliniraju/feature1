public class SampleApexController {
    @AuraEnabled
    public static string echoMethod(String tempStr){
        String temp='hello '+ tempStr +' ,this is from Apex.';
        return temp;
        
    }

}