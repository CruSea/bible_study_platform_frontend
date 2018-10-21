import { Component, OnInit } from '@angular/core';
import { BibleStudyService } from './bible_study.service';

@Component({
 
  templateUrl: './bible-study.component.html',
})
export class BibleStudyComponent implements OnInit {

  constructor(private biblestudyservice: BibleStudyService) { }

  ngOnInit() {
    this.biblestudyservice.getBibleStudies().subscribe( res => {
    
     console.log(res);

    } );
  }
  
  public GetBiblestudies() {
    this.biblestudyservice.getBibleStudies();
    
    

}}
