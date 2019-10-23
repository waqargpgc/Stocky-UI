import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UsersComponent } from './users/users.component';
import { NbCardModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class AccountModule { }
