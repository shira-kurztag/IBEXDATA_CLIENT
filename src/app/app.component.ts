import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';
import { ContractorComponent } from './components/contractor/contractor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ibexdata';
}
