import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// --- Import the necessary Material modules directly ---
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// --- Import your standalone LanguageSwitcherComponent ---
import { LanguageSwitcherComponent } from './shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // --- Add the Material modules here ---
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    // --- Add your standalone component here ---
    LanguageSwitcherComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'car2go';
}
