import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { provideRouter, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterLink],
})

export class HeaderComponent {

}
