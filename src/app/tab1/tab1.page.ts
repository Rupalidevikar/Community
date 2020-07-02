import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public RegisterForm: FormGroup;

  constructor(
    public router: Router,
  ) {}



  onGoing() {

  }

  accountSetting() {
    // console.log('');
    this.router.navigate(['account-setting']);
  }

  Notifications() {
    this.router.navigate(['manage-notification']);
  }

  Payment() {
    this.router.navigate(['payments']);
  }

  qrCode() {
    this.router.navigate(['qrcodegenerator']);
  }

  Help() {
    this.router.navigate(['help-page']);
  }

  AboutApp() {
    this.router.navigate(['about-app']);
  }

  logout() {
    this.router.navigate(['home']);
  }
  createEventPage() {
    this.router.navigate(['create-event']);
  }


}


