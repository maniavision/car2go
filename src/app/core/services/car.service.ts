import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Car } from '../models/car.model';

export interface CarFilters {
  makes?: string[];
  yearRange?: [number, number];
  fuelTypes?: string[];
  mileageRange?: [number, number];
  colors?: string[];
  priceRange?: [number, number];
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsSubject = new BehaviorSubject<Car[]>([]);
  list$ = this.carsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAll();
  }

  private loadAll(): void {
    this.http
      .get<Car[]>('/api/cars')
      .subscribe(cars => this.carsSubject.next(cars));
  }

  filter(filters: CarFilters): void {
    let params = new HttpParams();
    if (filters.makes) {
      filters.makes.forEach(m => (params = params.append('make', m)));
    }
    if (filters.yearRange) {
      params = params
        .set('yearMin', filters.yearRange[0])
        .set('yearMax', filters.yearRange[1]);
    }
    if (filters.fuelTypes) {
      filters.fuelTypes.forEach(f => (params = params.append('fuel', f)));
    }
    if (filters.mileageRange) {
      params = params
        .set('mileMin', filters.mileageRange[0])
        .set('mileMax', filters.mileageRange[1]);
    }
    if (filters.colors) {
      filters.colors.forEach(c => (params = params.append('color', c)));
    }
    if (filters.priceRange) {
      params = params
        .set('priceMin', filters.priceRange[0])
        .set('priceMax', filters.priceRange[1]);
    }

    this.http
      .get<Car[]>('/api/cars', { params })
      .subscribe(cars => this.carsSubject.next(cars));
  }

  getById(id: string): Observable<Car> {
    return this.http.get<Car>(`/api/cars/${id}`);
  }
}
