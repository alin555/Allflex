import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() page = new EventEmitter<string>();
  currentPage = 'overview';
  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: string) {
    this.page.emit(page);
    this.currentPage = page;
  }
}
