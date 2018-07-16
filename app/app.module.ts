import { BrowserModule } from '@angular/platform-browser';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

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
import {
  SmartTableDatepickerComponent,
  SmartTableDatepickerRenderComponent
} from "./smart-table-datepicker/smart-table-datepicker.component";
import {MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AdminComponent,
    FormmComponent,
    LoginComponent,
    ProjectsComponent,
    ButtonViewComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,


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
    MatTabsModule,
    MatSidenavModule,
    MatProgressBarModule,
    BrowserAnimationsModule,

        CdkTableModule,
        CdkTreeModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,








  ],
  entryComponents: [ButtonViewComponent,SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,],

  providers: [],
  bootstrap: [AppComponent,],
  /*entryComponents: [
      new DobComponent
    ]*/
})
export class AppModule { }
