import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Matrial from '@primeng/themes/material';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withComponentInputBinding()), provideClientHydration(withEventReplay()),
  provideHttpClient(withFetch()),
  provideAnimationsAsync(),
  providePrimeNG({
    theme: {
      preset: Matrial,
      options: {
        prefix: 'p',
        darkModeSelector: '.my-app-dark',
        cssLayer: false
      }
    },
    ripple: true
  })
  ]
};
