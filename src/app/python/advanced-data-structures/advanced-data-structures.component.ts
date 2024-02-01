import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-data-structures',
  templateUrl: './advanced-data-structures.component.html',
  styleUrls: ['./advanced-data-structures.component.css']
})
export class AdvancedDataStructuresComponent {
  sets = `set1 = {1, 2, 3}
  set2 = {3, 4, 5}
  
  union = set1 | set2
  intersection = set1 & set2
  difference = set1 - set2`;
}
