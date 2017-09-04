/**
 * Created by huaifei.zhang on 9/4/2017.
 */

import { Component } from '@angular/core';

interface Address {
  province: string;
  city: string;
}

@Component({
  selector: 'app-user',
    template: `
      <h2>Hello, I'm {{name}}</h2>
      <p>I come from <strong>{{address.province}}</strong> province
      <strong>{{address.city}}</strong> city.
      </p>
      
      <button (click)="toggleSkill()">
        {{ showSkills ? 'Show':'Hide' }}
      </button>
      
      <div *ngIf="showSkills">
        <h4>My skills</h4>
        <ul>
          <li *ngFor="let skill of skills">
            {{skill}}
          </li>
        </ul>
        
        <form (submit)="addSkill(skill.value)">
          <label>Add skill：</label>
          <input type="text" #skill>
        </form>
      </div>
    `
})


export class UserComponent {
  name: string;
  address: Address;
  showSkills: boolean;
  skills: string[];

  constructor () {
    this.name = 'fei';
    this.address = {
      province: 'Shanghai',
      city: 'Shanghai'
    };
    this.showSkills = true;
    this.skills = ['AngularJS', 'Angular'];
  }

  toggleSkill() {
    this.showSkills = !this.showSkills;
  }

  addSkill(skill: string) {
    let skillStr = skill.trim();
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skillStr);
    }
  }


}
