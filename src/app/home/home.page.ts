import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selectForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    private router: Router,
  ) {
      this.selectForm = formBuilder.group
    ({

    });

   }

   communitySide() {
    this.router.navigate(['comregistration']);
  }

  userSide() {
    this.router.navigate(['user-registration']);
  }

  adminSide() {
    this.router.navigate(['admin-register']);
  }

  ngOnInit() {
  }

}
