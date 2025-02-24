import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContractorComponent } from './components/contractor/contractor.component';
import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContractorComponent,ListContractorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IBEXDATA';
}
