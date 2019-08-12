import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class notificationComponent implements OnInit {


  university =
	[
    { id:1,
      "From":"University",
      "Date":"20 October, 2018",
      "Message": "All faculty members are requested to submit there classes's attendance reports by the end of this week in the format specified by the HOD."
		},
    { id:2,
      "From":"University",
      "Date":"20 October, 2018",
      "Message": "All faculty members are requested to submit there classes's attendance reports by the end of this week in the format specified by the HOD."
		},
    { id:3,
      "From":"University",
      "Date":"20 October, 2018",
      "Message": "All faculty members are requested to submit there classes's attendance reports by the end of this week in the format specified by the HOD."
		},
    { id:4,
      "From":"University",
      "Date":"20 October, 2018",
      "Message": "All faculty members are requested to submit there classes's attendance reports by the end of this week in the format specified by the HOD."
		},
    { id:5,
      "From":"University",
      "Date":"20 October, 2018",
      "Message": "All faculty members are requested to submit there classes's attendance reports by the end of this week in the format specified by the HOD."
		},
  ]
  
  students =
	[
    { id:1,
      "From":"	Sarthak Grover",
      "Date":"20 October, 2018",
      "Course":"B.Tech",
      "Message": "Please provide Unit 1 Sample Papers."
		},
    { id:2,
      "From":"	Sarthak Grover",
      "Date":"20 October, 2018",
      "Message": "Please provide Unit 1 Sample Papers."
		},
    { id:3,
      "From":"	Sarthak Grover",
      "Date":"20 October, 2018",
      "Message": "Please provide Unit 1 Sample Papers."
		},
    { id:4,
      "From":"	Sarthak Grover",
      "Date":"20 October, 2018",
      "Message": "Please provide Unit 1 Sample Papers."
		},
    { id:5,
      "From":"	Sarthak Grover",
      "Date":"20 October, 2018",
      "Message": "Please provide Unit 1 Sample Papers."
		},
	]


  constructor() {

   }

 async ngOnInit() {
  


    try {
       

    } catch (error) {
 
    }

  
    
    
  }

  // removeModel(){
  //   $('body').removeClass('.modal-open');

  // }


}
