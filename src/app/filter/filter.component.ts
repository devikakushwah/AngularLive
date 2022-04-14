import { Component, OnInit } from '@angular/core';
import {toArray,filter} from 'rxjs/operators';
import {from} from 'rxjs';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data:any;
  data2:any;
  data3:any;
  dataArr =[
   {id:1,name:'ayush',gender:'male'},
   {id:2,name:'akash',gender:'male'},
   {id:3,name:'divya',gender:'female'},
   {id:4,name:'harish',gender:'male'},
   {id:5,name:'ayusshi',gender:'female'},
   {id:6,name:'nandani',gender:'female'},
   {id:7,name:'devika',gender:'female'},
   {id:8,name:'kavita',gender:'female'},
   {id:9,name:'sapna',gender:'female'},
  ]
  
  constructor() { }

  ngOnInit(): void {
    const source  = from(this.dataArr)

    //filter by length
    source.pipe(
      filter(member => member.name.length>7),
      toArray()).subscribe(res=>{
      console.log(res);
      this.data = res;
    })
    //gender
    source.pipe(
      filter(member => member.gender=='female'),
      toArray()).subscribe(res=>{
      console.log(res);
      this.data2 = res;
    })
    source.pipe(
      filter(member => member.id <=5),
      toArray()).subscribe(res=>{
      console.log(res);
      this.data3 = res;
    })


  }


}
