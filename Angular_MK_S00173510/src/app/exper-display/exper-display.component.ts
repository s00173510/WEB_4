import { Component, OnInit, Input } from '@angular/core';
import { Lenguage } from '../language';

@Component({
  inputs:['experiance'],
  selector: 'app-exper-display',
  templateUrl: './exper-display.component.html',
  styleUrls: ['./exper-display.component.css']
})
export class ExperDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
