import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContractorService } from '../../services/contractor.service';
import { HttpClientModule } from '@angular/common/http';


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
    CardModule,
    HttpClientModule
  ],
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css'],
  providers: [ContractorService] // ודא שהשירות מסופק כאן
})
export class AddContractorComponent {
  contractorForm: FormGroup;
  srvContractor: ContractorService = inject(ContractorService);
  errorMessage: string | null = null;
  isSaved: boolean = false;
  isCanceling: boolean = false;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.contractorForm = this.fb.group({
      contractorId: [0],
      contractorIdentity: [''],
      contractorName: [''],
      managementName: [''],
      managementId: [null, [this.validateId.bind(this)]],
      address: [''],
      certificateConsortium: [''],
      form50: [''],
      insertDate: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.contractorForm.valid) {
      this.srvContractor.addContractor(this.contractorForm.value).subscribe({
        next: () => {
          this.isSaved = true;
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error adding contractor:', error);
          this.errorMessage = 'Failed to add contractor. Please try again later.';
        }
      });
    }
  }

  cancel() {
    this.isCanceling = true;
    if (this.contractorForm.dirty && !this.isSaved) {
      const confirmCancel = confirm('האם אתה בטוח שברצונך לצאת מבלי לשמור את הנתונים?');
      if (confirmCancel) {
        this.router.navigate(['/']);
      } else {
        this.isCanceling = false;
      }
    } else {
      this.router.navigate(['/']);
    }
  }
  ///בדיקת ת.ז
  validateId(control: AbstractControl): ValidationErrors | null {
    const isValid = this.srvContractor.isIsraeliIdNumber(control.value);
    return isValid ? null : { invalidId: true };
  }
}  