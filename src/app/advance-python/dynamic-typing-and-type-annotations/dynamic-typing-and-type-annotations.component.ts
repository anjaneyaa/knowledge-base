import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-typing-and-type-annotations',
  templateUrl: './dynamic-typing-and-type-annotations.component.html',
  styleUrls: ['./dynamic-typing-and-type-annotations.component.css']
})
export class DynamicTypingAndTypeAnnotationsComponent {
  union_optional = `
  from typing import Union, Optional
  
  def greet(name: Union[str, None]) -&gt; str:
      if name is None:
          return "Hello, guest!"
      else:
          return f"Hello, {name}!"
      `;
}
