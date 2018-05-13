import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos() {

    return this.http.get(`${BASE_URL}/photo/`, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }

  postPhoto(photo) {

    return this.http.post(`${BASE_URL}/photo/`, photo, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }

  deletePhoto(photoId) {

    return this.http.request('delete', `${BASE_URL}/photo/`, {body: {photo_id: photoId}, headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a').set('Content-Type', 'application/x-www-form-urlencoded')});
  }
}
