import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UxServiceService } from './ux-service.service';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  @ViewChild('id')
  id!: ElementRef;
  @ViewChild('name')
  name!: ElementRef;
  @ViewChild('price')
  price!: ElementRef;

  editMode: boolean = false;
  editIndex!: number;

  constructor(private uxservice: UxServiceService) { }
  ngOnInit(): void {
    this.onFetchProduct();
  }

  dataTitle = 'uxtrend';

  products = [
    {
      id: 'p1',
      name: 'Laptop',
      price: '50000'
    },
    {
      id: 'p2',
      name: 'Mobile',
      price: '15000'
    },
    {
      id: 'p3',
      name: 'TV',
      price: '20000'
    }
  ];

  onAddProduct(id: string, name: string, price: string): void {
    if (this.editMode) {
      this.products[this.editIndex]={
        id: id,
        name: name,
        price: price
      }
      this.editMode=false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';

    } else {
      this.products.push({
        id: id,
        name: name,
        price: price
      });
    }
    this.onSaveProduct();
  }

  onSaveProduct(): void {
    this.uxservice.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }

  onFetchProduct(): void {
    this.uxservice.fetchProducts().subscribe(
      (response) => {
        console.log(response)
        const data = JSON.stringify(response)
        console.log(data)
        this.products = JSON.parse(data)

      },
      (err) => console.log(err)
    )
  }

  onDelete(id: any): void {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(id, 1);
    }
  }


  onEdit(index: number) {
    this.editMode = true;
    this.editIndex = index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;


  }
}