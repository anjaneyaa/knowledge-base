import { Component } from '@angular/core';

@Component({
    selector: 'app-control-structures',
    templateUrl: './control-structures.component.html',
    styleUrls: ['./control-structures.component.css']
})
export class ControlStructuresComponent {
    conditional_statement = `
if condition1:
    # Code to execute if condition1 is True
elif condition2:
    # Code to execute if condition2 is True
else:
    # Code to execute if none of the conditions are True`;
    for_loop = `
for item in sequence:
    # Code to execute for each item in the sequence
`;
while_loop = `
while condition:
    # Code to execute while the condition is True
`;
break = `
for item in sequence:
    if condition:
        break
`;
continue = `
for item in sequence:
    if condition:
        continue
`;
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
