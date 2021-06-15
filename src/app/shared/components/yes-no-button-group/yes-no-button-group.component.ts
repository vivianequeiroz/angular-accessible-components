import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input() public value: string = null;
  @Input() public label = '';
  public options = YesNoButtonGroupOptions;
  
  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.value = value;
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
