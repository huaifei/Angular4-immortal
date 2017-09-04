/**
 * Created by huaifei.zhang on 9/4/2017.
 */

import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { MemberService } from '../services/member.service';

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-members',
  template: `
    <h3>Angular orgs members:</h3>
    <ul>
      <li ></li>
    </ul>
  `
})


export class MembersComponent implements OnInit {
  members: Member[];
  constructor ( private memberService: MemberService ) {}
  ngOnInit () {
    this.memberService.getMembers()
      .subscribe(data => {
        if (data) { this.members = data; }
      });
  }
}

