import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {FormlyModule} from '@ngx-formly/core';
// import {FormlyMaterialModule} from '@ngx-formly/material';


import { FormsDemoComponent } from './forms-demo.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // MaterialModule,
    // FormlyModule.forRoot(),
    // FormlyMaterialModule
  ],
  declarations: [
    FormsDemoComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    DynamicFormComponent
]
})
export class FormsDemoModule { }
