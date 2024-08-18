import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UxServiceService {

  // url1="https://userdata-87a0f-default-rtdb.firebaseio.com/product.json"
   url = "https://products-c5852-default-rtdb.firebaseio.com/product.json"
  constructor(private http: HttpClient) { }

  saveProducts(products: any) {
    // return this.http.post(this.url,products)
    return this.http.post(this.url, products)

  }
  fetchProducts() {
    return this.http.get(this.url)
  }

}
