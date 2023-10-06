import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-syntax',
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.css']
})
export class BasicSyntaxComponent {
  basic_syntax= `
  # This is a comment
  num1 = 10           # An integer variable
  num2 = 3.14         # A float variable
  name = "John"       # A string variable
  is_student = True   # A boolean variable
            
  # Arithmetic operations
  sum_result = num1 + num2
  product_result = num1 * num2
    
  # Displaying output
  print("Hello,", name)
  print("Sum:", sum_result)
  print("Product:", product_result)
            
  # Getting user input
  age = input("Enter your age: ")
  print("You are", age, "years old.")`;
}
