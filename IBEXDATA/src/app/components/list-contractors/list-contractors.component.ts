import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContractorComponent } from '../list-contractors/add-contractor/add-contractor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contractors',
  standalone: true,
  imports: [CommonModule, AddContractorComponent],
  templateUrl: './list-contractors.component.html',
  styleUrls: ['./list-contractors.component.css']
})
export class ListContractorsComponent {
  constructor( private router:Router){}

  showAddContractorComponent: boolean = false;

  toggleAddContractorComponent() {
    this.router.navigate(['/AddContractors'])
  }

  // onFormSaved() {
  //   this.showAddContractorComponent = false;
  // }
}