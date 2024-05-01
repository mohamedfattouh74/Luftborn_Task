import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../models/product';
import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-sales-list',
  standalone: true,
  imports: [CommonModule,CardItemComponent],
  templateUrl: `./sales-list.component.html`,
  styleUrl: './sales-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SalesListComponent { 

    topProducts:Product[] = [];

    constructor(private productsService:ProductsService){}

    ngOnInit(){
      this.getTopProducts();
    }

    getTopProducts(){
      this.productsService.getProducts().subscribe((res : Product[])=>{
        this.topProducts=res;
      })
    }
}
