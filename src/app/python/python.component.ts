import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent {

  conditional_statement = `
  if condition1:
  # Code to execute if condition1 is True
  elif condition2:
  # Code to execute if condition2 is True
  else:
  # Code to execute if none of the conditions are True`;

  control_statement = `
# Conditional Statements
x = 10
if x > 0:
    print("x is positive")
elif x == 0:
    print("x is zero")
else:
    print("x is negative")

# For Loop
numbers = [1, 2, 3, 4, 5]
sum = 0
for num in numbers:
    sum += num
print("Sum:", sum)

# While Loop
count = 0
while count < 5:
    print("Count:", count)
    count += 1

# Break and Continue
for i in range(10):
    if i == 3:
        break
    if i % 2 == 0:
        continue
    print(i)
`;



}
