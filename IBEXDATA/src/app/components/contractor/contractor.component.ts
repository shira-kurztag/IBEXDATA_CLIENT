import { Component, inject, Input, OnInit } from '@angular/core';
import { Contractors } from '../../models/Contractors.model';
import { ContractorService } from '../../services/contractor.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contractor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css'],
})
export class ContractorComponent implements OnInit {
  @Input() contractorId!: number;
  contractor?: Contractors;
  editMode: boolean = false;
  contractorForm!: FormGroup;

  constructor(private route: ActivatedRoute,private fb: FormBuilder) {}

  srvContractor: ContractorService = inject(ContractorService);

  ngOnInit(): void {
    this.contractorId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadContractor();
  }

  loadContractor() {
    this.srvContractor.getContractorById(this.contractorId).subscribe((contractor) => {
      this.contractor = contractor;
      this.initializeForm(); // קריאה לפונקציה לאתחול הטופס
    });
  }

  initializeForm() {
    this.contractorForm = this.fb.group({
      contractorName: [this.contractor?.contractorName, Validators.required],
      contractorIdentity: [this.contractor?.contractorIdentity],
      managementName: [this.contractor?.managementName],
      managementId: [this.contractor?.managementId],
      address: [this.contractor?.address],
      certificateConsortium: [this.contractor?.certificateConsortium],
      form50: [this.contractor?.form50]
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.initializeForm(); // אתחול הטופס מחדש עם הנתונים הקיימים בעת יציאה ממצב עריכה
    }
  }

  onSave() {
    if (this.contractorForm.valid) {
      const updatedContractor: Contractors = {
        ...this.contractor,
        ...this.contractorForm.value
      };
      this.srvContractor.updateContractor(updatedContractor).subscribe(() => {
        this.contractor = updatedContractor;
        this.editMode = false;
       
      });
    }
  }
}