import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { StartWithComponent } from './start-with/start-with.component';
import { FromEventComponent } from './from-event/from-event.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './filter/filter.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

const routes: Routes = [
  { path: 'combineLatest', component: CombineLatestComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'forkJoin', component: ForkJoinComponent },
  { path: 'startWith', component: StartWithComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'catchError', component: CatchErrorComponent },
  { path: 'distinctUntilChanged', component: DistinctUntilChangedComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'mergeMap', component: MergeMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
