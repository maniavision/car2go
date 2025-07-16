import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  CarRequest,
  RequestStatus
} from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  fetchRequests(): Observable<CarRequest[]> {
    return this.http.get<CarRequest[]>('/api/admin/requests');
  }

  changeRequestStatus(
    requestId: string,
    status: RequestStatus
  ): Observable<CarRequest> {
    return this.http.put<CarRequest>(
      `/api/admin/requests/${requestId}/status`,
      { status }
    );
  }

  // Optionally, admin can fetch users, reviews, etc.
}
