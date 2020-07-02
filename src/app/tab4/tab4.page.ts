import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private router: Router,
  ) { }

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
  ngOnInit() {
  }

}
