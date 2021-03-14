import { Component, ElementRef, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() page = 'start';

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.elRef.nativeElement.ownerDocument.body.style.backgroundSize = (this.page == 'start' || this.page == 'overview' ||  this.page == 'remote') ? '100% 90%' : '100% 90%';
  }

  changePage(page: string) {
    this.page = page;
    this.elRef.nativeElement.ownerDocument.body.style.backgroundSize = (this.page == 'start' || this.page == 'overview' ||  this.page == 'remote') ? '100% 90%' : '100% 90%';
  }
}
