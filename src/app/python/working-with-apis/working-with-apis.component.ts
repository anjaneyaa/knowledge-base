import { Component } from '@angular/core';

@Component({
  selector: 'app-working-with-apis',
  templateUrl: './working-with-apis.component.html',
  styleUrls: ['./working-with-apis.component.css']
})
export class WorkingWithApisComponent {
  open_weather_map = `
  import requests

API_KEY = "your_api_key"
city = "New York"
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"

response = requests.get(url)
data = response.json()

if response.status_code == 200:
weather = data['weather'][0]['description']
temperature = data['main']['temp']
print(f"Weather in {city}: {weather}")
print(f"Temperature: {temperature} K")
else:
print("Error:", data['message'])
  `;
}
