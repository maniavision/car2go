import { Component } from '@angular/core';
import { ReviewService } from '../../core/services/review.service';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews$ = this.reviewSvc.getAll();

  constructor(private reviewSvc: ReviewService) {}

  ngOnInit() {}
}
