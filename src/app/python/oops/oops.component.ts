import { Component } from '@angular/core';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent {
  class_Person = `class Person:
  def __init__(self, name, age):
      self.name = name
      self.age = age
  
  def greet(self):
      return f"Hello, my name is {self.name} and I am {self.age} years old."`;
}
