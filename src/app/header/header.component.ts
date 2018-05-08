import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import * as $ from 'jquery';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'megakyle83';
  contactMe: string;
  socialmedia: any;
  linkingPgs: object;


  constructor(private http: HttpClient, private router: Router, public sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
  }

  public ngOnInit(): void
    {

      $(document).ready(function(){
        $("menu").hide();
        $("h3").click(function(e) {
          $("#menuIcon").addClass('rotate');
          e.stopPropagation();
        });

        $("h3, #menuIcon, .icon").on('click', function(){
          $("html").toggleClass('position');
          $("#menuIcon").toggleClass('rotate');
          $("menu").slideToggle(500);
        });

        $(".platform").hide();
        $(".icon").hover(function() {
            $(this).prev(".platform").slideToggle(300);
        })
      });

      // this.http.get<any>('assets/json/contactMe.json').subscribe(
      //   data => {
      //     this.contactMe = data;
      //   })
      //
      // this.http.get<any>('assets/json/socialMedia.json').subscribe(
      //   data => {
      //     this.socialmedia = data;
      //   })

      this.http.get<any>('assets/json/headerInternalLinks.json').subscribe(
        data => {
          this.linkingPgs = data;
        });
    }

}
