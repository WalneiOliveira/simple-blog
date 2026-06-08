import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
