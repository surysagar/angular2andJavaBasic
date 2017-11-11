stackoverflow alternative for ng-init


use ng-oninit


or make a directive 

@Directive({
  selector: 'ngInit',
  exportAs: 'ngInit'
}) 

export class NgInit {
  @Input() values: any = {};

  @Input() ngInit;
  ngOnInit() {
    if(this.ngInit) { this.ngInit(); }
  }  
}


<div [ngInit]="doSomething()" >

<div ngInit [values]="{a:'sagar'}" #ngInit="ngInit"// reference line no.16