import { Component } from '@angular/core';

@Component({
  selector: 'app-advance-python',
  templateUrl: './advance-python.component.html',
  styleUrls: ['./advance-python.component.css']
})
export class AdvancePythonComponent {

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

  my_meta = `
  class MyMeta(type):
      def __new__(cls, name, bases, attrs):
          # Modify attributes before creating the class
          modified_attrs = {...}  # Modify attrs as needed
          return super().__new__(cls, name, bases, modified_attrs)
      `;

      uppercase_attrs = `
      class UppercaseAttributesMeta(type):
          def __new__(cls, name, bases, attrs):
              uppercase_attrs = {key.upper(): value for key, value in attrs.items()}
              return super().__new__(cls, name, bases, uppercase_attrs)
      
      class MyClass(metaclass=UppercaseAttributesMeta):
          name = "Alice"
          age = 30
      
      print(MyClass.NAME);  // Output: "Alice"
      print(MyClass.AGE);   // Output: 30
      `;

      print_numbers = `
      import threading
      
      def print_numbers():
          for i in range(1, 6):
              print(f"Number: {i}")
              
      def print_letters():
          for letter in 'abcde':
              print(f"Letter: {letter}")
              
      thread1 = threading.Thread(target=print_numbers)
      thread2 = threading.Thread(target=print_letters)
      
      thread1.start()
      thread2.start()
      
      thread1.join()
      thread2.join()
      `;
      asyncio = `import asyncio

      async def print_numbers():
          for i in range(1, 6):
              print(f"Number: {i}")
              await asyncio.sleep(1)
              
      async def print_letters():
          for letter in 'abcde':
              print(f"Letter: {letter}")
              await asyncio.sleep(0.5)
      
      loop = asyncio.get_event_loop()
      loop.run_until_complete(asyncio.gather(print_numbers(), print_letters()))
      loop.close()
      `;

      multiprocessing = `
      import multiprocessing
      
      def calculate_square(number):
          print(f"Square: {number * number}")
          
      def calculate_cube(number):
          print(f"Cube: {number * number * number}")
          
      if __name__ == '__main__':
          number = 3
          process1 = multiprocessing.Process(target=calculate_square, args=(number,))
          process2 = multiprocessing.Process(target=calculate_cube, args=(number,))
          
          process1.start()
          process2.start()
          
          process1.join()
          process2.join()
      `;
      union_optional = `
      from typing import Union, Optional
      
      def greet(name: Union[str, None]) -&gt; str:
          if name is None:
              return "Hello, guest!"
          else:
              return f"Hello, {name}!"
          `;
          string_formatting = `
          name = "小明"
          formatted = f"Hello, {name}!"
              `;

}
