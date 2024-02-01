import { Component } from '@angular/core';

@Component({
  selector: 'app-unicode-and-internationalization',
  templateUrl: './unicode-and-internationalization.component.html',
  styleUrls: ['./unicode-and-internationalization.component.css']
})
export class UnicodeAndInternationalizationComponent {
  string_formatting = `
  name = "小明"
  formatted = f"Hello, {name}!"
      `;
}
