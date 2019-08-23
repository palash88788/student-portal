import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class tableComponent implements OnInit {
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
		},
		{    id:5,
			"user":"5",
			"student_name":"palash",
				  "subjectone":"100%",
				  "subjecttwo":"98%",
				  "subjectthree":"92",
				  "subjectfour":"94"
			  },
		  {   id:6,
			"user":"6",
				  "student_name":"aman",
				  "subjectone":"45%",
				  "subjecttwo":"55%",
				  "subjectthree":"75",
				  "subjectfour":"85"
			  },
		  {   id:7,
			"user":"7",
			"student_name":"racheal",
				  "subjectone":"25%",
				  "subjecttwo":"48%",
				  "subjectthree":"55",
				  "subjectfour":"40"
			  },
		  {    id:8,
			"user":"8",
				  "student_name":"andy",
				  "subjectone":"45%",
				  "subjecttwo":"25%",
				  "subjectthree":"65",
				  "subjectfour":"95"
			  },
			  {    id:9,
				"user":"9",
				"student_name":"palash",
					  "subjectone":"100%",
					  "subjecttwo":"98%",
					  "subjectthree":"92",
					  "subjectfour":"94"
				  },
			
			  {   id:10,
				"user":"10",
				"student_name":"racheal",
					  "subjectone":"25%",
					  "subjecttwo":"48%",
					  "subjectthree":"55",
					  "subjectfour":"40"
				  },
			  {    id:11,
				"user":"11",
					  "student_name":"andy",
					  "subjectone":"45%",
					  "subjecttwo":"25%",
					  "subjectthree":"65",
					  "subjectfour":"95"
				  },
				  {    id:12,
					"user":"12",
					"student_name":"palash",
						  "subjectone":"100%",
						  "subjecttwo":"98%",
						  "subjectthree":"92",
						  "subjectfour":"94"
					  },
				  {   id:13,
					"user":"13",
						  "student_name":"aman",
						  "subjectone":"45%",
						  "subjecttwo":"55%",
						  "subjectthree":"75",
						  "subjectfour":"85"
					  },
				  {   id:14,
					"user":"14",
					"student_name":"racheal",
						  "subjectone":"25%",
						  "subjecttwo":"48%",
						  "subjectthree":"55",
						  "subjectfour":"40"
					  },
				  {    id:15,
					"user":"15",
						  "student_name":"andy",
						  "subjectone":"45%",
						  "subjecttwo":"25%",
						  "subjectthree":"65",
						  "subjectfour":"95"
					  }, 
					   {   id:16,
						"user":"16",
							  "student_name":"aman",
							  "subjectone":"45%",
							  "subjecttwo":"55%",
							  "subjectthree":"75",
							  "subjectfour":"85"
						  },
						  {    id:17,
							"user":"17",
							"student_name":"palash",
								  "subjectone":"100%",
								  "subjecttwo":"98%",
								  "subjectthree":"92",
								  "subjectfour":"94"
							  },
						  {   id:18,
							"user":"18",
								  "student_name":"aman",
								  "subjectone":"45%",
								  "subjecttwo":"55%",
								  "subjectthree":"75",
								  "subjectfour":"85"
							  },
						  {   id:19,
							"user":"19",
							"student_name":"racheal",
								  "subjectone":"25%",
								  "subjecttwo":"48%",
								  "subjectthree":"55",
								  "subjectfour":"40"
							  },
						  {    id:20,
							"user":"20",
								  "student_name":"andy",
								  "subjectone":"45%",
								  "subjecttwo":"25%",
								  "subjectthree":"65",
								  "subjectfour":"95"
							  },
							  {    id:21,
								  "user":"21",
								  "student_name":"palash",
										"subjectone":"100%",
										"subjecttwo":"98%",
										"subjectthree":"92",
										"subjectfour":"94"
									},
								{   id:22,
								  "user":"22",
										"student_name":"aman",
										"subjectone":"45%",
										"subjecttwo":"55%",
										"subjectthree":"75",
										"subjectfour":"85"
									},
								{   id:23,
								  "user":"23",
								  "student_name":"racheal",
										"subjectone":"25%",
										"subjecttwo":"48%",
										"subjectthree":"55",
										"subjectfour":"40"
									},
								{    id:24,
								  "user":"24",
										"student_name":"andy",
										"subjectone":"45%",
										"subjecttwo":"25%",
										"subjectthree":"65",
										"subjectfour":"95"
									},
									{    id:25,
									  "user":"25",
									  "student_name":"palash",
											"subjectone":"100%",
											"subjecttwo":"98%",
											"subjectthree":"92",
											"subjectfour":"94"
										},
								  
									{   id:26,
									  "user":"26",
									  "student_name":"racheal",
											"subjectone":"25%",
											"subjecttwo":"48%",
											"subjectthree":"55",
											"subjectfour":"40"
										},
									{    id:27,
									  "user":"27",
											"student_name":"andy",
											"subjectone":"45%",
											"subjecttwo":"25%",
											"subjectthree":"65",
											"subjectfour":"95"
										},
										{    id:28,
										  "user":"28",
										  "student_name":"palash",
												"subjectone":"100%",
												"subjecttwo":"98%",
												"subjectthree":"92",
												"subjectfour":"94"
											},
										{   id:29,
										  "user":"29",
												"student_name":"aman",
												"subjectone":"45%",
												"subjecttwo":"55%",
												"subjectthree":"75",
												"subjectfour":"85"
											},
										{   id:30,
										  "user":"30",
										  "student_name":"racheal",
												"subjectone":"25%",
												"subjecttwo":"48%",
												"subjectthree":"55",
												"subjectfour":"40"
											}
									
	]
  constructor() {

   }

  ngOnInit() {

 

 
   
   
        
 
  
    }
  }
