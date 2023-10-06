import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-code-template',
  templateUrl: './code-template.component.html',
  styleUrls: ['./code-template.component.css']
})
export class CodeTemplateComponent {

  @Input() formInputText: string = '';
  copy_button : string = "Copy";
  constructor(
    private clipboardApi: ClipboardService
  ) { }
  
  copyText(element: Event) {
    this.clipboardApi.copyFromContent(this.formInputText)
    this.copy_button = "Copied"
    setTimeout(() => {
      this.copy_button = "Copy";
    }, 2000);
  }

  
}
