public class apexclass {
    @InvocableMethod
    Public static void updateAccountName(List<ID> ids)
    {
            List<Account> accountTobeupdated =  new List<account>();
            List<Account> accounts =  [Select Name from Account where Id In:ids];
        for (Account account:accounts){
            Account.name = account.name + 'Testing environment';
            accounttobeupdated.add(account);
        }
        update  accountTobeupdated;

    }
    public static String sayHello()
    {
        return "sayHello";
    }
    public static String sayHi()
    {
        return "sayHi";
    }
}