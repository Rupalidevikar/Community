import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-h2',
  templateUrl: './h2.page.html',
  styleUrls: ['./h2.page.scss'],
})
export class H2Page implements OnInit {
  public RegisterForm: FormGroup;


  constructor(
    public formbuilder: FormBuilder,
    public router: Router,

  ) {
    this.RegisterForm = formbuilder.group({

    });
  }

  onNext() {
    this.router.navigate(['h3']);
  }

  back() {
    this.router.navigate(['h1']);
  }

  ngOnInit() {
  }

}
