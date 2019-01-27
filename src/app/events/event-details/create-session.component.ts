import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from './shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: []
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();

  sessionFormGroup: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  abstract: FormControl;
  level: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.sessionFormGroup = new FormGroup(
      {
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract
      }
    );
  }

  saveSession(formValues) {
    const session: ISession = {
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      id: 1,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
