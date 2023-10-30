import { Component } from '@angular/core';
import { ResturantService, restaurantResponse } from '../service/resturant.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent {
  constructor(private  resturantservice :ResturantService){}

  restaurant!:restaurantResponse[];

  ngOnInit():void{
    this.getresturantlist();
  }
  getresturantlist(){
    this.resturantservice.getresturantlist().subscribe(
      (res)=>{
      console.log(res);
      this.restaurant=res
    },


    );
  }
}
