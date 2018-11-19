import { Component, OnInit } from '@angular/core';
import { GithubService } from '../server/github.service';
import { Title } from '@angular/platform-browser';
import { Lenguage } from '../language';

@Component({
  selector: 'app-csharp-prog',
  templateUrl: './csharp-prog.component.html',
  styleUrls: ['./csharp-prog.component.css'],
})

export class CsharpProgComponent implements OnInit {
  github: GitResponse[] = new Array();
  lenguage : Lenguage[];

  constructor(private _github: GithubService) {
  }
 
  ngOnInit(){
  this.lenguage=[new Lenguage(
    "Using mark-up language to provide a richer interactive interface and enable me to produce more comprehensive projects employing popular frameworks to speed up development. Development stack consists of Windows, .NET Framework, WPF and SQL Server.",//description
    "C sharp",//name
    "/assets/images/csharp.png",//imageUrl
    24)];
    this._github.mygithub().subscribe(res =>{
      res.forEach(element => {
        if(element.language == "C#")
          this.github.push(element);
      })
    });
}
}

