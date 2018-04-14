import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'megakyle83';
socialmedia = [];


  constructor(private router: Router) {

    this.socialmedia = [
      {
        id: 1,
        platform: "Twitch",
        icon: ['./assets/icons/twitch.png']
      },
      {
        id: 2,
        platform: "ArtStation",
        icon: ['./assets/icons/artstation.png']
      },
      {
        id: 3,
        platform: "Deviant Art",
        icon: ['./assets/icons/deviantart.png']
      },
      {
        id: 4,
        platform: "Twitter",
        icon: ['./assets/icons/twitter.png']
      },
      {
        id: 5,
        platform: "LinkedIn",
        icon: ['./assets/icons/linkedin.png']
      },
      {
        id: 6,
        platform: "Facebook",
        icon: ['./assets/icons/facebook.png']
      }
    ]

  }

  public ngOnInit()
    {
      $(document).ready(function() {
        $(".platform").hide();
        $("menu").hide();
        $("#menuIcon").on("click", function(){
          $("menu").slideToggle(500, function() {
            if($("menu").is(":hidden")){
              $("html, body").css({
                  overflow: 'auto',
                  height: 'auto'
              })
            } else {
              $("html, body").css({
                  overflow: 'hidden',
                  height: '100%'
              })
            }
          }
        }),

          $(".icon").hover(function() {
              $(this).prev(".platform").slideToggle(300);
          })
      });
    }

    aboutPage() {
        this.router.navigate(['about']);
      }

    workPage() {
        this.router.navigate(['work']);
      }

    homePage() {
        this.router.navigate(['']);
      }

}
