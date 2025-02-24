import { Routes } from '@angular/router';
import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';
import { ContractorComponent } from './components/contractor/contractor.component';

export const routes: Routes = [

    
    {path: 'list-contractors', component: ListContractorsComponent},
    { path: '', component: ListContractorsComponent },
  { path: 'contractor/:id', component: ContractorComponent }
];
