import { UsersService } from './../../shared/services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsUserRoutingModule } from './details-user-routing.module';
import { DetailsUserComponent } from './details-user.component';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DetailsUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DetailsUserRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [
    UsersService
  ]
})
export class DetailsUserModule { }
