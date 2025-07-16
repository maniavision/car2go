import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  of,
  tap
} from 'rxjs';

interface LoginResponse {
  token: string;
}

interface ConfirmResponse {
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private authSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.authSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('/api/auth/login', { email, password })
      .pipe(
        tap(res => {
          localStorage.setItem(this.TOKEN_KEY, res.token);
          this.authSubject.next(true);
        }),
        // map to void
        tap(() => {})
      );
  }

  confirmAccount(token: string): Observable<string> {
    return this.http
      .get<ConfirmResponse>('/api/auth/confirm', { params: { token } })
      .pipe(
        tap(res => {
          localStorage.setItem(this.TOKEN_KEY, res.password);
          this.authSubject.next(true);
        }),
        // expose the generated password
        tap(),
        // map ConfirmResponse to password string
        (source$) => new Observable<string>(observer => {
          source$.subscribe({
            next: (res) => {
              observer.next(res.password);
              observer.complete();
            },
            error: err => observer.error(err)
          });
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
