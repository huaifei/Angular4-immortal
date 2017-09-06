/**
 * Created by huaifei.zhang on 9/6/2017.
 */

import { Component } from '@angular/core';

@Component ({
  selector: 'app-directive',
  template: `<h2> template h2 </h2>
  
  <!--<p myHighlight [highColor]="color">Highlight me</p>-->
  
  <p [myHighlight]="color">Highlight me</p>

  <h4>Pick a highlight color</h4>
  <div>
    <input type="radio" name="colors" (click)="color='lightgreen'">Green
    <input type="radio" name="colors" (click)="color='yellow'">Yellow
    <input type="radio" name="colors" (click)="color='cyan'">Cyan
  </div>
  <p [myHighlight]="color" defaultColor="violet">Highlight me!</p>
  `
})


export class DirectiveComponent {
  constructor () {}

  // color = 'red';
  color: string;


}
