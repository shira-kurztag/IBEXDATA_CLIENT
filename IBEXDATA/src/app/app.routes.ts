import { Routes } from '@angular/router';
import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';
import { AddContractorComponent } from './components/list-contractors/add-contractor/add-contractor.component';

export const routes: Routes = [


    { path: '', component: ListContractorsComponent }, // דף הבית
    { path: 'AddContractors', component: AddContractorComponent }, // עמוד התחברות
];
