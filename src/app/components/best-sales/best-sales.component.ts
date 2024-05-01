import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SalesListComponent } from '../sales-list/sales-list.component';
import { ReportOverviewComponent } from '../report-overview/report-overview.component';

@Component({
  selector: 'app-best-sales',
  standalone: true,
  imports: [
    CommonModule,
    SalesListComponent,
    ReportOverviewComponent
  ],
  templateUrl: `./best-sales.component.html`,
  styleUrl: './best-sales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSalesComponent { }
