import { Routes } from '@angular/router';
import { homeComponent } from './home.component';
import { formComponent } from './form.component';

export const routes: Routes = [
    {path: '', component: homeComponent},
    {path: 'form', component: formComponent}
];
