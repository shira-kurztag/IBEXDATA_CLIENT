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
  templateUrl: './list-contractors.component.html',
  styleUrl: './list-contractors.component.css'
})
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
