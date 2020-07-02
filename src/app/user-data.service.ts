import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // tslint:disable-next-line: ban-types
  url: String;
  data: any;

  constructor(
    private httpClient: HttpClient) {

    this.url = 'http://192.168.43.153:5000/api/auth/user/login_first_step ';

  }


  sendTheCode(userdata) {
    console.log(userdata);
    // tslint:disable-next-line: no-string-literal
    return this.httpClient.post(`${this.url}` , userdata);
  }

  // loginStudent(data) {
  //   return this.http.post(
  //     this.url + 'onregister', data);
  // }


}
