import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';
import { OrderService } from 'src/app/services/order/order.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: any[] = [];
  selectedType: string | null = null;
  selectedButtonType: string | null = null;

  constructor(private productsService: ProdutosService, private orderService: OrderService) { }

  ngOnInit(): void {
  }

  getProductsByType(type: string): void {
    this.productsService.getProducts().subscribe(
      (data: any) => {
        
        this.products = data.filter((product: any) => product.type === type);
        console.log(this.products)
      },
      (error: any) => {
        console.error('Erro ao buscar produtos', error);
        
      }
    );
  }

  onSelectType(type: string): void {
    this.selectedType = type;
    this.selectedButtonType = type;
    this.getProductsByType(type);
  }

  addToCart(product: any): void {
    this.orderService.addToCart(product); //esse método é chamado quando clicamos no botão de adicionar produto
  }
}