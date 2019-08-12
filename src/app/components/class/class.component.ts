import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  class =
	[
		{    id:1,
			"calss_name":"class 1"
		},
		{   id:2,
			"calss_name":"class 2"
		},
		{   id:3,
			"calss_name":"class 3"
		},
		{    id:4,
			"calss_name":"class 4"
		}
	]
	class_id;	
  constructor(private route: ActivatedRoute) {
	this.class_id = this.route.snapshot.params['user_id'];
   }

  ngOnInit() {

 

 
   
   
        
 
  
    }
  }
