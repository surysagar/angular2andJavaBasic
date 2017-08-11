
How to watch for form changes in Angular 2?
//form changes if any perticular filed change use valueChanges::

https://stackoverflow.com/questions/34615425/how-to-watch-for-form-changes-in-angular-2


//setValue apply dynamocally 

this.walletForm.controls['attributes'].controls['userType'].setValue('Admin')

//valueChnages

this.walletForm.controls['attributes'].controls['isValid'].valueChanges.subscribe(value => {
  	this.doAction();
});