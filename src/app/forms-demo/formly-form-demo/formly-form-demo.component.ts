import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-form-demo',
  templateUrl: './formly-form-demo.component.html',
  styleUrls: ['./formly-form-demo.component.scss']
})
export class FormlyFormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Name',
      }
    },
  ];

  submit() {
    console.log(this.model);
  }

}
