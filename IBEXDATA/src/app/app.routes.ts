import { Routes } from '@angular/router';
import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';
<<<<<<< HEAD
import { AddContractorComponent } from './components/list-contractors/add-contractor/add-contractor.component';

export const routes: Routes = [


    { path: '', component: ListContractorsComponent }, // דף הבית
    { path: 'AddContractors', component: AddContractorComponent }, // עמוד התחברות
=======
import { ContractorComponent } from './components/contractor/contractor.component';

export const routes: Routes = [

    
    {path: 'list-contractors', component: ListContractorsComponent},
    { path: '', component: ListContractorsComponent },
  { path: 'contractor/:id', component: ContractorComponent }
>>>>>>> fd57b28ba6cd15c2b9d906f312f9584f10f69108
];
