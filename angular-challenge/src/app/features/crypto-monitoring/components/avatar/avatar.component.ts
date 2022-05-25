import { Component, OnInit } from '@angular/core';
import {User} from "../../../../core/models/user.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../store";

import * as AuthActions from "../../../../store/actions/auth.actions"

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  user: User = {}

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.user.id = String(Math.floor(Math.random() * (101 - 1) +1));

    navigator.geolocation.getCurrentPosition(
      position => {
        this.user.latitude = position.coords.latitude;
        this.user.longitude = position.coords.longitude;
        this.login(this.user)
      }
    );
    console.log(this.user)
  }

  login(user: User){
    this.store.dispatch(new AuthActions.Login(user))
  }

}
