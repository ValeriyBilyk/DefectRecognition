import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos() {

    return this.http.get(`${BASE_URL}/photo`, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }
}
