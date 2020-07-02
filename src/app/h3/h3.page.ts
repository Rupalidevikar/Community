import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-h3',
  templateUrl: './h3.page.html',
  styleUrls: ['./h3.page.scss'],
})
export class H3Page implements OnInit {
  public RegisterForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public router: Router,
  ) {

    this.RegisterForm = formbuilder.group({

    });
   }


   Next() {
    this.router.navigate(['create-pass']);
   }

   back() {
     this.router.navigate(['h2']);
   }
  ngOnInit() {
  }

}
