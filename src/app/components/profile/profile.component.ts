import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { pipe } from '../../pipes/filter.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	public nameSearch: pipe;
  profile =
	{
    student_detail:{
      "student_name":"Palash Singh Kachhawa",
      "mobile":"8085188788",
      "mail":"pkachawa@gmail.com",
      "samaster":"4",
    },
    personal:{
      "student_name":"palash",
      "mobile":"8085188788",
      "mail":"pkachawa@gmail.com",
      "address":"78,gopur square, indore (M.P.)",
    },

    admission_detail:{
      "enrollment_number":"0817CS101075",
      "date_of_admission":"14,August2010",
      "stream":"Computer Science Engineering",
      "course":"B.Tech",
      "shift":"	Morning (8:00 am - 2:00 pm)",
      "current_section": "t-f",
      "current_semester":"4"
    },
    academic:	[
		
      {    id:1,
        "user":"1",
        "subject":"subject 1",
        "mid_semester_1":"100%",
        "mid_semester_2":"98%",
        "eligible":"yes",
        "end_semester":"94"
      },
      {   id:2,
        "user":"2",
        "subject":"subject 2",
        "mid_semester_1":"45%",
        "mid_semester_2":"55%",
        "eligible":"yes",
        "end_semester":"85"
      },
      {   id:3,
        "user":"3",
        "subject":"subject 3",
        "mid_semester_1":"25%",
        "mid_semester_2":"48%",
        "eligible":"no",
        "end_semester":"40"
      },
      {    id:4,
        "user":"4",
        "subject":"subject 4",
        "mid_semester_1":"45%",
        "mid_semester_2":"25%",
        "eligible":"yes",
        "end_semester":"95"
      }
    ]
   
  }
  p: number = 1;
  collection: any[] = this.profile.academic;  
  constructor() {

   }

 async ngOnInit() {
  this.nameSearch = new pipe();
  }

}
  

 


