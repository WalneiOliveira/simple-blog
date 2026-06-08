import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-post-form-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './dashboard-post-form-dialog.html',
  styleUrl: './dashboard-post-form-dialog.css',
})
export class DashboardPostFormDialog {
  onSubmit(postForm: NgForm) {
    const author = postForm.form.value.author;
    const title = postForm.form.value.title;
    const date = postForm.form.value.date;
    const content = postForm.form.value.content;

    console.log(`[autor: ${author}], [título: ${title}], [data: ${date}], [texto: ${content}]`);
  }
}
