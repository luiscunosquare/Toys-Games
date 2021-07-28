import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './example-routing.module';
import { SharedComponentsModule } from '@components/shared-components.module';
import { MaterialModule } from '@modules/material.module';

import { ExampleComponent } from './example/example.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { SearcherComponent } from './searcher/searcher.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { ToygameDialogService } from './services/toygame-dialog.service';


@NgModule({
  declarations: [ExampleComponent, ExampleDialogComponent, SearcherComponent, TableComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    MaterialModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [
    ToygameDialogService
  ]
})
export class ExampleModule { }
