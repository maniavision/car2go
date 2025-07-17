import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
   // --- Inject the ChildrenOutletContexts ---
  constructor(private contexts: ChildrenOutletContexts) {}

  /**
   * This method is bound to the animation trigger in the template.
   * It inspects the activated route's data to return the animation state.
   */
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
