import {AuthService} from "../../auth.service";
import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';
// import {Category} from "../category.interface";
import {HttpService} from "../../http.service";
import {Observable} from "rxjs/observable";
import { NgForm } from "@angular/forms/src/directives/ng_form";
import {BibleStudy} from "./bible_study.interface";

@Injectable()
  export class BibleStudyService {

  constructor(private http: HttpService, private authservice: AuthService) { }

  public getBibleStudies() {

    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('biblestudies/'  + '?token=' + token);
  }


 public addbible(bs_id: number, aim: string, title: string, term: string, verse: string,
  further: string, question: string, category: number,
  tag: string, remark: string, year: number)
 {
     const token = this.authservice.getUserToken();
       return this.http.sendPostRequest('bs?token=' + token, {bs_id: bs_id, aim: aim, title: title, term:term, category:category,
        year: year, verse:verse, further:further,
        question: question, tag:tag, remark:remark} ,
        { headers : new HttpHeaders ({'Content-Type': 'application/json' }) });
 }

 public addStudy(bs: BibleStudy){
   const new_header = new Headers();
   return this.http.sendPostRequest('bs', bs, new_header );
 }


  public filterbs(form: NgForm) {
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('category/' + '?token=' + token);
  }
}
