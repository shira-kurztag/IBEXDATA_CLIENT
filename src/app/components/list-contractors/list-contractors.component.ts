import { Component, OnInit } from '@angular/core';
import { ContractorService } from '../../services/contractor.service';
import { Contractors } from '../../models/Contractors.model';
import { Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
///

import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-list-contractors',
  templateUrl: './list-contractors.component.html',
  styleUrls: ['./list-contractors.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, CardModule, PanelModule, HttpClientModule,InputTextModule],
  providers: [ContractorService] // ודא שהשירות מסופק כאן
})
export class ListContractorsComponent implements OnInit {
  value: string | undefined;
  contractors: Contractors[] = [];
  selectedContractor: Contractors | null = null;

  constructor(private contractorService: ContractorService, private router: Router) {}

  ngOnInit(): void {
    this.contractorService.getContractors().subscribe(contractors => {
      this.contractors = contractors;
    });
    
    
  }

  onSelectContractor(event: any): void {
    this.selectedContractor = event.value;
    if (this.selectedContractor) {
      this.router.navigate(['/contractor', this.selectedContractor.contractorId]);
    }
  }
  toggleAddContractorComponent() {
  

    this.router.navigate(['/AddContractors'])

 
    

  }
  SearChcontractorProject(){
    
  }
}