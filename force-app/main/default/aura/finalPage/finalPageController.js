({
	doInit : function(component, event) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)); //You get the whole decoded URL of the page.
        var sURLVariables = sPageURL.split('&'); //Split by & so that you get the key value pairs separately in a list
        var sParameterName;
        var i;

        console.log('Page Url'+sPageURL);
        var newRecord = component.get("v.myTrial");
        
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('='); //to split the key from the value.
			console.log('parameter name is ' + sParameterName[0]);
            console.log('parameter value is ' + sParameterName[1]);
            if (sParameterName[0] === 'firstName') { //lets say you are looking for param name - firstName
                newRecord.FirstName = sParameterName[1];
            } else if (sParameterName[0] === 'lastName') { //lets say you are looking for param name - lastName
                newRecord.LastName = sParameterName[1];
            } else if (sParameterName[0] === 'email') { //lets say you are looking for param name - email
                newRecord.SignupEmail = sParameterName[1]; 
            } else if (sParameterName[0] === 'Id') { //lets say you are looking for param name - Id
                newRecord.Id = sParameterName[1];
            } else if (sParameterName[0] === 'orgId') { //lets say you are looking for param name - Campaign
                newRecord.CreatedOrgId = sParameterName[1];
            }
        }
        component.set("v.myTrial", newRecord);
    }
})