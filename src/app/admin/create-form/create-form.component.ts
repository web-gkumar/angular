import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDropList, CdkDragPreview, CdkDrag, CdkDragPlaceholder, } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  iconFields = [
    { dndName: 'Text', dndIcon: 'text_fields', dndTemp: false, type: 'input',
      templateOptions: { type: 'text', label: 'Text Label', required: true}
    },
    { dndName: 'Number', dndTemp: false, dndIcon: 'numbers', type: 'input',
      templateOptions: { type: 'number', label: 'Number Label', required: true }
    },
    { dndName: 'DatePicker', dndTemp: false, dndIcon: 'today', type: 'datepicker',
      templateOptions: { label: 'Date Picker Label', required: true}
    },
    { dndName: 'Radio', dndTemp: false, dndIcon: 'radio_button_checked', type: 'radio',
      templateOptions: { label: 'Radio Label', required: true,
        options: [{ label: 'Option 1...', value: 1 }],
      },
    },
    { dndName: 'Group', dndIcon: 'list_alt', dndTemp: false,
      fieldGroup: [],
      templateOptions: { label: 'Group Label'},
    },
    { dndName: 'Checkbox', dndIcon: 'check_box', dndTemp: false, type: 'checkbox', defaultValue: false,
      templateOptions: { label: 'Checkbox Label', required: true},
    }

  ];



  formList = [
    { dndName: 'Text', dndIcon: 'text_fields', dndTemp: false, type: 'input',
      templateOptions: { type: 'text', label: 'Text Label', required: true}
    },
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


}
