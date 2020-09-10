function onLoad() {
	
	//Check if the form is for a new record.  If it is a new record, 
	//set the Requester value to the currently logged in user.
	
	if(g_form.isNewRecord()){
		g_form.setValue('requester',g_user.userID);
	}
}