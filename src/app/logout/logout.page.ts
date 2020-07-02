import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  public RegisterForm: FormGroup;

  constructor(
    public router: Router,
  ) { }


logout() {

  this.router.navigate(['login']);
}

  ngOnInit() {
  }

}
