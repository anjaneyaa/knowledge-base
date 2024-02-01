import { Component } from '@angular/core';

@Component({
  selector: 'app-modules-and-packages',
  templateUrl: './modules-and-packages.component.html',
  styleUrls: ['./modules-and-packages.component.css']
})
export class ModulesAndPackagesComponent {
  my_module = `# my_module.py
  def greet(name):
  return f"Hello, {name}!"
  
  def add(a, b):
  return a + b`;
}
