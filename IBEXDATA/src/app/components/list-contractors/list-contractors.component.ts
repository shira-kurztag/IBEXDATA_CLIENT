import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContractorComponent } from '../list-contractors/add-contractor/add-contractor.component';

@Component({
  selector: 'app-list-contractors',
  standalone: true,
  imports: [CommonModule, AddContractorComponent],
  templateUrl: './list-contractors.component.html',
  styleUrls: ['./list-contractors.component.css']
})
export class ListContractorsComponent {
  showAddContractorComponent: boolean = false;

  toggleAddContractorComponent() {
    this.showAddContractorComponent = !this.showAddContractorComponent;
  }

  onFormSaved() {
    this.showAddContractorComponent = false;
  }
}