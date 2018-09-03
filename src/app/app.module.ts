import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { StateDemoModule } from './state-demo/state-demo.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {FormlyModule} from '@ngx-formly/core';
// //import {FormlyMaterialModule} from '@ngx-formly/material';





import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsDemoModule,
    StateDemoModule,
    SharedModule
    // MaterialModule,
    // FormlyModule.forRoot(),
    // //FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
