import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

declare var jquery:any;
declare var $:any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any;



  constructor( private http: HttpClient, private router: Router, public sanitizer: DomSanitizer ) {
    this.sanitizer = sanitizer;
  }


public  ngOnInit() {



    $(document).ready(function() {

      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      var isIE = /*@cc_on!@*/false;

      if( isChrome ) {
      $("#video").replaceWith($('<video id="video" autoplay loop><source src="/assets/video/scifi.webm" type="video/webm"></video>'));
      }
      //Init Scroll Magic
      var controller = new ScrollMagic.Controller();
        //loop through each img
        $('img').each(function() {
        //build scene
        var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.85
      })

      .setClassToggle(this, 'fade-in')

      .addTo(controller);

      });

      //loop through each Title
      $('.intro').each(function() {
        //build scene
        var titleScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.92
      })

      .setClassToggle(this, 'fade-in')

      .addTo(controller);

      });

      //loop through each quote
      $('.quote').each(function() {
        //build scene
        var titleScene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0.88
        })

      .setClassToggle(this, 'fade-in')

      .addTo(controller);

      });


    });


  }

}
