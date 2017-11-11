
How to watch for form changes in Angular 2?
//form changes if any perticular filed change use valueChanges::

https://stackoverflow.com/questions/34615425/how-to-watch-for-form-changes-in-angular-2


//setValue apply dynamocally 

this.walletForm.controls['attributes'].controls['userType'].setValue('Admin')

//valueChnages

this.walletForm.controls['attributes'].controls['isValid'].valueChanges.subscribe(value => {
  	this.doAction();
});



++++++++++++++++++++++

https://stackoverflow.com/questions/39602837/angular-2-formcontrol-setvalue-onlyself-parameter

Trying to understand what the 'onlySelf' parameter does when passing to setValue.

this.form.get('name').setValue('', { onlySelf: true })

If you set the value of a control using the default setting (onlySelf = false), Angular2 will update the control's validity as well as form group's validity. For example, this:

this.passwordControl.setValue('');
will result in

this.passwordControl.valid === false
this.loginForm.valid === false