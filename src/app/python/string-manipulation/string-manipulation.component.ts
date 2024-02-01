import { Component } from '@angular/core';

@Component({
  selector: 'app-string-manipulation',
  templateUrl: './string-manipulation.component.html',
  styleUrls: ['./string-manipulation.component.css']
})
export class StringManipulationComponent {

  formatted_strings = `name = "Alice"
  age = 30
  message = "My name is {} and I am {} years old.".format(name, age)`;
  string_formatting = `name = "Alice"
  age = 30
  message = f"My name is {name} and I am {age} years old."`;

}
