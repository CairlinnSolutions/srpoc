global class templatePicklist extends VisualEditor.DynamicPickList{
    
    // give the picklist default values
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('None', 'None');
        return defaultValue;
    }

    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DataRow defaultValue = getDefaultValue();
        // get the temaplates from the custom object
        List<TSO_Template__c> templateList = [Select Trialforce_Template_Id__c, Name from TSO_Template__c order by Name];
        VisualEditor.DynamicPickListRows templates = new VisualEditor.DynamicPickListRows();
        templates.addRow(defaultValue);
        
        for (TSO_Template__c template : templateList) {
            VisualEditor.DataRow value = new VisualEditor.DataRow (template.Name, template.Trialforce_Template_Id__c);
            templates.addRow(value);
        }
        return templates;
    }
    
}