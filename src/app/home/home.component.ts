import { Component, OnInit, Injectable } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';

declare var $:any;
declare var ScrollMagic: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any;

  constructor(private router: Router) {

  }

public  ngOnInit() {

    $(document).ready(function() {

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
      .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#ff0000'
      })

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
      .addIndicators({
        name: 'title scene',
        colorTrigger: 'black',
        colorStart: '#ff0000'
      })

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
      .addIndicators({
        name: 'title scene',
        colorTrigger: 'black',
        colorStart: '#ff0000'
      })

      .addTo(controller);

      });


    });


  }

}
