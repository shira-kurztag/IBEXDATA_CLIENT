import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddContractorComponent } from '../app/components/add-contractor/add-contractor.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<AddContractorComponent> {
    canDeactivate(component: AddContractorComponent): boolean {
        return !component.contractorForm.dirty || component.isSaved || component.isCanceling;
      }
}