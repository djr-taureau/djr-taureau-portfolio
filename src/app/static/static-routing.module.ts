import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent, data: { title: 'overview' } },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'projects' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
