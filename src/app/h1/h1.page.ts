import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-h1',
  templateUrl: './h1.page.html',
  styleUrls: ['./h1.page.scss'],
})
export class H1Page implements OnInit {
  public RegisterForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
  ) {
    this.RegisterForm = formbuilder.group({

    });
  }

  onNext() {
    this.router.navigate(['h2']);

  }
  back() {
      this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
