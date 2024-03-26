import { DialogModalComponent } from './../../shared/components/dialog-modal/dialog-modal.component';
import { UsersService } from './../../shared/services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    DialogModalComponent
  ],
  providers: [
    UsersService,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
