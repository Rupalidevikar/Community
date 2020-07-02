import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.page.html',
  styleUrls: ['./create-pass.page.scss'],
})
export class CreatePassPage implements OnInit {
  public RegisterForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public router: Router,
  ) {

    this.RegisterForm = formbuilder.group({

    });
   }




  onRegister() {
    this.router.navigate(['tabs']);
   }

   back() {
     this.router.navigate(['h3']);
   }

  ngOnInit() {
  }

}
