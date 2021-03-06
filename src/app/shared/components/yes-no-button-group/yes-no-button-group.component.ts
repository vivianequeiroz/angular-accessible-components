import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() disabled = false;
  @Input() public value: string = null;
  @Input() public label = '';
  // at the template the two way data binding only occurs because the input and output properties have the same name "value", in which the suffix of the output one add the "Change" word
  @Output() public valueChange = new EventEmitter<string>();
  
  public id: string = null;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {}
  public onTouched = () => {}

  constructor( uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
   }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn:() => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.writeValue(value);
  }

  imprimirPagina() {
    const contentToPrint = document.getElementById("impressao")
    const windowFormat = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    windowFormat.document.write(contentToPrint.innerHTML);
    windowFormat.document.close();
    windowFormat.focus();
    windowFormat.print();
    windowFormat.close();
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
// an enum can't be accesible directly by the component, so a property should be created to it
