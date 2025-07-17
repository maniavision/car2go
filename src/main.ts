// src/main.ts
import { bootstrapApplication }        from '@angular/platform-browser';
import { importProvidersFrom }         from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { PreloadAllModules }           from '@angular/router';
// Import provideAnimationsAsync for a more robust animation setup
import { provideAnimationsAsync }      from '@angular/platform-browser/animations/async';
import { ClipboardModule }             from '@angular/cdk/clipboard';
import { MatSnackBarModule }           from '@angular/material/snack-bar';

import { AppComponent }                from './app/app.component';
import { appRoutes }                   from './app/app.routes';
import { APP_CONFIG_PROVIDER }         from './app/app.config';
import { CORE_PROVIDERS }              from './app/core/core.providers';

bootstrapApplication(AppComponent, {
  providers: [
    // Provide animations using the async function, which is best for standalone apps
    provideAnimationsAsync(),

    // 1) your app config
    APP_CONFIG_PROVIDER,

    // 2) http + interceptor + guards
    ...CORE_PROVIDERS,

    // 3) router: pass in the Routes array, not the providers
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules)
    ),

    // 4) other modules without NgModule
    importProvidersFrom(
      // HttpClientModule is already provided within CORE_PROVIDERS
      ClipboardModule,
      MatSnackBarModule
    )
  ]
})
.catch(err => console.error(err));
