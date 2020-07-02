import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ur1',
  templateUrl: './ur1.page.html',
  styleUrls: ['./ur1.page.scss'],
})
export class UR1Page implements OnInit {

  public RegisterForm: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
  ) { }

 onNext() {
   this.router.navigate(['ur2']);

 }

 back() {
   this.router.navigate(['user-registration']);
 }

  ngOnInit() {
  }

}
