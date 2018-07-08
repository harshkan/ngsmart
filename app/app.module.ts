import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { TableComponent,ButtonViewComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormmComponent } from './formm/formm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScModalModule } from 'angular-5-popup';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AdminComponent,
    FormmComponent,
    LoginComponent,
    ProjectsComponent,
    ButtonViewComponent,


  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    Ng2AutoCompleteModule,
    HttpClientModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,
    WebStorageModule,
    ScModalModule,



    NoopAnimationsModule,



  ],
  entryComponents: [ButtonViewComponent,],

  providers: [],
  bootstrap: [AppComponent,],
  /*entryComponents: [
      new DobComponent
    ]*/
})
export class AppModule { }
