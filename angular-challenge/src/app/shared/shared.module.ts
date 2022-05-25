import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {FormsModule} from "@angular/forms";
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import { CheckChangeDirective } from './directives/check-change.directive';
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import { UsersGroupComponent } from './components/users-group/users-group.component';


@NgModule({
  declarations: [
    NumberSuffixPipe,
    CheckChangeDirective,
    UsersGroupComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzRadioModule,
    NzDatePickerModule,
    FormsModule,
    NzBreadCrumbModule,
    NzAvatarModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDropDownModule,
    NzRadioModule,
    NzDatePickerModule,
    FormsModule,
    NumberSuffixPipe,
    NzBreadCrumbModule,
    CheckChangeDirective,
    NzAvatarModule,
    UsersGroupComponent
  ]
})
export class SharedModule { }
