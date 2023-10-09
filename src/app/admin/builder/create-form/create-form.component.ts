import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDropList, CdkDragPreview, CdkDrag, CdkDragPlaceholder, } from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  formlist!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  iconFields = [
    { dndIcon: 'text_fields', type: 'text'},
    { dndIcon: 'numbers', type: 'number'},
    { dndIcon: 'today', type: 'date'},
    { dndIcon: 'radio_button_checked', type: 'radio'},
    { dndIcon: 'keyboard_double_arrow_down', type: 'dropdown'},
    { dndIcon: 'check_box', type: 'checkbox'},
    { dndIcon: 'sms', type: 'textarea'},
    { dndIcon: 'label', type: 'label'}
  ];

  formList:any = [
    { dndIcon: 'text_fields', type: 'text'},
  ];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  openDialog() {
    
  }


}
