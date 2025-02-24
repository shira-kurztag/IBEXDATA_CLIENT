import { Injectable } from '@angular/core';
import { Contractors } from '../models/Contractors.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

 
  private contractors: Contractors[] = [
    {
      contractorId: 1,
      contractorIdentity: '123456789',
      contractorName: 'John Doe',
      managementName: 'ABC Management',
      managementId: 1,
      address: '123 Main St',
      certificateConsortium: 'Consortium A',
      form50: 'Form 50 A',
      insertDate: new Date('2022-01-01'),
      updateDate: new Date('2022-12-01'),
      contractorStatus: 1
    },
    {
      contractorId: 2,
      contractorIdentity: '203456789',
      contractorName: 'alex mizrachi',
      managementName: 'ABC Management',
      managementId: 1,
      address: '45 ss St',
      certificateConsortium: 'Consortium b',
      form50: 'Form 50 b',
      insertDate: new Date('2025-01-01'),
      updateDate: new Date('2025-02-01'),
      contractorStatus: 1
    },
    {
      contractorId: 3,
      contractorIdentity: '213456789',
      contractorName: ' menachem levi',
      managementName: 'dan Management',
      managementId: 2,
      address: '45 ss St',
      certificateConsortium: 'Consortium b',
      form50: 'Form 50 b',
      insertDate: new Date('2025-01-01'),
      updateDate: new Date('2025-02-01'),
      contractorStatus: 1
    },
    {
      contractorId: 4,
      contractorIdentity: '223456789',
      contractorName: ' yoav choen',
      managementName: 'dan Management',
      managementId: 2,
      address: '45 ss St',
      certificateConsortium: 'Consortium b',
      form50: 'Form 50 b',
      insertDate: new Date('2025-01-01'),
      updateDate: new Date('2025-02-01'),
      contractorStatus: 1
    },
  ];

  getContractors(): Observable<Contractors[]> {
    return of(this.contractors);
  }
  getContractorById(id: number): Observable<Contractors | undefined> {
    const contractor = this.contractors.find(c => c.contractorId === id);
    return of(contractor);
  }

  updateContractor(updatedContractor: Contractors): Observable<void> {
    console.log("updateContractor");
    
    const index = this.contractors.findIndex(c => c.contractorId === updatedContractor.contractorId);
    console.log(index);
    console.log(updatedContractor.contractorIdentity);
    
    if (index !== -1) {
      this.contractors[index] = updatedContractor;
    }
    console.log();
    
    return of();
  }
}
