import { Component, OnInit, Input } from '@angular/core';
import { Lenguage } from '../language';


@Component({
  inputs: ['language'],
  selector: 'app-lenguage-img',
  templateUrl: './lenguage-img.component.html',
  styleUrls: ['./lenguage-img.component.css'],
  host:{class:'ui small image'}
})
export class LenguageImgComponent implements OnInit {
  language:Lenguage;
  constructor() { }

  ngOnInit() {
  }

}
