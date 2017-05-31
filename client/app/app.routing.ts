import { Routes, RouterModule } from '@angular/router';

import { FeatureManagementComponent } from './components/featureManagement/feature-management.component';

const appRoutes: Routes = [ 
  {
    path: '',
    redirectTo: '/offer-management',
    pathMatch: 'full'
  },
  {    
    path: 'offer-management',
    component: FeatureManagementComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });

