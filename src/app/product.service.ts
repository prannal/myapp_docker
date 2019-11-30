import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://192.168.2.34:9898/product'

  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get(this.url)
  }

}
