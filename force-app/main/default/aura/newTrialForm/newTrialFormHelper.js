({
    createLead: function(component, newLead, templateId, username, createLead, domain) {
        console.log("in createLead");
        var action = component.get("c.getNewLead");
        
        console.log("after component.get, action: " + action);

        action.setParams({
            "newLead": newLead,
            "templateId": templateId,
            "username": username,
            "createLead": createLead,
            "domain": domain
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var url = '/finalpage';
                console.log("url is: " + url);
                var urlEvent = $A.get("e.force:navigateToURL");
                urlEvent.setParams({
                    "url": url,
                    "isredirect" :false
                });
                urlEvent.fire();
            } else {
                let errors = response.getError();
                let message = 'Unknown error'; // Default error message
                // Retrieve the error message sent by the server
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    message = errors[0].message;
                }
                // Display the message
                console.error(message);
            }
        });
        $A.enqueueAction(action);
    }
});