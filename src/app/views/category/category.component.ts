import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/views/category/category.service';

@Component({
  
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {

  constructor(
    // private categoryservice: CategoryService
  ) { }

  ngOnInit() {

    // this.categoryservice.getCategory().subscribe(
    //   data => {
          
         
    //     });
  }


}
