//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Lenguage } from '../language';

@Component({
  selector: 'app-prog-cont',
  templateUrl: './prog-cont.component.html',
  styleUrls: ['./prog-cont.component.css'], 
  inputs: ['language'], 
  host:{'class':'item'}
})
export class ProgContComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
