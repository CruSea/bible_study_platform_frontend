import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/views/category/category.service';

@Component({
  
  templateUrl: './category-view.component.html',
 
})
export class CategoryViewComponent implements OnInit {
public id:number;
  constructor(
    // private categoryservice: CategoryService
  ) { }
  
    ngOnInit() {
  
      // this.categoryservice.getcategoryview(this.id).subscribe(
      //   data => { 
            
           
          // });
    }

} 
