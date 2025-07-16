// src/app/app.config.ts

import { InjectionToken, ValueProvider } from '@angular/core';

/**
 * Shape of the application configuration
 */
export interface AppConfig {
  /**
   * Base URL for all HTTP API calls
   */
  apiBaseUrl: string;

  /**
   * Supported UI languages
   */
  languages: {
    default: 'en' | 'fr';
    available: Array<'en' | 'fr'>;
  };

  /**
   * Fee (in USD) for each “Request a Car” submission
   */
  requestFee: number;
}

/**
 * The concrete configuration values.
 * You can swap these with environment-based values if needed.
 */
export const APP_CONFIG: AppConfig = {
  apiBaseUrl: '/api',
  languages: {
    default: 'en',
    available: ['en', 'fr']
  },
  requestFee: 5
};

/**
 * InjectionToken used to inject AppConfig anywhere in the app.
 */
export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');

/**
 * ValueProvider to register AppConfig under APP_CONFIG_TOKEN.
 * Import this provider in your standalone bootstrap.
 */
export const APP_CONFIG_PROVIDER: ValueProvider = {
  provide: APP_CONFIG_TOKEN,
  useValue: APP_CONFIG
};
