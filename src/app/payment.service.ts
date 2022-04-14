import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  orderApi = 'http://localhost:3000/order';
  constructor(private http: HttpClient) { }
  public createOrder(amount:any){
   return this.http.post<any>(this.orderApi,{amount});
  }
}
