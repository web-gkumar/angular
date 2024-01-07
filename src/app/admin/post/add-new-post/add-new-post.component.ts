import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CrudService } from 'src/app/shared/services/blog-crud.service';


@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {

  pageForm!:FormGroup;
  collectionName = 'POSTS';
  htmlContent = '';
  pannerResponseData:any = [];
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(private formBuilder: FormBuilder,private crudService: CrudService,) {
    this.pageForm = this.formBuilder.group({
      title: ['', Validators.required],
      textEditor: ['']
    })
  }

  ngOnInit(): void {
  }

  public(){
    if(this.pageForm) {
      this.pageForm.value.push(this.pannerResponseData);
    }
    this.crudService.createPost(this.pageForm.value, this.collectionName);
  }


  pannelResponse(response:any) {
    if(response) {
      let pannerData = [
        response
      ];
      this.pannerResponseData.push(pannerData);
    }else {
      this.pannerResponseData = [];
    }
  }




}
