import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comregistration',
  templateUrl: './comregistration.page.html',
  styleUrls: ['./comregistration.page.scss'],
})
export class ComregistrationPage implements OnInit {

  public RegisterForm: FormGroup;
  passwordshow: false;
  // tslint:disable-next-line: ban-types
  passwordicon: String;
  // tslint:disable-next-line: ban-types
  password: String = 'password';
  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
  ) {
      this.RegisterForm = formBuilder.group
    ({
      email: new FormControl('', Validators.compose
      ([Validators.required,
      Validators.pattern('^.+@.+\\..+$')
      ])),

      password: ['', [Validators.required, Validators.minLength(8)]],

    });

   }

  hideshowpassword() {

    this.password = this.password === 'password' ? 'text' : 'password';

    this.passwordicon = this.passwordicon === 'eye' ? 'eye-off' : 'eye';

  }


  onNext() {

    this.router.navigate(['h1']);

  }

  ngOnInit() {
  }

}
