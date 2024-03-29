import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {
  @Input() showCancel = true;
  @Input() mode = 'add';
  @Input() content: string;

  @Output() actionEvent = new EventEmitter();

  replyForm!: FormGroup;

  isButtonEnabled = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log('conent came', this.content);
    this.initializeFormFields();
  }

  initializeFormFields() {
    this.replyForm = this.formBuilder.group({
      replyContent: ['', Validators.required]
    });
    this.replyForm.valueChanges.subscribe(val => {
      this.isButtonEnabled = this.validateForm();
    });
  }

  validateForm() {
    if (this.replyForm.status === 'VALID') {
      return true;
    } else {
      return false;
    }
  }

  isFieldValid(field) {
    let valueNoWhiteSpace = this.replyForm.get(field).value;
    if (valueNoWhiteSpace) {
      const length = valueNoWhiteSpace.length;
      if (length >= 2 && valueNoWhiteSpace.charAt(length - 2) === " ") {
        this.replyForm.patchValue({ replyContent: this.replyForm.get(field).value.trim() });
      } else {
        this.replyForm.patchValue({ replyContent: this.replyForm.get(field).value.trimStart() })
      }
  }
    return !this.replyForm.get(field).valid && this.replyForm.get(field).dirty;
  }

  onReplyClick(mode: string) {
    // tslint:disable-next-line:no-string-literal
    this.actionEvent.emit({action: mode, content: this.replyForm.controls['replyContent'].value.trim()});
  }

  onCancelClick() {
    this.actionEvent.emit({action: 'cancel'});
  }

}
