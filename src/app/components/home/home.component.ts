import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stream =
	[
    { id:1,
      "stream_url":"computersceince",
			"stream_name":"computer sceince"
		},
    { id:2,
      "stream_url":"IT",
			"stream_name":"IT"
		},
    { id:3,
      "stream_url":"mechanicalErr",
			"stream_name":"mechanical Err"
		},
    { id:4,
      "stream_url":"Electronic&communication",
			"stream_name":"Electronic and communication"
		},
    { id:5,
      "stream_url":"civil",
			"stream_name":"civil"
		}
	]
  user_id;	
  constructor(private route: ActivatedRoute) {
    this.user_id = this.route.snapshot.params['user_id'];
   }

  ngOnInit() {

 

 
   
   
        
 
  
    }
  }
