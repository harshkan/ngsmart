import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
//import { DobComponent } from './dob/dob.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormmComponent } from './formm/formm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebStorageModule } from 'ngx-store';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AdminComponent,
    FormmComponent,

  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    Ng2AutoCompleteModule,
    HttpClientModule,

    OwlDateTimeModule, OwlNativeDateTimeModule,BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,
    WebStorageModule


  ],
  providers: [],
  bootstrap: [AppComponent,],
  /*entryComponents: [
      new DobComponent
    ]*/
})
export class AppModule { }
