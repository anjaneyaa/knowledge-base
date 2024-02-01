import { Component } from '@angular/core';

@Component({
  selector: 'app-metaclasses',
  templateUrl: './metaclasses.component.html',
  styleUrls: ['./metaclasses.component.css']
})
export class MetaclassesComponent {
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
}
