import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import * as UsersActions from '../../../core/store/actions/users.actions'
import {User} from "../../../core/models/user.model";
import {AppState} from "../../../core/store";


@Component({
  selector: 'app-users-group',
  templateUrl: './users-group.component.html',
  styleUrls: ['./users-group.component.css']
})
export class UsersGroupComponent implements OnInit {


  users: Observable<User[]>
  currentUser: Observable<User>

  constructor(
    private store: Store<AppState>
  ) {
    this.users = this.store.select('users')
    this.currentUser = this.store.select('currentUser')
  }

  addUser(){
    let user: User = {
      id: '0123',
    }
    this.store.dispatch(new UsersActions.AddUser(user))
  }


  ngOnInit(): void {
  }

}
