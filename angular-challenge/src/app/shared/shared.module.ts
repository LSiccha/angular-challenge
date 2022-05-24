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


@NgModule({
  declarations: [
    NumberSuffixPipe,
    CheckChangeDirective
  ],
  imports: [
    CommonModule
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
        FormsModule,
        NumberSuffixPipe,
        NzBreadCrumbModule,
        CheckChangeDirective
    ]
})
export class SharedModule { }
