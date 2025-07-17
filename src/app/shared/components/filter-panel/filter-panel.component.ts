import { Component, EventEmitter, Output } from '@angular/core';
import { CarFilters } from '../../../core/services/car.service';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select'
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})
export class FilterPanelComponent {
@Output() filtersChange = new EventEmitter<CarFilters>();
  form!: FormGroup;

  makesList  = ['Toyota','Honda','Ford','BMW'];
  fuelsList  = ['Gasoline','Diesel','Electric','Hybrid'];
  colorsList = ['Red','Blue','Black','White'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      makes:    [[]],
      yearMin:  [2000, Validators.required],
      yearMax:  [2025, Validators.required],

      // fuels as FormArray of one boolean per fuel option
      fuels: this.fb.array(this.fuelsList.map(() => false)),

      mileageMin: [0, Validators.required],
      mileageMax: [200000, Validators.required],
      colors:     [[]],
      priceMin:   [0],
      priceMax:   [100000]
    });

    this.form.valueChanges.subscribe(value => {
      // derive selected fuel strings
      const selectedFuels = (this.form.get('fuels') as FormArray)
        .controls
        .map((ctrl, i) => (ctrl.value ? this.fuelsList[i] : null))
        .filter((v): v is string => v !== null);

      this.filtersChange.emit({
        makes:       value.makes,
        yearRange:   [value.yearMin, value.yearMax],
        fuelTypes:   selectedFuels,
        mileageRange:[value.mileageMin, value.mileageMax],
        colors:      value.colors,
        priceRange:  [value.priceMin, value.priceMax]
      });
    });
  }

  // getter for template ease
  get fuels(): FormArray {
    return this.form.get('fuels') as FormArray;
  }
}
