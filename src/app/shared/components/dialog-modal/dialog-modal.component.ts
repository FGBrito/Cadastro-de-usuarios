import { Users } from './../../models/data-users';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { 
  FormGroup, 
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';


@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class DialogModalComponent implements OnInit{
  public addEditForm: FormGroup;  

  public errorMessage = '';

  constructor( 
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users,
  ) { 
    this.addEditForm = fb.group({
      name: [this.data.name, Validators.required ],
      username: [this.data.username, Validators.required ],
      email: [this.data.email, Validators.required ],
      address: fb.group({
        street: [this.data.address.street, Validators.required ],
        suite: [this.data.address.suite, Validators.required ],
        city: [this.data.address.city, Validators.required ],
        zipcode: [this.data.address.zipcode, Validators.required ]
      })
    });
  }

  public ngOnInit(): void {        
   
  }

  public onNoClick(): void {
    console.log('this.addEditForm', this.addEditForm.value)
    this.dialogRef.close(this.addEditForm.value);
  }

  public updateErrorMessage() {
    console.log('aaa')
  }
}
