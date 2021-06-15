import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value: string = null;
  @Input() public label = '';
  // at the template the two way data binding only occurs because the input and output properties have the same name "value", in which the suffix of the output one add the "Change" word
  @Output() public valueChange = new EventEmitter<string>();
  
  public options = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
// an enum can't be accesible directly by the component, so a property should be created to it
