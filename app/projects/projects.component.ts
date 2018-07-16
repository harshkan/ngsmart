import { ViewChild,Component, OnInit } from '@angular/core';
import { ModalService } from 'angular-5-popup';
import { ModalComponent } from 'angular-5-popup';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   @ViewChild("modal") modal: ModalComponent;
   constructor(
     private ms:ModalService
   ){

   }
   openModal(id){
     this.modal.openModal(id);
   }

   closeModal(id){
     this.modal.closeModal(id);
   }



  ngOnInit() {
  }

}
