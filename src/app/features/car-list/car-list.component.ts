import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarCardComponent } from '../../shared/components/car-card/car-card.component';
import { FilterPanelComponent } from '../../shared/components/filter-panel/filter-panel.component';
import { CarFilters, CarService } from '../../core/services/car.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CommonModule,
    CarCardComponent,
    FilterPanelComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
cars$ = this.carService.list$;
  loading = false;

  constructor(private carService: CarService) {}

  onFilter(filters: CarFilters) {
    this.loading = true;
    this.carService.filter(filters);
    setTimeout(() => (this.loading = false), 400);
  }
}
