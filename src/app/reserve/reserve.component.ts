import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {
//   conditional_statement = `
//   if condition1:
//   # Code to execute if condition1 is True
//   elif condition2:
//   # Code to execute if condition2 is True
//   else:
//   # Code to execute if none of the conditions are True`;

//   control_statement = `
// # Conditional Statements
// x = 10
// if x > 0:
//     print("x is positive")
// elif x == 0:
//     print("x is zero")
// else:
//     print("x is negative")

// # For Loop
// numbers = [1, 2, 3, 4, 5]
// sum = 0
// for num in numbers:
//     sum += num
// print("Sum:", sum)

// # While Loop
// count = 0
// while count < 5:
//     print("Count:", count)
//     count += 1

// # Break and Continue
// for i in range(10):
//     if i == 3:
//         break
//     if i % 2 == 0:
//         continue
//     print(i)
// `;

//   users = `users = {
//   'user1': {'name': 'Alice', 'age': 25},
//   'user2': {'name': 'Bob', 'age': 30}
//   }
//   age = users['user1']['age']`;
//   n_occurrences = `{n}`;

//   n_and_m_occurrences = `{n, m}`;

  my_set = `my_set = {1, 2, 3}`;
//   my_sets = `
//   my_set = {1, 2, 3}
//   my_set.add(4)
//   my_set.remove(2)`;

//   frozenset = `
// my_set = {1, 2, 3}
// my_frozenset = frozenset(my_set)
//   `;

  my_dict = `my_dict = {'name': 'Alice', 'age': 25}`;
//   my_dicts = `
//   my_dict = {'name': 'Alice', 'age': 25}
//   my_dict['city'] = 'New York'
//   age = my_dict['age']
//   `;

//   formatted_strings = `name = "Alice"
//   age = 30
//   message = "My name is {} and I am {} years old.".format(name, age)`;
//   string_formatting = `name = "Alice"
//   age = 30
//   message = f"My name is {name} and I am {age} years old."`;
//   class_Person = `class Person:
//   def __init__(self, name, age):
//       self.name = name
//       self.age = age
  
//   def greet(self):
//       return f"Hello, my name is {self.name} and I am {self.age} years old."`;

//   my_module = `# my_module.py
//       def greet(name):
//       return f"Hello, {name}!"
      
//       def add(a, b):
//       return a + b`;

//   pattern = `pattern = r"(\d{3})-(\d{2})"
//       text = "123-45"
//       match = re.search(pattern, text)
//       if match:
//       area_code = match.group(1)
//       local_code = match.group(2)`;
//   sets = `set1 = {1, 2, 3}
//       set2 = {3, 4, 5}
      
//       union = set1 | set2
//       intersection = set1 & set2
//       difference = set1 - set2`;
//   open_weather_map = `
//       import requests

// API_KEY = "your_api_key"
// city = "New York"
// url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"

// response = requests.get(url)
// data = response.json()

// if response.status_code == 200:
// weather = data['weather'][0]['description']
// temperature = data['main']['temp']
// print(f"Weather in {city}: {weather}")
// print(f"Temperature: {temperature} K")
// else:
// print("Error:", data['message'])
//       `;
//   threading = `
//       import threading

// def print_numbers():
// for i in range(1, 6):
//     print(f"Number: {i}")

// def print_letters():
// for letter in 'abcde':
//     print(f"Letter: {letter}")

// thread1 = threading.Thread(target=print_numbers)
// thread2 = threading.Thread(target=print_letters)

// thread1.start()
// thread2.start()

// thread1.join()
// thread2.join()
//       `;
//   asyncio = `
//       import asyncio

//       async def print_numbers():
//       for i in range(1, 6):
//           print(f"Number: {i}")
//           await asyncio.sleep(1)
      
//       async def print_letters():
//       for letter in 'abcde':
//           print(f"Letter: {letter}")
//           await asyncio.sleep(0.5)
      
//       loop = asyncio.get_event_loop()
//       loop.run_until_complete(asyncio.gather(print_numbers(), print_letters()))
//       loop.close()`;
//   multiprocessing = `import multiprocessing

//       def calculate_square(number):
//       print(f"Square: {number * number}")
      
//       def calculate_cube(number):
//       print(f"Cube: {number * number * number}")
      
//       if __name__ == '__main__':
//       number = 3
//       process1 = multiprocessing.Process(target=calculate_square, args=(number,))
//       process2 = multiprocessing.Process(target=calculate_cube, args=(number,))
      
//       process1.start()
//       process2.start()
      
//       process1.join()
//       process2.join()
//       `;
//   data_analysis = `
//       import numpy as np
//       import pandas as pd
      
//       # Create a DataFrame
//       data = {'Name': ['Alice', 'Bob', 'Charlie'],
//           'Age': [25, 30, 28]}
//       df = pd.DataFrame(data)
      
//       # Perform operations on the DataFrame
//       average_age = df['Age'].mean()
//       `;

}
