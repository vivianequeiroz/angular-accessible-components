import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  public form: FormGroup = null;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null,
        disabled: false
      }]
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }

  imprimirPagina() {
    const contentToPrint = document.getElementById("impressao");
    const windowFormat = window.open();
    windowFormat.document.write(contentToPrint.innerHTML);
    windowFormat.document.close();
    windowFormat.focus();
    windowFormat.print();
    windowFormat.close();
  }

  // imprimirPagina() {
  //   const contentToPrint = document.getElementById("impressao")
  //   const windowFormat = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
  //   windowFormat.document.write(contentToPrint.innerHTML);
  //   windowFormat.document.close();
  //   windowFormat.focus();
  //   windowFormat.print();
  //   windowFormat.close();
  // }
}
