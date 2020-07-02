import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {
  public RegisterForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
  ) {
    this.RegisterForm = formBuilder.group
    ({

    });
  }

  onNext() {
    this.router.navigate(['ur1']);
  }

  ngOnInit() {
  }

}
