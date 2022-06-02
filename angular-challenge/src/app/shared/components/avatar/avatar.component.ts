import { Component, OnInit } from '@angular/core';
import {User} from "../../../core/models/user.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../core/store";
import * as AuthActions from "../../../core/store/actions/auth.actions"
import { v4 as uuidv4} from 'uuid';

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

    let userFromStorage = this.retrieveFromLocalStorage()
    if (userFromStorage){
      this.user = userFromStorage
      this.login(userFromStorage)
    }
    else {
      this.user.id = uuidv4();
      navigator.geolocation.getCurrentPosition(
        position => {
          this.user.latitude = position.coords.latitude;
          this.user.longitude = position.coords.longitude;
          this.saveToLocalStorage(this.user)
          this.login(this.user)
        }
      );
    }

  }

  login(user: User){
    this.store.dispatch(new AuthActions.Login(user))
    /*
    this.store.select('currentUser').subscribe(
      data => console.log(data)
    )
     */
  }

  saveToLocalStorage(user: User){
      localStorage.setItem("currentUser", JSON.stringify(user))
  }

  retrieveFromLocalStorage() : User | null{
    let userFromStorage = localStorage.getItem('currentUser')
    if (userFromStorage == null){
      return null;
    }
    return JSON.parse(userFromStorage)
  }

}
