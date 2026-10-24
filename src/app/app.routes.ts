import {Routes} from '@angular/router';
import {AccountRoute, AuthorizationRoute, isAuthenticated} from "ngx-fusio-sdk";
import {AccountComponent} from "./account/account.component";
import {List} from "./agent/list/list";
import {Detail} from "./agent/detail/detail";

export const routes: Routes = [
  {path: '', component: List, canActivate: [isAuthenticated]},
  {path: 'agent', component: List, canActivate: [isAuthenticated]},
  {path: 'agent/:id/chat', component: Detail, canActivate: [isAuthenticated]},
  {path: 'agent/:id/chat/:chat_id', component: Detail, canActivate: [isAuthenticated]},
  {path: 'account', component: AccountComponent, canActivate: [isAuthenticated], children: AccountRoute.getAll()},
  ...AuthorizationRoute.getAll(),
];
