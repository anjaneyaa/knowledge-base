import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-syntax',
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.css']
})
export class BasicSyntaxComponent {
  basic_syntax= 
  `<span class="comment"># This is a comment</span>
  num1 = <span class="number">10</span>           <span class="comment"># An integer variable</span>
  num2 = <span class="number">3.14</span>         <span class="comment"># A float variable</span>
  name = <span class="string">"John"</span>       <span class="comment"># A string variable</span>
  is_student = <span class="litrals">True</span>   <span class="comment"># A boolean variable</span>
  
  <span class="comment"># Arithmetic operations</span>
  sum_result = num1 + num2
  product_result = num1 * num2

  <span class="comment"># Displaying output</span>
  <span class="built-in">print</span>(<span class="string">"Hello,"</span>, name)
  <span class="built-in">print</span>(<span class="string">"Sum:"</span>, sum_result)
  <span class="built-in">print</span>(<span class="string">"Product:"</span>, product_result)
  
  <span class="comment"># Getting user input</span>
  age = <span class="built-in">input</span>(<span class="string">"Enter your age: "</span>)
  <span class="built-in">print</span>(<span class="string">"You are"</span>, age, <span class="string">"years old."</span>)`;
  
  // `
  // # This is a comment
  // num1 = 10           # An integer variable
  // num2 = 3.14         # A float variable
  // name = "John"       # A string variable
  // is_student = True   # A boolean variable
            
  // # Arithmetic operations
  // sum_result = num1 + num2
  // product_result = num1 * num2
    
  // # Displaying output
  // print("Hello,", name)
  // print("Sum:", sum_result)
  // print("Product:", product_result)
            
  // # Getting user input
  // age = input("Enter your age: ")
  // print("You are", age, "years old.")`;


}
