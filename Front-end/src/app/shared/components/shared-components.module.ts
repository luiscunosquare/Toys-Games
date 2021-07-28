import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material.module';

import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { SidenavComponent } from '@components/sidenav/sidenav.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { ListFilesComponent } from '@components/files/list-files/list-files.component';
import { LoadFilesComponent } from '@components/files/load-files/load-files.component';
import { GetFilesComponent } from '@components/files/get-files/get-files.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    LoadingComponent,
    ListFilesComponent,
    LoadFilesComponent,
    GetFilesComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    LoadingComponent,
    ListFilesComponent,
    LoadFilesComponent,
    GetFilesComponent,
    ToastComponent
  ]
})
export class SharedComponentsModule { }
