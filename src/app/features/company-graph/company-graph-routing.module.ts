import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyGraphIndexComponent } from './components/company-graph-index/company-graph-index.component';
const routes: Routes = [
  {
    path: 'graph',
    component: CompanyGraphIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyGraphRoutingModule { }
