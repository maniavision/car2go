import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CarRequest,
  RequestStatus
} from '../models/request.model';

export interface CreateRequestDTO {
  makes: string[];
  yearRange: [number, number];
  models: Record<string, string[]>;
  comments: string;
  name: string;
  email: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  create(dto: CreateRequestDTO): Observable<CarRequest> {
    return this.http.post<CarRequest>(
      '/api/requests',
      dto
    );
  }

  getAll(): Observable<CarRequest[]> {
    return this.http.get<CarRequest[]>('/api/requests');
  }

  updateStatus(
    id: string,
    status: RequestStatus
  ): Observable<CarRequest> {
    return this.http.patch<CarRequest>(
      `/api/requests/${id}`,
      { status }
    );
  }

  getById(id: string): Observable<CarRequest> {
    return this.http.get<CarRequest>(`/api/requests/${id}`);
  }
}
