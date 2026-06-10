import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard-post-form-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  templateUrl: './dashboard-post-form-dialog.html',
  styleUrl: './dashboard-post-form-dialog.css',
})
export class DashboardPostFormDialog {
  postForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });

  constructor(private dialogRef: DialogRef<DashboardPostFormDialog>) {}

  onSubmit() {
    console.log(this.postForm.value);
    this.dialogRef.close()
  }
}
