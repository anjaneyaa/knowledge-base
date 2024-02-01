import { Component } from '@angular/core';

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.component.html',
  styleUrls: ['./data-structures.component.css']
})
export class DataStructuresComponent {
  users = `users = {
    'user1': {'name': 'Alice', 'age': 25},
    'user2': {'name': 'Bob', 'age': 30}
    }
    age = users['user1']['age']`;
    frozenset = `
my_set = {1, 2, 3}
my_frozenset = frozenset(my_set)
  `;
  my_sets = `
  my_set = {1, 2, 3}
  my_set.add(4)
  my_set.remove(2)`;
  my_dicts = `
  my_dict = {'name': 'Alice', 'age': 25}
  my_dict['city'] = 'New York'
  age = my_dict['age']
  `;
  my_set = `my_set = {1, 2, 3}`;
  my_dict = `my_dict = {'name': 'Alice', 'age': 25}`;
}
