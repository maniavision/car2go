import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  @Output() languageChange = new EventEmitter<'en' | 'fr'>();
  current = 'en';

  switch(lang: 'en' | 'fr') {
    this.current = lang;
    this.languageChange.emit(lang);
  }
}
