stackoverflow alternative for ng-init


use ng-oninit


or make a directive 

@Directive({
	selector: 'myngInit',
	exportAs: 'myngInit'

})

export class NgInit {
	@input() values: any = {};

	@input() ngInit;
	ngOnInit() {
		if(this.ngInit){this.ngInit()}
	}
}


<div [ngInit]="doSomething()" >

<div ngInit [values]="{a:'sagar'}" #ngInit="ngInit"// reference line no.16