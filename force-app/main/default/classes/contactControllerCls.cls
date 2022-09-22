public class contactControllerCls {
    @AuraEnabled
    public static List<Contact> getContacts(String recId) {
        List<Contact> contacts =
            [SELECT Id, Name, Phone, Email,CustomField1__c
             FROM Contact
             WHERE AccountId=:recId];
        return contacts;
    }
}