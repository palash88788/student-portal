import { Component, OnInit, Input } from '@angular/core';

import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private route: ActivatedRoute) { 

  }
 
 
  ngOnInit() {

  }

}