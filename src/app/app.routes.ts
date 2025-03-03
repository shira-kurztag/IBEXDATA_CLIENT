import { Routes } from '@angular/router';
import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';
import { ContractorComponent } from './components/contractor/contractor.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';

export const routes: Routes = [ {path: 'list-contractors', component: ListContractorsComponent},
    { path: '', component: ListContractorsComponent },
  { path: 'contractor/:id', component: ContractorComponent },
  
  { path: 'AddContractors', component: AddContractorComponent, canDeactivate: [UnsavedChangesGuard] }, // עמוד התחברות
];
