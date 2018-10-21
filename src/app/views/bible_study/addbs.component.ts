import { Component, OnInit } from '@angular/core';
import { BibleStudyService } from 'app/views/bible_study/bible_study.service';

import {NgForm} from "@angular/forms";

import swal from "sweetalert2";
import { BibleStudy } from 'app/views/bible_study/bible_study.interface';
@Component({

  templateUrl: './addbs.component.html',

})
export class AddbsComponent implements OnInit {

  private biblestudy = new BibleStudy();

  constructor(private bibleservice: BibleStudyService) {
    this.biblestudy = new BibleStudy();
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.biblestudy);

    this.bibleservice.addStudy(this.biblestudy).subscribe(
      data => {
        console.log(data);
      }, error =>{

      }
    );

      //   swal('Article Posted','you can edit it in all articles list','success')
      //   // this.articles.body = form.value.body;
      //   // this.articles.title = form.value.title;
      //   this.bibleservice.addbible(form.value.title,
      //     form.value.bs_id,
      //     form.value.aim,
      //      form.value.term,
      //       form.value.category,
      //       form.value.year,
      //        form.value.verse,
      //         form.value.further,
      //         form.value.question,
      //          form.value.tag,
      //     form.value.remark).subscribe(
      //     data => {

      //     });
      //   form.reset();
      //

    }

}
