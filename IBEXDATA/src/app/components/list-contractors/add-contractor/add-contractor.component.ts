import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ContractorService } from '../../../services/contractor.service';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-add-contractor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    RouterModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent {
  contractorForm: FormGroup;
  srvContractor: ContractorService = inject(ContractorService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.contractorForm = this.fb.group({
      contractorId: [0],
      contractorIdentity: ['', [Validators.required, Validators.pattern('^\\d{9}$')]],
      contractorName: ['', Validators.required],
      managementName: [''],
      managementId: [null, [Validators.pattern('^\\d{9}$')]],
      address: [''],
      certificateConsortium: [''],
      form50: [''],
      insertDate: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.contractorForm.valid) {
      this.srvContractor.addContractor(this.contractorForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  toggleEditMode() {
    this.router.navigate(['/']);
  }
}