import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import 'rxjs/add/observable/of';
import { DemoService } from '../demo.service';
import {ViewCell} from "ng2-smart-table";
import {FormsModule} from "@angular/forms";
import {ModalComponent, ModalService} from "angular-5-popup";
import {Project} from "../project";

@Component({
  selector: 'button-view',
  template: `
    <button (click)="openModal('modal-1',$event)">Add Project</button>
    <sc-modal id="modal-1" class="default" #modal>
      <div class="modal">
        <div class="modal-header">
          Add Projects
          <button (click)="closeModal('modal-1')">close</button>
        </div>
        <div class="modal-body">
          
            <form #f="ngForm" (ngSubmit)="add()" >
            Project Name: <input type="text" required="please enter" name="ha" [(ngModel)]="project.projectName" /><br>
            Project Id:   <input type="number" required="please enter" name="fh" [(ngModel)]="project.projectId"/><br>
            Percentage Allocated:   <input type="number" required="please" name="fhf" [(ngModel)]="project.percentageAllocated"/> 
            <br>
            <button type="submit" value="reset">Add</button>
            </form>
            {{project|json}}
          
        </div>
      </div>
      <div class="modal-background"></div>
    </sc-modal>


  `,
})


//import { DobComponent } from '../dob/dob.component';
export class ButtonViewComponent implements ViewCell, OnInit {
  @ViewChild("modal") modal: ModalComponent;
  constructor(
    private ms:ModalService
  ){

  }
  openModal(id,event){
    this.modal.openModal(id);
    console.log("event"+this.renderValue);
    this.st=event.data;
  }

  closeModal(id){
    this.modal.closeModal(id);
  }

  st:any=[];
  renderValue: string;
  project:Project=new Project();
  add()
  {
    this.project.requirementId=Number(this.renderValue);
    this.project.updatedBy=14531556;
    console.log(this.project);
    this.project=new Project();
  }

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString();

  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
    providers: [DemoService]
})
export class TableComponent implements OnInit {
  characters: any=[];
  selected: string;
  tdata :any=[];
  settings = {
     noDataMessage: 'Loading... please wait!',
      columns: {
        id: {
          title: 'ID',
          width: '10%',
        },
        button: {
          title: 'Button',
          type: 'custom',
          filter:false,
          renderComponent: ButtonViewComponent,
          onComponentInitFunction(instance) {
            instance.save.subscribe(row => {
              console.log("hi"+row);
            });
          }
        },

        name: {
          title: 'Name',
          width:'10%',
        },
        age: {
          title: 'Age',
            width:'40%',
        },
        brass:{
          title: 'brass',
            width:'40px',
        },

        date:{
          title: 'Date',





},

      },
      defaultStyle: 'false',
      attr:{
        class : 'table table-bordered'
      }
    };

    autocompleListFormatter = (data: any) : SafeHtml => {
       let html = `<span>${data.name}</span>`;
       return this._sanitizer.bypassSecurityTrustHtml(html);
     }
  constructor(public http: Http,private _sanitizer: DomSanitizer,private _demoService:DemoService) {


  }

  ngOnInit() {
   this.characters=[{'id':1,'name':'har','age':20,'brass':'inr4556','date':"22/05/1998",      button: 5,
   },
{'id':2,'name':'hu','age':25,'brass':'pnr4556','date':"22/05/1998",      button: 6,
},
{'id':3,'name':'hnmmr','age':9,'brass':'pnr456','date':"22/05/1998",      button: 4,
},
{'id':4,'name':'opar','age':2,'brass':'ir4556','date':"22/05/1998",      button: 1,
},
{'id':5,'name':'ar','age':220,'brass':'nr4556','date':"22/05/1998",      button: 2,
}  ];
console.log(this.characters);
this.getallrequests();

  }

    /*zobservableSource = (keyword: any): Observable<any[]> => {
  return Observable.of(this.tdata);

}*/
    getallrequests()
{
  this._demoService.getallrequests().subscribe(
    // the first argument is a function which runs on success
    data => { this.tdata = data;
console.log(this.tdata);
  },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('done loading table')
  );
}

}
