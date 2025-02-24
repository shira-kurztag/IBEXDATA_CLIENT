import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContractorComponent } from './components/contractor/contractor.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContractorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IBEXDATA';
}
