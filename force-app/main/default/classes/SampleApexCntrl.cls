public class SampleApexCntrl {
    @AuraEnabled
    public static String echoMethod(String tempStr){
        String temp='Hello ' + tempStr + ', this is from APEX.';
        return temp;
    }

}