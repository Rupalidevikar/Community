import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  // tslint:disable-next-line: ban-types
  // password: String = 'password';
  // passwordShow = false;
  // // tslint:disable-next-line: ban-types
  // passwordIcon: String;

  constructor(
    private platform: Platform,
    private router: Router,
    private toastController: ToastController,
    private userService: UserDataService,
    formbuilder: FormBuilder,
  ) {

    const storedEmail = localStorage.getItem('email');

    if (storedEmail !== undefined && storedEmail !== null) {
      this.router.navigate(['tabs']);
    }

    this.loginForm = formbuilder.group
      ({
        email: new FormControl('', Validators.compose
          ([

            Validators.required,
            Validators.pattern('^.+@.+\\..+$')

          ])),

        // password: ['', [Validators.required, Validators.minLength(8)]]
      });

  }

  // hideshowpassword() {

  //   this.password = this.password === 'password' ? 'text' : 'password';

  //   this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';

  // }

  async presentToastWithOptions(message) {
    const toast = await this.toastController.create({
      message,
      position: 'bottom',
      duration: 3000,
      keyboardClose: true,
    });
    toast.present();
  }

  async presentToastWithOptions2(message) {
    const toast = await this.toastController.create({
      message,
      position: 'bottom',
      duration: 3000,
      keyboardClose: true,
      color: 'success'

    });
    toast.present();
  }

  login() {

    if (this.loginForm.valid) {

      const data = {
        "emailid": this.loginForm.value.email
      };
      this.userService.sendTheCode(data).subscribe((result: any) => {
        if (result) {
          console.log(result);
        } else {
          console.log('error occur');
        }
      });
    } else {
      this.presentToastWithOptions('email / password may be wrong please check again');
    }


  }

  ngOnInit() {
  }

}
