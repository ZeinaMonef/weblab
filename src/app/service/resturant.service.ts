import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

export interface restaurantResponse{
   restaurant_id :number
   name:string
   location :string
   cuisine_type:string
   opening_hours:string
   contact_number:string
   manager_name:string
   established_date:Date
   rating:number
   is_vegetarian:Boolean
   website_url:string

}
//  export  interface resturantresponsetype{
//   status:number,
//   resturants:restaurantResponse[],
//  }
@Injectable({
  providedIn: 'root'
})
export class ResturantService {

  constructor(private httpclient:HttpClient) { }

  getresturantlist():Observable<any>{
    return this.httpclient.get('http://localhost');
  }
}
