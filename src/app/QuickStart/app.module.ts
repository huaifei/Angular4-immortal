import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MembersComponent } from './members/members.component';
import { DirectiveComponent } from './directives/directive.component';

import { HighlightDirective } from './directives/cases/d1';

import { MemberService } from './services/member.service';

export const ROUTE: Routes  = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: 'members', component: MembersComponent },
  { path: 'directives', component: DirectiveComponent }
];


@NgModule({
  declarations: [
    AppComponent, UserComponent, MembersComponent, DirectiveComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE),
    FormsModule,
    HttpModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})

export class AppModule { }

