import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-report-overview',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./report-overview.component.html`,
  styleUrl: './report-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportOverviewComponent { }
