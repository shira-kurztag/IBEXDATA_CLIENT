<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContractorComponent } from '../list-contractors/add-contractor/add-contractor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contractors',
  standalone: true,
  imports: [CommonModule, AddContractorComponent],
=======
import { Component, OnInit } from '@angular/core';
import { Contractors } from '../../models/Contractors.model';
import { ContractorService } from '../../services/contractor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
@Component({
  selector: 'app-list-contractors',
  standalone: true,
  imports: [CommonModule, ListboxModule],
>>>>>>> fd57b28ba6cd15c2b9d906f312f9584f10f69108
  templateUrl: './list-contractors.component.html',
  styleUrls: ['./list-contractors.component.css']
})
<<<<<<< HEAD
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
=======
export class ListContractorsComponent implements OnInit{
  contractors: Contractors[] = [];
  selectedContractor: Contractors | undefined;

  constructor(private contractorService: ContractorService, private router: Router) {}

  ngOnInit(): void {
    this.contractorService.getContractors().subscribe(contractors => {
      this.contractors = contractors;
    });
  }

  onSelectContractor(contractor: Contractors): void {
    this.selectedContractor = contractor;
    this.router.navigate(['/contractor', contractor.contractorId]);
  }
}
>>>>>>> fd57b28ba6cd15c2b9d906f312f9584f10f69108
