import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IconService } from './shared/services/icon.service';
import { isResponsive } from '@redux/actions/app/app.actions';
import { AppState } from '@redux/main.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private iconSvc: IconService,
              private breakpointObserver: BreakpointObserver,
              private store: Store<AppState>){}

  ngOnInit(): void{
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe((data: any) => {
      this.store.dispatch( isResponsive({ flag: data.matches }));
    });
  }
}
