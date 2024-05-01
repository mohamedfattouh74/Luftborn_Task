import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BestSalesComponent } from './components/best-sales/best-sales.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BestSalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[HttpClientModule]
})

export class AppComponent {
  title = 'luftborn_task';
}
