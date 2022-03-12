import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  public model: any = {};
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
