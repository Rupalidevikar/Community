import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  goBack() {
    this.router.navigate(['./tabs/tab4']);
  }
  ngOnInit() {
  }

}
