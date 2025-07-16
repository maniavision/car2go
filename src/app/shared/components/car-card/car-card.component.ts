import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Car } from '../../../core/models/car.model';
import { PriceFormatPipe } from "../../pipes/price-format.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    PriceFormatPipe
],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
@Input() car!: Car;
}
