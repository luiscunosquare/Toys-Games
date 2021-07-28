import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import { IToyGame } from '../models/i-toygame';

@Injectable({
  providedIn: 'root'
})
export class ToygameDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(data?: IToyGame): Observable<boolean>{
    return this.dialog.open(ExampleDialogComponent, {
      disableClose: true,
      width: '500px',
      data
    }).afterClosed();
  }
}
