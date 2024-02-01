import { Component } from '@angular/core';

@Component({
  selector: 'app-concurrency-and-multithreading',
  templateUrl: './concurrency-and-multithreading.component.html',
  styleUrls: ['./concurrency-and-multithreading.component.css']
})
export class ConcurrencyAndMultithreadingComponent {
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
 
}
