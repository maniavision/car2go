import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Review[]> {
    return this.http.get<Review[]>('/api/reviews');
  }

  submit(review: Omit<Review, 'id' | 'date'>): Observable<Review> {
    return this.http.post<Review>('/api/reviews', review);
  }
}
