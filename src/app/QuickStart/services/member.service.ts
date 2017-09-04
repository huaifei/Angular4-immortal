/**
 * Created by huaifei.zhang on 9/4/2017.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MemberService {
  url: string;
  num: number;

  constructor ( private http: Http){
    this.url = 'https://api.github.com/orgs/angular/members?page=1&per_page=5';
    this.num = 4;
  }

  // todo: Q：放到外面？
  // this.num = 4;

  getMembers() {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }

}
