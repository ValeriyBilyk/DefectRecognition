import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos(analyzed = 'false') {

    return this.http.get(`${BASE_URL}/photo?analyzed=${analyzed}`, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }

  postPhoto(photo) {

    return this.http.post(`${BASE_URL}/photo/`, photo, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }

  deletePhoto(photoId) {

    return this.http.delete(`${BASE_URL}/photo?photo_id=${photoId}`, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }

  analyzePhoto(photoId) {

    return this.http.post(`${BASE_URL}/analyze/`,{'photo_id': photoId}, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }

  analyzeAllPhotos() {

    return this.http.post(`${BASE_URL}/analyze/`,{all: 1}, {headers: new HttpHeaders().set('Authorization', 'Token ed129f08ea2ad2c26cc7ef729a15ae667c41309a')});
  }
}
