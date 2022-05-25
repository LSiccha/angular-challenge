import { Component, OnInit } from '@angular/core';
import {UserStore} from "../../../store/models/user-store.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import * as UsersActions from '../../../store/actions/users.actions'
import {User} from "../../../core/models/user.model";

interface AppState {
  users: UserStore[],
  currentUser: User
}

@Component({
  selector: 'app-users-group',
  templateUrl: './users-group.component.html',
  styleUrls: ['./users-group.component.css']
})
export class UsersGroupComponent implements OnInit {

  counter: number = -1;

  users: Observable<UserStore[]>
  currentUser: Observable<User>

  constructor(
    private store: Store<AppState>
  ) {
    this.users = this.store.select('users')
    this.currentUser = this.store.select('currentUser')
  }

  addUser(){
    let user: UserStore = {
      id: '0123',
      name: 'Usuario'
    }
    this.store.dispatch(new UsersActions.AddUser(user))
  }


  ngOnInit(): void {
  }

}
