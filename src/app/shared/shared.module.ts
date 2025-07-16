import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule }    from '@angular/material/card';
import { MatButtonModule }  from '@angular/material/button';
import { MatIconModule }    from '@angular/material/icon';
import { MatSelectModule }  from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule }   from '@angular/material/input';
import { MatSliderModule }  from '@angular/material/slider';

import { CarCardComponent }        from './components/car-card/car-card.component';
import { FilterPanelComponent }    from './components/filter-panel/filter-panel.component';
import { ReviewCardComponent }     from './components/review-card/review-card.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { PriceFormatPipe }         from './pipes/price-format.pipe';
import { HighlightDirective }      from './directives/highlight.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatSliderModule,
    CarCardComponent,
    FilterPanelComponent,
    ReviewCardComponent,
    LanguageSwitcherComponent,
    PriceFormatPipe,
    HighlightDirective
  ],
  exports: [
    // Angular & Material
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatSliderModule,
    // Shared utilities
    CarCardComponent,
    FilterPanelComponent,
    ReviewCardComponent,
    LanguageSwitcherComponent,
    PriceFormatPipe,
    HighlightDirective
  ]
})
export class SharedModule {}
