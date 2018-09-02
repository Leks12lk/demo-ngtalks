import { RouterModule } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
		// ReactiveFormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		RouterModule
  ],
  exports:[
		// BrowserModule,
		// HttpClientModule,		
    CommonModule,
    // FormsModule,
		// ReactiveFormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		RouterModule
	],
  //declarations: [SharedComponent]
})
export class SharedModule { }
