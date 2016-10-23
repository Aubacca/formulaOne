import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SeasonComponent } from './season/season.component';
import { RaceComponent } from './races/race.component';
import { DriverComponent } from './drivers/driver.component';

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

// VSV
import { VsvComponent } from './vsv/vsv.component';
import { ZepasMasterComponent } from './vsv/zepas-master/zepas-master.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'user/person', component: PersonComponent },
  { path: 'user/userGroup', component: UserGroupsComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'race', component: RaceComponent },
  { path: 'race/:season', component: RaceComponent, data: {title: 'Heroes List'} },
  { path: 'driver', component: DriverComponent },
  { path: 'driver/:season', component: DriverComponent },
  { path: 'validation', component: FormComponent,
    children: [
      { path: '', redirectTo: 'templateDriven', pathMatch: 'full' },
      { path: 'templateDriven', component: TemplateDrivenComponent },
      { path: 'moduleDriven', component: ModelDrivenComponent }
    ]
  },
  { path: 'scotch', component: ScotchComponent,
    children: [
      { path: '', redirectTo: 'templateDrivenForm', pathMatch: 'full' },
      { path: 'templateDrivenForm', component: SimpleFormComponent },
      { path: 'complexForm', component: ComplexFormComponent },
      { path: 'moduleDrivenForm', component: FormValidationComponent },
      { path: 'loginForm', component: LoginFormComponent }
    ]
  },
  { path: 'vsv', component: VsvComponent,
    children: [
      { path: '', redirectTo: 'zepasMaster', pathMatch: 'full' },
      { path: 'zepasMaster', component: ZepasMasterComponent }
    ]
  },
  { path: '', component: AboutComponent },
  { path: '**', component: AboutComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
