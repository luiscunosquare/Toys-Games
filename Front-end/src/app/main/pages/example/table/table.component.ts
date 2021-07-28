import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TOAST_TYPE } from '@components/toast/i-toast';
import { ToastService } from '@services/toast.service';
import { IToyGame } from '../models/i-toygame';
import { ToygameDialogService } from '../services/toygame-dialog.service';
import { ToygameService } from '../services/toygame.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'description', 'age_restriction', 'company', 'price', 'options'];
  dataSource!: MatTableDataSource<any>;
  searchText = '';
  constructor(private toyGameSvc: ToygameService,
              private toyGameDialogSvc: ToygameDialogService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.setData([]);
    this.toyGameSvc.$subject.subscribe((data) => {
      this.setData(data);
    });
  }

  openDialog(data: IToyGame): void{
    this.toyGameDialogSvc.openDialog(data);
  }

  deleteToyGame(toygame: IToyGame): void{
    this.toyGameSvc.deleteToyGame(toygame).subscribe(() => {
      this.toastService.addToast({
        title: 'Item was deleted successfully',
        type: TOAST_TYPE.SUCCESS,
        isShowed: true,
        timeOut: 5000,
        resource: null
      });
      this.toyGameSvc.getToysGames();
    });
  }

  setData(data: IToyGame[]): void{
    this.dataSource = new MatTableDataSource<IToyGame[]>();
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchText = filterValue.trim().toLocaleLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
