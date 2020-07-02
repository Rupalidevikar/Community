import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  public createForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
  ) {

    this.createForm = formbuilder.group({

    });
  }

  ngOnInit() {
  }
  create() {

  }

}
