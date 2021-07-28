import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }



}
