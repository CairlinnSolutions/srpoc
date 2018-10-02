@isTest public class templatePicklist_test {

    @IsTest(SeeAllData=true) 
    public static void testGetValues () {
        templatePicklist TP = new templatePicklist();
        System.assertNotEquals(TP.getValues(),null);
    }
        
}