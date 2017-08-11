


//on main page

this.router.navigate(['/descriptionPage', list.id])


// on description page
// 
import {ActivatedRoute, Route, Params} from '@angular/router';
 constructor(private route: ActivatedRoute, private router: Router){}
 ngOninit(){

 	this.route.params.subscribe((params: Params)=>{
 		let id = parseInt(params['id']);
 		
 	})


}