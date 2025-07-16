import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PaymentRequest {
  amount: number;
  currency: string;
  // any additional payment gateway fields
}

export interface PaymentResponse {
  success: boolean;
  transactionId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  processPayment(
    payload: PaymentRequest
  ): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(
      '/api/payments/charge',
      payload
    );
  }
}
