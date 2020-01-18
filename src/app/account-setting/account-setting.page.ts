import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  goBack() {
    this.router.navigate(['./tabs/tab4']);
  }

  ngOnInit() {
  }

}
