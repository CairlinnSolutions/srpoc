public with sharing class newTrialSignupController {

    @auraEnabled
    public static void getNewLead(Lead newLead, String templateId, String username, Boolean createLead, String domain) {
        if (createLead){
            try {
                upsert newLead;
            } catch (DmlException e) {
                system.debug(e);
            }
        }
        
        SignupCreation sc = new SignupCreation();
        sc.createNewTrial(newLead, templateId, username, domain);
    }
    
    public without sharing class SignupCreation {
        public void createNewTrial(Lead newLead, String templateId, String username, String domain) {
			SignupRequest sr = new SignupRequest();
            sr.FirstName = newLead.FirstName;
            sr.LastName = newLead.LastName;
            sr.SignupEmail = newLead.Email;
            sr.TemplateId = templateId;
            sr.Country = newLead.Country;
            sr.Company = newLead.Company;
            sr.Username = username;

            if (domain != 'NA'){
               datetime myDateTime = datetime.now();
               String domainTime = myDateTime.format('hhmmssSS');
               domain = domain + domainTime;
               sr.Subdomain = domain;
            }
                        
            try {
                upsert sr;
            } catch (Exception e) {
                system.debug(e);
                throw new AuraHandledException('Error with Signup Request: '+ e.getMessage());
            }
        }
    }

}