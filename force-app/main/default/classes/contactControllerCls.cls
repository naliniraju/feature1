public class contactControllerCls {
    @AuraEnabled
    public static List<Contact> getContacts(String recId) {
        List<Contact> contacts =
            [SELECT Id, Name, Phone, Email,CustomField1__c
             FROM Contact
             WHERE AccountId=:recId];
        return contacts;
    }
    public static String SayHiByNalin(){
        return 'Hi Nalin';
    }
    public static String SayHiByRaja1(){
        return 'Hi Raja1';
    }
    public static String SayHiByAmar(){
        return 'Hi Amar';
    }
}
