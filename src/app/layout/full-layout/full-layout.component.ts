import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {
  
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
       $('body').toggleClass('active-menu')
         $('#sidebar-main').toggleClass('active');
         $('.navbar-background').toggleClass('active');   

  
      });
      });
  }

}
