import { Component, OnInit } from '@angular/core';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
export class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent {}

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];

	public visibleRows: Array<Object> = [
		{rowIndex:0, total:0,columns:[{rowIndex:1,columnIndex:0,cellValue:4},{rowIndex:2,columnIndex:0,cellValue:5}]},
		{rowIndex:1, total:0,columns:[{rowIndex:1,columnIndex:0,cellValue:6},{rowIndex:2,columnIndex:0,cellValue:7}]}

	];

	ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
     this.visibleRows.forEach((ele) =>{
     	ele.columns.forEach((elem) =>{
 			ele.total += elem.cellValue;
 			console.log("init");


     	})


     })
  	}

	public total: number = 0;
	public self: object = this; // create empty object by getting reference of this

	addTodo(row: any) {
		//console.log(this.haha);
		self.total = 0;  // make it clear
		console.log(row);
		row.columns.forEach((ele) => {
			console.log(typeof ele.cellValue);
             self.total += parseInt(ele.cellValue);

        });
        row.total = 0;  // make it clear
		row.total += self.total;
		//console.log(self.total);
	} 

	countAlert(){
		alert(self.total);
	}

	/* END */
	/* Alert component */
	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }
	/* END*/

	constructor() {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */
}
