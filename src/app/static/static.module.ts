import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { SharedModule } from '@app/shared';
import { CarouselDirective } from './carousel.directive';
import { StaticRoutingModule } from './static-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselContext } from './projects/carousel.directive';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
    CarouselModule.forRoot()
  ],
  declarations: [OverviewComponent, ProjectsComponent, CarouselDirective]

})
export class StaticModule {}
