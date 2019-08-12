import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var main = function() {
      $('.notification img').click(function() {
        $('.notification-menu').toggle(); 
      }); 
      
   
    }; 
    $(document).ready(main); 
  }

}
