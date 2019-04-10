import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title = 'megakyle83';
  contactMe: any;
  socialmedia: any;
  linkingPgs: any;


  constructor(private http: HttpClient, private router: Router, public sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
  }

public ngOnInit(): void
    {

      this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

      $(document).ready(function(){
        $("menu").hide();
        $("h3").click(function(e) {
          $("#menuIcon").addClass('rotate');
          e.stopPropagation();
        });

        $("h3, #menuIcon, .icon").on('click', function(){
          $("#menuIcon").toggleClass('rotate');
          $("menu").slideToggle(500);
        });
      });

      this.http.get<any>('assets/content/contactMe.json').subscribe(
        data => {
          this.contactMe = data;
        });

      this.http.get<any>('assets/content/socialMedia.json').subscribe(
        data => {
          this.socialmedia = data;
        });

      this.http.get<any>('assets/content/headerInternalLinks.json').subscribe(
        data => {
          this.linkingPgs = data;
        });
    }

}
