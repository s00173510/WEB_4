
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../server/github.service';
import { Title } from '@angular/platform-browser';
import { Lenguage } from '../language';

@Component({
  selector: 'app-js-prog',
  templateUrl: './js-prog.component.html',
  styleUrls: ['./js-prog.component.css']
})

export class JsProgComponent implements OnInit {
  github: GitResponse[] = new Array();
  lenguage : Lenguage[];
  constructor(private _github: GithubService) {
   
   }
   ngOnInit(){
   this.lenguage=[new Lenguage(
    "Develop complex scripts at the client end. Understanding the need for client side scripting and its place in application development. Its relationship with other front end web technologies. Knowledge about plugins and APIs connection to application.",//description
    "JavaScript & jQuery",//name
    "/assets/images/javascript.png",//imageUrl
    6),
      ];
      this._github.mygithub().subscribe(res =>{
        res.forEach(element => {
          if(element.language == "JavaScript")
            this.github.push(element);
        })
      });
    }
}
