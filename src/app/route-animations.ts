import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

/**
 * Defines the animations for route transitions.
 * This creates a subtle fade and slide effect as the user navigates between pages.
 */
export const routeAnimations =
  trigger('routeAnimations', [
    // This transition applies to any state change: '* <=> *'
    transition('* <=> *', [
      // Initial styles for both the entering and leaving pages
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),

      // Style for the new page entering the view
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' })
      ], { optional: true }),

      // Animate the old page leaving the view
      query(':leave', [
        animate('0.3s ease-in-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ], { optional: true }),

      // Animate the new page entering the view
      query(':enter', [
        animate('0.4s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ]);
