import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { DobComponent } from './dob/dob.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AdminComponent,
    DobComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    Ng2AutoCompleteModule,
    HttpClientModule,
    FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent,DobComponent],
  /*entryComponents: [
      new DobComponent
    ]*/
})
export class AppModule { }
