({
    doInit : function(component, event) {
        var newRecord = component.get("v.newLead");
        var templateId = component.get("v.templateId"); 
        var username = component.get("v.username");
        var domainAllowed = component.get("v.customDomain");
        var domain = component.get("v.domain");
        var createLead = component.get("v.createLead");
        
        component.set("v.templateId", templateId);
        component.set("v.newLead", newRecord);
        component.set("v.username", username);
        component.set("v.customDomain", domainAllowed);
        component.set("v.domain", domain);
        component.set("v.createLead", createLead);
    },

    submitLead : function(component, event, helper) {
        var newRecord = component.get("v.newLead");
        var templateId = component.get("v.templateId");
        var username = component.get("v.username");
        var createLead = component.get("v.createLead");
        var domainAllowed = component.get("v.customDomain");
        var domain = component.get("v.domain");
       
        if (!domainAllowed) domain = 'NA';
        
        var contactPrefArray = component.get("v.newLead.Contact_Preference__c");
        var contactPreff = contactPrefArray[0];
        if (contactPreff == 'E')
            contactPreff = 'Email';
        else if (contactPreff == 'P')
            contactPreff = 'Phone';
        else if (contactPreff == 'T')
            contactPreff = 'Text Message';
        else contactPreff = 'Email';
        component.set("v.newLead.Contact_Preference__c", contactPreff);        
        
        var phoneTypeArray = component.get("v.newLead.Preferred_Phone__c");
        var phoneTypee = phoneTypeArray[0];
        if (phoneTypee == 'M')
            phoneTypee = 'Mobile';
        else if (phoneTypee == 'H')
            phoneTypee = 'Home';
        else if (phoneTypee == 'W')
            phoneTypee = 'Work';
        else phoneTypee = 'Mobile';        
        component.set("v.newLead.Preferred_Phone__c", phoneTypee);
        
        helper.createLead(component, newRecord, templateId, username, createLead, domain);
    }
});