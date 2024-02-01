import { Component } from '@angular/core';

@Component({
  selector: 'app-data-science-and-analysis',
  templateUrl: './data-science-and-analysis.component.html',
  styleUrls: ['./data-science-and-analysis.component.css']
})
export class DataScienceAndAnalysisComponent {
  data_analysis = `
  import numpy as np
  import pandas as pd
  
  # Create a DataFrame
  data = {'Name': ['Alice', 'Bob', 'Charlie'],
      'Age': [25, 30, 28]}
  df = pd.DataFrame(data)
  
  # Perform operations on the DataFrame
  average_age = df['Age'].mean()
  `;
}
