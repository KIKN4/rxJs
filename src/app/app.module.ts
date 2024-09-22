import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MergeComponent } from './merge/merge.component';
import { FormComponent } from './shared/form/form.component';
import { TableComponent } from './shared/table/table.component';
import { HeaderComponent } from './header/header.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ForkJoinService } from './shared/services/fork-join.service';
import { StartWithComponent } from './start-with/start-with.component';
import { FromEventComponent } from './from-event/from-event.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './filter/filter.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { MergeMapService } from './shared/services/merge-map.service';

@NgModule({
  declarations: [
    AppComponent,
    CombineLatestComponent,
    ConcatComponent,
    MergeComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    ForkJoinComponent,
    StartWithComponent,
    FromEventComponent,
    CatchErrorComponent,
    DistinctUntilChangedComponent,
    FilterComponent,
    MergeMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ForkJoinService, MergeMapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
