import { Component, OnInit } from '@angular/core';
import { GithubService } from '../server/github.service';
import { Title } from '@angular/platform-browser';
import { Lenguage } from '../language';

@Component({
  selector: 'app-ciot-prog',
  templateUrl: './ciot-prog.component.html',
  styleUrls: ['./ciot-prog.component.css']
})
export class CiotProgComponent implements OnInit {
  github: GitResponse[] = new Array();
  lenguage : Lenguage[];

  constructor(private _github: GithubService) {
    
   }

ngOnInit(){
  this.lenguage=[new Lenguage(
    "Implemented real-world scenarios to IoT divices and implemented applications to deal with them. The various understandings and requirements of IoT applications and what is required in certain scenarios. Apply technologies and using an experimental platform for implementing prototypes and testing them as running applications.",//description
    "C for Internet of Things",//name
    "/assets/images/c-iot.png",//imageUrl
    6),
      ];
      this._github.mygithub().subscribe(res =>{
        res.forEach(element => {
          if(element.language == "Arduino")
            this.github.push(element);
        })
      });
}
}
