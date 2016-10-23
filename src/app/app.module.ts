import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';

/** Application components. */
import { AppComponent } from './app.component';

import { SeasonComponent } from './season/season.component';
import { SeasonSearchComponent } from './season/season-search/season-search.component';
import { SeasonListComponent } from './season/season-list/season-list.component';

import { RaceComponent } from './races/race.component';
import { RaceListComponent } from './races/race-list/race-list.component';
import { DriverComponent } from './drivers/driver.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';

import { AboutComponent } from './about/about.component';
import { PersonComponent } from './user/person/person.component';
import { UserGroupsComponent } from './user/user-groups/user-groups.component';

import { FormComponent } from './validation/form.component';
import { TemplateDrivenComponent } from './validation/template-driven/template-driven.component';
import { ModelDrivenComponent } from './validation/model-driven/model-driven.component';

import { ScotchComponent } from './scotch/scotch.component';
import { SimpleFormComponent } from './scotch/simple-form/simple-form.component';
import { ComplexFormComponent } from './scotch/complex-form/complex-form.component';
import { FormValidationComponent } from './scotch/form-validation/form-validation.component';
import { LoginFormComponent } from './scotch/login-form/login-form.component';
import { MashitPipe } from './pipes/mashit.pipe';
import { ZepasMasterComponent } from './vsv/zepas-master/zepas-master.component';
import { VsvComponent } from './vsv/vsv.component';

// Validations
/*
import { ValidationResult } from './validators/validation-result.d';
import { DateValidator } from './validators/date.validator';
*/

@NgModule({
  declarations: [
    AppComponent,
    SeasonSearchComponent,
    SeasonListComponent,
    SeasonComponent,
    AboutComponent,
    PersonComponent,
    UserGroupsComponent,
    RaceComponent,
    RaceListComponent,
    RaceComponent,
    DriverComponent,
    DriverListComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    FormComponent,
    ScotchComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationComponent,
    LoginFormComponent,
    MashitPipe,
    ZepasMasterComponent,
    VsvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
