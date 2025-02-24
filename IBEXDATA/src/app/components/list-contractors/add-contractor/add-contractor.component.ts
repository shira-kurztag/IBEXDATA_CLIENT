import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../../services/contractor.service';

@Component({
  selector: 'app-add-contractor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent {
  contractorForm: FormGroup;
    srvContractor: ContractorService = inject(ContractorService);
  

  constructor(private fb: FormBuilder) {
    this.contractorForm = this.fb.group({
      contractorId:[0],
      contractorName: ['', Validators.required],
      managementName: [''],
      managementId: [null],
      address: [''],
      certificateConsortium: [''],
      form50: [''],



    });
  }

  onSubmit() {
    console.log("yyyyy");
    if (this.contractorForm.valid) {
      console.log("gggggg");
      
      console.log(this.contractorForm.value);
      this.srvContractor.addContractor(this.contractorForm.value).subscribe(() => {
       console.log("hhhh");
       
      });
      
      // Add logic to save contractor
    }
  }
}