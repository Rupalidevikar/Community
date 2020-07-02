import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-notification',
  templateUrl: './manage-notification.page.html',
  styleUrls: ['./manage-notification.page.scss'],
})
export class ManageNotificationPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  goBack() {
    this.router.navigate(['./tabs/tab4']);
  }
  ngOnInit() {
  }

}
