import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-confirm-account',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule
  ],
  templateUrl: './confirm-account.component.html',
  styleUrl: './confirm-account.component.scss'
})
export class ConfirmAccountComponent {
password = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token')!;
    this.auth.confirmAccount(token).subscribe({
      next: pwd => {
        this.password = pwd;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  copy() {
    this.clipboard.copy(this.password);
  }
}
