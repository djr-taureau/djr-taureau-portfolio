import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CarouselDirective } from './carousel.directive';
import { StaticRoutingModule } from './static-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [OverviewComponent, ProjectsComponent, CarouselDirective]

})
export class StaticModule {}
