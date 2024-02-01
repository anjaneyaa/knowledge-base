import { Component } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent {
  greet_decorator = `
  def greet_decorator(greeting):
      def decorator(func):
          def wrapper():
              print(f"{greeting}, something is happening before the function is called.")
              func()
              print(f"{greeting}, something is happening after the function is called.")
          return wrapper
      return decorator
  
  @greet_decorator("Hi")
  @my_decorator
  def say_hello():
      print("Hello, world!")
  
  say_hello()`;
}
