import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let fixture: ComponentFixture<AdminComponent>;
  let component=new AdminComponent();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AdminComponent ],

    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('set',()=>{

  })*/
  it('Tab Show Function',()=>{
    const component=new AdminComponent();
    expect(component.adminTabShow.department).toBe(false,'before any start');
      component.showTab('department');
      expect(component.adminTabShow.department).toBe(true,'after show tab called by dept');
      component.showTab('skill');
      expect(component.adminTabShow.skill).toBe(true,'bad test');
  })
});
