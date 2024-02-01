import { Component } from '@angular/core';

@Component({
  selector: 'app-regular-expressions',
  templateUrl: './regular-expressions.component.html',
  styleUrls: ['./regular-expressions.component.css']
})
export class RegularExpressionsComponent {
  pattern = `pattern = r"(\d{3})-(\d{2})"
  text = "123-45"
  match = re.search(pattern, text)
  if match:
  area_code = match.group(1)
  local_code = match.group(2)`;

  n_occurrences = `{n}`;

  n_and_m_occurrences = `{n, m}`;

}
