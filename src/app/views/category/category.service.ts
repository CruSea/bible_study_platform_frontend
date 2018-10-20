import {AuthService} from "../../auth.service";
import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';


// import {Category} from "../category.interface";
import {HttpService} from "../../http.service";
import {Observable} from "rxjs/observable";

@Injectable()
  export class CategoryService {
  
  constructor(private http: HttpService, private authservice: AuthService) { }

  public getcategories() {
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('category' + '?token=' + token);
  }
  
  public getcategoryview(id) {
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('category/'+ id + '?token=' + token);
  }
}
