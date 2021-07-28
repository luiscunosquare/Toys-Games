import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from '@services/toast.service';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import { ToygameDialogService } from '../services/toygame-dialog.service';
import { ToygameService } from '../services/toygame.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  constructor(private service: ToastService,
              private toyGameSvc: ToygameService,
              private dialogSvc: ToygameDialogService) { }

  ngOnInit(): void {
    this.getData();
  }

  openDialog(): void{
    this.dialogSvc.openDialog().subscribe((res) => {
      if(res){ this.getData(); }
    });
  }

  getData(): void{
    this.toyGameSvc.getToysGames();
  }

}
