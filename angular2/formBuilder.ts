formBuilder is a class.
it is used as a declaration : import { FormBuilder } from '@angular/forms';

Creates an AbstractControl from a user-specified configuration.
It is essentially syntactic sugar that shortens the new FormGroup(), new FormControl(), and new FormArray() boilerplate 
that can build up in larger forms.


overview:
class FormBuilder {
  group(controlsConfig: {[key: string]: any}, extra: {[key: string]: any}|null): FormGroup
  control(formState: Object, validator?: ValidatorFn|ValidatorFn[]|null, asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null): FormControl
  array(controlsConfig: any[], validator?: ValidatorFn|null, asyncValidator?: AsyncValidatorFn|null): FormArray
}

we can use it as new FormBuilder({});