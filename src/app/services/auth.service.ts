import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body) {

    return this.http.post(`${BASE_URL}/login`, body);
  }

  register(body) {

    return this.http.post(`${BASE_URL}/photo/`, body);
  }

}
