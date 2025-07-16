import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { PaymentService } from '../../core/services/payment.service';
import { CarService } from '../../core/services/car.service';
import { RequestService } from '../../core/services/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-request-car',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './request-car.component.html',
  styleUrl: './request-car.component.scss'
})
export class RequestCarComponent {
form!: FormGroup;
  modelsMap: Record<string, string[]> = {};
  makes: string[] = [];

  constructor(
    private fb: FormBuilder,
    private carSvc: CarService,
    private paySvc: PaymentService,
    private reqSvc: RequestService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.makes = ['Toyota','Honda','Ford','BMW']; // or dynamic from CarService
    this.form = this.fb.group({
      makes: [[], Validators.required],
      yearMin: [2000, Validators.required],
      yearMax: [2025, Validators.required],
      models: this.fb.group({}),
      comments: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });

    this.form.get('makes')!.valueChanges.subscribe((arr: string[]) => {
      const group = this.form.get('models') as FormGroup;
      // reset & add controls
      Object.keys(group.controls).forEach(k => group.removeControl(k));
      arr.forEach(make => {
        group.addControl(make, this.fb.control([], Validators.required));
        // stub models
        this.modelsMap[make] = ['Model A','Model B','Model C'];
      });
    });
  }

  async submit() {
    if (this.form.invalid) return;
    const amount = 5; // fee
    try {
      const pay = await this.paySvc
        .processPayment({ amount, currency: 'USD' })
        .toPromise();
      if (!pay?.success) throw new Error('Payment failed');
      const dto = this.form.value;
      await this.reqSvc.create(dto).toPromise();
      this.snack.open('Request sent! Check your email to confirm.', '', { duration: 3000 });
      this.router.navigate(['/']);
    } catch {
      this.snack.open('Error processing request.', '', { duration: 3000 });
    }
  }
}
