import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private router: Router,
  ) {}

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
// segmentChanged(ev: any) {
//     console.log('Segment changed', ev);

}
