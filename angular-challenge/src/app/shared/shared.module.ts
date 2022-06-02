import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { CheckChangeDirective } from './directives/check-change.directive';
import { UsersGroupComponent } from './components/users-group/users-group.component';
import {LayoutComponent} from "./components/layout/layout.component";
import {RouterModule} from "@angular/router";
import {AvatarComponent} from "./components/avatar/avatar.component";
import { NumberSignPipe } from './pipes/number-sign.pipe';
import { SearchComponent } from './components/search/search.component';
import {UiModule} from "../ui/ui.module";


@NgModule({
  declarations: [
    NumberSuffixPipe,
    CheckChangeDirective,
    UsersGroupComponent,
    LayoutComponent,
    AvatarComponent,
    NumberSignPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UiModule
  ],
  exports: [
    FormsModule,
    NumberSuffixPipe,
    CheckChangeDirective,
    UsersGroupComponent,
    NumberSignPipe,
  ]
})
export class SharedModule { }
