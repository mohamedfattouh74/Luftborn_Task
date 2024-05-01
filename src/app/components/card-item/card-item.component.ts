import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: `./card-item.component.html`,
  styleUrl: './card-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent { 
  @Input() product:Product={
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
    rating:{
      count:0,
      rate:0
    }
  };

  ngOnChanges(){}
}
