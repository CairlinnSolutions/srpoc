@isTest public with sharing class newTrialSignupController_test {

    @IsTest(SeeAllData=true) 
    public static void testGetNewLead () {
        Lead testLead = new Lead();
        testLead.FirstName = 'fname';
        testLead.LastName = 'lname';
        testLead.Company = 'testCompany';
        testLead.Country = 'US';
        testLead.Email = 'lname@testCompany.com';
        String templateId = '0TTf40000061IOE';		// update the template id to reflect your own
        String username = generateRandomString(10) + '@company.com';
        String domain = 'testdomain'; 				// domain already appended with random timestamp
        Boolean createLead = True;
        
        newTrialSignupController.getNewLead(testLead, templateId, username, createLead, domain);
        
		Lead ld = [Select id from Lead where FirstName = 'fname' and LastName = 'lname' Limit 1];
        System.assertNotEquals(ld.id, null);    
        
    }    

    public static String generateRandomString(Integer len) {
        final String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        String randStr = '';
        while (randStr.length() < len) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            randStr += chars.substring(idx, idx+1);
        }
        return randStr; 
    }

    
}