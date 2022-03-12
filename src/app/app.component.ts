import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

export class UserSettingsModel {

  constructor(

  ) { }

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  public model: UserSettingsModel = new UserSettingsModel();
  public baseline: string | null = null;
  public baselineSet = true;
  public userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.userForm = this.formBuilder.group({
      age: [
        10,
        Validators.compose([

          Validators.max(100),
          Validators.maxLength(3),
          Validators.min(0),
          Validators.required,
        ])
      ],
    });




  }



}
