import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from '../../pipes/filter.model'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class studentlistComponent implements OnInit {
	public nameSearch: pipe;

  studentAttandence =
	[
    {    id:1,
      "user":"1",
      "student_name":"palash",
			"subjectone":"100%",
			"subjecttwo":"98%",
			"subjectthree":"92",
			"subjectfour":"94"
		},
    {   id:2,
      "user":"2",
			"student_name":"aman",
			"subjectone":"45%",
			"subjecttwo":"55%",
			"subjectthree":"75",
			"subjectfour":"85"
		},
    {   id:3,
      "user":"3",
      "student_name":"racheal",
			"subjectone":"25%",
			"subjecttwo":"48%",
			"subjectthree":"55",
			"subjectfour":"40"
		},
    {    id:4,
      "user":"4",
			"student_name":"andy",
			"subjectone":"45%",
			"subjecttwo":"25%",
			"subjectthree":"65",
			"subjectfour":"95"
		}
	]
	p: number = 1;
    collection: any[] = this.studentAttandence;  
	class_id;	
  constructor(private route: ActivatedRoute) {
	this.class_id = this.route.snapshot.params['class_id'];
   }

  ngOnInit() {

    this.nameSearch = new pipe();

 
   
   
        
 
  
    }
  }
