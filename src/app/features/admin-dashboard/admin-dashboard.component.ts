import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {
  MatTableModule,
  MatTableDataSource
} from '@angular/material/table';
import { CarRequest, RequestStatus } from '../../core/models/request.model';
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
        CommonModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
displayedColumns = ['id','name','email','status','date','actions'];
  dataSource = new MatTableDataSource<CarRequest>();
  statuses = Object.values(RequestStatus);

  constructor(private admin: AdminService) {}

  ngOnInit() {
    this.admin.fetchRequests().subscribe(data => this.dataSource.data = data);
  }

  changeStatus(req: CarRequest, status: RequestStatus) {
    this.admin.changeRequestStatus(req.id, status)
      .subscribe(updated => {
        req.status = updated.status;
      });
  }
}
