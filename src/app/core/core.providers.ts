// src/app/core/core.providers.ts

import { importProvidersFrom, EnvironmentProviders } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard }       from './guards/auth.guard';

export const CORE_PROVIDERS: Array<EnvironmentProviders | any> = [
  // returns an EnvironmentProviders
  importProvidersFrom(HttpClientModule),

  // each interceptor/guard is a valid Provider
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard
];
