import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.page.html',
  styleUrls: ['./help-page.page.scss'],
})
export class HelpPagePage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  goBack() {
    this.router.navigate(['./tabs/tab4']);
  }

  ngOnInit() {
  }

}
