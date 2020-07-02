import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.page.html',
  styleUrls: ['./about-app.page.scss'],
})
export class AboutAppPage implements OnInit {

  constructor(
    public router: Router,
  ) { }


  goBack() {
    this.router.navigate(['./tabs/tab4']);
  }

  ngOnInit() {
  }

}
