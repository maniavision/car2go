// src/main.ts
import { bootstrapApplication }        from '@angular/platform-browser';
import { importProvidersFrom }         from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { PreloadAllModules }           from '@angular/router';
import { BrowserAnimationsModule }     from '@angular/platform-browser/animations';
import { HttpClientModule }            from '@angular/common/http';
import { ClipboardModule }             from '@angular/cdk/clipboard';
import { MatSnackBarModule }           from '@angular/material/snack-bar';

import { AppComponent }                from './app/app.component';
import { appRoutes }                   from './app/app.routes';
import { APP_CONFIG_PROVIDER }         from './app/app.config';
import { CORE_PROVIDERS }              from './app/core/core.providers';

bootstrapApplication(AppComponent, {
  providers: [
    // 1) your app config
    APP_CONFIG_PROVIDER,

    // 2) http + interceptor + guards
    ...CORE_PROVIDERS,

    // 3) router: pass in the Routes array, not the providers
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules)
    ),

    // 4) modules without NgModule
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      ClipboardModule,
      MatSnackBarModule
    )
  ]
})
.catch(err => console.error(err));
