import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = []
  searchText: string = ''; // Inicializando a variável de pesquisa vazia

constructor(private readonly productService: ProdutosService){
  this.loadProducts()
}
loadProducts(){
  this.productService.getProducts().subscribe({
    next: (data: any) => {
      console.log(data)
      this.products=data
    },
    error: (error: any) => {
      console.error(error)
    }
  })
}
editProduct(product:any){
  product.price += 0.5
  this.productService.editProduct(product).subscribe({
    next: (data: any) => {
      console.log(data)
      this.products=[]
      this.loadProducts()
    },
    error: (error: any) => {
      console.error(error)
    }
  })
}

get filteredProducts(): any[] {
  // Função para filtrar os produtos com base no texto de pesquisa
  const searchTerm = this.searchText.toLowerCase().trim();

  return this.products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm) 
    );
  });
}
}

