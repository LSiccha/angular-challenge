import { Component, OnInit } from '@angular/core';
import {User} from "../../../../core/models/user.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {

  }

}
