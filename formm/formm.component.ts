import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormArray,  FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formm',
  templateUrl: './formm.component.html',
  styleUrls: ['./formm.component.css']
})
export class FormmComponent implements OnInit {
data: boolean=false;
arr:Array<number>=new Array<number>();
no:number;
req:Array<string>;

sub()
{
  this.data=true;
  for(var j=0;j<this.no;j++)
  {
    this.arr.push(j);
  }
  this.req=new Array<string>(this.no);
}
  constructor() { }

  ngOnInit() {
  }



}
